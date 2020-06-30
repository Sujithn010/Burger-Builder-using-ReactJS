// import React from 'react';
// import Aux from '../../../hoc/Aux';
// import Button from '../../UI/Button/Button';
// const orderSummary = (props) => {
//     const ingrerdientSumary = Object.keys(props.ingrerdients)
//         .map(igKey => {
//             return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingrerdients[igKey]}</li>
//         });
//     return(
//         <Aux>
//             <h3>Your Order</h3>
//             <p>A delicious burger with the following ingredients:</p>
//             <ul>
//                 {ingrerdientSumary}
//             </ul>
//             <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
//             <p>Continue to checkout?</p>
//             <Button btnType="Success" clicked={props.purchaseContinued} >CONTINUE</Button>
//             <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
//         </Aux>
//     )
// }

// export default orderSummary;

import React from 'react';

import Aux from '../../../hoc/Auxx/Aux';
import Button from '../../UI/Button/Button';
//converted to class
const orderSummary = ( props ) => {
    const ingredientSummary = Object.keys( props.ingredients )
        .map( igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li> );
        } );

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;