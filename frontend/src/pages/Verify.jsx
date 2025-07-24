import React, { useCallback, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Verify = () => {
    const { token, setCartItems, backendUrl } = useContext(ShopContext);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const verifyPayment = useCallback(async () => {
        const success = searchParams.get('success');
        const orderId = searchParams.get('orderId');

        if (!token || !orderId) {
            navigate('/');
            return;
        }

        try {
            // FIX 1: Removed the trailing space from the URL
            const response = await axios.post(`${backendUrl}/api/order/verifyStripe`, { success, orderId }, { headers: { token } });
            
            if (response.data.success) {
                setCartItems({});
                toast.success("Payment Verified!");
                navigate('/orders');
            } else {
                toast.error("Verification Failed.");
                navigate('/cart');
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred during verification.");
            navigate('/');
        }
    }, [token, searchParams, backendUrl, navigate, setCartItems]); // Dependencies for useCallback

    // FIX 2: useEffect now correctly calls the memoized function
    useEffect(() => {
        verifyPayment();
    }, [verifyPayment]);

    return (
        <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p>Verifying payment, please wait...</p>
        </div>
    );
};

export default Verify;