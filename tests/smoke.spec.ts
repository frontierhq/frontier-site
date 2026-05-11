import { test, expect } from '@playwright/test'

const pages = [
  '/',
  '/what-we-do',
  '/how-we-work',
  '/case-studies',
  '/partners',
  '/about',
  '/contact',
]

test.describe('site smoke tests', () => {
  for (const path of pages) {
    test(`${path} loads`, async ({ page }) => {
      await page.goto(path)
      await expect(page.locator('body')).toBeVisible()
      await expect(page).toHaveTitle(/Frontier/)
    })
  }
})
