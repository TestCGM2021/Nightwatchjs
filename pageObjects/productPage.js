module.exports = {
    commands: [{
        backToProductsList: function () {
            return this
                .waitForElementVisible('@btnBackToProductsList', 1000)
                .click('@btnBackToProductsList');//.pause(3000);
        },
        showProductDetails: function (productTitle) {
            return this
                .useXpath()
                .waitForElementVisible(`//div[contains(@class,"inventory_item_name") and text()="${productTitle}"]`, 1000)
                .click(`//div[contains(@class,"inventory_item_name") and text()="${productTitle}"]`);//.pause(1000);
        },
        checkProductDetails: function (productTitle, productPrice) {
            return this
                .useCss()
                .assert.containsText('@detailsTitle',productTitle)
                .assert.containsText('@detailsPrice',productPrice);
        },
        addProductToCart: function (productTitle) {
            return this
                .useXpath()
                .waitForElementVisible(`//div[text()="${productTitle}"]//ancestor::div[@class="inventory_item_label"]//following-sibling::div[@class="pricebar"]//button`, 1000)
                .click(`//div[text()="${productTitle}"]//ancestor::div[@class="inventory_item_label"]//following-sibling::div[@class="pricebar"]//button`);//.pause(1000);
        },

        checkCartbadgeCount: function (count) {
            return this.assert.containsText("@cartItemsCount", count);
        }
    }],
    elements: {
        btnBackToProductsList: {
            selector: 'button#back-to-products'
        },
        cartBadgeCount: {
            selector: 'span.shopping_cart_badge'
        },
        cartItemsCount: {
            selector: 'span.shopping_cart_badge'
        },
        detailsPrice: {
            selector:'div.inventory_details_price'
        },
        detailsTitle: {
            selector:'div.inventory_details_name'
        }
    }
}