
function loadData(){
    let request = sendRequest('director', 'GET', '')
    let table = document.getElementById('directors-table');
    table.innerHTML = "";
    request.onload = function(){
        
        let data = request.response;
        console.log(data);
        data.forEach((element, index) => {
            table.innerHTML += `
                <tr>
                <th>${element.documento}</th>
                <th>${element.nombre}</th>
                <th>${element.apellido}</th>
                <th>${element.telefono}</th>
                <th>${element.Correo}</th>
                    <td>
                        <div class="form-check form-switch">
                            <input ${element.activo ? "checked" : "uncheked"} class="form-check-input" type="checkbox" role="switch" disabled>
                        </div>
                    </td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location = "/form_Director.html?id=${element.documento}"'>Editar</button>
                        <button type="button" class="btn btn-danger" onclick='deleteUser(${element.nombre})'>Eliminar</button>
                    </td>
                </tr>

                `
        });
    }
    request.onerror = function(){
        table.innerHTML = `
            <tr>
                <td colspan="5">Error al recuperar los datos.</td>
            </tr>
        `;
    }
}

function loadDirector(documento){
    let request = sendRequest('director'+documento, 'GET', '')
    let name = document.getElementById('director-name')
    let lastName = document.getElementById('director-lastName') //suname o surname o lastname
    let phone = document.getElementById('director-phone')
    let mail = document.getElementById('director-mail')
    let idDocument = document.getElementById('director-idDocument')
    request.onload = function(){ 
        let data = request.response;
        idDocument.value = data.documento
        name.value = data.nombre
        lastName.value = data.apellido
        phone.value = data.telefono
        mail.value = data.Correo
        //status.checked = data.activo //esto no esta en el script de la profe
    }
    request.onerror = function(){
        alert("Error al recuperar los datos.");
    }
}

function deleteDirector(documento){
    let request = sendRequest('director/'+documento, 'DELETE', '')
    request.onload = function(){
        loadData()
    }
}

function saveDirector(){
    let idDocument = document.getElementById('director-idDocument').value
    let name = document.getElementById('director-name').value
    let lastName = document.getElementById('director-lastName').value
    let phone = document.getElementById('director-phone').value
    let mail = document.getElementById('director-mail').value
    let data = {'documento': idDocument,'nombre':name,'apellido': lastName, 'telefono': phone, 'correo':mail}
    let request = sendRequest('director', idDocument ? 'PUT' : 'POST', data)
    request.onload = function(){
        window.location = 'Director.html';
    }
    request.onerror = function(){
        alert('Error al guardar los cambios.')
    }
}