import { Component } from '@angular/core';


// ...
@Component({
  selector: 'app-footer', // ou 'footer' selon ton app.ts
  standalone: true,
  templateUrl: './footer.html'
})
export class Footer {
  year = new Date().getFullYear();
}