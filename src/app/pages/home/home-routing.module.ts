import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {

        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'

      },
      {
        path: 'list',
        loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
      },
      {
        path: 'cards',
        loadChildren: () => import('../cards/cards.module').then( m => m.CardsPageModule)
      }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
