import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EducationalStandard } from '../models/educational-standard';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-educational-standard',
  templateUrl: './educational-standard.component.html',
  styleUrls: ['./educational-standard.component.css']
})
export class EducationalStandardComponent {

  constructor(private dialogRef: MatDialogRef<EducationalStandardComponent>) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(selected: any): void {    
    this.dialogRef.close(selected);
  }
}


