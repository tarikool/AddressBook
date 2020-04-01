import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'create', loadChildren: () => import('./contact-create/contact-create.module').then( m => m.ContactCreatePageModule)
  },
  {
    path: 'edit/:id', loadChildren: () => import('./contact-edit/contact-edit.module').then( m => m.ContactEditPageModule)
  },
  {
    path: 'list', loadChildren: () => import('./contact-list/contact-list.module').then( m => m.ContactListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



