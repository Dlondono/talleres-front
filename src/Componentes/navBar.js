import React from 'react';

export default function navbar() {
    return(
        <div class="container">
            <nav class="navbar" role="navigation" aria-label="main navigation">

            <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item is-active">
                Home
                </a>
                <a class="navbar-item">
                Blog Posts
                </a>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                <a href="#">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="#">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                    <i class="fas fa-rss-square"></i>
                </a>
                </div>
            </div>
            </div>
            </nav>
        </div>
    )
}