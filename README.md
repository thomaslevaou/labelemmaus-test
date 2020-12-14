# Label Emmaüs - Test technique

Réalisation du test technique par Thomas Le Vaou, à la demande de l'équipe de
recrutement de Label Emmaüs.

Ce projet consiste à utiliser les données de l'API SchoolDigger https://any-api.com/schooldigger_com/schooldigger_com/docs/_v1_schools/Schools_GetAllSchools
de sorte à produire un formulaire permettant de chercher des écoles par État des États-Unis.

Chaque recherche retourne le nombre total de résultats retournés, ainsi que pour les
résultats de la page demandée (la première par défaut, avec 10 résultats par page):
- Le nom de l'école
- Le nombre d'étudiants de cette école
- L'adresse complète de l'école

Les écoles sont également affichées sur une carte via l'API mapbox.

Pour exécuter le code de ce projet, il suffit de le cloner, puis d'entrer les commandes suivantes à la racine du projet
(en supposant que React.js et Node.js sont déjà installés) :
```
npm install
npm start
```

Ce qui permet d'afficher le résultat du projet dans le navigateur, à l'adresse http://localhost:3000/.
