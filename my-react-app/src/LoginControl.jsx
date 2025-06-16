import React, { useState } from 'react';

function LoginControl() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 const handleLogin = () => setIsLoggedIn(true);
 const handleLogout = () => setIsLoggedIn(false);

 return (
 <div id="loginControl">
 {isLoggedIn ? (
 <div>
 <h1>Welcome, User!</h1>
 <button id="logoutButton" onClick={handleLogout}>
 Logout
 </button>
 </div>
 ) : (
 <div>
 <h1>Please Log In</h1>
 <button id="loginButton" onClick={handleLogin}>
 Login
 </button>
 </div>
 )}
 </div>
 );
}

export default LoginControl;
