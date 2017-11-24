import React from 'react';

class App extends React.Component {
    render() {
        // Working on the conditional statements
        var i = 1;

        // Styling
        var myStyle = {
            fontSize: 50,
            color: 'red',
            fontFamily: 'Monaco'
        }
        return (
            <div>
                <h1 style = {myStyle}>Welcome to the world of coding</h1>
                <h2>A whole new world</h2>
                <p data-myAttribute="somevalue">I can show you the world, take you wonder by wonder. Over mountains and under on a magic carpet ride. </p>

                {/* Quick math */}
                <p>{4 + 4}</p>

                 {/* Working on the conditional statements i.e Ternary expressions*/}
                <p>{i == 1 ? 'True! :)' : 'False:('}</p>
            </div>
        );
    }
}

export default App;