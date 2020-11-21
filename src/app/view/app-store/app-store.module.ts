import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppStoreRoutingModule } from './app-store-routing.module';
import { AppStoreComponent } from './app-store.component';


@NgModule({
  declarations: [AppStoreComponent],
  imports: [
    CommonModule,
    AppStoreRoutingModule
  ]
})
export class AppStoreModule { }
