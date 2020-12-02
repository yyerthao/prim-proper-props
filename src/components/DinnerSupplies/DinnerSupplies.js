import React, { Component } from 'react';

class DinnerSupplies extends Component{
    render(){
        return(
        <div>
        <h2>Dinner Supplies</h2>
        <div>
          Spoons: {this.props.count.length * 2}
        </div>
        <div>
          Forks: {this.props.count.length * 2}
        </div>
        <div>
          Knives: {this.props.count.length * 2}
        </div>
        </div>
        )
    }
}

export default DinnerSupplies;