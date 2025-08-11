const selectors = {
  loginButton: '#header [href="/login"',
  deleteAccountButton: '[href="/delete_account"]',
  logoutButton: '[href="/logout"]',
};

class HeaderPage {
  goToLogin() {
    cy.get(selectors.loginButton).click();
  }
  LogOut() {
    cy.get(selectors.logoutButton).click();
  }
}

export const headerPage = new HeaderPage();
