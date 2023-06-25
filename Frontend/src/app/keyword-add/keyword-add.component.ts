import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-keyword-add',
  templateUrl: './keyword-add.component.html',
  styleUrls: ['./keyword-add.component.css']
})
export class KeywordAddComponent {

  keyword : string = "";

  keywordForm = new FormGroup({
    keyword: new FormControl(''),    
  });

  constructor(private dialogRef: MatDialogRef<KeywordAddComponent>)  {
        
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close(this.keyword);
  }

}
