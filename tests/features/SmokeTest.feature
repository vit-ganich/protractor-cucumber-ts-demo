Feature: Verify controls on the Home Page

    @Positive
    Scenario Outline: Go to Home Page
        Given: I am logged on Portal as 'Admin'
        When I click on '<Tab>' tab
        Then I should see page with '<Title>'
        Examples:
            | Tab             | Title                           |
            | Home            | Selenium Training By Rahul      |
            | VIDEO TUTORIALS | Selenium Tutorial for beginners |
