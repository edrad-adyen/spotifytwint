async function initCheckout() {
    const response = await fetch('/api/sessions', { method: 'POST' });
    const sessionData = await response.json();

    const configuration = {
        environment: 'test',
        clientKey: 'YOUR_CLIENT_KEY', 
        session: {
            id: sessionData.id,
            sessionData: sessionData.sessionData
        },
        // Twint specific configuration if needed
        paymentMethodsConfiguration: {
            twint: {
                // You can add specific Twint logic here later
            }
        },
        onPaymentCompleted: (result) => {
            console.log("Success:", result);
            window.location.href = "/success.html";
        },
        onError: (error) => {
            console.error("Error:", error);
        }
    };

    // Initialize using the local npm script
    const checkout = await AdyenCheckout(configuration);
    checkout.create('dropin').mount('#dropin-container');
}

initCheckout();