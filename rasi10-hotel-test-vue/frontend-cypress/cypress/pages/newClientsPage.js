/// <reference types="cypress" />

//page objects
const pageHead = 'h2 > div'
const PageHeadTitle = 'New Client'
const nameFieldHeader = ':nth-child(1) > label'
const nameFieldHeaderTitle = 'Name'
const nameField = ':nth-child(1) > input'
const mailFieldHeader = ':nth-child(2) > label'
const mailFieldHeaderTitle = 'Email'
const mailField = ':nth-child(2) > input'
const phoneFieldHeader = ':nth-child(3) > label'
const phoneFieldHeaderTitle = 'Telephone'
const phoneField = ':nth-child(3) > input'
const backButton = '[href="/clients"]'
const backButtonTitle = 'Back'
const saveButton = '.blue'
const saveButtonTitle = 'Save'


//methods
function checkNewClientsPage(cy){
    cy.get(pageHead).should("have.text", PageHeadTitle)
    cy.get(nameFieldHeader).should("have.text", nameFieldHeaderTitle)
    cy.get(mailFieldHeader).should("have.text", mailFieldHeaderTitle)
    cy.get(phoneFieldHeader).should("have.text", phoneFieldHeaderTitle)
    cy.get(backButton).should("have.text", backButtonTitle)
    cy.get(saveButton).should("have.text", saveButtonTitle)
}

function createNewClient(cy, name, mail, phone){
    cy.get(nameField).type(name)
    cy.get(mailField).type(mail)
    cy.get(phoneField).type(phone)
    cy.get(saveButton).click()
}

function backOut(cy){
    cy.get(backButton).click()
}

//exports
module.exports = {
    checkNewClientsPage,
    createNewClient,
    backOut
}