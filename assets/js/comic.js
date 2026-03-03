const container = document.getElementById("comic");

let pageNumber = 1;

function loadNextPage() {
    let formatted = String(pageNumber).padStart(3, '0');
    let img = new Image();

    img.src = `assets/images/p${formatted}.png`;
    img.alt = `Página ${pageNumber}`;

    img.onload = function () {
        const pageDiv = document.createElement("div");
        pageDiv.className = "page";
        pageDiv.appendChild(img);
        container.appendChild(pageDiv);

        pageNumber++;
        loadNextPage(); // intenta cargar la siguiente
    };

    img.onerror = function () {
        console.log("No hay más páginas.");
    };
}

loadNextPage();