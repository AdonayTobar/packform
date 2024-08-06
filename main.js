function enviarWhatsApp(destinatario) {
    const lugar = document.getElementById('lugar').value;
    const producto = document.getElementById('producto').value;
    const descripcion = document.getElementById('descripcion').value;
    const costoProducto = document.getElementById('costoProducto').value;
    const costoDelivery = document.getElementById('costoDelivery').value;
    const direccion = document.getElementById('direccion').value;
    const total = parseFloat(costoProducto) + parseFloat(costoDelivery);

    const mensaje = `Pedido 001\nLugar de Producto: ${lugar}\nProducto: ${producto}\nDescripción: ${descripcion}\nCosto de Producto: $${costoProducto}\nCosto de delivery: $${costoDelivery}\nTotal: $${total.toFixed(2)}\nDirección de entrega: ${direccion}`;
    
    let url;

    switch (destinatario) {
        case 'Josue':
            url = `https://api.whatsapp.com/send?phone=521234567890&text=${encodeURIComponent(mensaje)}`;
            break;
        case 'Henry':
            url = `https://api.whatsapp.com/send?phone=521234567891&text=${encodeURIComponent(mensaje)}`;
            break;
        case 'Adonay':
            url = `https://api.whatsapp.com/send?phone=60288548&text=${encodeURIComponent(mensaje)}`;
            break;
        case 'Todos':
            url = `https://api.whatsapp.com/send?phone=521234567890&text=${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');
            url = `https://api.whatsapp.com/send?phone=521234567891&text=${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');
            url = `https://api.whatsapp.com/send?phone=521234567892&text=${encodeURIComponent(mensaje)}`;
            break;
    }

    window.open(url, '_blank');
}
