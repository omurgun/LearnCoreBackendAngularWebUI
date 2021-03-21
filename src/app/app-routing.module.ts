import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:UserComponent},
  {path:"users", component:UserComponent},
  {path:"cars", component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
