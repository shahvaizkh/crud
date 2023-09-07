import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  editForm!: FormGroup;

  constructor( private fb: FormBuilder ){ }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }
}
