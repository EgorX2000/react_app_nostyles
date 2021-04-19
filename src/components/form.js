import React from "react";

class Form extends React.Component {
    state = {
        city: "",
    }

    handleChange = (e) => {
        this.setState({ city: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({ city: this.state.city });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="city"
                    value={this.state.city}
                    placeholder="Город"
                    onChange={this.handleChange}
                />
                <button type="submit" disabled={this.state.city === ""}>Найти</button>
            </form>
        );
    }
}

export default Form;