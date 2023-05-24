import StripeCheckout from 'react-stripe-checkout';

const KEY ="sk_test_51N8H0PFJpJZF9UdfUuPWeviGq9iPDty6x6scfWHYHOBuPXyAal3ZuEUne9LckgPCfFmILBl3r1Y2L4VhS4poFyRp006Y99i8I2"


const Pay = () => {
    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    };
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
           <StripeCheckout
  name='sole haven'
  image=''
  billingAddress
  shippingAddress
  description='your total is $150'
  amount={1000}
  token={onToken}
  stripeKey={KEY} // Changed from Key to KEY
>
  <button
    style={{
      border: 'none',
      width: 120,
      borderRadius: 5,
      padding: 10,
      backgroundColor: 'black',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',
    }}
  >
    Pay
  </button>
</StripeCheckout>

            </div>
    );
};

export default Pay;
