import {
    PayPalScriptProvider,
    PayPalHostedFieldsProvider,
    PayPalHostedField,
    PayPalButtons,
    usePayPalHostedFields,
    usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
const CLIENT_ID = "ASd99jD5qtH5eKJQ7jAQDLTutg4CMm8cJzeGdE0wiZsACxzFM-Wtr9HfJe_eEY02MX_Jx6RIxkihPq7y"
const APP_SECRET =  "EF-dC_sQub3gyaOU1A_kXNYj29NHQxOhy-k5eNoWerIiz3bTg0RnaWgWD2Rj150WSFXNBo3Z7Vwd4dlo" 

const initialOptions = {
    "client-id": CLIENT_ID ,
    currency: "USD",
    intent: "capture",
    "data-client-token": "access_token$sandbox$x83653pkjvfrjbys$dd780b511b57b385138c05f09af520b4",
};

const SubmitPayment = () => {
   
    // Here declare the variable containing the hostedField instance
    const hostedFields = usePayPalHostedFields();

    const submitHandler = () => {
        if (!typeof hostedFields.submit !== "function") return; // validate that `submit()` exists before using it
        hostedFields
            .submit({
                // The full name as shown in the card and billing address
                cardholderName: "Root Cohen",
            })
            .then((order) => {
                console.log(order);
                fetch(
                    "/your-server-side-integration-endpoint/capture-payment-info"
                )
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        // Inside the data you can find all the information related to the payment
                    })
                    .catch((err) => {
                        // Handle any error
                        console.log(err);
                    });
            });
    };

    return <button onClick={submitHandler}>Pay</button>;
};



export default function Submit() {
   
    return(
   <PayPalScriptProvider deferLoading={true} options={{ initialOptions }} >
        <PayPalHostedFieldsProvider
                createOrder={() => {
                    // Here define the call to create and order
                    return fetch(
                        "/your-server-side-integration-endpoint/orders"
                    )
                        .then((response) => response.json())
                        .then((order) => order.id)
                        .catch((err) => {
                           console.log(err)
                            // Handle any error
                        });
                }}
            >
                <PayPalHostedField
                    id="card-number"
                    hostedFieldType="number"
                    options={{ selector: "#card-number" }}
                />
                <PayPalHostedField
                    id="cvv"
                    hostedFieldType="cvv"
                    options={{ selector: "#cvv" }}
                />
                <PayPalHostedField
                    id="expiration-date"
                    hostedFieldType="expirationDate"
                    options={{
                        selector: "#expiration-date",
                        placeholder: "MM/YY",
                    }}
                />
                <SubmitPayment />
            </PayPalHostedFieldsProvider>
        </PayPalScriptProvider>
    );
}