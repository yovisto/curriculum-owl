import { Component } from '@angular/core';
import { CurriculumItemService } from '../services/curriculum-item.service';
import { CurriculumItem } from '../models/curriculum-item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-curriculum-items',
  templateUrl: './curriculum-items.component.html',
  styleUrls: ['./curriculum-items.component.css']
})
export class CurriculumItemsComponent {

  curriculumItems: CurriculumItem[] = [];

  constructor(private curriculumItemService: CurriculumItemService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getCurriculumItems();
    
    //this.http.get('assets/file1.txt', {responseType: 'text'})
    //  .subscribe(data => console.log(data));
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
