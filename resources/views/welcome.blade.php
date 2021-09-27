<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <!-- Styles -->
    </head>
    <body>
        <div id="app"></div>
    </body>
    <script src="{{asset ('js/app.js')}}"></script>
</html>
