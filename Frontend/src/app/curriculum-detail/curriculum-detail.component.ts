import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Curriculum } from '../models/curriculum';
import { CurriculumService } from '../services/curriculum.service';
import { FormControl, FormGroup } from '@angular/forms';
import { RdfMapper } from 'ts-rdf-mapper';
import { MatDialog } from '@angular/material/dialog';

import { CurriculumItemService } from '../services/curriculum-item.service';
import { EntityComponentBase } from '../base-classes/entity-component-base';
import { Organisation } from '../models/organisation';
import { EducationalStandard } from '../models/educational-standard';

@Component({
  selector: 'app-curriculum-detail',
  templateUrl: './curriculum-detail.component.html',
  styleUrls: ['./curriculum-detail.component.css']
})
export class CurriculumDetailComponent extends EntityComponentBase<Curriculum> implements OnInit {

  curriculumForm = new FormGroup({
    prefLabel: new FormControl(''),
    creator: new FormControl(''),
    publisher: new FormControl(''),
    about: new FormControl(''),
    definition: new FormControl(''),
    license: new FormControl(''),
    dateCreated: new FormControl((new Date()).toISOString()),
    version: new FormControl(''),
    keywords: new FormControl(''),
    timeRequired: new FormControl(''),
    educationalStandard: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private curriculumService: CurriculumService,
    private location: Location,
    private dialog: MatDialog,
    private curriculumItemService: CurriculumItemService,
  ) {
    super(dialog, curriculumService, curriculumItemService);
  }

  ngOnInit(): void {
    this.getCurriculum();
  }

  getCurriculum(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.curriculumService.getCurriculum(id)
      .subscribe(curr => {
        this.dataItem = Object.assign(new Curriculum(), curr);                                 
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.dataItem) {
      this.curriculumService.updateCurriculum(this.dataItem)
        .subscribe(() => {
          this.goBack();
        });
    }
  }
}
