<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Obra;
use App\Imagem;
use App\Http\Requests\CreateImageRequest;

class ImagemsController extends Controller
{
    public function index()
    {
        return Imagem::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $json = $request->getContent();

        return Imagem::create(json_decode($json, JSON_OBJECT_AS_ARRAY));
    }

    public function show($id)
    {
        $imagem = Imagem::find($id);
        if($imagem){
            return $imagem;
        } else{
            return json_encode([$id => 'Não existe']);
        }
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $imagem = Imagem::find($id);
        if ($imagem) {
            $json = $request->getContent();
            $atualizacao = json_decode( $json, JSON_OBJECT_AS_ARRAY);
            $imagem->filtro = $atualizacao['filtro'];
            $ret = $imagem->update() ? [$id => 'atualizado'] : [$id => 'erro'];
        } else {
            $ret = [$id => 'nao existe'];
        }
        return json_encode($ret);
    }

    public function destroy($id)
    {
        $imagem = Imagem::find($id);
        if($imagem){
            $ret = $imagem->delete() ? [$id => 'apagado']:[$id => 'erro'];
        } else{
            $ret = [$id => 'não existe'];
        }
        return json_encode($ret);
    }
}
