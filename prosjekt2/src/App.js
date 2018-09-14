import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
    super(props);
    this.state = {
      imageCategory: "Animal",
      textCategory: "haiku",
      tabIndex: 0,
      text: false,
      image: {
          "Animal": {},
          "Food": {},
          "Transport": {},
        }
      }
    }

    componentDidMount = () => {}

    fetchImage = (folder, filename) => {
        fetch(`SVG/${folder}/${filename}.svg`)
        .then(response => response.text())
        .then(text => {
          let image = this.state.image
          image[folder][filename] = text
          this.setState({
            image
          })
        })
    }

    getImage = (category, index) => {
      if (!this.state.image[category][index]) {
        this.fetchImage(category, index)
        return false
      }
      return this.state.image[category][index]
    }

    handleClick = tabIndex => {
      if (this.state.tabIndex !== tabIndex) {
        this.setState({
          tabIndex
        })
      }
    }

    parseSvgText = (text) => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(text, "image/svg+xml");
      return doc;
    }

    render() {
        const image = this.getImage(this.state.imageCategory, this.state.tabIndex)
        let svggg = "Bildet kommer her"
        if (image) {
          svggg = this.parseSvgText(image)
        }
        console.log(svggg)
        return (
            <div className="App">
            <div className="C1">
                <header className="App-header">
                    <h1 className="App-title"> Utstillingstittel </h1>
                </header>
                <button className="Tabs" onClick={() => this.handleClick(0)}>
                    <p> Galleri 1 </p>
                </button>
                <button className="Tabs" onClick={() => this.handleClick(1)}>
                    <p> Galleri 2</p>
                </button>
                <button className="Tabs" onClick={() => this.handleClick(2)}>
                    <p> Galleri 3 </p>
                </button>
                <button className="Tabs" onClick={() => this.handleClick(3)}>
                    <p> Galleri 4 </p>
                </button>
            </div>

                <div className="C2">
                    <div className="Svgs">
                        <span dangerouslySetInnerHTML={{__html: image}} />
                    </div>

                    <div className="Txts">
                        Tekst kommer her
                    </div>

                    <div className="Sounds">
                        Lyd kommer her
                    </div>

                    <div className="Categor">
                      <p> Bilder </p>
                      <form onChange={e => this.setState({imageCategory: e.target.value})}>
                        <input type="radio" name="gender" value="Animal" defaultChecked /> Animal<br/>
                        <input type="radio" name="gender" value="Food"/> Food<br/>
                        <input type="radio" name="gender" value="Transport"/> Transport<br/>
                      </form>

                      <p> Tekst </p>
                      <form onChange={e => this.setState({textCategory: e.target.value})}>
                        <input type="radio" name="gender" value="haiku" defaultChecked /> Haiku<br/>
                        <input type="radio" name="gender" value="poems"/> Poems<br/>
                        <input type="radio" name="gender" value="quotes"/> Quotes<br/>
                      </form>

                      <p> Lyd </p>
                      <form onChange={e => this.setState({soundCategory: e.target.value})}>
                        <input type="radio" name="gender" value="animal" defaultChecked /> Animal<br/>
                        <input type="radio" name="gender" value="horn"/> Horn<br/>
                        <input type="radio" name="gender" value="laughter"/> Laughter<br/>
                      </form>
                    </div>
                </div>

            </div>
        );
    }
}


export default App;
