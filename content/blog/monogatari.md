
---
title: Créez vos visual novel en HTML avec Monogatari
description: 
createdAt: 2021-12-08T21:07:09+02:00
---

# Créez vos visual novel en HTML avec Monogatari
## Visual Novel ? quesako

Phoenix Wright : Ace Attorney, Doki Doki Litterature Club, Danganronpa ou Steins;gate... Vous connaissez sûrement un de ces jeux-ci ?

Le Visual Novel, c'est un roman interactif où l'histoire est écrite sous forme de branches : le *joueur* fais des choix qui feront changer le déroulement de l'histoire, aboutissant à des passages ou fins exclusives.
Des mini-jeux peuvent être ajoutés pour rendre l'histoire plus attractive.

![.](https://upload.wikimedia.org/wikipedia/commons/3/3a/Wikipe-tan_Visual_Novel_School_French_%28Ren%27Py%29.png)

Pour créer un visual novel, il existe de nombreux moteurs de jeu, tel que Ren'Py, Visual Novel Maker ou NaniNovel pour Unity.

Et pourquoi pas votre propre moteur de jeu tant qu'on y est ? C'est super sympa en termes de pédagogie : fabriquer des affichages 2D, créer votre propre langage de script, mettre au point un système d'animation avancé et faire en sorte d'ajouter des mini-jeux...  
Attention, car il y a de fortes chances de finir par passer plus de temps à réinventer la roue plutôt qu'à faire le scénario de votre jeu (car n'oublions pas, c'est un *roman* interactif)

Finalement, se restreindre à un moteur de jeu est souvent la meilleure option. Le moteur le plus populaire est Ren'Py, car il est open-source et possède un langage de script très puissant qui conviendra autant aux experts en python qu'à des écrivains qui n'ont jamais appris la programmation.

## On en vient à Monogatari

Monogatari est, au même titre de Ren'Py, un moteur de visual novel. Sa particularité, c'est de pouvoir créer votre visual novel et de le déployer sur navigateur.

Vous allez me dire qu'il existe déjà plusieurs moteurs VN qui peuvent être jouables sur navigateur (tel que Ren'Js), et qu'il y a d'ailleurs un portage expérimental de Ren'Py en WebAssembly. Mais la particularité de Mongatari, c'est qu'**il s'agit plutôt d'un framework javascript où tout le rendu de votre jeu est en fait un site web**. 

La textbox est un *CustomElement* javascript, les images sont des balises `<img>`, et toute l'UI est finalement contenue dans de vraies balises HTML5, contrairement à Ren'Js qui est rendu sur un simple `<canvas>`.

