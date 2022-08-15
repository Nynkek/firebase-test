import './App.css';

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import UploadImage from "./components/UploadImage";
import {getDatabase, ref, set, onValue} from "firebase/database"
import {useEffect, useState} from "react";

function App() {
    const [menstrualDisc, setMenstrualDisc] = useState();
    const [menstrualDiscs, setMenstrualDiscs] = useState([]);
    const db = getDatabase();


    function writeUserData(userId, name, email, imageUrl) {
        set(ref(db, 'users/' + userId), {
            username: name,
            email: email,
            profile_picture : imageUrl
        });
    }
    useEffect(() => {
        onValue(ref(db, 'discs/'), (snapshot) => {
            setMenstrualDiscs([]);
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((disk) => {
                    setMenstrualDiscs((oldArray) => [...oldArray, disk]);
                });
            }
            console.log(menstrualDiscs);
            console.log("data")
        });
    }, []);

    function getData() {
        const db = getDatabase();
        const discsRef = ref(db, 'discs/');
        onValue(discsRef, (snapshot) => {
            const data = snapshot.val();
            setMenstrualDisc(data);
            console.log(data);
            console.log("data: ")
        });
    }


    // function showDisks(array) {
    //     let newArray = array.map(({id, name, brand}) => {
    //         return <li key={id}>{brand} {name}</li>;
    //     });
    //     return newArray;
    // }

    return (
        <div className="App">
            <h1>Todo</h1>
            {/*<button onClick={ () => {writeUserData(4,"nynke","@","url")}}>druk hier</button>*/}
            <p>test</p>

            {menstrualDiscs && menstrualDiscs.map((disk) => (
                <div key={disk.id}>
                    <h1>{disk.name}</h1>
                    {console.log(disk)}
                </div>
            ))}

        </div>
    );
}

export default App;
