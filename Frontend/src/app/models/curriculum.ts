import { RdfBean, RdfPrefixes, RdfProperty, RdfSubject, XSDDataType } from "ts-rdf-mapper";
import { Organisation } from "./organisation";
import { EducationalStandard } from "./educational-standard";

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
@RdfBean('dini:Curriculum')
export class Curriculum {  
  @RdfSubject('curriculum')
  public id: string | undefined;
  @RdfProperty({predicate: 'core:prefLabel', lang: 'de'})
  public prefLabel: string | undefined;
  //@RdfProperty({predicate: 'sche:creator', xsdType: XSDDataType.XSD_STRING})
  @RdfProperty({predicate: 'sche:creator', clazz: Organisation})
  public creator: Organisation | undefined;
  //@RdfProperty({predicate: 'sche:publisher', xsdType: XSDDataType.XSD_STRING})
  @RdfProperty({predicate: 'sche:publisher', clazz: Organisation})
  public publisher: Organisation | undefined;
  @RdfProperty({predicate: 'sche:about', xsdType: XSDDataType.XSD_STRING})  
  public about: string | undefined;
  @RdfProperty({predicate: 'core:definition', lang: 'de'})
  public definition: string | undefined;
  @RdfProperty({predicate: 'sche:license', xsdType: XSDDataType.XSD_STRING})
  public license: string | undefined;
  @RdfProperty({predicate: 'sche:dateCreated', xsdType: XSDDataType.XSD_STRING})
  public dateCreated: string | undefined;
  @RdfProperty({predicate: 'sche:version', xsdType: XSDDataType.XSD_STRING})
  public version: string | undefined;
  @RdfProperty({predicate: 'sche:keywords', lang: 'de', isArray: true})
  public keywords: Array<string> = [];  
  @RdfProperty({predicate: 'sche:timeRequired', xsdType: XSDDataType.XSD_STRING})
  public timeRequired: string | undefined;
  @RdfProperty({predicate: 'dini:educationalStandard', clazz: EducationalStandard})
  public educationalStandard: EducationalStandard | undefined;
  @RdfProperty({predicate: 'core:narrower', xsdType: XSDDataType.XSD_STRING, isArray: true})
  public narrower: Array<string> = [];    
  @RdfProperty({predicate: 'core:closeMatch', xsdType: XSDDataType.XSD_STRING, isArray: true})  
  public closeMatch: Array<string> = [];  
}