import React from "react";
import LinkedIn from "linkedin-login-for-react";

 
class SignIn extends React.Component {
  static propTypes = {};
 
  /*
    ** @code = authorization code from linkedin api
    ** @redirectUri = redirect uri from linkedin api
    ** @error = error message sign in failed
    */
  callbackLinkedIn = (error, code, redirectUri) => {
    if (error) {
      // signin failed
    } else {
      // Obtain authorization token from linkedin api
      // see https://developer.linkedin.com/docs/oauth2 for more info
    }
  };
 
  render() {
    return (
      <LinkedIn
        clientId="86vhj2q7ukf83q"
        callback={this.callbackLinkedIn}
        scope={["r_liteprofile","r_emailaddress"]}
        text="Login With LinkedIn"
      />
    );
  }
}
 
export default SignIn;