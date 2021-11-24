/// <reference types="cypress" />

//page objects
const pageHead = 'h2 > div'
const PageHeadTitle = 'Reservations'
const createReservationsButton = 'h2 > .btn'
const createReservationsButtonTitle = 'Create Reservation'
const newCreatedReservationButton = ':nth-child(2) > .action > img'
const deleteButton = '.menu > :nth-child(2)'
const backButton = ':nth-child(3) > .btn'
const backButtonTitle = 'Back'


//methods
function checkReservationsPage(cy){
    cy.get(pageHead).should("have.text", PageHeadTitle)
    cy.get(createReservationsButton).should("have.text", createReservationsButtonTitle)
    cy.get(backButton).should("have.text", backButtonTitle)
}

function navigateNewReservations(cy){
    cy.get(createReservationsButton).click()
}

function deleteNewReservation(cy){
    cy.get(newCreatedReservationButton).click()
    cy.get(deleteButton).click()
}

function backOut(cy){
    cy.get(backButton).click()
}

//exports
module.exports = {
    checkReservationsPage,
    navigateNewReservations,
    deleteNewReservation,
    backOut
}