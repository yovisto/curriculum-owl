import { Injectable } from '@angular/core';
import { Subject } from '../models/subject';
import { Observable, of } from 'rxjs';
import { subjects } from '../constants/subjects';
import { EducationalLevelService } from './educational-level.service';
import { EducationalLevel } from '../models/educational-level';

@Injectable({
  providedIn: 'root'
})
export class EducationalSubjectService {


  constructor() {
   
  }

  getEducationalSubjects(): Observable<Subject[]> {

    const subjects_rdf = [
      subjects
    ];

    const educationalSubjects: Array<Subject> = [];
    const parser = new DOMParser();
    subjects_rdf.forEach((standard: string) => {
      const doc = parser.parseFromString(standard, "application/xml");
      doc.documentElement.childNodes.forEach((x: any) => {
        const nodeName = (x.nodeName as string).trim();
        if (nodeName == "core:Concept") {
          const subject = new Subject();
          subject.id = x.attributes['rdf:about'].value;

          x.childNodes.forEach((y: any) => {
            if ((y.nodeName as string).trim() == "core:prefLabel") {
              if (y.attributes["xml:lang"].value.trim() == "en") {
                subject.prefLabel_en = y.textContent;
              } else {
                subject.prefLabel_de = y.textContent;
              }
            }
            if ((y.nodeName as string).trim() == "core:altLabel") {
              if (y.attributes["xml:lang"].value.trim() == "en") {
                subject.altLabel_en.push(y.textContent);
              } else {
                subject.altLabel_de.push(y.textContent);
              }
            }
            if ((y.nodeName as string).trim() == "core:editorialNote") {
              subject.editorialNote = y.textContent;
            }

          });
          educationalSubjects.push(subject);
        }
      });
    });
    return of(educationalSubjects);
  }

}
