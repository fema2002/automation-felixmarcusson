/// <reference types="cypress" />


//page objects
const pageHeader = 'h2'
const pageHeaderTitle = 'Tester Hotel Overview'
const roomsDesignator = ':nth-child(1) > h4'
const roomsDesignatorTitle = 'Rooms'
const viewButtonTitle = 'View'
const viewRoomsButton = ':nth-child(1) > .btn'
const clientsDesignator = ':nth-child(2) > h4'
const clientsDesignatorTitle = 'Clients'
const viewClientsButton = '.blocks > :nth-child(2) > .btn'
const billsDesignator = ':nth-child(3) > h4'
const billsDesignatorTitle = 'Bills'
const viewBillsButton = ':nth-child(3) > .btn'
const reservationsDesignator = ':nth-child(4) > h4'
const reservationsDesignatorTitle = 'Reservations'
const viewReservationsButton = ':nth-child(4) > .btn'

//methods
function navigateRooms(cy){
    cy.get(viewRoomsButton).click()
}

function navigateClients(cy){
    cy.get(viewClientsButton).click()
}

function navigateBills(cy){
    cy.get(viewBillsButton).click()
}

function navigateReservations(cy){
    cy.get(viewReservationsButton).click()
}

//export
module.exports = {
    navigateRooms,
    navigateClients,
    navigateBills,
    navigateReservations
}