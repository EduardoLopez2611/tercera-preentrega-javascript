let usuario = prompt("ingrese su nombre y apellido");
if (usuario= usuario){
    alert(`Bienvenido a SportPage ` + usuario);
}else{
    alert(`Debe ingresar su nombre para continuar`);
    usuario = prompt("Ingrese su nombre y apellido");
};
let edad = parseFloat (prompt("Ingrese su edad"));
if (edad<18){
    alert(`debe ser mayor de edad para continuar`);
    edad = prompt("Ingrese su edad");
}else{
    alert("eres mayor de edad, puedes continuar ");
    const producto =[
        {id: 1, nombreProducto: "remeras", precio: 5000},
        {id: 2, nombreProducto: "zapatillas", precio: 12000},
        {id: 3, nombreProducto: "pantalones", precio: 8000},
        {id: 4, nombreProducto: "medias", precio: 1000},
        {id: 5, nombreProducto: "camisetas de futbol", precio: 7200},
        {id: 6, nombreProducto: "shorts", precio: 3000},
        {id: 7, nombreProducto: "bermudas", precio: 3700},
        {id: 8, nombreProducto: "pijamas", precio: 2000},
        ];
        //mi idea es usar el sessionStorage y el localStorage para cargar a los nuevos usuarios "email" y "password" y para el carrito.
        localStorage.setItem("producto", JSON.stringify(producto))

        let precio= parseInt(prompt("ingrese la cantidad de dinero mínimo a gastar."));
        let filtrados= producto.filter((item)=>item.precio > precio);
        let buscador=prompt("ingrese el producto que desea encontrar")
        let productos
        for (const item of producto) {
            if (item.nombreProducto===buscador) {
                productos=item
            }
        }
        if(productos){
            let mensaje=`
            ID:${productos.id}
            nombre:${productos.nombreProducto}
            $${productos.precio}
            `;
            alert(mensaje);
            filtrados.forEach((producto) => {
                let div = document.createElement("div");
                div.innerHTML=`
                <h2> PRODUCTOS QUE TAMBIEN TE PODRIAN INTERESAR</h2>
                <br></br>
                <h3>Id:${producto.id} </h3>
                <p>Nombre: ${producto.nombreProducto}</p>
                <b>$${producto.precio}</b>
                <br>
                <hr />
                `;
                document.body.append(div);
                
            });
            let formulario= document.getElementById("formulario")
            formulario.addEventListener("submit", (e) =>{
                e.preventDefault();
                let inputs= e.target.children;
                if(!inputs[0].value.includes("@")){
                    inputs[0].value="";
                }
                console.log(e)
            })
            
        }else{productos
            alert("El producto no se encuentra disponible o usó caracteres inválidos.")
    } 
}
