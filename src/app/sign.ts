//this class is used to catigorize the twelve zodiac signs and 
//the corresponding ruling planets displayed in the app 
export class Sign {
    name: string;
    startDate: string;
    endDate: string;
    element: string;
    planet: string;
    mode: string;
    tarot: string;
    stats: string;

    constructor(name: string, startDate: string, endDate: string, element: string, planet: string, mode: string, tarot: string, stats: string){
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.element = element;
        this.planet = planet;
        this.mode = mode;
        this.tarot = tarot;
        this.stats = stats;
    }
}