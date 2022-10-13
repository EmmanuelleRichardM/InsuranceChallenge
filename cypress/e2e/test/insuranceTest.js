class insuranceTest {

	open() {
		cy.visit('http://sampleapp.tricentis.com/101/app.php');

	}

	vehicleData(){
		cy.get('#make').select('Suzuki');
	    cy.get('#model').select('Scooter');
	    cy.get('#cylindercapacity').type('1254');
	    cy.get('#engineperformance').type('1500');
	    cy.get('#dateofmanufacture').type('10/11/2022');
	    cy.get('#numberofseats').select('2');
	    cy.get('.group').contains('Yes').click();
	    cy.get('#numberofseatsmotorcycle').select('2');
	    cy.get('#fuel').select('Petrol');
	    cy.get('#payload').type('215');
	    cy.get('#totalweight').type('1000');
	    cy.get('#listprice').type('32000');
	    cy.get('#licenseplatenumber').type('6874A');
	    cy.get('#annualmileage').type('1520');
	}

	insuranceData(){
		cy.get('#firstname').type('Lucas');
	    cy.get('#lastname').type('Fernandes');
	    cy.get('#birthdate').type('06/11/2001');
	    cy.get('.group').contains('Male').click();
	    cy.get('#country').select('Brazil');
	    cy.get('#zipcode').type('59073350');
	    cy.get('#occupation').select('Employee');
	    cy.get('.group').contains('Speeding').click();
	}

	productData(){
		cy.get('#startdate').type('01/12/2023');
	    cy.get('#insurancesum').select('3000000');
	    cy.get('#meritrating').select('Malus 11');
	    cy.get('#damageinsurance').select('Partial Coverage');
	    cy.get('.group').contains('Legal Defense Insurance').click();
	    cy.get('#courtesycar').select('No');
	}

	priceOption(){
	   cy.get('.group').last().click();
	}

	sendQuote(){
	    cy.get('#email').type('maria@accenturetest.com');
		cy.get('#username').type('accenturetest');
		cy.get('#password').type('312Accenture!test');
		cy.get('#confirmpassword').type('312Accenture!test');
	}

	success(){
		cy.wait(6000);
	    cy.contains('Sending e-mail success!');
	    cy.wait(4000);
	}
}

export default new insuranceTest();