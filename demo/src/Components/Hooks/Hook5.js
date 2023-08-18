import React from "react";
import { useParams,Link } from "react-router-dom";


const item=[
    {name:"Apple",price:200,qty:10},
    {name:"Mango",price:100,qty:30},
    {name:"Banana",price:100,qty:50},
    {name:"Orange",price:200,qty:40},
    {name:"Grapes",price:300,qty:60},
    {name:"Papaya",price:150,qty:70},
]

const HookFive=()=>{
    const {itemid} = useParams();
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>React Hooks useParams()</h2>
                    <p className="m-4">
                        <Link to="/hook5/0" className="btn btn-primary m-3">Apple</Link> 
                        <Link to="/hook5/1" className="btn btn-primary m-3">Mango</Link> 
                        <Link to="/hook5/2" className="btn btn-primary m-3">Banana</Link> 
                        <Link to="/hook5/3" className="btn btn-primary m-3">Orange</Link> 
                        <Link to="/hook5/4" className="btn btn-primary m-3">Grapes</Link> 
                        <Link to="/hook5/5" className="btn btn-primary m-3">Papaya</Link> 
                    </p>
                    <div className="text-start">
                        <h3 className="text-info">{item[itemid].name}</h3>
                        <p>Price -: {item[itemid].price}</p>
                        <p>Quantity -: {item[itemid].qty}</p>
                        <p>Total Price -: {item[itemid].qty*item[itemid].price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HookFive