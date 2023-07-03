import { Injectable } from '@angular/core';
import { educational_levels, educational_levels_ttl } from '../constants/educational-levels';
import { Observable, of } from 'rxjs';
import { EducationalLevel } from '../models/educational-level';
import { RdfMapper } from 'ts-rdf-mapper';

@Injectable({
  providedIn: 'root'
})
export class EducationalLevelService {

  constructor() { }

  getEducationalLevels(): Observable<EducationalLevel[]> {

    const levels_rdf = [
      educational_levels
    ];    

    const educationalLevels: Array<EducationalLevel> = [];
    const parser = new DOMParser();
    levels_rdf.forEach((standard: string) => {
      const doc = parser.parseFromString(standard, "application/xml");
      doc.documentElement.childNodes.forEach((x: any) => {
        const nodeName = (x.nodeName as string).trim();
        if (nodeName == "core:Concept") {
          const level = new EducationalLevel();
          level.id = x.attributes['rdf:about'].value;

          x.childNodes.forEach((y: any) => {            
            if ((y.nodeName as string).trim() == "core:prefLabel") {
              if (y.attributes["xml:lang"].value.trim() == "en") {
                level.prefLabel_en = y.textContent;
              } else {
                level.prefLabel_de = y.textContent;
              }              
            }
            if ((y.nodeName as string).trim() == "core:altLabel") {
              if (y.attributes["xml:lang"].value.trim() == "en") {
                level.altLabel_en.push(y.textContent);
              } else {
                level.altLabel_de.push(y.textContent);
              }              
            }
            
          });
          educationalLevels.push(level);
        }
      });
    });    
    return of(educationalLevels);
  }
}
