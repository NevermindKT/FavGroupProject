import React from "react";
import members from "../info/data/members.js";
import WindowModal from "./modal/ModalWindow.jsx";

function BandList() {
    const [selectedMember, setSelectedMember] = React.useState(null);

    return (
        <section className="band-members">
            <h2>Состав группы (последний)</h2>
            <ul className="memberList">
                {members.map((member, index) => (
                    <li className="member glow-box" key={index} onClick={() => setSelectedMember(member)}>
                        <div className="photo-wrapper">
                            <img src={member.img} alt={member.name}/>
                        </div>
                        <div className="member-info">
                            <h3>{member.name}</h3>
                            <p>Инструмент: {member.role}</p>
                            <p>Присоединился: {member.joined}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <WindowModal data={selectedMember} onClose={() => setSelectedMember(null)} type={"member"} />
        </section>
    );
}

export default BandList;