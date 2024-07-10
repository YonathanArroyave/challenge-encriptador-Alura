document.addEventListener('DOMContentLoaded', () => {
    // Obtén referencias a los elementos de la página
    const inputText = document.getElementById('inputText'); // Caja de texto donde el usuario escribe
    const outputText = document.getElementById('outputText'); // Área donde se muestra el texto encriptado/desencriptado
    const placeholderImage = document.getElementById('placeholderImage'); // Imagen que se muestra cuando no hay texto
    const encryptBtn = document.getElementById('encryptBtn'); // Botón de encriptar
    const decryptBtn = document.getElementById('decryptBtn'); // Botón de desencriptar
    const copyBtn = document.getElementById('copyBtn'); // Botón para copiar el texto al portapapeles

    // Agrega un evento al botón de encriptar
    encryptBtn.addEventListener('click', () => {
        // Obtén el texto que escribió el usuario
        const text = inputText.value;
        if (text) {
            // Si hay texto, encríptalo y muéstralo en la pantalla
            outputText.textContent = encrypt(text);
            outputText.style.display = 'block';
            placeholderImage.style.display = 'none';
        } else {
            // Si no hay texto, no muestres nada
            outputText.textContent = '';
            outputText.style.display = 'none';
            placeholderImage.style.display = 'block';
        }
    });

    // Agrega un evento al botón de desencriptar
    decryptBtn.addEventListener('click', () => {
        // Obtén el texto que escribió el usuario
        const text = inputText.value;
        if (text) {
            // Si hay texto, desencríptalo y muéstralo en la pantalla
            outputText.textContent = decrypt(text);
            outputText.style.display = 'block';
            placeholderImage.style.display = 'none';
        } else {
            // Si no hay texto, no muestres nada
            outputText.textContent = '';
            outputText.style.display = 'none';
            placeholderImage.style.display = 'block';
        }
    });

    // Agrega un evento al botón de copiar
    copyBtn.addEventListener('click', () => {
        // Obtén el texto encriptado/desencriptado
        const text = outputText.textContent;
        if (text) {
            // Si hay texto, cópialo al portapapeles y muestra un mensaje de confirmación
            navigator.clipboard.writeText(text);
            alert('Texto copiado al portapapeles');
        }
    });

    // Función para encriptar el texto
    function encrypt(text) {
        // Reemplaza las letras según las reglas dadas
        return text.replace(/e/g, 'enter')
                   .replace(/i/g, 'imes')
                   .replace(/a/g, 'ai')
                   .replace(/o/g, 'ober')
                   .replace(/u/g, 'ufat');
    }

    // Función para desencriptar el texto
    function decrypt(text) {
        // Reemplaza las palabras encriptadas con las letras originales
        return text.replace(/enter/g, 'e')
                   .replace(/imes/g, 'i')
                   .replace(/ai/g, 'a')
                   .replace(/ober/g, 'o')
                   .replace(/ufat/g, 'u');
    }
});
