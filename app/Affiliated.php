<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Affiliated extends Model
{
    protected $table = 'affiliated';
    protected $fillable = [
        'idAffiliated',
        'email',
        'use',
        'link'
    ];

}
