import { Fragment } from "react";

function Skills() {

    return <Fragment>
        <div id="skill" className="container-fluid">
            <p className="small text-center mt-5">why ?</p>
                <h2 className="skillhead">SKILLS</h2>
            <div className="row justify-content-center">
                <div className="col  box">
                    <h3>Languages</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>PYTHON</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="col  box">
                    <h3>Framework</h3>
                    <ul>
                        <li>Django</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="col  box">
                    <h3>Tools</h3>
                    <ul>
                        <li>Git</li>
                        <li>MYSQL</li>
                        <li>npm</li>
                        <li>Figma</li>
                        <li>Sass</li>
                        <li>Docker</li>
                    </ul>
                </div>
            </div>
        </div>
    </Fragment>
}
export default Skills;