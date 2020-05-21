<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Obra;
use App\Imagem;
use App\Http\Requests\CreateObraRequest;

class ObrasController extends Controller
{
   
    public function index()
    {
        return Obra::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $json = $request->getContent();

        return Obra::create(json_decode($json, JSON_OBJECT_AS_ARRAY));
    }

    public function show($id)
    {
        $obra = Obra::find($id);
        if($obra){
            return $obra;
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
        $obra = Obra::find($id);
        if ($obra) {
            $json = $request->getContent();
            $atualizacao = json_decode( $json, JSON_OBJECT_AS_ARRAY);
            $obra->nome = $atualizacao['nome'];
            $ret = $obra->update() ? [$id => 'atualizado'] : [$id => 'erro'];
        } else {
            $ret = [$id => 'nao existe'];
        }
        return json_encode($ret);
    }

    public function destroy($id)
    {
        $obra = Obra::find($id);
        if($obra){
            $ret = $obra->delete() ? [$id => 'apagado']:[$id => 'erro'];
        } else{
            $ret = [$id => 'não existe'];
        }
        return json_encode($ret);
    }
}
