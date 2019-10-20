import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TariffListComponent} from './tariff-list/tariff-list.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TariffListComponent,
  },
  // {path: '**', component: NoContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
