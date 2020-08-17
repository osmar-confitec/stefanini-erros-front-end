export enum Priority
{

    Hight = 1,
    Average = 2,
    Low = 3

}

export enum Layer
{
    App = 1,
    Domain = 2,
    Repository = 3,
    Others = 4
}
export enum NotyType
{
    Alert = 1,
    Error = 2,
    Success = 3,
    Information = 4
}

export enum NotyIntention
{



}

export class Noty {

    priority:Priority;

    public layer?: Layer;

    public notyType:NotyType;

    public message:string;

    public notyIntention?:NotyIntention;

    public errorProperties:Array<string>;



}
