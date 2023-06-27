import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumsComponent } from './curriculums/curriculums.component';
import { CurriculumDetailComponent } from './curriculum-detail/curriculum-detail.component';
import { CurriculumItemsComponent } from './curriculum-items/curriculum-items.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { CurriculumAddComponent } from './curriculum-add/curriculum-add.component';
import { CurriculumItemDetailComponent } from './curriculum-item-detail/curriculum-item-detail.component';
import { CurriculumItemAddComponent } from './curriculum-item-add/curriculum-item-add.component';
import { OrganisationAddComponent } from './organisation-add/organisation-add.component';
import { OrganisationDetailComponent } from './organisation-detail/organisation-detail.component';
import { EducationalStandardDetailComponent } from './educational-standard-detail/educational-standard-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/curriculums', pathMatch: 'full' },
  { path: 'detail/:id', component: CurriculumDetailComponent },
  { path: 'item-detail/:id', component: CurriculumItemDetailComponent },
  { path: 'organisation-detail/:id', component: OrganisationDetailComponent },
  { path: 'item-add', component: CurriculumItemAddComponent },
  { path: 'curriculums', component: CurriculumsComponent },
  { path: 'curriculum-items', component: CurriculumItemsComponent },
  { path: 'organisations', component: OrganisationsComponent },
  { path: 'curriculum-add', component: CurriculumAddComponent },
  { path: 'organisation-add', component: OrganisationAddComponent },
  { path: 'educational-standards', component: EducationalStandardDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
