import insuranceTest from "../test/insuranceTest.js"

context('Insurance', () => {

	it('Fill the vehicle data', () => {
	//cy.visit('http://sampleapp.tricentis.com/101/app.php')
		insuranceTest.open()
		insuranceTest.vehicleData()
		cy.get('#nextenterinsurantdata').click()
	})

	it('Fill the insurance', () => {
		insuranceTest.insuranceData()
		cy.get('#nextenterproductdata').click()
	})

    it('Fill the product data', () => {
	  	insuranceTest.productData()
	    cy.get('#nextselectpriceoption').click()
  	})

    it('Select the price option', () => {
    	insuranceTest.priceOption()
    	cy.get('#nextsendquote').click()
  	})

	it('Send quote', () => {
		insuranceTest.sendQuote()
		cy.get('#sendemail').click()
	})

	it('Success', () => {
		insuranceTest.success()
		cy.get('.confirm').click()
	})

})
