import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EducationalLevelService } from '../services/educational-level.service';
import { EducationalLevel } from '../models/educational-level';

@Component({
  selector: 'app-educational-levels',
  templateUrl: './educational-levels.component.html',
  styleUrls: ['./educational-levels.component.css']
})
export class EducationalLevelsComponent implements OnInit, AfterViewInit{
  educationalLevels: EducationalLevel[] | undefined;
  constructor(
    private educationalLevelService: EducationalLevelService,
    private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.educationalLevelService.getEducationalLevels().subscribe((levels) => {            
      this.educationalLevels = levels;
      this.cd.detectChanges();
    });  
  }

  getFormattedAltLabel(item: EducationalLevel): string {
      const result = new Set(item.altLabel_de.concat(item.altLabel_en))
      return [...result].join(', ');      
  }

  ngOnInit(): void {
    
  }

}
