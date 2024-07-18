

const { readexcel } = require('../support/readexcel');
describe('template spec', () => {
  let data = [
    "Nimrah",
    "Testing",
    "13 week pos forecast comp calc",
    "Tableau report"
  ]

  before(() => {
    cy.fixture("example").then((filedata) => {

      data = filedata.Ask;
    })


  })
  beforeEach(() => {
    cy.visit("https://algocore-uat.algoplus.com/_admin/Login")
    cy.get('#mat-input-0').clear().type('nimrah.anwar@algo.com')
    cy.get(' #mat-input-1').clear().type('Algo@1234')
    cy.get('#login').click()
    cy.get(':nth-child(1) > .mat-focus-indicator').click();
    cy.fixture("example").then((filedata) => {

      cy.log(filedata.Ask);
    })
  }
  )

  data.forEach((value, index) => {
    it(`Ask: ${value}`, () => {
      const panel = `"Panel - 0${index}"`
      cy.wait(5000)
      cy.get('#mat-input-2').type(`${value}{enter}`)
      cy.wait(15000)
      cy.get(`[id="Panel - 00"] app-dynamic-message`).should('not.exist');
    })



  }


  )


  // it('Ask: "Nimrah"', () => {
  //   cy.wait(5000)
  //   cy.get('#mat-input-2').type('Nimrah{enter}')
  //   cy.wait(15000)
  //   cy.get('[id="Panel - 00"] app-dynamic-message').should('not.exist');
  // })
  // it('Ask: "13 week pos forecast comp calc"', () => {
  //   cy.wait(5000)
  //   cy.get('#mat-input-2').type('13 week pos forecast comp calc{enter}')
  //   cy.wait(15000)
  //   cy.get('[id="Panel - 00"] app-dynamic-message').should('not.exist');
  // })
})

