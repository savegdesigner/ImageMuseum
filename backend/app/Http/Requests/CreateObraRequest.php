<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateObraRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nome' => 'required|unique:obras|max:255',
            'user_id' => 'required'
        ];
    }
    public function messages(){
        return [
            'required' => 'O campo :attribute é obrigatório',
            'unique' => 'Nome já cadastrado em outra obra!'
        ];
    }
}
