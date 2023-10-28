// // 


// // src/GoogleCallback.js

// import React, {useState, useEffect} from 'react';
// import {useLocation} from "react-router-dom";
// import { useNavigate, useParams } from "react-router-dom";
// const navigate = useNavigate();


// function GoogleCallback() {

//     const [loading, setLoading] = useState(true);
//     const [data, setData] = useState({});
//     const [user, setUser] = useState(null);
//     const location = useLocation();

//     // On page load, we take "search" parameters 
//     // and proxy them to /api/auth/callback on our Laravel API
//     useEffect(() => {

//         fetch(`http://localhost:8000/api/auth/callback${location.search}`, {
//             headers : {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         })
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 setLoading(false);
//                 setData(data);
//             });
//     }, []);

//     // Helper method to fetch User data for authenticated user
//     // Watch out for "Authorization" header that is added to this call
//     function fetchUserData() {
//         fetch(`http://localhost:8000/api/user`, {
//             headers : {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//                 'Authorization': 'Bearer ' + data.access_token,
//             }
//         })
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 setUser(data);
//                 setLoading(false);
//                 console.log("testttttttt88888888888888888888888");
//                 console.log(data);
//                 // localStorage.setItem()
//             });
//     }
   

//     if (loading) {
//         return <DisplayLoading/>
//     } else {
//         if (user != null) {
//              console.log(data);
//              console.log();
//             return <DisplayData data={user}/>

//         } else {
//             return (
//               <div>
//                 <DisplayData data={data} />
//                 <div style={{ margin: "250px", width: "350px" }}>
//                   <button onClick={fetchUserData}>Fetch User</button>
//                 </div>
//               </div>
//             );
//         }
//     }
// }

// function DisplayLoading() {
//     return <div>Loading....</div>;
// }

// function DisplayData(data) {
//     return (
//       <div style={{ margin: "250px", width: "350px" }}>
//         <samp>{JSON.stringify(data, null, 2)}</samp>
//       </div>
//     );
// }

// export default GoogleCallback;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function GoogleCallback() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate(); // Hook to enable navigation

    // On page load, we take "search" parameters
    // and proxy them to /api/auth/callback on our Laravel API
    useEffect(() => {
        fetch(`http://localhost:8000/api/auth/callback${location.search}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setData(data);
                console.log(data.user.id);
                localStorage.setItem('user_id', data.user.id);
            });
    }, []);

    // Helper method to fetch User data for authenticated user
    // Watch out for "Authorization" header that is added to this call
    function fetchUserData() {
        fetch(`http://localhost:8000/api/user`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + data.access_token,
            },
        })
            .then((response) => {
                response.json();
                // console.log('respnseeeeeeeee');
                // console.log(response);
                // console.log(JSON.stringify(response, null, 2));
            })
            .then((data) => {
                setUser(data);
                setLoading(false);
                // console.log('dataaaaaaaa');
                // console.log(data);
                // console.log(JSON.stringify(data, null, 2));
                navigate('/package/1');
                // localStorage.setItem('user_id', data)
            });
    }
    fetchUserData();
 

    if (loading) {
        return <DisplayLoading />;
    } else {
        if (user != null) {
            test(user)
            return <DisplayData data={user} />;
        } else {
            return (
                <div>
                    <DisplayData data={data} />
                    <div>
                        <button onClick={fetchUserData}>Fetch User</button>
                    </div>
                </div>
            );
        }
    }
}

function DisplayLoading() {
    return <div>Loading....</div>;
}

function DisplayData(data) {
    // test(data)
    return (
        <div>
            <samp>{JSON.stringify(data, null, 2)}</samp>
        </div>
    );
}

export default GoogleCallback;

