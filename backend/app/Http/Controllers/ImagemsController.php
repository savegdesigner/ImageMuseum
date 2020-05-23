<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Obra;
use App\Imagem;
use App\Http\Requests\CreateImagemRequest;
use App\Http\Requests\EditImagemRequest;

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

    public function store(CreateImagemRequest $request)
    {   
        $imagem = $request->imagem->store('imagems');
        $json = $request->getContent();
        $objImagem = Imagem::create(json_decode($json, JSON_OBJECT_AS_ARRAY));
        $objImagem->imagem = $imagem;
        $objImagem->save();
        return response()->json([
            'message' => 'Imagem cadastrada com sucesso'
        ],201);
    }

    public function show($id)
    {
        $imagem = Imagem::find($id);
        if($imagem){
            return $imagem;
        } else{
            return json_encode([$id => 'Imagem não existe']);
        }
    }

    public function edit($id)
    {
        //
    }

    public function update(EditImagemRequest $request, $id)
    {
        $imagem = Imagem::find($id);
        if ($imagem) {
            $json = $request->getContent();
            $atualizacao = json_decode( $json, JSON_OBJECT_AS_ARRAY);
            $imagem->filtro = $atualizacao['filtro'];
            $return = $imagem->update() ? [$id => 'Imagem atualizada com sucesso'] : [$id => 'Erro ao atualizar a imagem'];
        } else {
            $return = [$id => 'Imagem não existe'];
        }
        return json_encode($return);
    }

    public function destroy($id)
    {
        $imagem = Imagem::find($id);
        if($imagem){
            $return = $imagem->delete() ? [$id => 'Imagem excluída com sucesso']:[$id => 'Erro ao atualizar a imagem'];
        } else{
            $return = [$id => 'Imagem não existe'];
        }
        return json_encode($return);
    }
}
