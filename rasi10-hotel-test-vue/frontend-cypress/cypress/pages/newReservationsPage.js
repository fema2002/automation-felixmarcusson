/// <reference types="cypress" />


//page objects
const pageHead = 'h2 > div'
const PageHeadTitle = 'New Reservation'
const startDateFieldHeader = ':nth-child(1) > label'
const startDateFieldHeaderTitle = 'Start (Format YYYY-MM-DD)'
const startDateField = ':nth-child(1) > input'
const endDateFieldHeader = ':nth-child(2) > label'
const endDateFieldHeaderTitle = 'End (Format YYYY-MM-DD)'
const endDateField = ':nth-child(2) > input'
const clientFieldHeader = ':nth-child(3) > label'
const clientFieldHeaderTitle = 'Client'
const clientField = ':nth-child(3) > select'
const roomFieldHeader = ':nth-child(4) > label'
const roomFieldHeaderTitle = 'Room'
const roomField = ':nth-child(4) > select'
const billFieldHeader = ':nth-child(5) > label'
const billFieldHeaderTitle = 'Bill'
const billField = ':nth-child(5) > select'
const backButton = '[href="/reservations"]'
const backButtonTitle = 'Back'
const saveButton = '.blue'
const saveButtonTitle = 'Save'

//methods
function checkNewReservationsPage(cy){
    cy.get(pageHead).should("have.text", PageHeadTitle)
    cy.get(startDateFieldHeader).should("have.text", startDateFieldHeaderTitle)
    cy.get(endDateFieldHeader).should("have.text", endDateFieldHeaderTitle)
    cy.get(clientFieldHeader).should("have.text", clientFieldHeaderTitle)
    cy.get(roomFieldHeader).should("have.text", roomFieldHeaderTitle)
    cy.get(billFieldHeader).should("have.text", billFieldHeaderTitle)
    cy.get(backButton).should("have.text", backButtonTitle)
    cy.get(saveButton).should("have.text", saveButtonTitle)
}

function createNewReservation(cy,startdate,enddate,client,room,bill){
    cy.get(startDateField).type(startdate)
    cy.get(endDateField).type(enddate)
    cy.get(clientField).select(client)
    cy.get(roomField).select(room)
    cy.get(billField).select(bill)
    cy.get(saveButton).click()
}

function backOut(cy){
    cy.get(backButton).click()
}

//exports
module.exports = {
    checkNewReservationsPage,
    createNewReservation,
    backOut
}