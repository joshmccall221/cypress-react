
# https://docs.cypress.io/guides/getting-started/installing-cypress
# https://docs.cypress.io/guides/tooling/typescript-support
# https://example.cypress.io/

cd my-app
yarn add -D cypress typescript  

mkdir -p cypress/e2e
cp ../tsconfig.json ./cypress/tsconfig.json
cp ../vite.cy.ts ./cypress/e2e/vite.cy.ts

yarn run cypress open