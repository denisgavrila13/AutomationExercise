const selectors = {
  emailInput: '[data-qa="login-email"]',
  passwordInput: '[data-qa="login-password"]',
  submitLogin: '[data-qa="login-button"]',
};

class LoginPage {
  insertEmailAddress(email) {
    cy.get(selectors.emailInput).type(email);
  }

  insertPassword(password) {
    cy.get(selectors.passwordInput).type(password);
  }

  submitLogin() {
    cy.get(selectors.submitLogin).click();
  }
}

export const loginPage = new LoginPage();
