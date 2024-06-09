import React, { useEffect, useState } from "react";
import "./App.css";

const Table = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const fetchData = (page) => {
        fetch(`http://127.0.0.1:5000/data?page=${page}&per_page=10`)
            .then((response) => response.json())
            .then((data) => {
                setData(data.data);
                setTotalPages(data.total_pages);
            })
            .catch((error) => console.error("Error fetching data:", error));
    };

    const handleEdit = (id, field, value) => {
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
        );
        setData(updatedData);
        fetch(`http://127.0.0.1:5000/data/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ [field]: value }),
        });
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {data.length > 0 &&
                            Object.keys(data[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {Object.entries(item).map(([key, value]) => (
                                <td
                                    key={key}
                                    contentEditable={true}
                                    onBlur={(e) =>
                                        handleEdit(
                                            item.id,
                                            key,
                                            e.target.innerText
                                        )
                                    }
                                >
                                    {value}
                                </td>
                                
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Table;
