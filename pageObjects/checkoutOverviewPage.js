
module.exports = {
    commands: [{
        finalCheck: function(productTitle, qty, total){
            return this
            .assert.containsText("@lblTotal", total)
            .assert.containsText("@lblQty", qty)
            .assert.containsText("@lblProductTitle", productTitle);
        },
        finishOrder: function(){
            return this.waitForElementVisible('@btnFinish', 1000).click('@btnFinish');//.pause(1000);
        },
        checkOrderDispatch: function(){
            return this.assert.visible('@orderDispatched').assert.containsText("@orderDispatched", 'THANK YOU FOR YOUR ORDER');
        }
    
    }],
    elements: {
        lblProductTitle: {
            selector: 'div.cart_list div.inventory_item_name'
        },
        lblQty : {
            selector: 'div.cart_quantity'
        },
        lblTotal : {
            selector: 'div.summary_total_label'
        },
        btnFinish : {
            selector: "button#finish"
        },
        orderDispatched: {
            selector: "h2.complete-header"
        }
    }
}