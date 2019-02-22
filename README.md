# editorial-app-edsboilerplate

Boilerplate de développement front simple, pour l'EDS. Utilise :

- NodeJS
- Webpack
- Babel
- ESLint

## Qu'est-ce que c'est ?

Ce projet peut servir de point de départ pour les projets front assez simples (une page, des styles, du JS).

Grâce à Webpack et Babel, on peut développer avec du hot reload et transpiler/minifier le code avant de le publier.

ESLint permettra d'avoir un style de code normalisé.

## Installation

```
npm i
```

## Développement

On peut lancer le serveur de développement avec cette commande :

```
npm run serve
```

La page est alors visible sur [https://localhost:8080/](https://localhost:8080/), et sera rechargée à chaque mise à jour de fichier.

> À noter : Les fichiers `app.js` et `app.css` sont ajoutés automatiquement au HTML grâce à Webpack. Si vous souhaitez ajouter d'autres fichiers, plusieurs possibilités :
>
> - le déclarer dans l'HTML, et dans `app.js`, ajouter quelque chose comme : `const $ = window.$;`
> - importer ce fichier depuis `app.js` (ou `app.css` le cas échéant) : `const $ = require('./jquery.js);`

## Build

```
npm run build
```

Cette commande génère les fichiers dans un dossier `dist`.

## Linting

Pour voir les potentielles erreurs de style/syntaxe, vous pouvez exécuter cette commande :

```
npm run lint
```

Et pour tenter de réparer automatiquement ces erreurs :

```
npm run fix
```

> À noter : si vous ajoutez des librairies, elles seront également lintées. Si ce n'est pas ce que vous souhaitez, mettez-les dans le dossier `vendor`.

[![BrowserStack Status](https://automate.browserstack.com/automate/badge.svg?badge_key=zWSuBX4PAYj7tdzcRREF)](https://www.browserstack.com/automate/public-build/zWSuBX4PAYj7tdzcRREF)
