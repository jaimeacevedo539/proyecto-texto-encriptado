const inputTexto = document.querySelector(".inputTexto")
const mensaje = document.querySelector(".mensaje")

function botonencriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    inputTexto.value =""
    
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
}
        return stringEncriptada;
}

function botondesencriptar(){
    const textodEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textodEncriptado;
    inputTexto.value=""
    
}


function desencriptar(stringdesEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringdesEncriptada = stringdesEncriptada;

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringdesEncriptada.includes(matrizCodigo[i][1])){
        stringdesEncriptada = stringdesEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
}
        return stringdesEncriptada;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = " "
    alert("El mensaje ha sido copiado")
}