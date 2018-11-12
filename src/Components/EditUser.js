import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.object.id,
            name:this.props.object.name,
            tel:this.props.object.tel,
            Permission:this.props.object.Permission,

        }
        
    }
    isChange=(event)=>{
        var name=event.target.name;
        var value=event.target.value;
        this.setState({
            [name]:value
        })
    }
    savebutton = () =>{// gui thong tin tu edituser len app.js va thay doi gia tri de hien thi form
            var info={};
            info.id=this.state.id;
            info.name=this.state.name;
            info.tel=this.state.tel;
            info.Permission=this.state.Permission;
            console.log("du lieu sua ");
            
            this.props.getUserEditInfo(info);
            this.props.change();

    }
    render() {
        return (
            <div className="card border-warning">
                <div className="card-header">Edit</div>
                <div className="card-body text-primary">
                    <div className="form-group">
                        <input defaultValue={this.props.object.name}  onChange={(event) => { this.isChange(event) }} placeholder="Ten" type="text" name="name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input  defaultValue={this.props.object.tel} onChange={(event) => { this.isChange(event) }} placeholder="Sdt" type="text" name="tel" className="form-control" />
                    </div>
                    <div className="form-group">
                        <select  defaultValue={this.props.object.Permission} onChange={(event) => { this.isChange(event) }} className="form-control" name="Permission">
                            <option>Chon quyen</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Mod</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" >Add</button>
                        <button className="btn btn-warning" onClick={() => this.savebutton()} >Save</button>
                    </div>
                </div>
           </div>
            
        );
    }
}
export default EditUser;