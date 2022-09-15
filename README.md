## Prerequisite

- Install Node from v17.6.0
- Install JDK (to open report)

## How to install
- Clone the repo
- Run `npm install` to install plugin into your local

## Usage
### Before run
- Run `npm run pretest` to clear data from previous run

### Run test
#### Run non-headless on local
- If you want to run non-headless on local, use `npx cypress open` then choose the spec file you want to run

#### Run headless on local
- If you want to run all test suite, use `npm run test`
- If you want to run by tags, use `npm run <tag>` such as `npm run login`
- If you want to run specific spec, use `npx cypress run --spec ./cypress/integration/features/sample.feature`

### Export and view report after running test
- Run `npm run post-test` to export report
- Run `npm run open-report` to open report