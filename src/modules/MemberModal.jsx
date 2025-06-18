function MemberModal({ member, onClose }) {
    if (!member) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-info">
                    <h2>{member.name}</h2>
                    <p>{member.description || "Описание участника группы."}</p>
                </div>
                <img src={member.image} alt={member.name} className="modal-photo" />
            </div>
        </div>
    );
}

export default MemberModal;