import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { Musica01Component } from '../musica01/musica01.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path:'musica01',
    component: Musica01Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
