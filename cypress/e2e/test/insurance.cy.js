import insuranceTest from "../test/insuranceTest.js"

context('Have the insurance quote', () => {

	it('Given Im in the insurance form', () => {
		insuranceTest.open()
	})


	it('And I fill the vehicle data', () => {
		insuranceTest.vehicleData()
		cy.get('#nextenterinsurantdata').click()
	})

	it('And I fill the insurance', () => {
		insuranceTest.insuranceData()
		cy.get('#nextenterproductdata').click()
	})

    it('And I fill the product data', () => {
	  	insuranceTest.productData()
	    cy.get('#nextselectpriceoption').click()
  	})

    it('And I fill the price option', () => {
    	insuranceTest.priceOption()
    	cy.get('#nextsendquote').click()
  	})

	it('When I send quote', () => {
		insuranceTest.sendQuote()
		cy.get('#sendemail').click()
	})

	it('The success - I have the insurance quote', () => {
		insuranceTest.success()
		cy.get('.confirm').click()
	})

})
