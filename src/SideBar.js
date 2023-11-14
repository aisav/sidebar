import React, { useRef, useState } from "react";

export default function SideBar({ opened }) {
  return (
    <nav class={opened ? "main-menu active" : "main-menu"}>
      <ul>
        <li>
          <a href="https://jbfarrow.com">
            <i class="fa fa-home fa-2x"></i>
            <span class="nav-text">Daniel</span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="#">
            <i class="fa fa-globe fa-2x"></i>
            <span class="nav-text">Search</span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="#">
            <i class="fa fa-comments fa-2x"></i>
            <span class="nav-text">Home</span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="#">
            <i class="fa fa-camera-retro fa-2x"></i>
            <span class="nav-text">TV Shows</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-film fa-2x"></i>
            <span class="nav-text">Movies</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-book fa-2x"></i>
            <span class="nav-text">Genres</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-cogs fa-2x"></i>
            <span class="nav-text">Watch Later</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-map-marker fa-2x"></i>
            <span class="nav-text">Member Map</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-info fa-2x"></i>
            <span class="nav-text">Documentation</span>
          </a>
        </li>
      </ul>

      <ul class="logout">
                <li>
          <a href="#">
            <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text">lANGUAGE</span>
          </a>
        </li>
                <li>
          <a href="#">
            <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text">GET HELP</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text">EXIT</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
