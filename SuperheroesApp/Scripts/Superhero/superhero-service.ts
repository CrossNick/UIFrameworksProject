class SuperheroService {
    private urls: SuperheroUrlsModel;

    constructor(urls: SuperheroUrlsModel) {
        this.urls = urls;
    }

    public GetSuperpowers(): JQueryXHR {
        return $.get({
            url: this.urls.getSuperpowersUrl
        }); 
    }

    public GetAchievements(): JQueryXHR {
        return $.get({
            url: this.urls.getAchievementsUrl
        });
    }

    public GetGridData(): JQueryXHR {
        return $.get({
            url: this.urls.getGridDataUrl
        });
    }

    public GetSuperheroModal(id: number): JQueryXHR {
        return $.get({
            url: this.urls.getSuperheroModalUrl+'?id='+id
        });
    }
}