import React,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route, Redirect} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';
class Checkout extends Component{

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    render(){
        let summary = <Redirect to='/'/>
        if(this.props.ings){
            const purchaseRedirect = this.props.purchased?<Redirect to='/'/>:null;
            summary = (
                <div>
                    {purchaseRedirect}
                    <CheckoutSummary ingredients={this.props.ings}
                                 checkoutContinued={this.checkoutContinuedHandler}
                                 checkoutCancelled={this.checkoutCancelledHandler}
                    />
                    <Route path={this.props.match.path+'/contact-data'}
                       //render={(props)=>(<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice}  {...props}/>)}
                       component={ContactData} 
                    />
                </div>
            )
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return{
        ings:state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);
