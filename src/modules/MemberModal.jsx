function MemberModal({ member, onClose }) {
    if (!member) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-info">
                    <h2>{member.name}</h2>
                    <div className="scroll-box">
                        {member.bio
                            ? member.bio.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))
                            : <p>Описание участника группы.</p>
                        }
                    </div>
                </div>
                <img src={member.img} alt={member.name} className="modal-photo" />
            </div>
        </div>
    );
}

export default MemberModal;