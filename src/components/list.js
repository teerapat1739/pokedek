import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedDek, removeSelected } from "../redux/actions/dek";


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
        this.onHover = this.onHover.bind(this);
        this.onLeave = this.onLeave.bind(this);
        this.onLeave = this.onLeave.bind(this);
    }
    onHover() {
        this.setState({ hover: true })
    }
    onLeave() {
        this.setState({ hover: false })
    }
    render() {
        const item = this.props.data
        const text = this.props.text
       console.log('item==>',item)
        return(
            <div 
                onMouseEnter={this.onHover}
                onMouseLeave={this.onLeave} 
                className="card" style={{backgroundColor: this.state.hover ? "green" : 'yellow', margin: '10px 10px 10px 10px'}}>
                    <div className="col-md-2">
                        <img src={item.imageUrl} className="" alt="..." />
                    </div>
                    <div className="card-body col-md-9">
                        <h5 className="card-title">{item.name}</h5>
                        hp:<div className="progress" style={{marginBottom: '10px' }}> 
                            <div className="progress-bar bg-success" role="progressbar" style={{width: item.hp > 100? '100%' : item.hp+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        damage:
                        <div className="progress" style={{marginBottom: '10px' }}>
                            <div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        weak:
                        <div className="progress" style={{marginBottom: '10px' }}> 
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        {text === 'Add' && this.state.hover ? <button style={{ backgroundColor: 'pink'}} onClick={() =>  this.props.selectedDek(item)} >{text}</button> : null}
                        {text === 'Remove' && this.state.hover ? <button style={{ backgroundColor: 'pink'}} onClick={() =>  this.props.removeSelected(item)} >{text}</button> : null}

                </div>
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectedDek: (data) => dispatch(selectedDek(data)),
    removeSelected: (data) => dispatch(removeSelected(data))
});
export default connect(null, mapDispatchToProps)(List)