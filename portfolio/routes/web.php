<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'title' => 'Portfolio - Paulo Souza Marques'
    ]);
});

// Rota de fallback para o modo SPA
Route::fallback(function () {
    return Inertia::render('Home', [
        'title' => 'Portfolio - Paulo Souza Marques'
    ]);
});
