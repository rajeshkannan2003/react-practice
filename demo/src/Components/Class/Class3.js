import React, {Component} from "react";


class Myclassthree extends Component{

    constructor(){
        super();
        this.state = {
            newbook:"",
            booklist:[]
        }
    }

    pickValue = (obj) => {
        this.setState({
            newbook:obj.target.value
        })
    }
    save = () => {
        this.setState({
            booklist: this.state.booklist.concat(this.state.newbook)

        })

    }
    render (){
        return(
            <div className="container mt-4">
                <div  className="row">
                    <div className="col-lg-6 offset-3">
                        <h3>state management with inputs & outputs</h3>
                        <p>
                            enter new book className
                            <input type="text" className="form-control " onChange={this.pickValue}></input>
                        </p>
                        <p className="text-center">
                            <button onClick={this.save} className="btn btn-primary">save book</button>

                        </p>

                        <h3>Totaal book : {this.state.booklist.length}</h3>
                        <p> your book list is :{this.state.newbook}</p>
                        {
                            this.state.booklist.map((name,index) =>{
                                return(
                                    <p key={index}>{name}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )

        
    }
    



}

export default Myclassthree;