class SuperheroInfoController {

    private business: SuperheroInfoBusiness;

    constructor(business: SuperheroInfoBusiness) {
        this.business = business;
    }

    public Initialize(model: SuperheroGridModel) {
        this.business.model = model;
    }
}

