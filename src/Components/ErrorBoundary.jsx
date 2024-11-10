import React from "react";

class ErrorBoundary extends React.Component{

    state = {
        error : ''
    }

    static getDerivedStateFromError(error){
        return{
            error: error
        }
    }

    componentDidCatch(error, info){
        console.log('Error is: ', error);
        console.log('Info is:', info);
    }

    render(){
        if(this.state.error){
            return(
                <div>
                    <h2>Some Error Occured..</h2>
                    <p>Here is what happened: {this.state.error}</p>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;