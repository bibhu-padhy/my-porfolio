import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AngularFireStorageModule } from '@angular/fire/storage';


@NgModule({
  declarations: [CvComponent],
  imports: [
    CommonModule,
    CvRoutingModule,
    PdfViewerModule,
    AngularFireStorageModule
  ]
})
export class CvModule { }
