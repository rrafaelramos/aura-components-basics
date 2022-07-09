({
    doInit: function(component, event, helper) {

        let action = component.get( "c.getItems" );

        action.setCallback( this, function(response) {

            let state = response.getState( );

            if ( component.isValid() && state === "SUCCESS" ) {

                component.set("v.items", response.getReturnValue());

                $A.enqueueAction( action );
                return;
            }

            console.error( "Failed with state: " + state );

        });

    },

    handleAddItem: function(component, event, helper) {

        let action = component.get("c.saveItem");

    		action.setParams({"item": newItem});

    		action.setCallback(this, function(response){

        		let state = response.getState();

        		if (component.isValid() && state === "SUCCESS") {

                    let items = component.get("v.items");

                    items.push(response.getReturnValue());

                    component.set("v.items", items);
        		}
    		});

    	$A.enqueueAction(action);
    }

})
