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
  get genre() {
    return this.registrationForm.get('genre');
  }
  get year() {
    return this.registrationForm.get('year');
  }
  
  public errorMessages = {
    actor: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
    ],
	director: [
      { type: 'required', message: 'Name is required' },
      { type: 'pattern', message: 'Name cant be longer than 100 characters' }
    ],
    genre: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid genre type' }
    ],
    street: [
      { type: 'required', message: 'Premiere year is required' },
      { type: 'maxlength', message: 'Can not be less then or greater then four digits' }
    ],
    
  };
  registrationForm = this.formBuilder.group({
    actor: ['', [Validators.required, Validators.maxLength(100)]],
	director: ['', [Validators.required, Validators.maxLength(100)]],
    genre: ['', [Validators.required, Validators.maxLength(100)]],
	year: ['', [Validators.required, Validators.maxLength(4)]]
    
  });
  public submit() {
    console.log(this.registrationForm.value);
  }

 
}
