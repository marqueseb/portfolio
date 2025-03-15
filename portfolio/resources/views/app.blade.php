<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Portfolio de Paulo Souza Marques - Desenvolvedor Web Full Stack">
        <meta name="theme-color" content="#1a1a2e">
        <meta property="og:title" content="Paulo Souza Marques - Desenvolvedor Web">
        <meta property="og:description" content="Portfolio de Paulo Souza Marques - Desenvolvedor Web Full Stack">
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url('/') }}">

        <title inertia>{{ config('app.name', 'Portfolio') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

        <!-- Favicons -->
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="manifest" href="/site.webmanifest">

        <!-- Scripts and Styles -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', 'resources/css/app.css'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-gray-50">
        @inertia

        <!-- Preload Animation -->
        <div id="preloader" class="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
            <div class="flex space-x-2">
                <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
            </div>
        </div>

        <script>
            window.addEventListener('load', function() {
                document.getElementById('preloader').style.display = 'none';
            });
        </script>
    </body>
</html>