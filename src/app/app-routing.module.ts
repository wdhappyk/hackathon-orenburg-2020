import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'animal-categories', pathMatch: 'full' },
  {
    path: 'animal-categories',
    loadChildren: () => import('./animal-categories-page/animal-categories-page.module').then(m => m.AnimalCategoriesPageModule),
  },
  {
    path: 'animal-search',
    loadChildren: () => import('./animal-search-page/animal-search-page.module').then(m => m.AnimalSearchPageModule),
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
