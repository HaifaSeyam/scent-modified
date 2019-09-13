const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = function (app) {

    app.post("/api/stripe/checkout", (req, res) => {
        const stripeToken = req.body.stripeToken;

        stripe.customers.create(
            {
                source: stripeToken
            },
            function(err, customer) {
                console.log(err);
                console.log(customer);
                if (err) {
                    res.send({
                        success: false,
                        message: err
                    });
                } else {
                    const { id } = customer;
                    stripe.subscriptions.create(
                        {
                        customer: id,
                        items: [{ plan: "plan_F4B2SnT7Re69dj" }],
                        }, function(err, subscription) {
                            console.log(err);
                            console.log(subscription);
                            if (err) {
                                res.send({
                                    success: false,
                                    message: err
                                });
                            } else {
                                res.send({
                                    success: true,
                                    message: "Done!"
                                });
                            }
                        });
                    
                }
            }
            );

    });

}