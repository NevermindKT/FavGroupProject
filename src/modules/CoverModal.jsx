
function CoverModal({album, onClose}) {
    if (!album) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-info">
                    <h2>{album.name}</h2>
                    <div className="scroll-box">
                        {album.desc
                            ? album.desc.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))
                            : <p>Описание альбома группы.</p>
                        }
                    </div>
                </div>
                <img src={album.img} alt={album.name} className="modal-album-photo" />
            </div>
        </div>
    )
}

export default CoverModal;