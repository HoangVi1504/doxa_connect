## Prerequisite

- [Cypress](https://www.toolsqa.com/cypress/what-is-cypress/)
- Node v12 or above

## How to install
- Clone the repo
- Run `npm install` to install plugin into your local

## Usage
### Run test
- If you want to run all test suite, use `npm run test`
- If you want to run by tags, use `npm run <tag>` such as `npm run login`
- If you want to run specific spec, use `npx cypress run --spec ./cypress/integration/features/sample.feature`

### Run with environment
- Use command `export CYPRESS_ENV=stag;npm run test` for stag
- Use command `export CYPRESS_ENV=dev;npm run test` for dev
