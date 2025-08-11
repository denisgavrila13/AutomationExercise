class CommonAssertion {
  isElementVisible(text) {
    cy.contains(text).should('be.visible');
  }

  isHomePageVisible() {
    cy.get('[href="/"][style="color: orange;"]').should('be.visible');
  }
  isLoginPageVisible() {
    cy.url().should('include', '/login');
  }
}

export const commonAssertion = new CommonAssertion();
