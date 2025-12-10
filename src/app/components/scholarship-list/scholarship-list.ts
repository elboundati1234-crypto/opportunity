import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { Scholarship, ScholarshipService } from '../../services/scholarship';




@Component({
  selector: 'scholarship-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './scholarship-list.html'
})
export class ScholarshipList implements OnInit {

  allScholarships: Scholarship[] = [];
  filteredScholarships: Scholarship[] = []; 

  // --- NOUVEAUTÉ : Liste des Favoris (stockée dans le Front-End pour le Mock) ---
  favoriteIds: string[] = ['1']; // Simuler que l'ID '1' est déjà en favori
  
  keyword = '';
  level = ''; 
  selectedDomain = ''; 

  levels = ['Licence', 'Master', 'Doctorat'];
  domains = ['Informatique', 'Ingénierie', 'Droit', 'Médecine', 'Biologie', 'Sciences Humaines']; 

  constructor(private scholarshipService: ScholarshipService) { }

  ngOnInit() {
    this.loadScholarships();
  }

  loadScholarships() {
    this.scholarshipService.getMockScholarships().subscribe({
      next: (data) => {
        this.allScholarships = data;
        this.applyFilters();
      },
      error: (err) => {
        console.error('Erreur lors du chargement des bourses:', err);
      }
    });
  }

  applyFilters() {
    // [Logique de filtrage existante, laissez-la telle quelle]
    let temp = this.allScholarships;
    const kw = this.keyword.toLowerCase().trim();
    if (kw) {
      temp = temp.filter(s => 
        s.title.toLowerCase().includes(kw) || 
        s.description?.toLowerCase().includes(kw) ||
        s.domain.toLowerCase().includes(kw)
      );
    }
    if (this.level) {
      temp = temp.filter(s => s.level === this.level);
    }
    if (this.selectedDomain) {
      temp = temp.filter(s => s.domain === this.selectedDomain);
    }
    this.filteredScholarships = temp;
  }

  clearFilters() {
    this.keyword = '';
    this.level = '';
    this.selectedDomain = '';
    this.applyFilters();
  }
  
  // --- NOUVELLE MÉTHODE : Vérifier l'état (Utilisé dans le HTML) ---
  isFavorite(id: string): boolean {
    return this.favoriteIds.includes(id);
  }

  // --- NOUVELLE MÉTHODE : Ajouter ou Retirer (Cliquée par le bouton) ---
  toggleFavorite(s: Scholarship) {
    if (!s._id) { 
        alert("Erreur: ID de la bourse manquant.");
        return;
    }
    
    if (this.isFavorite(s._id)) {
      // Retirer
      this.favoriteIds = this.favoriteIds.filter(id => id !== s._id);
      alert(`Bourse "${s.title}" retirée des favoris.`);
    } else {
      // Ajouter
      this.favoriteIds.push(s._id);
      alert(`Bourse "${s.title}" ajoutée aux favoris!`);
    }
    // Dans le cas réel, vous feriez ici un appel this.scholarshipService.toggleFavorite(s._id).subscribe(...)
  }
}