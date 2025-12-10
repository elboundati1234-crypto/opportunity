import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Nécessaire pour [ngStyle]

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule], 
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'] // Référence au fichier de style
})
export class Dashboard implements OnInit {

  // Variables du nouveau design
  profileProgress: number = 75; // Simuler 75% du profil complété
  favoriteCount: number = 4;    // Simuler 4 favoris
  activeAlerts: boolean = true; // Simuler que les alertes sont ON

  // Propriété calculée pour l'affichage du statut ON/OFF
  get alertStatusText(): string {
      return this.activeAlerts ? 'ON' : 'OFF';
  }

  constructor() {}

  ngOnInit() {
    // Ici, vous chargerez les statistiques réelles depuis votre API Node.js/Express.js
    // ex: this.userService.getUserStats().subscribe(data => { ... });
  }
}