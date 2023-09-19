/**
 * - Register spec
 *   - should display register page correctly
 *   - should display alert when name is empty
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display homepage when register is succeed
 */

const randomEmail = Math.random().toString(36).substring(2, 7)

describe('Register spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3030/register')
  })

  it('should display register page correctly', () => {
    cy.get('input[placeholder="Leonanta Pramudya"]').should('be.visible')
    cy.get('input[placeholder="name@domain.com"]').should('be.visible')
    cy.get('input[placeholder="Your Password"]').should('be.visible')
    cy.get('input[placeholder="Confirm Your Password"]').should('be.visible')
    cy.get('button')
      .contains(/^Register$/)
      .should('be.visible')
  })

  it('should display alert when name is empty', () => {
    cy.get('button')
      .contains(/^Register$/)
      .click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"name" is not allowed to be empty')
    })
  })

  it('should display alert when email is empty', () => {
    cy.get('input[placeholder="Leonanta Pramudya"]').type('Leonanta')
    cy.get('button')
      .contains(/^Register$/)
      .click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty')
    })
  })

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Leonanta Pramudya"]').type('Leonanta')
    cy.get('input[placeholder="name@domain.com"]').type('testingleo@gmail.com')
    cy.get('button')
      .contains(/^Register$/)
      .click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty')
    })
  })

  it('should display alert when password not match', () => {
    cy.get('input[placeholder="Leonanta Pramudya"]').type('Leonanta')
    cy.get('input[placeholder="name@domain.com"]').type(`${randomEmail}@gmail.com`)
    cy.get('input[placeholder="Your Password"]').type('testing1234')
    cy.get('input[placeholder="Confirm Your Password"]').type('testing4321')

    cy.get('button')
      .contains(/^Register$/)
      .click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Your password is not match!')
    })
  })

  it('should display homepage when register is succeed', () => {
    cy.get('input[placeholder="Leonanta Pramudya"]').type('Leonanta')
    cy.get('input[placeholder="name@domain.com"]').type(`${randomEmail}@gmail.com`)
    cy.get('input[placeholder="Your Password"]').type('testing1234')
    cy.get('input[placeholder="Confirm Your Password"]').type('testing1234')

    cy.get('button')
      .contains(/^Register$/)
      .click()

    cy.get('div')
      .contains(/^Discuss$/)
      .should('be.visible')
  })
})
