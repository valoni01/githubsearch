import { Injectable } from '@angular/core';
import { Resource } from 'src/app/core/resource';
import { HttpParams, HttpClient } from '@angular/common/http';
import { UserRequest } from '../models/request/userRequest';

@Injectable({
  providedIn: 'root'
})
export class GithugService {
   
  constructor(private coreresource:Resource,private http:HttpClient) { }
  
  base = this.coreresource.baseUrl;

getListOfUsers(searcParams:UserRequest){
  let params = new HttpParams
  let queryParams = params.append('q',searcParams.q)
                           .append('page',searcParams.page)
                           .append('per_page',searcParams.per_page)
  return this.http.get(this.base+this.coreresource.searchUsers,{params:queryParams})
}


}
