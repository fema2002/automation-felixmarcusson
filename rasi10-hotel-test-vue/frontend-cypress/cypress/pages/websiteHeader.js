/// <reference types="cypress" />

//Page-Objects
const websiteHeadertitle = 'Tester Hotel'
const websiteHeaderButton = '.router-link-active'
const logoutButton = '.user > .btn'
const logoutText = 'Logout'


//Page Methods
function checkWebsiteHeaderLoggedOut(cy){
    cy.get(websiteHeaderButton).should("have.text", websiteHeadertitle)
}

function checkWebsiteHeaderLoggedIn(cy){
    cy.get(websiteHeaderButton).should("have.text", websiteHeadertitle)
    cy.get(logoutButton).should("have.text", logoutText)
}

function logout(cy){
    cy.get(logoutButton).click()
}


//Exports
module.exports = {
    checkWebsiteHeaderLoggedOut,
    checkWebsiteHeaderLoggedIn,
    logout
}