import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  { 
    path: '', 
    loadChildren: './pages/tabs/tabs.module#TabsPageModule' 
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  {
    path: 'settings',
    loadChildren: './pages/settings/settings.module#SettingsPageModule'
  },
  {
    path: 'penalties',
    loadChildren: './pages/penalties/penalties.module#PenaltiesPageModule'
  },
  // { path: 'admin', loadChildren: './pages/admin/admin.module#AdminPageModule' },
  // { path: 'usercontent', loadChildren: './pages/usercontent/usercontent.module#UsercontentPageModule' },
  // { path: 'penaltycontent', loadChildren: './pages/penaltycontent/penaltycontent.module#PenaltycontentPageModule' },
  // { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  // { path: 'catalog', loadChildren: './pages/catalog/catalog.module#CatalogPageModule' },
  // { path: 'myteam', loadChildren: './pages/myteam/myteam.module#MyteamPageModule' },
  // { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  // { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
