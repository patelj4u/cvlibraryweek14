package uk.co.library.cucumber.steps;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.library.pages.HomePage;

public class JobSearchStepdefs {
    @Given("^User is on Home Page$")
    public void userIsOnHomePage() {
    }

    @When("^I enter Job title in \"([^\"]*)\" field$")
    public void iEnterJobTitleInField(String jobTitle)  {
       new HomePage().enterJobTitle(jobTitle);

    }

    @And("^I enter Location in \"([^\"]*)\" field$")
    public void iEnterLocationInField(String location)  {
       new HomePage().enterlocation(location);

    }

    @And("^I select distance in\"([^\"]*)\" dropdown menu$")
    public void iSelectDistanceInDropdownMenu(String distance)  {
       new HomePage().selectDistance(distance);

    }

    @And("^I click on more Search Options Link$")
    public void iClickOnMoreSearchOptionsLink() {
        new HomePage().clickonmoresearchoptions();
    }

    @And("^I enter salary Minimum in \"([^\"]*)\" field$")
    public void iEnterSalaryMinimumInField(String salMin)  {
       new HomePage().enterSalarymin(salMin);

    }

    @And("^I enter salary Maximum in \"([^\"]*)\" field$")
    public void iEnterSalaryMaximumInField(String salMax)  {
    new HomePage().entersalarymax(salMax);

    }

    @And("^I select salaryType \"([^\"]*)\" dropdown menu$")
    public void iSelectSalaryTypeDropdownMenu(String salType)  {
       new HomePage().selectSalaryType(salType);

    }

    @And("^I select jobType \"([^\"]*)\" dropdown menu$")
    public void iSelectJobTypeDropdownMenu(String jobType)  {
       new HomePage().selectJobTypeDropdown(jobType);

    }

    @And("^I click on Find Jobs button$")
    public void iClickOnFindJobsButton() {
        new HomePage().clickOnFindjob();
    }

    @Then("^I can see the \"([^\"]*)\" and user is on result page$")
    public void iCanSeeTheAndUserIsOnResultPage(String result)  {
        Assert.assertEquals(result,new HomePage().verifyResult());

    }
}
