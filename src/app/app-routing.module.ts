import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ProjectComponent } from './modules/project/project.component';

const routes: Routes = [
 {
   component:DefaultComponent,
   path:'',
   children:[{
     path:'',
     component:HomeComponent
   },{
     component:PostsComponent,
     path:'post',
      
   },{
     component:ProjectComponent,
     path:'project'
   }]
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
