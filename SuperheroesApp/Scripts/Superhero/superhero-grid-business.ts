class SuperheroGridBusiness {

    private service: SuperheroService;

    public model: Array<SuperheroGridModel>;

    public OnModalLayoutGet: (layout: any) => void;
    public OnGridDataLoad: (data: Array<SuperheroGridModel>) => void;

    constructor(service: SuperheroService) {
        this.service = service;
        this.GetGridData();
    }

    private GetGridData(): void {
        this.service.GetGridData().done((data: Array<SuperheroGridModel>) => {
            this.model = data;
            this.triggerOnGridDataLoad(data);
        });
    }

    private triggerOnGridDataLoad(data: Array<SuperheroGridModel>): void {
        if (this.OnGridDataLoad) {
            this.OnGridDataLoad(data);
        }
    }

    public GetSuperheroModal(): void {
        this.service.GetSuperheroModal().done((data: any) => {
            this.triggerOnModalLayoutGet(data);
        });
    }

    private triggerOnModalLayoutGet(data: any): void {
        if (this.OnModalLayoutGet) {
            this.OnModalLayoutGet(data);
        }
    }

}

  