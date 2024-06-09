import React from "react";
import data from "./stock_market_data.json";

const Table = () => {
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(data[0]).map((key) => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {Object.values(item).map((value, idx) => (
                            <td key={idx}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
