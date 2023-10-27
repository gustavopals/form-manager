import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormManagerListComponent } from './form-manager-list.component';

describe('FormManagerListComponent', () => {
  let component: FormManagerListComponent;
  let fixture: ComponentFixture<FormManagerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormManagerListComponent]
    });
    fixture = TestBed.createComponent(FormManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
