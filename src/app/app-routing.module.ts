import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchViewComponent } from './pages/gitHubViews/search-view/search-view.component';
import { UserViewComponent } from './pages/gitHubViews/user-view/user-view.component';

const routes: Routes = [
  {path:'',component:SearchViewComponent},
  {path:'search',component:SearchViewComponent},
  {path:'search/:userID',component:UserViewComponent},
  {path:'**',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
