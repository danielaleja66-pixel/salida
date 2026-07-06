const azul = document.getElementById("btnAzul");
const rojo = document.getElementById("btnRojo");
const mensaje = document.getElementById("mensaje");
const subtitulo = document.getElementById("subtitulo");

const textos = [
    "Oyeee no seas grosera",
    "Intenta de nuevo",
    "Prometo hacerte reír",
    "Podemos cantar en el carro",
    "Te voy a dar comiditaaa",
    "Marianaa ya casi es hora de que digas que sí",
    "No seas mal vibrosa, di que sí",
    "Bueno, última oportunidad",
    "Ya no puedes decir que no muajaja"
];

let indice = 0;

// tamaños
let tamañoSi = 1;
let tamañoNo = 1;

// estado de huida
let modoEscape = false;

rojo.addEventListener("click", () => {
    mensaje.textContent = "";
    // SÍ crece
    tamañoSi += 0.2;
    azul.style.transform = `scale(${tamañoSi})`;

    // NO se hace pequeño
    tamañoNo -= 0.08;
    if (tamañoNo < 0.15) tamañoNo = 0.15;

    rojo.style.transform = `scale(${tamañoNo})`;

    // cambiar texto
    if (indice < textos.length - 1) {
        indice++;
        subtitulo.textContent = textos[indice];
    }

    // activar modo escape cuando es muy pequeño
    if (tamañoNo <= 0.4) {
        modoEscape = true;
        rojo.style.position = "absolute";
    }

});

// 🧠 huir del cursor
document.addEventListener("mousemove", (e) => {

    if (!modoEscape) return;

    const rect = rojo.getBoundingClientRect();

    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    const distancia = Math.sqrt(dx * dx + dy * dy);

    // si el mouse está cerca, huye
    if (distancia < 120) {

        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 200;

        let newX = rect.left + moveX;
        let newY = rect.top + moveY;

        // límites de pantalla
        newX = Math.max(0, Math.min(window.innerWidth - rect.width, newX));
        newY = Math.max(0, Math.min(window.innerHeight - rect.height, newY));

        rojo.style.left = newX + "px";
        rojo.style.top = newY + "px";
    }

});

azul.addEventListener("click", () => {
    mensaje.textContent = "¡YEIII, paso por ti a las 3 pm, okei ? Ya te quiero ver ";
    mensaje.style.opacity = "1";
    subtitulo.textContent =" Ja, Siempre lo supe";
    rojo.style.display="none";
    confetti({
        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 }
    });

});
