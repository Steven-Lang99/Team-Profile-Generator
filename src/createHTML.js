// function that will be printed in inde file.
function teamprofile(data) {
    return `
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <header>
        
        <nav class="navbar" style="background-color: red">
            <div class="container-fluid justify-content-center">
                <span class="navbar-brand mb-0 h1">My Team</span>
            </div>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team">
            ${cardFunction(data)}


    </main>



</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
    crossorigin="anonymous"></script>

</html>
`
}
//funtion for what card will be selected then adding it to a string to pass to the cardFunction in teamprofile
function cardFunction(data) {

    var cardString = ""

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerPicked = managerCard(employee)

            cardString += managerPicked

        }
        if (role === 'Intern') {
            const internPicked = internCard(employee)

            cardString += internPicked
        }
        if (role === 'Engineer') {
            const engineerPicked = engineerCard(employee)

            cardString += engineerPicked
        }
    }
    return cardString
}
//function to return the manager card when it is selected.
function managerCard(manager) {
    return `
    /* <!-- Manager --> */
    <div class="card col-3">
        <div class="card-header">
            <h1>${manager.name}</h1>
            <h2>Manager</h2>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">EMAIL: ${manager.email}</p>
            <p class="office">OFFICE NUMBER: ${manager.officeNumber}</p>
        </div>
    </div>
    `
}
//function to return the intern card when it is selected.
function internCard(intern) {
    return `
/* <!-- Intern --> */
<div class="card col-3">
    <div class="card-header">
        <h1>${intern.name}</h1>
        <h2>Intern</h2>
    </div>
    <div class="card-body">
        <p class="id">ID: ${intern.name}</p>
        <p class="email">EMAIL: ${intern.name}</p>
        <p class="school">SCHOOL: ${intern.school}</p>
    </div>
</div>
`
}
//function to return the engineer card when it is selected.
function engineerCard(engineer) {
    return `
/* <!-- Engineer --> */
<div class="card col-3">
    <div class="card-header">
        <h1>${engineer.name}</h1>
        <h2>Engineer</h2>
    </div>
    <div class="card-body">
        <p class="id">ID: ${engineer.id}</p>
        <p class="email">EMAIL: ${engineer.email}</p>
        <p class="github">GITHUB:https://github.com/${engineer.github}/</p>
    </div>
</div>
`
}

module.exports = teamprofile




