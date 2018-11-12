import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import TableData from './Components/TableData';
import Add from './Components/Add';
import Datauser from "./Components/Data.json"
import EditUser from './Components/EditUser';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Datauser,
      searchText: '',
      editUserStatus: false,
      userObject: {}
    }
  }
  componentWillMount(){
    //kiemtra
    if(localStorage.getItem('userData')===null){
      localStorage.setItem('userData',[]);
    }else{
      var temp =JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
     
    }
    
  }
  checkConnect = () => {
    alert("ket noi thanh cong"); //checkConnectProps={()=>this.checkConnect()}
  }
  getText = (dl) => { //get du lieu tu searchText
    this.setState({
      searchText: dl
    });
    console.log("du lieu nhan dc la: " + dl);

  }
  // getText2(dl) {
  //   this.setState({
  //     serachText: dl
  //   })
  //   console.log("du lieu getTextfunction la: " + dl);
  // }
  getNewUserData = (name, tel, Permission) => {
    // console.log("du lieu nhan dc " +name);
    // console.log(tel);
    // console.log(Permission);    
    var item = [];
    item.id = "";
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    var items = this.state.data;
    items.push(item);

    this.setState({
      data: items
    });
     //day vao du lieu
    localStorage.setItem('userData',JSON.stringify(items));
    console.log(items);
  }
  // Tenham = (test) =>{
  //   return(
  //     <div className="col-6">
  //     <div className="card">
  //         <img src="http://placehold.it/700x300" className="card-img-top"></img>
  //         <h3 className="card-title">{test.tieude}</h3>
  //         <button className="btn btn-primary">aa</button>
  //     </div>
  //                  </div>
  //   )
  // }
  editUser = (user) => {// get thong tin tu table de day ra form sua
    console.log("ket noi editeuser");
    console.log(user);
    this.setState({
      userObject: user
    });
    
    console.log("test object " + this.state.userObject.name);

  }
  getUserEditInfo=(info)=>{ //get thong tin trong form sua
    this.setState({
      userObject:info
    })
    this.state.data.forEach((value)=>{
      if(value.id===info.id){
        value.name=info.name;
        value.tel=info.tel;
        value.Permission=info.Permission;
      }
    })
     //day vao du lieu
     localStorage.setItem('userData',JSON.stringify(this.state.data));
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }
  hienthiformsua = () => {
    if (this.state.editUserStatus === true) {
      return (
        <EditUser change={() => this.changeEditUserStatus()}
          object={this.state.userObject}
          getUserEditInfo={(info)=>this.getUserEditInfo(info)}
        ></EditUser>
      )
    }
  }
  deleteuser = (id) =>{
      console.log(id);
      var tempData=this.state.data;//ko the dung this.state de thay doi gia tri, ma phai dung setSate
      tempData=tempData.filter(item=>item.id!==id);
      this.setState({
        data:tempData
      })
      // this.state.data.forEach((value,key)=> {
      //   if(value.id===id){
      //   // tempData.delete(key);
      //   }
      // });
       //day vao du lieu
       localStorage.setItem('userData',JSON.stringify(tempData));
 
  }

  render() {
    //  this.checkConnect();
 //  localStorage.setItem('userData',JSON.stringify(Datauser));
    //tao localstorage de luu du lieu



    var ketqua = [];
    const temp=this.state.data;
    temp.forEach((it) => {
      if (it.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1) {
        ketqua.push(it);
      }
      //  console.log(ketqua);
    })
     //day vao du lieu
   //  localStorage.setItem('userData',JSON.stringify(this.state.data));


    return (
      <div>
        {/* <this.Tenham tieude="content vd"></this.Tenham> */}
        <Header></Header>

        <div className="searchForm">
          <div className="container">
            <Search getProps={(dl) => this.getText(dl)}></Search>
            {/* <Search getProps={this.getText2.bind(this)}></Search> */}
            <hr></hr>
          </div>

          <div className="container">
            <div className="row">

              <TableData editFun={(user) => this.editUser(user)}
                datatest={ketqua}
                editUserStatu={()=>this.state.editUserStatus}
                changeEditUserStatu={() => this.changeEditUserStatus()}
                hienthiformsu={() => this.hienthiformsua()}
                deleteuser={(id)=>this.deleteuser(id)}
              ></TableData>

              <Add add={(name, tel, Permission) => this.getNewUserData(name, tel, Permission)}  ></Add>
              {this.hienthiformsua()}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
