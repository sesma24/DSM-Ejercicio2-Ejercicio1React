import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>Carlos Lumbreras</p>
            </div>
        )
    }

}

export default Header;