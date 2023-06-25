import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import { MatInputModule } from '@angular/material/input' 
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CurriculumDetailComponent } from './curriculum-detail/curriculum-detail.component';
import { CurriculumsComponent } from './curriculums/curriculums.component';
import { MessagesComponent } from './messages/messages.component';
import { CurriculumItemsComponent } from './curriculum-items/curriculum-items.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { CurriculumAddComponent } from './curriculum-add/curriculum-add.component';
import { CurriculumItemDetailComponent } from './curriculum-item-detail/curriculum-item-detail.component';
import { CurriculumItemAddComponent } from './curriculum-item-add/curriculum-item-add.component';
import { OrganisationDetailComponent } from './organisation-detail/organisation-detail.component';
import { OrganisationAddComponent } from './organisation-add/organisation-add.component';
import { ToastrModule } from 'ngx-toastr';
import { KeywordAddComponent } from './keyword-add/keyword-add.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule} from '@angular/material/toolbar'
import { EducationalStandardComponent } from './educational-standard/educational-standard.component';
import { MatchComponent } from './match/match.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,   
    MatPaginatorModule, 
    MatToolbarModule,
    ToastrModule.forRoot(),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    CurriculumsComponent,
    CurriculumDetailComponent,
    MessagesComponent,
    CurriculumItemsComponent,
    OrganisationsComponent,
    CurriculumAddComponent,
    CurriculumItemDetailComponent,
    CurriculumItemAddComponent,
    OrganisationDetailComponent,
    OrganisationAddComponent,
    KeywordAddComponent,
    KeywordAddComponent,
    EducationalStandardComponent,
    MatchComponent
  ],
  bootstrap: [AppComponent],
  providers:[importProvidersFrom([BrowserAnimationsModule])]
})
export class AppModule { }
