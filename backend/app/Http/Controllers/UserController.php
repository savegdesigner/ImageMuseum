<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Requests\CreateUserRequest;

class UserController extends Controller
{
    public function signup(CreateUserRequest $request){

        $user = new User([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password'))
        ]);
        $user->save();
        return response()->json([
            'message' => 'Usuário cadastrado com sucesso'
        ],201);
    }
}
