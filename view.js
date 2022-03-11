function covid() {
    let html = '';
    html += `
    <div> ${model.app.currentPage} </div>
    `;
    appDiv.innerHTML = html;
}

function showMeny() {
    let html = `
    
    <button class="a" onclick="changePage('home')"> Hjem </button>
    <div class="logg">
    <button class="a" onclick="changePage('login')"> Log in </button>
    </div>
 
    `
    return html;
}

function changePage(side) {
    model.app.currentPage = side;
    updateView();
}
updateView();

function updateView() {
    const side = model.app.currentPage;
    if (side == 'home') viewHome();
    if (side == 'login') login();
    if (side == 'admin') logpå();
    if (side == 'p1') p1();
    if (side == 'p2') p2();
    if (side == 'p3') p3();
    if (side == 'submit') submit();
    if (side == 'neste') neste();
}

function viewHome() {
    let html = /*html*/`
        ${showMeny()}
       <div class="covid-19"> <h1>Startside</h1> </div>
       <div class = "spm">
        <p> Spm 1: Er du happy med teamet du er på nå? </p>

        <form>
        <input type="radio" name="svar1">
        <label for="svar1"> Ja! </label>
        <br>
        <input type="radio" name="svar1">
        <label for="svar1"> Nei! </label>
        <br>
        <input type="radio" name="svar1">
        <label for="svar1"> Ingen kommentar! </label><br>
</form>

</div>

<div class = "spm">
        <p> Spm 2: Er du fornøyd med lærerene? </p>

        <form>
        <input type="radio" name="svar2">
        <label for="svar2"> Ja! </label>
        <br>
        <input type="radio" name="svar2">
        <label for="svar2"> Nei! </label>
        <br>
        <input type="radio" name="svar2">
        <label for="svar2"> Ingen kommentar! </label><br>
</form>
</div>

<div class = "spm">
        <p> Spm 3: Er du fornøyd med el jefe? </p>

        <form action="/action_page.php">
        <input type="radio" name="svar3">
        <label for="svar3"> Ja! </label>
        <br>
        <input type="radio" name="svar3">
        <label for="svar3"> Nei! </label>
        <br>
        <input type="radio" name="svar3">
        <label for="svar3"> Ingen kommentar! </label><br>
        <input type="radio" name="svar3"> <input type="text">
        <label for="svar3"> </label><br>
        <input type="submit" value="Submit">
        </form>
</div>
<div class="knapp">
<center><button class="a" id="myBtn" onclick="changePage('submit')"> Submit </button></center>
</div>
<div class="virus">
<button onclick="changePage('neste')"> Neste side </button>
</div>
`;
    model.app.currentPage = html;
    covid();
}



function login() {
    let html = `
    ${showMeny()}
    <br>
    <center>
        <input type="text" name="" id="username" placeholder="User Name">
        <br><br>
        <input type="password" placeholder="Password" name="" id="password">
        <br><br>
        <input type="submit" name="" value="Login" onclick="logpå()">
    </center>
    `;
    model.app.currentPage = html;
    covid();
}

function logpå() {
    let html = `
    ${Adminpanel()}
       <h1>Velkommen ${model.app.currentUser} </h1>
       `;
    model.app.currentPage = html;
    covid();

}


function Adminpanel() {
    let html = `
    
    <button class="a" onclick="changePage('home')"> Hjem </button>
    <button class="a" onclick="changePage('admin')"> Admin Panel </button>
    <button class="a" onclick="changePage('p1')"> Legg til </button>
    <button class="a" onclick="changePage('p2')"> Lag ny Admin bruker </button>
    <div class="logg">
    <button class="a" onclick="changePage('p3')"> Logg ut </button>
    </div>
 
    `;
    return html;
}


function p1() {
    let html = `
    ${Adminpanel()}
    <h1>Legg til spørsmål</h1>
    <input>
    <h1>Legg til svar</h1>
    <input><br><br>
    <input><br><br>
    <input><br><br>
    <button> Legg til </button>
    `;
    model.app.currentPage = html;
    covid();
}

function p2() {
    let html = `
    ${Adminpanel()}
       <h1>Ny Admin</h1>
       <input type="text" name="" id="username" placeholder="User Name">
       <br><br>
       <input type="password" placeholder="Password" name="" id="password">
       <br><br>
       <button> Create </button>
    `;
    model.app.currentPage = html;
    covid();
}

function p3() {
    let html = `
    ${showMeny()}
       <h1>Du har nå logget ut!</h1>
    `;
    model.app.currentPage = html;
    covid();
}

function submit() {
    let html = `
    ${showMeny()}
       <center><h1>Takk for at du tok deg tid!</h1></center>
    `;
    model.app.currentPage = html;
    covid();
}

function neste() {
    let html = `
    ${showMeny()}
       <div class = "spm">
        <p> Spm 4: Er du happy med teamet du er på nå? </p>

        <form>
        <input type="radio" name="svar1">
        <label for="svar1"> Ja! </label>
        <br>
        <input type="radio" name="svar1">
        <label for="svar1"> Nei! </label>
        <br>
        <input type="radio" name="svar1">
        <label for="svar1"> Ingen kommentar! </label><br>
</form>

</div>

<div class = "spm">
        <p> Spm 5: Er du fornøyd med lærerene? </p>

        <form>
        <input type="radio" name="svar2">
        <label for="svar2"> Ja! </label>
        <br>
        <input type="radio" name="svar2">
        <label for="svar2"> Nei! </label>
        <br>
        <input type="radio" name="svar2">
        <label for="svar2"> Ingen kommentar! </label><br>
</form>
</div>

<div class = "spm">
        <p> Spm 6: Er du fornøyd med el jefe? </p>

        <form>
        <input type="radio" name="svar3">
        <label for="svar3"> Ja! </label>
        <br>
        <input type="radio" name="svar3">
        <label for="svar3"> Nei! </label>
        <br>
        <input type="radio" name="svar3">
        <label for="svar3"> Ingen kommentar! </label><br>
        <input type="radio" name="svar3"> <input type="text">
        <label for="svar3"> </label><br>
        </form>
</div>
    `;
    model.app.currentPage = html;
    covid();
}








































