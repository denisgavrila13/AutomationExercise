import { commonAssertion } from '../support/pageObjects/commonAssertions';
import { footerPage } from '../support/pageObjects/footerPage';
import { headerPage } from '../support/pageObjects/headerPage';
import { productPage } from '../support/pageObjects/productPage';
import { selectors } from '../support/pageObjects/productPage';

describe('test header feature', () => {
  beforeEach(() => {
    cy.fixture('userDetails').as('users');
  });

  it('Verify test cases page', () => {
    cy.visitHomePage();
    headerPage.goToTestcasesPage();
    commonAssertion.isUrlVisible('test_cases');
  });

  it('Verify All Products and product detail page', () => {
    cy.visitHomePage();
    headerPage.goToProductsPage();
    commonAssertion.isUrlVisible('products');
    productPage.isProductListVisible();
    productPage.goToProductView(selectors.firstProduct);
    commonAssertion.isUrlVisible('product_details');
    productPage.areProductInfoVisible();
  });
  it('Search product', () => {
    cy.visitHomePage();
    commonAssertion.isHomePageVisible();
    headerPage.goToProductsPage();
    commonAssertion.isUrlVisible('products');
    productPage.searchProduct('T-Shirt');
    productPage.submitSearch();
    productPage.checkSearchResultsMatchExpected('T-Shirt');
  });
  it('Verify subscription in home page', () => {
    cy.get('@users').then((user) => {
      cy.visitHomePage();
      commonAssertion.isHomePageVisible();
      cy.scrollToBottom();
      commonAssertion.isElementVisible('Subscription');
      footerPage.submitSubscriptionForm(user.positiveData.email);
      commonAssertion.isElementVisible('You have been successfully subscribed!');
    });
  });
});
