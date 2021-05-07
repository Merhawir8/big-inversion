import React from 'react';

const PersonCard = (props) => {
    
    return (
        <div>
            <div>
                <h1>{props.lastName}, {props.firstName} </h1>
                <p>Age: {props.age}</p>
                <p>Hair Color: {props.hairColor}</p>
                {/* <button onClick={increaseAge} >Birthday Button {this.props.firstName} {this.props.lastName}</button> */}
            </div>

        </div>
    );
}
export default PersonCard;



                        //Destructuring
// const PersonCard = (props) => {
//     const {lastName, firstName, age, hairColor} = props.  //this makes it easier, but still the same functionality 
    
//     return (
//         <div>
//             <div>
//                 <h1>{lastName}, {firstName} </h1>
//                 <p>Age: {age}</p>
//                 <p>Hair Color: {props.hairColor}</p>
//                 {/* <button onClick={increaseAge} >Birthday Button {this.props.firstName} {this.props.lastName}</button> */}
//             </div>

//         </div>
//     );
// }