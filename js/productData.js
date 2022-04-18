const productos = [
    {
        id:1,
        img: "https://imagizer.imageshack.com/v2/375x500q90/922/bziWQS.png", 
        artworkName: 'Getjide', 
        author: 'Unordered List', 
        price:`${1.300} ${"$"}`,
    },
    {
        id:2,
        img: "https://imagizer.imageshack.com/v2/521x655q90/922/4SWhVn.jpg", 
        artworkName: 'Ferrysh Head', 
        author: 'Michael Lanalien', 
        price:`${200} ${"$"}`,
    },
    {
        id:3,
        img: "https://imagizer.imageshack.com/v2/655x655q90/922/dcnMpU.png", 
        artworkName: 'The Boy Who Cried Wolf', 
        author: 'Pak', 
        price:`${700} ${"$"}`,
    },
    {
        id:4,
        img: "https://imagizer.imageshack.com/v2/736x739q90/923/j3PIqy.jpg", 
        artworkName: 'Marbled Sky', 
        author: 'Jonathan Byrer', 
        price:`${700} ${"$"}`,
    },
    {
        id:5,
        img: "https://imagizer.imageshack.com/v2/375x500q90/924/XnSjTx.png", 
        artworkName: 'Getjide', 
        author: 'Unordered List', 
        price:`${2000} ${"$"}`,
    },
    {
        id:6,
        img: "https://imagizer.imageshack.com/v2/351x626q90/923/0aea6Z.jpg", 
        artworkName: 'Sunflower', 
        author: 'Space Master', 
        price:`${820} ${"$"}`,
    },
    {
        id:7,
        img: "https://imagizer.imageshack.com/a/img922/6751/0h5vzm.gif", 
        artworkName: 'Red Light District', 
        author: 'OSF', 
        price:`${550} ${"$"}`,
    },
    {
        id:8,
        img: "https://imagizer.imageshack.com/v2/385x385q90/923/eHTKwI.png", 
        artworkName: 'Subscapes', 
        author: 'Matt Des Lauriers', 
        price:`${650} ${"$"}`,
    },
];

localStorage.setItem('productos', JSON.stringify(productos));