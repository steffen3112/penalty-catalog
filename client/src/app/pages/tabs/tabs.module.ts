import { PenaltiesPageModule } from './../penalties/penalties.module';
import { CatalogPageModule } from './../catalog/catalog.module';
import { PenaltiesPage } from './../penalties/penalties.page';
import { CatalogPage } from './../catalog/catalog.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { DashboardPage } from '../dashboard/dashboard.page';
import { MyteamPage } from '../myteam/myteam.page';
import { DashboardPageModule } from '../dashboard/dashboard.module';
import { MyteamPageModule } from '../myteam/myteam.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        outlet: 'dashboard',
        component: DashboardPage
      },
      {
        path: 'catalog',
        outlet: 'catalog',
        component: CatalogPage
      },
      {
        path: 'penalties',
        outlet: 'penalties',
        component: PenaltiesPage
      },
      {
        path: 'myteam',
        outlet: 'myteam',
        component: MyteamPage
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DashboardPageModule,
    CatalogPageModule,
    PenaltiesPageModule,
    MyteamPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
