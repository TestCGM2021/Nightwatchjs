module.exports = {
    'Should be able to login and land on the products page, Cart link icon should be visible': function (browser) {
        let loginpage = browser.page.homePage();
        loginpage.navigate()
            .assert.title('Swag Labs')
            .login('standard_user', 'secret_sauce')
            .checkLoginSuccess();
        },

    'Should be able to review the backpack product details and add it to cart': function (browser) {
        let productsPage = browser.page.productPage();
        productsPage
            .showProductDetails('Sauce Labs Backpack')
            .checkProductDetails('Sauce Labs Backpack','29.99')
            .backToProductsList()
            .addProductToCart('Sauce Labs Backpack')
            .checkCartbadgeCount(1);
        },
    
    'Should be able to navigate to the shoping cart, review my items and checkout': function (browser) {
        let cartPage = browser.page.cartPage();
        cartPage
            .openCart()
            .confirmCheckout();
        },
    
    'Should be able to provide my contact info, review, and finish my order': function (browser) {
        let checkoutPage = browser.page.checkoutPage();
        checkoutPage.confirmOrder('Youssef','B.','34000');
        
        let overView = browser.page.checkoutOverviewPage();
        overView
            .finalCheck('Sauce Labs Backpack','1','32.39')
            .finishOrder()
            .checkOrderDispatch();
    }
}