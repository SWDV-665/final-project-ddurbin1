import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NavtabPageRoutingModule } from './navtab-routing.module';

import { NavtabPage } from './navtab.page';

const routes: Routes = [
	{
	path: 'nav-tab',
	component: NavtabPage,
	children: [
		{
			path: 'home',
			loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
		},
		{
			path: 'list',
			loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
		},
		{
			path: 'support',
			loadChildren: () => import('../support/support.module').then( m => m.SupportPageModule)
		}
	]
	},
	{
		path: '',
		redirectTo: '/nav-tab/home'
	}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavtabPageRoutingModule,
	RouterModule.forChild(routes)
  ],
  declarations: [NavtabPage]
})
export class NavtabPageModule {}
