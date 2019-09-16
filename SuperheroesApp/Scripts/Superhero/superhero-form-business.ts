class SuperheroFormBusiness {

    private service: SuperheroService;

    public model: SuperheroFormModel;

    public superpowers: Array<SuperheroListModel>;
    public achievements: Array<SuperheroListModel>;


    public OnSuperpowersGet: (superpowers: Array<SuperheroListModel>) => void;
    public OnAchievementsLoad: (achievements: Array<SuperheroListModel>) => void;

    constructor(service: SuperheroService) {
        this.service = service;
        this.model = new SuperheroFormModel();
        this.superpowers = [];
        this.achievements = [];
    }

    public Initialize() {
        this.GetSuperpowers();
        this.GetAchievements();
    }

    private GetSuperpowers(): void {
        this.service.GetSuperpowers().done((data: Array<SuperheroListModel>) => {
            this.superpowers = data;
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
            this.achievements = data;
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
}

  