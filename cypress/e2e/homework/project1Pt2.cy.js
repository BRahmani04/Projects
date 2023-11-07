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
 
    it('Test Case 03 - Validate the Gender radio button', () => {
 
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
})

    const testData = [
        {
            description: 'Validate the Address input box',
            label: 'Address',
            placeholder: 'Enter your address*',
            required: false
        },
        {
            description: 'Validate the Email input box',
            label: 'Email *',
            placeholder: '“Enter your email',
            required: true
        },
        {
            description: 'Validate the Phone input box',
            label: 'Phone',
            placeholder: 'Enter your phone number',
            required: false
        },
        {
            description: 'Validate the Message input box',
            label: 'Message',
            placeholder: 'Type your message here…',
            required: false
        }
    ]
    
    testData.forEach((test, index) => {
    
        it(`Test Case 0${index + 4} - ${test.description}`, () => {
            cy.visit('https://techglobal-training.com/frontend/project-1')
        
            cy.contains('.label', test.label).should('have.text', test.label)
        
            cy.contains('.label', test.label).parent().find('input, textarea').should('be.visible')
            .and('have.attr', test.placeholder)
            .and(test.required ? 'have.attr' : 'not.have.attr', 'required')
        })
    })