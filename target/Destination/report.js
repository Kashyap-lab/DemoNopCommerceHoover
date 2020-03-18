$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/hoover.feature");
formatter.feature({
  "name": "Category",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest.MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should be able to perform hoover action",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hoover"
    }
  ]
});
formatter.step({
  "name": "user hoover over \"Computers\" category link and click on subcategory link \"Notebooks\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest.MyStepdefs.userHooverOverCategoryLinkAndClickOnSubcategoryLink(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to navigate to subcategory page \"notebooks\" successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest.MyStepdefs.userShouldAbleToNavigateToSubcategoryPageSuccessfully(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});