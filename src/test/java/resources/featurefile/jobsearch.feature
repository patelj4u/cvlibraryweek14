Feature: Job Search

  As a User I want to check Job Search Result Using Different DataSet

  Scenario Outline:User should search job and navigate to result page successfully

    Given User is on Home Page
    When I enter Job title in "<JobTitle>" field
    And I enter Location in "<Location>" field
    And I select distance in"<distance>" dropdown menu
    And  I click on more Search Options Link
    And I enter salary Minimum in "<salaryMin>" field
    And I enter salary Maximum in "<salaryMax>" field
    And I select salaryType "<salaryType>" dropdown menu
    And I select jobType "<jobType>" dropdown menu
    And  I click on Find Jobs button
    Then I can see the "<result>" and user is on result page

    Examples:
      | JobTitle          | Location           | distance       | salaryMin | salaryMax | salaryType | jobType   | result                                                 |
      | Automation Tester | Harrow on the Hill | up to 25 miles | 35000     | 45000     | annum      | Permanent | Permanent Automation Tester jobs in Harrow on the Hill |
      | Automation Tester | London             | up to 50 miles | 35000     | 55000     | annum      | Permanent | Permanent Automation Tester jobs in London             |


#enter job title 'jobTitle'
#enter Location 'location'
#select distance 'distance'
#click on moreSearchOptionsLink
#enter salaryMin 'salaryMin'
#enter salaryMax 'salaryMax'
#select salaryType 'salaryType'
#select jobType 'jobType'
#click on 'Find Jobs' button
#
#verify the result 'result'
#Data set
#|jobTitle |location | distance |salaryMin |salaryMax |salaryType |jobType |result |
#|Tester |Harrow | up to 5 miles |30000 |500000 |Per annum | Permanent |Permanent
#Tester jobs in Harrow on the Hill|