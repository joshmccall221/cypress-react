# cypress-react

# VS Code

[Developing inside a Container ](https://code.visualstudio.com/docs/devcontainers/containers)

```
(ctrl + shift + P) Dev Containers: Open Folder in Container
```
```
bash chrome.sh
bash start.sh
```

E2E

Unit
```
// https://docs.cypress.io/guides/component-testing/react/overview#React-with-Vite
// cypress.config.ts
 component: {
   devServer: {
     framework: 'react',
     bundler: 'vite'
   }
 }
```