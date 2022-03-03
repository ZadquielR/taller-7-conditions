import {UserState, useState} from "react";


function UserStatus() {
    const [isLoggedIn, setIsloggedIn] = useState (false);
    const [userName] = useState ("David");
    
    // if / else
    // if (isLoggedIn) {
    //     return(
    //         <div>
    //             Bienvenido Usuario
    //         </div>
    //     );
    //     } else {
    //       return(
    //         <div>
    //             Login
    //         </div>
    //       );
    //     }


    // if ternario

    //     return (
    //         isLoggedIn ? 
    //         <div>
    //             Welcome {userName}
    //         </div>
    //     :
    //         <div>
    //             Login
    //         </div>
    //     );
    // 
         
// variable 

    // let status; 
    //     if (isLoggedIn) {

    //         status = <div>Welcome {userName}</div>
    //     } else {
    //         status = <div>Login</div>
    //     }
    //     return status;


// logic operator

// return (isLoggedIn && (
//     <div>
//         welcome {userName}
//     </div>
// )) || (
//     <div>
//         Login
//     </div>
// );

// in line 

return (
   <div>
  {isLoggedIn ? (
      <span>Welcome {userName}</span>
  ):(
      <span>Login</span>
  )}
  </div>
 );

}
export default UserStatus;