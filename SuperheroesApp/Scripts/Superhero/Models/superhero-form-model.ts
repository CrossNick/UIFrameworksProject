class SuperheroFormModel {
    public Name: KnockoutObservable<string>;
    public Sername: KnockoutObservable<string>;
    public Nickname: KnockoutObservable<string>;
    public Patronymic: KnockoutObservable<string>;
    public DOB: KnockoutObservable<string>;
    public TOB: KnockoutObservable<string>;
    public Gender: KnockoutObservable<string>;
    public Superpower: KnockoutObservable<number>;
    public Achievements: KnockoutObservableArray<number>;

    public HasAdditionalInfo: KnockoutObservable<boolean>;

    public AdditionalInfo: KnockoutObservable<number>;

    public Superpowers: KnockoutObservableArray<SuperheroListModel>;
    public AchievementsList: KnockoutObservableArray<SuperheroListModel>;

    constructor() {
        this.Name = ko.observable<string>('').extend({  
            required: { message: 'This field is required.' }
        });

        this.Sername = ko.observable<string>('').extend({  
            required: { message: 'This field is required.' }
        });
        this.Nickname = ko.observable<string>('').extend({
            required: { message: 'This field is required.' }
        });
        this.Patronymic = ko.observable<string>('').extend({
            required: { message: 'This field is required.' }
        });
        this.DOB = ko.observable<string>('').extend({
            required: { message: 'This field is required.' }
        });
        this.TOB = ko.observable<string>('').extend({
            required: { message: 'This field is required.' }
        });
        this.Gender = ko.observable<string>('').extend({
            required: { message: 'This field is required.' }
        });
        this.Superpower = ko.observable<number>().extend({
            required: { message: 'This field is required.' }
        });
        this.Achievements = ko.observableArray<number>([]);
        this.HasAdditionalInfo = ko.observable<boolean>().extend({
            required: { message: 'This field is required.' }
        });
        this.AdditionalInfo = ko.observable<number>().extend({
            required: { message: 'This field is required.' }
        });

        this.Superpowers = ko.observableArray<SuperheroListModel>([]);
        this.AchievementsList = ko.observableArray<SuperheroListModel>([]);
    }
}