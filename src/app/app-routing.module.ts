import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule),
  },
  {
    path: 'animal-categories',
    loadChildren: () => import('./animal-categories-page/animal-categories-page.module').then(m => m.AnimalCategoriesPageModule),
  },
  {
    path: 'animal-search',
    loadChildren: () => import('./animal-search-page/animal-search-page.module').then(m => m.AnimalSearchPageModule),
  },
  {
    path: 'administration-tasks',
    loadChildren: () => import('./administration-tasks-page/administration-tasks-page.module').then(m => m.AdministrationTasksPageModule),
  },
  {
    path: 'administration-apps',
    loadChildren: () => import('./administration-apps-page/administration-apps-page.module').then(m => m.AdministrationAppsPageModule),
  },
  {
    path: 'shelters',
    loadChildren: () => import('./shelters-page/shelters-page.module').then(m => m.SheltersPageModule),
  },
  {
    path: 'contractor-orders',
    loadChildren: () => import('./contractor-orders-page/contractor-orders-page.module').then(m => m.ContractorOrdersPageModule),
  },
  {
    path: 'map',
    loadChildren: () => import('./map-page/map-page.module').then(m => m.MapPageModule),
  },
  {
    path: 'administration-app-detail',
    loadChildren: () => import('./administration-app-detail-page/administration-app-detail-page.module').then(m => m.AdministrationAppDetailPageModule),
  },
  {
    path: 'administration-task-detail',
    loadChildren: () => import('./administration-task-detail-page/administration-task-detail-page.module').then(m => m.AdministrationTaskDetailPageModule),
  },
  {
    path: 'contractors',
    loadChildren: () => import('./contractors-page/contractors-page.module').then(m => m.ContractorsPageModule),
  },
  {
    path: 'contractor-order-detail',
    loadChildren: () => import('./contractor-order-detail-page/contractor-order-detail-page.module').then(m => m.ContractorOrderDetailPageModule),
  },
  {
    path: 'shelter-animals',
    loadChildren: () => import('./shelter-animals-page/shelter-animals-page.module').then(m => m.ShelterAnimalsPageModule),
  },
  {
    path: 'shelter-animal-detail',
    loadChildren: () => import('./shelter-animal-detail-page/shelter-animal-detail-page.module').then(m => m.ShelterAnimalDetailPageModule),
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
