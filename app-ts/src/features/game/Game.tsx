import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Map } from './Map';

export function Game() {


    return (
        <div>
            <Map></Map>
        </div>
    );
}
