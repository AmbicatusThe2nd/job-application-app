import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FromModel } from 'src/models/Form.model';

@Component({
  selector: 'app-form-application',
  templateUrl: './form-application.component.html',
  styleUrls: ['./form-application.component.scss'],
})
export class FormApplicationComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  submitionForm = this.formBuilder.group({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    motivationalLetter: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  ngOnSubmit(): void {
    if (this.submitionForm.valid) {
      const newSubmition: FromModel = {
        firstName: this.submitionForm.get('firstname')?.value,
        lastName: this.submitionForm.get('lastname')?.value,
        address: this.submitionForm.get('address')?.value,
        motivationalLetter: this.submitionForm.get('motivationalLetter')?.value,
      };

      console.log(newSubmition); // Dummy submition
    }
  }
}
