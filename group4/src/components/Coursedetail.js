import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function Coursedetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="App-header">
      {/* course 1 */}
      {id === "1" && (
        <div className="text-white mt-5 p-5">
          <h1 className="mt-5 text-danger ">Frontend Developer</h1>
          <p className="p-3">
            Step by step guide to becoming a modern frontend developer in 2023
          </p>

          {/* row 2 */}
          <div className="row p-5 ">
            <div className="col-md-4 pt-3 ">
              <div
                class="accordion accordion-flush"
                id="accordionFlushExample "
              >
                <div class="accordion-item ">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed demo border text-white text-small"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Internet
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <button className="btn  shadow btn-small">
                        How does internet works
                      </button>
                      <button className="btn  shadow btn-small">
                        What is HTTP?
                      </button>
                      <button className="btn  shadow btn-small">
                        Browser and How they work?
                      </button>

                      <button className="btn  shadow btn-small">
                        What is hosting?
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end of row2 */}
            <div className="col-md-4 pt-3 ">
              <div
                class="accordion accordion-flush"
                id="accordionFlushExample1 "
              >
                <div class="accordion-item ">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed demo border text-white text-small"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      HTML
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample1"
                  >
                    <div class="accordion-body">
                      <button className="btn  shadow btn-small">
                        HTML Basics
                      </button>
                      <button className="btn  shadow btn-small">
                        HTML5 Semantic Elements
                      </button>
                      <button className="btn  shadow btn-small">
                        HTML Forms and Validation
                      </button>
                      <button className="btn  shadow btn-small">
                        Convention and Best Practices
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end of row2 */}
            <div className="col-md-4 pt-3 ">
              <div
                class="accordion accordion-flush"
                id="accordionFlushExample1 "
              >
                <div class="accordion-item ">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed demo border text-white text-small"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      CSS
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample1"
                  >
                    <div class="accordion-body">
                      <button className="btn  shadow btn-small">
                        CSS Basics
                      </button>
                      <button className="btn  shadow btn-small">
                        CSS Selectors
                      </button>
                      <button className="btn  shadow btn-small">
                        CSS Positioning
                      </button>
                      <button className="btn  shadow btn-small">
                        CSS Grid and Flexbox
                      </button>
                    </div>
                  </div>
                
                </div>
              </div>
              {/* end of accordian */}
            </div>
          </div>
          {/* end of 1st row  div */}
          <div className="row p-5 ">
            <div className="col-md-4 pt-3 ">
              <div
                class="accordion accordion-flush"
                id="accordionFlushExample1 "
              >
                <div class="accordion-item ">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed demo border text-white text-small"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      JavaScript
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample1"
                  >
                    <div class="accordion-body">
                      <button className="btn  shadow btn-small">
                        JavaScript Syntax & Basics Constructs
                      </button>
                      <button className="btn  shadow btn-small">
                        DOM Manipulation & Events
                      </button>
                      <button className="btn  shadow btn-small">
                        JavaScript Concepts
                      </button>
                      <button className="btn  shadow btn-small">
                        Fetch API & Ajax
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample1 "
                >
                  <div class="accordion-item ">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed demo border text-white text-small"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        JavaScript Framework
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample1"
                      className="pb-5"
                    >
                      <div class="accordion-body">
                        <h6 className="text-danger">
                          Can Choose any of the following
                        </h6>
                        <button className="btn  shadow btn-small">
                          React JS
                        </button>
                        <button className="btn  shadow btn-small">
                          Angular JS
                        </button>
                        <button className="btn  shadow btn-small">
                          {" "}
                          Next JS{" "}
                        </button>
                        <button className="btn  shadow btn-small">
                          Vue JS
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-3 ">
              <div
                class="accordion accordion-flush"
                id="accordionFlushExample1 "
              >
                <div class="accordion-item ">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed demo border text-white text-small"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Version Control Systems
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample1"
                  >
                    <div class="accordion-body">
                      <button className="btn  shadow btn-small">
                        Repo Hosting Services
                      </button>
                      <h6 className="text-danger mt-3">Can create any one </h6>
                      <button className="btn  shadow btn-small">Git hub</button>
                      <button className="btn  shadow btn-smallall">
                        Git Lab
                      </button>
                      <button className="btn  btn-smallall shadow">
                        Bit Bucket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* sub accordian */}
              <div
                class="accordion accordion-flush"
                id="accordionFlushExample1 "
              >
                <div class="accordion-item ">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed demo border text-white text-small"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Web Security Knowledge
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample1"
                  >
                    <div class="accordion-body">
                      <h6 className="text-danger ">
                        Get Least Knowledge about this{" "}
                      </h6>
                      <button className="btn  shadow btn-small">
                        Https Basics
                      </button>
                      <button className="btn  shadow btn-small">
                        Content Security Policy
                      </button>
                      <button className="btn  shadow btn-small">CORS</button>
                      <button className="btn  shadow btn-small">
                        OWASP Security Risk
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of sub accordian */}
            </div>
            <div className="col-md-4 pt-3 ">
              <div
                class="accordion accordion-flush"
                id="accordionFlushExample1 "
              >
                <div class="accordion-item ">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed demo border text-white text-small"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Testing
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample1"
                  >
                    <div class="accordion-body">
                      <button className="btn  shadow btn-small">Jest</button>
                      <button className="btn  shadow btn-small">Cypress</button>
                      <button className="btn  shadow btn-small">
                        react-testing-library
                      </button>
                      <button className="btn  shadow btn-small">
                        Playwright
                      </button>
                    </div>
                  </div>
                </div>
                  {/* sub acc */}
                  <div class="accordion-item ">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed demo border text-white text-small"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      UI Frameworks
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample1"
                  >
                    <div class="accordion-body">
                      <button className="btn  shadow btn-small">
                        Bootstrap
                      </button>
                      <button className="btn  shadow btn-small">
                        Tailwind CSS
                      </button>
                      <button className="btn  shadow btn-small">
                      Material UI
                      </button>
                      <button className="btn  shadow btn-small">
                       Mantine
                      </button>
                    </div>
                  </div>
                   {/* end of sub acc */}
              </div>
              
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
export default Coursedetail;
