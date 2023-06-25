import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Curriculum } from './models/curriculum';
import { CurriculumItem } from './models/curriculum-item';
import { Organisation } from './models/organisation';
import {iqb_Deutsch_Primar_ab} from './constants/educational-standards'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    const organisations: Array<Organisation> = [
      { id: 'creator', name: 'Staatsinstitut für Schulqualität und Bildungsforschung', url: 'https://www.isb.bayern.de/' },
      { id: 'publisher', name: 'Staatsinstitut für Schulqualität und Bildungsforschung', url: 'https://www.isb.bayern.de/' },
    ];

    const curriculums: Array<Curriculum> = [
      Object.assign(new Curriculum(), {
        id: 'matheBY7',
        prefLabel: 'Lehrplan Mathematik 7. Klasse Bayern',        
        creator: organisations[0],
        publisher: organisations[1],
        about: '<https://w3id.org/kim/schulfaecher/s1017>',
        definition: 'Der Lehrplan für das Fach Mathematik der siebten Jahrgangsstufe in Bayern',
        license: "<https://creativecommons.org/publicdomain/zero/1.0/>",
        dateCreated: '2020-08-28',
        version: '1.0',
        keywords: ["Mathematik", "Lehrplan", "Bayern"],
        timeRequired: 'P6M',
        //educationalStandard: '<https://github.com/iqb-vocabs/Bildungsstandard-Mathe-Sek1>',      
        narrower: ['matheM71'],  
        closeMatch: ["matheBaWue7"]
      })
    ];    

    const currItem1: CurriculumItem = Object.assign(new CurriculumItem(), {
      id: 'matheM71',        
      prefLabel: 'Terme mit Variablen',
      definition: '',
      keywords: ["Terme", "Variablen"],
      timeRequired: 'PT37H',
      taughtBy: '<https://de.serlo.org/mathe/1841/termumformung-mit-variablen?contentOnly>',
      assessedBy: '<https://www.iqb.hu-berlin.de/vera/aufgaben>',
      //educationalStandard: '<https://github.com/iqb-vocabs/Bildungsstandard-Mathe-Sek1>',
      broader: ['matheBY7'],
      narrower: ['matheM711', 'matheM712'],
      closeMatch: ['matheBaWue71'],
    });
    const currItem2 = Object.assign(new CurriculumItem(), {
      id: 'matheM711',        
      prefLabel: 'Aufstellen und Interpretieren von Termen',
      definition: 'Die Schülerinnen und Schüler verstehen Variablen als wichtiges Hilfsmittel, um mathematische Zusammenhänge kurz und prägnant zu formulieren. Sie strukturieren und abstrahieren unterschiedlich (z. B. sprachlich, numerisch, bildhaft) dargestellte inner- und außermathematische Zusammenhänge mithilfe von Termen mit einer oder mehreren Variablen und interpretieren vorgegebene Terme in derartigen Zusammenhängen.',
      keywords: ["Terme", "Variablen"],
      timeRequired: 'PT13H',
      //educationalStandard: '<https://github.com/iqb-vocabs/Bildungsstandard-Mathe-Sek1>',
      broader: ['matheM71'],
      closeMatch: ['matheBaWue7'],
    });

    const curriculumItems: Array<CurriculumItem> = [
      currItem1, currItem2      
    ];                

    return { curriculums, curriculumItems, organisations };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(curriculums: Curriculum[]): number {
    return curriculums.length + 1;
    //return curriculums.length > 0 ? Math.max(...curriculums.map(curriculum => curriculum.id)) + 1 : 11;
  }
}
