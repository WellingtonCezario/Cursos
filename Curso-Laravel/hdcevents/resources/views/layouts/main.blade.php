<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>

    <!--CSS DO PROJETO!-->

    <link rel="stylesheet" href="/css/estilo.css">

    <!--FIM DO CSS DO PROJETO!-->

    <!--LINK DAS FONTES DO PROJETO!-->

    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">

    <!--FIM DAS FONTES DO PROJETO!-->

    <!--LINK DO BOOTSTRAP DO PROJETO!-->

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">

    <!--FIM DO BOOTSTRAP DO PROJETO!-->

</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg nabar-light">
            <div class="collapse navbar-collapse" id="navbar">
                <a href="/" class="navbar-brand">
                    <img src="/img/hdcevents_logo.svg" alt="">
                </a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="/" class="nav-link">Eventos</a>
                
                    </li>
                    <li class="nav-item">
                    <a href="/events/create" class="nav-link">Criar eventos</a>
                   
                    </li>
                    @auth
                    <li class="nav-item">
                    <a href="/dashboard" class="nav-link">Meus eventos</a>
             
                    </li>
                    <li class="nav-item">
                        <form action="/logout" method="post">
                            @csrf
                            <a href="/logout" class="nav-link"
                            onclick="event.preventDefault();
                            this.closest('form').submit();"
                            >Sair</a>
                        </form>
                    </li>
                    @endauth
                    @guest
                    <li class="nav-item">
                    <a href="/login" class="nav-link">Entrar</a>
             
                    </li>
                    <li class="nav-item">
                    <a href="/register" class="nav-link">Cadastrar</a>
                    </li>
                    @endguest
                </ul>
            </div>
        </nav>
    </header>

<main>
    <div class="container-fluid">
        <div class="row">
            @if(session('msg'))
            <p class="msg">{{session('msg')}}</p>
            @endif
            @yield('content')
        </div>
    </div>
</main>

<footer>
    <p>HDC Events &copy; 2023</p>
</footer>

<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>