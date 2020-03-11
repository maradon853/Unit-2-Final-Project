export class Sign {
    name: string;
    startDate: number;
    endDate: number;
    element: string;
    planet: string;
    mode: string;
    tarot: string;

    constructor(name: string, startDate: number, endDate: number, element: string, planet: string, mode: string, tarot: string){
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.element = element;
        this.planet = planet;
        this.mode = mode;
        this.tarot = tarot;
    }
}