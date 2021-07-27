
module.exports = {
    commands: [{
        openCart: function(){
            return this.waitForElementVisible('@btnCart', 1000).click('@btnCart');//.pause(1000);
        },
        confirmCheckout: function(){
            return this.waitForElementVisible('@btnCheckout', 1000).click('@btnCheckout');//.pause(1000);
        }
    }],
    elements: {
        cartItemsCount : {
            selector: 'span.shopping_cart_badge'
        },
        btnCheckout : {
            selector: "button#checkout"
        },
        btnCart: {
            selector: "a.shopping_cart_link"
        }
    }
}