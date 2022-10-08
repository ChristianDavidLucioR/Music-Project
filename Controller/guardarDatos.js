function guardar(){

    db.collection("Usuarios").add({
        nombre: document.getElementById ("usuarioName").value,
        contraseña: document.getElementById ("usuarioPass").value,
        
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}