import { RdfBean, RdfPrefixes, RdfProperty, RdfSubject, XSDDataType } from "ts-rdf-mapper";
import { Concept } from "./concept";

@RdfPrefixes
({
  dini: 'https://w3id.org/dini/dini-ns/',
  dini2: 'https://dini-ag-kim.github.io/modell_lehrplaene#',
  faecher: 'http://w3id.org/kim/schulfaecher/',
  curriculum: 'https://example.com/isb/mathe/',
  sche: 'https://schema.org/',
  core: 'http://www.w3.org/2004/02/skos/core#',
  rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'
})
@RdfBean('dini:CurriculumItem')
export class CurriculumItem {    
    @RdfSubject('curriculum')
    public id: string | undefined;
    @RdfProperty({predicate: 'core:prefLabel', lang: 'de'})
    public prefLabel: string | undefined;
    @RdfProperty({predicate: 'core:definition', lang: 'de'})
    public definition: string | undefined;
    @RdfProperty({predicate: 'sche:keywords', lang: 'de', isArray: true})
    public keywords: Array<string> = [];  
    @RdfProperty({predicate: 'sche:timeRequired', xsdType: XSDDataType.XSD_STRING})
    public timeRequired: string | undefined;
    @RdfProperty({predicate: 'dini:taughtBy', xsdType: XSDDataType.XSD_STRING})    
    public taughtBy: string | undefined;
    @RdfProperty({predicate: 'dini:assessedBy', xsdType: XSDDataType.XSD_STRING})
    public assessedBy: string | undefined;
    @RdfProperty({predicate: 'dini:educationalStandard', clazz: Concept})
    public educationalStandard: Concept | undefined;
    @RdfProperty({predicate: 'core:broader', xsdType: XSDDataType.XSD_STRING, isArray: true})
    public broader: Array<string> = [];    
    @RdfProperty({predicate: 'core:narrower', xsdType: XSDDataType.XSD_STRING, isArray: true})
    public narrower: Array<string> = [];    
    @RdfProperty({predicate: 'core:closeMatch', xsdType: XSDDataType.XSD_STRING, isArray: true})  
    public closeMatch: Array<string> = [];  
}
