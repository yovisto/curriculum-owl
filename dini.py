from owlready2 import *

Import_Base = f"{os.getcwd()}/Import/"
Export_Base = f"{os.getcwd()}/Export/"
Deutsch_Sek1_2_120_2022 = ["iqb_Deutsch_Sek1_ab", "iqb_Deutsch_Sek1_stdESA", "iqb_Deutsch_Sek1_stdMSA"]
Deutsch_Primar_1_120_2022 = ["iqb_Deutsch_Primar_ab", "iqb_Deutsch_Primar_bistas"]
Mathe_Primar_1_380_2022 = ["iqb_Mathematik_Primar_ab", "iqb_Mathematik_Primar_stdInhalt", "iqb_Mathematik_Primar_stdProzess"]
Mathe_Sek1_2_380_2022 = ["iqb_Mathe_Sek_1_stdInhaltESA", "iqb_Mathe_Sek_1_stdInhaltMSA", "iqb_Mathe_Sek_1_ab", "iqb_Mathe_Sek_1_stdProzess"]
#Fremdsprachen_Sek1_File_Names = ["iqb_Fremdsprachen_Sek_I"]
Educational_Level_File_Names = ["educationalLevel"]
Subjects_File_Names = ["discipline"]
Sample_Data = ["CurriculumData"]
skos_core = "http://www.w3.org/2004/02/skos/core#"
sdo = "https://raw.githubusercontent.com/schemaorg/schemaorg/main/data/releases/10.0/schemaorg.owl"

def get_ontology_file_path(path_base, file): 
    return f"{path_base}{file}"

def load_imported_ontologies(onto, file_base):    
    file_list = Deutsch_Sek1_2_120_2022 + Deutsch_Primar_1_120_2022 + Educational_Level_File_Names + Mathe_Primar_1_380_2022 + Mathe_Sek1_2_380_2022 + Subjects_File_Names + Sample_Data
    for file_name in file_list:
        onto.imported_ontologies.append(get_ontology(f"{file_base}{file_name}.rdf").load())        
    
    return onto

def append_class_to_core_concept(ontology, class_type):
    individuals = list(ontology.individuals())
    for individual in individuals:
        if str(type(individual)) == 'core.Concept':
            individual.is_a.append(class_type)

def _get_subject(main_ontology, subject_code):
    subject_ontologies = [x for x in main_ontology.imported_ontologies if x.name in Subjects_File_Names]
    for ontology in subject_ontologies:
        subject = next((x for x in ontology.individuals() if x.name == subject_code), None)
        if subject:
            return subject
    return None    

def _get_educational_level(main_ontology, level):
    educational_level_ontologies = [x for x in main_ontology.imported_ontologies if x.name in Educational_Level_File_Names]
    for ontology in educational_level_ontologies:
        educational_level =  next((x for x in ontology.individuals() if x.name == f'level_{level}'), None)
        if educational_level:
            return educational_level
        
    return None 

def append_properties_to_educational_standard(main_ontology):   
    
    def add_properties(onto_list, subject, educational_level, year):        
        edu_standard_ontologies = [x for x in main_ontology.imported_ontologies if x.name in onto_list]
        if subject and educational_level:
            for ontology in edu_standard_ontologies:        
                individuals = list(ontology.individuals())                
                for individual in individuals:
                    individual.hasSubject.append(subject)   
                    individual.educationalLevel.append(educational_level) 
                    individual.yearBuilt.append(year)
        
    for onto_list, subject_code, edu_level, year in [
        (Deutsch_Sek1_2_120_2022, '120', 2, 2022), 
        (Deutsch_Primar_1_120_2022, '120', 1, 2022), 
        (Mathe_Primar_1_380_2022, '380', 1, 2022), 
        (Mathe_Sek1_2_380_2022, '380', 2, 2022)
        ]:

        subject = _get_subject(main_ontology, subject_code)
        educational_level = _get_educational_level(main_ontology, edu_level)
        add_properties(onto_list, subject, educational_level, year)    
    
    
def create_ontology():
    onto = get_ontology("https://dini-ag-kim.github.io/modell_lehrplaene#")
    onto = load_imported_ontologies(onto, Import_Base)    

    with onto:
        class EducationalStandard(Thing):
            pass
        class Subject(Thing):
            pass        

        class EducationalLevel(Thing):
            pass                            

        class hasSubject(ObjectProperty):
            domain = [EducationalStandard]
            range = [Subject]
                            
        class yearBuilt(DataProperty):
            domain = [EducationalStandard]  
            range = [int]          
    
    yearBuilt.iri = "https://schema.org/yearBuilt"    
    
    append_properties_to_educational_standard(onto)

    for imported_onto in onto.imported_ontologies:
        if imported_onto.name in Deutsch_Sek1_2_120_2022:            
            append_class_to_core_concept(imported_onto, EducationalStandard)             
        if imported_onto.name in Deutsch_Primar_1_120_2022:
            append_class_to_core_concept(imported_onto, EducationalStandard)    
        if imported_onto.name in Mathe_Sek1_2_380_2022:
            append_class_to_core_concept(imported_onto, EducationalStandard)             
        if imported_onto.name in Mathe_Primar_1_380_2022:
            append_class_to_core_concept(imported_onto, EducationalStandard)        
        # if imported_onto.name in Fremdsprachen_Sek1_File_Names:
        #     append_class_to_core_concept(imported_onto, EducationalStandard)                 
        if imported_onto.name in Educational_Level_File_Names:
            append_class_to_core_concept(imported_onto, EducationalLevel)                
        if imported_onto.name in Subjects_File_Names:    
            append_class_to_core_concept(imported_onto, Subject)                
        if imported_onto.name == 'CurriculumData':
            curriculum = next((x for x in imported_onto.classes() if x.name == 'Curriculum'), None)            
            curriculum_item = next((x for x in imported_onto.classes() if x.name == 'CurriculumItem'), None)            
            
            onto_skos = get_ontology(skos_core).load()
            skos_obj_props = [x for x in onto_skos.object_properties() if x.name in ['broader', 'narrower', 'closeMatch']]
            for prop in skos_obj_props:
                prop.is_a.append(ObjectProperty)     
            broader = next((x for x in skos_obj_props if x.name == 'broader'), None)                 
            curriculum_item.equivalent_to = [broader.some(curriculum_item), broader.some(curriculum)]                

            educationalLevel = next((x for x in imported_onto.object_properties() if x.name == 'educationalLevel'), None)            
            educationalStandard = next((x for x in imported_onto.object_properties() if x.name == 'educationalStandard'), None)                        
            educationalStandard.range = [EducationalStandard]                        
            educationalLevel.range = [EducationalLevel]
            
            AllDisjoint([EducationalStandard, EducationalLevel, Subject, curriculum, curriculum_item])
                    
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

