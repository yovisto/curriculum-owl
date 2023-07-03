import { MatDialog } from "@angular/material/dialog";
import { KeywordAddComponent } from "../keyword-add/keyword-add.component";
import { Curriculum } from "../models/curriculum";
import { CurriculumItem } from "../models/curriculum-item";
import { CurriculumService } from "../services/curriculum.service";
import { CurriculumItemService } from "../services/curriculum-item.service";
import { MatchComponent } from "../match/match.component";
import { EducationalStandard } from "../models/educational-standard";
import { EducationalStandardComponent } from "../educational-standard/educational-standard.component";
import { RdfMapper } from "ts-rdf-mapper";
import { Organisation } from "../models/organisation";
import { IToggleTtl } from "../interfaces/toggle-ttl.interface";
import { GenericDialogContentComponent } from "../generic-dialog-content/generic-dialog-content.component";
import { EducationalLevel } from "../models/educational-level";
import { Subject } from "../models/subject";

export class EntityComponentBase<T extends Curriculum | CurriculumItem> implements IToggleTtl {

    dataItem: T | undefined;
    curriculums: Curriculum[] = [];
    curriculumItems: CurriculumItem[] = [];
    ttlView: boolean = false;
    ttlText: string = "";

    constructor(
        protected dlg: MatDialog,
        private curriculumSrvc: CurriculumService,
        private curriculumItemSrvc: CurriculumItemService,
    ) {
        this.getAllCurricula();
        this.getAllCurriculumItems();
    }

    toggleTtlView(): void {        
        this.ttlText = this._getSerializedDataItem();
        this.ttlView = !this.ttlView;        
    }

    private _getSerializedDataItem(): string {        

        if (this.dataItem) {
            if (this.dataItem instanceof Curriculum && this.dataItem.creator) {
                this.dataItem.creator = Object.assign(new Organisation(), this.dataItem.creator);
            }
            if (this.dataItem instanceof Curriculum && this.dataItem.publisher) {
                this.dataItem.publisher = Object.assign(new Organisation(), this.dataItem.publisher);
            }
            if (this.dataItem.educationalStandard) {
                this.dataItem.educationalStandard.educationalLevel = Object.assign(new EducationalLevel, this.dataItem.educationalStandard.educationalLevel);
                this.dataItem.educationalStandard.subject = Object.assign(new Subject, this.dataItem.educationalStandard.subject);
                this.dataItem.educationalStandard = Object.assign(new EducationalStandard(), this.dataItem.educationalStandard);
            }
        }
        
        return RdfMapper.serialize(this.dataItem);
    }

    getAllCurricula(): void {
        this.curriculumSrvc.getCurriculums()
            .subscribe(curriculums => this.curriculums = curriculums);
    }

    getAllCurriculumItems(): void {
        this.curriculumItemSrvc.getCurriculumItems()
            .subscribe(items => {
                this.curriculumItems = items;
            });
    }

    deleteStringListItem(list: Array<string>, item: string): void {
        const index = list.indexOf(item, 0) as number;
        if (index > -1) {
            list.splice(index, 1);
        }
    }

    concat(curricula: Array<Curriculum>, curriculumItems: Array<CurriculumItem>): Array<Curriculum | CurriculumItem> {
        return Array.prototype.concat(curricula, curriculumItems);
    }

    openKeywordDialog(): void {

        const dialogRef = this.dlg.open(KeywordAddComponent, {
            width: '350px'
        });

        dialogRef.afterClosed().subscribe(result => {
            const keyword = result.trim();
            if (result && this.dataItem) {
                this.dataItem.keywords.push(keyword);
            }
        });
    }

    openMatchDialog(item: Array<string>, matchItems: Array<Curriculum | CurriculumItem>): void {

        const dialogRef = this.dlg.open(MatchComponent, {
            width: '700px',
            data: matchItems
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && this.dataItem) {
                result.forEach((element: any) => {
                    if (item.indexOf(element.id) < 0) {
                        item.push(element.id);
                    }
                });
            }
        });
    }    

    openEducationalStandardDialog(): void {
        const dialogRef = this.dlg.open(EducationalStandardComponent, {
            width: '900px',            
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && this.dataItem) {
                this.dataItem.educationalStandard = result[0];
            }
        });
    }

    openEducationalStandardItemDetailDialog(row: any): void {
        const dataParam = {
            'Id': row.id,
            'Label': row.prefLabel,
            'Educational Level': `${row.educationalLevel.prefLabel_de}, ${row.educationalLevel.prefLabel_en}`, 
            'Subject': `${row.subject.prefLabel_de}, ${row.subject.prefLabel_en}`,
            'Definition': row.definition
          };
          const keys = ['Id', 'Label', 'Educational Level', 'Subject', 'Definition'];
          const header = 'Educational Standard Item Detail';
          const data = { header: header, data: dataParam, keys: keys };
      
          this.dlg.open(GenericDialogContentComponent, {
            width: '500px',
            data: data,
            autoFocus: false,
          });        
    }

    deleteEducationalStandard(): void {
        if (this.dataItem) {
            this.dataItem.educationalStandard = undefined;
        }
    }

}