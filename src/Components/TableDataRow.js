import React, { Component } from 'react';

class TableDataRow extends Component {
    editClick = () => {
        this.props.editFunClick()
        this.props.userstatus()
        console.log(this.props.userstatus());      
        this.props.changeEdit()
    }
    deleteButtonClick = (id) =>{
            this.props.deleteButtonClick(id);          
    }
    render() {  
        //props.editFunClick
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{this.props.level}</td>
                <td>
                    <button onClick={() => this.editClick()}  className="btn btn-warning"><i className="fa fa-pencil"></i></button>
                    <div className="btn btn-danger" onClick={(id)=>this.deleteButtonClick(this.props.stt)}><i className="fa fa-close"></i></div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;