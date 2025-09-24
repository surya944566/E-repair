import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { Mainpage } from './mainpage/mainpage';


const routes: Routes = [
  {path: '',component: Mainpage},
  {path: 'admin',component: Admin}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
