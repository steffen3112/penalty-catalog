import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PenaltycontentPage } from './penaltycontent.page';

const routes: Routes = [
  {
    path: '',
    component: PenaltycontentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PenaltycontentPage]
})
export class PenaltycontentPageModule {}
