import React from "react";
import CoverModal from "./CoverModal.jsx";
import {albums} from "../info/data/tracks.js";

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

            <CoverModal album={selectedAlbum} onClose={() => setSelectedAlbum(null)}/>
        </section>
    )
}

export default AlbumCovers;