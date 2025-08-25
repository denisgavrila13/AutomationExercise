const selectors = {
  emailInput: '[id="susbscribe_email"]',
  subscribeButton: '[id="subscribe"]',
};

class FooterPage {
  submitSubscriptionForm(email) {
    cy.get(selectors.emailInput).type(email);
    cy.get(selectors.subscribeButton).click();
  }
}

export const footerPage = new FooterPage();
