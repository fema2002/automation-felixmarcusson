/// <reference types="cypress" />

//page objects
const pageHead = 'h2'
const pageHeadTitle = 'Login'
const userFieldHeader = ':nth-child(1) > label'
const userFieldHeaderTitle = 'Username:'
const userField = ':nth-child(1) > input'
const passFieldHeader = ':nth-child(2) > label'
const passFieldHeaderTitle = 'Password:'
const passField = ':nth-child(2) > input'
const loginButton = '.btn'
const loginButtonTitle = 'Login'
const formLabel = 'Login'

//page methods
function checkLoginPage(cy){
    cy.get(pageHead).should("have.text", pageHeadTitle)
    cy.get(userFieldHeader).should("have.text", userFieldHeaderTitle)
    cy.get(passFieldHeader).should("have.text", passFieldHeaderTitle)
    cy.get(loginButton).should("have.text", loginButtonTitle)
}

function login(cy, username, password){
    cy.get(userField).type(username)
    cy.get(passField).type(password)
    cy.get(loginButton).click()
}

//exports
module.exports = {
    checkLoginPage,
    login
}