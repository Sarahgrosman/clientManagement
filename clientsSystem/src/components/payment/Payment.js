
import {
    PayPalButtons,
    PayPalHostedField,
    PayPalScriptProvider,
  } from "@paypal/react-paypal-js";
  import React, { useEffect, useState } from "react";
  
  import { useNavigate } from "react-router";
  import axios from "axios";
  
  const OrderCheckout = ({params,orderProducts}) => {
    
  
    const [done, setDone] = useState(false);
    const [payment_method, setPayment] = useState("none");
    const [total, setTotal] = useState(0.0);
  
    const navigate = useNavigate();
  
    const CLIENT_ID = "ASd99jD5qtH5eKJQ7jAQDLTutg4CMm8cJzeGdE0wiZsACxzFM-Wtr9HfJe_eEY02MX_Jx6RIxkihPq7y"
    useEffect(() => {
      if (done) {
        setTotal(orderProducts.reduce((a,b)=>a.quantity+b.quantity))
  
        try{
        const {data} = axios.post('http://localhost:5000/payment',{params,payment_method})

        console.log(data);
        }
        catch(err){
          console.log(err)
        }
      }  
    }, [done])
  
   
  
   
    return (
      <>
       <button
              className="py-2 my-2 border-0 col-12 rounded bg-info fst-italic fw-bolder h5"
              style={{ height: "3.51rem", letterSpacing: " 2px" }}
              onClick={() => {
               setPayment("cash");
                setDone(true);
              }}
            >
              לתשלום במזומן
            </button>
            <PayPalScriptProvider
              options={{ "client-id": CLIENT_ID, currency: "USD" }}
            >
              <PayPalButtons
                style={{ layout: "vertical" }}
                fundingSource={"paypal"}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: total,
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then(() => {
                    
                   setPayment("paypal");
                    setDone(true);
                    console.log(`Transaction completed `);
                    
                  });
                }}
              />
              <PayPalButtons
                style={{ layout: "vertical" }}
                fundingSource={"card"}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: total,
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then(() => {
                    setPayment("credit");
                    setDone(true);
                    console.log(`Transaction completed `);
                    
                  });
                }}
              />
            </PayPalScriptProvider>
            </>  
    );
  };
  
  export default OrderCheckout;