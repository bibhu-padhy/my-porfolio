import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('src/app/view/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'cv',
    loadChildren: () => import('src/app/view/cv/cv.module').then(m => m.CvModule)
  },
  {
    path: 'app-store',
    loadChildren: () => import('src/app/view/app-store/app-store.module').then(m => m.AppStoreModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('src/app/view/blogs/blogs.module').then(m => m.BlogsModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
