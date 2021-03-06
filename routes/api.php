<?php

use App\Http\Controllers\Api\CompanyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*
|--------------------------------------------------------------------------
| API Routes  Companies 
|--------------------------------------------------------------------------
|
| /api/companies
|
*/
Route::apiResource('/companies', CompanyController::class);

Route::view('/{any}', 'dashboard')
    ->middleware(['auth'])
    ->name('dashboard');

Route::view('/{any}', 'dashboard')
    ->middleware(['auth'])
    ->where('any', '.*');