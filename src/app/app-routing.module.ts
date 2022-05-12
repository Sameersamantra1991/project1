import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddAngDateComponent } from './add-ang-date/add-ang-date.component';
import { analyzeNgModules } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CenterComponent} from './center/center.component'

const routes: Routes = [{ path: 'add-ang', component: AddAngDateComponent },

{ path: 'home', component: CenterComponent},
  
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
