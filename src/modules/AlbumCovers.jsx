import React from "react";
import CoverModal from "./CoverModal.jsx";

const albumCovers = [
    {
        name: "All Killer No Filler",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Sum_41_All_Killer_No_Filler.jpg/250px-Sum_41_All_Killer_No_Filler.jpg",
        desc: "На самом деле у Sum 41 есть ещё более старый альбом \"Half Hour Of Power\", но он ломал четное значение и выглядит не слишком интересно."
    },
    {
        name: "Does This Look Infected",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Sum41_doesthislookinfected.png/250px-Sum41_doesthislookinfected.png",
        desc: ""
    },
    {
        name: "Chuck",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Sum41chuck.jpg/250px-Sum41chuck.jpg",
        desc: ""
    },
    {
        name: "Under Class Hero",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/SUM_41_UNDERCLASS_HERO.jpg/250px-SUM_41_UNDERCLASS_HERO.jpg",
        desc: ""
    },
    {
        name: "Screaming Bloody Murder",
        img: "https://upload.wikimedia.org/wikipedia/en/6/65/Screaming_Bloody_Murder.jpg",
        desc: ""
    },
    {
        name: "13 Voices",
        img: "https://upload.wikimedia.org/wikipedia/en/7/71/13_Voices_album_artwork.jpg",
        desc: ""
    },
    {
        name: "Order In Decline",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Order_in_decline_sum_41.png/250px-Order_in_decline_sum_41.png",
        desc: ""
    },
    {
        name: "Heven:X:Hell",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Sum_41_-_Heaven_x_Hell.png/250px-Sum_41_-_Heaven_x_Hell.png",
        desc: ""
    },
]



function AlbumCovers() {
    const [selectedAlbum, setSelectedAlbum] = React.useState(null);

    return (
        <section className="albums">
            <h2>Альбомы</h2>
            <div className="album-grid">
                {albumCovers.map((src, index) => (
                    <img key={index} src={src.img} alt={src.name} className="glow-box" onClick={() => setSelectedAlbum(src)} />
                ))}
            </div>

            <CoverModal album={selectedAlbum} onClose={() => setSelectedAlbum(null)}/>
        </section>
    )
}

export default AlbumCovers;