// Espera hasta que el contenido HTML del documento haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {
  // Busca el elemento del documento con la clase "liquid-cursor" y guárdalo en la variable 'cursor'
  const cursor = document.querySelector(".liquid-cursor");

  // Añade un evento que se ejecutará cuando el mouse se mueva en el documento
  document.addEventListener("mousemove", (e) => {
    // Obtiene las coordenadas X e Y del cursor del mouse en relación al viewport (área visible del navegador)
    const x = e.clientX;
    const y = e.clientY;

    // Establece la posición horizontal (izquierda) del elemento 'cursor' en píxeles
    cursor.style.left = `${x}px`;
    // Establece la posición vertical (arriba) del elemento 'cursor' en píxeles
    cursor.style.top = `${y}px`;
    // Establece la opacidad (transparencia) del elemento 'cursor' a 1, haciéndolo visible
    cursor.style.opacity = 1;
  });

  // Añade un evento que se ejecutará cuando el mouse salga del documento
  document.addEventListener("mouseout", () => {
    // Establece la opacidad del elemento 'cursor' a 0, haciéndolo invisible
    cursor.style.opacity = 0;
  });
});
