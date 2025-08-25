const selectors = {
  nameInput: '[data-qa="name"]',
  emailInput: '[data-qa="email"]',
  subjectInput: '[data-qa="subject"]',
  messageInput: '[data-qa="message"]',
  fileInput: '[name="upload_file"]',
  submitButton: '[data-qa="submit-button"]',
  homeButton: '.fa-angle-double-left',
};

class ContactUsPage {
  fillContactUsForm(name, email, subject, message) {
    cy.get(selectors.nameInput).type(name);
    cy.get(selectors.emailInput).type(email);
    cy.get(selectors.subjectInput).type(subject);
    cy.get(selectors.messageInput).type(message);
  }
  uploadFile(file) {
    cy.get(selectors.fileInput).selectFile(file);
  }
  clickSubmitButton() {
    cy.get(selectors.submitButton).click();
  }
  goToHomePage() {
    cy.get(selectors.homeButton).click();
  }
}

export const contactUsPage = new ContactUsPage();
