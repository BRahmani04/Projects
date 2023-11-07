/// <reference types="cypress" />

describe('Project 01', () => {

    it('Test Case 01 - Validate the Contact Us information', () => {
 
     cy.visit('https://techglobal-training.com/frontend/project-1')
 
     const verifiy = ['Contact Us', '2860 S River Rd Suite 480, Des Plaines, IL 60018', 'info@techglobalschool.com', '(773) 257-3010']
 
     cy.get('.mb-5').children().each(($el, index) => {
         cy.wrap($el).should('have.text', verifiy[index])
     })
 
    })
     
    it('Test Case 02 - Validate the Full name input box', () => {
 
     cy.visit('https://techglobal-training.com/frontend/project-1');
 
         cy.get(':nth-child(1) > .control > .input').should('be.visible').and('have.attr', 'required');
         cy.get('[for^=name]').should('have.text', 'Full name *');
         cy.get(':nth-child(1) > .control > .input').should('have.attr', 'placeholder', 'Enter your full name');
 
 
    });
 
    it.only('Test Case 03 - Validate the Gender radio button', () => {
 
     cy.visit('https://techglobal-training.com/frontend/project-1');
 
     
     cy.get('.control > .label').should('have.text', 'Gender *').and('not.have.attr', 'required')
     const genders = ['Male', 'Female', 'Prefer not to disclose']
     cy.get('.control >  .radio').each(($el,index) => {
         cy.wrap($el).should('have.text', genders[index]).and('not.be.selected')
     })
 
     cy.get(':nth-child(2) > .mr-1').click()
     cy.get(':nth-child(3) > .mr-1').should('not.be.checked')
     cy.get(':nth-child(4) > .mr-1').should('not.be.checked')
 
     cy.get(':nth-child(3) > .mr-1').click()
     cy.get(':nth-child(2) > .mr-1').should('not.be.checked')
     cy.get(':nth-child(4) > .mr-1').should('not.be.checked')
    })
 
    it('Test Case 04 - Validate the Address input box', () => {
 
     cy.visit('https://techglobal-training.com/frontend/project-1');
     cy.get(':nth-child(3) > .control > .input').should('be.visible').and('not.have.attr', 'required')
     cy.contains('label', 'Address').should('have.text', 'Address')
     cy.get(':nth-child(3) > .control > .input').should('have.attr', 'placeholder', 'Enter your address');
    })
 
    it('Test Case 05 - Validate the Email input box', () => {
 
     cy.visit('https://techglobal-training.com/frontend/project-1');
     cy.get(':nth-child(4) > .control > .input').should('be.visible').and('have.attr', 'required')
     cy.contains('label', 'Email').should('have.text', 'Email *')
     cy.get(':nth-child(4) > .control > .input').should('have.attr', 'placeholder', 'Enter your email');
    })
 
    it('Test Case 06 - Validate the Phone input box', () => {
 
     cy.visit('https://techglobal-training.com/frontend/project-1');
 
     cy.get(':nth-child(5) > .control > .input').should('be.visible').and('not.have.attr', 'required')
     cy.contains('label', 'Phone').should('have.text', 'Phone')
     cy.get(':nth-child(5) > .control > .input').should('have.attr', 'placeholder', 'Enter your phone number');
    })
 
    it('Test Case 07 - Validate the Message text area', () => {
 
     cy.visit('https://techglobal-training.com/frontend/project-1');
 
     cy.get('.textarea').should('be.visible').and('not.have.attr', 'required')
     cy.contains('label', 'Message').should('have.text', 'Message')
     cy.get('.textarea').should('have.attr', 'placeholder', 'Type your message here...');
 
    })
 
    it('Test Case 08 - Validate the Consent checkbox', () => {
 
     cy.visit('https://techglobal-training.com/frontend/project-1');
 
     cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.')
     cy.get('.checkbox > input').should('have.attr', 'required')
     cy.get('.checkbox > input').click().should('be.checked').click().should('not.be.checked')
 
    })
 
    it('Test Case 09 - Validate the SUBMIT button', () => {
 
     cy.visit('https://techglobal-training.com/frontend/project-1');
 
     cy.get('.control > .button').should('be.visible').and('be.enabled').and('have.text', 'SUBMIT')
 
    })
 
    it('Test Case 10 - Validate the form submission', () => {
 
     cy.visit('https://techglobal-training.com/frontend/project-1');
 
     const info = ['Bajram Rahmani', '111 Chicago Il 60110', 'br@gmail.com', '907-231-1234', 'I like TechGlobal']
 
     cy.get('form > div > div > .input, .textarea').each(($el, index) => {
         cy.wrap($el).type(info[index])
     })
 
     cy.get(':nth-child(2) > .mr-1').click()
 
     cy.get('.checkbox > input').click()
 
     cy.get('.control > .button').realClick()
 
     Cypress.on('uncaught:exception', () => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       })
 
    })
 })
 