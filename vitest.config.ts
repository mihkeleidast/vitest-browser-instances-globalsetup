import { configDefaults, defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    reporters: ['html', ...configDefaults.reporters],
    watch: false,
    retry: 3,
    globalSetup: './global-setup.ts',
    browser: {
      enabled: true,
      ui: false,
      headless: true,
      provider: playwright(),
      instances: [
        { browser: 'chromium' },
      ],
    },
    projects: [
      {
        test: {
          name: 'instance-1'
        }
      },
      {
        test: {
          name: 'instance-2'
        }
      }
    ]
  },
})
