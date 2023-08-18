import React, { useState } from "react";

const HookThree = () => {
  const [itemlist, updateItem] = useState([
    { name: "Desktop", price: 25000, qty: 5 },
    { name: "Laptop", price: 35000, qty: 10 },
    { name: "Printer", price: 5000, qty: 15 },
  ]);
  const [itemname, pickItem] = useState("");
  const [itemprice, pickPrice] = useState("");
  const [itemqty, pickQty] = useState("");
  const [msg, updateMessage] = useState("");

  const save = () => {
    var newitem = { name: itemname, price: itemprice, qty: itemqty };
    updateItem((itemlist) => [...itemlist, newitem]);
    updateMessage(itemname + "Added Successfully...");

    // clear textbox
    pickItem("");
    pickPrice("");
    pickQty("");
  };

  const deleteitem = (index) => {
    var name = itemlist[index].name;
    itemlist.splice(index, 1);
    updateItem((itemlist) => [...itemlist]);
    updateMessage(name + " " + "Deleted Successfully...");
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="text-center">
            useState() with Multidimensional Array
          </h3>
          <div className="m-3 text-center">
            <input
              type="text"
              className="m-2"
              placeholder="Name"
              onChange={(obj) => pickItem(obj.target.value)}
              value={itemname}
            />

            <input
              type="number"
              className="m-2"
              placeholder="Price"
              onChange={(obj) => pickPrice(obj.target.value)}
              value={itemprice}
            />

            <input
              type="number"
              className="m-2"
              placeholder="Quantity"
              onChange={(obj) => pickQty(obj.target.value)}
              value={itemqty}
            />

            <button className="btn btn-primary m-3" onClick={save}>
              Save Items
            </button>
          </div>
          <p className="text-center text-danger mt-3"> {msg} </p>
          <table className="table table-bordered">
            <thead>
              <tr className="text-center">
                <th> Item Index </th>
                <th> Item Name </th>
                <th> Price </th>
                <th> Quantity </th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {itemlist.map((iteminfo, index) => {
                return (
                  <tr key={index}>
                    <td> {index + 1} </td>
                    <td> {iteminfo.name} </td>
                    <td> {iteminfo.price} </td>
                    <td> {iteminfo.qty} </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={deleteitem.bind(this, index)}
                      >
                        Delete
                      </button>
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
};

export default HookThree