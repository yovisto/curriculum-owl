import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curriculum } from '../models/curriculum';
import { CurriculumItem } from '../models/curriculum-item';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  
  displayedColumns: string[] = ['select', 'id', 'prefLabel', 'definition'];
  dataSource = new MatTableDataSource<Curriculum | CurriculumItem>(this.data);
  selection = new SelectionModel<Curriculum | CurriculumItem>(true, []);

  constructor(@Inject(MAT_DIALOG_DATA) public data: Array<Curriculum | CurriculumItem>, private dialogRef: MatDialogRef<MatchComponent>)  {
    
  }

  ngOnInit(): void {
    
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close(this.selection.selected);
  }
}
