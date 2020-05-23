<?php

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'museum'], function(){
    Route::get('/obras','ObrasController@index');
    Route::get('/obras/{id}','ObrasController@show');
    Route::post('/obras','ObrasController@store');
    Route::put('/obras/{id}','ObrasController@update');
    Route::delete('/obras/{id}','ObrasController@destroy');
    Route::get('/imagems','ImagemsController@index');
    Route::get('/imagems/{id}','ImagemsController@show');
    Route::post('/imagems','ImagemsController@store');
    Route::put('/imagems/{id}','ImagemsController@update');
    Route::delete('/imagems/{id}','ImagemsController@destroy');
    Route::post('/user', 'UserController@signup');
});

