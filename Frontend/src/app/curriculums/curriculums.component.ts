import { Component, OnInit } from '@angular/core';
import { Curriculum } from '../models/curriculum';
import { CurriculumService } from '../services/curriculum.service';

@Component({
  selector: 'app-curriculums',
  templateUrl: './curriculums.component.html',
  styleUrls: ['./curriculums.component.css']
})
export class CurriculumsComponent implements OnInit {
  curriculums: Curriculum[] = [];

  constructor(private curriculumService: CurriculumService) { }

  ngOnInit(): void {
    this.getCurriculums();
  }  

  getCurriculums(): void {
    this.curriculumService.getCurriculums()
      .subscribe(curriculums => this.curriculums = curriculums);
  }

  delete(curriculum: Curriculum): void {
    this.curriculums = this.curriculums.filter(h => h !== curriculum);
    this.curriculumService.deleteCurriculum(curriculum.id as string).subscribe();
  }

}
