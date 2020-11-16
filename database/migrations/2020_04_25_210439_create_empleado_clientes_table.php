<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmpleadoClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empleado_clientes', function (Blueprint $table) {
            $table->increments('id');
            $table->enum('estado',['activo','desactivo','retirado','nuevo'])->default('activo');
            $table->string('cargo')->nullable();
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('admincliente_id');
            // private

            $table->unsignedInteger('tipoDocumento_id');
            $table->string('fechaNacimiento');
            $table->string('numeroDocumento');
            $table->unsignedInteger('paisNacimiento_id');
            $table->string('departamentoNacimiento');
            $table->string('ciudadNacimiento');
            $table->unsignedInteger('departamentoResidencia_id');
            $table->string('cuidadResidencia');
            $table->string('direccionResidencia');
            $table->unsignedInteger('estadoCivil_id');
            $table->unsignedInteger('rh_id');
            $table->integer('estatura');
            $table->integer('hijos');
            
            $table->timestamps();
            
           $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('admincliente_id')->references('id')->on('adminclientes');
          
     
            

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('empleado_clientes');
    }
}
