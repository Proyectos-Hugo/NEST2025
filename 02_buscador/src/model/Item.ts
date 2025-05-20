export class Item {
    url:string;
    tematica:string;
    description:string;

    constructor(url?:string, tema?:string, des?:string){
        this.url=url;
        this.tematica=tema;
        this.description=des;
    }
}