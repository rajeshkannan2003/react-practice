import React,{Component} from "react";
class Myclasswork extends Component{
    constructor() {
        super();
        this.state = {
            citylist:["mumbai" , "bangalore" , "patna " ,"delhi" ,"kolkata" , "chennai"],
            booklist :["java" , "python" , "c++", "php" , "html","css"],
            company:["flipkart","amazon","hcl","dell","tcs","zoho"],
            items:["mobile","laptop","headphone","smartwatch"]
        }
    }
    render(){
        return(
            <div className="container mt-5">
                <div className="rpow">
                    <div className="col-lg-12 text-center">
                        <h3>on spot assignment</h3>
                       
                    </div>
                    <div className="col-lg-3 border mt-5 p-1">
                        <h3>city list</h3>
                        {
                            this.state.citylist.map( (name,index)=> {
                                return(
                                    <p key={index}>{index+1},{name}</p>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
        
}