![Retaining's Memories - Powered by Monogatari Game Engine](https://user-images.githubusercontent.com/28659185/145273761-f549bb86-ebca-4cad-8e36-0457785505e2.png)

Avoir adopté ce système peut être très avantageux, car il suffit juste d'utiliser un fichier CSS pour customiser l'affichage. Et si vous voulez ajouter des mini-jeux ou choses très techniques comme une intégration serveur, vous êtes libres de manipuler le DOM à votre aise. Quant à votre script, il est écrit dans un fichier JavaScript que Monogatari va charger. Donc tout ce que vous pouvez faire dans un site web, vous pouvez le mettre dans votre jeu Monogatari. 
Je pense en particulier aux graphismes vectoriels, aux vidéos, ou à des canvas WebGL externes par exemple.

![image](https://user-images.githubusercontent.com/28659185/145275617-3e110942-d969-4f54-bbe4-03f38270d488.png)

L'époque où vous codiez le moteur de rendu et devez le compiler pour chaque plateforme est révolue. Le navigateur se charge de l'affichage responsive et trucs plus complexe, et il suffit juste de déposer votre site sur un serveur web (ou netlify/github pages) pour que les PC, Mac et smartphones puissent y jouer. 

## Comment faire mon jeu ?

* Téléchargez le fichier zip de Monogatari sur https://github.com/Monogatari/Monogatari/releases/
* Tout est déjà configuré. Double-cliquez sur le fichier `index.html` pour tester le jeu par défaut

Il est temps d'écrire notre propre script. Ouvrez le fichier `script.js` dans le dossier `js`, et vous verrez quelque chose du genre : 

<details>
<summary> (Cliquez pour dévoiler le code) </summary>

```js
monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': (input) => input.trim().length > 0,
				'Save': function (input) {
					this.storage ({player: {name: input}});
					return true;
				},
				'Revert': function () {
					this.storage ({player: {name: ''}});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'y Hi {{player.name}} Welcome to Monogatari!',
		{
			'Choice': {
				'Dialog': 'y Have you already read some documentation?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],
	'Yes': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],
	'No': [
		'y You can do it now.',
		'show message Help',
		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	]
});
```

</details>


Le script est codé dans un objet javascript. Il existe différentes manières de créer un label, mais personnellement, je préfère profiter de ça pour tout séparer et modifier un peu : 

```js
script = {};
script["Start"] = [
		'show scene #f7f6f6 with fadeIn',
		'y Bonjour toi, bienvenue sur monogatari. Ne clique pas sur non.',
		{
			Choice: {
				Yes: {
					Text: 'Ok !',
					Do: 'jump Yes'
				},
				No: {
					Text: 'Non :P',
					Do: 'jump No'
				}
			}
		}
];
```
```js
script["Yes"] = [
	"T'es cool ! (dit le narrateur)"
];
script["No"] = [
	"y Oh non, une fonction javascript sauvage apparaît",
	"y aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
	function() {
		const txtbox = document.querySelector('text-box');
		txtbox.style.transform = "scale(1.3) translate(300px, -100px) skew(53deg, -14deg)";
	},
	"Bah voilà, c'est tout moche maintenant (dit le narrateur)",
	"end"
];
```

Notez que j'ai pu insérer directement du JavaScript entre les dialogues, de la même manière qu'on peut insérer du python dans Ren'Py pour étendre un peu le jeu.

Dans cette fonction, j'ai ordonné au navigateur de faire un peu n'importe quoi sur l'affichage de la textbox. Appréciez maintenant le résultat en cliquant sur le choix "non" :

![Monogatari textbox transform](https://user-images.githubusercontent.com/28659185/145269841-fb8209bd-0c39-41f5-8ccd-deb86a3617d9.png)

Voilà, c'était à peu près tout.

Vous pourrez trouver sur la documentation (https://developers.monogatari.io/documentation/) des tutoriels pour apprendre la structuration des fichiers et la syntaxe. Le but de mon article est juste de faire un *proof of concept* du VN dans un site internet.

## Conclusion

Monogatari, c'est un peu comme Ren'Py, sauf que ça tourne sur un navigateur web. Le framework possède une petite communauté sur Discord (https://discord.gg/sj4uPrP) si jamais vous avez des soucis, et évidemment une documentation en ligne.

Je vous passe également une démo de la version 1.0 : https://monogatari.io/demo  
*Je vous ai présenté dans l'article la 2.0 qui possède plus de fonctionnalités et a une structure bien plus sérieuse en terme d'architecture du code source/PWA, mais ça pourrait vous donner une idée de ce qui est possible*  

Je vous invite à le tester si jamais vous souhaitez faire un visual novel, et encore plus si vous maitrisez à peu près le javascript. On me souffle même à l'oreille qu'une certaine startup l'utilise pour créer des serious game et les vendre à des entreprises.

Ah, et mon jeu ? Ce n'est pas du tout abouti, mais j'essaie de porter la série Kagerou Project sur un visual novel. C'est une série idéale pour adapter en visual novel, car elle a beaucoup de médias (musiques, anime, manga, roman) et tous ont leur propre trame, ce qui fait des scènes et une conclusion différente.
Si vous voulez tester ou rejoindre notre discord pour participer au développement, c'est par ici : https://kagescan.fr/fangame/

Enfin, sachez que monogatari ne possède pas de contributeurs actifs mis à part son créateur, donc si vous l'utilisez, n'hésitez pas à aider ce projet pour l'améliorer !
