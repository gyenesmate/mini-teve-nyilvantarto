import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should be invalid when name is only 1 character long', () => {
  component.camelForm.setValue({
    name: 'A',
    humpCount: 1
  });

  expect(component.camelForm.valid).toBeFalse();
  expect(component.camelForm.get('name')?.errors?.['minlength']).toBeTruthy();
});


it('should be invalid when humpCount is greater than 2', () => {
  component.camelForm.setValue({
    name: 'Ali',
    humpCount: 3
  });

  expect(component.camelForm.valid).toBeFalse();
  expect(component.camelForm.get('humpCount')?.errors?.['max']).toBeTruthy();
});


it('should be valid when name is longer than 2 characters and humpCount is 1 or 2', () => {
  component.camelForm.setValue({
    name: 'Hassan',
    humpCount: 2
  });

  expect(component.camelForm.valid).toBeTrue();
});

});
