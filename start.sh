# https://vitejs.dev/guide/

yarn create vite my-vue-app --template react-ts

# https://docs.cypress.io/guides/getting-started/installing-cypress
# https://docs.cypress.io/guides/tooling/typescript-support
cd my-vue-app
yarn install
yarn add -D cypress typescript  
mkdir cypress/
cp ../tsconfig.json ./cypress/tsconfig.json
cp ../vite.spec.ts ./cypress/vite.spec.ts
yarn run dev & 
yarn run cypress open
yarn run cypress open