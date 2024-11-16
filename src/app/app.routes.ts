import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksComponent } from './links/links.component';

export const routes: Routes = [{ path: '', component: LinksComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
