import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';

const BASE = 'http://localhost:3002';
const OUT  = 'C:\\Users\\dcind\\Desktop\\aethos-web-main\\screenshots';
mkdirSync(OUT, { recursive: true });

const PAGES = [
  { path: '/en',          name: 'home'     },
  { path: '/en/services', name: 'services' },
  { path: '/en/work',     name: 'work'     },
  { path: '/en/about',    name: 'about'    },
  { path: '/en/contact',  name: 'contact'  },
];

async function capture(page, name, suffix) {
  await page.screenshot({ path: `${OUT}\\${name}-${suffix}.png`, fullPage: false });
}

(async () => {
  const browser = await chromium.launch();
  const errors = [];

  for (const { path, name } of PAGES) {
    // — Light mode desktop —
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const pg = await ctx.newPage();
    pg.on('console', m => { if (m.type() === 'error') errors.push(`[${name}] ${m.text()}`); });
    pg.on('pageerror', e => errors.push(`[${name}] PAGE ERROR: ${e.message}`));
    await pg.goto(BASE + path, { waitUntil: 'networkidle' });
    await capture(pg, name, 'light');

    // — Dark mode —
    await pg.evaluate(() => {
      document.documentElement.classList.add('dark');
    });
    await pg.waitForTimeout(300);
    await capture(pg, name, 'dark');

    // — Mobile light —
    await ctx.close();
    const mCtx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const mPg = await mCtx.newPage();
    await mPg.goto(BASE + path, { waitUntil: 'networkidle' });
    await capture(mPg, name, 'mobile');
    await mCtx.close();
  }

  // — Navbar links check on home —
  const navCtx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const navPg = await navCtx.newPage();
  await navPg.goto(BASE + '/en', { waitUntil: 'networkidle' });
  const navLinks = await navPg.$$eval('nav a', links => links.map(a => ({ text: a.textContent?.trim(), href: a.getAttribute('href') })));
  console.log('NAV LINKS:', JSON.stringify(navLinks));

  // — Language selector —
  const langBtn = await navPg.$('[aria-label*="lang"], [aria-label*="language"], button:has-text("EN"), button:has-text("ES"), select');
  console.log('LANG SELECTOR found:', !!langBtn);

  // — Theme toggle —
  const themeBtn = await navPg.$('button[aria-label*="theme"], button[aria-label*="dark"], button[aria-label*="light"], button:has([data-lucide="sun"]), button:has([data-lucide="moon"])');
  console.log('THEME TOGGLE found:', !!themeBtn);
  await navCtx.close();

  await browser.close();

  console.log('\nCONSOLE ERRORS:', errors.length ? errors.join('\n') : 'none');
  console.log('\nScreenshots saved to:', OUT);
})();
