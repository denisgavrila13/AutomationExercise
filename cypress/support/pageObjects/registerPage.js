const selectors = {
  nameInput: '[data-qa="signup-name"]',
  emailInput: '[data-qa="signup-email"]',
  signUpButton: '[data-qa="signup-button"]',
  mrGenderCheck: '#id_gender1',
  mrsGenderCheck: '#id_gender2',
  passwordInput: '[data-qa="password"]',
  daySelect: '#days',
  monthSelect: '#months',
  yearSelect: '#years',
  newsletterCheck: '#newsletter',
  optinCheck: '#optin',
  firstNameInput: '[data-qa="first_name"]',
  lastNameInput: '[data-qa="last_name"]',
  companyInput: '#company',
  address1Input: '#address1',
  address2Input: '#address2',
  countryInput: '#country',
  stateInput: '#state',
  cityInput: '#city',
  zipcodeInput: '#zipcode',
  mobileNumberInput: '#mobile_number',
  createAccountButton: '[data-qa="create-account"]',
  continueButton: '[data-qa="continue-button"]',
  deleteAccount: '[href="/delete_account"]',
};

class RegisterPage {
  fillBasicInfo(name, email) {
    cy.get(selectors.nameInput).type(name);
    cy.get(selectors.emailInput).type(email);
  }

  clickSignUpButton() {
    cy.get(selectors.signUpButton).click();
  }

  insertAccountInformation(password) {
    cy.get(selectors.mrGenderCheck).check();
    cy.get(selectors.passwordInput).type(password);
  }

  selectDateOfBirth(day, month, year) {
    cy.get(selectors.daySelect).select(day);
    cy.get(selectors.monthSelect).select(month);
    cy.get(selectors.yearSelect).select(year);
  }

  fillAddress(firstName, lastName, company, address1, address2, state, city, zipcode, mobileNumber) {
    cy.get(selectors.firstNameInput).type(firstName);
    cy.get(selectors.lastNameInput).type(lastName);
    cy.get(selectors.companyInput).type(company);
    cy.get(selectors.address1Input).type(address1);
    cy.get(selectors.address2Input).type(address2);
    cy.get(selectors.stateInput).type(state);
    cy.get(selectors.cityInput).type(city);
    cy.get(selectors.zipcodeInput).type(zipcode);
    cy.get(selectors.mobileNumberInput).type(mobileNumber);
  }

  submitForm() {
    cy.get(selectors.createAccountButton).click();
  }
  clickContinueButton() {
    cy.get(selectors.continueButton).click();
  }
  deleteAccount() {
    cy.get(selectors.deleteAccount).click();
  }
}

export const registerPage = new RegisterPage();
