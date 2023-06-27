import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalStandardDetailComponent } from './educational-standard-detail.component';

describe('EducationalStandardDetailComponent', () => {
  let component: EducationalStandardDetailComponent;
  let fixture: ComponentFixture<EducationalStandardDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationalStandardDetailComponent]
    });
    fixture = TestBed.createComponent(EducationalStandardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
