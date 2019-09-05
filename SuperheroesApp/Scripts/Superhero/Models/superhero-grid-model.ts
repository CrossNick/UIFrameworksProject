class SuperheroGridModel {
    public Id: KnockoutObservable<number>;
    public Name: KnockoutObservable<string>;
    public Nickname: KnockoutObservable<string>;
    public DOB: KnockoutObservable<string>;

    constructor() {
        this.Id = ko.observable<number>();
        this.Name = ko.observable<string>('');
        this.Nickname = ko.observable<string>('');
        this.DOB = ko.observable<string>('');
    }

}