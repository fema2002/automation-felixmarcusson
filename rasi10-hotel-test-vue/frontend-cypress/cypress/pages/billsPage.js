/// <reference types="cypress" />



//page objects
const pageHead = 'h2 > div'
const PageHeadTitle = 'Bills'
const createBillsButton = 'h2 > .btn'
const createBillsButtonTitle = 'Create Bill'
const newCreatedBillButton = ':nth-child(2) > .action > img'
const deleteButton = '.menu > :nth-child(2)'
const backButton = ':nth-child(3) > .btn'
const backButtonTitle = 'Back'


//methods
function checkBillsPage(cy){
    cy.get(pageHead).should("have.text", PageHeadTitle)
    cy.get(createBillsButton).should("have.text", createBillsButtonTitle)
    cy.get(backButton).should("have.text", backButtonTitle)
}


function navigateNewBills(cy){
    cy.get(createBillsButton).click()
}

function deleteNewBill(cy){
    cy.get(newCreatedBillButton).click()
    cy.get(deleteButton).click()
}

function backOut(cy){
    cy.get(backButton).click()
}

//exports
module.exports = {
    checkBillsPage,
    navigateNewBills,
    deleteNewBill,
    backOut
}