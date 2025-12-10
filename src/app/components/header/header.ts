import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header', // ou 'header' selon ton app.ts
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html' // Assure-toi que ce chemin est correct
})
export class Header {}