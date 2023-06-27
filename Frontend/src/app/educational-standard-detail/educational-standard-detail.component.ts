import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EducationalStandardService } from '../services/educational-standard.service';
import { MatTableDataSource } from '@angular/material/table';
import { EducationalStandard } from '../models/educational-standard';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { GenericDialogContentComponent } from '../generic-dialog-content/generic-dialog-content.component';
import { MatDialog } from '@angular/material/dialog';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-educational-standard-detail',
  templateUrl: './educational-standard-detail.component.html',
  styleUrls: ['./educational-standard-detail.component.css']
})
export class EducationalStandardDetailComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'prefLabel', 'definition', 'educationalLevel', 'yearBuilt'];
  dataSource: MatTableDataSource<EducationalStandard> | undefined;
  selection = new SelectionModel<EducationalStandard>(false, []);
  @ViewChild('paginator') paginator: MatPaginator;
  @Input() isDialog: boolean = false;
  @Output() notifyDialogParent: EventEmitter<any> = new EventEmitter();

  constructor(
    private educationStandardService: EducationalStandardService,
    private dlg: MatDialog,
    private cd: ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.educationStandardService.getEducationalStandards().subscribe((standards) => {
      this.dataSource = new MatTableDataSource<EducationalStandard>(standards);
      this.cd.detectChanges();
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(target: any) {
    const filterValue = target.value.trim().toLowerCase();
    if (this.dataSource) {
      this.dataSource.filter = filterValue;
      this.dataSource.paginator = this.paginator;
    }
  }

  onRowClick(row: any): void {
    if (this.isDialog) {
      this.selection.toggle(row);
      this.notifyDialogParent.emit(this.selection.selected);
      return;
    }
    
    const dataParam =  {'Id': row.id , 'Educational Level': row.educationalLevel, 'Label': row.prefLabel, 'Definition': row.definition };
    const keys = ['Id', 'Educational Level', 'Label', 'Definition'];
    const header = 'Educational Standard Item Detail';
    const data = {header: header, data: dataParam, keys: keys};
    
    this.dlg.open(GenericDialogContentComponent, {
      width: '500px',      
      data: data,
      autoFocus: false,
    });
  }

}
