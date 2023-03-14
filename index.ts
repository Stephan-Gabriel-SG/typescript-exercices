// Import stylesheets
import './style.css';

// Data models
import { companies, users, franckMonod } from './models';

// Interfaces

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const myCompany = {};
const usersName = [];

let sumAge = 0;

// /!\ Le terme affiché correspond à de simple console.log()

/**
 * Consignes - Level 1 :
 */
console.log('LEVEL 1');

// 1. Faire la somme des ages de tout les "users", afficher la valeur de sumAge.
// 2. Récupérer les noms des "users" dans le tableau "usersName", afficher sa valeur.

for (let i = 0; i < users.length; i++) {
  usersName.push(users[i].name);
  if (users[i].age != null) {
    sumAge += users[i].age;
  }
}
console.log('Somme Age: ', sumAge);
usersName.forEach((name) => console.log(name));

/**
 * Consignes - Level 2 :
 */
console.log('LEVEL 2');

// 1. Ajouter l'utilisateur "franckMonod" à la liste "users".
// 2. Récupérer les "users" avec le status "alternant" dans le tableau "usersAlternant" grâce à une boucle "for", afficher sa valeur.
// 3. Changer le status de l'utilisateur "Thomas" en "cofondateur".
// 4. Récupérer les "users" avec le status "cofondateur", afficher ces utilisateurs en 1 seul console.log.
let newUser = {
  id: franckMonod.id,
  name: franckMonod.name,
  age: franckMonod.age,
  company: franckMonod.company,
  status: franckMonod.status,
};
users.push(newUser);
let usersAlternant = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].status == 'alternant') {
    usersAlternant.push(users[i]);
  }
}
usersAlternant.forEach((user) => console.log(user));
for (let i = 0; i < users.length; i++) {
  if (users[i].status == 'cofondateur') {
    console.log(users[i]);
  }
}
/**
 * Consignes - Level 3 :
 */
console.log('LEVEL 3');

// 1. Trouver le nom de l'entreprise de l'utilisateur ayant un id = 2.
// 2. Trouver le nom de la localisation de l'utilisateur ayant pour indice 2 dans le tableau "users".
// 3. Changer la localisation des entreprises ayant pour nom "PRISMO" en "Cran-Gevrier".
usersAlternant.forEach((user) => console.log(user));
for (let i = 0; i < users.length; i++) {
  if (users[i].id == 2) {
    console.log(users[i].company.name);
    console.log(users[i].company.location);
    if (users[i].company.location == 'PRISMO') {
      users[i].company.location = 'Cran-Gevrier';
    }
  }
}

/**
 * Consignes - Level 4 :
 */
console.log('LEVEL 4');

// L'utilisatrice Leïla n'a pas de compagnie associée. Elle souhaite ajouter une entreprise sur son profil. Pour ce faire, elle doit :
// - Trouver l'entreprise "PRISMO", dans la liste des "companies";
// - Associer les valeurs de "PRISMO" à la propriété "company" de son compte
// - Afficher son compte
for (let i = 0; i < users.length; i++) {
  if (users[i].name == 'Leïla') {
    users[i].company = {
      id: 1,
      name: 'PRISMO',
      location: 'Cran-Gevrier',
    };
    console.log(users[i]);
  }
}
/**
 * Consignes - Bonus :
 */
console.log('Bonus');
interface user {
  id: number;
  name: string;
  age: number;
  company: string;
  status: string;
}
interface company {
  id: number;
  name: string;
  location: string;
}
// - Créer une interface correspondant à l'objet "user"
// - Créer une interface correspondant à l'objet "company"
// - Typer son code
