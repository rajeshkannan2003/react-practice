import React,{Component} from "react";
import Childclass from '../Class/Childclass';

class MyProperty extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>
                            React props,
                            Component Reuse
                            Component intraction
                            parent child component
                        </h3>
                    </div>
                </div>
                <div className="row mt-3">
                    <Childclass fullname="hari" photo="1.jpg" phone='12334566'/>
                    <Childclass fullname="gobi" photo="2.jpg" phone='5386383'/>
                    <Childclass fullname="raju" photo="3.jpg" phone='037635820'/>
                    <Childclass fullname="abi" photo="4.jpg" phone='033753522'/>
                </div>
            </div>
        )
    }
}

export default MyProperty;