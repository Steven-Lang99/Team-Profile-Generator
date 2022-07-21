
const teamprofile = function () {
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



    </main>



</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
    crossorigin="anonymous"></script>

</html>
`
}

const managerCard = function () {
    return `
    /* <!-- Manager --> */
    <div class="card col-3">
        <div class="card-header">
            <h1>Manager</h1>
            <h2>Manager</h2>
        </div>
        <div class="card-body">
            <p class="id">ID:</p>
            <p class="email">EMAIL:</p>
            <p class="office">OFFICE NUMBER: </p>
        </div>
    </div>
    `
}

const internCard = function () {
    return `
    /* <!-- Intern --> */
    <div class="card col-3">
        <div class="card-header">
            <h1>Intern</h1>
            <h2>Intern</h2>
        </div>
        <div class="card-body">
            <p class="id">ID:</p>
            <p class="email">EMAIL:</p>
            <p class="school">SCHOOL:</p>
        </div>
    </div>
    `
}

const engineerCard = function () {
    return `
    /* <!-- Engineer --> */
    <div class="card col-3">
        <div class="card-header">
            <h1>Engineer</h1>
            <h2>Engineer</h2>
        </div>
        <div class="card-body">
            <p class="id">ID:</p>
            <p class="email">EMAIL: </p>
            <p class="github">GITHUB:</p>
        </div>
    </div>
    `
}