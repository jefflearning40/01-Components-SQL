# 🎬 TP : Cineclub - Les requêtes préparées

## Objectif pédagogique

Ce projet a pour but de te faire manipuler une **base de données relationnelle MySQL** depuis un projet **Node.js avec Express**, en appliquant les **bonnes pratiques de sécurité** : utilisation de **requêtes préparées** pour se protéger des **injections SQL**.

---

## 🔧 Mise en place

### 1. Installer les dépendances

```bash
npm install express mysql2
```


### 2. Vérifie le nom de ta base de données

Connecte-toi à ton terminal mysql puis vérifie l'état de ta database
```bash
mysql -u root
SHOW DATABASES;
```

### 3. Configurer la connexion (fichier db.js)

Vérifie que le fichier db.js a bien les bonnes données pour se connecter à ta database. 

## 📁 Structure du projet

```bash 
├── db.js              # Connexion MySQL
├── films.js           # Routes de l'API pour les films
├── server.js          # Point d'entrée de l’application
└── package.json       # Dépendances
```

## 🎯 Exercice

Tu dois compléter le fichier `films.js` en écrivant les requêtes préparées dans chaque endpoint à l’emplacement suivant :

```js
// TODO : ÉCRIRE LA REQUÊTE PRÉPARÉE
```

Les endpoints à implémenter :

1. `GET /films`
Retourne la liste complète des films.

2. `GET /films/:id`
Retourne un film par son ID.

3. `POST /films`
Ajoute un nouveau film. Vérifie que le champ id et titre sont présents.

4. `PATCH /films/:id`
Modifie le titre d’un film par son ID.

5. `DELETE /films/:id`
Supprime un film par son ID

## 💡 Aide : requête préparée avec mysql2
```js
const sql = "SELECT * FROM films WHERE id = ?";
const [rows] = await db.execute(sql, [id]);
```

- Utilise ? pour chaque paramètre dans la requête

- Fournis les valeurs dans un tableau [] à la méthode execute


## Test de l'API

Utilise Thunderclient pour tester les routes :

    GET http://localhost:3000/films

    GET http://localhost:3000/films/1


Bon courage ! 💪

