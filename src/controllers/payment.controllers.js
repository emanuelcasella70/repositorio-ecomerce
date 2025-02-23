import { MercadoPagoConfig, Preference } from 'mercadopago';



export const paymentcontrollers = async (req, res) => {
    
    const client = new MercadoPagoConfig({ accessToken: 'APP_USR-4928203189775956-071122-f1c38d3beda0fc37f7f6b7e8e1397de7-1895818481' });    
    
    const preference = new Preference(client);

const result = await preference.create({
  body: {
    items: [
      {
        title: 'aaa',
        quantity: 1,
        unit_price: 10,
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