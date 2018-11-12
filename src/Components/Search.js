import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temvalue: ''
        }
    }

    //this.props.checkConnectProps
    isChange = (event) => { //get gia tri tu form 
      //  console.log(event.target.value);
        this.setState({
            temvalue: event.target.value
        });
      this.props.getProps(this.state.temvalue);//live search
    }
    render() {
        return (
            <div className="row">
          
                <div className="col-4">
                    <div className="form-group">
                        <input type="text" onChange={(event) => this.isChange(event)} className="form-control" name="" />
                        <button onClick={(dl) => this.props.getProps(this.state.temvalue)} className="btn btn-primary" type="button">Search</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Search;