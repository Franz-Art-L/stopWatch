var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Navbar
var Navbar = function Navbar() {
    return React.createElement(
        "nav",
        { className: "navbar navbar-expand-md navbar-dark bg-dark" },
        "STOP WATCH NAVBAR"
    );
};

// FOOTER
var Footer = function Footer() {
    return React.createElement(
        "div",
        { className: "border-bottom py-2 my-3 text-center" },
        "by ",
        React.createElement(
            "a",
            { href: "https://confident-murdock-8e5bba.netlify.app/", target: "_blank", rel: "noopener noreferrer" },
            "Francis Artemio Landia"
        ),
        " 2022"
    );
};

// TEMPLATE
var Template = function Template(props) {
    return React.createElement(
        "div",
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

var StopWatch = function (_React$Component) {
    _inherits(StopWatch, _React$Component);

    function StopWatch(props) {
        _classCallCheck(this, StopWatch);

        var _this = _possibleConstructorReturn(this, (StopWatch.__proto__ || Object.getPrototypeOf(StopWatch)).call(this, props));

        _this.state = {
            timePassedInMilliSeconds: 0
        };
        return _this;
    }

    _createClass(StopWatch, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    { className: "border px-3 py-4 rounded my-3 mx-auto text-center", style: { maxWidth: "300px" } },
                    Math.floor(this.state.timePassedInMilliSeconds / 1000),
                    "s"
                ),
                React.createElement(
                    "div",
                    { className: "d-flex justify-content-center" },
                    React.createElement(
                        "button",
                        { className: "btn btn-outline-primary mr-2" },
                        "START"
                    ),
                    React.createElement(
                        "button",
                        { className: "btn btn-outline-danger mr-2" },
                        "STOP"
                    ),
                    React.createElement(
                        "button",
                        { className: "btn btn-outline-warning" },
                        "RESET"
                    )
                )
            );
        }
    }]);

    return StopWatch;
}(React.Component);

var App = function App() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Template, null)
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));