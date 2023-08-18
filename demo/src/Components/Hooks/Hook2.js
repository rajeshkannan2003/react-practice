
 import React,{useState} from "react";

const HookTwo=()=>{
    const [itemlist,updateItem] = useState(['Apple','Potato','Onion']);
    const [newItem,pickItem]=useState();

    const save=()=>{
        updateItem((itemlist) => [...itemlist,newItem]);//a=a+b;
        pickItem("");
    };
    const deleteItem = (index)=>{
        itemlist.splice(index,1);
        updateItem((itemlist)=>[...itemlist]);
    };

return(
<div className="container mt-4 text-center">
    <div className="row">
        <div className="col-lg-6 offset-3">
            <h3>useState(),[...]Spread Operator Example</h3>
            <p>
                Item Name:{""}
                <input type="text" onChange={(obj)=>pickItem(obj.target.value)}value={newItem} />
                <button className="btn btn-primary m-3" onClick={save}>Save Item</button>
            </p>
            <table className="table table-bordered">
                <thead>
                    <tr className="bg-light text-center">
                        <th>SI No</th>
                        <th>Item Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {itemlist.map((name,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{name}</td>
                            <td>
                            <button className="btn btn-danger btn-sm" onClick={deleteItem.bind(this,index)}>Delete</button>
                            </td>
                        </tr>
                    );
})}    
                </tbody>
            </table>
        </div>
    </div>
</div>
);
}
export default HookTwo