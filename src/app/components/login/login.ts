import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; // <--- NOUVEL IMPORT NÉCESSAIRE

@Component({
  selector: 'login',
  standalone: true,
  // Ajoutez RouterLink au tableau imports
  imports: [FormsModule, RouterLink], // <--- MODIFICATION ICI
  templateUrl: './login.html'
})
export class Login {
  email = '';
  password = '';

  login() {
    alert('Connexion avec : ' + this.email);
  }
}