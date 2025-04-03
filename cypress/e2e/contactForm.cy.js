import { contactFormLocators as loc } from '../support/locators';

describe('Contact form flow', () => {
  before(() => {
    cy.visit('/');
  });

  it('Loads the homepage and displays the Qubika logo', () => {
    cy.url().should('include', 'qubika.com');
    cy.get(loc.logo).should('be.visible');
  });

  it('Opens the Contact Form and confirms that all required fields are visible', () => {
    cy.get(loc.contactUsBtn).click({ force: true });
    cy.get(loc.firstNameField).should('be.visible');
    cy.get(loc.lastNameField).should('be.visible');
    cy.get(loc.emailField).should('be.visible');
    cy.get(loc.submitBtn).should('be.visible');
  });

  it('Displays validation errors when submitting the form without filling it', () => {
    cy.get(loc.submitBtn).click();
    cy.get(loc.errorMessage).should('have.length.at.least', 6);
    cy.contains('Please complete all required fields.').should('be.visible');
  });

  it('Keeps only email marked as invalid when name is filled', () => {
    cy.get(loc.firstNameField).type('Test name');
    cy.get(loc.submitBtn).click();
    cy.get(loc.firstNameField).parents(loc.fieldContainer).find(loc.errorMessage).should('not.exist');
    cy.get(loc.emailField).parents(loc.fieldContainer).find(loc.errorMessage).should('exist');
  });

  it('Closes the form and confirms it is no longer visible', () => {
    cy.get(loc.closeBtn).first().click({ force: true });
    cy.get(loc.firstNameField).should('be.not.visible');
  });

  it('Reopens the form and shows previously entered name with other fields still invalid', () => {
    cy.get(loc.contactUsBtn).click({ force: true });
    cy.get(loc.firstNameField).should('have.value', 'Test name');
    cy.get(loc.emailField).parents(loc.fieldContainer).find(loc.errorMessage).should('exist');
  });
});
