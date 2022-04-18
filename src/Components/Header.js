import React from "react";
import { ReactComponent as Logo } from '../Images/Quiz-Logo-V3-Web.svg';
import '../App.css';

export default function Header() {
    return (
    <div class="nav-container">
        <nav>
            <div class="title-and-logo">
                <h2>Nate's Gamer Quiz</h2>
                <Logo class="logo-style"/>
            </div>
        </nav>
        </div>
    );
}