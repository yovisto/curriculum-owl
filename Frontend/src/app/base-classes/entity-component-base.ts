import { MatDialog } from "@angular/material/dialog";
import { KeywordAddComponent } from "../keyword-add/keyword-add.component";
import { Curriculum } from "../models/curriculum";
import { CurriculumItem } from "../models/curriculum-item";
import { CurriculumService } from "../services/curriculum.service";
import { CurriculumItemService } from "../services/curriculum-item.service";
import { MatchComponent } from "../match/match.component";
import { Concept } from "../models/concept";

import {
    iqb_Deutsch_Primar_ab,
    iqb_Deutsch_Primar_bistas,
    iqb_Deutsch_Sek1_ab,
    iqb_Deutsch_Sek1_stdESA,
    iqb_Deutsch_Sek1_stdMSA,
    iqb_Mathe_Sek_1_ab,
    iqb_Mathe_Sek_1_stdInhaltESA,
    iqb_Mathe_Sek_1_stdInhaltMSA,
    iqb_Mathe_Sek_1_stdProzess,
    iqb_Mathematik_Primar_ab,
    iqb_Mathematik_Primar_stdInhalt,
    iqb_Mathematik_Primar_stdProzess
} from '../constants/educational-standards'
import { EducationalStandardComponent } from "../educational-standard/educational-standard.component";
import { RdfMapper } from "ts-rdf-mapper";
import { Organisation } from "../models/organisation";
import { IToggleTtl } from "../interfaces/toggle-ttl.interface";

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
                this.dataItem.educationalStandard = Object.assign(new Concept(), this.dataItem.educationalStandard);
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

    private _getEducationalStandards(): Array<Concept> {
        const standards_rdf = [
            iqb_Deutsch_Primar_ab,
            iqb_Deutsch_Primar_bistas,
            iqb_Deutsch_Sek1_ab,
            iqb_Deutsch_Sek1_stdESA,
            iqb_Deutsch_Sek1_stdMSA,
            iqb_Mathe_Sek_1_ab,
            iqb_Mathe_Sek_1_stdInhaltESA,
            iqb_Mathe_Sek_1_stdInhaltMSA,
            iqb_Mathe_Sek_1_stdProzess,
            iqb_Mathematik_Primar_ab,
            iqb_Mathematik_Primar_stdInhalt,
            iqb_Mathematik_Primar_stdProzess
        ];

        const educationalStandards: Array<Concept> = [];
        const parser = new DOMParser();
        standards_rdf.forEach((standard: string) => {
            const doc = parser.parseFromString(standard, "application/xml");
            doc.documentElement.childNodes.forEach((x: any) => {
                const nodeName = (x.nodeName as string).trim();
                if (nodeName == "core:Concept") {
                    const standard = new Concept();
                    standard.id = x.attributes['rdf:about'].value;

                    x.childNodes.forEach((y: any) => {
                        if ((y.nodeName as string).trim() == "core:definition") {
                            standard.definition = y.textContent;
                        }
                        if ((y.nodeName as string).trim() == "core:prefLabel") {
                            standard.prefLabel = y.textContent;
                        }
                        if ((y.nodeName as string).trim() == "sche:yearBuilt") {
                            standard.yearBuilt = y.textContent;
                        }
                    });
                    educationalStandards.push(standard);
                }
            });
        });

        return educationalStandards;
    }

    openEducationalStandardDialog(): void {
        const dialogRef = this.dlg.open(EducationalStandardComponent, {
            width: '700px',
            data: this._getEducationalStandards()
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && this.dataItem) {
                this.dataItem.educationalStandard = result[0];
            }
        });
    }

    deleteEducationalStandard(): void {
        if (this.dataItem) {
            this.dataItem.educationalStandard = undefined;
        }
    }

}