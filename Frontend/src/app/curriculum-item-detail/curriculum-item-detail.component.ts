import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurriculumItemService } from '../services/curriculum-item.service';
import { CurriculumItem } from '../models/curriculum-item';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { KeywordAddComponent } from '../keyword-add/keyword-add.component';
import { MatchComponent } from '../match/match.component';
import { EntityComponentBase } from '../base-classes/entity-component-base';
import { CurriculumService } from '../services/curriculum.service';

@Component({
  selector: 'app-curriculum-item-detail',
  templateUrl: './curriculum-item-detail.component.html',
  styleUrls: ['./curriculum-item-detail.component.css']
})
export class CurriculumItemDetailComponent extends EntityComponentBase<CurriculumItem> implements OnInit {

  itemDetailUpdateForm = new FormGroup({
    prefLabel: new FormControl(''),
    definition: new FormControl(''),
    keywords: new FormControl(''),
    timeRequired: new FormControl(''),
    taughtBy: new FormControl(''),
    assessedBy: new FormControl(''),
    educationalStandard: new FormControl(''),    
  });  

  constructor(
    private route: ActivatedRoute,
    private curriculumItemService: CurriculumItemService,
    private curriculumService: CurriculumService,
    private location: Location,
    private dialog: MatDialog, 
  ) {
    super(dialog, curriculumService, curriculumItemService);
  }

  ngOnInit(): void {
    this.getCurriculum();
    
  }

  getCurriculum(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.curriculumItemService.getCurriculumItem(id)
      .subscribe(curr => this.dataItem = Object.assign(new CurriculumItem(), curr));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.dataItem) {
      this.curriculumItemService.updateCurriculumItem(this.dataItem)
        .subscribe(() => this.goBack());
    }
  }

}
