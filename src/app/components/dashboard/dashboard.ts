import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [RouterLink], // Ajoutez RouterLink
  templateUrl: './dashboard.html'
})
export class Dashboard {}
