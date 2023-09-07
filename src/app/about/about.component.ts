import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  // Data Array of Table
  personData: any[] = [];

  constructor(private personsService: PersonsService, private router: Router) {}

  // Get all persons on ngOnInit

  ngOnInit(): void {
    this.personsService.getAllPersons().subscribe((data) => {
      this.personData = data;
    });
  }

  updatePersons(id: any): void {
    // routing
    this.router.navigate(['/user-edit', id]);
  }

  // Deleting the Obj from table

  deletePersons(id: number): void {
    this.personsService.deletePersons(id).subscribe(() => {
      this.personData = this.personData.filter((person) => person.id !== id);
    });
  }
}
