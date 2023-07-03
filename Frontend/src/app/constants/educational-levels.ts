export const educational_levels: string = `<?xml version="1.0"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
         xmlns:xsd="http://www.w3.org/2001/XMLSchema#"
         xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
         xmlns:owl="http://www.w3.org/2002/07/owl#"
         xml:base="/home/johann/Source/Yovisto/curriculum-owl/Import/educationalLevel.rdf"
         xmlns="/home/johann/Source/Yovisto/curriculum-owl/Import/educationalLevel.rdf#"
         xmlns:core="http://www.w3.org/2004/02/skos/core#"
         xmlns:term="http://purl.org/dc/terms/">

<owl:Ontology rdf:about="/home/johann/Source/Yovisto/curriculum-owl/Import/educationalLevel.rdf"/>

<owl:AnnotationProperty rdf:about="http://purl.org/dc/terms/title"/>

<owl:AnnotationProperty rdf:about="http://www.w3.org/2004/02/skos/core#broader"/>

<owl:AnnotationProperty rdf:about="http://www.w3.org/2004/02/skos/core#definition"/>

<owl:AnnotationProperty rdf:about="http://www.w3.org/2004/02/skos/core#hasTopConcept"/>

<owl:AnnotationProperty rdf:about="http://www.w3.org/2004/02/skos/core#inScheme"/>

<owl:AnnotationProperty rdf:about="http://www.w3.org/2004/02/skos/core#narrower"/>

<owl:AnnotationProperty rdf:about="http://www.w3.org/2004/02/skos/core#prefLabel"/>

<owl:AnnotationProperty rdf:about="http://www.w3.org/2004/02/skos/core#topConceptOf"/>

<owl:AnnotationProperty rdf:about="http://purl.org/dc/terms/description"/>

<owl:AnnotationProperty rdf:about="http://purl.org/dc/terms/created"/>

<owl:AnnotationProperty rdf:about="http://purl.org/dc/terms/issued"/>

<owl:AnnotationProperty rdf:about="http://purl.org/dc/terms/license"/>

<owl:AnnotationProperty rdf:about="http://purl.org/dc/terms/modified"/>

<owl:AnnotationProperty rdf:about="http://www.w3.org/2004/02/skos/core#altLabel"/>

<owl:AnnotationProperty rdf:about="http://www.w3.org/2004/02/skos/core#broadMatch"/>

<owl:AnnotationProperty rdf:about="http://www.w3.org/2004/02/skos/core#closeMatch"/>

<owl:AnnotationProperty rdf:about="http://www.w3.org/2004/02/skos/core#exactMatch"/>

<owl:AnnotationProperty rdf:about="http://www.w3.org/2004/02/skos/core#narrowMatch"/>

<owl:Class rdf:about="http://www.w3.org/2004/02/skos/core#Concept"/>

<owl:Class rdf:about="http://www.w3.org/2004/02/skos/core#ConceptScheme"/>

<core:ConceptScheme rdf:about="https://w3id.org/kim/educationalLevel">
  <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#NamedIndividual"/>
  <term:license rdf:resource="http://creativecommons.org/publicdomain/zero/1.0"/>
  <core:hasTopConcept rdf:resource="https://w3id.org/kim/educationalLevel/level_0"/>
  <core:hasTopConcept rdf:resource="https://w3id.org/kim/educationalLevel/level_1"/>
  <core:hasTopConcept rdf:resource="https://w3id.org/kim/educationalLevel/level_2"/>
  <core:hasTopConcept rdf:resource="https://w3id.org/kim/educationalLevel/level_3"/>
  <core:hasTopConcept rdf:resource="https://w3id.org/kim/educationalLevel/level_4"/>
  <core:hasTopConcept rdf:resource="https://w3id.org/kim/educationalLevel/level_5"/>
  <core:hasTopConcept rdf:resource="https://w3id.org/kim/educationalLevel/level_A"/>
  <core:hasTopConcept rdf:resource="https://w3id.org/kim/educationalLevel/level_B"/>
  <core:hasTopConcept rdf:resource="https://w3id.org/kim/educationalLevel/level_C"/>
  <term:created rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2020-04-08</term:created>
  <term:description xml:lang="de">Eine Wertelliste für die Stufe im Bildungssystem als Lehr-/Lernkontext, für den Lernobjekt ausgewiesen ist.</term:description>
  <term:issued rdf:datatype="http://www.w3.org/2001/XMLSchema#date">2020-04-08</term:issued>
  <term:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#date">2022-03-23</term:modified>
  <term:title xml:lang="de">Bildungsstufe</term:title>
  <term:title xml:lang="en">Educational level</term:title>
</core:ConceptScheme>

<core:Concept rdf:about="https://w3id.org/kim/educationalLevel/level_0">
  <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#NamedIndividual"/>
  <core:exactMatch rdf:resource="http://w3id.org/openeduhub/vocabs/educationalContext/elementarbereich"/>
  <core:exactMatch rdf:resource="https://w3id.org/kim/isced-2011/level0"/>
  <core:narrowMatch rdf:resource="https://w3id.org/kim/isced-1997/level0"/>
  <core:topConceptOf rdf:resource="https://w3id.org/kim/educationalLevel"/>
  <rdf:type rdf:resource="https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel"/>
  <core:altLabel xml:lang="de">Elementarstufe</core:altLabel>
  <core:altLabel xml:lang="de">Frühbereich</core:altLabel>
  <core:altLabel xml:lang="de">Frühkindliche Bildung</core:altLabel>
  <core:altLabel xml:lang="de">ISCED 2011, Level 0</core:altLabel>
  <core:altLabel xml:lang="en">ISCED 2011, Level 0</core:altLabel>
  <core:prefLabel xml:lang="en">Early childhood education</core:prefLabel>
  <core:prefLabel xml:lang="de">Elementarbereich</core:prefLabel>
</core:Concept>

<core:Concept rdf:about="https://w3id.org/kim/educationalLevel/level_1">
  <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#NamedIndividual"/>
  <core:exactMatch rdf:resource="http://w3id.org/openeduhub/vocabs/educationalContext/grundschule"/>
  <core:exactMatch rdf:resource="https://w3id.org/kim/isced-1997/level1"/>
  <core:exactMatch rdf:resource="https://w3id.org/kim/isced-2011/level1"/>
  <core:topConceptOf rdf:resource="https://w3id.org/kim/educationalLevel"/>
  <rdf:type rdf:resource="https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel"/>
  <core:altLabel xml:lang="de">ISCED 2011, Level 1</core:altLabel>
  <core:altLabel xml:lang="en">ISCED 2011, Level 1</core:altLabel>
  <core:altLabel xml:lang="de">Primarstufe</core:altLabel>
  <core:prefLabel xml:lang="de">Primarbereich</core:prefLabel>
  <core:prefLabel xml:lang="en">Primary education</core:prefLabel>
</core:Concept>

<core:Concept rdf:about="https://w3id.org/kim/educationalLevel/level_2">
  <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#NamedIndividual"/>
  <core:exactMatch rdf:resource="http://w3id.org/openeduhub/vocabs/educationalContext/sekundarstufe_1"/>
  <core:exactMatch rdf:resource="https://w3id.org/kim/isced-1997/level2"/>
  <core:exactMatch rdf:resource="https://w3id.org/kim/isced-2011/level2"/>
  <core:topConceptOf rdf:resource="https://w3id.org/kim/educationalLevel"/>
  <rdf:type rdf:resource="https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel"/>
  <core:altLabel xml:lang="de">ISCED 2011, Level 2</core:altLabel>
  <core:altLabel xml:lang="en">ISCED 2011, Level 2</core:altLabel>
  <core:altLabel xml:lang="de">Sekundarstufe I</core:altLabel>
  <core:prefLabel xml:lang="en">Lower secondary education</core:prefLabel>
  <core:prefLabel xml:lang="de">Sekundarbereich I</core:prefLabel>
</core:Concept>

<core:Concept rdf:about="https://w3id.org/kim/educationalLevel/level_3">
  <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#NamedIndividual"/>
  <core:exactMatch rdf:resource="http://w3id.org/openeduhub/vocabs/educationalContext/sekundarstufe_2"/>
  <core:exactMatch rdf:resource="https://w3id.org/kim/isced-1997/level3"/>
  <core:exactMatch rdf:resource="https://w3id.org/kim/isced-2011/level3"/>
  <core:topConceptOf rdf:resource="https://w3id.org/kim/educationalLevel"/>
  <rdf:type rdf:resource="https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel"/>
  <core:altLabel xml:lang="de">ISCED 2011, Level 3</core:altLabel>
  <core:altLabel xml:lang="en">ISCED 2011, Level 3</core:altLabel>
  <core:altLabel xml:lang="de">Sekundarstufe II</core:altLabel>
  <core:prefLabel xml:lang="de">Sekundarbereich II</core:prefLabel>
  <core:prefLabel xml:lang="en">Upper secondary education</core:prefLabel>
</core:Concept>

<core:Concept rdf:about="https://w3id.org/kim/educationalLevel/level_4">
  <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#NamedIndividual"/>
  <core:closeMatch rdf:resource="http://w3id.org/openeduhub/vocabs/educationalContext/berufliche_bildung"/>
  <core:exactMatch rdf:resource="https://w3id.org/kim/isced-1997/level4"/>
  <core:exactMatch rdf:resource="https://w3id.org/kim/isced-2011/level4"/>
  <core:topConceptOf rdf:resource="https://w3id.org/kim/educationalLevel"/>
  <rdf:type rdf:resource="https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel"/>
  <core:altLabel xml:lang="de">Berufliche Bildung</core:altLabel>
  <core:altLabel xml:lang="de">ISCED 2011, Level 4</core:altLabel>
  <core:altLabel xml:lang="en">ISCED 2011, Level 4</core:altLabel>
  <core:prefLabel xml:lang="en">Post-secondary non-tertiary education</core:prefLabel>
  <core:prefLabel xml:lang="de">Postsekundarer nicht-tertiärer Bereich</core:prefLabel>
</core:Concept>

<core:Concept rdf:about="https://w3id.org/kim/educationalLevel/level_5">
  <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#NamedIndividual"/>
  <core:closeMatch rdf:resource="https://w3id.org/kim/isced-1997/level5"/>
  <core:exactMatch rdf:resource="https://w3id.org/kim/isced-2011/level5"/>
  <core:topConceptOf rdf:resource="https://w3id.org/kim/educationalLevel"/>
  <rdf:type rdf:resource="https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel"/>
  <core:altLabel xml:lang="de">ISCED 2011, Level 5</core:altLabel>
  <core:altLabel xml:lang="en">ISCED 2011, Level 5</core:altLabel>
  <core:definition xml:lang="de">Erste Stufe der tertiären Bildung, die nicht direkt zu einer höheren Forschungsqualifikation führt</core:definition>
  <core:definition xml:lang="en">First stage of tertiary education, not leading directly to an advanced research qualification</core:definition>
  <core:prefLabel xml:lang="de">Kurzes tertiäres Bildungsprogramm</core:prefLabel>
  <core:prefLabel xml:lang="en">Short-cycle tertiary education</core:prefLabel>
</core:Concept>

<core:Concept rdf:about="https://w3id.org/kim/educationalLevel/level_A">
  <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#NamedIndividual"/>
  <core:exactMatch rdf:resource="http://w3id.org/openeduhub/vocabs/educationalContext/hochschule"/>
  <core:narrowMatch rdf:resource="https://w3id.org/kim/isced-1997/level5"/>
  <core:narrowMatch rdf:resource="https://w3id.org/kim/isced-1997/level6"/>
  <core:narrowMatch rdf:resource="https://w3id.org/kim/isced-2011/level6"/>
  <core:narrowMatch rdf:resource="https://w3id.org/kim/isced-2011/level7"/>
  <core:narrowMatch rdf:resource="https://w3id.org/kim/isced-2011/level8"/>
  <core:narrower rdf:resource="https://w3id.org/kim/educationalLevel/level_6"/>
  <core:narrower rdf:resource="https://w3id.org/kim/educationalLevel/level_7"/>
  <core:narrower rdf:resource="https://w3id.org/kim/educationalLevel/level_8"/>
  <core:topConceptOf rdf:resource="https://w3id.org/kim/educationalLevel"/>
  <rdf:type rdf:resource="https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel"/>
  <core:prefLabel xml:lang="de">Hochschule</core:prefLabel>
  <core:prefLabel xml:lang="en">University</core:prefLabel>
</core:Concept>

<core:Concept rdf:about="https://w3id.org/kim/educationalLevel/level_B">
  <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#NamedIndividual"/>
  <core:topConceptOf rdf:resource="https://w3id.org/kim/educationalLevel"/>
  <rdf:type rdf:resource="https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel"/>
  <core:definition xml:lang="de">Der Vorbereitungsdienst bezeichnet die zweite Phase der Lehrkräfteausbildung in Deutschland.</core:definition>
  <core:definition xml:lang="en">The preparatory service designates the second phase of teacher training in germany.</core:definition>
  <core:prefLabel xml:lang="en">Preparatory service</core:prefLabel>
  <core:prefLabel xml:lang="de">Vorbereitungsdienst</core:prefLabel>
</core:Concept>

<core:Concept rdf:about="https://w3id.org/kim/educationalLevel/level_C">
  <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#NamedIndividual"/>
  <core:exactMatch rdf:resource="http://w3id.org/openeduhub/vocabs/educationalContext/fortbildung"/>
  <core:topConceptOf rdf:resource="https://w3id.org/kim/educationalLevel"/>
  <rdf:type rdf:resource="https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel"/>
  <core:prefLabel xml:lang="en">Advanced training</core:prefLabel>
  <core:prefLabel xml:lang="de">Fortbildung</core:prefLabel>
</core:Concept>

<core:Concept rdf:about="https://w3id.org/kim/educationalLevel/level_6">
  <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#NamedIndividual"/>
  <core:broadMatch rdf:resource="http://w3id.org/openeduhub/vocabs/educationalContext/hochschule"/>
  <core:broader rdf:resource="https://w3id.org/kim/educationalLevel/level_A"/>
  <core:closeMatch rdf:resource="https://w3id.org/kim/isced-1997/level5"/>
  <core:exactMatch rdf:resource="https://w3id.org/kim/isced-2011/level6"/>
  <core:inScheme rdf:resource="https://w3id.org/kim/educationalLevel"/>
  <rdf:type rdf:resource="https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel"/>
  <core:altLabel xml:lang="de">ISCED 2011, Level 6</core:altLabel>
  <core:altLabel xml:lang="en">ISCED 2011, Level 6</core:altLabel>
  <core:prefLabel xml:lang="de">Bachelor oder äquivalent</core:prefLabel>
  <core:prefLabel xml:lang="en">Bachelor or equivalent</core:prefLabel>
</core:Concept>

<core:Concept rdf:about="https://w3id.org/kim/educationalLevel/level_7">
  <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#NamedIndividual"/>
  <core:broadMatch rdf:resource="http://w3id.org/openeduhub/vocabs/educationalContext/hochschule"/>
  <core:broader rdf:resource="https://w3id.org/kim/educationalLevel/level_A"/>
  <core:closeMatch rdf:resource="https://w3id.org/kim/isced-1997/level5"/>
  <core:exactMatch rdf:resource="https://w3id.org/kim/isced-2011/level7"/>
  <core:inScheme rdf:resource="https://w3id.org/kim/educationalLevel"/>
  <rdf:type rdf:resource="https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel"/>
  <core:altLabel xml:lang="de">ISCED 2011, Level 7</core:altLabel>
  <core:altLabel xml:lang="en">ISCED 2011, Level 7</core:altLabel>
  <core:prefLabel xml:lang="de">Master oder äquivalent</core:prefLabel>
  <core:prefLabel xml:lang="en">Master or equivalent</core:prefLabel>
</core:Concept>

<core:Concept rdf:about="https://w3id.org/kim/educationalLevel/level_8">
  <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#NamedIndividual"/>
  <core:broadMatch rdf:resource="http://w3id.org/openeduhub/vocabs/educationalContext/hochschule"/>
  <core:broader rdf:resource="https://w3id.org/kim/educationalLevel/level_A"/>
  <core:exactMatch rdf:resource="https://w3id.org/kim/isced-1997/level6"/>
  <core:exactMatch rdf:resource="https://w3id.org/kim/isced-2011/level8"/>
  <core:inScheme rdf:resource="https://w3id.org/kim/educationalLevel"/>
  <rdf:type rdf:resource="https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel"/>
  <core:altLabel xml:lang="de">ISCED 2011, Level 8</core:altLabel>
  <core:altLabel xml:lang="en">ISCED 2011, Level 8</core:altLabel>
  <core:prefLabel xml:lang="en">Doctoral or equivalent</core:prefLabel>
  <core:prefLabel xml:lang="de">Promotion oder äquivalent</core:prefLabel>
</core:Concept>

<owl:Ontology/>


</rdf:RDF>
`

