import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedDek, unSelectedDek } from "../redux/actions/dek";
import List from "../components/list";
import styled from "styled-components";

const ModalDiv = styled.div`
    width: 90% !important;
`

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dekData: '',
            text: ''
        };
    }

    componentDidMount () {
        console.log(this.props.data)
        const { unselectedDekData } = this.props.dek
        console.log(unselectedDekData)
        this.setState({ dekData: this.props.data })
    }
    filterSearch(event){
        // console.log(event.target.value)
        const key = event.target.value
        this.setState({ text: key })
    }
    render() {
        const data = this.state.dekData
        const { unselectedDekData } = this.props.dek
        const renderDek =(keyword) => <div>
            {unselectedDekData === undefined 
                            ? 'Loading...' 
                            : unselectedDekData.map(i => 
                                <div key={i.id}>
                                    { i.name.indexOf(keyword) !== -1 ? <List data={i} text={'Add'}/> : null}
                                    </div>
                                )}
        </div>
        function renderUnSelectedDek () {
            if (data !== undefined) {
                console.log('notun');
                return <div>
                        {data.length}
                    </div>
            } else {
                console.log('un');
                return <div>Loading...</div>
            }
        }   
        return(
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModalCenter" tabIndex="-1"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ backgroundColor: 'red', width: '1000px' }}>
                    <div className="modal-content">
                    <div className="modal-header">
                    <form>
                    <div className="form-group">
                        <input type="email" onChange={this.filterSearch.bind(this)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="search here" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* {renderUnSelectedDek()  } */}
                        {renderDek(this.state.text)}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
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
    selectedDek: (data) => dispatch(selectedDek(data)),
    unSelectedDek: (data) => dispatch(unSelectedDek(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal)