class SuperheroGridController {

    private business: SuperheroGridBusiness;

    constructor(business: SuperheroGridBusiness) {
        this.business = business;

        this.business.OnGridDataLoad = this.OnDataLoaded; 
        this.business.OnModalLayoutGet = this.OnModalLoaded;
        this.business.Initialize();
    }

    public OnModalLoaded(layout: any) {
        debugger;
        $('.modal-backdrop').remove();
        var modalWindow = $("#basic");
        modalWindow.find('#basicModalDialog').empty();
        modalWindow.find('#basicModalDialog').append(layout);
        modalWindow.modal('show');
    }

    public OnDataLoaded(data: Array<SuperheroGridModel>) {

        var self = this;
        var callback = function (settings) {
            ko.applyBindings(self, $('#heroes-table')[0]);
        }
        $("#heroes-table").DataTable({
            data: data,
            lengthMenu: [10, 25, 50, 75, 100],
            drawCallback: callback,
            createdRow: function (row, data, index) {
                var template = "<td class='text-center'><span data-bind='text: model[" + index+"].Name'></span></td>" +
                    "<td class='text-center'><span data-bind='text: model[" + index+"].Nickname'></span></td>" +
                    "<td class='text-center'><span data-bind='text: model[" + index+"].DOB'></span></td>" +
                    "<td class='text-center'><button class='btn btn-success' data-bind='click: function(data, event) { GetSuperheroModal(" + data.Id + ")}'>View</button></td>"
                $(row).html(template);
            }
        });

    }
}

