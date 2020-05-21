<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Obra extends Model
{
    protected $fillable = ['nome', 'user_id'];

    public function imagems(){
        return $this->hasMany(Imagem::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
