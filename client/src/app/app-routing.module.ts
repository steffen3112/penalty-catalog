import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './components/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './components/list/list.module#ListPageModule'
  },
  {
    path: 'settings', 
    loadChildren: './components/settings/settings.module#SettingsPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
