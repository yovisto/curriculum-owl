import { Component, Inject } from '@angular/core';
import { EducationalStandardComponent } from '../educational-standard/educational-standard.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KeyValue } from '@angular/common';
import { IGenericDisplay } from '../interfaces/generic-display';

@Component({
  selector: 'app-generic-dialog-content',
  templateUrl: './generic-dialog-content.component.html',
  styleUrls: ['./generic-dialog-content.component.css']
})
export class GenericDialogContentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IGenericDisplay, private dialogRef: MatDialogRef<EducationalStandardComponent>) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
