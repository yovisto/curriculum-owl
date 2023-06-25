import { Component } from '@angular/core';
import { Organisation } from '../models/organisation';
import { FormControl, FormGroup } from '@angular/forms';
import { OrganisationService } from '../services/organisation.service';
import { Location } from '@angular/common';
import { OrganisationBase } from '../base-classes/organisation-component-base';

@Component({
  selector: 'app-organisation-add',
  templateUrl: './organisation-add.component.html',
  styleUrls: ['./organisation-add.component.css']
})
export class OrganisationAddComponent extends OrganisationBase<Organisation> {

  organisationAddForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    url: new FormControl(''),
  });

  constructor(
    private organisationService: OrganisationService,
    private location: Location) {
    super();
    this.dataItem = Object.assign(new Organisation());
  }

  goBack(): void {
    this.location.back();

  }

  save(): void {
    if (this.dataItem) {
      this.dataItem.id = (this.dataItem.id as string).trim()
      this.organisationService.addOrganisation(this.dataItem)
        .subscribe(organisation => {
          this.location.back();
        });
    }
  }
}
