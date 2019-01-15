import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Modal from "./containers/modal";
import { connect } from "react-redux";
import { unSelectedDek } from "./redux/actions/dek";
import List from "./components/list";

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {
  state = {
    dekData: [],
    getData: false
  }
  async componentWillMount() {
    try {
      const res = await axios.get('http://localhost:3030/api/cards')
      this.setState({ dekData: res.data.cards, getData: true })
      console.log(res.data.cards);
      this.props.unSelectedDek(res.data.cards)
      this.state.dekData.map(i => console.log(i))
    } catch (error) {
      
    }
  }
  render() {
    const { selectedDekData } = this.props.dek
    const { getData, dekData } = this.state
    const renderDek =() => <div>
            {selectedDekData === undefined 
                            ? 'Loading...' 
                            : selectedDekData.map(i => 
                                <div key={i.id}>
                                    <List data={i} text={'Remove'}/>
                                </div>
                                )}
        </div>
    function waitData() {
      if(getData) {
        return <Modal data={dekData}/>
      } else {
        return <div>W8data</div>
      }
    }
    return (
      <div className="App">
        {renderDek()}
        {waitData()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.dek)
  return {
      dek: state.dek
  }
}

const mapDispatchToProps = (dispatch) => ({
  unSelectedDek: (data) => dispatch(unSelectedDek(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
