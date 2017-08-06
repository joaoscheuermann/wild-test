$(function() {
    // List of countries for the select field   
    $("#jsGrid").jsGrid({
        height: "100%",
        width: "100%",
        filtering: true,
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 10,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete client?",
        controller: {
            loadData: function(filter) {
                // GET to retrieve client list
                return $.ajax({
                    type: "GET",
                    url: "/contacts",
                    data: filter
                });
            },
            insertItem: function(item) {
                // POST to create new client
                return $.ajax({
                    type: "POST",
                    url: "/contacts",
                    data: item
                });
            },
            updateItem: function(item) {
                // PUT to update the client
                return $.ajax({
                    type: "PUT",
                    url: "/contacts",
                    data: item
                });
            },
            deleteItem: function(item) {
                // DELETE to remove client
                return $.ajax({
                    type: "DELETE",
                    url: "/contacts",
                    data: item
                });
            }
        },
        fields: [
            { name: "Name", type: "text", width: 150 },
            { name: "Telephone", type: "number", width: 50, filtering: false },
            { name: "Address", type: "text", width: 200 },            
            { name: "Email", type: "text"},
            { name: "BirthDate", type: "number", width: 50, filtering: false },
            { type: "control" }
        ]
    });
});