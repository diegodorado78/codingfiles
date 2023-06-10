import { NgModule } from '@angular/core';
import {PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './pages/components/not-found-page/not-found-page.component';
import {LayoutComponent} from './pages/components/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)        },

      {
        path: 'kpis',
        // canActivate: [AdminGuard],
        loadChildren: () => import('./kpis/kpis.module').then(m => m.KpisModule)
      },
      {
        path: 'reports',
        // canActivate: [AdminGuard],
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      },
    ]
  },
  {
    path: '**',
    component:NotFoundPageComponent ,

  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
  //  preloadingStrategy: PreloadAllModules // metodo para precargar componentes no usados
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
