import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const dir = 'C:/Users/dcind/Desktop/aethos-web-main/.screenshots'

// 1. Hero mid-animation — trails should be visible
await page.goto('http://localhost:3000/en', { waitUntil: 'commit' })
await page.waitForTimeout(1150)
await page.screenshot({ path: `${dir}/hero-trails.png` })

// 2. Hero finished (logo + wordmark settled)
await page.waitForTimeout(3200)
await page.screenshot({ path: `${dir}/hero-final.png` })

// 3. Scrolled — glass header over light section
await page.evaluate(() => window.scrollTo(0, 1400))
await page.waitForTimeout(900)
await page.screenshot({ path: `${dir}/header-scrolled.png` })

// 4. Services dropdown open (back at top, inverse mode)
await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(600)
await page.getByRole('button', { name: /services/i }).first().click()
await page.waitForTimeout(400)
await page.screenshot({ path: `${dir}/header-dropdown.png` })

// 5. Light page (services) — header in normal mode at top
await page.goto('http://localhost:3000/en/services', { waitUntil: 'networkidle' })
await page.waitForTimeout(800)
await page.screenshot({ path: `${dir}/header-light-page.png` })

// 6. Mobile nav open
await page.setViewportSize({ width: 390, height: 844 })
await page.goto('http://localhost:3000/en', { waitUntil: 'networkidle' })
await page.waitForTimeout(1000)
await page.getByRole('button', { name: /menu/i }).click()
await page.waitForTimeout(500)
await page.screenshot({ path: `${dir}/header-mobile.png` })

await browser.close()
console.log('done')
