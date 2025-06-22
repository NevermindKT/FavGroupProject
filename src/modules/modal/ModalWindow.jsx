function WindowModal({ data, onClose, type }) {
    if (!data) return null;

    const isAlbum = type === "album";

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-info">
                    <h2>{data.name}</h2>
                    <div className="scroll-box">
                        {data.desc
                            ? data.desc.split("\n").map((line, index) => (
                                <p key={index}>{line}</p>
                            ))
                            : <p>{isAlbum ? "Описание альбома группы." : "Описание участника группы."}</p>
                        }
                    </div>
                </div>
                <img
                    src={data.img}
                    alt={data.name}
                    className={isAlbum ? "modal-album-photo" : "modal-photo"}
                />
            </div>
        </div>
    );
}

export default WindowModal;
