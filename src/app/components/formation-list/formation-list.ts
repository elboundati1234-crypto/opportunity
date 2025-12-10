import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'formation-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './formation-list.html'
})
export class FormationList implements OnInit {
  formations = [
    { id: 1, title: "Masterclass Développement Web", date: "2026-02-15", link: "#", bourse: true },
    { id: 2, title: "Cours Intensif Anglais TOEFL", date: "2026-03-01", link: "#", bourse: false },
    { id: 3, title: "Certificat de Gestion de Projet", date: "2026-04-10", link: "#", bourse: true }
  ];

  constructor() { }
  ngOnInit() { }
}