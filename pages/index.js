import dynamic from "next/dynamic";
import Link from "next/link";
import ContactForm from "../src/components/ContactForm";
import TestimonialSlider from "../src/components/TestimonialSlider";
import Layout from "../src/layout/Layout";
import DataFetcher from '../src/components/DataFetcher';

const ProjectIsotop = dynamic(() => import("../src/components/ProjectIsotop"), {
  ssr: false,
});
const Index = () => {
  return(
    <DataFetcher url="https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae">
        {(userData, skillsData, servicesData, timelineData, projectsData) => {
          // if(!userData || !skillsData) {
          //   console.log('Loading it is');
          //   return <div>Loading....</div>
          // }

          console.log('User data:', userData); // Log user data
          console.log('Skills data:', skillsData);
          const fullName = userData?.about?.name || ''; 

          const [firstName, lastName] = fullName ? fullName.split(' ') : ['', ''];
          const title = userData?.about?.title || '';

          const subtitle = userData?.about?.subTitle || '';

          const description = userData?.about?.description || '';

          const [desc1, desc2, desc3] = description? description.split('.') : ['.', '.'];

          const quote = userData?.user?.about?.quote || '';
          const experienceYears = userData?.about?.exp_year || '';
          // const avatarUrl = userData?.user?.about?.avatar?.url || '';
          // const alternateAvatars = userData?.user?.about?.alternateAvatars || [];
          // const timeline = userData?.user?.timeline || [];
          const skills = skillsData || [];
          const serv = servicesData || [];
          const time = timelineData || [];
          const projects = projectsData || [];
        
  return(
    <Layout>
      <section className="section section-started">
        <div className="container">
          {/* Hero Started */}
          <div className="hero-started">
            <div
              className="slide"
            >
              <img src="assets/images/profile.png" alt="" />
              <span className="circle circle-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="749px"
                  height="375px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#ff8059"
                    d="M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#3aafc9"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#b9d1e4"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="121px"
                  height="241px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#676cdb"
                    d="M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="232px"
                  height="117px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 208, 65)"
                    d="M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 "
                  />
                </svg>
              </span>
            </div>
            <div className="content">
              <div className="titles">
                {/* <div
                  className="subtitle"
                >
                  UI UX DESIGNER
                </div> */}
                <div className="subtitle">{title}</div>
                <h2 className="title">{firstName}<br/>{lastName}</h2>
              </div>
              <div
                className="description"
              >
                <p>{subtitle}</p>
                <div className="social-links">
                  <a target="_blank" rel="noreferrer" href="#">
                    <i aria-hidden="true" className="fab fa-twitter" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="#">
                    <i aria-hidden="true" className="fab fa-dribbble" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="#">
                    <i aria-hidden="true" className="fab fa-behance" />
                  </a>
                </div>
              </div>
            </div>
            <div className="info-list">
              <ul>
                <li>
                  Born in <strong>NewYork</strong>
                </li>
                <li>
                  Experience <strong>{experienceYears}</strong>
                </li>
                <li>
                  Date of Birth <strong>27 June 1992</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-1"
        id="about-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              About Me
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
              {/* Section numbers */}
              <div className="numbers-items">
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-check-circle" />
                  </div>
                  <div className="num">124</div>
                  <div className="title">
                    Completed <br />
                    Project
                  </div>
                </div>
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-smile-beam" />
                  </div>
                  <div className="num">65</div>
                  <div className="title">
                    Happy <br />
                    Clients
                  </div>
                </div>
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-gem" />
                  </div>
                  <div className="num">18</div>
                  <div className="title">
                    Awards <br />
                    Won
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Section Profile */}
              <div className="profile-box">
                <div
                  className="text"
                >
                  <p>
                    {desc1}
                  </p>
                  <p>
                    {desc2}
                  </p>
                  <p>
                    {desc3}
                  </p>
                  <a
                    href="#contact-section"
                    className="btn"
                  >
                    <span>Contact Me</span>
                  </a>
                  <div
                    className="signature"
                  >
                    <img src="assets/images/signature.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-parallax section-parallax-2"
        id="resume-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Resume
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  {quote}
                </p>
                <p>
                  {description}
                </p>
              </div>

            <div className="skills-items">
              <div className="p-title">SKILLS</div>
              {skills.map((skill, index) => (
                <div key={index} className="skills-item">
                  <div className="name">{skill.name}</div>
                  <div className={`dots dots-${skill.percentage}`}>
                    <div className="dots-row">
                      {Array.from({ length: 10 }, (_, i) => (
                        <div key={i} className={`dot ${i < skill.percentage / 10 ? 'filled' : ''}`} />
                      ))}
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">{skill.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>


              


              <div className="p-title"> SERVICES
                  <div className="services-items">
                    {serv.map((service, index) => (
                      <div key={index} className="services-col">
                        <div className="services-item">
                          <div className="icon">
                            <img src={service.image.url} alt={service.name} />
                          </div>
                          <div className="title">{service.name}</div>
                          <div className="text">
                            <p>{service.desc}</p>
                          </div>
                          <a href="#contact-section" className="lnk">
                            order now
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* History */}
              <div className="history-left">


                <div className="history-items">
                  <div className="p-title">EXPERIENCE</div>
                  {time.map((item, index) => {
                    if (item.forEducation) {
                      return (
                        <div className="history-item" key={index}>
                          <div className="date">
                            {new Date(item.startDate).getFullYear()} -{' '}
                            {new Date(item.endDate).getFullYear()}
                          </div>
                          <div className="name">{item.jobTitle}</div>
                          <div className="subname">{item.company_name}</div>
                        </div>
                      );
                    } else {
                      return null; // Skip non-education items
                    }
                  })}
                </div>


                <div className="history-items">
                  <div
                    className="p-title"
                  >
                    AWARDS
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2016 - awwwards</div>
                    <div className="name">Site of the Day</div>
                    <div className="text">
                      <p>
                        Euismod vel bibendum ultrices, fringilla vel eros, donec
                        euismod leo lectus.
                      </p>
                    </div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2015 - designnominees</div>
                    <div className="name">Site of the Week</div>
                    <div className="text">
                      <p>
                        Euismod vel bibendum ultrices, fringilla vel eros, donec
                        euismod leo lectus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="history-right">
              <div className="history-items">
                  <div className="p-title">EXPERIENCE</div>
                  {time.map((item, index) => {
                    if (!item.forEducation) {
                      return (
                        <div className="history-item" key={index}>
                          <div className="date">
                            {new Date(item.startDate).getFullYear()} -{' '}
                            {new Date(item.endDate).getFullYear()}
                          </div>
                          <div className="name">{item.jobTitle}</div>
                          <div className="subname">{item.company_name}</div>
                          <div className="text">
                            <p>{item.summary}</p>
                          </div>
                        </div>
                      );
                    } else {
                      return null; // Skip education items
                    }
                  })}
                </div>



              </div>
              <div className="clear" />
              {/* Button CV */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bslthemes.site/ober/wp-content/uploads/2021/12/Jacky-Smith-Resume.pdf"
                className="btn"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-5"
        id="works-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Projects
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  A Collection of my favorites project I’ve designed recently.
                  Feeling great while sharing here.
                </p>
              </div>
            </div>
          </div>
          {/* Works */}
          <ProjectIsotop projects={projects}/>
        </div>
      </section>
      <section className="section" id="pricing-section">
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              Pricing Plans
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  Are you interested to work with me ? Here are my price list
                  for design related work. Lets talk about project !
                </p>
              </div>
            </div>
          </div>
          {/* Pricing */}
          <div className="pricing-items row">
            <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div
                className="pricing-item"
              >
                <div className="title">Full Time</div>
                <div className="subtitle">Available for Full Time</div>
                <div className="price">$1200</div>
                <div className="text">
                  <ul>
                    <li>Brand Design</li>
                    <li>Advertising</li>
                    <li>Web Development</li>
                    <li>Photography</li>
                  </ul>
                </div>
                <a href="#contact-section" className="btn">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
            <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div
                className="pricing-item"
              >
                <div className="title">Project Wise</div>
                <div className="subtitle">Available for Freelancing</div>
                <div className="price">$400</div>
                <div className="text">
                  <ul>
                    <li>Brand Design</li>
                    <li>Advertising</li>
                    <li>Web Development</li>
                    <li>Photography</li>
                  </ul>
                </div>
                <a href="#contact-section" className="btn">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
            <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div
                className="pricing-item"
              >
                <div className="title">Hourley</div>
                <div className="subtitle">Available for Hourley Basis</div>
                <div className="price">$60</div>
                <div className="text">
                  <ul>
                    <li>Brand Design</li> <li>Advertising</li>
                    <li>Web Development</li> <li>Photography</li>
                  </ul>
                </div>
                <a href="#contact-section" className="btn">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section no-padding-top section-parallax section-parallax-4">
        <div className="container">
          {/* Testimonials */}
          <TestimonialSlider />
        </div>
      </section>
      <section className="section section-bg" id="blog-section">
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Blog
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  Suspendisse potenti. Sed egestas eros eu libero posuere
                  ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Blog */}
        <div className="blog-items">
          <div className="archive-item">
            <div className="image">
              <Link href="/blog-single">
                <a>
                  <img
                    src="assets/images/blog4.jpg"
                    alt="Usability Secrets to Create Better User Interfaces"
                  />
                </a>
              </Link>
            </div>
            <div className="desc">
              <div
                className="category"
              >
                UI Design
                <br />
                <span>November 28, 2021</span>
              </div>
              <h3
                className="title"
              >
                <Link href="/blog-single">
                  <a>Usability Secrets to Create Better User Interfaces</a>
                </Link>
              </h3>
              <div
                className="text"
              >
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget…{" "}
                </p>
                <div className="readmore">
                  <Link href="/blog-single">
                    <a className="lnk">Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="archive-item">
            <div className="image">
              <Link href="/blog-single">
                <a>
                  <img
                    src="assets/images/blog3.jpg"
                    alt="Three Ways To Level Up Your Photography"
                  />
                </a>
              </Link>
            </div>
            <div className="desc">
              <div
                className="category"
              >
                Branding
                <br />
                <span>November 28, 2021</span>
              </div>
              <h3
                className="title"
              >
                <Link href="/blog-single">
                  <a>Three Ways To Level Up Your Photography</a>
                </Link>
              </h3>
              <div
                className="text"
              >
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget…{" "}
                </p>
                <div className="readmore">
                  <Link href="/blog-single">
                    <a className="lnk">Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="archive-item">
            <div className="image">
              <Link href="/blog-single">
                <a>
                  <img
                    src="assets/images/single7.jpg"
                    alt="10 Useful Tips to Improve Your UI Designs"
                  />
                </a>
              </Link>
            </div>
            <div className="desc">
              <div
                className="category"
              >
                Photography
                <br />
                <span>November 28, 2021</span>
              </div>
              <h3
                className="title"
              >
                <Link href="/blog-single">
                  <a>10 Useful Tips to Improve Your UI Designs</a>
                </Link>
              </h3>
              <div
                className="text"
              >
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget…
                </p>
                <div className="readmore">
                  <Link href="/blog-single">
                    <a className="lnk">Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-more-link">
          <Link href="/blog">
            <a
              className="btn"
            >
              <span>View Blog</span>
            </a>
          </Link>
        </div>
      </section>
      <section className="section section-parallax section-parallax-5">
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Clients
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  Suspendisse potenti. Sed egestas eros eu libero posuere
                  ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.
                </p>
              </div>
            </div>
          </div>
          <div className="row clients-items">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
              <div className="clients-item">
                <img src="assets/images/brand1.png" alt="" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
              <div className="clients-item">
                <img src="assets/images/brand2.png" alt="" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
              <div className="clients-item">
                <img src="assets/images/brand3.png" alt="" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
              <div className="clients-item">
                <img src="assets/images/brand4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </Layout>
  );
}}
</DataFetcher>
  );
}
export default Index;
