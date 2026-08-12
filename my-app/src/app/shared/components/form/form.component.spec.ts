import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FilterPipe } from '../../pipes/filter.pipe';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let filterPipeStub: Partial<FilterPipe>;

  beforeEach(async () => {
    filterPipeStub = {
      transform: (value) => value ?? []
    };
    await TestBed.configureTestingModule({
    imports: [FormsModule, ReactiveFormsModule, FormComponent],
    providers: [
        {
            provide: FilterPipe,
            useValue: filterPipeStub
        }
    ]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
