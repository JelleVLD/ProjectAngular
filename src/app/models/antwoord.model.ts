import { Stem } from './stem.model';

export class Antwoord {
    constructor(  
        public antwoordID:number,
        public antwoord:string,
        public pollID:number,
        public stemmen:Stem[]){}
    }