<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hainickreatif</title>

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}">

    <!-- Script Vite React -->
    @viteReactRefresh
    @vite('resources/js/src/index.jsx')
</head>
<body>
    <!-- Wajib ada agar React bisa nempel di sini -->
    <div id="root"></div>
</body>
</html>