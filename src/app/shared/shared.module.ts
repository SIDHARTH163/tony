import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDividerModule} from '@angular/material/divider'
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatButtonModule} from '@angular/material/button'
import {MatListModule} from '@angular/material/list'
import { RouterModule } from '@angular/router';
import {MatInputModule } from '@angular/material/input'
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    RouterModule,
    MatInputModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent
      ]
})
export class SharedModule { }
