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


export const clientServices = {
  listaCientes,
  crearCLiente, 
  eliminarCliente
};