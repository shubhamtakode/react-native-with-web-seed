import React from 'react';
import { Home } from "commons/src/views/Home/Home";

const RoutesDefinitions = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/home', exact: true, name: 'Home', component: Home }
];

export default RoutesDefinitions;
