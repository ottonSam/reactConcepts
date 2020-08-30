import React from 'react';
import students from '../../data/student';

export default (props) => {
    const list = students.map(student => {
        
        return (
            <li key={student.id}>
                {student.id}) {student.nome} - {student.nota}
            </li>
        );
    });

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    );
};