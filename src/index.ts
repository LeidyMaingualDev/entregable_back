let nombres: string[] = [];
let contraseñas: string[] = [];
let cuenta: number = 0;
let carrito: string[] = [];
let eliminadosP: string[] = [];
let registroVenta: string[] = [];

function registrar(): void {
    let nuevoUsuario: string | null = prompt("Ingresa tu nombre:");
    let nuevaPass: string | null = prompt("Ingresa una contraseña:");

    if (nuevoUsuario !== null && nuevaPass !== null) {
        nombres.push(nuevoUsuario); 
        contraseñas.push(nuevaPass);
        alert("Registro exitoso, ahora inicia sesión 👍");
    }
}

function login(): void {
    let usuario: string | null = prompt("Ingresa tu nombre de usuario:");
    let pass: string | null = prompt("Ingresa tu contraseña:");

    if (usuario !== null && pass !== null) {
        let index: number = nombres.indexOf(usuario); // Buscar el índice (la posición) de un elemento dentro de un array.

        // -1 indica que NO halló el dato. Condición: Si el usuario existe Y su contraseña coincide (en la misma posición)
        if (index !== -1 && contraseñas[index] === pass) {
            alert("Bienvenido " + usuario + " 🎉");
            comprar(usuario);
        } else {
            alert("Usuario o contraseña incorrecta 😓");
        }
    }
}

function comprar(usuario: string): void {
    // PRODUCTOS
    let seguirComprando: boolean = true;

    while (seguirComprando) {
        let productos: string | null = prompt("Nuestros productos:\n1. Maquillaje 20000\n2. Cosméticos 30000\n3. Aseo Personal 20000\nElige una opción (1, 2 o 3)");

        if (productos === null) continue;
        productos = productos.trim().toLowerCase();

        if (productos === "1") {
            carrito.push("Maquillaje");
            cuenta += 20000;
        } else if (productos === "2") {
            carrito.push("Cosméticos");
            cuenta += 30000;
        } else if (productos === "3") {
            carrito.push("Aseo Personal");
            cuenta += 20000;
        } else {
            alert("La opción que ingresaste no es válida 😶");
            continue; // vuelve a preguntar
        }

        alert("Llevas en tu carrito: " + carrito.join(", ") + "\nTu cuenta es: " + cuenta);
        let eliminarProduct: string | null = prompt("¿Deseas eliminar algún producto?\n1. No\n2. Sí");

        if (eliminarProduct === "2") {
            let eliminar: string | null = prompt("¿Qué producto deseas eliminar?\n1. Maquillaje 20000\n2. Cosméticos 30000\n3. Aseo Personal 20000\nElige una opción (1, 2 o 3)");

            if (eliminar !== null) {
                eliminar = eliminar.trim().toLowerCase();

                if (eliminar === "1") {
                    let i: number = carrito.indexOf("Maquillaje");//Busca en qué posición está "Maquillaje" en el carrito
                    if (i !== -1) {//si I en diferente de -1 indica que si encontro el elemeto en el carrito
                        carrito.splice(i, 1);////array.splice(posición, cuántosElementosEliminar);
                        cuenta -= 20000;
                        eliminadosP.push("Maquillaje");
                        alert("Eliminaste: " + eliminadosP.join(", "));
                    }
                } else if (eliminar === "2") {
                    let i: number = carrito.indexOf("Cosméticos");//Busca en qué posición está "Cosméticos" en el carrito
                    if (i !== -1) {//si I en diferente de -1 indica que si encontro el elemeto en el carrito
                        carrito.splice(i, 1);//array.splice(posición, cuántosElementosEliminar);
                        cuenta -= 30000;
                        eliminadosP.push("Cosméticos");
                        alert("Eliminaste: " + eliminadosP.join(", "));
                    }
                } else if (eliminar === "3") {
                    let i: number = carrito.indexOf("Aseo Personal");//Busca en qué posición está "Aseo Personal" en el carrito
                    if (i !== -1) {//si I en diferente de -1 indica que si encontro el elemeto en el carrito
                        carrito.splice(i, 1);////array.splice(posición, cuántosElementosEliminar);
                        cuenta -= 20000;
                        eliminadosP.push("Aseo Personal");
                        alert("Eliminaste: " + eliminadosP.join(", "));
                    }
                }
            }
        }

        let masProd: string | null = prompt("¿Deseas agregar más productos?\n1. Sí\n2. Continuar al pago");

        if (masProd !== "1") {
            seguirComprando = false;
            let venta: string = "Usuario: " + usuario + " \nProductos: " + carrito.join(", ") + " \nTotal pagado: " + cuenta + "\n Productos cancelados: " + eliminadosP;
            registroVenta.push(venta);
        }
    }

    alert("Gracias por tu compra 🛍️.\n Tu carrito final fue: " + carrito.join(", ") + "\nValor: " + cuenta);
    alert("La venta realizada fue:\n" + registroVenta);
}

let opcion: string | null = prompt("Hola 👋\n¿Qué deseas hacer?\n1. Registrarte\n2. Iniciar Sesión");

if (opcion === "1") {
    // REGISTRO
    registrar();

    // INICIO DE SESIÓN
    login();

} else if (opcion === "2") {

    if (nombres.length === 0) {
        alert("No hay usuarios registrados todavía 🙁");
    } else {
        let usuario: string | null = prompt("Ingresa tu nombre de usuario:");
        let pass: string | null = prompt("Ingresa tu contraseña:");
        if (usuario !== null && pass !== null) {
            let index: number = nombres.indexOf(usuario);

            if (index !== -1 && contraseñas[index] === pass) {
                alert("Bienvenido " + usuario + " 🎉");
            } else {
                alert("Usuario o contraseña incorrecta 😓");
            }
        }
    }

} else {
    alert("Opción no válida 😕");
}


