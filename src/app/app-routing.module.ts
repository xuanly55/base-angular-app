import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppSigninComponent } from './app-signin/app-signin.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';

const routes: Routes = [
  {
    path: 'app/signin',
    component: AppSigninComponent
  },
  {
    path: 'app/main',
    component: AppMainComponent
  },
  {
    path: 'app/main/:type',
    component: AppMainComponent,
    // children: [
    //   { path: 'settings', component: LcxSettingsComponent },
    //   { path: 'help', component: LcxHelpComponent },
    //   { path: 'notes', component: LcxReleaseNotesComponent },
    // ]
  },
  {
    path: 'app/settings',
    component: AppSettingsComponent
  },
  { path: '', redirectTo: 'app/signin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
