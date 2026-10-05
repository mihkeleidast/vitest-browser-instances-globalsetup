import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import HelloWorld from './HelloWorld.tsx'
import { page } from 'vitest/browser'

test('renders name', async () => {
  const { getByText } = await render(<HelloWorld name="Vitest" />)
  await expect.element(getByText('Hello Vitest!')).toBeInTheDocument()

  await expect(page).toMatchScreenshot();
})
