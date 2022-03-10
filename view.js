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
    if (side == 'a') a();
    if (side == 'b') b();
    if (side == 'c') c();
    if (side == 'login') login();
    if (side == 'admin') logpå();
    if (side == 'p1') p1();
    if (side == 'p2') p2();
    if (side == 'p3') p3();



}

function viewHome() {
    let html = /*html*/`
        ${showMeny()}
       <div class="covid-19"> <h1>Startside</h1> </div>
       <div class = "spm">
        <p> Spm 1: Er du happy med teamet du er på nå? </p>

        <input type="radio" name="svar1">
        <label for="svar1"> joda, dere er best! </label>
        <br>
        <input type="radio" name="svar1">
        <label for="svar1"> Nei! </label>
        <br>
        <input type="radio" name="svar1">
        <label for="svar1"> Ingen kommentar! </label><br>


</div>

<div class = "spm">
        <p> Spm 2: Er du fornøyd med lønnen? </p>

        <input type="radio" name="svar2">
        <label for="svar2"> Helt grei </label>
        <br>
        <input type="radio" name="svar2">
        <label for="svar2"> Jepp! </label>
        <br>
        <input type="radio" name="svar2">
        <label for="svar2"> Ingen kommentar! </label><br>

</div>

<div class = "spm">
        <p> Spm 3: Er du fornøyd med el jefe? </p>

        <input type="radio" name="svar3">
        <label for="svar3"> Helt grei </label>
        <br>
        <input type="radio" name="svar3">
        <label for="svar3"> Jepp! </label>
        <br>
        <input type="radio" name="svar3">
        <label for="svar3"> Ingen kommentar! </label><br>
        <input type="radio" name="svar3"> <input type="text">
        <label for="svar3"> </label><br>
</div>
<div class="knapp">
<center><input type="submit" value="Submit"></center>
</div>
    `;
    model.app.currentPage = html;
    covid();
}
/*
<input type="checkbox" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
*/



function a() {
    let html = `
    ${showMeny()}
    <h1>FUCK LOL</h1>
    `;
    model.app.currentPage = html;
    covid();
}

function b() {
    let html = `
    ${showMeny()}
    <h1>FL</h1>
    `;
    model.app.currentPage = html;
    covid();
}


function c() {
    let html = `
    ${showMeny()}
       <h1>deg</h1>
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
       <h1>Velkommen Jøran</h1>
       
       
       `;
    model.app.currentPage = html;
    covid();

}


function Adminpanel() {
    let html = `
    
    <button class="a" onclick="changePage('home')"> Hjem </button>
    <button class="a" onclick="changePage('admin')"> Admin Panel </button>
    <button class="a" onclick="changePage('p1')"> Legg til svar </button>
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
       <h1>Legg til Svar</h1>
       <input>
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








































