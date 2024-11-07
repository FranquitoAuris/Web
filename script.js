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
  