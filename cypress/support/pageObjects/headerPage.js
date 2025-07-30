const selectors = {
  loginButton: '#header [href="/login"',
  deleteAccountButton: '[href="/delete_account"]',
};

class LoginPage {
  goToLogin() {
    cy.get(selectors.loginButton).click();
  }
}

export const loginPage = new LoginPage();
