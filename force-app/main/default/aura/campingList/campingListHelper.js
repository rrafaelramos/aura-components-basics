({
    
    addItem: function(component, item) {
    
        this.saveItem(component, item, function(response){

            let state = response.getState();

            if ( component.isValid() && state === "SUCCESS") return;
            
            console.error( state );

        });
    
    }

 })
 