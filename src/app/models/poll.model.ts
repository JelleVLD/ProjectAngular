import { Antwoord } from './antwoord.model'

export class Poll {
    constructor(public pollID: number,
        public  naam:string,
        public antwoorden:Antwoord[]){}
    }