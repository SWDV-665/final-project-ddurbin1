import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
	{
		path:'home',
		component: HomePage,
		children: [
		  {
			path: 'list',
			loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
		  },
		  {
			path: 'support',
			loadChildren: () => import('../support/support.module').then( m => m.SupportPageModule)
		  },
		  {
			path: 'contact',
			loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
		  },
		]
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	}
];

  

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
