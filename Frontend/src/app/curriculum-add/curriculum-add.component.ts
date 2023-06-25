import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../services/curriculum.service';
import { Curriculum } from '../models/curriculum';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { EntityComponentBase } from '../base-classes/entity-component-base';
import { CurriculumItemService } from '../services/curriculum-item.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-curriculum-add',
  templateUrl: './curriculum-add.component.html',
  styleUrls: ['./curriculum-add.component.css']
})
export class CurriculumAddComponent extends EntityComponentBase<Curriculum> {    

  curriculumAddForm = new FormGroup({        
    id: new FormControl(''),
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
    narrower: new FormControl(''), 
    closeMatch: new FormControl(''), 
  });

  constructor(
    private curriculumService: CurriculumService, 
    private curriculumItemService: CurriculumItemService,
    private dialog: MatDialog,
    private location: Location) 
    {
      super(dialog, curriculumService, curriculumItemService);
      this.dataItem = Object.assign(new Curriculum());
    }  

  goBack(): void {
    this.location.back();
  
  }

  save(): void {
    if (this.dataItem) {
      this.dataItem.id = (this.dataItem.id as string).trim()
      this.curriculumService.addCurriculum(this.dataItem)
        .subscribe(curriculum => {
          this.location.back();
        });
       return; 
    }
    throw new Error("Curriculum Item not initialised!");
  }

}
