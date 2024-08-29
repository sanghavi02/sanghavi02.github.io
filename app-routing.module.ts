
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DummyComponent } from './dummy/dummy.component';
import { ListComponent } from './employee/list/list.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './employee/detail/detail.component';
import { PaginationComponent } from './pagination/pagination.component';




const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'dummy', component: DummyComponent },
  { path: 'emplistdemo', component: ListComponent },
  { path: 'detail', component: DetailComponent },
  { path:'pagination',component: PaginationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }