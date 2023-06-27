import { Injectable } from '@angular/core';
import { EducationalStandard } from '../models/educational-standard';
import { Observable, of } from 'rxjs';
import { iqb_Deutsch_Primar_ab, iqb_Deutsch_Primar_bistas, iqb_Deutsch_Sek1_ab, iqb_Deutsch_Sek1_stdESA, iqb_Deutsch_Sek1_stdMSA, iqb_Mathe_Sek_1_ab, iqb_Mathe_Sek_1_stdInhaltESA, iqb_Mathe_Sek_1_stdInhaltMSA, iqb_Mathe_Sek_1_stdProzess, iqb_Mathematik_Primar_ab, iqb_Mathematik_Primar_stdInhalt, iqb_Mathematik_Primar_stdProzess } from '../constants/educational-standards';


@Injectable({
  providedIn: 'root'
})
export class EducationalStandardService {

  constructor() { }

  getEducationalStandards(): Observable<EducationalStandard[]> {
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

  const educationalStandards: Array<EducationalStandard> = [];
  const parser = new DOMParser();
  standards_rdf.forEach((standard: string) => {
      const doc = parser.parseFromString(standard, "application/xml");
      doc.documentElement.childNodes.forEach((x: any) => {
          const nodeName = (x.nodeName as string).trim();
          if (nodeName == "core:Concept") {
              const standard = new EducationalStandard();
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
                  if ((y.nodeName as string).trim() == "sche:educationalLevel") {                                                               
                      standard.educationalLevel = y.attributes["rdf:resource"].value;
                  }
              });
              educationalStandards.push(standard);
          }
      });
  });

    return of(educationalStandards);
  }
}
