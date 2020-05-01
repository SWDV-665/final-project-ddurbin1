import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private formBuilder: FormBuilder) {}
  get actor() {
    return this.registrationForm.get("actor");
  }
  get director() {
    return this.registrationForm.get('director');
  }
  get year() {
    return this.registrationForm.get('year');
  }
  get genre() {
    return this.registrationForm.get('genre');
  }
  
  public errorMessages = {
    actor: [
      { type: 'required', message: 'Actor is required' },
      { type: 'maxlength', message: 'Actor cant be longer than 50 characters' }
    ],
    director: [
      { type: 'required', message: 'Director is required' },
      { type: 'maxlength', message: 'Director cant be longer than 50 characters' }
    ],
	genre: [
      { type: 'required', message: 'Genre is required' },
      { type: 'maxlength', message: 'Genre cant be longer than 50 characters' }
    ],
    year: [
      { type: 'required', message: 'Year is required' },
      { type: 'maxlength', message: 'Year cant be longer than 4 digits' }
    ]
  };
  registrationForm = this.formBuilder.group({
    actor: ['', [Validators.required, Validators.maxLength(50)]],
    director: ['', [Validators.required, Validators.maxLength(50)]],
    genre: ['', [Validators.required, Validators.maxLength(50)]],
	year: ['', [Validators.required, Validators.maxLength(4)]]
  });
  public submit() {
    console.log(this.registrationForm.value);
  }
}
