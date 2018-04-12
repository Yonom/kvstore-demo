import React, { Component } from 'react';

class Selection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            value: '',
            function: 'getItem'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.handleCloseAlert(event);
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        var res = localStorage[this.state.function](this.state.key, this.state.value);
        if (this.state.function === "getItem")
            this.setState({
                result: res
            });
        else
            this.setState({
                success: true
            });

        this.props.handleUpdate();
        event.preventDefault();
    }

    handleCloseAlert(event) {
        this.setState({
            success: false,
            result: ''
        });
    }

    render() {
        var returnValue = '';
        var parameters = ['key']
        if (this.state.function === "setItem")
            parameters = ['key', 'value'];
        else if (this.state.function === "clear")
            parameters = [];
        else if (this.state.function === "getItem")
            returnValue = 'var value = '

        var paramObjs = parameters.map(p => {
            return (
                <div key="p" className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div style={{ width: '10ch' }} className="input-group-text">{p}</div>
                        </div>
                        <input
                            name={p}
                            type="text"
                            className="form-control"
                            value={this.state[p]}
                            onChange={this.handleInputChange} />
                    </div>
                </div>
            );
        });

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div style={{ width: '10ch' }} className="input-group-text">funktion</div>
                        </div>
                        <select
                            className="custom-select"
                            name="function"
                            value={this.state.function}
                            onChange={this.handleInputChange}>
                            <option value="getItem">getItem</option>
                            <option value="setItem">setItem</option>
                            <option value="removeItem">removeItem</option>
                            <option value="clear">clear</option>
                        </select>
                    </div>

                    <small className="form-text text-muted">{returnValue}localStorage.{this.state.function}({parameters.join(', ')});</small >
                </div>

                {paramObjs.length > 0 && <label>Parameter:</label>}
                {paramObjs}


                <div className="form-group row">
                    <div className="col-1">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div className="col-1">
                        {this.state.success &&
                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>}
                    </div>
                </div>

                {this.state.result &&
                    <div className="alert alert-success" role="alert">
                        <button type="button" className="close" onClick={this.handleCloseAlert}>
                            <span>&times;</span>
                        </button>
                        <h4 className="alert-heading">{this.state.result ? "Ergebnis:" : "Fertig!"}</h4>
                        {this.state.result || "Die Funktion wurde erfolgreich ausgeführt."}
                    </div>
                }
            </form>
        );
    }
}

export default Selection;