import { MercadoPagoConfig, Preference } from 'mercadopago';


const client = new MercadoPagoConfig({ accessToken: 'TEST-1720113323805281-071117-1267e2cae88422376efe7c4e3a61c6ee-396947688' });    

 

export const paymentcontrollers = async (req, res) => {
  const preference = new Preference(client);

  console.log(req.body)

const result = await preference.create({
  body: {
    items: [
      {
        title: req.body.titulo,
        quantity: 1,
        unit_price: 10,
        currency_id: "ARS",
      },
    ],
       back_urls: {
        success: "http://localhost:3000/success",
        failure: "http://localhost:3000/",
        pending: "http://localhost:3000/pending"
    },
    notification_url:"https://c5af-186-137-158-156.ngrok-free.app/webhook"
  }
})

    
console.log(result)
res.send(result)

}


export const recimewebhook = (rep, res)=>{
  console.log(rep.query);
  res.send("webhook");

}

// console.log(allProducts)