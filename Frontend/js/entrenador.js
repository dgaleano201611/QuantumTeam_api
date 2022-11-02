
function loadData(){
    let request = sendRequest('producto/list', 'GET', '')
    let table = document.getElementById('products-table');
    table.innerHTML = "";
    request.onload = function(){
        
        let data = request.response;
        console.log(data);
        data.forEach(element => {
            table.innerHTML += `
                <tr>
                <th>${element.documento}</th>
                <th>${element.nombre}</th>
                <th>${element.apellido}</th>
                <th>${element.telefono}</th>
                <th>${element.Correo}</th>
                <th>${element.rol}</th>
                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location = "form_productos.html?id=${element.idProducto}"'>Editar</button>
                        <button type="button" class="btn btn-danger" onclick='deleteProducto(${element.idProducto})'>Eliminar</button>
                    </td>
                </tr>

                `
        });
    }
    request.onerror = function(){
        table.innerHTML = `
            <tr>
                <td colspan="6">Error al recuperar los datos.</td>
            </tr>
        `;
    }
}

function loadProducto(documento){
    let request = sendRequest('entrenador/list/'+documento, 'GET', '')
    let name = document.getElementById('directors-name')
    let sumame = document.getElementById('directors-sumame')
    let phone = document.getElementById('directors-phone')
    let mail = document.getElementById('directors-mail')
    let role = document.getElementById('directors-role')
    request.onload = function(){
        
        let data = request.response
        id.value = data.documento
        name.value = data.nombre
        sumame.value = data.apellido
        phone.value = data.telefono
        mail.value = data.correo
        role.value = data.rol
    }
    request.onerror = function(){
        alert("Error al recuperar los datos.");
    }
}

function deleteEntrenador(documento){
    let request = sendRequest('entrenador/'+documento, 'DELETE', '')
    request.onload = function(){
        loadData()
    }
}

function saveEntrenador(){
    let name = document.getElementById('-name').value
    let sale = document.getElementById('product-sale-value').value
    let purchase = document.getElementById('product-purchase-value').value
    let quantity = document.getElementById('product-quantity').value
    let id = document.getElementById('product-id').value
    let data = {'idProducto': id,'nombreProducto':name,'valorVenta': sale, 'valorCompra': purchase, 'cantidad':quantity }
    let request = sendRequest('producto/', id ? 'PUT' : 'POST', data)
    request.onload = function(){
        window.location = 'Entrenador.html';
    }
    request.onerror = function(){
        alert('Error al guardar los cambios.')
    }
}