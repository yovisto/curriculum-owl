import { Component, OnInit } from '@angular/core';
import { CurriculumItemService } from '../services/curriculum-item.service';
import { CurriculumItem } from '../models/curriculum-item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-curriculum-items',
  templateUrl: './curriculum-items.component.html',
  styleUrls: ['./curriculum-items.component.css']
})
export class CurriculumItemsComponent implements OnInit{

  curriculumItems: CurriculumItem[] = [];

  constructor(private curriculumItemService: CurriculumItemService) { }

  ngOnInit(): void {
    this.getCurriculumItems();
      
  }

  getCurriculumItems(): void {
    this.curriculumItemService.getCurriculumItems()
      .subscribe(currItems => this.curriculumItems = currItems);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.curriculumItemService.addCurriculumItem({ id: name } as CurriculumItem)
      .subscribe(curriculumItem => {
        this.curriculumItems.push(curriculumItem);
      });
  }

  delete(curriculum: CurriculumItem): void {
    this.curriculumItems = this.curriculumItems.filter(h => h !== curriculum);
    this.curriculumItemService.deleteCurriculumItem(curriculum.id as string).subscribe();
  }

}
