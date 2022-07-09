({
    addItem: function(component, newItem) {

        let item = component.getItem("addItem");

        item.setParams({ "item": item });
        item.fire();

        component.set( "v.newItem"
                        , {'sobjectType': 'Camping_Item__c'
                            , 'Name': ''
                            , 'Quantity__c': 0
                            , 'Price__c': 0
                            , 'Packed__c': false 
                        }
        );

    },

    validateItemForm: function(component) {

        let nameField = component.find("itemname");
        let name = nameField.get("v.value");

        let quantityField = component.find("quantity");
        let quantity = quantityField.get("v.value");

        var priceField = component.find("price");
        var price = priceField.get("v.value");

        if( $A.util.isEmpty( name ) ) nameField.set("v.errors", [{message:"Name can't be blank."}]);
        if( $A.util.isEmpty( quantity ) ) quantityField.set("v.errors", [{message:"Quantity can't be blank."}]);
        if( $A.util.isEmpty( price ) ) priceField.set("v.errors", [{message:"Price can't be blank."}]);

        return ( !$A.util.isEmpty( name ) && !$A.util.isEmpty( quantity ) && !$A.util.isEmpty( price ) );

    }
})