
Feature: Trial
  Navigation, Loading and Button test cases

  @navigate-to-sdk-page
    Scenario: Navigating from the main page to CE.SDK subpage works
    Given I navigate to img.ly main page
    And I accept all cookies
    When I hover over the SDKs Button
    Then I can see a menu of the available SDKs
    And I can choose the option CreativeEditor SDK
    Then I should be on the CE.SDK subpage

  @trial-sdk-loads
    Scenario: Make sure the embedded CE.SDK loads
    Given I navigate to img.ly creative-sdk subpage
    And I accept all cookies
    Then I can scroll to the trial video
    And I can click on Try out our editor now button
    Then the editor should show up
    #bonus
    And the export images button should be available
    And the export images button should be clickable

