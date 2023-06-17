import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FromModel } from 'src/models/Form.model';
import { MyErrorStateMatcher } from 'src/helpers/ErrorStateMatcher';

@Component({
  selector: 'app-form-application',
  templateUrl: './form-application.component.html',
  styleUrls: ['./form-application.component.scss'],
})
export class FormApplicationComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  submitionForm = this.formBuilder.group({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    motivationalLetter: new FormControl('', [Validators.required]),
  });

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {}

  ngOnSubmit(): void {
    if (this.submitionForm.valid) {
      const newSubmition: FromModel = {
        firstName: this.submitionForm.get('firstname')?.value,
        lastName: this.submitionForm.get('lastname')?.value,
        address: this.submitionForm.get('address')?.value,
        motivationalLetter: this.submitionForm.get('motivationalLetter')?.value,
        rating: 0,
      };

      this.saveSubmition(newSubmition);
      this.router.navigate(['/application/success']);
    }
  }

  private saveSubmition(submition: FromModel): void {
    const allSubmitions = localStorage.getItem('jobSubmitions');

    if (allSubmitions) {
      const parsedSubmition = JSON.parse(allSubmitions);

      parsedSubmition.push(submition);

      localStorage.setItem('jobSubmitions', JSON.stringify(parsedSubmition));
    } else {
      const initialSubmition = [submition];

      localStorage.setItem('jobSubmitions', JSON.stringify(initialSubmition));
    }
  }
}
