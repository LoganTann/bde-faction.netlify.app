---
title: Liste des catégories
description: La page d'accueil de la section d'articles de notre site.
---

Bienvenue sur la nouvelle fonctionnalité d'articles de notre site !

Celle-ci fonctionne grâce à la superbe fonction Content du framework Nuxt.JS (peut être qu'on écrira un article dessus ?).  
Cet outil permet à nos membres d'écrire facilement des articles, tant que le site a été bien programmé !

Pour le moment, seulement un flux de contenu est disponible : [le blog](blog/). On y écrira quelques articles sur ce qu'on fait afin de donner un peu de nouvelles et vous pouvez dès 
 présent la consulter.

On prévois aussi d'ajouter une catégorie *Cours* mais pour le moment, on priorise l'essentiel...


### Création d'articles

Cela se fait via pull request. Veuillez consulter notre [GitHub](https://github.com/LoganTann/bde-faction.fr).

Voici le code javascript pour générer l'entête de chaque article de blog :

```js
console.log(
  "---", 
  "\ntitle:", prompt("Titre ?"),
  "\ndescription:", prompt("Description ?"),
  "\ncreatedAt:", new Date().toISOString(),
  "\n---\n\n## Titre"
);
```
