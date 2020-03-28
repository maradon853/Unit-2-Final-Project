import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-search',
  templateUrl: './sign-search.component.html',
  styleUrls: ['./sign-search.component.scss']
})
export class SignSearchComponent implements OnInit {
  title = 'sign-search';
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      signs: ['', Validators.required],
    });
  }

}
