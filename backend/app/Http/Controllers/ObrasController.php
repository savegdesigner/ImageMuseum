<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Obra;
use App\Imagem;
use App\Http\Requests\CreateObraRequest;
use App\Http\Requests\EditObraRequest;
use JWTAuth;
use Illuminate\Support\Facades\Storage;

class ObrasController extends Controller
{
   
    public function index()
    {
        $obras = Obra::all();
        for($i = 0; $i < count($obras); $i++){
            $obras[$i]->imagems; 
        }
        return $obras;
    }
    public function store(Request $request)
    {   
        $obra = $request->all();
        $newObra = Obra::create([
            'nome' => $obra['name'],
            'user_id' => $obra['user_id']
        ]);
        $imagems = $obra['images'];
        for ($i=0; $i < count($imagems); $i++) {
            $aImagem = $imagems[$i]['file'];
            $saveImage = $this->uploadimage($aImagem);
            $newImagem = Imagem::create([
                'imagem' => $saveImage,
                'filtro' => $imagems[$i]['style']['filter'],
                'obra_id' => $newObra->id
            ]);
            $newImagem->save();
        }
        $return = $newObra->save() ? ['message' => "Imagem e obra cadastradas com sucesso!"] : ['message' => 'erro ao salvar obra ou imagem'];
        return $return;
    }

    public function getObrasUser($id){
        $obras = Obra::where('user_id', $id)->get();
        foreach($obras as $obra){
            $obra['imagems'] = $obra->imagems;
        }
        return $obras;
    }
    public function show($id)
    {
        
        if(Obra::find($id)){
            $imagens = Obra::find($id)->imagems;
            $obra = Obra::find($id);
            $obra['imagens'] = $imagens;
            return response()->json($obra);
        } else{
            return json_encode([$id => 'Obra não existe']);
        }
    }
    public function update(Request $request, $id)
    {
        $obra = Obra::find($id);
        if ($obra) {
            $atualizacao = $request->all();
            $obra->nome = $atualizacao['name'];
            $obra->user_id = $atualizacao['user_id'];
            $imagems = $atualizacao['images'];
            Imagem::where('obra_id', $obra->id)->delete();
            for ($i=0; $i < count($imagems); $i++) { 
                $aImagem = $imagems[$i]['file'];
                $saveImage = $this->uploadimage($aImagem);
                $newImagem = Imagem::create([
                    'imagem' => $saveImage,
                    'filtro' => $imagems[$i]['style']['filter'],
                    'obra_id' => $obra->id
                ]);
                $newImagem->save();
            }
            $return = $obra->update() ? [$id => 'Obra atualizada com sucesso'] : [$id => 'Erro ao atualizar a obra'];
        } else {
            $return = [$id => 'Obra não existe'];
        }
        return json_encode($return);
    }
    public function destroy($id)
    {
        $obra = Obra::find($id);
        $imagens = Imagem::all()->where('obra_id', $id);
        if($obra){
            if($imagens){
                foreach($imagens as $imagem){
                    $imagem->delete();
                }
                $return = $obra->delete() ? [$id => 'Obra e imagens excluídas com sucesso']:[$id => 'Erro ao excluir a obra'];
            } 
            
        } else{
            $return = [$id => 'Obra não existe'];
        }

        return json_encode($return);
    }
    public function uploadimage($imagem){
        if(strpos($imagem, ';base64')){
            $base64 = $imagem;
            $extension = explode('/', $base64);
            $extension = explode(';', $extension[1]);
            $extension = '.'.$extension[0];
            $name = rand(1, time()).$extension;
            //obtem o arquivo
            $separatorFile = explode(',', $base64);
            $file = $separatorFile[1];
            $path = 'imagens/';
            //envia o arquivo
            Storage::put($path.$name, base64_decode($file));
            return $path.$name;
        }
    }
}
