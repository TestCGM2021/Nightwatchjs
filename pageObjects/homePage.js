module.exports = {
    url: 'https://www.saucedemo.com/',
    commands: [{
        login: function(userName, password){
            this.waitForElementVisible('@txtUserName', 1000).setValue('@txtUserName', userName);//.pause(1000);
            this.waitForElementVisible('@txtPassword', 1000).setValue('@txtPassword', password);//.pause(1000);
            return this.waitForElementVisible('@btnLogin', 1000).click('@btnLogin');//.pause(1000);
        },
        checkLoginSuccess: function(){
            return this
                .assert.visible('@productsBanner')
                .assert.visible('@lnkShopingCart');
        }
    }],
    elements: {
        txtUserName: {
            selector: '#user-name'
        },
        txtPassword: {
            selector: '#password'
        },
        btnLogin : {
            selector:'#login-button'
        },
        lnkShopingCart:{
            selector: 'a.shopping_cart_link'
        },
        productsBanner : {
            locateStrategy: 'xpath',
            selector:'//div[@id="header_container"]//span[contains(text(),"Products")]'
        }
    }
}