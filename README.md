www.mars-exodus-2060.space

![Alt text](src/styles/assets/pics/hero/hero_7.jpg?raw=true "Title")

# Stack Technique et Documentation

## Stack Technique :

### ~~Pourquoi React ?~~

### Pourquoi un framework ?

Nous avons pris la décision d'organiser le projet de manière à séparer nos interfaces en applications distinctes. Le projet possède ses composants globaux et chaque application indépendante possède ses propres composants. Tous ces composants quant à eux sont triés en organismes, molécules et atomes. L'utilisation d'un framework simplifie la réutilisation et la communication entre tous ces différents composants. Cela garantit a bon usage un code plus maintenable et plus optimisé. 

### Pourquoi Typescript ?

L'application a en partie comme but d'afficher des données à différents degrés d'importance à l'utilisateur. Il pourrait être malencontreux de rendre une donnée erronée. L'utilisation de typescript permet dans un premier temps de donner une forme de conscience au code qui lui permet d'indiquer au développeur quand une données attendue est rendue. La raison la plus importante est d'imposer aux développeurs une certaine rigueur les empêchant de manipuler ces données de n'importe quelles façons. Cela force le maintiens d'une structure dans le code concernant la communication entre les composants. Il aide et guide aussi le développeur en lui indiquant quelles données sont attendues, et à quelles endroit. L'utilisation de typescript est très utile pour les nouveaux développeurs pouvant s'incruster au développement du projet et qui n'ont pas forcément une parfaite connaissance de ce dernier.

### Pourquoi Styled-components ?

L'utilisation de styled-components simplifie la communication entre le style css de l'application et le Javascript. il permet un meilleur confort de développement et simplifie le changement de style en fonction des interactions de l'utilisateur sur l'interface.

### Pourquoi FullCalendar ?

Le développement d'un calendrier aurait été trop complexe et beaucoup trop long. Il est inutile de réinventer la roue. FullCalendar nous permet la mise en place simple d'un calendrier permettant d'afficher les données nécessaires.

## Documentation :

### - Architecture -

Toutes les interfaces de l'application sont divisée et rendues de manière indépendante. Leur code est situé dans le dossier `src/exodus/apps` Vous y trouverez les dossiers de toutes les interfaces actuellement en place dans l'application, avec, a la racine,leurs index, organismes molécules et atomes. Grâce à cette organisation Il vous sera très simple de retrouver un composant qui vous semble nécessaire lors du développement de votre objectif. Si vous ne le trouvez dans aucun des fichiers de l'interface assurez-vous que le composant dont vous avez besoin ne soit pas situé dans le dossier  `src/exodus/components`. Ce dossier regroupe tous les organismes, molécules ou atomes globaux à toute l'application (le composant `Button` en est un bon exemple). Si vous ne trouvez toujours pas votre composant, libre à vous de le créer à l'emplacement qui vous semble adapté. 🥳

### - Style -

Le dossier style (Situé dans `src/style`) regroupe tout ce qui n'a pas de lien avec le fonctionnel direct de l'application, mais avec l'apparence visuelle globale de celle-ci. Vous y retrouverez le style global de l'application les assets/icons et également les constantes de style. 

Les constantes : 

Elles regroupent : Les couleurs, les breakpoints, les font, les font-weight, les font-size, les espacements et les tailles d'icônes. 

Il est absolument nécessaire d'utiliser toutes ces constantes de style dans l'application afin garder une bonne cohérence. 

Pour le sizing nous utilisons les rem a l'aide de l'outil polished nous permettant de rentrer des valeurs en pixel en faisant `rem(?px)`.

Concernant le style des composants, il est directement écrit dans le fichier des composants eux-mêmes à l'aide de styled-components 💅✨.

### - Internal Router -

L'internal router est un fichier regroupant toutes les routes. il permet d'avoir une vision d'ensemble de toutes les routes actuellement présentes dans l'application et également d'être sûr d'avoir des redirections correctes au moment de son utilisation. Pour l'utiliser il vous suffit de l'appeler de telle sorte : 

```jsx
homeAppRouter.home() === "/app/home/"
```

Toutes les routes sont triées dans des Class symbolisant l'interface concernée.

Si vous devez créer une route il vous suffit de l'ajouter à sa class en question et le tour est joué.  

### - Utils -

Les utils situé dans `src/exodus/utils` est un peu ce que l'on peut considérer comme une trousse à outils. Ce dossier regroupe toutes les fonctions globales à toute l'application, comme du traitement de données ou autres. Si vous pensez faire une fonction qui pourrait être utile à toute l'application cela peut sembler intéressant de la rendre globale en la plaçant ici plutôt que dans un fichier ciblé **🛠**. 

### - Services -

Les services sont également un autre point central de l'application. Ce dossier situé `src/exodus/services` regroupe toutes les fonctions faisant référence à des appels réseaux. 

**Il est absolument primordial si vous devez faire un appel réseau de créer un service dédié plutôt que d'écrire l'appel en brut dans les composants.👺** 

Vous retrouverez également dans les services tous les types globaux à l'application.

À l'instar du dossier apps, tous les services sont triés par interface.

### - Github -

Pour contribuer au projet vous devez créer des branches avec comme pattern de nom `vosInitial/l'objectif` Exemple : `hr/fix-hero-header` À la suite de ça vous devez créér votre pull Request et le tagger comme `wip` signifiant `Work In Progress` Une fois le code fini, vous pouvez tagger la PR comme `ToReview` et assigner un reviewer. Le raviver fera ses retours si nécessaire. Une fois la PR appouved vous pouvez `squash and merge` la Pull Request en prenant soin de lui donner un nom cohérent commençant [css] ou [js] voire [js css] en fonction de la partie du code touché. 

Vous avez maintenant toutes les clés en main pour contribuer à ce projet.
libre à vous de crée ! 👨‍🎨
