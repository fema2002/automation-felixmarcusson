/// <reference types="cypress" />

//page objects
const pageHead = 'h2 > div'
const pageHeadTitle = 'Clients'
const createClientButton = 'h2 > .btn'
const createClientButtonTitle = 'Create Client'
const newCreatedClientButton = ':nth-child(3) > .action > img'
const deleteButton = '.menu > :nth-child(2)'
const backButton = ':nth-child(3) > .btn'
const backButtonTitle = 'Back'


//methods
function navigateNewClients(cy){
    cy.get(createClientButton).click()
}

function checkClientsPage(cy){
    cy.get(pageHead).should("have.text", pageHeadTitle)
    cy.get(createClientButton).should("have.text", createClientButtonTitle)
    cy.get(backButton).should("have.text", backButtonTitle)
}

function deleteNewClient(cy){
    cy.get(newCreatedClientButton).click()
    cy.get(deleteButton).click()
}

function backOut(cy){
    cy.get(backButton).click()
}

//exports
module.exports = {
    navigateNewClients,
    checkClientsPage,
    deleteNewClient,
    backOut
}