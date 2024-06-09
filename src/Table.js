// src/Table.js
import React, { useEffect, useState } from 'react';

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/data')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const handleEdit = (id, field, value) => {
        const updatedData = data.map(item => 
            item.id === id ? { ...item, [field]: value } : item
        );
        setData(updatedData);
        fetch(`http://127.0.0.1:5000/data/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ [field]: value })
        });
    };

    return (
        <table>
            <thead>
                <tr>
                    {data.length > 0 && Object.keys(data[0]).map(key => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {Object.entries(item).map(([key, value]) => (
                            <td key={key} contentEditable={true} onBlur={(e) => handleEdit(item.id, key, e.target.innerText)}>
                                {value}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
