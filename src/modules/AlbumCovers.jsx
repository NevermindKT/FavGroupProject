import React from "react";
import {albums} from "../info/data/tracks.js";
import WindowModal from "./modal/ModalWindow.jsx";

function AlbumCovers() {
    const [selectedAlbum, setSelectedAlbum] = React.useState(null);

    return (
        <section className="albums">
            <h2>Альбомы</h2>
            <div className="album-grid">
                {albums.map((src, index) => (
                    <img key={index} src={src.img} alt={src.name} className="glow-box" onClick={() => setSelectedAlbum(src)} />
                ))}
            </div>

            <WindowModal data={selectedAlbum} onClose={() => setSelectedAlbum(null)} type={"album"} />
        </section>
    )
}

export default AlbumCovers;