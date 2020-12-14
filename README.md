# Label Emmaüs - Test technique

Réalisation du test technique de Label Emmaüs par Thomas Le Vaou.

Ce projet consiste à utiliser les données de l'API SchoolDigger (https://any-api.com/schooldigger_com/schooldigger_com/docs/_v1_schools/Schools_GetAllSchools),
de sorte à produire un formulaire permettant de chercher des écoles des États-Unis, par État et/ou par nom d'école.

Chaque recherche retourne le nombre total de résultats retournés, ainsi que pour les
résultats de la page demandée par l'utilisateur:
- Le nom de l'école;
- Le nombre d'étudiants de cette école;
- L'adresse complète de l'école.

Les écoles sont également affichées sur une carte via l'API Mapbox (https://www.mapbox.com/).

Pour exécuter le code de ce projet, il suffit de le cloner, puis d'entrer les commandes suivantes à la racine du projet
(en supposant que React.js et Node.js sont déjà installés) :
```
npm install
npm start
```

Ce qui permet d'afficher le résultat du projet dans le navigateur, à l'adresse http://localhost:3000/.
