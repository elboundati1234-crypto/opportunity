import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'alertes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alertes.html'
})
export class Alertes implements OnInit {

  // Modèle de données pour les préférences d'alertes
  alertPreferences = {
    emailNotification: true, // Envoyer les notifications par email [cite: 32]
    deadlineReminder: true,  // Rappel de la date limite [cite: 33]
    matchNotification: true, // Alerte pour chaque nouvelle bourse correspondante [cite: 32]
    reminderDays: 7,         // Nombre de jours avant la deadline pour le rappel
  };

  constructor() { }

  ngOnInit() {
    // Dans le cas réel : Charger les préférences existantes
  }

  saveAlertPreferences() {
    console.log('Préférences d\'alertes sauvegardées:', this.alertPreferences);
    alert('Vos préférences d\'alertes ont été enregistrées !');
    // ex: this.userService.saveAlertes(this.alertPreferences).subscribe(...)
  }
}