import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <>
    <div className="">
      <ul class="nav nav-tabs bg-dark" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active text-gray-50"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-gray-50"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Profile
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-gray-50"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Contact
          </a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
        </div>
      </div>
      </div>
    </>
  );
}
