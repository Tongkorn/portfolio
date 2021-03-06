import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  // { path: 'home', loadChildren: './views/home/home.module#HomePageModule' },
  { path: 'projects', loadChildren: './views/projects/projects.module#ProjectsPageModule' },
  // { path: 'contact', loadChildren: './views/contact/contact.module#ContactPageModule' },
  { path: 'about', loadChildren: './views/about/about.module#AboutPageModule' },
  // { path: 'modal', loadChildren: './views/modal/modal.module#ModalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
