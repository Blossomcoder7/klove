import { IoMdContact } from "react-icons/io";
import logo from "../assets/image/thumb.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import man from "../assets/image/man.png";
import hand from "../assets/image/hand.png";
import bottol from "../assets/image/bottol.png";
import woman from "../assets/image/woman.png";
import woman2 from "../assets/image/woman2.png";
import woman3 from "../assets/image/woman3.png"
import background from "../assets/image/Rectangle.png"
import img1 from "../assets/image/img1.png"
import img2 from "../assets/image/img2.png"
import img3 from "../assets/image/img3.png"
import nature from "../assets/image/nature.png"
import doctor from "../assets/image/doctor.png"
import medicine from "../assets/image/medicine.png"
import ledy from "../assets/image/ledy.png"
import { FaStar } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "./Swiper.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const MyApp = () => {
  const headings = ["Home", "AboutUs", "Contact Us", "FAQ"];
  const cardData = [
    {
      id: 1,
      image: woman,
      bottleImage: bottol,
      title: "Lorem ipsum",
      reviewer: "Guddu",
      date: "11/08/24"
    },
    {
      id: 2,
      image: woman2,
      bottleImage: bottol,
      title: "Lorem ipsum",
      reviewer: "Guddu",
      date: "11/08/24"
    },
    {
      id: 3,
      image: woman3,
      bottleImage: bottol,
      title: "Lorem ipsum",
      reviewer: "Guddu",
      date: "11/08/24"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=200&fit=crop",
      bottleImage: bottol,
      title: "Lorem ipsum",
      reviewer: "Guddu",
      date: "11/08/24"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=200&fit=crop",
      bottleImage: bottol,
      title: "Lorem ipsum",
      reviewer: "Guddu",
      date: "11/08/24"
    }
  ];

  return (
    <div>
      <div className="text-center bg-[#5FCACA] text-[14px] flex w-full justify-center py-2 font-[400px]">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="flex items-center justify-between w-full px-10">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[78px] h-[50px] object-contain"
          />
        </div>

        <div>
          <div className="flex items-center gap-6">
            {headings.map((text, index) => (
              <p
                key={index}
                className="text-sm font-medium cursor-pointer hover:text-[#5FCACA] hover:underline"
              >
                {text}
              </p>
            ))}
            <p className="text-sm font-medium px-2 py-1 bg-[#5FCACA] cursor-pointer rounded-lg">
              Find Your Treatment
            </p>
            <IoMdContact className="text-xl cursor-pointer" />
            <HiOutlineShoppingBag className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="bg-[#ECEDEF] w-full">
        <div className="flex w-full justify-evenly items-center h-full py-6 flex-wrap md:flex-nowrap">
          <div className="flex flex-col items-center justify-center text-start w-full md:w-1/2 space-y-3">
            <div className="flex items-center space-x-2 text-start">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-[#5FCACA] text-md" />
              ))}
              <p className="text-sm font-semibold">2,500+ 5-Star Ratings</p>
            </div>
            <div className="space-y-3">
              <p className="text-5xl font-medium text-[#5FCACA]">
                Scientifically proven
              </p>
              <p className="text-5xl font-medium pb-4">Tested to perfection</p>
              <p className="text-base pb-4">
                Blending traditional herbal wisdom with modern science.
              </p>
              <div className="bg-[#5FCACA] px-8 py-1 font-bold rounded-full w-fit hover:cursor-pointer">
                Shop Now
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto flex justify-center mt-6 md:mt-0">
            <img
              src={man}
              alt="man"
              className="h-[545px] w-[557px] object-contain"
            />
          </div>
        </div>

        {/* Third section */}
        <div className="w-full flex justify-between px-10 py-5 bg-[#F6F6F8]">
          <div className="text-center w-[307px]">
            <p className="text-xl pb-4 font-bold">Sleep Review</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              illum.
            </p>
          </div>
          <div className="text-center w-[307px]">
            <p className="text-xl pb-4 font-bold">Forbes</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              illum.
            </p>
          </div>
          <div className="text-center w-[307px]">
            <p className="text-xl pb-4 font-bold">healthline</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              illum.
            </p>
          </div>
          <div className="text-center w-[307px]">
            <p className="text-xl pb-4 font-bold uppercase">Benzinga</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              illum.
            </p>
          </div>
        </div>

        {/* Five section */}
        <div className="bg-[#F6F6F8] w-full py-10 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative">
            <div className="max-w-md text-left">
              <h1 className="text-3xl font-bold text-black mb-4">
                Lorem Ipsum{" "}
                <span className="font-normal">
                  is simply dummy text of the printing and typesetting industry.
                </span>
              </h1>
              <p className="text-sm text-gray-600 mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className="mt-10 md:mt-0">
              <img
                src={hand}
                alt="hand holding pill"
                className="w-[667px] h-[575px] object-contain"
              />
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center text-center">
              <p className="text-xl text-black mb-2">
                Find your <span className="font-bold">Solution</span>
              </p>
              <div className="bg-[#5FCACA] px-8 py-1 font-bold rounded-full w-fit hover:cursor-pointer">
                Shop All
              </div>
            </div>
          </div>
        </div>

        {/* Six section */}
        <div className="w-full flex flex-col gap-4 bg-[#ECEDEF]">
          <div className="w-full px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full rounded-xl">
                <div className="flex w-full justify-between px-5 py-6">
                  <div>
                    <p className="text-4xl pb-2">Lorem ipsum</p>
                    <p>
                      Don't let unrestful sleep get in the way of your health.
                    </p>
                    <p>Allow your body to repair and restore itself</p>
                    <p>Strengthen your immune system</p>
                    <p className="underline font-semibold hover:cursor-pointer">
                      Learn More
                    </p>
                  </div>
                  <div className="">
                    <div className="bg-[#ECFF31] px-8 py-1 font-bold rounded-full w-fit hover:cursor-pointer">
                      Shop Now
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="grid grid-cols-2 px-5">
                    <div className="border border-[#E0E0E6] rounded-2xl w-[282px] flex flex-col items-center justify-center">
                      <img
                        src={bottol}
                        alt=""
                        className="h-[196px] w-20 object-cover"
                      />
                      <p className="underline font-bold pb-2">Shop Now</p>
                    </div>
                    <div className="border border-[#E0E0E6] rounded-2xl w-[282px] flex flex-col items-center justify-center">
                      <img
                        src={bottol}
                        alt=""
                        className="h-[196px] w-20 object-cover"
                      />
                      <p className="underline font-bold pb-2">Shop Now</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-xl">
                <div className="flex w-full justify-between px-5 py-6">
                  <div>
                    <p className="text-4xl pb-2">Lorem ipsum</p>
                    <p>
                      Don't let unrestful sleep get in the way of your health.
                    </p>
                    <p>Allow your body to repair and restore itself</p>
                    <p>Strengthen your immune system</p>
                    <p className="underline font-semibold hover:cursor-pointer">
                      Learn More
                    </p>
                  </div>
                  <div className="">
                    <div className="bg-[#ECFF31] px-8 py-1 font-bold rounded-full w-fit hover:cursor-pointer">
                      Shop Now
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="grid grid-cols-2 px-5">
                    <div className="border border-[#E0E0E6] rounded-2xl w-[282px] flex flex-col items-center justify-center">
                      <img
                        src={bottol}
                        alt=""
                        className="h-[196px] w-20 object-cover"
                      />
                      <p className="underline font-bold pb-2">Shop Now</p>
                    </div>
                    <div className="border border-[#E0E0E6] rounded-2xl w-[282px] flex flex-col items-center justify-center">
                      <img
                        src={bottol}
                        alt=""
                        className="h-[196px] w-20 object-cover"
                      />
                      <p className="underline font-bold pb-2">Shop Now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full rounded-xl">
                <div className="flex w-full justify-between px-5 py-6">
                  <div>
                    <p className="text-4xl pb-2">Lorem ipsum</p>
                    <p>
                      Don't let unrestful sleep get in the way of your health.
                    </p>
                    <p>Allow your body to repair and restore itself</p>
                    <p>Strengthen your immune system</p>
                    <p className="underline font-semibold hover:cursor-pointer">
                      Learn More
                    </p>
                  </div>
                  <div className="">
                    <div className="bg-[#ECFF31] px-8 py-1 font-bold rounded-full w-fit hover:cursor-pointer">
                      Shop Now
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="grid grid-cols-2 px-5 space-y-2">
                    <div className="border border-[#E0E0E6] rounded-2xl w-[282px] flex flex-col items-center justify-center">
                      <img
                        src={bottol}
                        alt=""
                        className="h-[196px] w-20 object-cover"
                      />
                      <p className="underline font-bold pb-2">Shop Now</p>
                    </div>
                    <div className="border border-[#E0E0E6] rounded-2xl w-[282px] flex flex-col items-center justify-center">
                      <img
                        src={bottol}
                        alt=""
                        className="h-[196px] w-20 object-cover"
                      />
                      <p className="underline font-bold pb-2">Shop Now</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-xl">
                <div className="flex w-full justify-between px-5 py-6">
                  <div>
                    <p className="text-4xl pb-2">Lorem ipsum</p>
                    <p>
                      Don't let unrestful sleep get in the way of your health.
                    </p>
                    <p>Allow your body to repair and restore itself</p>
                    <p>Strengthen your immune system</p>
                    <p className="underline font-semibold hover:cursor-pointer">
                      Learn More
                    </p>
                  </div>
                  <div className="">
                    <div className="bg-[#ECFF31] px-8 py-1 font-bold rounded-full w-fit hover:cursor-pointer">
                      Shop Now
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="grid grid-cols-2 px-5 space-y-2">
                    <div className="border border-[#E0E0E6] rounded-2xl w-[282px] flex flex-col items-center justify-center">
                      <img
                        src={bottol}
                        alt=""
                        className="h-[196px] w-20 object-cover"
                      />
                      <p className="underline font-bold pb-2">Shop Now</p>
                    </div>
                    <div className="border border-[#E0E0E6] rounded-2xl w-[282px] flex flex-col items-center justify-center">
                      <img
                        src={bottol}
                        alt=""
                        className="h-[196px] w-20 object-cover"
                      />
                      <p className="underline font-bold pb-2">Shop Now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center p-6">
            <div className="bg-[#5FCACA] px-8 py-1 font-bold rounded-full w-fit hover:cursor-pointer">
              View All
            </div>
          </div>
        </div>

        {/* Seven section - Testimonials */}
        <div className="w-full px-5 py-4 bg-white">
          <div className="flex flex-col justify-center items-center pb-6">
            <p className="text-5xl pb-3 text-center">Relief Revealed: Real Stories, Real Results</p>
            <p className="text-md">With Over 2,500 5-Star Ratings.</p>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
            >
              {cardData.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="w-full max-w-[417px] mx-auto flex flex-col justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                    <img
                      src={card.image}
                      alt="reviewer"
                      className="w-full h-[197px] object-cover"
                    />
                    <div className="flex w-full px-6 justify-between pt-3">
                      <div>
                        <p className="font-bold">{card.title}</p>
                        <p>Name</p>
                        <p>Name</p>
                        <p>Name</p>
                      </div>
                      <div>
                        <img
                          src={card.bottleImage}
                          alt="product"
                          className="h-20 w-20 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="px-6 pb-6 w-full">
                      <div className="flex items-center space-x-2 text-start mb-2">
                        {[...Array(5)].map((_, index) => (
                          <FaStar key={index} className="text-[#5FCACA] text-md" />
                        ))}
                        <p className="text-sm font-semibold">{card.date}</p>
                      </div>
                      <p className="mb-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, itaque.
                      </p>
                      <div className="flex items-center space-x-1">
                        <MdOutlineVerifiedUser className="text-green-600" />
                        <span>{card.reviewer}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>


        {/* eight */}
        <div className="w-full px-4 py-10">
          <div className="w-full relative px-4">
            <div >
              <img src={background} alt="background" className="w-full h-screen object-cover" />
            </div>
            <div className="absolute bottom-5 z-50 w-full flex flex-col justify-start items-center text-center ">
              <div className="">
                <img src={logo} alt="logo" className="h-20 w-20 object-contain" />
              </div>

              <p className="text-4xl p-4"><span className="font-bold">Proudly</span> Carbon Neutral</p>
              <p>Nature is powerful. We can generate real impact through our environment,
                <br />
                restore forests, and improve carbon markets.</p>
              <p className="py-4">Here are some of the supported projects</p>
              <div className=" flex w-full justify-evenly gap-6 bottom-0 px-10">
                <div className="h-[400px]">
                  <img src={nature} alt="background" className="w-[300px] h-full object-fill rounded-2xl" />
                </div>
                <div className="h-[400px]">
                  <img src={nature} alt="background" className="w-[300px] h-full object-fill rounded-2xl" />
                </div>
                <div className="h-[400px]">
                  <img src={nature} alt="background" className="w-[300px] h-full object-fill rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* nine */}
        <div className="w-full bg-[#f9f9f9] py-12 px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">


            <div className="md:w-1/2 px-4">
              <h2 className="text-4xl md:text-5xl font-light">
                Plant medicine,<br />
                developed by <br />
                <span className="font-bold">Doctors</span>
              </h2>
              <p className="mt-4 text-gray-600 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <p className="mt-2 text-gray-600 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="mt-4">
                <a href="#" className="text-[#00b5b9] text-sm font-medium hover:underline">
                  About Klove
                </a>
              </div>
            </div>


            <div className="md:w-1/2 space-y-6 flex flex-col justify-center items-center">

              <div className="flex items-center gap-4">
                <div className="border-l-4 border-gray-300 pl-4">
                  <p className="text-gray-700 text-md">
                    Uniquely Synergistic <br />
                    <span className="font-semibold">Formulations</span>
                  </p>
                </div>
                <img
                  src={img1}
                  alt="Formulation"
                  className="h-20 w-32 object-cover rounded-2xl"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="border-l-4 border-gray-300 pl-4">
                  <p className="text-gray-700 text-md">
                    Quality, <span className="font-semibold">High- <br />Potency</span> Ingredients
                  </p>
                </div>
                <img
                  src={img2}
                  alt="Ingredients"
                  className="h-20 w-32 object-cover rounded-2xl"
                />
              </div>


              <div className="flex items-center gap-4">
                <div className="border-l-4 border-gray-300 pl-4">
                  <p className="text-gray-700 text-md">
                    <span className="font-semibold">Top-notch</span> clinical <br /> studies
                  </p>
                </div>
                <img
                  src={img3}
                  alt="Studies"
                  className="h-20 w-32 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>


        {/* ten */}
        <div className="w-full px-6 relative">
          <img src={doctor} alt="doctor" className="w-full" />
          <img src={medicine} alt="doctor" className="w-full" />

          <div className="w-[360px] h-[360px] absolute -bottom-14 right-20 bg-white rounded-md shadow-md border-r-[6px] border-t-[6px] border-[#5FCACA]">
            <div className="flex flex-col w-full h-full justify-between px-6 py-4">
              <div>
                <p className="text-2xl font-semibold">Are you a clinician?</p>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div className="pb-4">
                <div className="bg-[#5FCACA] px-8 py-2 text-white font-semibold rounded-full w-fit hover:cursor-pointer transition hover:bg-[#4bb7b7]">
                  Learn More
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* eleven */}
        <div>
          <div className="flex w-full justify-evenly items-center h-full py-6 flex-wrap md:flex-nowrap">
            <div className="flex flex-col items-center justify-center text-start w-full md:w-1/2 space-y-3">
              <div className="w-[557px]">
                <p className="text-2xl mb-5">“Our team of practitioners is here to provide compassionate care, without judgement. From diagnosis, to treatment and beyond, we’re in this together — every step of the way.”</p>
                <p className="font-bold">Dr. Kelly Anderson, MD</p>
                <p> Medical Director, Klove</p>
              </div>
            </div>

            <div className="w-full md:w-auto flex justify-center mt-6 md:mt-0">
              <img
                src={ledy}
                alt="man"
                className="h-[545px] w-[557px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* last */}
        <div>
          <div>
            <div className="">
              <img src={logo} alt="background" className="w-30 object-fill rounded-2xl" />
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div>
              <p className="font-bold">Home</p>
              <p>Sign Up</p>
              <p>Login</p>
              <p>Blogs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApp;