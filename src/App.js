import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const APIkey = "4108158e1a1ac40620f94bfd83f37504";

class App extends React.Component{
    state = {
        list: [],
        error: null,
    }

    handleSubmit = async (values) => {
        const { city } = values;
        const lang = /^[a-z-]+$/i.test(city) ? "en" : "ru";
        const apiURL = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=metric&lang=${lang}`);
        const data = await apiURL.json();
        console.log(data);

        if (data.cod === "200") {
            this.setState({
                list: data.list.filter(({ dt }) => new Date(dt * 1000).getHours() === 12),
                error: null
            });
        } else {
            this.setState({
                list: [],
                error: "Такого города не существует"
            })
        }
    }

    render() {
        return(
            <div>
                <Info />
                <Form onSubmit={this.handleSubmit} />
                {this.state.error && <p className="error">{this.state.error}</p>}
                {this.state.list.map(data => (
                    <Weather key={data.dt} data = {data} />
                ))}
            </div>
        );
    }
}

export default App;