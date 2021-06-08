import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-foo-bar-quix-form',
  templateUrl: './foo-bar-quix-form.component.html'
})
export class FooBarQuixFormComponent implements OnInit {
  
  fooBarQuixFormGroup: FormGroup;

  @Output() submitNumberOutput = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) {
    this.fooBarQuixFormGroup = this.formBuilder.group({
      number: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitNumber(): void {
    this.submitNumberOutput.emit(this.fooBarQuixFormGroup.value.number);
  }

}
