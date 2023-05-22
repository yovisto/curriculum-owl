from owlready2 import *

Import_Base = f"{os.getcwd()}/Import/"
Export_Base = f"{os.getcwd()}/Export/"
Deutsch_Sek1_File_Names = ["iqb_Deutsch_Sek1_ab", "iqb_Deutsch_Sek1_stdESA", "iqb_Deutsch_Sek1_stdMSA"]
Deutsch_Primar_File_Names = ["iqb_Deutsch_Primar_ab", "iqb_Deutsch_Primar_bistas"]
Mathe_Primar_File_Names = ["iqb_Mathematik_Primar_ab", "iqb_Mathematik_Primar_stdInhalt", "iqb_Mathematik_Primar_stdProzess"]
Mathe_Sek1_File_Names = ["iqb_Mathe_Sek_1_stdInhaltESA", "iqb_Mathe_Sek_1_stdInhaltMSA", "iqb_Mathe_Sek_1_ab", "iqb_Mathe_Sek_1_stdProzess"]
Fremdsprachen_Sek1_File_Names = ["iqb_Fremdsprachen_Sek_I"]
Educational_Level_File_Names = ["educationalLevel"]
Sample_Data = ["CurriculumData"]
skos_core = "http://www.w3.org/2004/02/skos/core#"

def get_ontology_file_path(path_base, file): 
    return f"{path_base}{file}"

def load_imported_ontologies(onto, file_base):    
    file_list = Deutsch_Sek1_File_Names + Deutsch_Primar_File_Names + Educational_Level_File_Names + Mathe_Primar_File_Names + Mathe_Sek1_File_Names + Fremdsprachen_Sek1_File_Names + Sample_Data
    for file_name in file_list:
        onto.imported_ontologies.append(get_ontology(f"{file_base}{file_name}.rdf").load())        
    
    return onto

def append_class_to_core_concept(ontology, class_type):
    individuals = list(ontology.individuals())
    for individual in individuals:
        if str(type(individual)) == 'core.Concept':
            individual.is_a.append(class_type)

def create_ontology():
    onto = get_ontology("https://dini-ag-kim.github.io/modell_lehrplaene#")
    onto = load_imported_ontologies(onto, Import_Base)
    
    with onto:
        class Bildungsstandard(Thing):
            pass

        class Bildungsstandard2022_Deutsch_Sek1(Bildungsstandard):
            pass    

        class Bildungsstandard2022_Deutsch_Primar(Bildungsstandard):
            pass
        
        class Bildungsstandard2022_Mathe_Sek1(Bildungsstandard):
            pass    

        class Bildungsstandard2022_Mathe_Primar(Bildungsstandard):
            pass

        class Bildungsstandard2022_Fremdsprachen_Sek1(Bildungsstandard):
            pass

        class EducationalLevel(Thing):
            pass            

        class assesses(ObjectProperty):            
            pass

        class assessedBy(ObjectProperty):            
            inverse_property = assesses            

        class teaches(ObjectProperty):            
            pass            

        class taughtBy(ObjectProperty):            
            inverse_property = teaches               

        AllDisjoint([Bildungsstandard2022_Deutsch_Primar, Bildungsstandard2022_Deutsch_Sek1, Bildungsstandard2022_Mathe_Primar, Bildungsstandard2022_Mathe_Sek1, Bildungsstandard2022_Fremdsprachen_Sek1])        
    
    onto_skos = get_ontology(skos_core).load()
    skos_obj_props = [x for x in onto_skos.object_properties() if x.name in ['broader', 'narrower', 'closeMatch']]
    for prop in skos_obj_props:
        prop.is_a.append(ObjectProperty)     

    for imported_onto in onto.imported_ontologies:
        if imported_onto.name in Deutsch_Sek1_File_Names:
            append_class_to_core_concept(imported_onto, Bildungsstandard2022_Deutsch_Sek1)             
        if imported_onto.name in Deutsch_Primar_File_Names:
            append_class_to_core_concept(imported_onto, Bildungsstandard2022_Deutsch_Primar)    
        if imported_onto.name in Mathe_Sek1_File_Names:
            append_class_to_core_concept(imported_onto, Bildungsstandard2022_Mathe_Sek1)             
        if imported_onto.name in Mathe_Primar_File_Names:
            append_class_to_core_concept(imported_onto, Bildungsstandard2022_Mathe_Primar)        
        if imported_onto.name in Fremdsprachen_Sek1_File_Names:
            append_class_to_core_concept(imported_onto, Bildungsstandard2022_Fremdsprachen_Sek1)                 
        if imported_onto.name in Educational_Level_File_Names:
            append_class_to_core_concept(imported_onto, EducationalLevel)                
        if imported_onto.name == 'CurriculumData':
            curriculum = next((x for x in imported_onto.classes() if x.name == 'Curriculum'), None)            
            curriculum_item = next((x for x in imported_onto.classes() if x.name == 'CurriculumItem'), None)            
            
            broader = next((x for x in skos_obj_props if x.name == 'broader'), None)     
            #narrower = next((x for x in skos_obj_props if x.name == 'narrower'), None)         
            #curriculum_item.equivalent_to = [broader.some(curriculum), broader.some(curriculum_item), narrower.some(curriculum_item)]                
            curriculum_item.equivalent_to = [broader.some(curriculum_item), broader.some(curriculum)]                

            educationalLevel = next((x for x in imported_onto.object_properties() if x.name == 'educationalLevel'), None)            
            educationalStandard = next((x for x in imported_onto.object_properties() if x.name == 'educationalStandard'), None)            
            #educationalStandard.domain = [curriculum, curriculum_item]            
            educationalLevel.domain = [curriculum]
            educationalStandard.range = [Bildungsstandard]                        
            educationalLevel.range = [EducationalLevel]
            assesses.range = [curriculum_item]
            assessedBy.domain = [curriculum_item]
            teaches.range = [curriculum_item]
            taughtBy.domain = [curriculum_item]

            AllDisjoint([Bildungsstandard, EducationalLevel, curriculum, curriculum_item])
                    
    return onto
    
def save_ontology(main_onto, file_name):    
    if not os.path.exists("Export"):
        os.makedirs("Export")
    for ontology in main_onto.imported_ontologies:  
        file_path = get_ontology_file_path(Export_Base, f'{ontology.name}.rdf')
        ontology.save(file = file_path, format = "rdfxml")

    main_onto.save(file = file_name, format = "rdfxml")  

    return main_onto   

def replace_text_in_file(file_name, in_text, out_text):
    with open(file_name, 'r') as file :
        filedata = file.read()        
    filedata = filedata.replace(in_text, out_text)     
    with open(file_name, 'w') as file:
        file.write(filedata)        


# Main Program

onto = create_ontology()
target_file = "dinio.owl"
onto = save_ontology(onto, target_file)

replace_in_text = '<owl:imports rdf:resource="'
replace_out_text = '<owl:imports rdf:resource="file://'
replace_text_in_file(target_file, replace_in_text, replace_out_text)
replace_text_in_file(target_file, Import_Base, Export_Base)

# End Main Program

