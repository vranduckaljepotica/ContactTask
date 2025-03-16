describe('Contact List UI Smoke Tests', () => {
    let userData;
    before(() => {
        cy.fixture("user_data").then((user) => {
            userData = user;
        });
    })
    beforeEach(() => {
        cy.visit('/');
    });

    it('User Registration', () => {
        cy.contains('Sign up').click();
        cy.get('#firstName').type('Test');
        cy.get('#lastName').type('User');
        cy.get('#email').type(userData.userEmail);
        cy.get('#password').type(userData.userPassword);
        cy.contains('Submit').click();
        cy.url().should('include', 'contactList');
    });

    it('User Login', () => {
        cy.get('h1').should('contain', 'Contact List App')
        cy.contains('Log In').click();
        cy.get('#email').should('be.visible');
        cy.get('#email').type(userData.userEmail);
        cy.get('#password').should('be.visible')
        cy.get('#password').type(userData.userPassword);
        cy.get('#submit').should('be.visible')
        cy.contains('Submit').click();
        cy.url().should('include', 'contactList');
    });

    it('Add Contact', () => {
        cy.fixture("contact_data").then((contact) => {
            cy.log(contact[0].firstName)
     
        cy.contains('Log In').click();
        cy.get('#email').type(userData.userEmail);
        cy.get('#password').type(userData.userPassword);
        cy.contains('Submit').click();

        contact.forEach((contact, index) => {
            if (index === 0 || index > 0) {
                cy.contains('Add a New Contact').click();
              }
            cy.get('#firstName').type(contact.firstName);
            cy.get('#lastName').type(contact.lastName);
            cy.get('#email').type(contact.email);
            cy.get('#phone').type(contact.phone);
            cy.contains('Submit').click();
        })
        

        cy.contains('John').should('be.visible');
    });
    });

    it('View Contacts', () => {
        cy.contains('Log In').click();
        cy.get('#email').type(userData.userEmail);
        cy.get('#password').type(userData.userPassword);
        cy.contains('Submit').click();
        cy.contains('Contact List').should('be.visible');
    });

    it('View Contact and Edit Contact', () => {
        cy.contains('Log In').click();
        cy.get('#email').type(userData.userEmail);
        cy.get('#password').type(userData.userPassword);
        cy.contains('Submit').click();
        cy.get('#myTable').should('be.visible');
        cy.get('.contactTableBodyRow').should('be.visible');
        cy.get('.contactTableBodyRow').contains('John').click();
        cy.get('#firstName').should('be.visible')
        cy.get('#edit-contact').should('be.visible')
        cy.get('#edit-contact').click()
        cy.get('#street1').should('be.visible')
        cy.get('#street1').type('5th Ave NYC')
        cy.contains('Submit').click()
    })
    it('Delete contact', () => {
        cy.contains('Log In').click();
        cy.get('#email').type(userData.userEmail);
        cy.get('#password').type(userData.userPassword);
        cy.contains('Submit').click();
        cy.get('#myTable').should('be.visible');
        cy.get('.contactTableBodyRow').should('be.visible');
        cy.get('.contactTableBodyRow').contains('John').click();
        cy.get('#firstName').should('be.visible')
        cy.get('#delete').should('be.visible')
        cy.get('#delete').click()
    })
    it('Return from Contact List', () => {
        cy.contains('Log In').click();
        cy.get('#email').type(userData.userEmail);
        cy.get('#password').type(userData.userPassword);
        cy.contains('Submit').click();
        cy.get('#myTable').should('be.visible');
        cy.get('.contactTableBodyRow').should('be.visible');
        cy.get('.contactTableBodyRow').contains('Jane').click();
        cy.get('#firstName').should('be.visible')
        cy.get('#return').should('be.visible')
        cy.get('#return').click()
    })
    it('Logout', () => {
        cy.contains('Log In').click();
        cy.get('#email').type(userData.userEmail);
        cy.get('#password').type(userData.userPassword);
        cy.contains('Submit').click();
        cy.get('.logout').should('be.visible')
        cy.get('.logout').click()
        cy.get('h1').should('contain', 'Contact List App')
    })
});
