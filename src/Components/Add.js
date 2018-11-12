import React, { Component } from 'react';
class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai: false,
            id: "",
            name: "",
            tel: "",
            Permission: ""
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
        //package thanh 1 item
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.Permission = this.state.Permission;
        // console.log(item);

    }
    hienthiNut = () => {
        if (this.state.trangthai === true) {
            return (
                <div className="btn btn-block btn-outline-info" onClick={() => this.thaydoitrangThai()}>Dong lai</div>
            )
        } else {
            return (
                <div className="btn btn-block btn-outline-info" onClick={() => this.thaydoitrangThai()}>Them moi</div>
            )
        }
    }
    hienthiForm = () => {
        if (this.state.trangthai === true) {
            return (
                <div className="card border-primary">
                    <div className="card-header">Add </div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input onChange={(event) => { this.isChange(event) }} placeholder="Ten" type="text" name="name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => { this.isChange(event) }} placeholder="Sdt" type="text" name="tel" className="form-control" />
                        </div>
                        <div className="form-group">
                            <select onChange={(event) => { this.isChange(event) }} className="form-control" name="Permission">
                                <option>Chon quyen</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Mod</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={() => { this.props.add(this.state.name, this.state.tel, this.state.Permission) }}>Add</button>
                        </div>
                    </div>
                </div>

            )
        } else {
            return (
                <div></div>
            )
        }
    }
    thaydoitrangThai = () => {
        this.setState(
            {
                trangthai: !this.state.trangthai
            }
        )
    }
  npm
    render() {
        //  console.log(this.state);      
        return (
            <div className="">
                {/* //bo container de table ngang hang voi form */}
                {
                    this.hienthiNut()
                }
                {
                    this.hienthiForm()
                }
                {
                    
                }
            </div>
        );
    }
}

export default Add;