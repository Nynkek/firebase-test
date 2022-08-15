import React from 'react';
import '../App.css';
import {db} from "../firebase-config";
import {
    collection,
    getDocs,
    doc,
} from "firebase/firestore";
import {useEffect, useState} from "react";


function Todo(props) {
    return (
        <div>
            <h1>to do</h1>
            <input type="text"/>



        </div>
    );
}

export default Todo;