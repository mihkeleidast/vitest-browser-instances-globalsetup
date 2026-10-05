# vitest-browser-instances-globalsetup repro

Example project with vitest browser mode visual regression testing set up, where:
- multiple instances have been set up via `browser.instances`
- globalSetup is used

When running tests via `npm run test:browser`, the global setup (and teardown) is run multiple times - once for root, and once for every instance.

This does not happen when using test projects instead, and since browser instances are converted into test projects internally, it should also not happen with this config.