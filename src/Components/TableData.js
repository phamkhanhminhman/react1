import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    deleteButtonClick=(id)=>{
      // console.log(id); 
      this.props.deleteuser(id);
    }
    mappingdata = () => this.props.datatest.map((value, key) => (
       
       
        <TableDataRow 
            editFunClick={(user)=>this.props.editFun(value)}  name={value.name}
            tel={value.tel}
            level={value.Permission}
            stt={value.id}
            key={key}
            userstatus={()=>this.props.editUserStatu()}
            changeEdit={()=>this.props.changeEditUserStatu()}
            hienthiformedit={()=>this.props.hienthiformsu()}
            deleteButtonClick={(id)=>this.deleteButtonClick(id)}
        >
        </TableDataRow>
    ))
   
    //this.props.editFun
    render() {
        console.log(this.props.data);
        return (
            <div className="col">
                <table className="table table-striped">
                    <thead className="thead-default">
                        <tr>
                            <th>STT</th>
                            <th>Ten</th>
                            <th>Dien thoai</th>
                            <th>Level</th>
                            <th>Thao tac</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.mappingdata()
                        }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;