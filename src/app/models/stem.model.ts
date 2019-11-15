import { Gebruiker } from './gebruiker.model';

export class Stem {
    constructor(
        public stemID:number,
        public antwoordID:number,
        public gebruikerID:number,
        public gebruiker:Gebruiker){}
    }