import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { ScholarshipList } from './components/scholarship-list/scholarship-list';
import { ScholarshipDetail } from './components/scholarship-detail/scholarship-detail';
import { Dashboard } from './components/dashboard/dashboard';
import { Favoris } from './components/favoris/favoris'; 
import { Alertes } from './components/alertes/alertes'; 
import { Profil } from './components/profil/profil';

// NOTE : Votre compilateur peut toujours exiger le suffixe '.component' dans les noms de fichiers.
// Si ça ne compile pas, renommez vos fichiers .ts en .component.ts

export const routes: Routes = [
  // 1. Pages Publiques
  { path: '', component: Home },
  { path: 'bourses', component: ScholarshipList },
  { path: 'bourse/:id', component: ScholarshipDetail },

  // 2. Pages d'Authentification
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // 3. Pages Privées (Espace Utilisateur) - Pas de doublons
  { path: 'dashboard', component: Dashboard }, 
  { path: 'favoris', component: Favoris }, 
  { path: 'profil', component: Profil }, 
  { path: 'alertes', component: Alertes }, // <-- LE LIEN EST MAINTENANT CORRECT

  // 4. Route Wildcard (Doit toujours être la dernière)
  { path: '**', redirectTo: '' }
];