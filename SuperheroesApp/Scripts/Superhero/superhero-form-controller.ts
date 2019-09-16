class SuperheroFormController {

    public business: SuperheroFormBusiness;
    public globalVue: vuejs.Vue;

    constructor(business: SuperheroFormBusiness) {
        this.business = business;
        this.business.OnAchievementsLoad = this.OnAchievementsLoad;
        this.business.OnSuperpowersGet = this.OnSuperpowersGet;

    }

    public Initialize() {
        this.business.Initialize();

        this.globalVue = new Vue({
            el: '#main-form',
            data: this.business
        });


        $("#dob").datetimepicker({
            format: 'DD/MM/YYYY'
        });

        $("#tob").datetimepicker({
            format: 'LT'
        });
        $("#superpower").select2();

        $("#achievements").select2();
    }

    public OnSubmit(param) {

    }

    public OnSuperpowersGet(superpowers: Array<SuperheroListModel>) {

    }

    public OnAchievementsLoad(achievements: Array<SuperheroListModel>) {

    }
}

