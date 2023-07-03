import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalLevelsComponent } from './educational-levels.component';

describe('EducationalLevelsComponent', () => {
  let component: EducationalLevelsComponent;
  let fixture: ComponentFixture<EducationalLevelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationalLevelsComponent]
    });
    fixture = TestBed.createComponent(EducationalLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
