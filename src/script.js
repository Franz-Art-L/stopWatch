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

class StopWatch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timePassedInMilliSeconds: 0
        }

        this.timer = null;

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
    };

    start() {
        if(!this.timer) {
            let startTime = Date.now();
            this.timer = setInterval( () => {
                const stopTime = Date.now();
                const timePassedInMilliSeconds = stopTime - startTime + this.state.timePassedInMilliSeconds;

                this.setState({
                    timePassedInMilliSeconds,
                })

                startTime = stopTime;
            }, 250);
        }
    }

    stop() {
        window.clearInterval(this.timer);
        this.timer = null;
    }

    reset() {
        this.stop();
        this.setState({
            timePassedInMilliSeconds: 0,
        });
    };

    render() {
        return(
            <div>
                <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>
                    {Math.floor(this.state.timePassedInMilliSeconds / 1000)}s
                </h2>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-primary mr-2" onClick={this.start}>START</button>
                        <button className="btn btn-outline-danger mr-2" onClick={this.stop}>STOP</button>
                        <button className="btn btn-outline-warning" onClick={this.reset}>RESET</button>
                    </div>
                
            </div>
        )
    }

}


const App = () => {
    return (
        <Template/>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));