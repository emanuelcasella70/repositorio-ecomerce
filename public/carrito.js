const contenedorProducts = document.querySelector(".conteiner-dvalert-card");
const estructuraProducts = document.querySelector(".dvAlert");

///PORDUCTOS DEL BODY 

const productsBody = document.querySelector(".container-tips");

const contadorPoducts = document.querySelector(".contadorproducts");

const totalApagar = document.querySelector("#total");




// if(contadorPoducts.textContent == 0 ){
//    contadorPoducts.classList.add("mm")  
// }




let allProducts = []

console.log(contadorPoducts)

productsBody.addEventListener("click", e =>{
   if(contadorPoducts.textContent >= 0){
    contadorPoducts.classList.remove("mm")  
}else{
  contadorPoducts.classList.add("mm")
}


  if(e.target.classList.contains("slider__link")){
    const product = e.target.parentElement  

     const infoProducts = {
       cantidad : 1,
       img : product.querySelector("img").textContent,
       titulo : product.querySelector("h2").textContent,
       precio : product.querySelector("p").textContent
     }
     

     const exits = allProducts.some(product => product.titulo === infoProducts.titulo)
     
     if(exits){
        const products = allProducts.map(product =>{
          if(product.titulo === infoProducts.titulo){
             product.cantidad++
             return product
          }else {
            return product
          }
        }) 
        allProducts = [...products]
     }else {
       allProducts = [...allProducts, infoProducts]
     }
     showProducts();
     console.log(allProducts)

    }

})

contenedorProducts.addEventListener("click", e =>{{
  if(e.target.classList.contains("cio")){
    const product = e.target.parentElement.parentElement
    const title = product.querySelector("p").textContent;
    
    console.log(title);
    
    allProducts = allProducts.filter( e => 
      e.titulo !== title);
    }

    showProducts()  

    if(contadorPoducts.textContent >= 0){
      contadorPoducts.classList.add("mm")
    }

    

  
}})

/// FUNCTION PARA MOSTRAR HTML 

const buy = document.querySelector("#toll")
const small = document.querySelector("#tull")

const showProducts = () =>{
  /// limpiar carrito 
  


  buy.classList.remove("mm")
  contenedorProducts.innerHTML = "";
  
  if(allProducts.length == 0){
    contenedorProducts.innerHTML = `<p class="carrito-alert">Carrito Vacio</p> ` 
    buy.classList.add("mm")
    }

let total = 0;
let totalofproducts = 0;
const botonpagar = document.getElementById("pay")

///
allProducts.forEach(product =>{
    const conteinerProducts = document.createElement("div");
    conteinerProducts.classList.add("dvAlert");
    
    conteinerProducts.innerHTML = `
<div class="conteiner-img-product-card"><img src="./fots/reloj-venta.jpg"alt=""></div>
<div class="container--text--price--">
<p class="parrafo">${product.titulo}</p>
<div>
<p>${product.precio}</p>
<p>Cantidad : ${product.cantidad}</p>
</div>
</div>
<div><i class="fas fa-times-circle cio"id="delate"></i></div>
<div id="wallet_container"></div> 

    `
    
    contenedorProducts.append(conteinerProducts)
    
    totalofproducts = totalofproducts + parseInt(product.cantidad * product.precio.slice(1));
    
    total = total + product.cantidad;
    
    console.log(totalofproducts)

    
  })




contadorPoducts.textContent = `${total}`
totalApagar.textContent = `$${totalofproducts}`


const orderData = {
  title: product.titulo,
  quantity: product.precio,
  unit_price: totalofproducts,
  
}



botonpagar.addEventListener("click", async ()=>{
   const response = await fetch("/create-order",{
      method: "POST",
      headers:{
         "Content-Type":"application/json",
      },
      body : JSON.stringify(orderData)
    })
    const data = await response.json()
    console.log(data.init_point)
    

    // window.location.href = data.init_point;

    // data.items.unit_price = 4

})


};

console.log(allProducts)



// MERCADO PAGO







