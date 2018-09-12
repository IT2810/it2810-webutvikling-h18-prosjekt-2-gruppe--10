import React, { Component } from 'react';
import './App.css';

class App extends Component {

    componentDidMount = () => {
        fetch("SVG/Animal/Elephant_6711.svg")
            .then(function(response) {
                return response.blob();
            })
            .then(function(myJson) {
                console.log(myJson);
            });
    }

    fetchImage = (folder, filename) => {
        fetch(`SVG/${folder}/${filename}`)
    }

    handleClick = tabIndex => {
      if (this.state.tabIndex !== tabIndex) {
        this.setState({
          tabIndex
        })
      }
    }

    render() {
        return (
            <div className="App">
                <div className="C1">
                    <header className="App-header">
                        <h1 className="App-title"> Utstillingstittel </h1>
                    </header>
                    <button className="Tabs" onClick={() => this.handleClick(0)}>
                        <p> Tab 1 </p>
                    </button>
                    <button className="Tabs" onClick={() => this.handleClick(1)}>
                        <p> Tab 2</p>
                    </button>
                    <button className="Tabs" onClick={() => this.handleClick(2)}>
                        <p> Tab 3 </p>
                    </button>
                    <button className="Tabs" onClick={() => this.handleClick(3)}>
                        <p> Tab 4 </p>
                    </button>
                </div>

                <div className="C2">
                    <div className="Svgs">
                        return fetchImage(Animal, Elephant_6711.svg);
                    </div>

                    <div className="Txts">
                        Tekst kommer her
                    </div>

                    <div className="Sounds">
                        Lyd kommer her
                    </div>

                    <div>
                      <p> Animal </p> <input type="checkbox" name="animal" value="Animal"/>
                      <p> Food </p> <input type="checkbox" name="animal" value="Food"/>
                      <p> Transport </p> <input type="checkbox" name="animal" value="Transport"/>

                      <p> Tekst </p> <input type="checkbox" name="animal" value="Tekst"/>
                      <p> Tekst </p> <input type="checkbox" name="animal" value="Tekst"/>
                      <p> Tekst </p> <input type="checkbox" name="animal" value="Tekst"/>

                      <p> Lyd </p> <input type="checkbox" name="animal" value="Lyd"/>
                      <p> Lyd </p> <input type="checkbox" name="animal" value="Lyd"/>
                      <p> Lyd </p> <input type="checkbox" name="animal" value="Lyd"/>
                    </div>
                </div>


            </div>
        );
    }
}



export default App;
