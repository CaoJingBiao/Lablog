<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id')->comment('文章表主键');
            $table->unsignedInteger('category_id')->default(0)->comment('分类id');
            $table->string('title')->comment('标题');
            $table->string('author')->comment('作者');
            $table->mediumText('content')->comment('markdown文章内容');
            $table->mediumText('html')->comment('markdown转的html页面');
            $table->char('description')->comment('描述');
            $table->string('keywords')->comment('关键词');
            $table->boolean('status')->default(0)->comment('是否发布 1是 0否');
            $table->integer('click')->unsigned()->default(0)->comment('点击数');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
