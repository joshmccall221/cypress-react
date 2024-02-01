
describe('template spec', () => {

  it('init', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.contains('')
  })
  it('init', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('h1').contains('vite')
  })
})