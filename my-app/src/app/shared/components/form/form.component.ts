import { Component, OnInit, Output, EventEmitter, Input, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { State } from '../../../shared/enums/state.enum';
import { Item } from '../../interfaces/item';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    imports: [FormsModule, ReactiveFormsModule, NgIf, NgFor]
})
export class FormComponent implements OnInit {
  private fb = inject(UntypedFormBuilder);

  @Input() editItem?: Item;
  @Output() newItem = new EventEmitter<Item>();
  public form: UntypedFormGroup;
  public intitules = Object.values(State);
  constructor() {
    this.form = this.createForm();
  }

  ngOnInit() {
    if (this.editItem) {
      this.form.patchValue(this.editItem);
    }
  }

  private createForm() {
    return this.fb.group({
      name: [
        this.editItem ? this.editItem.name : '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ],
      reference: [
        this.editItem ? this.editItem.reference : '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      state: this.editItem ? this.editItem.state : State.ALIVRER
    });
  }

  public isError(formControlName: string): boolean {
    const formControl = this.form?.get(formControlName);
    if (formControl) {
      return formControl.touched
          && formControl.invalid;
    } else {
      return false;
    }
  }

  private getItem(): Item {
    const data = this.form?.value as Item;
    if (!this.editItem) {
      return data;
    } else {
      const id = this.editItem.id;
      return Object.assign({}, data, { id });
    }
  }

  public process(): void {
    const data = this.getItem();
    console.log(data);
    this.newItem.emit(data);
    if (!data.id) {
      this.form.reset();
      this.form.get('state')?.setValue(State.ALIVRER);
    }
  }
}
