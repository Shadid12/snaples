import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAJnfn3nFpQvl7gt8yRlZ5J49EKWOGMTkI",
    authDomain: "shadid-13de0.firebaseapp.com",
    databaseURL: "https://shadid-13de0.firebaseio.com",
    projectId: "shadid-13de0",
    storageBucket: "shadid-13de0.appspot.com",
    messagingSenderId: "271658865323"
};


export async function createCampaign(address, description) {
    firebase.initializeApp(config);
    firebase.database().ref('contracts').set({
        address: address,
        description: description
    });
    console.log('----> Done')
}