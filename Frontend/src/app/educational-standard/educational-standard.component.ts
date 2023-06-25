import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Concept } from '../models/concept';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-educational-standard',
  templateUrl: './educational-standard.component.html',
  styleUrls: ['./educational-standard.component.css']
})
export class EducationalStandardComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'prefLabel', 'definition', 'yearBuilt'];
  dataSource: MatTableDataSource<Concept> | undefined;
  selection = new SelectionModel<Concept>(false, []);
  @ViewChild('paginator') paginator: MatPaginator;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Array<Concept>,
    private dialogRef: MatDialogRef<EducationalStandardComponent>,
    private cd: ChangeDetectorRef) {

  }


  applyFilter(target: any) {
    const filterValue = target.value.trim().toLowerCase();
    if (this.dataSource) {
      this.dataSource.filter = filterValue;

    }
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    this.dataSource = new MatTableDataSource<Concept>(this.data);
    this.dataSource.paginator = this.paginator;
    this.cd.detectChanges();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(row: any): void {
    this.selection.toggle(row);
    this.dialogRef.close(this.selection.selected);
  }
}


