class SuperheroInfoController {

    private business: SuperheroInfoBusiness;
    public infoVue: vuejs.Vue;

    constructor(business: SuperheroInfoBusiness) {
        this.business = business;
    }

    public Initialize(model: SuperheroGridModel) {
        this.business.model = model;

        this.infoVue = new Vue({
            el: '#main-info',
            data: this.business
        });
    }
}

