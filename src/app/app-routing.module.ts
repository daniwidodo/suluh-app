import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'article-details',
    loadChildren: () => import('./pages/article-details/article-details.module').then( m => m.ArticleDetailsPageModule)
  },
  {
    path: 'podcast-player',
    loadChildren: () => import('./pages/podcast-player/podcast-player.module').then( m => m.PodcastPlayerPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'podcast-lists',
    loadChildren: () => import('./pages/podcast-lists/podcast-lists.module').then( m => m.PodcastListsPageModule)
  },
  {
    path: 'radio-lists',
    loadChildren: () => import('./pages/radio-lists/radio-lists.module').then( m => m.RadioListsPageModule)
  },
  {
    path: 'radio-search',
    loadChildren: () => import('./pages/radio-search/radio-search.module').then( m => m.RadioSearchPageModule)
  },
  {
    path: 'podcast-search',
    loadChildren: () => import('./pages/podcast-search/podcast-search.module').then( m => m.PodcastSearchPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
