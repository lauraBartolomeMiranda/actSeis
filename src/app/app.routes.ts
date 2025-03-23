import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserViewComponent } from './pages/dashboard/user-view/user-view.component';
import { UserFormComponent } from './pages/dashboard/user-form/user-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


//defino als rutas
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }, //lista de usuarios
  {
    path: "dashboard", component: DashboardComponent,  children: //dashboard tiene rutas hijas
    [
        { path: 'user/:_id', component: UserViewComponent }, // vista del usuario(antes:  { path: 'user/:id', component: UserViewComponent }, // vista del usuario?
        { path: 'newuser', component: UserFormComponent }, // crear un usuario
        { path: 'updateuser/:_id', component: UserFormComponent }, // editar un usuario
    ]},
    { path: '**', redirectTo: '/home' } // errores redirecciona a home
  ];
  
  
