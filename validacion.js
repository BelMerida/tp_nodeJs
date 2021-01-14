function validarDatos(data){
    let { nombre, apellido, dni} = data;
    dni = parseInt(dni);

    if( apellido === null || apellido == ""){
        throw new Error('El campo Apellido es obligatorio')
    }
    if( dni === null ){
        throw new Error('El campo DNI es obligatorio')
    }
    if( typeof nombre !== "string"){
        throw new Error('El nombre debe ser un String')
    }
    if( typeof apellido !== "string"){
        throw new Error('El Apellido debe ser un String')
    }
    if( dni.toString().length > 10){
        throw new Error('El DNI solo 10 caracteres como maximo')
    }

    if(Object.keys(data).length > 3){
        throw new Error('La cantidad maxima de atributos son 3')
    }
}

module.exports = {
    validarDatos,
};