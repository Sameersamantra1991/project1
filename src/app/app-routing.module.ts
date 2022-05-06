import { AddAngDateComponent } from './add-ang-date/add-ang-date.component';
import { analyzeNgModules } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'add-ang', component: AddAngDateComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