export const educational_levels_ttl = `@prefix : </home/johann/Source/Yovisto/curriculum-owl/Import/educationalLevel.rdf#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix xml: <http://www.w3.org/XML/1998/namespace> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix core: <http://www.w3.org/2004/02/skos/core#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix term: <http://purl.org/dc/terms/> .
@base </home/johann/Source/Yovisto/curriculum-owl/Import/educationalLevel.rdf#> .

<file:/home/johann/Source/Yovisto/curriculum-owl/Import/educationalLevel.rdf> rdf:type owl:Ontology .

#################################################################
#    Annotation properties
#################################################################

###  http://purl.org/dc/terms/created
term:created rdf:type owl:AnnotationProperty .


###  http://purl.org/dc/terms/description
term:description rdf:type owl:AnnotationProperty .


###  http://purl.org/dc/terms/issued
term:issued rdf:type owl:AnnotationProperty .


###  http://purl.org/dc/terms/license
term:license rdf:type owl:AnnotationProperty .


###  http://purl.org/dc/terms/modified
term:modified rdf:type owl:AnnotationProperty .


###  http://purl.org/dc/terms/title
term:title rdf:type owl:AnnotationProperty .


###  http://www.w3.org/2004/02/skos/core#altLabel
core:altLabel rdf:type owl:AnnotationProperty .


###  http://www.w3.org/2004/02/skos/core#broadMatch
core:broadMatch rdf:type owl:AnnotationProperty .


###  http://www.w3.org/2004/02/skos/core#broader
core:broader rdf:type owl:AnnotationProperty .


###  http://www.w3.org/2004/02/skos/core#closeMatch
core:closeMatch rdf:type owl:AnnotationProperty .


###  http://www.w3.org/2004/02/skos/core#definition
core:definition rdf:type owl:AnnotationProperty .


###  http://www.w3.org/2004/02/skos/core#exactMatch
core:exactMatch rdf:type owl:AnnotationProperty .


###  http://www.w3.org/2004/02/skos/core#hasTopConcept
core:hasTopConcept rdf:type owl:AnnotationProperty .


###  http://www.w3.org/2004/02/skos/core#inScheme
core:inScheme rdf:type owl:AnnotationProperty .


###  http://www.w3.org/2004/02/skos/core#narrowMatch
core:narrowMatch rdf:type owl:AnnotationProperty .


###  http://www.w3.org/2004/02/skos/core#narrower
core:narrower rdf:type owl:AnnotationProperty .


###  http://www.w3.org/2004/02/skos/core#prefLabel
core:prefLabel rdf:type owl:AnnotationProperty .


###  http://www.w3.org/2004/02/skos/core#topConceptOf
core:topConceptOf rdf:type owl:AnnotationProperty .


#################################################################
#    Datatypes
#################################################################

###  http://www.w3.org/2001/XMLSchema#date
xsd:date rdf:type rdfs:Datatype .


#################################################################
#    Classes
#################################################################

###  http://www.w3.org/2004/02/skos/core#Concept
core:Concept rdf:type owl:Class .


###  http://www.w3.org/2004/02/skos/core#ConceptScheme
core:ConceptScheme rdf:type owl:Class .


###  https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel
<https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel> rdf:type owl:Class .


#################################################################
#    Individuals
#################################################################

###  https://w3id.org/kim/educationalLevel
<https://w3id.org/kim/educationalLevel> rdf:type owl:NamedIndividual ,
                                                 core:ConceptScheme ;
                                        term:created "2020-04-08"^^xsd:dateTime ;
                                        term:description "Eine Wertelliste für die Stufe im Bildungssystem als Lehr-/Lernkontext, für den Lernobjekt ausgewiesen ist."@de ;
                                        term:issued "2020-04-08"^^xsd:date ;
                                        term:license <http://creativecommons.org/publicdomain/zero/1.0> ;
                                        term:modified "2022-03-23"^^xsd:date ;
                                        term:title "Bildungsstufe"@de ,
                                                   "Educational level"@en ;
                                        core:hasTopConcept <https://w3id.org/kim/educationalLevel/level_0> ,
                                                           <https://w3id.org/kim/educationalLevel/level_1> ,
                                                           <https://w3id.org/kim/educationalLevel/level_2> ,
                                                           <https://w3id.org/kim/educationalLevel/level_3> ,
                                                           <https://w3id.org/kim/educationalLevel/level_4> ,
                                                           <https://w3id.org/kim/educationalLevel/level_5> ,
                                                           <https://w3id.org/kim/educationalLevel/level_A> ,
                                                           <https://w3id.org/kim/educationalLevel/level_B> ,
                                                           <https://w3id.org/kim/educationalLevel/level_C> .


###  https://w3id.org/kim/educationalLevel/level_0
<https://w3id.org/kim/educationalLevel/level_0> rdf:type owl:NamedIndividual ,
                                                         core:Concept ,
                                                         <https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel> ;
                                                core:altLabel "Elementarstufe"@de ,
                                                              "Frühbereich"@de ,
                                                              "Frühkindliche Bildung"@de ,
                                                              "ISCED 2011, Level 0"@de ,
                                                              "ISCED 2011, Level 0"@en ;
                                                core:exactMatch <http://w3id.org/openeduhub/vocabs/educationalContext/elementarbereich> ,
                                                                <https://w3id.org/kim/isced-2011/level0> ;
                                                core:narrowMatch <https://w3id.org/kim/isced-1997/level0> ;
                                                core:prefLabel "Early childhood education"@en ,
                                                               "Elementarbereich"@de ;
                                                core:topConceptOf <https://w3id.org/kim/educationalLevel> .


###  https://w3id.org/kim/educationalLevel/level_1
<https://w3id.org/kim/educationalLevel/level_1> rdf:type owl:NamedIndividual ,
                                                         core:Concept ,
                                                         <https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel> ;
                                                core:altLabel "ISCED 2011, Level 1"@de ,
                                                              "ISCED 2011, Level 1"@en ,
                                                              "Primarstufe"@de ;
                                                core:exactMatch <http://w3id.org/openeduhub/vocabs/educationalContext/grundschule> ,
                                                                <https://w3id.org/kim/isced-1997/level1> ,
                                                                <https://w3id.org/kim/isced-2011/level1> ;
                                                core:prefLabel "Primarbereich"@de ,
                                                               "Primary education"@en ;
                                                core:topConceptOf <https://w3id.org/kim/educationalLevel> .


###  https://w3id.org/kim/educationalLevel/level_2
<https://w3id.org/kim/educationalLevel/level_2> rdf:type owl:NamedIndividual ,
                                                         core:Concept ,
                                                         <https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel> ;
                                                core:altLabel "ISCED 2011, Level 2"@de ,
                                                              "ISCED 2011, Level 2"@en ,
                                                              "Sekundarstufe I"@de ;
                                                core:exactMatch <http://w3id.org/openeduhub/vocabs/educationalContext/sekundarstufe_1> ,
                                                                <https://w3id.org/kim/isced-1997/level2> ,
                                                                <https://w3id.org/kim/isced-2011/level2> ;
                                                core:prefLabel "Lower secondary education"@en ,
                                                               "Sekundarbereich I"@de ;
                                                core:topConceptOf <https://w3id.org/kim/educationalLevel> .


###  https://w3id.org/kim/educationalLevel/level_3
<https://w3id.org/kim/educationalLevel/level_3> rdf:type owl:NamedIndividual ,
                                                         core:Concept ,
                                                         <https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel> ;
                                                core:altLabel "ISCED 2011, Level 3"@de ,
                                                              "ISCED 2011, Level 3"@en ,
                                                              "Sekundarstufe II"@de ;
                                                core:exactMatch <http://w3id.org/openeduhub/vocabs/educationalContext/sekundarstufe_2> ,
                                                                <https://w3id.org/kim/isced-1997/level3> ,
                                                                <https://w3id.org/kim/isced-2011/level3> ;
                                                core:prefLabel "Sekundarbereich II"@de ,
                                                               "Upper secondary education"@en ;
                                                core:topConceptOf <https://w3id.org/kim/educationalLevel> .


###  https://w3id.org/kim/educationalLevel/level_4
<https://w3id.org/kim/educationalLevel/level_4> rdf:type owl:NamedIndividual ,
                                                         core:Concept ,
                                                         <https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel> ;
                                                core:altLabel "Berufliche Bildung"@de ,
                                                              "ISCED 2011, Level 4"@de ,
                                                              "ISCED 2011, Level 4"@en ;
                                                core:closeMatch <http://w3id.org/openeduhub/vocabs/educationalContext/berufliche_bildung> ;
                                                core:exactMatch <https://w3id.org/kim/isced-1997/level4> ,
                                                                <https://w3id.org/kim/isced-2011/level4> ;
                                                core:prefLabel "Post-secondary non-tertiary education"@en ,
                                                               "Postsekundarer nicht-tertiärer Bereich"@de ;
                                                core:topConceptOf <https://w3id.org/kim/educationalLevel> .


###  https://w3id.org/kim/educationalLevel/level_5
<https://w3id.org/kim/educationalLevel/level_5> rdf:type owl:NamedIndividual ,
                                                         core:Concept ,
                                                         <https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel> ;
                                                core:altLabel "ISCED 2011, Level 5"@de ,
                                                              "ISCED 2011, Level 5"@en ;
                                                core:closeMatch <https://w3id.org/kim/isced-1997/level5> ;
                                                core:definition "Erste Stufe der tertiären Bildung, die nicht direkt zu einer höheren Forschungsqualifikation führt"@de ,
                                                                "First stage of tertiary education, not leading directly to an advanced research qualification"@en ;
                                                core:exactMatch <https://w3id.org/kim/isced-2011/level5> ;
                                                core:prefLabel "Kurzes tertiäres Bildungsprogramm"@de ,
                                                               "Short-cycle tertiary education"@en ;
                                                core:topConceptOf <https://w3id.org/kim/educationalLevel> .


###  https://w3id.org/kim/educationalLevel/level_6
<https://w3id.org/kim/educationalLevel/level_6> rdf:type owl:NamedIndividual ,
                                                         core:Concept ,
                                                         <https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel> ;
                                                core:altLabel "ISCED 2011, Level 6"@de ,
                                                              "ISCED 2011, Level 6"@en ;
                                                core:broadMatch <http://w3id.org/openeduhub/vocabs/educationalContext/hochschule> ;
                                                core:broader <https://w3id.org/kim/educationalLevel/level_A> ;
                                                core:closeMatch <https://w3id.org/kim/isced-1997/level5> ;
                                                core:exactMatch <https://w3id.org/kim/isced-2011/level6> ;
                                                core:inScheme <https://w3id.org/kim/educationalLevel> ;
                                                core:prefLabel "Bachelor oder äquivalent"@de ,
                                                               "Bachelor or equivalent"@en .


###  https://w3id.org/kim/educationalLevel/level_7
<https://w3id.org/kim/educationalLevel/level_7> rdf:type owl:NamedIndividual ,
                                                         core:Concept ,
                                                         <https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel> ;
                                                core:altLabel "ISCED 2011, Level 7"@de ,
                                                              "ISCED 2011, Level 7"@en ;
                                                core:broadMatch <http://w3id.org/openeduhub/vocabs/educationalContext/hochschule> ;
                                                core:broader <https://w3id.org/kim/educationalLevel/level_A> ;
                                                core:closeMatch <https://w3id.org/kim/isced-1997/level5> ;
                                                core:exactMatch <https://w3id.org/kim/isced-2011/level7> ;
                                                core:inScheme <https://w3id.org/kim/educationalLevel> ;
                                                core:prefLabel "Master oder äquivalent"@de ,
                                                               "Master or equivalent"@en .


###  https://w3id.org/kim/educationalLevel/level_8
<https://w3id.org/kim/educationalLevel/level_8> rdf:type owl:NamedIndividual ,
                                                         core:Concept ,
                                                         <https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel> ;
                                                core:altLabel "ISCED 2011, Level 8"@de ,
                                                              "ISCED 2011, Level 8"@en ;
                                                core:broadMatch <http://w3id.org/openeduhub/vocabs/educationalContext/hochschule> ;
                                                core:broader <https://w3id.org/kim/educationalLevel/level_A> ;
                                                core:exactMatch <https://w3id.org/kim/isced-1997/level6> ,
                                                                <https://w3id.org/kim/isced-2011/level8> ;
                                                core:inScheme <https://w3id.org/kim/educationalLevel> ;
                                                core:prefLabel "Doctoral or equivalent"@en ,
                                                               "Promotion oder äquivalent"@de .


###  https://w3id.org/kim/educationalLevel/level_A
<https://w3id.org/kim/educationalLevel/level_A> rdf:type owl:NamedIndividual ,
                                                         core:Concept ,
                                                         <https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel> ;
                                                core:exactMatch <http://w3id.org/openeduhub/vocabs/educationalContext/hochschule> ;
                                                core:narrowMatch <https://w3id.org/kim/isced-1997/level5> ,
                                                                 <https://w3id.org/kim/isced-1997/level6> ,
                                                                 <https://w3id.org/kim/isced-2011/level6> ,
                                                                 <https://w3id.org/kim/isced-2011/level7> ,
                                                                 <https://w3id.org/kim/isced-2011/level8> ;
                                                core:narrower <https://w3id.org/kim/educationalLevel/level_6> ,
                                                              <https://w3id.org/kim/educationalLevel/level_7> ,
                                                              <https://w3id.org/kim/educationalLevel/level_8> ;
                                                core:prefLabel "Hochschule"@de ,
                                                               "University"@en ;
                                                core:topConceptOf <https://w3id.org/kim/educationalLevel> .


###  https://w3id.org/kim/educationalLevel/level_B
<https://w3id.org/kim/educationalLevel/level_B> rdf:type owl:NamedIndividual ,
                                                         core:Concept ,
                                                         <https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel> ;
                                                core:definition "Der Vorbereitungsdienst bezeichnet die zweite Phase der Lehrkräfteausbildung in Deutschland."@de ,
                                                                "The preparatory service designates the second phase of teacher training in germany."@en ;
                                                core:prefLabel "Preparatory service"@en ,
                                                               "Vorbereitungsdienst"@de ;
                                                core:topConceptOf <https://w3id.org/kim/educationalLevel> .


###  https://w3id.org/kim/educationalLevel/level_C
<https://w3id.org/kim/educationalLevel/level_C> rdf:type owl:NamedIndividual ,
                                                         core:Concept ,
                                                         <https://dini-ag-kim.github.io/modell_lehrplaene#EducationalLevel> ;
                                                core:exactMatch <http://w3id.org/openeduhub/vocabs/educationalContext/fortbildung> ;
                                                core:prefLabel "Advanced training"@en ,
                                                               "Fortbildung"@de ;
                                                core:topConceptOf <https://w3id.org/kim/educationalLevel> .


###  Generated by the OWL API (version 4.5.25.2023-02-15T19:15:49Z) https://github.com/owlcs/owlapi
`