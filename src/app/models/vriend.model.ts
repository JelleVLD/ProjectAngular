import { Gebruiker } from './gebruiker.model';

export class Vriend {
    constructor(public vriendenID: number,
    public ZenderID: number,
    public OntvangerID:number,
    public bevestigd:boolean,
    public zender:Gebruiker,
    public ontvanger:Gebruiker) { }
    }