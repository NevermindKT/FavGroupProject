
const descs = [
    "На самом деле у Sum 41 есть ещё более старый альбом \"Half Hour Of Power\", но он ломал четное значение и выглядит не слишком интересно.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]

const albums = [
    {
        name: "All Killer No Filler",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Sum_41_All_Killer_No_Filler.jpg/250px-Sum_41_All_Killer_No_Filler.jpg",
        desc: descs[0],
    },
    {
        name: "Does This Look Infected",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Sum41_doesthislookinfected.png/250px-Sum41_doesthislookinfected.png",
        desc: descs[1],
    },
    {
        name: "Chuck",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Sum41chuck.jpg/250px-Sum41chuck.jpg",
        desc: descs[2],
    },
    {
        name: "Under Class Hero",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/SUM_41_UNDERCLASS_HERO.jpg/250px-SUM_41_UNDERCLASS_HERO.jpg",
        desc: descs[3],
    },
    {
        name: "Screaming Bloody Murder",
        img: "https://upload.wikimedia.org/wikipedia/en/6/65/Screaming_Bloody_Murder.jpg",
        desc: descs[4],
    },
    {
        name: "13 Voices",
        img: "https://upload.wikimedia.org/wikipedia/en/7/71/13_Voices_album_artwork.jpg",
        desc: descs[5],
    },
    {
        name: "Order In Decline",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Order_in_decline_sum_41.png/250px-Order_in_decline_sum_41.png",
        desc: descs[6],
    },
    {
        name: "Heven:X:Hell",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Sum_41_-_Heaven_x_Hell.png/250px-Sum_41_-_Heaven_x_Hell.png",
        desc: descs[7],
    },
];

const tracks = [
    {
        title: 'Fat Lip',
        src: '/songs/fat-lip-sum41.mp3',
        img: albums[0].img,
    },
    {
        title: 'Still Waiting',
        src: '/songs/still-waiting.mp4',
        img: albums[1].img,
    },
    {
        title: 'Pieces',
        src: '/songs/pieces.mp4',
        img: albums[2].img,
    },
    {
        title: 'Walking Disaster',
        src: '/songs/walking-disaster.mp4',
        img: albums[3].img,
    },
    {
        title: 'Speak Of The Devil',
        src: 'public/songs/speak-of-the-devil.mp4',
        img: albums[3].img,
    },
    {
        title: 'Screaming Bloody Murder',
        src: '/songs/screaming-bloody-murder.mp4',
        img: albums[4].img,
    },
    {
        title: 'Goddamn I\'m Dead Again',
        src: '/songs/goddamn-i\'m-dead-again.mp4',
        img: albums[5].img,
    },
    {
        title: '45 (A Matter Of Time)',
        src: '/songs/45(a-matter-of-time).mp4',
        img: albums[6].img,
    },
    {
        title: 'Landmines',
        src: '/songs/landmines.mp4',
        img: albums[7].img,
    },
];

export {albums, tracks};