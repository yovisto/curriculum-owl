import { Component } from '@angular/core';
import { Organisation } from '../models/organisation';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrganisationService } from '../services/organisation.service';
import { Location } from '@angular/common';
import { OrganisationBase } from '../base-classes/organisation-component-base';

@Component({
  selector: 'app-organisation-detail',
  templateUrl: './organisation-detail.component.html',
  styleUrls: ['./organisation-detail.component.css']
})
export class OrganisationDetailComponent extends OrganisationBase<Organisation>{  

  organisationForm = new FormGroup({
    name: new FormControl(''),
    url: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private organisationService: OrganisationService,
    private location: Location
  ) {
    super();
  }

  ngOnInit(): void {
    this.getOrganisation();
  }

  getOrganisation(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.organisationService.getOrganisation(id)
      .subscribe(curr => this.dataItem = Object.assign(new Organisation(), curr));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.dataItem) {
      this.organisationService.updateOrganisation(this.dataItem)
        .subscribe(() => this.goBack());
    }
  }
}
