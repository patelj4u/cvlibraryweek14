$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search",
  "description": "\r\nAs a User I want to check Job Search Result Using Different DataSet",
  "id": "job-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should search job and navigate to result page successfully",
  "description": "",
  "id": "job-search;user-should-search-job-and-navigate-to-result-page-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter Job title in \"\u003cJobTitle\u003e\" field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Location in \"\u003cLocation\u003e\" field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance in\"\u003cdistance\u003e\" dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Search Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary Minimum in \"\u003csalaryMin\u003e\" field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary Maximum in \"\u003csalaryMax\u003e\" field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"\u003csalaryType\u003e\" dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"\u003cjobType\u003e\" dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the \"\u003cresult\u003e\" and user is on result page",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "job-search;user-should-search-job-and-navigate-to-result-page-successfully;",
  "rows": [
    {
      "cells": [
        "JobTitle",
        "Location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 20,
      "id": "job-search;user-should-search-job-and-navigate-to-result-page-successfully;;1"
    },
    {
      "cells": [
        "Automation Tester",
        "Harrow on the Hill",
        "up to 25 miles",
        "35000",
        "45000",
        "annum",
        "Permanent",
        "Permanent Automation Tester jobs in Harrow on the Hill"
      ],
      "line": 21,
      "id": "job-search;user-should-search-job-and-navigate-to-result-page-successfully;;2"
    },
    {
      "cells": [
        "Automation Tester",
        "London",
        "up to 50 miles",
        "35000",
        "55000",
        "annum",
        "Permanent",
        "Permanent Automation Tester jobs in Harrow on the Hill"
      ],
      "line": 22,
      "id": "job-search;user-should-search-job-and-navigate-to-result-page-successfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25212562200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should search job and navigate to result page successfully",
  "description": "",
  "id": "job-search;user-should-search-job-and-navigate-to-result-page-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter Job title in \"Automation Tester\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Location in \"Harrow on the Hill\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance in\"up to 25 miles\" dropdown menu",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Search Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary Minimum in \"35000\" field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary Maximum in \"45000\" field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"annum\" dropdown menu",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Permanent\" dropdown menu",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the \"Permanent Automation Tester jobs in Harrow on the Hill\" and user is on result page",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 173141500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 22
    }
  ],
  "location": "JobSearchStepdefs.iEnterJobTitleInField(String)"
});
formatter.result({
  "duration": 345830900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow on the Hill",
      "offset": 21
    }
  ],
  "location": "JobSearchStepdefs.iEnterLocationInField(String)"
});
formatter.result({
  "duration": 134786600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 21
    }
  ],
  "location": "JobSearchStepdefs.iSelectDistanceInDropdownMenu(String)"
});
formatter.result({
  "duration": 134953900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchStepdefs.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 200248200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 27
    }
  ],
  "location": "JobSearchStepdefs.iEnterSalaryMinimumInField(String)"
});
formatter.result({
  "duration": 240387700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 27
    }
  ],
  "location": "JobSearchStepdefs.iEnterSalaryMaximumInField(String)"
});
formatter.result({
  "duration": 94097800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "annum",
      "offset": 21
    }
  ],
  "location": "JobSearchStepdefs.iSelectSalaryTypeDropdownMenu(String)"
});
formatter.result({
  "duration": 68626200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchStepdefs.iSelectJobTypeDropdownMenu(String)"
});
formatter.result({
  "duration": 98415800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchStepdefs.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 111157300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Automation Tester jobs in Harrow on the Hill",
      "offset": 15
    }
  ],
  "location": "JobSearchStepdefs.iCanSeeTheAndUserIsOnResultPage(String)"
});
formatter.result({
  "duration": 5861022900,
  "status": "passed"
});
formatter.after({
  "duration": 764199800,
  "status": "passed"
});
formatter.before({
  "duration": 23427859700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should search job and navigate to result page successfully",
  "description": "",
  "id": "job-search;user-should-search-job-and-navigate-to-result-page-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter Job title in \"Automation Tester\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Location in \"London\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance in\"up to 50 miles\" dropdown menu",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Search Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary Minimum in \"35000\" field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary Maximum in \"55000\" field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"annum\" dropdown menu",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Permanent\" dropdown menu",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the \"Permanent Automation Tester jobs in Harrow on the Hill\" and user is on result page",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 68500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 22
    }
  ],
  "location": "JobSearchStepdefs.iEnterJobTitleInField(String)"
});
formatter.result({
  "duration": 204516200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 21
    }
  ],
  "location": "JobSearchStepdefs.iEnterLocationInField(String)"
});
formatter.result({
  "duration": 626402200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 50 miles",
      "offset": 21
    }
  ],
  "location": "JobSearchStepdefs.iSelectDistanceInDropdownMenu(String)"
});
formatter.result({
  "duration": 174614000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchStepdefs.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 130848600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 27
    }
  ],
  "location": "JobSearchStepdefs.iEnterSalaryMinimumInField(String)"
});
formatter.result({
  "duration": 274472300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55000",
      "offset": 27
    }
  ],
  "location": "JobSearchStepdefs.iEnterSalaryMaximumInField(String)"
});
formatter.result({
  "duration": 131564400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "annum",
      "offset": 21
    }
  ],
  "location": "JobSearchStepdefs.iSelectSalaryTypeDropdownMenu(String)"
});
formatter.result({
  "duration": 91957000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchStepdefs.iSelectJobTypeDropdownMenu(String)"
});
formatter.result({
  "duration": 132387900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchStepdefs.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 136609400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Automation Tester jobs in Harrow on the Hill",
      "offset": 15
    }
  ],
  "location": "JobSearchStepdefs.iCanSeeTheAndUserIsOnResultPage(String)"
});
formatter.result({
  "duration": 3120199600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...tion Tester jobs in [Harrow on the Hill]\u003e but was:\u003c...tion Tester jobs in [London]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uk.co.library.cucumber.steps.JobSearchStepdefs.iCanSeeTheAndUserIsOnResultPage(JobSearchStepdefs.java:70)\r\n\tat ✽.Then I can see the \"Permanent Automation Tester jobs in Harrow on the Hill\" and user is on result page(jobsearch.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1007965400,
  "status": "passed"
});
});