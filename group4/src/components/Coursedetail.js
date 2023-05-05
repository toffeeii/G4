import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function Coursedetail() {
  const { id } = useParams();
  const navigate = useNavigate();
<<<<<<< HEAD

=======
>>>>>>> a06d63368a04dbcd4533382cbdfdfee1073e96d0
  return (
    <div className="App-header">
      {/* course 1 */}
      {id === "1" && (
<<<<<<< HEAD
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
=======
        <div className="course ">
          <div className="card bg-black pt-5 ">
            <div className="row">
              <div className="col-md-1 "></div>
              <div className="col-md-5 card card-info pt-3 text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXv33v21tavSn4Kgv_0MljV3ufbV3j5GVpzcLCRYzqtN341_MCAOpOLMCkuyWIm_t2iHE&usqp=CAU"
                  alt="ml"
                  height="100"
                  width="800"
                  className="card card-transparent "
                />
                <div className="pt-5 text-center">
                  <h4 className="">
                    The Complete Front-End Web Development Course
                  </h4>
                  <h4 className="">
                    Get started as a front-end web developer using HTML,
                  </h4>
                  <h4>CSS, JavaScript, jQuery, and Bootstrap!</h4>
                  <h4 className="pt-3">
                    <b> Course Duration :</b>{" "}
                    <span className="text-danger">17 Hours</span>
                  </h4>
                </div>
                <h5 className="pt-2 text-black">
                  Created by
                  <a href="https://josephdelgadillo.com/"> Joseph Delgadio</a>
                </h5>
                <div className="rating pb-3 text-black text-center">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
              </div>
              <div className="col-md-1 pt-3"></div>
              <div className="col-md-4 pt-3 ">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample "
                >
                  <div class="accordion-item ">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed demo border text-white text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        What you will learn!!!
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <h6 className="   text-dark p-3 shadow ">
                          Build a simple HTML text site
                        </h6>
                        <h6 className="  text-dark p-3 shadow">
                          Style web pages using CSS
                        </h6>
                        <h6 className="   text-dark p-3 shadow">
                          Program websites with JavaScript
                        </h6>
                        <h6 className="  p-3 shadow">
                          Build a Pipboy using Bootstrap
                        </h6>
                        <h6 className="  p-3 shadow">
                          Build and publish a Google Chrome Extension
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed demo border text-white text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        HTML BASICS
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow d-flex ">
                            <h6 className="  text-dark mt-2">
                              HTML Documents, Heading,Paragraph
                            </h6>
                            <button
                              className="btn btn-sm btn-outline-dark"
                              onClick={() => navigate("/view/1")}
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow d-flex justify-content-between p-2 ">
                            <h6 className="  text-dark mt-2 ">
                              HTML Links & Image
                            </h6>
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow d-flex justify-content-between p-2">
                            <h6 className="  text-dark mt-2  ">HTML Forms </h6>

                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow shadow d-flex justify-content-between p-2 ">
                            <h6 className="  text-dark mt-2  ">HTML Tables </h6>

                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">
                              HTML Graphics{" "}
                            </h6>

                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed demo border text-white text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        CSS BASICS
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">
                              CSS Syntax &Three Type Of CSS
                            </h6>
                        
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">
                              CSS Selector & Background
                            </h6>
                        
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">
                              Border,Margin,Padding{" "}
                            </h6>
                          
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">
                              Pseudo-classes & Elements
                            </h6>
                         
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">Grid & Flex </h6>
                          
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
>>>>>>> a06d63368a04dbcd4533382cbdfdfee1073e96d0
                    </div>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
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
=======
          </div>
        </div>
      )}
      {/* Course 2 */}
      {id === "2" && (
        <div className="course ">
          <div className="card bg-black pt-5 ">
            <div className="row">
              <div className="col-md-1 "></div>
              <div className="col-md-5 card card-info p-3 text-center">
                <img
                  src="https://codecondo.com/wp-content/uploads/2017/09/back-end-developer.jpg"
                  alt="backend"
                  // height="200"
                  // width="300"
                  className="card card-transparent"
                />
                <div className="pt-5">
                  <h4 className="">
                    React, NodeJS, Express & MongoDB - The MERN Fullstack Guide
                  </h4>
                  <h4 className="">
                    Build fullstack React.js applications with Node.js,
                    Express.js &
                  </h4>
                  <h4> MongoDB (MERN) with this project-focused course.!</h4>
                  <h4 className="pt-3">
                    <b> Course Duration :</b>{" "}
                    <span className="text-danger">19 Hours</span>
                  </h4>
                </div>
                <h5 className="pt-2 text-black">
                  Created by
                  <a href="https://www.udemy.com/user/manuel-lorenz/">
                    {" "}
                    Manuel Lorenz
                  </a>
                </h5>
                <div className="rating pb-3 text-black">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
              </div>
              <div className="col-md-1 pt-3"></div>
              <div className="col-md-4 pt-3 ">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample "
                >
                  <div class="accordion-item ">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed demo text-white border text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        What you will learn!!!
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <h6 className="text-dark p-3 shadow ">
                          Introduction & Getting Started
                        </h6>
                        <h6 className=" text-dark p-3 shadow">Install & setup </h6>
                        <h6 className=" text-dark p-3 shadow">Basic React</h6>
                        <h6 className=" text-dark p-3 shadow">Basic NodeJS & Express</h6>
                        <h6 className=" text-dark p-3 shadow">MongoDB</h6>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed demo text-white text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Introduction & Getting Started
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2 ">
                              Server setup with Express.js and Node.js
                            </h6>
                          
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">
                              Database management with MongoDB
                            </h6>
                          
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    ></div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    ></div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    ></div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed demo border text-white text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Basic React
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">
                              Create React App & Folder Structure
                            </h6>
                         
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">
                              Class & Functional Components
                            </h6>
                        
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">
                              Props, State & Events
                            </h6>
                        
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">
                              React Forms ,Router & Links
                            </h6>
                         
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">React Hooks</h6>
                        
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
>>>>>>> a06d63368a04dbcd4533382cbdfdfee1073e96d0
                    </div>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
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
                
=======
          </div>
         
        </div>
      )}
      {/* Course 3 */}
      {id === "3" && (
        <div className="course ">
          <div className="card bg-black pt-5 ">
            <div className="row">
              <div className="col-md-1 "></div>
              <div className="col-md-5 card card-info p-3 text-center">
                <img
                  src="https://mindphp.com/images/Hosting_Directadmin/Webmail/Machine-Learning.jpg"
                  alt="ml"
                  // height="200"
                  // width="300"
                  className="card card-transparent"
                />
                <div className="pt-5">
                  <h4 className="">Complete Machine Learning Using Python</h4>
                  <h4 className="">
                    Learn to create Machine Learning Algorithms in
                  </h4>
                  <h4> Python and R from two Data Science experts.</h4>
                  <h4> Code templates included. </h4>
                  <h4 className="pt-3">
                    <b> Course Duration :</b>{" "}
                    <span className="text-danger">13 Hours</span>
                  </h4>
                </div>
                <h5 className="pt-2 text-black">
                  Created by
                  <a href="https://josephdelgadillo.com/"> Joseph Delgadio</a>
                </h5>
                <div className="rating pb-3 text-black">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
>>>>>>> a06d63368a04dbcd4533382cbdfdfee1073e96d0
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
<<<<<<< HEAD
                        class="accordion-button collapsed demo border text-white text-small"
=======
                        class="accordion-button collapsed demo border text-white text-lg"
>>>>>>> a06d63368a04dbcd4533382cbdfdfee1073e96d0
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
<<<<<<< HEAD
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
=======
                        <h6 className="text-dark shadow  p-3 ">
                          Introduction to Machine Learning
                        </h6>
                        <h6 className="  text-dark shadow p-3">
                          Basic python programming
                        </h6>

                        <h6 className=" text-dark shadow p-3">ML Concepts</h6>
                        <h6 className=" text-dark  shadow p-3">Tenser Flow</h6>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed demo text-white border text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        ML Python Concepts
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">Python Numpy</h6>
                         
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">
                              Python Matplotlib
                            </h6>
                        
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">
                              Python Pandas
                            </h6>

                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button border collapsed demo text-white text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        ML Concepts
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2 ">
                              ML Linear Graph & Plots
                            </h6>

                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">
                              ML Training & Testing
                            </h6>

                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">
                              ML Learning & Prediction
                            </h6>

                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                            <h6 className="  text-dark mt-2  ">
                              ML Data Cluster & Regression
                            </h6>

                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    ></div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingThree">
                        <button
                          class="accordion-button collapsed demo border text-white text-lg"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Tenser Flow
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <div className="row">
                            <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                              <h6 className="  text-dark mt-2  ">
                                Tenser Flow Operations
                              </h6>

                              <a
                                href="/Course"
                                className="btn btn-sm btn-outline-dark"
                              >
                                {" "}
                                View
                              </a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                              <h6 className="  text-dark mt-2  ">
                                Tenser Flow Models
                              </h6>

                              <a
                                href="/Course"
                                className="btn btn-sm btn-outline-dark"
                              >
                                {" "}
                                View
                              </a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 d-flex justify-content-between p-2 shadow">
                              <h6 className="  text-dark mt-2  ">
                                Tenser Flow Visors
                              </h6>

                              <a
                                href="/Course"
                                className="btn btn-sm btn-outline-dark"
                              >
                                {" "}
                                View
                              </a>
                            </div>
                          </div>
                        </div>
>>>>>>> a06d63368a04dbcd4533382cbdfdfee1073e96d0
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
