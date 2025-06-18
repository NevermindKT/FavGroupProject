
function CoverModal({album, onClose}) {
    if (!album) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-info">
                    <h2>{album.name}</h2>
                    <p>{album.desc || "Описание альбома группы."}</p>
                </div>
                <img src={album.img} alt={album.name} className="modal-album-photo" />
            </div>
        </div>
    )
}

export default CoverModal;