const { faker } = require('@faker-js/faker');
const { registerPage } = require('../support/pageObjects/registerPage');
const { headerPage } = require('../support/pageObjects/headerPage');
const { commonAssertion } = require('../support/pageObjects/commonAssertions');

describe('Register feature', () => {
  const firstName = faker.person.firstName();
  const email = faker.internet.email();
  const password = faker.internet.password();
  const lastName = faker.person.lastName();
  const company = faker.company.name();
  const address = faker.location.streetAddress();
  const address2 = faker.location.streetAddress();
  const state = faker.location.state();
  const city = faker.location.city();
  const zipcode = faker.location.zipCode();
  const mobileNumber = faker.phone.number();

  beforeEach(() => {
    cy.visit('/');
    cy.fixture('userDetails').as('users');
  });

  it('Register user', () => {
    cy.visit('/');
    commonAssertion.isHomePageVisible();
    headerPage.goToLogin();
    commonAssertion.isElementVisible('New User Signup!');
    registerPage.fillBasicInfo('firstName', email);
    registerPage.clickSignUpButton();
    commonAssertion.isElementVisible('Enter Account Information');
    registerPage.insertAccountInformation(password);
    registerPage.selectDateOfBirth('13', 'June', '1985');
    registerPage.fillAddress(firstName, lastName, company, address, address2, state, city, zipcode, mobileNumber);
    registerPage.submitForm();
    commonAssertion.isElementVisible('Account Created!');
    registerPage.clickContinueButton();
    commonAssertion.isElementVisible('Logged in as');
    registerPage.deleteAccount();
    commonAssertion.isElementVisible('Account Deleted!');
  });

  it.only('Register user with existing email', () => {
    cy.get('@users').then((user) => {
      cy.visit('/');
      commonAssertion.isHomePageVisible();
      headerPage.goToLogin();
      registerPage.fillBasicInfo('secondName', user.positiveData.email);
      registerPage.clickSignUpButton();
      commonAssertion.isElementVisible('Email Address already exist!');
    });
  });
});
