import React from "react";

import { useForm } from "react-hook-form";

export const Form = () => {
  //
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form
        className="form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
          fetch("https://rscdev.taxadda.com/api/invoice/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              name: data.name,
              dueDate: "12-mar-2022",
              grossAmount: "1000",
              billNo: "1",
              billDate: "12-mar-2022",
              lineItem: [
                {
                  productName: data.product,
                  quantity: data.quant,
                  price: data.price,
                  amount: data.amount,
                  gstRate: data.gstRate,
                },
              ],
              gstAmount: 50,
              netAmount: 1050,
              notes: data.notes,
              status: "due ",
            }),
          }).then((result) => {
            console.log("result", result);
          });
        })}
      >
        <div className="main-form">
          <div>
            <div className="table-form">
              <div>Name:</div>
              <div>
                <input {...register("name")} type="text" />
                <br />
              </div>
            </div>
            <div className="table-form">
              <div>Product:</div>
              <div>
                <input {...register("product")} type="text" />
                <br />
              </div>
            </div>
            <div className="table-form">
              <div>Quantity:</div>
              <div>
                <input {...register("quant")} type="text" />
                <br />
              </div>
            </div>
            <div className="table-form">
              <div>Price:</div>
              <div>
                <input {...register("price")} type="text" />
                <br />
              </div>
            </div>
            <div className="table-form">
              <div>Amount:</div>
              <div>
                <input {...register("amount")} type="text" />
                <br />
              </div>
            </div>
            <div className="table-form">
              <div>GST Rate:</div>
              <div>
                <input {...register("gstRate")} type="text" />
                <br />
              </div>
            </div>
            <div className="table-form">
              <div> Notes:</div>
              <div>
                <input {...register("notes")} type="text" />
                <br />
              </div>
            </div>
            <div>
              <input type="submit" /> <br />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
