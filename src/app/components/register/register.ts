import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  register() {
    alert('Compte créé : ' + this.email);
  }
}
