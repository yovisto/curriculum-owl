import { RdfBean, RdfPrefixes, RdfProperty, RdfSubject, XSDDataType } from "ts-rdf-mapper";

@RdfPrefixes
({    
  core: 'http://www.w3.org/2004/02/skos/core#',
  rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',  
})
@RdfBean('core:Concept')
export class Subject {  
  @RdfSubject('')
  public id: string | undefined;
  @RdfProperty({predicate: 'core:prefLabel', lang: 'de'})
  public prefLabel_de: string | undefined;  
  @RdfProperty({predicate: 'core:prefLabel', lang: 'en'})  
  public prefLabel_en: string | undefined;  
  @RdfProperty({predicate: 'core:editorialNote', lang: 'de'})  
  public editorialNote: string | undefined;  
  @RdfProperty({predicate: 'core:altLabel', lang: 'de', isArray: true})
  public altLabel_de: Array<string> = [];    
  @RdfProperty({predicate: 'core:altLabel', lang: 'en', isArray: true})
  public altLabel_en: Array<string> = [];    
}