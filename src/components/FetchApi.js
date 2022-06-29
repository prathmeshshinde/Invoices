import { useState, useEffect } from "react";
import React from "react";

export const FetchApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rscdev.taxadda.com/api/invoice/list")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.invoices);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Fetching Invoices</h1>
      <div>
        <div className="invoice">
          {data?.map((item) => (
            <div>
              <div className="in-card">
                <div className="top-nav">
                  <p className="status">Status: {item.status} </p>
                  <p className="billDate">
                    Bill Date: {item.billDate.toLocaleString("en-GB")}
                  </p>
                </div>
                <hr></hr>
                <div className="top-name">
                  <p className="name">Name: {item.name}</p>
                  <p className="dueDate">Due Date: {item.dueDate}</p>
                </div>
                <hr></hr>
                <div className="table-card">
                  <table>
                    <tbody>
                      <tr className="heading">
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Product</th>
                        <th>Total</th>
                      </tr>

                      {item.lineItem.map((list) => (
                        <tr>
                          <td>{list?.quantity}</td>
                          <td>{list?.price}</td>
                          <td> {list?.productName}</td>
                          <td>{list?.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="note">
                  <p>Notes: {item.notes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
