<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\EditUserRequest;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

class UserController extends Controller
{   
    public function index(){
        return json_encode(User::all());
    }
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
    public function signin(LoginUserRequest $request){
        $credentials = $request->only('email', 'password');
        try{
            if(!$token = JWTAuth::attempt($credentials)){
                return response()->json([
                    'error' => 'Credenciais invalidas!'
                ], 401);
            }
        }catch(JWTException $e){
            return response()->json([
                'error' => "Nao tem um token!"
            ], 500);
        }
        return $this->respondWithToken($token);
    }
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Deslogado com sucesso']);
    }
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user_id' => auth()->user()->id
        ]);
    }

    public function getUser($id){

        $user = User::find($id);
        return response()->json($user, 200);
    }

    public function update(EditUserRequest $request){
        $user = auth()->user();
        $user->name = $request->name;
        
        if($user->email != $request->email){
            $user->email = $request->email;
            $user->email_verified_at = null;
        }
        if($request->password)
            $user->password = Hash::make($request->password);
        
        $user->save();
        return response()->json(['mensagem' => 'Usuário atualizado com sucesso!'], 200);
    }
}
