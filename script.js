// Inicialización del carrito y total
let cart = [];
let total = 0;

// Función para añadir productos al carrito
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

// Función para actualizar el contenido del carrito
function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems'); // Asegúrate de que el ID coincida con el HTML
    const totalPriceElement = document.getElementById('totalPrice');

    // Limpiar el carrito visual antes de actualizarlo
    cartItemsContainer.innerHTML = '';

    // Añadir cada producto al carrito
    cart.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.textContent = `${item.name} - $${item.price}`;

        // Crear botón de eliminar para cada producto
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFromCart(item);

        // Añadir el botón al elemento del producto en el carrito
        cartItem.appendChild(removeButton);
        cartItemsContainer.appendChild(cartItem);
    });

    // Actualizar el total en el carrito
    totalPriceElement.textContent = `Total: $${total}`;
}

// Función para eliminar productos del carrito
function removeFromCart(itemToRemove) {
    const itemIndex = cart.indexOf(itemToRemove);
    if (itemIndex > -1) {
        total -= cart[itemIndex].price; // Restar el precio del producto eliminado
        cart.splice(itemIndex, 1); // Eliminar el producto del carrito
    }
    updateCart(); // Actualizar la vista del carrito
}



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío normal del formulario
  
    // Validación y obtención de datos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
  
    if (nombre && email && mensaje) {
      // Aquí podrías conectar con una API o servicio de email si lo deseas
      document.getElementById('statusMessage').textContent = '¡Tu mensaje ha sido enviado con éxito!';
    } else {
      document.getElementById('statusMessage').textContent = 'Por favor, completa todos los campos.';
    }
  });
  

// Función para registrar al usuario
function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Guardar usuario y contraseña en localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        document.getElementById("message").innerText = "Registro exitoso. Ahora puedes iniciar sesión.";
    } else {
        document.getElementById("message").innerText = "Por favor, completa todos los campos.";
    }
}

// Función para iniciar sesión del usuario
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        document.getElementById("message").innerText = "Inicio de sesión exitoso. Bienvenido " + username + "!";
        document.getElementById("logoutButton").style.display = "inline-block";
        document.getElementById("form-title").innerText = "Bienvenido, " + username;
    } else {
        document.getElementById("message").innerText = "Nombre de usuario o contraseña incorrectos.";
    }
}

// Función para cerrar sesión del usuario
function logout() {
    document.getElementById("message").innerText = "Has cerrado sesión.";
    document.getElementById("form-title").innerText = "Registro";
    document.getElementById("logoutButton").style.display = "none";
}

let isRegistering = true;

// Alterna entre el formulario de registro y de inicio de sesión
function toggleForm() {
    isRegistering = !isRegistering;

    const title = document.getElementById("auth-form-title");
    const registerButton = document.getElementById("auth-register-button");
    const loginButton = document.getElementById("auth-login-button");
    const toggleButton = document.querySelector(".auth-toggle-button");

    if (isRegistering) {
        // Modo Registro
        title.innerText = "Registro";
        registerButton.style.display = "inline-block";
        loginButton.style.display = "none";
        toggleButton.innerText = "¿Ya tienes una cuenta? Inicia Sesión";
    } else {
        // Modo Inicio de Sesión
        title.innerText = "Inicio de Sesión";
        registerButton.style.display = "none";
        loginButton.style.display = "inline-block";
        toggleButton.innerText = "¿No tienes cuenta? Regístrate";
    }
}

// Función para registrar al usuario (simulado)
function register() {
    const username = document.getElementById("auth-username").value;
    const password = document.getElementById("auth-password").value;

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        document.getElementById("auth-message").innerText = "Registro exitoso. Ahora puedes iniciar sesión.";
    } else {
        document.getElementById("auth-message").innerText = "Por favor, completa todos los campos.";
    }
}

// Función para iniciar sesión del usuario (simulado)
function login() {
    const username = document.getElementById("auth-username").value;
    const password = document.getElementById("auth-password").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        document.getElementById("auth-message").innerText = "Inicio de sesión exitoso. Bienvenido " + username + "!";
    } else {
        document.getElementById("auth-message").innerText = "Nombre de usuario o contraseña incorrectos.";
    }
}
