<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;
use JWTAuth;
use Exception;

class ApiProtectedRoute extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (Exception $e) {
            if ($e instanceof Tymon\JWTAuth\Exceptions\TokenExpiredException) {
                return response()->json(['status' => "Token expirado"]);
            } else if ($e instanceof Tymon\JWTAuth\Exceptions\TokenInvalidException) {
                return response()->json(['status' => "Token invalido"]);
            } else{
                return response()->json(['status' => "Token não encontrado"]);
            }
        }
        
        return $next($request);
    }
}
