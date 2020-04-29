import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
		children: [
		{path: 'home2',loadChildren: () => import('../pages/home2/home2.module').then( m => m.Home2PageModule)},
		{path: 'list', loadChildren: () => import('../pages/list/list.module').then( m => m.ListPageModule)},
		{path: 'support', loadChildren: () => import('../pages/support/support.module').then( m => m.SupportPageModule)},
		{path: 'contact', loadChildren: () => import('../pages/contact/contact.module').then( m => m.ContactPageModule)},
		]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}