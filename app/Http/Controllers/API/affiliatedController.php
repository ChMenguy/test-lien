<?php

namespace App\Http\Controllers\API;

use App\Affiliated;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class affiliatedController extends Controller
{
    public function store(Request $request)
    {
        $affiliated = new Affiliated;
        $affiliated->idAffiliated = $request->idAffiliated;
        $affiliated->email = $request->email;
        $affiliated->use = $request->use;
        $affiliated->link = $request->link;
        $affiliated->save();

        return response()->json([
            'status' => 200,
            'message'=>'Affiliated added successfully'
        ]);

    }
}
 