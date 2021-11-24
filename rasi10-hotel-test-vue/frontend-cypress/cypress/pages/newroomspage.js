/// <reference types="cypress" />

//page object
const pageHead = 'h2 > div'
const pageHeadTitle = 'New Room'
const categoryFieldHeader = ':nth-child(1) > label'
const categoryFieldHeaderTitle = 'Category'
const categoryField = ':nth-child(1) > select'
const numberFieldHeader = ':nth-child(2) > label'
const numberFieldHeaderTitle = 'Number'
const numberField = ':nth-child(2) > input'
const floorFieldHeader = ':nth-child(3) > label'
const floorFieldHeaderTitle = 'Floor'
const floorField = ':nth-child(3) > input'
const availableBoxHeader = ':nth-child(4) > label'
const availableBoxHeaderTitle = 'Available'
const availableBox = '.checkbox'
const priceFieldHeader = ':nth-child(5) > label'
const priceFieldHeaderTitle = 'Price'
const priceField = ':nth-child(5) > input'
const featuresFieldHeader = ':nth-child(6) > label'
const featuresFieldHeaderTitle = '' //will return to naming later
const featureField = ':nth-child(6) > select'
const backButton = '[href="/rooms"]'
const backButtonTitle = 'Back'
const saveButton = '.blue'
const saveButtonTitle = 'Save'

//methods
function checkNewRoomsPage(cy){
    cy.get(pageHead).should("have.text", pageHeadTitle)
    cy.get(categoryFieldHeader).should("have.text", categoryFieldHeaderTitle)
    cy.get(numberFieldHeader).should("have.text", numberFieldHeaderTitle)
    cy.get(floorFieldHeader).should("have.text", floorFieldHeaderTitle)
    cy.get(availableBoxHeader).should("have.text", availableBoxHeaderTitle)
    cy.get(priceFieldHeader).should("have.text", priceFieldHeaderTitle)
    //cy.get(featuresFieldHeader).should("have.text", featuresFieldHeaderTitle) Must figure out how to format featuresFieldHeaderTitle
    cy.get(backButton).should("have.text", backButtonTitle)
}

function createNewRoom(cy,number,floor,price){
    cy.get(categoryField).select("Single")
    cy.get(numberField).type(number)
    cy.get(floorField).type(floor)
    cy.get(availableBox).click()
    cy.get(priceField).type(price)
    cy.get(saveButton).click()
}

function backOut(cy){
    cy.get(backButton).click()
}

//export
module.exports = {
    checkNewRoomsPage,
    createNewRoom,
    backOut
}