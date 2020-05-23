<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Obra;
use App\Imagem;
use App\Http\Requests\CreateObraRequest;
use App\Http\Requests\EditObraRequest;

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

    public function store(CreateObraRequest $request)
    {
        $json = $request->getContent();
        $obra = Obra::create(json_decode($json, JSON_OBJECT_AS_ARRAY));
        $obra->save();
        return response()->json([
            'message' => 'Obra cadastrada com sucesso']);
    }

    public function show($id)
    {
        $imagens = Obra::find($id)->imagems;
        $obra = Obra::find($id);
        $array = [ $imagens, $obra];
        if($obra){
            return $array;
        } else{
            return json_encode([$id => 'Obra não existe']);
        }
    }

    public function edit($id)
    {
        //
    }

    public function update(EditObraRequest $request, $id)
    {
        $obra = Obra::find($id);
        if ($obra) {
            $json = $request->getContent();
            $atualizacao = json_decode( $json, JSON_OBJECT_AS_ARRAY);
            $obra->nome = $atualizacao['nome'];
            $return = $obra->update() ? [$id => 'Obra atualizada com sucesso'] : [$id => 'Erro ao atualizar a obra'];
        } else {
            $return = [$id => 'Obra não existe'];
        }
        return json_encode($return);
    }

    public function destroy($id)
    {
        $obra = Obra::find($id);
        if($obra){
            $return = $obra->delete() ? [$id => 'Obra excluída com sucesso']:[$id => 'Erro ao excluir a obra'];
        } else{
            $return = [$id => 'Obra não existe'];
        }
        return json_encode($return);
    }
}
