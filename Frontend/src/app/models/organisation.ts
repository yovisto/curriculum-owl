import { RdfBean, RdfPrefixes, RdfProperty, RdfSubject, XSDDataType } from "ts-rdf-mapper";

@RdfPrefixes
({  
  orga : 'https://example.com/isb/mathe/',
  sche: 'https://schema.org/',  
  rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'
})
@RdfBean('sche:Organisation')
export class Organisation {    
    @RdfSubject('orga')
    public id: string | undefined;
    @RdfProperty({predicate: 'sche:name', xsdType: XSDDataType.XSD_STRING})
    public name: string | undefined;
    @RdfProperty({predicate: 'sche:url', xsdType: XSDDataType.XSD_STRING})
    public url: string | undefined;    
  }