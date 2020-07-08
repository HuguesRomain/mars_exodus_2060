www.mars-exodus-2060.space



# Stack Technique et Documentation

## Stack Technique :

### ~~Pourquoi React ?~~

### Pourquoi un frameworks ?

Nous avons pris la décision d'organiser le projet de manière à séparer nos interfaces en application distincte. Le projet possède ses composants globaux et chaque application indépendante possède ses propres composants tous ces composants sont eux triés en organisms, molecules et atoms. l'utilisation d'un framework simplifie le développement en simplifiant la réutilisation et la communication entre tous son différent composant. Sa garantie a bon usage un code plus maintenable et plus optimisé. 

### Pourquoi Typescript ?

L'application a en partie comme but d'afficher des données à différents degrés d'importance à l'utilisateur. Il pourrait être malencontreux de rendre un donné erroné. L'utilisation de typescript permet dans un premier temps de donner une forme de conscience au code qui lui permet d'indiquer au développeur quand une données non attendu est rendu. La raison la plus importante est d'imposer aux developers une rigueur l'empêchant de manipuler ces données de n'importe quelles façons. Cela force le maintiens d'une structure dans le code concernant la communication entre les composants. Il aide et guide aussi le devlelopers en lui indiquant les quelles données est attendues à quelles endroit. L'utilisation de typescript est très utile pour les nouveaux développeurs pouvant s'incruster au développement du projet et qui n'ont pas forcément une parfaite connaissance de ce dernier.

### Pourquoi Styled-components ?

L'utilisation de styled-components simplifie la communication entre le style css de l'application et le Javascript. il permet un meilleur confort de développement et simplifie le changement de style en fonction des interactions de l'utilisateur sur l'interface.

### Pourquoi FullCalendar ?

Le développement d'un calendrier aurait été trop complexe et beaucoup trop long. Il est inutile de réinventer la roue. FullCalendar nous permet la mise en place simple d'un calendrier permettant d'afficher les données nécessaires.

## Documentation :

### - Architecture -

Toutes les interfaces de l'application sont divisé et rendu de manière indépendante. Leur code est situé dans le dossier `src/exodus/apps` vous y trouverez les dossiers de toutes les interfaces actuellement en place dans l'application. avec, a la racine. leurs index, organisms, molecules et atoms. Il se peut si le besoin , c'est fait ressentir au moment du développement que d'autres dossiers ou fichiers soient présents comme par exemple un dossier `pages` ect.. Il vous sera grâce à cette organisation très simple de retrouver un composant qui vous semble nécessaire lors du développement de votre objectif. Si vous ne trouvez pas dans aucun des fichiers de l'interface le composant dont vous avez besoin, assuré vous qu'il n'est pas situé dans le dossier `src/exodus/components`. Ce dossier regroupe tous les organisms, molecules ou atoms global à toute l'application (le composant `Button` en est un bon exemple). Si vous ne trouvez toujours pas votre composant. libre à vous de le crée à l'emplacement qui vos sembles adaptés. 🥳

### - Style -

Le dossier style (Situé `src/style`) regroupe tout ce qui n'a pas de lien avec le fonctionnel direct de l'application mais avec l'apparence visuelle globale de celle-ci. Vous y retrouverez le style global de l'application les assets/icons et également les constantes de style. 

Les constantes : 

Elles regroupes, Les couleurs, Les breakpoints, Les font, Les font-weight, Les font-size, Les espacements et les tailles d'icons. 

Il est absolument nécessaire d'utiliser toute ces constante de style dans l'application afin garder une cohérence. 

Pour le sizing nous utilisons les rem a l'aide de l'outil de polished nous permettant de rentré des valeurs en pixel en faisant `rem(?px)`.

Concernant le style des composants il est directement écrit dans le fichier des composants eux-mêmes à l'aide de styled-components 💅✨.

### - Internal Router -

L'internal router est un fichier regroupant toutes les routes. il permet d'avoir une vision d'ensemble de toutes les routes actuellement présentes dans l'application et également d'être sur d'avoir des redirections correctes au moment de son utilisation. Pour l'utiliser il vous suffit de l'appeler de telle sorte exemple : 

```jsx
homeAppRouter.home() === "/app/home/"
```

Toutes les routes sont triées dans des Class symbolisant l'interface concernée.

Si vous devez créer une route il vous suffit de l'ajouter à sa class en question et le tour est joué.  

### - Utils -

Les utils situé `src/exodus/utils` est un peu ce que l'on peut considérer comme une trousse a outils. De dossier regroupe toutes les fonctions globales à toute l'application comme du traitement de données ou autres. Si vous pensez faire une fonction qui pourrait être utile à toute l'application cela peut sembler intéressant de la rendre global en la plaçant ici plutôt que dans un fichier ciblé **🛠**. 

### - Services -

Les services sont également un autre point central de l'application. Ce dossier situé `src/exodus/services` regroupe toutes les fonctions faisant référence à des appels réseaux. 

**Il est absolument primordial si vous devez faire un appel réseau de créer un service dédié plutôt que d'écrire l'appel en brut dans les composants.👺** 

Vous retrouverez également dans les services tous les types globaux à l'application.

À l'instinct du dossier apps, tous les services sont triés par interface.

### - Github -

Pour contribuer au projet vous devez créer faire des branchs avec comme paterne de nom `vosInitial/l'objectif` exemple : `hr/fix-hero-header` à la suite de ça vous devez créé votre pull Request et le tagger comme `wip` signifiant `Work In Progress` une fois le code fini, vous pouvez tagger la PR comme `ToReview` et assigner un reviewer. Le raviver fera ses retours si nécessaire. Une fois la PR appouved vous pouvez `squash and merge` la Pull Request en prenant soin de lui donner un nom cohérent commençant [css] ou [jss] voir [js css] en fonction de la partie du code touché. 

Vous avec maintenant toutes les clés en main pour contribuer à ce projet libre à vous de créer. 👨‍🎨
