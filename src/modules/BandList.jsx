import React from "react";
import MemberModal from "./MemberModal";

import deryckImg from "../pics/Sum_41_-_Southside_Festival_2024_-_1DX_2908.jpg";
import devidImg from "../pics/Sum_41_-_Southside_Festival_2024_-_DSC2683.jpg";
import jasonImg from "../pics/Sum_41_-_Southside_Festival_2024_-_1DX_2951.jpg";
import tomImg from "../pics/Sum_41_-_Southside_Festival_2024_-_DSC2943.jpg";
import zummoImg from "../pics/Sum_41_-_Southside_Festival_2024_-_1DX_2926.jpg";

const members = [
    {
        name: "Дэрик Джейсон Уибли",
        role: "вокал, ритм-гитара, клавишные, соло-гитара, бэк-вокал",
        joined: "1996",
        image: deryckImg,
    },
    {
        name: "Дэвид Низам Бэкш",
        role: "соло-гитара, бэк-вокал",
        joined: "1996",
        image: devidImg,
    },
    {
        name: "Джейсон Паул МакКэслин",
        role: "бас-гитара, бэк-вокал",
        joined: "1999",
        image: jasonImg,
    },
    {
        name: "Томас Арнольд Такер",
        role: "ритм/соло-гитара, клавишные, бэк-вокал",
        joined: "2009",
        image: tomImg,
    },
    {
        name: "Фрэнк Зуммо",
        role: "ударные, перкуссия, редко бэк-вокал",
        joined: "2015",
        image: zummoImg,
    },

];

function BandList() {
    const [selectedMember, setSelectedMember] = React.useState(null);

    return (
        <section className="band-members">
            <h2>Состав группы (последний)</h2>
            <ul className="memberList">
                {members.map((member, index) => (
                    <li className="member glow-box" key={index} onClick={() => setSelectedMember(member)}>
                        <div className="photo-wrapper">
                            <img src={member.image} alt={member.name}/>
                        </div>
                        <div className="member-info">
                            <h3>{member.name}</h3>
                            <p>Инструмент: {member.role}</p>
                            <p>Присоединился: {member.joined}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
        </section>
    );
}

export default BandList;