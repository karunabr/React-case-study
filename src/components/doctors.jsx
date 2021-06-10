import React, { Component } from "react";
import _ from "lodash";
import DoctorService from "../services/doctorService";
import {Link} from "react-router-dom";

class Doctors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortColumn:{path:"title",order:"asc"},
      search:"",
      doctorList: [],
    };
  }
  componentDidMount() {
    DoctorService.getAllDoctors().then((res) => {
      console.log("data: ", res.data);
      this.setState({ doctorList: res.data });
    });
    console.log("doctorDetails: "+ this.state.doctorList);
  }

  deleteDoctor=(id)=>{
    console.log("Delete doctor with id: " + id);
    const doctorList=this.state.doctorList.filter(
    (doctor)=>doctor.doctorId !==id
    );
    this.setState({ doctorList });
    DoctorService.deleteDoctor(id);
  
  };
  viewDoctor=()=>{
    let doctorList=[];
    DoctorService.getDoctorById(this.state.search).then((res)=>{
      console.log("**data: ", res.data);
      doctorList=res.data;
    });
    this.setState({ doctorList });
    console.log("**viewDoctor"+this.state.doctorList);
  };
    handleSort=(path)=>{
    console.log(path);
    this.setState({ sortColumn: { path, order: "asc"}});
  };

  onChange=(event)=>{
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  render() {
    const { search, sortColumn, doctorList }=this.state;
    var sorted=[];
    if(search){
      sorted=doctorList.filter((doctor)=>doctor.doctorId===search);
    }else{
      sorted=_.orderBy(
        this.state.doctorList,
        [sortColumn.path],
        [sortColumn.order]
      );
    }
    console.log(this.state.doctorList);
    console.log("Sorted..",sorted);
    return (
      <div>
        <h2 className="text-center">Doctors List</h2>
        <div className="w-75 mt-5 mx-auto">
         <div className="d-flex justify-content-between">
           <Link to="/doctor/add" className="btn btn-success btn-large mb-1">
             Add
           </Link>
           <form class="form-inline my-2 my-lg-0">
             <input
              classNAme="form-control ml-auto"
              type="search"
              placeholder="search by Id"
              aria-label="search"
              onChange={this.onChange}
             />
             <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={this.viewDoctor} 
             >
               Search
            </button> 
           </form>
         </div>
        </div>
        <div className="row">
          <table className="table table-stripped table-bordered">
            <thead>
              <tr>
      
                <th onClick={()=>this.handleSort("doctorName")}>Doctor Name</th>
                <th onClick={()=>this.handleSort("contactNumber")}>Contact Number</th>
                <th onClick={()=>this.handleSort("hoursOfAvailability")}>Hours Of Availability</th>
                <th onClick={()=>this.handleSort("specialization")}>Specialization</th>
                <th onClick={()=>this.handleSort("degree")}>Degree</th>
                <th onClick={()=>this.handleSort("yearsOfExperience")}>Years Of Experience</th>
                <th onClick={()=>this.handleSort("doctorFee")}>Doctor Fee</th>
                <th colSpan="2">Action</th>
             </tr>
            </thead>
            <tbody>
              {sorted.map((doctor) => (
                <tr key={doctor.doctorId}>
                  
                  <td>{doctor.doctorName}</td>
                  <td>{doctor.contactNumber}</td>
                  <td>{doctor.hoursOfAvailability}</td>
                  <td>{doctor.specialization}</td>
                  <td>{doctor.degree}</td>
                  <td>{doctor.yearsOfExperience}</td>
                  <td>{doctor.doctorFee}</td>
                  <td>
                    <Link to={'/doctor/update/${doctor.doctorId}'}>
                      <button className="btn btn-secondary">Update</button>
                    </Link>

                    <button
                     className="btn btn-danger ml-2"
                     onClick={()=> this.deleteDoctor(doctor.doctorId)}
                     > 
                       Delete
                     </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Doctors;