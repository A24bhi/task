// personal-details-table.component.ts
import { Component, OnInit } from '@angular/core';
import { PersonalDetailsService } from '../personal-details.service';

@Component({
  selector: 'app-personal-details-table',
  templateUrl: './personal-details-table.component.html',
  styleUrls: ['./personal-details-table.component.css'],
})
export class PersonalDetailsTableComponent implements OnInit {
  personalDetails: any[] = [];

  constructor(private personalDetailsService: PersonalDetailsService) {}

  ngOnInit(): void {
    this.loadPersonalDetails();
  }

  loadPersonalDetails(): void {
    this.personalDetailsService.getPersonalDetails().subscribe(
      (data) => {
        this.personalDetails = data;
      },
      (error) => {
        console.error('Error fetching personal details:', error);
      }
    );
  }
}
