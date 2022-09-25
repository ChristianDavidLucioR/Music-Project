function guardas () {
    db.collection("Usuarios").add({
        nombre: document.getElementById ("").value,
        contraseña:document.getElementById ("").value,
        
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}