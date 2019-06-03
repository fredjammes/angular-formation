import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/formation',
    pathMatch: 'full'
  },
  {
    path: 'formation',
    loadChildren: () => import('./formation/formation.module').then(mod => mod.FormationModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule {
}
