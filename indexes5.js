"use strict";

(function () {

    // initialize firebase
    var config = {
        apiKey: "AIzaSyC1PKNs7ifneJGXEib55zvkMHc93JD4r4E",
        authDomain: "authtest-54513.firebaseapp.com",
        databaseURL: "https://authtest-54513.firebaseio.com",
        projectId: "authtest-54513",
        storageBucket: "authtest-54513.appspot.com",
        messagingSenderId: "1081226378409"
    };
    firebase.initializeApp(config);

    // get the login form elements from HTML
    var txtEmail = document.getElementById('txtEmail');
    var txtPassword = document.getElementById('txtPassword');
    var btnLogin = document.getElementById('btnLogin');
    var btnSignUp = document.getElementById('btnSignUp');
    var btnLogout = document.getElementById('btnLogout');

    // add login event
    btnLogin.addEventListener('click', function (e) {
        // get email and pass
        var email = txtEmail.value;
        var pass = txtPassword.value;
        var auth = firebase.auth();
        // sign in 
        var promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(function (e) {
            return console.log(e.message);
        });
    });

    // add signup event. the signup button sends user email and pass to firebase
    btnSignUp.addEventListener('click', function (e) {
        // get email and pass
        // TODO: validate email - check it is real
        var email = txtEmail.value;
        var pass = txtPassword.value;
        var auth = firebase.auth();
        // sign in 
        var promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(function (e) {
            return console.log(e.message);
        });
    });

    // show logout button when user is logged in
    // TODO: make sure the login form clears the credentials on logout
    btnLogout.addEventListener('click', function (e) {
        firebase.auth().signOut();
    });

    // realtime authentication listener
    firebase.auth().onAuthStateChanged(function (firebaseUser) {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
            btnSignUp.classList.add('hide');
            btnLogin.classList.add('hide');
        } else {
            console.log('not logged in');
            btnLogout.classList.add('hide');
            btnSignUp.classList.remove('hide');
            btnLogin.classList.remove('hide');
        } // end if statement
    }); // end function
})();