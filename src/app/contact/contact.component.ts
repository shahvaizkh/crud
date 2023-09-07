import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonsService } from '../persons.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  personData!: any[];
  userId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private personsService: PersonsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.userId = this.activatedRoute.snapshot.params['userId'];
    if (this.userId) {
      this.getUserById(this.userId);
    }
  }

  // Initialize the Form and give values

  initializeForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // On click Submit button
  
  onSubmit(): void {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;

      if (this.userId > 0) {
        this.personsService
          .updatePersons(this.userId, formValues)
          .subscribe((res) => {
            alert("Edit Updated : " + " " + res.name);
          });
      } else {
        this.personsService
          .postAllPersons(formValues)
          .subscribe((response: any) => {
            alert("Post Created : " + " " + response.name);
            
          });
      }
      this.router.navigate(['/list']);
    }
  }

  getUserById(userId: any) {
    this.personsService.getById(userId).subscribe((response: any) => {
      this.contactForm.patchValue(response);
    });
  }
}