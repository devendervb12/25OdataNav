sap.ui.controller("zcustomer_to_orders.CustomerToOrder", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcustomer_to_orders.CustomerToOrder
*/
	onInit: function() {
		
		var serviceURL = "proxy/http/services.odata.org/Northwind/Northwind.svc/";
		var oDataModel = new sap.ui.model.odata.v2.ODataModel(serviceURL);
		
		this.getView().setModel(oDataModel);

	},
	
	onItemPress : function(oEvent){
		// add selected customer's order in Table 2
		// 1. get Selected Customer ID
		var customerID = oEvent.getParameters().listItem.getCells()[0].getText();
		
	//	var oModel = this.getView().getModel();
		
		// /Customers('ALFKI')/Orders
		var oTemplate = new sap.m.ColumnListItem({
			cells : [
				new sap.m.Text({ text : "{OrderID}"}),
				new sap.m.Text({text : "{CustomerID}"}),
				new sap.m.Text({ text : "{EmployeeID}"})
			]
		})
		this.getView().byId("idTable2").bindAggregation("items","/Customers('"+customerID+"')/Orders", oTemplate);
		
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcustomer_to_orders.CustomerToOrder
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcustomer_to_orders.CustomerToOrder
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcustomer_to_orders.CustomerToOrder
*/
//	onExit: function() {
//
//	}

});