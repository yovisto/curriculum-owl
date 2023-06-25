import { Component } from '@angular/core';
import { Organisation } from '../models/organisation';
import { OrganisationService } from '../services/organisation.service';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.css']
})
export class OrganisationsComponent {
  organisations: Organisation[] = [];

  constructor(private organisationService: OrganisationService) { }

  ngOnInit(): void {
    this.getOrganisations();
  }

  getOrganisations(): void {
    this.organisationService.getOrganisations()
    .subscribe(organisations => this.organisations = organisations);
  }


  delete(organisation: Organisation): void {
    this.organisations = this.organisations.filter(h => h !== organisation);
    this.organisationService.deleteOrganisation(organisation.id as string).subscribe();
  }
}
