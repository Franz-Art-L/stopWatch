// Navbar
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        STOP WATCH NAVBAR
        </nav>
    )
}

// FOOTER
const Footer = () => {
    return(
        <div className="border-bottom py-2 my-3 text-center">
             by <a href="https://confident-murdock-8e5bba.netlify.app/" target="_blank" rel="noopener noreferrer">Francis Artemio Landia</a> 2022
        </div>
    );
};

// TEMPLATE
const Template = props => {
    return (
        <div>
            <Navbar/>
                <div className="container">
                    <div className="row overflow">
                        <div className="col-12">
                            <StopWatch/>
                            {props.children}
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>

    )
}

class StopWatch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timePassedInMilliSeconds: 0
        }
    };

    render() {
        return(
            <div>
                <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>
                    {Math.floor(this.state.timePassedInMilliSeconds / 1000)}s
                </h2>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-primary mr-2">START</button>
                        <button className="btn btn-outline-danger mr-2">STOP</button>
                        <button className="btn btn-outline-warning">RESET</button>
                    </div>
                
            </div>
        )
    }

}

const App = () => {
    return (
        <React.Fragment>
        <Template/>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));