import React, { Component } from 'react';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Layout from './hoc/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
// import Checkout from './containers/Checkout/Checkout';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
// import Orders from './containers/Orders/Orders';
// import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

const asyncCheckout = asyncComponent(()=>{
  return import('./containers/Checkout/Checkout');
})

const asyncOrders = asyncComponent(()=>{
  return import('./containers/Orders/Orders');
})

const asyncAuth = asyncComponent(()=>{
  return import('./containers/Auth/Auth');
})

class App extends Component {
  // state = {
  //   show:true
  // };

  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({show:false})
  //   },5000);
  // }
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render () {
    let routes = (
      <Switch>
        <Route path='/auth' component={asyncAuth}/>
        <Route path='/'  exact component={BurgerBuilder}/>
        <Redirect to='/'/>
      </Switch>
    );
    if(this.props.isAuthenticated){
      routes = (
        <Switch>
            <Route path='/checkout' component={asyncCheckout}/>
            <Route path='/orders' component={asyncOrders}/>
            <Route path='/auth' component={asyncAuth}/>
            <Route path='/logout'  component={Logout}/>
            <Route path='/' exact component={BurgerBuilder}/>
            <Redirect to='/'/>
        </Switch>
      );
    }
    return (
      <div>
        <Layout>
        {/* {<Switch>
            <Route path='/checkout' component={asyncCheckout}/>
            <Route path='/orders' component={asyncOrders}/>
            <Route path='/logout'  component={Logout}/>
            <Route path='/auth' component={asyncAuth}/>
            <Route path='/' component={BurgerBuilder}/>
            {/* <Route path='/' exact component={BurgerBuilder}/> }
        /*</Switch>} */
        routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    isAuthenticated: state.auth.token!==null
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onTryAutoSignup: ()=> dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
