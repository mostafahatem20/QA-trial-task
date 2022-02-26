/// <reference types="cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given(`I navigate to img.ly main page`, () => {
  cy.visit('/')
})

Then(`I accept all cookies`, () => {
  cy.get('.cke-box--start > .cke-box__buttons > .button').click()
})

When(`I hover over the SDKs Button`, () => {
  cy.get('[id="w-dropdown-toggle-0"]').trigger('mouseover')
})
Then(`I can see a menu of the available SDKs`, () => {
  cy.get('[id="w-dropdown-list-0"]').should('be.visible')
  cy.get('[id="w-dropdown-list-0"] > a')
    .should('have.length', 3)
    .should('be.visible')
})

And(`I can choose the option CreativeEditor SDK`, () => {
  cy.get('[id="w-dropdown-list-0"] > a').eq(2).click()
})

Then(`I should be on the CE.SDK subpage`, () => {
  cy.url().should('include', '/creative-sdk')
})

Given(`I navigate to img.ly creative-sdk subpage`, () => {
  cy.visit('/creative-sdk')
})

Then(`I can scroll to the trial video`, () => {
  cy.get('[id="VIDEO-BOX-WRAPPER"]').scrollIntoView()
})

And(`I can click on Try out our editor now button`, () => {
  cy.get('[id="cesdk-close-click-event"]').click()
  cy.wait(Cypress.env('medium_timeout'))
})

Then(`the editor should show up`, () => {
  cy.contains('Try out our editor now!').should('not.exist')
  cy.get('.Video-box-overlay').should('not.exist')
  cy.contains('Loading Editor').should('not.exist')
  cy.get('[id="cesdk-editor"]').should('exist')
  cy.get('.ubq-public').should('exist').should('be.visible')
})

And(`the export images button should be available`, () => {
  cy.get('.ubq-public')
    .shadow()
    .find('[data-cy="tb-exportScene"]')
    .should('exist')
    .should('be.visible')
})

And(`the export images button should be clickable`, () => {
  cy.get('.ubq-public')
    .shadow()
    .find('[data-cy="tb-exportScene"]')
    .then(($btn) => {
      const clickable = $btn.is(':enabled')
      expect(clickable).to.eq(true)
    })
})
