var _this = this;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _React = React,
    useState = _React.useState,
    useRef = _React.useRef,
    useEffect = _React.useEffect,
    ReactDOM = _React.ReactDOM;

// Navbar

var Navbar = function Navbar() {
    return React.createElement(
        "nav",
        { className: "navbar navbar-expand-md navbar-dark bg-dark" },
        "STOPWATCH"
    );
};

// FOOTER
var Footer = function Footer() {
    return React.createElement(
        "div",
        { className: "py-2 my-4 text-center", style: { color: 'white' } },
        React.createElement(
            "p",
            null,
            "ReactJs practice by: "
        ),
        React.createElement(
            "p",
            null,
            React.createElement(
                "a",
                { href: "https://confident-murdock-8e5bba.netlify.app/", target: "_blank", rel: "noopener noreferrer" },
                "Francis Artemio Landia"
            )
        ),
        React.createElement(
            "span",
            null,
            "2022"
        )
    );
};

// TEMPLATE
var Template = function Template(props) {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Navbar, null),
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "row overflow" },
                React.createElement(
                    "div",
                    { className: "col-12" },
                    React.createElement(StopWatch, null),
                    props.children
                )
            )
        ),
        React.createElement(Footer, null)
    );
};

var StopWatch = function StopWatch() {
    var _useState = useState(0),
        _useState2 = _slicedToArray(_useState, 2),
        timePassedInMilliSeconds = _useState2[0],
        setTimePassedInMilliSeconds = _useState2[1];

    var timer = useRef(null);

    return React.createElement(
        "div",
        null,
        React.createElement(
            "h2",
            { className: "border px-3 py-4 rounded my-3 mx-auto text-center", style: { maxWidth: "300px" } },
            Math.floor(_this.state.timePassedInMilliSeconds / 1000),
            " s"
        ),
        React.createElement(
            "div",
            { className: "d-flex justify-content-center" },
            React.createElement(
                "button",
                { className: "btn btn-outline-primary mr-2", onClick: _this.start },
                "start"
            ),
            React.createElement(
                "button",
                { className: "btn btn-outline-danger mr-2", onClick: _this.stop },
                "stop"
            ),
            React.createElement(
                "button",
                { className: "btn btn-outline-warning", onClick: _this.reset },
                "reset"
            )
        )
    );
};

var App = function App() {
    return React.createElement(Template, null);
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));