import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // <--- Importer Router

@Component({
  selector: 'register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html'
})
export class Register {
  name = '';
  email = '';
  password = '';

  // Injecter le Router
  constructor(private router: Router) {} 

  register() {
    alert('Inscription réussie ! Veuillez compléter immédiatement votre profil pour le matching.');
    
    // Après l'inscription réussie (simulée ici), rediriger vers la page Profil
    this.router.navigate(['/profil']);
  }
}