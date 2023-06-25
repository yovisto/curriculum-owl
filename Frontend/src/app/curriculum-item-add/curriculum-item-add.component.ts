import { Component } from '@angular/core';
import { CurriculumItem } from '../models/curriculum-item';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CurriculumItemService } from '../services/curriculum-item.service';
import { EntityComponentBase } from '../base-classes/entity-component-base';
import { CurriculumService } from '../services/curriculum.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-curriculum-item-add',
  templateUrl: './curriculum-item-add.component.html',
  styleUrls: ['./curriculum-item-add.component.css']
})
export class CurriculumItemAddComponent extends EntityComponentBase<CurriculumItem>{

  itemDetailAddForm = new FormGroup({    
    id: new FormControl(''),    
    prefLabel: new FormControl(''),    
    definition: new FormControl(''),
    keywords: new FormControl(''),    
    timeRequired: new FormControl(''),    
    taughtBy: new FormControl(''),    
    assessedBy: new FormControl(''),    
    educationalStandard: new FormControl(''),    
    broader: new FormControl(''),    
    narrower: new FormControl(''),    
    closeMatch: new FormControl(''),    
  });

  constructor(
    private route: ActivatedRoute,
    private curriculumItemService: CurriculumItemService,
    private curriculumService: CurriculumService,
    private dialog: MatDialog,
    private location: Location
  ) 
  {
    super(dialog, curriculumService, curriculumItemService);
  }

  ngOnInit(): void {
    this.getCurriculum();
  }

  getCurriculum(): void {
    this.dataItem = Object.assign(new CurriculumItem());
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.dataItem) {
      this.curriculumItemService.addCurriculumItem(this.dataItem)
        .subscribe(() => this.goBack());
    }
  }

}
