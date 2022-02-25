import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider'
import { ProjectComponent } from 'src/app/modules/project/project.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    PostsComponent,
    
    ProjectComponent
  
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatInputModule,
    FormsModule

  ]
})
export class DefaultModule { }
