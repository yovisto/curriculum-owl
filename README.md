# Building Dini Curriculum Ontology

# Requirements
- Python3

# Installation
```
pip3 install owlready2
```
# Execution

## Running the Application
```
python3 dini.py
```
## Outputs
The application creates an ontology ```dinio.owl``` in the application directory. This is the complete ontology and can be opened and viewed inside an ontology editor such as Protege.

A folder ```Export``` is also created in the application directory, and it contains the dependent files for the ```dinio.owl``` ontology.

# Frontend application

An angular frontend application for adding and editing curricula and curricula items in the Dini Curriculum Ontology

## Prerequisites

- Install [Docker](https://docker.com/).
- Build the Docker container.

```
sh build.sh
```

## Running the application

- To run the frontend application, the following script can be used:

```
sh runService.sh
```

- The application should now be available in your browser on port 80 (http://localhost:80)