const {useState, useRef, useEffect, ReactDOM} = React;

// Navbar
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
       STOPWATCH
        </nav>
    )
}

// FOOTER
const Footer = () => {
    return(
        <div className="py-2 my-4 text-center" style={{color: 'white'}}>
             <p>ReactJs practice by: </p>

             <p><a href="https://confident-murdock-8e5bba.netlify.app/" target="_blank" rel="noopener noreferrer">Francis Artemio Landia</a></p>
             <span>2022</span>
        </div>
    );
};

// TEMPLATE
const Template = props => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

const StopWatch = () => {
    const [timePassedInMilliSeconds, setTimePassedInMilliSeconds] = useState(0);

    const timer = useRef(null);

    return(
        <div>

            <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>

            {Math.floor(this.state.timePassedInMilliSeconds / 1000)} s

            </h2>

            <div className="d-flex justify-content-center">

            <button className="btn btn-outline-primary mr-2" onClick={this.start}>

                start

            </button>

            <button className="btn btn-outline-danger mr-2" onClick={this.stop}>

                stop

            </button>

            <button className="btn btn-outline-warning" onClick={this.reset}>

                reset

            </button>

            </div>

        </div>
    )
}

const App = () => {
    return (
        <Template/>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));