const selectors = {
  loginButton: '#header [href="/login"',
  deleteAccountButton: '[href="/delete_account"]',
  logoutButton: '[href="/logout"]',
  contactUsButton: '[href="/contact_us"]',
  testcasesButtuon: '.navbar-nav [href="/test_cases"]',
  productsButton: '[href="/products"]',
};

class HeaderPage {
  goToLogin() {
    cy.get(selectors.loginButton).click();
  }
  LogOut() {
    cy.get(selectors.logoutButton).click();
  }
  goToContactUs() {
    cy.get(selectors.contactUsButton).click();
  }
  goToTestcasesPage() {
    cy.get(selectors.testcasesButtuon).click();
  }
  goToProductsPage() {
    cy.get(selectors.productsButton).click();
  }
}

export const headerPage = new HeaderPage();
