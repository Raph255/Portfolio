const experiencesData = [
    {
        "title" : "Technicien informatique",
        "date" : "04/2024 - 06/2024",
        "work" : "Stage à Radiall",
        "description" : `En tant que membre de l'équipe de développement, mes missions reposaient sur le développement d'outils internes de l'entreprise, 
                        principalement en Javascript. Ajout d'une fonctionnalité sur le PLM de l'entreprise, 
                        réalisation d'une interface de synchronisation entre deux logiciels de ticketing.`,
        "image" : "/image/exp-radiall.jpg",        
    },
    {
        "title" : "Développeur mobile",
        "date" : "02/2024 - 03/2024",
        "work" : "Projet universitaire",
        "members" : 6,
        "description" : `L'objectif était d'améliorer une application existante, un carnet de stages. 
                        Sous forme d'application mobile en Java Android, elle facilite la recherche de stage pour les étudiants.
                        Après avoir analysé l'existant, je me suis occupé d'améliorer l'interface. 
                        Pour la logique de l'application, j'ai participé à l'implémentation d'un système de synchronisation des données en arrière-plan, 
                        facilitant la fluidité de l'application.`,
        "image" : "/image/exp-iut2.png",        
    },
    {
        "title" : "Développeur Front-end",
        "date" : "11/2023 - 01/2024",
        "work" : "Projet universitaire",
        "members" : 8,
        "description" : `Développement d'Enigmathique, un jeu vidéo web ludo-éducatif sur les mathématiques. 
                        Inspiré du principe de l'Escape Game et de Kahoot, Enigmathique est un jeu collaboratif et compétitif à jouer en classe.
                        Je me suis chargé du design et du développement du site web du jeu, développé en ReactJS. 
                        La réalisation d'Enigmathique nous a valu le prix du prototype à l'IUT2 de Grenoble.`,
        "image" : "/image/exp-enigmathique.png",        
    }
];

const detailledExperiencesData = [
    {

    },
    [
        {
            "image": "image/exp-enigmathique-homepage.png",
            "title": "Une application existante",
             "description" : `L'objectif de ce projet était d'améliorer et d'optimiser une application existante. Nous devions évaluer la conception,
                                son ergonomie, les performances et la qualité logicielle afin d'améliorer l'ensemble de ces
                                points. L'application en question était un carnet de stages pour les étudiants en deuxième année de BUT informatique. 
                                Sur un site Web, le professeur pouvait ajouter des offres de stage et suivre la progression de la recherche des étudiants.
                                En parallèle, les étudiants disposaient d'une application mobile pour consulter les offres, y postuler et faire suivre l'évolution des candidatures.`
        },
        {
            "image": "image/exp-enigmathique-homepage.png",
            "title": "Une analyse de l'existant",
             "description" : ``
        },
        {
            "image": "image/exp-enigmathique-homepage.png",
            "title": "Un projet parti de zéro",
             "description" : ``
        }
    ],
    [
        {
            "image": "image/exp-enigmathique-homepage.png",
            "title": "Un projet parti de zéro",
             "description" : `L'objectif de ce projet était de créer, au sein d’une équipe, une application à partir de besoins clients imprécis.
                             Les besoins ? Un outil en ligne ludo-éducatif ou jeu sérieux à destination des élèves de collège ou de lycée. 
                             Après l'étude de ces besoins et l'analyse de l'existant, notre idée a été présentée puis validée par les clients.
                             En suivant une démarche de développement incrémentale, nous avons conceptualisé
                             (Base de données, Architecture logicielle, Ergonomie des interfaces) puis réalisé l'application. L'étape de réalisation a duré trois semaines.`
        },
        {
            "image": "image/exp-enigmathique-reactor.png",
            "title": "Un jeu vidéo 3D",
            "description" : `Enigmathique est un jeu vidéo ludo-éducatif de mathématiques. 
                            À destination des élèves de seconde, il reprend le principe d'un Escape Game.
                            Par équipe, les joueurs doivent s'échapper d'une pièce en 3D, faisant face à des problèmes de mathématiques.
                            Pour favoriser l'apprentissage et la motivation, nous nous sommes inspirés des ressorts de jeu de Kahoot. 
                            Compétition et collaboration, score et classement, le jeu contribue à l'apprentissage par les pairs et 
                            permet aux professeurs de suivre la progression des élèves.`
        },
         {
            "image": "image/exp-enigmathique-website.png",
            "title": "Un site Web",
            "description" : `Le jeu vidéo devait être présenté sous la forme d'un site Web. Tandis que certains s'occupaient de la mise en place du serveur,
                            d'autres ont développé le jeu vidéo en lui-même. Quant à moi, je me suis chargé du design du site, 
                            la présentation pour les étudiants et le tableau de bord pour les professeurs. Pour cela, j'ai utilisé le logiciel Figma. 
                            L'utilisation de cet outil a facilité la simulation de l'expérience utilisateur, les maquettes pouvant être utilisées comme prototype interactif.
                            Bien que j'aie réalisé le design seul, je demandais régulièrement l'avis à mon groupe. Au fur et à mesure que les pages étaient conçues, 
                            les autres membres de l'équipe de développement les développaient. Une fois le design fini, je les ai rejoints et je me suis assuré de rendre le site responsive.`
         }
    ]
]

export default experiencesData;
export {detailledExperiencesData};