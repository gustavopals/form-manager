import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormManagerEditComponent } from './form-manager-edit.component';

describe('FormManagerEditComponent', () => {
  let component: FormManagerEditComponent;
  let fixture: ComponentFixture<FormManagerEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormManagerEditComponent]
    });
    fixture = TestBed.createComponent(FormManagerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
