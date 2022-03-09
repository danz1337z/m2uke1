function covid() {
    let html = "";
    html += `
    ${header()}
    <input type="datetime-local">
    `;

    document.getElementById("app").innerHTML = html;
}

function header() {
    return `<h1> Start side </h1>`
}

