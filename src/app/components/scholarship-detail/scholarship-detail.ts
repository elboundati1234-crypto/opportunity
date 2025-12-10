import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'scholarship-detail',
  standalone: true,
  templateUrl: './scholarship-detail.html'
})
export class ScholarshipDetail {

  scholarships = [
    { title: 'Bourse Maroc', country: 'Maroc', level: 'Licence', deadline: '10 Mars 2026' },
    { title: 'Bourse France', country: 'France', level: 'Master', deadline: '01 Mai 2026' },
    { title: 'Bourse Canada', country: 'Canada', level: 'PhD', deadline: '20 Avril 2026' },
  ];

  scholarship: any;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.scholarship = this.scholarships[id];
  }

}
