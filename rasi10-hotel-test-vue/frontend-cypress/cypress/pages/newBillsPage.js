/// <reference types="cypress" />

//page objects
const pageHead = 'h2 > div'
const PageHeadTitle = 'New Bill'
const valueFieldHeader = ':nth-child(1) > label'
const valueFieldHeaderTitle = 'Value (SEK)'
const valueField = 'input'
const paidBoxHeader = ':nth-child(2) > label'
const paidBoxHeaderTitle = 'Paid'
const paidBox = '.checkbox'
const backButton = '[href="/bills"]'
const backButtonTitle = 'Back'
const saveButton = '.blue'
const saveButtonTitle = 'Save'


//methods
function checkNewBillsPage(cy){
    cy.get(pageHead).should("have.text", PageHeadTitle)
    cy.get(valueFieldHeader).should("have.text", valueFieldHeaderTitle)
    cy.get(paidBoxHeader).should("have.text", paidBoxHeaderTitle)
    cy.get(backButton).should("have.text", backButtonTitle)
    cy.get(saveButton).should("have.text", saveButtonTitle)
}

function createNewBill(cy,value){
    cy.get(valueField).type(value)
    cy.get(saveButton).click()
}

function backOut(cy){
    cy.get(backButton).click()
}

//exports
module.exports = {
    checkNewBillsPage,
    createNewBill,
    backOut
}