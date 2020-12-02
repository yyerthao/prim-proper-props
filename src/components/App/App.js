import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GuestList from '../GuestList/GuestList';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';

class App extends Component {
  state = {
    guestList: [],
    newGuest: {
      name: '',
      kidsMeal: 'no',
    },
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newGuest: {
        ...this.state.newGuest,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.newGuest.name) {
      this.setState({
        guestList: [...this.state.guestList, this.state.newGuest],
        newGuest: {
          name: '',
          kidsMeal: 'no',
        },
      });
    } else {
      alert('The new guest needs a name!');
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <h2>Party Leader</h2>
        {this.state.guestList[0] && <h3>{this.state.guestList[0].name}</h3>}
        <h2>Add a new guest</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            value={this.state.newGuest.name}
            onChange={this.handleChangeFor('name')}
          />
          <div>
            Would this guest like a kid's meal?
            <div onChange={this.handleChangeFor('kidsMeal')}>
              <div>
                <label>
                  <input
                    type="radio"
                    value="yes"
                    name="kidsMeal"
                  />
                  Yes, this guest would like a Kid's Meal
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="no"
                    defaultChecked
                    name="kidsMeal"
                  />
                  No, this guest would not like a Kid's Meal
                </label>
              </div>
            </div>
          </div>
          <button type="submit">Add Guest</button>
        </form>
        <GuestList guests={this.state.guestList}/>
        <DinnerSupplies count={this.state.guestList}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
