import React, { Component } from 'react';

class Database extends Component {
    constructor() {
        if (localStorage.length == 0) {
            localStorage.setItem("kunden/1/name", "Peter")
            localStorage.setItem("kunden/1/geburtsdatum", "1999-12-24")
            localStorage.setItem("bestellungen/45/besteller", 1)
            localStorage.setItem("bestellungen/45/besteller", [5, 3, 9])
            localStorage.setItem("artikel/5/name", "Zahnpasta")
            localStorage.setItem("artikel/5/preis", 2.99)
            localStorage.setItem("artikel/5/hersteller", "Meier AG")
            localStorage.setItem("artikel/3/name", "USB Stick")
            localStorage.setItem("artikel/3/preis", 15.4)
            localStorage.setItem("artikel/3/hersteller", "SanDisk Corporation")
        }
    }

    render() {
        let items = [];
        let keys = Object.keys(localStorage);

        for (let i = 0; i < localStorage.length; i++) {
            let key = keys[i];
            let value = localStorage.getItem(key);
            items.push(
                <tr key={i}>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>
            );
        }

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col" style={{width: '30%'}}>Key</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        );
    }
}

export default Database;