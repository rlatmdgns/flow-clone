import firebase from 'firebase';

class AuthService{
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthPRovider`]();
        return firebase.auth().signInWithPopup(authProvide);
    }
}

export default AuthService;