import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Scholarship, ScholarshipService } from '../../services/scholarship';



@Component({
  selector: 'app-favoris',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './favoris.html'
})
export class Favoris implements OnInit { // <--- Gardez le nom de classe 'Favoris' pour l'alignement avec app.routes.ts

    // Votre logique de favoris existante ici...

    favoriteScholarships: Scholarship[] = [];
    constructor(private scholarshipService: ScholarshipService) {}
    ngOnInit() { /* ... */ this.loadFavorites(); }
    loadFavorites() { /* ... */ }
    removeFavorite(id: string) { /* ... */ }
}

// Optionnel: Ajouter un export pour satisfaire d'autres parties du code qui pourraient chercher FavorisComponent
export const FavorisComponent = Favoris;