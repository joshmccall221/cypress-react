
describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('init', () => { })

  it('vite appears on the page', () => {
    cy.get('h1').contains('Vite')
    cy.contains('Vite')
  })

  it('counter button is clickable', () => {
    cy.contains('count is 0')
    cy.get('button').click()
    cy.contains('count is 1')
  })
})

// //App.tsx
// const [increment, setIncrement] = useState(1)

// React.useEffect(() => {
//   fetch('/getCountInterval.json')
//     .then(results => results.json())
//     .then(data => { setIncrement(data) })
// }, [])

// <button onClick={() => setCount((count) => count + increment)}>

describe('network', () => {
  beforeEach(() => {
    cy.intercept('GET', '/getCountInterval.json', { body: Math.floor(Math.random() * 10) }).as('getCountInterval')
    cy.visit('http://127.0.0.1:5173/')
  })


  it('button incements counter based on api call', () => {
    cy.wait('@getCountInterval').then((interception) => {
      const increment = interception.response.body

      cy.contains('count is 0')
      cy.get('button').click()
      cy.contains(`count is ${increment}`)
      cy.get('button').click()
      cy.contains(`count is ${2 * increment}`)
    })
  })
})

// https://docs.cypress.io/guides/component-testing/react/overview#React-with-Vite
// cypress.config.ts
// component: {
//   devServer: {
//     framework: 'react',
//     bundler: 'vite'
//   }
// }

// beforeEach(() => {
//       cy.intercept('GET', '/getCountInterval.json', { body: Math.floor(Math.random() * 10) }).as('getCountInterval')
// })
// it('renders', () => {
//   // see: https://on.cypress.io/mounting-react
//   cy.mount(<App />)
//   cy.wait('@getCountInterval').then((interception) => {
//     const increment = interception.response.body

//     cy.contains('count is 0')
//     cy.get('button').click()
//     cy.contains(`count is ${increment}`)
//     cy.get('button').click()
//     cy.contains(`count is ${2 * increment}`)
//   })
// })