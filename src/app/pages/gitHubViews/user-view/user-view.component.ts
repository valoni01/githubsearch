import { Component, OnInit } from '@angular/core';
import { GithugService } from '../services/githug.service';
import { ActivatedRoute } from '@angular/router';
import { UserResponse } from '../models/response/userResponse';
import { UserRequest } from '../models/request/userRequest';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  userDetails = new UserResponse;
  totalCount:number;
  searchParams = new UserRequest;
  onLoad:boolean;
  constructor(private githubservice:GithugService,private route:ActivatedRoute) {
     this.searchParams.q = this.route.snapshot.params.userID
   }

  ngOnInit() {
    this.onUserSearch(this.searchParams);
  }
  
  onUserSearch(searchParam:UserRequest){
    this.onLoad = true;
    if(!this.searchParams.per_page){
      this.searchParams.per_page='10';
    }
    this.githubservice.getListOfUsers(searchParam).subscribe(
      data=>{
         this.userDetails = data['items'];
         this.totalCount  = data['total_count']
         this.onLoad = false;
      },
      error=>{
        this.onLoad = false;

      }
    )
 }


 pageEvent(event:any){
    this.searchParams.per_page=event.pageSize
    this.searchParams.page=event.pageIndex
    this.onUserSearch(this.searchParams)
 }

}
