import React from "react";




function LoginNav() {
    return (
      <div className="nav-bar"> 
        <nav>
            <h1 className="login-header">Secret Family Recipes</h1>
            <a href="#"><button className="nav-button">Sign Up</button></a> {/* will link to sign up page */}
        </nav>
      </div>
    );
}

export default LoginNav;