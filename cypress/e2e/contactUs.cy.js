import { commonAssertion } from '../support/pageObjects/commonAssertions';
import { contactUsPage } from '../support/pageObjects/contactUsPage';
import { headerPage } from '../support/pageObjects/headerPage';
import { email, firstName } from '../support/Utils';

describe('Test contactUs feature', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('ContactUs form', () => {
    commonAssertion.isHomePageVisible();
    headerPage.goToContactUs();
    commonAssertion.isElementVisible('Get In Touch');
    contactUsPage.fillContactUsForm(firstName, email, 'my t-Shirt is dirty', 'I want a refund');
    contactUsPage.uploadFile('cypress/fixtures/dirty t-shirt.jpg');
    contactUsPage.clickSubmitButton();
    commonAssertion.isElementVisible('Success! Your details have been submitted successfully.');
    cy.url().should('contain', 'contact_us');
    contactUsPage.goToHomePage();
    cy.url().should('eq', 'https://automationexercise.com/');
  });
});
