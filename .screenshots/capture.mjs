import { chromium } from 'playwright'

const pages = [
  ['http://localhost:3000/en', 'home-scrolled.png'],
  ['http://localhost:3000/en/work', 'work-scrolled.png'],
  ['http://localhost:3000/en/about', 'about-scrolled.png'],
  ['http://localhost:3000/en/contact', 'contact-scrolled.png'],
]

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

for (const [url, file] of pages) {
  await page.goto(url, { waitUntil: 'networkidle' })
  // scroll through the page so whileInView animations fire
  await page.evaluate(async () => {
    const h = document.body.scrollHeight
    for (let y = 0; y <= h; y += 700) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 180))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(1200)
  await page.screenshot({ path: `C:/Users/dcind/Desktop/aethos-web-main/.screenshots/${file}`, fullPage: true })
  console.log('captured', file)
}

await browser.close()
