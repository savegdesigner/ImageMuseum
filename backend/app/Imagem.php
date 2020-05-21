<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Imagem extends Model
{
    protected $fillable = ['imagem', 'filtro', 'obra_id'];

    public function obra(){
        return $this->belongsTo(Obra::class);
    }
}
