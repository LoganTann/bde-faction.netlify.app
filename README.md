# Coucou !

Si tu es ici, c'est que t'es bigrement curieux.

* Soit t'es un étudiant lambda qui est juste curieux et qui se dit "mais quelle structure étrange du site... Où sont les fichiers HTML ?"  
  Dans ce cas, tu auras des détails plus bas. 😊
* Soit t'es un membre de sinfonia et tu comprends à quel point on est pas si ouf que ça  
  Il parait juste que c'est la tradition de faire un site web, faut pas s'attendre à un leak si ouf, à part les gros plans gênants de nos photos insta 😏
* Soit t'es quelqu'un d'autre. Désolé pour le tutoiement. 😶


## Comment ça fonctionne ?

Le projet a été créé en VueJS. C'est un framework javascript qui permet de créer des sites web littéralement sous forme de briques indépendantes, et une [vidéo](https://vimeo.com/247494684) explique plutôt bien ce concept et les avantages.
VueJS peut démarrer dans un simple fichier HTML ([exemple ici](https://logantann.github.io/perso/EDT_bot.html)) ou sur un serveur NodeJS.

Dans notre cas, on a besoin d'installer [NodeJS](https://nodejs.org/en/).  
Après avoir téléchargé le code source de ce repo et nodeJS, nous vous conseillons d'installer yarn qui permettra d'installer plus rapidement les dépendances. Pour cela, exécutez cette commande suivante :

```sh
npm install --global yarn # ou le diminutif "npm i -g yarn"
```

Puis lancez la commande suivante dans le répertoire du projet afin de **télécharger les dépendances** :

```sh
yarn install # ou "npm install" si vous avez pas téléchargé yarn, mais sera plus lent en moyenne
```

Il vous suffit ensuite de transformer votre ordi en serveur local de développement qui héberge notre site :

```sh
yarn serve # ou "npm run serve" si vous avez pas téléchargé yarn
```

Le serveur de développement possède une fonction de hot reload, qui rechargera notre page en temps réel lorsque le code est modifié. Quelle modernité 🤩 !  
Même si notre site est rapide, nous pouvons le rendre encore plus rapide. `yarn build` (ou `npm run build`) compilera le code en mode *production*, par contre, c'est à vous de déployer sur un véritable serveur.

Enfin, vous pouvez exécuter une vérification syntaxique (**lint**) + correction d'erreurs en faisant `yarn lint` (ou `npm run build`)

### Open Source ?

Comme nous sommes prétentieux mais généreux quand même, le projet est publié en sources ouvertes sous la clause [GNU GPL3, explications simples en cliquant ici](https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3)).
