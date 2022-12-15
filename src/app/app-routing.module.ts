import { MemoryComponent } from './components/memory/memory.component';

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TrisComponent } from './components/tris/tris.component';
import { SquareComponent } from './components/tris/square/square.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "post",
        component: PostComponent
      },
      {
        path:"profile",
        component: ProfileComponent
      },
      {
        path: "tris",
        component: TrisComponent
      },
      {
        path: "memory",
        component: MemoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
