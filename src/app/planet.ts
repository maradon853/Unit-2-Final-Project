export class Planet {
    name: string;
    stats: string;
    mythology: string;
    sign: string;
    

    constructor(name: string, stats: string, mythology: string, sign: string){
        this.name = name;
        this.stats = stats;
        this.mythology = mythology;
        this.sign = sign;
    }
}