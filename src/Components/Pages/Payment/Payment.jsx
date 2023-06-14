import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useClasses from "../../../Hooks/useClasses";


// TODO: provide publishable Key
const stripePromise = loadStripe('pk_test_51NItS0A3xhKAKStzw0wdaAkm04cPW0A1epZ0sVHLGNaZ58vkTF297bBiqdr6hHOBeL9mWJDOyxpf0CNho0Pry3fV00khD7s74h');
const Payment = () => {
    const [cart] = useClasses();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            
            <h2 className="text-3xl"> Please Complete Your Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;