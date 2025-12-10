import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router'; // <--- Importer Router

@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html'
})
export class Login {
  email = '';
  password = '';

  // Injecter le Router
  constructor(private router: Router) {} 

  login() {
    alert('Connexion réussie ! Veuillez compléter votre profil.');
    
    // Après une connexion réussie (simulée ici), rediriger vers la page Profil
    this.router.navigate(['/profil']); 
    
    // NOTE : Dans la version réelle avec l'API, vous feriez la redirection UNIQUEMENT
    // si l'appel HTTP (this.userService.login().subscribe(response =>...)) réussit.
  }
}