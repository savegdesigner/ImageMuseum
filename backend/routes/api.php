<?php

use Illuminate\Http\Request;

Route::group(['prefix' => 'museum'], function(){
    Route::post('/user/signup', 'UserController@signup');
    Route::post('/user/signin', 'UserController@signin');
    Route::get('/user', 'UserController@index');
    Route::get('/obras','ObrasController@index');
});

Route::group(['middleware' => ['apiJwt'], 'prefix' => 'museum'], function () {
    Route::get('/obras/{id}','ObrasController@show');
    Route::get('/userObras/{id}', 'ObrasController@getObrasUser');
    Route::post('/obras','ObrasController@store');
    Route::put('/obras/{id}','ObrasController@update');
    Route::delete('/obras/{id}','ObrasController@destroy');
    Route::get('/imagems','ImagemsController@index');
    Route::get('/imagems/{id}','ImagemsController@show');
    Route::post('/imagems','ImagemsController@store');
    Route::put('/imagems/{id}','ImagemsController@update');
    Route::delete('/imagems/{id}','ImagemsController@destroy');
    Route::get('/user/{id}', 'UserController@getUser');
    Route::put('/user', 'UserController@update');
    Route::post('logout', 'UserController@logout');
});