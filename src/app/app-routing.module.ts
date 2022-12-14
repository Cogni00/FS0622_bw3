
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path:"",
        component: DashboardComponent
      },
      {
        path:"post",
        component: PostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
