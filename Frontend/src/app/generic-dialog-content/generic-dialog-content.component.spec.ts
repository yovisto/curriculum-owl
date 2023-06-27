import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDialogContentComponent } from './generic-dialog-content.component';

describe('GenericDialogContentComponent', () => {
  let component: GenericDialogContentComponent;
  let fixture: ComponentFixture<GenericDialogContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericDialogContentComponent]
    });
    fixture = TestBed.createComponent(GenericDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
