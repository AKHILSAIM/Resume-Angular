import { Routes } from '@angular/router';
import { ResumeFormComponent } from './resume-form.component';
import { ResumeViewComponent } from './resume-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', component: ResumeFormComponent },
  { path: 'view', component: ResumeViewComponent }
];