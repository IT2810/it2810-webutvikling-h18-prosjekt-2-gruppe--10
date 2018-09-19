import React, { Component } from "react";
import CategoryMenu from './CategoryMenu';
import "./App.css";
import TabMenu from "./TabMenu.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCategory: "Animal",
      textCategory: "inspo",
      soundCategory: "animal",
      showMobileMenu: false,
      tabIndex: 0,
      text: {
        inspo: {},
        romance: {},
        science: {}
      },
      image: {
        Animal: {},
        Food: {},
        Transport: {}
      }
    };
  }

  // Henter inn bildet og legger det i en lagret state
  fetchImage = (category, index) => {
    fetch(`SVG/${category}/${index}.svg`)
      .then(response => response.text())
      .then(text => {
        let image = this.state.image;
        image[category][index] = text;
        this.setState({
          image
        });
      });
  };

  // Sjekker om bildet er blitt lastet inn før, hvis ikke fetcher den bildet
  getImage = (category, index) => {
    if (!this.state.image[category][index]) {
      this.fetchImage(category, index);
      return false;
    }
    return this.state.image[category][index];
  };

  // Henter inn tekstfila og legger den i en lagret state
  fetchText = (category) => {
    fetch(`text/${category}.json`)
      .then(response => response.json())
      .then(json => {
        let text = this.state.text
        text[category] = json
        this.setState({
          text
        });
      });
  };

  // Sjekker om tekstfila har blitt hentet før, hvis ikke fetcher den fila
  getText = (category, index) => {
    if (!this.state.text[category][index]) {
      this.fetchText(category, index);
      return false;
    }
    return this.state.text[category][index];
  };

  // Brukes når en tab endres for å skifte index til hvilket medie som skal vises
  handleClick = tabIndex => {
    if (this.state.tabIndex !== tabIndex) {
      this.setState({
        tabIndex
      });
    }
  };

  // Brukes til endre aktiv kategori (this.state) når bruker klikker på annen kategori
  handleCategoryChange = (category, value) => {
    this.setState({
      [category]: value
    })
  }

  render() {
    // På load henter den korrekt bilde og tekst etter valgt kategori og tab
    const image = this.getImage(this.state.imageCategory, this.state.tabIndex);
    const text = this.getText(this.state.textCategory, this.state.tabIndex);

    return (
      <div className="App">
        <div className="App-header">
          <div className={this.state.showMobileMenu ? "mobileMenuButton open" : "mobileMenuButton"} onClick={() => this.setState({showMobileMenu: !this.state.showMobileMenu})}/>
          <h1 className="App-title"> Project 2 </h1>
        </div>
        {/* Komponent som henter inn medievalgene fra CategoryMenu */}
        <CategoryMenu showInMobile={this.state.showMobileMenu} onChangeFunc={this.handleCategoryChange}/>
        {/* Komponent som henter inn tabsene fra TabMenu */}
        <TabMenu handleClick={this.handleClick} activeTab={this.state.tabIndex}/>

        <div className="contentContainer">
          {/* Setter teksten til svg-filen rett inn i HTML-strukturen */}
          <div className="image"
            dangerouslySetInnerHTML={{ __html: image ? image : "Loading" }}
          />

          <div className="text">
            <p><i>{text.body}</i></p>
            <p><b>{text.author}</b></p>
          </div>

          <div className="sound">
            {/* På load henter den ut korrekt lydfil etter valgt kategori og tab */}
            <audio ref="audio_tag" src={`sound/${this.state.soundCategory}/${this.state.tabIndex}.mp3`} controls/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
