# cypress-network-error

## Setup
```console
npm install
```

### Start Tests
```console
# Terminal 1
npm run serve

# Terminal 2
npx cypress open
```

When running demo.cy.ts, the test fails due to an Axios Network Error (see the browser console). If it does not fail on the first run, run the test again.

When running the same with `npx cypress run`, it works.

Also when removing the lines 66-91 in *src/common/api-abstract.ts* (Axios interceptor), it works.
