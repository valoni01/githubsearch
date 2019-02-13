import { environment } from '../../environments/environment';

export class Resource{
    
   public baseUrl:string;
   public searchUsers:string;

    constructor(){
        this.baseUrl = environment.baseUrl;
        this.searchUsers = '/search/users';
    }


}