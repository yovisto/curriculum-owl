import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalSubjectsComponent } from './educational-subjects.component';

describe('EducationalSubjectsComponent', () => {
  let component: EducationalSubjectsComponent;
  let fixture: ComponentFixture<EducationalSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationalSubjectsComponent]
    });
    fixture = TestBed.createComponent(EducationalSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
