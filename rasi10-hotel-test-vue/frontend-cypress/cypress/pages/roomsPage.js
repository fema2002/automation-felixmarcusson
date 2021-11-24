/// <reference types="cypress" />

//page object
const pageHead = 'h2 > div'
const pageHeadTitle = 'Rooms'
const createRoomButton = 'h2 > .btn'
const createdRoomButtonTitle = 'Create Room'
const newCreatedRoomButton = ':nth-child(3) > .action > img'
const deleteButton = '.menu > :nth-child(2)'
const backButton = ':nth-child(3) > .btn'
const backButtonTitle = 'Back'

//methods
function navigateNewRooms(cy){
    cy.get(createRoomButton).click()
}

function checkRoomsPage(cy){
    cy.get(pageHead).should("have.text", pageHeadTitle)
    cy.get(createRoomButton).should("have.text", createdRoomButtonTitle)
    cy.get(backButton).should("have.text", backButtonTitle)
}

function deleteNewRoom(cy){
    cy.get(newCreatedRoomButton).click()
    cy.get(deleteButton).click()
}

function backOut(cy){
    cy.get(backButton).click()
}

//export
module.exports = {
    navigateNewRooms,
    checkRoomsPage,
    deleteNewRoom,
    backOut
}