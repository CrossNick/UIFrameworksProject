class SuperheroFormController {

    private business: SuperheroFormBusiness;

    constructor(business: SuperheroFormBusiness) {
        this.business = business;

        this.eventSubscribing();


        $("#dob").datetimepicker({
            format: 'DD/MM/YYYY'
        });

        $("#tob").datetimepicker({
            format: 'LT'
        });

        this.business.Initialize();
        this.applyBindings();
    }

    private applyBindings() {
        ko.applyBindings(this.business, $('#main-form')[0]);
    }

    private eventSubscribing() {
        this.business.OnSuperpowersGet = this.onSuperpowersGet;
        this.business.OnAchievementsLoad = this.onAchievementsGet;
    }

    private onSuperpowersGet(superpowers: Array<SuperheroListModel>) {
        $("#superpower").select2({
            data: superpowers
        });
    }

    private onAchievementsGet(achievements: Array<SuperheroListModel>) {
        $("#achievements").select2({
            data: achievements
        });
    }
}

