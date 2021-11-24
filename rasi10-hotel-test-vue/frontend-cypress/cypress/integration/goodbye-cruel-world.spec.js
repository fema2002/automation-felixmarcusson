/// <reference types="cypress" />

//imports
import * as websiteHeaderFuncs from '../pages/websiteHeader'
import * as loginPageFuncs from '../pages/loginPage'
import * as overviewFuncs from '../pages/overview'
import * as roomsfuncs from '../pages/roomsPage'
import * as newRoomsfuncs from '../pages/newroomspage'
import * as clientsfuncs from '../pages/clientsPage'
import * as newClientsfuncs from '../pages/newClientsPage'
import * as billsfuncs from '../pages/billsPage'
import * as newBillsfunc from '../pages/newBillsPage'
import * as reservationsfunc from '../pages/reservationsPage'
import * as newReservationsfunc from '../pages/newReservationsPage'
import * as targets from '../targets/targets'
import * as testdata from '../testdata/testdata'


//test suite - Regression test
describe('Regression test', function(){

    //testsetup
    beforeEach( ()=>{
        cy.visit(targets.base_URL)
        loginPageFuncs.login(cy,targets.username,targets.password)
    })


    //Testcase 1 - perform valid login
    it('Perform valid login', function(){
        websiteHeaderFuncs.logout(cy)
        websiteHeaderFuncs.checkWebsiteHeaderLoggedOut(cy)
        loginPageFuncs.checkLoginPage(cy)
    })

    //Testcase 2 - move through website
    it('move through website', function(){
        overviewFuncs.navigateRooms(cy)
        roomsfuncs.checkRoomsPage(cy)
        roomsfuncs.navigateNewRooms(cy)
        newRoomsfuncs.checkNewRoomsPage(cy)
        newRoomsfuncs.backOut(cy)
        roomsfuncs.backOut(cy)
        overviewFuncs.navigateClients(cy)
        clientsfuncs.checkClientsPage(cy)
        clientsfuncs.navigateNewClients(cy)
        newClientsfuncs.checkNewClientsPage(cy)
        newClientsfuncs.backOut(cy)
        clientsfuncs.backOut(cy)
        overviewFuncs.navigateBills(cy)
        billsfuncs.checkBillsPage(cy)
        billsfuncs.navigateNewBills(cy)
        newBillsfunc.checkNewBillsPage(cy)
        newBillsfunc.backOut(cy)
        billsfuncs.backOut(cy)
        overviewFuncs.navigateReservations(cy)
        reservationsfunc.checkReservationsPage(cy)
        reservationsfunc.navigateNewReservations(cy)
        newReservationsfunc.checkNewReservationsPage(cy)
        newReservationsfunc.backOut(cy)
        reservationsfunc.backOut(cy)
        websiteHeaderFuncs.logout(cy)
    })

    //testcase 3 - create new client
    it('create new client', function(){
        overviewFuncs.navigateClients(cy)
        clientsfuncs.navigateNewClients(cy)
        newClientsfuncs.createNewClient(cy,testdata.newclientname,testdata.newclientmail,testdata.newclientphone)
        clientsfuncs.deleteNewClient(cy)
        websiteHeaderFuncs.logout(cy)
    })

    //testcase 4 - create new room
    it('create new room', function(){
        overviewFuncs.navigateRooms(cy)
        roomsfuncs.navigateNewRooms(cy)
        newRoomsfuncs.createNewRoom(cy,testdata.newroomfloor,testdata.newroomnumber,testdata.newroomprice)
        roomsfuncs.deleteNewRoom(cy)
        websiteHeaderFuncs.logout(cy)
    })

    //testcase 5 - create new bill
    it('create new bill', function(){
        overviewFuncs.navigateClients(cy) //For some reason it doesn't work to navigate directly to bills, so I've solved it by ordering the program to
        clientsfuncs.backOut(cy)            //first enter another room, back out into the overview, and then enter the Billspage
        overviewFuncs.navigateBills(cy)
        billsfuncs.navigateNewBills(cy)
        newBillsfunc.createNewBill(cy,testdata.newbillvalue)
        billsfuncs.deleteNewBill(cy)
        websiteHeaderFuncs.logout(cy)
    })

    //Testcase 6 - create everything required for a new reservation, then also create a new reservation
    it('create new on every page', function(){
        overviewFuncs.navigateClients(cy)
        clientsfuncs.navigateNewClients(cy)
        newClientsfuncs.createNewClient(cy,testdata.newclientname,testdata.newclientmail,testdata.newclientphone)
        clientsfuncs.backOut(cy)
        overviewFuncs.navigateRooms(cy)
        roomsfuncs.navigateNewRooms(cy)
        newRoomsfuncs.createNewRoom(cy,testdata.newroomfloor,testdata.newroomnumber,testdata.newroomprice)
        roomsfuncs.backOut(cy)
        overviewFuncs.navigateBills(cy)
        billsfuncs.navigateNewBills(cy)
        newBillsfunc.createNewBill(cy,testdata.newbillvalue)
        billsfuncs.backOut(cy)
        overviewFuncs.navigateReservations(cy)
        reservationsfunc.navigateNewReservations(cy)
        newReservationsfunc.createNewReservation(cy,testdata.newreservationstart,testdata.newreservationend,testdata.newreservationclient,testdata.newreservationroom,testdata.newreservationbill)
        reservationsfunc.deleteNewReservation(cy)
        reservationsfunc.backOut(cy)
        overviewFuncs.navigateRooms(cy)
        roomsfuncs.deleteNewRoom(cy)
        roomsfuncs.backOut(cy)
        overviewFuncs.navigateClients(cy)
        clientsfuncs.deleteNewClient(cy)
        clientsfuncs.backOut(cy)
        overviewFuncs.navigateBills(cy)
        billsfuncs.deleteNewBill(cy)
        billsfuncs.backOut(cy)
        websiteHeaderFuncs.logout(cy)
    })

})
