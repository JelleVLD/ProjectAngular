import { Gebruiker } from './gebruiker.model';
import{Poll} from './poll.model';

export class PollGebruiker {
    constructor(
        public  polGebruikerID:number,
        public pollID:number,
        public gebruikerID:number,
        public hasCreated:boolean,
        public gebruiker:Gebruiker,
        public poll:Poll){}
    }