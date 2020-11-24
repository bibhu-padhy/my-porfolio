import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { ShowCopyDirective } from 'src/app/common/directives/show-copy/show-copy.directive';


@NgModule({
  declarations: [
    HomeComponent,
    ShowCopyDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
