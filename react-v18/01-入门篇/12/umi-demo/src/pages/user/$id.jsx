import React from 'react';
import { useParams } from 'react-router-dom';

// /user/:id 页面
function $id(props) {
    let params = useParams();

    return <div>This is user page, id is {params.id}</div>;
}

export default $id;
