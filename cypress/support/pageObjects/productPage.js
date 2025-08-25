export const selectors = {
  firstProduct: '[href="/product_details/1"]',
  searchInput: '[id="search_product"]',
  searchButton: '[id="submit_search"]',
};

class ProductPage {
  isProductListVisible() {
    cy.get('.single-products').should('have.length.greaterThan', 0);
  }
  goToProductView(product) {
    cy.get(product).click();
  }
  areProductInfoVisible() {
    cy.get('.product-information').should('be.visible');
  }
  searchProduct(text) {
    cy.get(selectors.searchInput).type(text);
  }
  submitSearch() {
    cy.get(selectors.searchButton).click();
  }
  checkSearchResultsMatchExpected(keyword) {
    cy.get('.single-products').each(($el) => {
      const productText = $el.text();
      expect(productText).to.contain(keyword);
    });
  }
}

export const productPage = new ProductPage();
