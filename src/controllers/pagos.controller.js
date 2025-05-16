const mercadoPago = require("mercadopago");
require("dotenv").config();

mercadoPago.configure({
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

const crearPago = async (req, res) => {
    try{
        const { items } = req.body;

        const preference = {
            items: items,
            back_urls: {
                success: "http://localhost:4000/success",
                failure: "http://localhost:4000/failure",
                pending: "http://localhost:4000/pending",
            },
            auto_return: "approved",
        };

        const response = await mercadoPago.preferences.create(preference);
        return res.status(200).json({ init_point: response.body.init_point });
    } catch (error) {
        console.error("Error al crear el pago:", error);
        return res.status(500).json({ error: "Error al crear el pago" });
    }
}

module.exports = { crearPago };