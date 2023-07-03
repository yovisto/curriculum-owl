import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { EducationalSubjectService } from '../services/educational-subject.service';
import { Subject } from '../models/subject';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-educational-subjects',
  templateUrl: './educational-subjects.component.html',
  styleUrls: ['./educational-subjects.component.css']
})
export class EducationalSubjectsComponent implements AfterViewInit {

  displayedColumns = ['id', 'prefLabel', 'altLabel', 'editorialNote'];
  dataSource: MatTableDataSource<Subject> | undefined;
  @ViewChild('paginator') paginator: MatPaginator;

  constructor(
    private educationalSubjectService: EducationalSubjectService,
    private cd: ChangeDetectorRef) {


  }
  ngAfterViewInit(): void {
    this.educationalSubjectService.getEducationalSubjects().subscribe((subjects) => {
      this.dataSource = new MatTableDataSource<Subject>(subjects);
      this.cd.detectChanges();
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(target: any) {
    const filterValue = target.value.trim().toLowerCase();
    if (this.dataSource) {
      this.dataSource.filter = filterValue;
      this.dataSource.paginator = this.paginator;
    }
  }

  getFormattedAltLabel(item: Subject): string {
    const result = new Set(item.altLabel_de.concat(item.altLabel_en))
    return [...result].join(', ');
  }

}
