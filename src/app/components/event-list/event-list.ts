import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'event-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './event-list.html'
})
export class EventList implements OnInit {
  events = [
    { id: 1, title: "Forum des Bourses Africaines", lieu: "Paris", date: "2026-03-20", link: "#" },
    { id: 2, title: "Webinar : Postuler au Canada", lieu: "En ligne", date: "2026-01-25", link: "#" },
    { id: 3, title: "Journée de l'Orientation Master", lieu: "Casablanca", date: "2026-02-05", link: "#" }
  ];

  constructor() { }
  ngOnInit() { }
}