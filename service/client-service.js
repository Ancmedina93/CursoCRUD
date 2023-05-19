const listaCientes = () => {
    return fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());
};

const crearCLiente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, email, id:uuid.v4()})

  })
}

const eliminarCliente = (id) =>{
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE"
  })

}

const detalleCliente = (id) =>{
  return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json()).catch(error => console.log(Error))
}

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, email})

  })
  .then(respuesta=> console.log(respuesta))
  .catch(error => console.log(Error))
}

export const clientServices = {
  listaCientes,
  crearCLiente, 
  eliminarCliente,
  detalleCliente,
  actualizarCliente
};