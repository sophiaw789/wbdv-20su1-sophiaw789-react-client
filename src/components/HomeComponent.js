import React from "react";
import {Link} from "react-router-dom";

const HomeComponent = () =>
<div>
    <h2>Home</h2>
    <div className="list-group mt-2">
        <Link className="list-group-item" to='/table/courses'>
            Course List
        </Link>
        <Link className="list-group-item" to='/register'>
            Register
        </Link>
    </div>
</div>

export default HomeComponent