import { collection, doc, getDoc } from "firebase/firestore";
import { firestoreDB } from "../firebase";
import { useEffect, useState } from "react";

const Contact = () => {
    const [user, setUser] = useState(undefined)
    useEffect(() => {
        async function getFirstUserFromFirebase() {
            const docRef = doc(firestoreDB, "users", "0gb0AYViuypZLDuWzl7n");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                // setSrc(docSnap.data().src);
                setUser(docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        getFirstUserFromFirebase();
    }, []);
    return (
        <div style={{ padding:'50px' }}>
            <h1>Contact</h1>
            <p>This data is from server wait to load:</p>
            {user && <>
                <p>Your name is: {user?.name}</p>
                <p>Your age is: {user?.age}</p>
            </>
            }
        </div>
    );
};

export default Contact