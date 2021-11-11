import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    // for google auth
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;

                // save user to database
                saveUser(user.email, user.displayName, 'PUT');



                const destination = location?.state?.from || '/home';
                history.replace(destination);

                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }



    // for create new user
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                // save user to database
                saveUser(email, name, 'POST');


                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                    })
                    .catch((error) => {
                    });

                history.replace('/home');
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }




    // for sign in a user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const destination = location?.state?.from || '/home';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }




    // logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {

            })
            .finally(() => setIsLoading(false));
    }


    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])



    // for save the user in database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://limitless-everglades-29893.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }



    //    for checking is admin or not
    useEffect(() => {
        fetch(`https://limitless-everglades-29893.herokuapp.com/checkAdmin/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])


    return {
        user,
        isLoading,
        authError,
        admin,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
        setUser
    }
}

export default useFirebase;