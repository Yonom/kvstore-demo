import React, { Component } from 'react';

class Database extends Component {
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