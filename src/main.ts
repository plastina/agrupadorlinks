import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LinksComponent } from './app/links/links.component';

const routes: Routes = [{ path: '', component: LinksComponent }];

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))],
}).catch((err) => console.error(err));
