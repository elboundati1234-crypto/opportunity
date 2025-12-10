import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// Structure de données basée sur votre cahier des charges
export interface Scholarship {
  _id: string; // MongoDB utilise _id [cite: 43, 82]
  title: string;
  country: string;
  level: 'Licence' | 'Master' | 'Doctorat' | string; // Filtre par niveau [cite: 41]
  deadline: string; // Date limite [cite: 41]
  domain: string; // Domaine d'étude [cite: 41]
  amount: number; // Montant de la bourse [cite: 41]
  description?: string;
  link: string;
}

// L'URL de votre API Backend Node.js/Express.js [cite: 78]
// NOTE: Changez l'URL pour correspondre à votre backend réel !
const API_URL = 'http://localhost:3000/api/scholarships'; 

@Injectable({
  providedIn: 'root'
})
export class ScholarshipService {

  // Injecte le service HTTP
  constructor(private http: HttpClient) { }

  /**
   * Récupère la liste de toutes les bourses depuis le backend API.
   * @returns Observable<Scholarship[]>
   */
  getAllScholarships(): Observable<Scholarship[]> {
    // Appel HTTP GET vers l'API Node/Express
    return this.http.get<Scholarship[]>(API_URL);
  }

  /**
   * Récupère les détails d'une bourse par son ID.
   * @param id L'identifiant de la bourse (MongoDB _id)
   * @returns Observable<Scholarship>
   */
  getScholarshipById(id: string): Observable<Scholarship> {
    return this.http.get<Scholarship>(`${API_URL}/${id}`);
  }

  /**
   * Mock pour le développement local si le backend n'est pas prêt.
   * Remplacez par getAllScholarships() quand l'API est fonctionnelle.
   */
  getMockScholarships(): Observable<Scholarship[]> {
    const mock: Scholarship[] = [
      { _id:'1', title: 'Bourse Excellence Maroc (Mock)', country: 'Maroc', level: 'Master', deadline: '2026-03-10', domain: 'Ingénierie', amount: 5000, link: '#' },
      { _id:'2', title: 'Global Study Grant (Mock)', country: 'France', level: 'Licence', deadline: '2026-05-01', domain: 'Science', amount: 8000, link: '#' },
      { _id:'3', title: 'Research PhD Award (Mock)', country: 'Canada', level: 'Doctorat', deadline: '2026-04-20', domain: 'Informatique', amount: 15000, link: '#' },
    ];
    return of(mock);
  }
}