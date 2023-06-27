import { RdfBean, RdfPrefixes, RdfProperty, RdfSubject, XSDDataType } from "ts-rdf-mapper";

@RdfPrefixes
({    
  core: 'http://www.w3.org/2004/02/skos/core#',
  rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'
})
@RdfBean('core:Concept')
export class EducationalStandard {  
  @RdfSubject('')
  public id: string | undefined;
  @RdfProperty({predicate: 'core:prefLabel', lang: 'de'})
  public prefLabel: string | undefined;  
  @RdfProperty({predicate: 'core:definition', lang: 'de'})
  public definition: string | undefined;  
  @RdfProperty({predicate: 'sche:yearBuilt', xsdType: XSDDataType.XSD_INT})  
  public yearBuilt: number | undefined;
  @RdfProperty({predicate: 'sche:educationalLevel', xsdType: XSDDataType.XSD_STRING})
  public educationalLevel: string | undefined;
}