<?php

namespace App\Http\Requests\Comment;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\ValidateComment;

class Store extends FormRequest
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
            'nickname' => 'required|string',
            'email'    => 'required|email',
            'content'  => ['required', new ValidateComment],
        ];
    }

    /**
     * 定义字段名中文
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'nickname' => '昵称',
            'email'    => '邮箱',
            'content'  => '留言内容',

        ];
    }
}
