class SuperheroFormBusiness {

    private service: SuperheroService;

    public model: SuperheroFormModel;



    public OnSuperpowersGet: (superpowers: Array<SuperheroListModel>) => void;
    public OnAchievementsLoad: (achievements: Array<SuperheroListModel>) => void;

    constructor(service: SuperheroService) {
        this.service = service;

        this.model = new SuperheroFormModel();
    }

    public Initialize() {
        this.GetSuperpowers();
        this.GetAchievements();
    }

    private GetSuperpowers(): void {
        this.service.GetSuperpowers().done((data: Array<SuperheroListModel>) => {
            this.model.Superpowers(data);
            this.triggerOnSuperpowersGet(data);
        });
    }

    private triggerOnSuperpowersGet(data: Array<SuperheroListModel>): void {
        if (this.OnSuperpowersGet) {
            this.OnSuperpowersGet(data);
        }
    }

    private GetAchievements(): void {
        this.service.GetAchievements().done((data: Array<SuperheroListModel>) => {
            this.model.AchievementsList(data);
            this.triggerOnAchievementsLoad(data);
        });
    } 

    private triggerOnAchievementsLoad(data: Array<SuperheroListModel>): void {
        if (this.OnAchievementsLoad) {
            this.OnAchievementsLoad(data);
        }
    }

    public Save(model: SuperheroFormModel): void {
        this.model = model;
    }



    public Submit() {

    }
}

  