import { Fragment } from "react";
function About() {

    return <Fragment>
        <div className="container-fluid height">
            <div className="row">
                <div className="col mt-5">
                    <p className="small text-center">who ?</p>
                    <h1 className="text-center mt-3">About me</h1>
                    <div className="col mx-auto d-block">
                        <div className="about" >
                            <p className="mt-5">

                                Hello! I'm Jishnu pr, i'm a 21 years old aspiring Web Developer driven by my 
                                passion for web development and constantly exploring new technologies and seeking knowledge to become a skilled 
                                web developer. I'm horning my skills and gaining valuable experience in the field of 
                                computer science. 
                            </p>





                        </div>
                       
                        <img style={{float:"right"}} src='https://camo.githubusercontent.com/97d0c0c4209208d8ec9573c7e213e05872a9f59b703868647b559b77af601cc6/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f65382f66342f35332f65386634353334363961336563393765636433353464663436356437333931332e676966' className="aboutimg" />


                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}
export default About