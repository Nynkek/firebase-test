import './App.css';
import {db} from "./firebase-config";
import {
    collection,
    getDocs,
    doc,
} from "firebase/firestore";
import {useEffect, useState} from "react";

function MenstruatieDisk() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

        };

        getUsers();




    }, []);

    return (
        <div className="App">
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <h1>Name: {user.name}</h1>
                        <h1>Age: {user.age}</h1>

                    </div>
                );
            })}

        </div>
    );
}

export default App;
