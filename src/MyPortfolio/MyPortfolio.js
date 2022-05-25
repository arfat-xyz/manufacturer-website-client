import React from "react";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  return (
    <div className="grid items-center justify-center my-8">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div className="grid items-center justify-center md:grid-cols-2">
            <div class="avatar justify-center">
              <div class="w-2/3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  className="w-100 bg-primary"
                  src="https://arfat.xyz/img/arfat-rahman-no-bg-img.png"
                />
              </div>
            </div>
            <div className=" md:my-0 ml-10">
              <div>
                <h1 className="text-5xl">Arfatur Rahman</h1>
                <h2 className="text-3xl">Font-end developer</h2>
              </div>
              <div className="mt-5 md:mt-0">
                <strong>Phone:</strong>+880 01819439292
              </div>
              <div>
                <strong>Email:</strong>arfatrahman08@gmail.com
              </div>
              <div>
                <strong>LinkeIn: </strong>
                <Link
                  className="text-blue-600"
                  to={"https://www.linkedin.com/in/arfatxyz/"}
                >
                  Arfatur Rahman
                </Link>
              </div>
              <div>
                <strong>Github: </strong>
                <Link
                  className="text-blue-600"
                  to={"https://github.com/arfat-beep"}
                >
                  Arfatur Rahman
                </Link>
              </div>
              <div>
                <strong>Website: </strong>
                <Link className="text-blue-600" to={"https://arfat.xyz/"}>
                  Arfatur Rahman
                </Link>
              </div>
              <div>
                <strong>Chattogram, Bangladesh </strong>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl uppercase">professional objective</h3>
            <div className="divider mt-0"></div>
            Excel in the corporate sector through professional development.
          </div>
          <div>
            <h3 className="text-2xl uppercase">professional objective</h3>
            <div className="divider mt-0"></div>
            <strong>EXPERT IN :</strong>
            <br />
            <p className="ml-12">
              HTML5, CSS3, Bootstrap, Tailwind, JavaScript, ES6, Json, NodeJS,
              Firebase, ExpressJS, Material-UI, Rest API, ReactJS, MongoDB,
              Git,Github, WordPress, Elementor.
            </p>
            <strong className="uppercase">compatible with :</strong>
            <br />
            <p className="ml-12">Npm, Heroku, Netlify, Axios, Php, MySql</p>
            <strong className="uppercase">tools :</strong>
            <br />
            <p className="ml-12">
              Vs code, Browser dev tools, Windows CMD, CodeBlocks, Xampp, Git
              command
            </p>
          </div>
          <div>
            <h3 className="text-2xl uppercase">projects</h3>
            <div className="divider mt-0"></div>
            <div className="ml-10">
              <ol className="list-decimal">
                <li>
                  <strong>Doctor's chamber</strong>
                  <span className="ml-12 text-blue-600">
                    <Link to={"https://doctor-chamber-95637.web.app/"}>
                      Live Site
                    </Link>
                  </span>
                  <span className="ml-12 text-blue-600">
                    <Link to={"https://doctor-chamber-95637.web.app/"}>
                      Github
                    </Link>
                  </span>
                  <br />
                  <ol className="list-disc ml-10">
                    <li>
                      Login by email and password system also Github and Google
                      authentication system
                    </li>
                    <li>Require Authentication system</li>
                    <li>Email Verification system</li>
                    <li>Responsive</li>
                  </ol>
                </li>
                <li>
                  <strong>Inventor car</strong>
                  <span className="ml-12 text-blue-600">
                    <Link to={"https://carinventory-f3fb4.web.app/"}>
                      Live Site
                    </Link>
                  </span>
                  <span className="ml-12 text-blue-600">
                    <Link
                      to={"https://github.com/arfat-beep/car-inventory-client"}
                    >
                      Client side
                    </Link>
                  </span>
                  <span className="ml-12 text-blue-600">
                    <Link
                      to={"https://github.com/arfat-beep/car-inventory-server"}
                    >
                      Server side
                    </Link>
                  </span>
                  <br />
                  <ol className="list-disc ml-10">
                    <li>Responsive website</li>
                    <li>Use toast to show errors and other message</li>
                    <li>Use firebase to secure login</li>
                    <li>Use MongoDB for database</li>
                    <li>Use Heroku to fetch data from MongoDB</li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 className="text-2xl uppercase">EDUCATION</h3>
            <div className="divider mt-0"></div>
            <div className="grid grid-cols-5">
              <div>Graduating 12/2022</div>
              <div className="ml-12 col-span-4">
                <strong>Bachelor of Computer Science and Engineering </strong>
                <br />
                Port City International University, South Khulshi, Chittagong
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl uppercase">language</h3>
            <div className="divider mt-0"></div>
            <ol className="list-decimal ml-12">
              <li>Bangla - Native</li>
              <li>English - Comfortable</li>
              <li>Hindi - Comfortable</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
