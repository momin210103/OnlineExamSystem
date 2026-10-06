import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { Dashboard } from './features/student/dashboard/dashboard';
import { AdmissionPackages } from './features/admission/admission-packages/admission-packages';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'student/dashboard',
    component: Dashboard,
  },
  {
    path: 'category/adminssion-preparation-packages',
    component: AdmissionPackages,
  },
];
