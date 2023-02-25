import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './guards/auth.guard'
import { IsAdminGuard } from './guards/is-admin.guard'
import { UnauthGuard } from './guards/unauth.guard'

const routes: Routes = [
	{
		path: 'sign-up',
		loadChildren: () =>
			import('./pages/signup/signup.module').then((m) => m.SignupModule),
		canActivate: [UnauthGuard],
	},
	{
		path: 'log-in',
		loadChildren: () =>
			import('./pages/login/login.module').then((m) => m.LoginModule),
		canActivate: [UnauthGuard],
	},

	{
		path: 'about-us',
		loadChildren: () =>
			import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule),
	},
	{
		path: 'contact-us',
		loadChildren: () =>
			import('./pages/contact-us/contact-us.module').then(
				(m) => m.ContactUsModule,
			),
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./pages/dashboard/dashboard.module').then(
				(m) => m.DashboardModule,
			),
		canActivate: [AuthGuard],
	},
	{
		path: 'unauthorized/:unauth_type',
		loadChildren: () =>
			import('./pages/unauthorized/unauthorized.module').then(
				(m) => m.UnauthorizedModule,
			),
	},
	{
		path: 'manage-event',
		loadChildren: () =>
			import('./pages/manage-event/manage-event.module').then(
				(m) => m.ManageEventModule,
			),
		canActivate: [AuthGuard, IsAdminGuard],
	},
	{
		path: '',
		loadChildren: () =>
			import('./pages/home/home.module').then((m) => m.HomeModule),
		pathMatch: 'full',
		canActivate: [UnauthGuard],
	},

	{
		path: '**',
		loadChildren: () =>
			import('./pages/page-not-found/page-not-found.module').then(
				(m) => m.PageNotFoundModule,
			),
	},
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabledBlocking',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
