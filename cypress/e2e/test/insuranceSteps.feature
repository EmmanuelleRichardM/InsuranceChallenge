Feature: Insurance Steps
	I want a Insurance Quote

	Scenario: Have a Insurance Quote
		Given Im in the insurance form
		And I fill the vehicle data
		And I fill the insurance data
		And I fill the product data
		And I fill the price option
		When I send quote
		Then success I have the insurance quote
