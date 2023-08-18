import React,{Component} from "react";

class Childclass extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className="col-lg-3 mb-3 text-center">
            <div className="bg-light p-3 ">
                <h4>name={this.props.fullname}</h4>
                <img src={this.props.photo} className="ing-fluid"></img>
                <p>mobileno= {this.props.phone}</p>
            </div>
        </div>
        )
    }
}
export default Childclass;