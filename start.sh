# https://vitejs.dev/guide/

yarn create vite my-app --template react-ts

# https://docs.cypress.io/guides/getting-started/installing-cypress
# https://docs.cypress.io/guides/tooling/typescript-support

cd ./my-app/
yarn install
yarn add -D cypress typescript 
mkdir -p ./cypress/e2e
pwd
cp ../tsconfig.json ./cypress/tsconfig.json
cp ../examples/* ./cypress/e2e/
yarn run dev & 
yarn run cypress open