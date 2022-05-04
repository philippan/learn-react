// pages.js

import React from "react"
import {Link, useLocation, Outlet} from "react-router-dom";
export function Home() {
    return (
        <div>
            <h1>[Company Website] or Funco</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    )
}

export function Whoops404() {
        let location = useLocation();
        console.log(location);
        return(
            <div>
                <h1>Resource not found at {location.pathname}!</h1>
                <p>Try one that does!</p>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="events">Events</Link>
                    <Link to="contact">Contact</Link>
                </nav>
            </div>
        );
}
export function About() {
    return (
        <div>
            <h1>[About] nothing</h1>
            <Outlet />
        </div>
    )
}

export function Services() {
    return (
        <div>
            <h2>Our Services</h2>
        </div>
    );
}

export function CompanyHistory() {
    return (
        <div>
            <h2>CompanyHistory</h2>
        </div>
    );
}

export function Location() {
    return (
        <div>
            <h2>Our Location</h2>
        </div>
    );
}
export function Events() {
    return (
        <div>
            <h1>[Events] all boring</h1>
        </div>
    )
}

export function Contact() {
    return ( 
        <div>
            <h1>[Contact] don't even</h1>
        </div>
    )
}