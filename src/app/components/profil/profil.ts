import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'profil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profil.html'
})
export class Profil implements OnInit {

  // Modèle de données pour les préférences utilisateur
  userPreferences = {
    level: '',          // Licence/Master/Doctorat [cite: 27]
    domain: '',         // Domaine d'études [cite: 27]
    targetCountry: '',  // Pays de destination souhaité [cite: 27]
    maxBudget: 0,       // Montant minimum de la bourse (0 = pas de préférence) [cite: 27]
  };

  // Listes de sélection pour les menus déroulants
  levels = ['Licence', 'Master', 'Doctorat', 'Post-Doc'];
  domains = ['Informatique', 'Ingénierie', 'Droit', 'Médecine', 'Sciences Humaines', 'Biologie'];
  targetCountries = ['Canada', 'France', 'Allemagne', 'Maroc', 'États-Unis']; 

  constructor() { }

  ngOnInit() {
    // Dans le cas réel : Charger les préférences existantes de l'utilisateur
    // ex: this.userService.getUserPreferences().subscribe(data => this.userPreferences = data);
  }

  savePreferences() {
    // Dans le cas réel : Envoyer ces critères au backend Node.js pour le matching [cite: 30]
    console.log('Préférences sauvegardées:', this.userPreferences);
    alert('Vos critères de matching ont été enregistrés ! Vous recevrez des alertes pour les bourses correspondantes.');
    // ex: this.userService.savePreferences(this.userPreferences).subscribe(...)
  }
}