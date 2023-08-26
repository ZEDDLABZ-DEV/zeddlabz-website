import React from 'react';
import Slider from 'react-slick';
import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  MessageSquare,
  Play,
  Twitter,
  Youtube,
} from 'react-feather';
import { Card, Testimonial } from '../../Components';
import logo from '../../assets/images/logo.png';
import hero from '../../assets/images/hero.png';
import ind1 from '../../assets/images/ind1.png';
import ind2 from '../../assets/images/ind2.png';
import understand from '../../assets/images/understand.png';
import shape from '../../assets/images/shape.png';
import career from '../../assets/images/career.png';
import testimonial from '../../assets/images/testimonial.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';

const Home = () => {
  const sliderRef = React.useRef(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    centerMode: false,
  };

  const testimonialSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    centerMode: false,
    autoPlay: true,
  };
  return (
    <>
      <section>
        <div className="header">
          <div className="menu shadow-md h-[8vh] flex w-[100vw]">
            <div className="flex flex-1 items-center justify-center">
              <img src={logo} alt="logo" className="w-[100px]" />
            </div>
            <div className="flex-[4] border-r-[1px] border-[#c2c2c2] ">
              <ul className="flex items-center h-[8vh] justify-evenly text-[16px] text-black">
                <li>IT Solutions</li>
                <li>Human Solutions</li>
                <li>Industries</li>
                <li>Our Company</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="flex-1 flex items-center px-2 justify-center gap-[60px]">
              <Menu className="text-black" />
              <button className="bg-primary text-white flex px-4 py-2 rounded-md gap-2">
                {' '}
                <MessageSquare className="w-[20px]" /> Let's Talk{' '}
              </button>
            </div>
          </div>
        </div>
        <div className="flex hero bg-sky">
          <div className="hero-left flex relative flex-1 h-[92vh]">
            <img src={hero} alt="hero" className="relative bottom-[-10px]" />
          </div>
          <div className="flex flex-1">
            <div className="p-6">
              <h1 className="leading-[100px] text-black font-[tungsten] text-[100px] font-semibold">
                WE'RE <br /> HUMANS <br />
                & IT <br /> EXPERTS
              </h1>
              <div className="flex w-[500px] mt-[-40px]">
                <div className="flex-1"></div>
                <div className="flex-1">
                  <p className="text-black">
                    Everywhere, Zeddlabz makes <br />
                    IT accessible to free up <br />
                    businesses to change and <br />
                    improve their competitiveness.
                  </p>
                </div>
              </div>

              <div className="flex w-[400px] gap-8 h-[48px] mt-6">
                <button className="btn bg-white w-[200px] rounded-md shadow-lg items-center text-primary">
                  <span className="btn-text flex gap-4 justify-center">
                    Human Solutions <ArrowRight />{' '}
                  </span>
                </button>
                <button className="btn bg-white w-[200px] rounded-md shadow-lg items-center text-primary">
                  <span className="btn-text flex gap-4 justify-center">
                    Human Solutions <ArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F9FB]">
        <div className="flex">
          <div className="flex flex-col w-[100%] px-[100px] pt-[150px]">
            <div className="flex-1">
              <h4 className="text-[24px]">Industries</h4>
            </div>
            <div className="flex-1 flex justify-between mt-6">
              <h2 className="font-[Tungsten] text-[100px] font-semibold leading-[100px]">
                WE ADVISE MORE THAN 1700 <br />
                COMPANIES FROM ALL <br />
                SECTORS
              </h2>
            </div>

            <div className="slider w-[100%]">
              <div className="flex justify-end gap-4">
                <button
                  className="bg-primary flex justify-center items-center w-[50px] h-[50px] rounded-full text-white"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <ArrowLeft />
                </button>
                <button
                  className="bg-primary flex justify-center items-center w-[50px] h-[50px] rounded-full text-white"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <ArrowRight />
                </button>
              </div>
              <div className=" mt-[100px] ">
                <Slider {...settings} ref={sliderRef}>
                  <Card
                    title="Small Industries"
                    description="To remain competitive, SMEs seek to do more with less, while gaining agility and productivity. Information technology offers this edge."
                    image={ind1}
                  />

                  <Card
                    title="Small Industries"
                    description="To remain competitive, SMEs seek to do more with less, while gaining agility and productivity. Information technology offers this edge."
                    image={ind1}
                  />

                  <Card
                    title="Medium Industries"
                    description="To remain competitive, SMEs seek to do more with less, while gaining agility and productivity. Information technology offers this edge."
                    image={ind2}
                  />

                  <Card
                    title="Small Industries"
                    description="To remain competitive, SMEs seek to do more with less, while gaining agility and productivity. Information technology offers this edge."
                    image={ind1}
                  />

                  <Card
                    title="EdTech Industries"
                    description="To remain competitive, SMEs seek to do more with less, while gaining agility and productivity. Information technology offers this edge."
                    image={ind1}
                  />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F9FB]">
        <div className="flex flex-col w-full px-[160px] pt-[150px]">
          <div className="flex gap-6 px-10">
            <h1 className="font-[Tungsten] text-[180px] font-semibold text-black">
              UNDERSTAND
            </h1>
            <img
              src={understand}
              alt="understand"
              className="mt-[100px] h-[50px]"
            />
          </div>
          <div className="flex gap-[40px]">
            <div className="flex-1 flex items-center justify-end">
              <button className="flex w-[300px] h-[80px] justify-between pl-[40px] font-semibld text-[18px] items-center rounded-[60px] border-t-[4px] border-l-[4px] border-b-[4px] border-gray">
                View Presentation
                <span className="bg-secondary text-white h-[80px] w-[80px] shadow-xl rounded-[160px] flex justify-center items-center">
                  <Play className="w-[80px]" />
                </span>
              </button>
            </div>
            <h1 className="leading-[200px] flex-1 font-[Tungsten] text-[180px] font-semibold text-black">
              ADVICE
            </h1>
          </div>
          <div className="flex gap-[60px] px-[100px]">
            <div className="flex-2 flex items-center justify-end">
              <img
                src={shape}
                alt="nderstand"
                className="w-[200px] h-[200px]"
              />
            </div>
            <h1 className="leading-[200px] flex-1 font-[Tungsten] text-[180px] font-semibold text-black">
              SHAPE
            </h1>
          </div>

          <div className="m-[120px] flex flex-col gap-6">
            <h1 className="text-[24px] font-semibold">
              IT made simple, at a human scale
            </h1>
            <p>
              We support you in making our vision a reality and make your <br />
              digital transformation the foundation of your growth.
            </p>
            <button className="flex w-[240px] bg-secondary text-black h-[60px] px-8 justify-between rounded-md font-semibld text-[18px] items-center shadow-md">
              About Zeddlabz
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="pb-[100px]">
          <div className="solution flex flex-col gap-10 p-[140px] pb-[240px]">
            <h1 className="font-[Tungsten] text-[100px] font-semibold leading-[100px] text-white">
              OUR IT <br />
              SOLUTIONS
            </h1>

            <button className="flex justify-between items-center w-[180px] shadow-md shadow-lightgray rounded-md bg-white px-[20px] py-[18px] text-[16px] font-bold">
              Explore All <ArrowRight />
            </button>
          </div>

          <div className="mt-[-140px] px-[160px]">
            <div className="shadow-md bg-white flex flex-wrap blocks rounded-xl">
              <div className="flex flex-col gap-4 border-[2px] border-[#E1EFF6] border-l-0 border-t-0 w-1/3 px-[40px] py-[60px]">
                <h2 className="text-black text-[24px] font-bold ">
                  Web Design &
                  <br /> Development
                </h2>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
                  iste. Quidem commodi nemo at culpa sapiente necessitatibus
                  recusandae quasi possimus, labore, aut quod? Fugit quas iure,
                  ut architecto quasi corporis.
                </p>
              </div>

              <div className="flex flex-col gap-4 border-[2px] border-[#E1EFF6] w-1/3  px-[40px] py-[60px] ">
                <h2 className="text-black text-[24px] font-bold">
                  Android App <br /> Development
                </h2>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
                  iste. Quidem commodi nemo at culpa sapiente necessitatibus
                  recusandae quasi possimus, labore, aut quod? Fugit quas iure,
                  ut architecto quasi corporis.
                </p>
              </div>

              <div className="flex flex-col gap-4 border-[2px] border-[#E1EFF6] border-r-0 border-t-0 w-1/3  px-[40px] py-[60px]">
                <h2 className="text-black text-[24px] font-bold">
                  IOS App <br /> Development
                </h2>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
                  iste. Quidem commodi nemo at culpa sapiente necessitatibus
                  recusandae quasi possimus, labore, aut quod? Fugit quas iure,
                  ut architecto quasi corporis.
                </p>
              </div>

              <div className="flex flex-col gap-4 border-[2px] border-[#E1EFF6] w-1/3 border-l-0 border-b-0  px-[40px] py-[60px]">
                <h2 className="text-black text-[24px] font-bold ">
                  Web Design &
                  <br /> Development
                </h2>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
                  iste. Quidem commodi nemo at culpa sapiente necessitatibus
                  recusandae quasi possimus, labore, aut quod? Fugit quas iure,
                  ut architecto quasi corporis.
                </p>
              </div>

              <div className="flex flex-col gap-4 border-[2px] border-[#E1EFF6] w-1/3  px-[40px] py-[60px]">
                <h2 className="text-black text-[24px] font-bold">
                  Android App <br /> Development
                </h2>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
                  iste. Quidem commodi nemo at culpa sapiente necessitatibus
                  recusandae quasi possimus, labore, aut quod? Fugit quas iure,
                  ut architecto quasi corporis.
                </p>
              </div>

              <div className="flex flex-col gap-4 border-[2px] border-[#E1EFF6] w-1/3 border-r-0 border-b-0  px-[40px] py-[60px]">
                <h2 className="text-black text-[24px] font-bold">
                  IOS App <br /> Development
                </h2>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
                  iste. Quidem commodi nemo at culpa sapiente necessitatibus
                  recusandae quasi possimus, labore, aut quod? Fugit quas iure,
                  ut architecto quasi corporis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex px-[120px] py-[60px] bg-sky">
          <div className="flex-1">
            <img
              src={career}
              alt="career at zeddlabz"
              className="object-fit w-1/1 rounded-md"
            />
          </div>
          <div className="flex-1 px-[40px] flex flex-col gap-4 justify-center">
            <span className="text-[16px] text-black font-bold">Careers</span>
            <h1 className="font-[Tungsten] text-[100px] text-black font-semibold leading-[100px]">
              JOIN THE BEST TEAM OF <br />
              IT EXPERTS
            </h1>
            <p className="text-[16px] leading-[28px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos facilis nihil aut iure deleniti delectus alias
              assumenda temporibus! Aliquid, at quae rerum sint eaque quaerat
              consequatur dolorem iusto explicabo voluptatem.
            </p>
            <button className="flex bg-white shadow-md rounded-md justify-between p-4 w-[240px]">
              Careers at Zeddlabz <ArrowRight />{' '}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F9FB]">
        <div className="flex pb-[100px]">
          <div className="flex flex-col w-[100%] px-[100px] pt-[150px]">
            <div className="flex-1">
              <h4 className="text-[24px]">Testimonials</h4>
            </div>
            <div className="flex-1 flex justify-between mt-6">
              <h2 className="font-[Tungsten] text-[100px] font-semibold leading-[100px]">
                WHAT OUR CLIENTS SAYS ABOUT <br /> ZEDDLABZ
              </h2>
            </div>

            <div className="slider w-[100%]">
              <div className="flex justify-end gap-4">
                <button
                  className="bg-primary flex justify-center items-center w-[50px] h-[50px] rounded-full text-white"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <ArrowLeft />
                </button>
                <button
                  className="bg-primary flex justify-center items-center w-[50px] h-[50px] rounded-full text-white"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <ArrowRight />
                </button>
              </div>
              <div className=" mt-[100px] ">
                <Slider {...testimonialSettings} ref={sliderRef}>
                  <Testimonial
                    image={testimonial}
                    client="Client 1"
                    desc="o remain competitive, SMEs seek to do more with less, while gaining agility and productivity. Information technology offers this edge"
                  />

                  <Testimonial
                    image={testimonial}
                    client="Client 1"
                    desc="o remain competitive, SMEs seek to do more with less, while gaining agility and productivity. Information technology offers this edge"
                  />

                  <Testimonial
                    image={testimonial}
                    client="Client 1"
                    desc="o remain competitive, SMEs seek to do more with less, while gaining agility and productivity. Information technology offers this edge"
                  />

                  <Testimonial
                    image={testimonial}
                    client="Client 1"
                    desc="o remain competitive, SMEs seek to do more with less, while gaining agility and productivity. Information technology offers this edge"
                  />

                  <Testimonial
                    image={testimonial}
                    client="Client 1"
                    desc="o remain competitive, SMEs seek to do more with less, while gaining agility and productivity. Information technology offers this edge"
                  />

                  <Testimonial
                    image={testimonial}
                    client="Client 1"
                    desc="o remain competitive, SMEs seek to do more with less, while gaining agility and productivity. Information technology offers this edge"
                  />

                  <Testimonial
                    image={testimonial}
                    client="Client 1"
                    desc="o remain competitive, SMEs seek to do more with less, while gaining agility and productivity. Information technology offers this edge"
                  />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="flex p-[100px] text-white">
          <div className="flex-2 flex flex-col gap-4">
            <span className="text-[18px]">Newsletter</span>
            <h1 className="text-[60px] leading-[60px] font-[Tungsten]">
              GET INSIGHTS IN YOUR <br /> INBOX
            </h1>
            <button className="flex bg-secondary rounded-md justify-between px-4 py-3 text-black text-[20px] font-bold">
              Subscribe <ArrowRight />
            </button>
          </div>
          <div className="flex-1 flex flex-col pl-[100px]">
            <ul className="flex w-full justify-between">
              <li>IT Solutions</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>Work in Zeddlabz</li>
              <li>Resource Placement</li>
            </ul>

            <div className="flex mt-[60px]">
              <div className="w-[500px] px-6">
                <h1 className="text-gray text-[20px] pb-2 font-bold border-b-[1px] border-gray">
                  Other Links
                </h1>

                <ul className="p-2 pt-4 flex flex-col text-[16px] gap-2">
                  <li>Login to your account</li>
                  <li>Contact us</li>
                  <li>Terms & conditions</li>
                </ul>
              </div>
              <div className="flex-1 flex flex-col px-[60px] justify-between ">
                <h1 className="text-gray text-[20px] pb-2 font-bold border-b-[1px] border-gray">
                  Industries
                </h1>
                <ul className="p-2 pt-4 flex flex-col text-[16px] gap-2">
                  <li>Small Enterprises</li>
                  <li>Medium Enterprises</li>
                  <li>Large Enterprises</li>
                  <li>EdTect</li>
                </ul>
                <button className="flex bg-white text-black justify-between px-4 py-3 rounded-lg mt-[14px] font-bold">
                  Explore All <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[80px] py-[30px] flex justify-between border-t-[1px] border-gray">
          <div>
            <ul className="text-black flex gap-4">
              <li className="bg-white p-2 rounded-full">
                <Facebook />
              </li>
              <li className="bg-white p-2 rounded-full">
                <Twitter />
              </li>
              <li className="bg-white p-2 rounded-full">
                <Linkedin />
              </li>
              <li className="bg-white p-2 rounded-full">
                <Youtube />
              </li>
              <li className="bg-white p-2 rounded-full">
                <Instagram />
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col text-graytext justify-center text-[16px] items-end">
              <li>contact@zeddlabz.com</li>
              <li>Zeddlabz &copy; {new Date().getFullYear()}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export { Home };
