import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Experience(){

    return <Fragment>
        <div className="container">
            <div className="row">
                <div className="col mt-5">
                <p className="small text-center mt-5">where ?</p>
                <h2 id="expeirence" className="skillhead">EXPERIENCE</h2>

<VerticalTimeline>
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#0B2447', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="5/2024 -present "
    iconStyle={{ background: '#0B2447', color: '#fff' }}
    icon={<FontAwesomeIcon icon="fa-brands fa-react" />}
    >
        
    <h3 className="vertical-timeline-element-title">Backend 
      Developer
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Kochi, Kerala</h4>
    <p>
     Backend Developer, Regal
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#19376D', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="8/2023 -5/2024 "
    iconStyle={{ background: '#19376D', color: '#fff' }}
    icon={<FontAwesomeIcon icon="fa-brands fa-react" />}
    >
        
    <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Remote</h4>
    <p>
      React Developer, Shebirth
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: '#576CBC', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    
    date="5/2023-8/2023"
    iconStyle={{ background: '#576CBC', color: '#fff' }}
    
    >
    <h3 className="vertical-timeline-element-title">Developer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Remote</h4>
    <p>
      Developer Intern , Shebirth
    </p>
  </VerticalTimelineElement>
 
</VerticalTimeline>
    </div>
</div>
    </div>
    </Fragment>
}