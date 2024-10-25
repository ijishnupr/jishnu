import { Fragment } from "react";
import resume from './img/resume.pdf'
import Reveal, { AttentionSeeker, Fade, JackInTheBox, Slide } from "react-awesome-reveal";
import PeoplePerHourWidget from "./peopleperhour";


function About() {

    const handleDownload = () => {
        ;

        // Create a new anchor element
        const anchor = document.createElement('a');
        anchor.href = resume;
        anchor.target = '_blank'; // Open in a new tab
        anchor.download = 'resume.pdf'; // File name to be downloaded as

        // Simulate a click event to trigger the download
        anchor.click();

    };
    return <Fragment>
        <div className="container" style={{ height: '120vh' }}>
            <div className="row">
                <div className="col mt-5">

                    <p className="small text-center">who ?</p>
                    <AttentionSeeker>

                        <h1 className="text-center mt-3">About me</h1>
                    </AttentionSeeker>
                    
                    
                    <div className="col mx-auto d-block">
                        <div className="about" >
                            <p className="mt-5">
                                <Fade>

                                    Hello! I'm Jishnu pr, i'm a 22 years old aspiring Web Developer driven by my
                                    passion for web development and constantly exploring new technologies and seeking knowledge to become a skilled
                                    web developer. I'm horning my skills and gaining valuable experience in the field of
                                    computer science.
                                </Fade>
                            </p>





                        </div>


                        <button className="btn btn-outline-light small mt-5" onClick={handleDownload} handleDownload><small>download resume</small></button>
                        &nbsp;  &nbsp; <a className="btn btn-primary small mt-5" href='https://docs.google.com/document/d/13-HlfmmCY1FNNKLK_eawJC-ypdjmoDpZTiU_1F9qxUY/edit?usp=sharing'><small>View resume</small></a>

                       {/* &nbsp;  &nbsp;<a href=" https://www.fiverr.com/jishnu__pr" className="btn btn-outline-success small mt-5 "><small>Hire me on fiverr.</small></a> */}
                       {/* &nbsp;  &nbsp;<a href=" https://www.peopleperhour.com/freelancer/technology-programming/jishnu-pr-full-stack-developer-zaqmvqaz?ref=hireme&rfrd=10584501.2" className="btn btn-outline-warning mt-5"> <small>Hire me on peopleperhour</small></a> */}
                       

                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}
export default About