import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styles: [],
})
export class SignupComponentComponent implements OnInit {
  iconSrc = 'assets/images/icon-google.svg';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  value = 'Clear me';

  matcher = new MyErrorStateMatcher();
  constructor() {}

  ngOnInit(): void {}
}
