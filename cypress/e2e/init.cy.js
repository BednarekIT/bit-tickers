describe('Tickers tickers.json', () => {
  beforeEach(() => {
    cy.request('GET', '/assets/data/tickers.json')
      .as('tickers')
  })

  it('successfully loads tickers', () => {
    cy.get('@tickers').should((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('successfully load ngrx page', () => {
    cy.visit('/ngrx')

    cy.url().should('include', '/ngrx')
    cy.url().should('not.include', '/signal')

    cy.get('.ticker-header h2').should('contain', 'Today')
  })
})
