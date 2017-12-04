import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FetchAllComponent} from './view/fetch-all/fetch-all.component';

const routes: Routes = [
  {
    path: 'fetch-all',
    component: FetchAllComponent
  },
  {
    path: '',
    redirectTo: '/fetch-all',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/fetch-all',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
