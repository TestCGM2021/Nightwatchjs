
module.exports = {
    commands: [{
        confirmOrder: function(firstName, lastName, postalCode){
            this.waitForElementVisible('@txtFirstName', 1000).setValue('@txtFirstName',firstName);//.pause(1000);
            this.waitForElementVisible('@txtLastName', 1000).setValue('@txtLastName',lastName);//.pause(1000);
            this.waitForElementVisible('@txtPostalCode', 1000).setValue('@txtPostalCode',postalCode);//.pause(1000);
            return this.waitForElementVisible('@btnContinue', 1000).click('@btnContinue');//.pause(1000);
        }
    }],
    elements: {
        txtFirstName: {
            selector: 'input#first-name'
        },
        txtLastName : {
            selector: 'input#last-name'
        },
        txtPostalCode : {
            selector: 'input#postal-code'
        },
        btnContinue : {
            selector: "input#continue"
        }
    }
}