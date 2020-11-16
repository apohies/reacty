@extends('layouts.app')

@section('content')

<div id="example" data-apellido="{{$user->email}}">
    
</div>


<div>
<a class="btn btn-primary" href="{{route('ver')}}"> Ir a ver </a>
</div>


@endsection


@section('scripts')

<script>

usuario=@JSON($user);

a=document.getElementById('example');
a.setAttribute('data-name',usuario.name);

</script>

@endsection