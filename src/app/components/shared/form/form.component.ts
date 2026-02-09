import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnChanges {
  @Input() formTitle?: string;

  @Input() name?: string;
  @Input() humpCount?: number;

  @Output() formSubmit = new EventEmitter<{ name: string; humpCount: number }>();

  public camelForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.camelForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      humpCount: [1, [Validators.required, Validators.min(1), Validators.max(2)]]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['name'] || changes['humpCount']) {
      this.camelForm.patchValue({
        name: this.name ?? '',
        humpCount: this.humpCount ?? 1
      });
    }
  }

  onSubmit() {
    if (this.camelForm.valid) {
      this.formSubmit.emit(this.camelForm.value);
    } else {
      this.camelForm.markAllAsTouched();
    }
  }
}
