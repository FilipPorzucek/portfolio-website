import { ApplicationConfig } from '@angular/core';
import { provideRouter} from '@angular/router';
import { RouterLink } from '@angular/router';
import { Route,Routes } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';


const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'skills',component:SkillsComponent},
  {path:'certificates',component: CertificatesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } 
]



export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), provideClientHydration()]
};
