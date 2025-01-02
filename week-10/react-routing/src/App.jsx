//routing in react application
import "./App.css";

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";
function App() {
    return (
        <>
            <BrowserRouter>
                <NavigateToHome></NavigateToHome>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <span> </span>
                    <Link to="about">About</Link>
                    <span> </span>
                    <Link to="contact">Contact</Link>
                </ul>
            </nav>

            <div style={{ height: "80vh" }}>
                <Outlet />
            </div>

            <footer>
                <p>Copyright © 2025</p>
            </footer>
        </>
    );
}

function Home() {
    return (
        <>
            <img
                style={{ height: "70vh" }}
                src="https://images.unsplash.com/photo-1731862872903-1d39fe0c10f8?q=80&w=2108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
            />
        </>
    );
}

function About() {
    return (
        <>
            <img
                style={{ height: "70vh" }}
                src="https://plus.unsplash.com/premium_photo-1733514433512-02a7b68e92dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D"
                alt=""
            />
        </>
    );
}

function Contact() {
    return (
        <>
            <img
                style={{ height: "70vh" }}
                src="https://images.unsplash.com/photo-1734545812735-db7f12855e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
            />
        </>
    );
}

function NotFound() {
    return <h1>Page Not Found</h1>;
}
function NavigateToHome() {
    const navigate = useNavigate();
    function redirectUser() {
        navigate("/");
    }
    return (
        <>
            <button onClick={redirectUser}>go back </button>
        </>
    );
}

export default App;
