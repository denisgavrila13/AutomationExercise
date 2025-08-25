import { commonAssertion } from '../support/pageObjects/commonAssertions';
import { headerPage } from '../support/pageObjects/headerPage';
import { loginPage } from '../support/pageObjects/loginPage';

describe('Test login feature', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('userDetails').as('users');
  });

  it('Login user with valid email and password', () => {
    cy.get('@users').then((user) => {
      commonAssertion.isHomePageVisible();
      headerPage.goToLogin();
      commonAssertion.isElementVisible('Login to your account');
      loginPage.insertEmailAddress(user.positiveData.email);
      loginPage.insertPassword(user.positiveData.password);
      loginPage.submitLogin();
      commonAssertion.isElementVisible('Logged in as');
    });
  });

  it('Login user with invalid email and password', () => {
    cy.get('@users').then((user) => {
      commonAssertion.isHomePageVisible();
      headerPage.goToLogin();
      commonAssertion.isElementVisible('Login to your account');
      loginPage.insertEmailAddress(user.negativeData.email);
      loginPage.insertPassword(user.negativeData.password);
      loginPage.submitLogin();
      commonAssertion.isElementVisible('Your email or password is incorrect!');
    });
  });

  it('Logout user', () => {
    cy.get('@users').then((user) => {
      commonAssertion.isHomePageVisible();
      headerPage.goToLogin();
      commonAssertion.isElementVisible('Login to your account');
      loginPage.insertEmailAddress(user.positiveData.email);
      loginPage.insertPassword(user.positiveData.password);
      loginPage.submitLogin();
      commonAssertion.isElementVisible('Logged in as');
      headerPage.LogOut();
      commonAssertion.isUrlVisible('login');
    });
  });
});
