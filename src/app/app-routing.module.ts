import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/LoginPage/login/login.component';
import { HomepageComponent } from './Components/HomePage/homepage/homepage.component';
import { AuthorpageComponent } from './Components/authorPage/authorpage/authorpage.component';
import { authGuard } from './Services/auth.guard';


const routes: Routes = [
  { path: "", component: LoginComponent },
  {path:"login", component:LoginComponent},
  { path: "homepage", component: HomepageComponent, canActivate:[authGuard]},
  {
    path: "homepage" ,
    loadChildren: () => import('./Components/HomePage/homepage/homepage.module').then(m => m.HomepageModule),
   
  },
  {path:"authorpage", component:AuthorpageComponent, canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
