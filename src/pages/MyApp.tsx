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
import { FaCopyright, FaStar } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import Chat from "../assets/image/Chat.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "./Swiper.css"

// Import Swiper styles
import 'swiper/swiper-bundle.css';

import { IoReorderThree } from "react-icons/io5";

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
        <div className="flex items-center hover:cursor-pointer py-2">
          <img
            src={logo}
            alt="logo"
            className="w-[78px] h-[50px] object-contain"
          />
        </div>

        <div className="hidden md:flex">
          <div className="flex items-center gap-6">
            {headings.map((text, index) => (
              <p
                key={index}
                className="text-sm font-medium cursor-pointer hover:text-[#5FCACA] hover:underline"
              >
                {text}
              </p>
            ))}
            <p className=" text-sm font-medium px-2 py-1 bg-[#5FCACA] cursor-pointer rounded-lg">
              Find Your Treatment
            </p>
            <IoMdContact className="text-xl cursor-pointer" />
            <HiOutlineShoppingBag className="text-xl cursor-pointer" />
          </div>
        </div>

        <div className="md:hidden flex hover:cursor-pointer">
          <IoReorderThree className="text-4xl" />
        </div>
      </div>

      {/* Second section */}
      <div className="bg-[#ECEDEF] w-full">
        <div className="flex w-full justify-evenly items-center h-full py-6 flex-wrap md:flex-nowrap">
          <div className="flex flex-col px-5  justify-center text-start w-full md:w-1/2 space-y-3">
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
        <div className="w-full flex flex-wrap items-center justify-between px-10 py-5 bg-[#F6F6F8]">
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
        <div className="w-full bg-[#F6F6F8] py-10 px-6">
          <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-left z-10">
              <h1 className="text-2xl md:text-5xl font-bold text-black mb-4">
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


            <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 z-10">
              <img
                src={hand}
                alt="hand holding pill"
                className="w-full max-w-[667px] h-auto object-contain"
              />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center text-center">
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
        <div className="w-full flex flex-col gap-10 bg-[#ECEDEF] py-10 px-4 md:px-10">
          {[...Array(2)].map((_, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(2)].map((_, colIdx) => (
                <div
                  key={colIdx}
                  className="w-full bg-white rounded-xl shadow-sm overflow-hidden"
                >

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-5 py-6">
                    <div className="text-left space-y-2">
                      <p className="text-2xl md:text-4xl font-semibold">Lorem ipsum</p>
                      <p>Don't let unrestful sleep get in the way of your health.</p>
                      <p>Allow your body to repair and restore itself</p>
                      <p>Strengthen your immune system</p>
                      <p className="underline font-semibold hover:cursor-pointer">
                        Learn More
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div className="bg-[#ECFF31] px-6 py-1 font-bold rounded-full hover:cursor-pointer text-sm">
                        Shop Now
                      </div>
                    </div>
                  </div>


                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-5 pb-6">
                    {[...Array(2)].map((_, i) => (
                      <div
                        key={i}
                        className="border border-[#E0E0E6] rounded-2xl flex flex-col items-center justify-center py-4"
                      >
                        <img
                          src={bottol}
                          alt="product bottle"
                          className="h-[196px] w-20 object-cover mb-2"
                        />
                        <p className="underline font-bold">Shop Now</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* View All Button */}
          <div className="w-full flex justify-center">
            <div className="bg-[#5FCACA] px-8 py-1 font-bold rounded-full w-fit hover:cursor-pointer">
              View All
            </div>
          </div>
        </div>


        {/* Seven section - Testimonials */}
        <div className="w-full px-5 py-6 bg-white">
          <div className="flex flex-col justify-center items-center pb-6">
            <p className="text-3xl md:text-5xl pb-3 text-center">Relief Revealed: Real Stories, Real Results</p>
            <p className="text-sm md:text-md">With Over 2,500 5-Star Ratings.</p>
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

              <p className="text-4xl pb-4 md:p-4"><span className="font-bold">Proudly</span> Carbon Neutral</p>
              <p className="pb-4">Nature is powerful. We can generate real impact through our environment,
                <br />
                restore forests, and improve carbon markets.</p>
              <div className=" flex w-full justify-evenly gap-6 bottom-0 px-10">
                <div className="h-[400px]">
                  <img src={nature} alt="background" className="w-[300px] h-full object-fill rounded-2xl" />
                </div>
                <div className="hidden md:flex md:h-[400px] ">
                  <img src={nature} alt="background" className="w-[300px] h-full object-fill rounded-2xl" />
                </div>
                <div className="hidden lg:flex  md:h-[400px]">
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
        <div className="hidden md:flex flex-col w-full px-6 relative">
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
              <div className="w-full px-8">
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
        <div className="bg-[#f9f9f9] w-full py-10 px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between gap-10">

            <div className="flex flex-col md:w-1/4">
              <img src={logo} alt="logo" className="w-24 mb-4" />
              <p className="text-sm text-gray-700">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
            </div>


            <div className="flex flex-wrap gap-10 md:gap-20">
              <div className="flex flex-col text-md text-gray-800">
                <p className="font-bold mb-2">Home</p>
                <p>Signup</p>
                <p>Login</p>
                <p>Blogs</p>
              </div>

              <div className="flex flex-col text-md text-gray-800">
                <p className="font-bold mb-2">Privacy</p>
                <p>Terms Of Use</p>
                <p>Lorem Ipsum</p>
              </div>

              <div className="flex flex-col text-md text-gray-800">
                <p className="font-bold mb-2">Shipping</p>
                <p>Shipping Policy</p>
                <p>Lorem Ipsum</p>
              </div>

              <div className="flex flex-col text-md text-gray-800">
                <p className="font-bold mb-2">Address</p>
                <p>
                  Primarily servicing ON, NF, NS, and PE<br />
                  175B Admiral Blvd, Mississauga,<br />
                  ON, L5T 2T
                </p>
                <p className="font-bold mt-4">Phone</p>
                <p>(647) 955-2133</p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end py-3 px-6">
            <div className="bg-[#D9D9D9] px-2 py-2 rounded-full w-fit text-center hover:cursor-pointer" >
              <img src={Chat} alt="Chat" className="h-8 w-8 object-contain" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-5 bg-[#f9f9f9]">
            <p className="flex items-center gap-1 text-sm text-gray-700 mb-4 md:mb-0"><FaCopyright />2024 All Rights Reserved by Klove</p>
            <div className="py-3 flex gap-7 flex-wrap">
              <svg
                className="icon icon--full-color"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 38 24"
                width="38"
                height="24"
                aria-labelledby="pi-amazon"
              >
                <title id="pi-amazon">Amazon</title>
                <path
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  fill="#000"
                  fill-rule="nonzero"
                  opacity=".07"
                ></path>
                <path
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  fill="#FFF"
                  fill-rule="nonzero"
                ></path>
                <path
                  d="M25.26 16.23c-1.697 1.48-4.157 2.27-6.275 2.27-2.97 0-5.644-1.3-7.666-3.463-.16-.17-.018-.402.173-.27 2.183 1.504 4.882 2.408 7.67 2.408 1.88 0 3.95-.46 5.85-1.416.288-.145.53.222.248.47v.001zm.706-.957c-.216-.328-1.434-.155-1.98-.078-.167.024-.193-.148-.043-.27.97-.81 2.562-.576 2.748-.305.187.272-.047 2.16-.96 3.063-.14.138-.272.064-.21-.12.205-.604.664-1.96.446-2.29h-.001z"
                  fill="#F90"
                  fill-rule="nonzero"
                ></path>
                <path
                  d="M21.814 15.291c-.574-.498-.676-.73-.993-1.205-.947 1.012-1.618 1.315-2.85 1.315-1.453 0-2.587-.938-2.587-2.818 0-1.467.762-2.467 1.844-2.955.94-.433 2.25-.51 3.25-.628v-.235c0-.43.033-.94-.208-1.31-.212-.333-.616-.47-.97-.47-.66 0-1.25.353-1.392 1.085-.03.163-.144.323-.3.33l-1.677-.187c-.14-.033-.296-.153-.257-.38.386-2.125 2.223-2.766 3.867-2.766.84 0 1.94.234 2.604.9.842.82.762 1.918.762 3.11v2.818c0 .847.335 1.22.65 1.676.113.164.138.36-.003.482-.353.308-.98.88-1.326 1.2a.367.367 0 0 1-.414.038zm-1.659-2.533c.34-.626.323-1.214.323-1.918v-.392c-1.25 0-2.57.28-2.57 1.82 0 .782.386 1.31 1.05 1.31.487 0 .922-.312 1.197-.82z"
                  fill="#221F1F"
                ></path>
              </svg>
              <svg
                className="icon icon--full-color"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="pi-american_express"
                viewBox="0 0 38 24"
                width="38"
                height="24"
              >
                <title id="pi-american_express">American Express</title>
                <path
                  fill="#000"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"
                  opacity=".07"
                ></path>
                <path
                  fill="#006FCF"
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"
                ></path>
                <path
                  fill="#FFF"
                  d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"
                ></path>
                <path
                  fill="#006FCF"
                  d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"
                ></path>
                <path
                  fill="#006FCF"
                  d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"
                ></path>
                <path
                  fill="#FFF"
                  d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"
                ></path>
                <path
                  fill="#006FCF"
                  d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"
                ></path>
                <path
                  fill="#006FCF"
                  d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"
                ></path>
              </svg>
              <svg
                className="icon icon--full-color"
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="38"
                height="24"
                aria-labelledby="pi-diners_club"
              >
                <title id="pi-diners_club">Diners Club</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  fill="#fff"
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                ></path>
                <path
                  d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z"
                  fill="#3086C8"
                ></path>
              </svg>
              <svg
                className="icon icon--full-color"
                viewBox="0 0 38 24"
                width="38"
                height="24"
                role="img"
                aria-labelledby="pi-discover"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="pi-discover">Discover</title>
                <path
                  fill="#000"
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                  fill="#fff"
                ></path>
                <path
                  d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z"
                  fill="#231F20"
                ></path>
                <path
                  d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                  fill="url(#pi-paint0_linear)"
                ></path>
                <path
                  opacity=".65"
                  d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                  fill="url(#pi-paint1_linear)"
                ></path>
                <path
                  d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z"
                  fill="#231F20"
                ></path>
                <path
                  d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z"
                  fill="#231F20"
                ></path>
                <path
                  d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z"
                  fill="#F48120"
                ></path>
                <defs>
                  <linearGradient
                    id="pi-paint0_linear"
                    x1="21.657"
                    y1="12.275"
                    x2="19.632"
                    y2="9.104"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F89F20"></stop>
                    <stop offset=".25" stop-color="#F79A20"></stop>
                    <stop offset=".533" stop-color="#F68D20"></stop>
                    <stop offset=".62" stop-color="#F58720"></stop>
                    <stop offset=".723" stop-color="#F48120"></stop>
                    <stop offset="1" stop-color="#F37521"></stop>
                  </linearGradient>
                  <linearGradient
                    id="pi-paint1_linear"
                    x1="21.338"
                    y1="12.232"
                    x2="18.378"
                    y2="6.446"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F58720"></stop>
                    <stop offset=".359" stop-color="#E16F27"></stop>
                    <stop offset=".703" stop-color="#D4602C"></stop>
                    <stop offset=".982" stop-color="#D05B2E"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <svg
                className="icon icon--full-color"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 38 24"
                width="38"
                height="24"
                aria-labelledby="pi-google_pay"
              >
                <title id="pi-google_pay">Google Pay</title>
                <path
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  fill="#000"
                  opacity=".07"
                ></path>
                <path
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  fill="#FFF"
                ></path>
                <path
                  d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z"
                  fill="#5F6368"
                ></path>
                <path
                  d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z"
                  fill="#34A853"
                ></path>
                <path
                  d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z"
                  fill="#FBBC04"
                ></path>
                <path
                  d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z"
                  fill="#EA4335"
                ></path>
              </svg>
              <svg
                className="icon icon--full-color"
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="38"
                height="24"
                aria-labelledby="pi-master"
              >
                <title id="pi-master">Mastercard</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  fill="#fff"
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                ></path>
                <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                <path
                  fill="#FF5F00"
                  d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                ></path>
              </svg>
              <svg
                className="icon icon--full-color"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 38 24"
                width="38"
                height="24"
                aria-labelledby="pi-shopify_pay"
              >
                <title id="pi-shopify_pay">Shop Pay</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  fill="#000"
                ></path>
                <path
                  d="M35.889 0C37.05 0 38 .982 38 2.182v19.636c0 1.2-.95 2.182-2.111 2.182H2.11C.95 24 0 23.018 0 21.818V2.182C0 .982.95 0 2.111 0H35.89z"
                  fill="#5A31F4"
                ></path>
                <path
                  d="M9.35 11.368c-1.017-.223-1.47-.31-1.47-.705 0-.372.306-.558.92-.558.54 0 .934.238 1.225.704a.079.079 0 00.104.03l1.146-.584a.082.082 0 00.032-.114c-.475-.831-1.353-1.286-2.51-1.286-1.52 0-2.464.755-2.464 1.956 0 1.275 1.15 1.597 2.17 1.82 1.02.222 1.474.31 1.474.705 0 .396-.332.582-.993.582-.612 0-1.065-.282-1.34-.83a.08.08 0 00-.107-.035l-1.143.57a.083.083 0 00-.036.111c.454.92 1.384 1.437 2.627 1.437 1.583 0 2.539-.742 2.539-1.98s-1.155-1.598-2.173-1.82v-.003zM15.49 8.855c-.65 0-1.224.232-1.636.646a.04.04 0 01-.069-.03v-2.64a.08.08 0 00-.08-.081H12.27a.08.08 0 00-.08.082v8.194a.08.08 0 00.08.082h1.433a.08.08 0 00.081-.082v-3.594c0-.695.528-1.227 1.239-1.227.71 0 1.226.521 1.226 1.227v3.594a.08.08 0 00.081.082h1.433a.08.08 0 00.081-.082v-3.594c0-1.51-.981-2.577-2.355-2.577zM20.753 8.62c-.778 0-1.507.24-2.03.588a.082.082 0 00-.027.109l.632 1.088a.08.08 0 00.11.03 2.5 2.5 0 011.318-.366c1.25 0 2.17.891 2.17 2.068 0 1.003-.736 1.745-1.669 1.745-.76 0-1.288-.446-1.288-1.077 0-.361.152-.657.548-.866a.08.08 0 00.032-.113l-.596-1.018a.08.08 0 00-.098-.035c-.799.299-1.359 1.018-1.359 1.984 0 1.46 1.152 2.55 2.76 2.55 1.877 0 3.227-1.313 3.227-3.195 0-2.018-1.57-3.492-3.73-3.492zM28.675 8.843c-.724 0-1.373.27-1.845.746-.026.027-.069.007-.069-.029v-.572a.08.08 0 00-.08-.082h-1.397a.08.08 0 00-.08.082v8.182a.08.08 0 00.08.081h1.433a.08.08 0 00.081-.081v-2.683c0-.036.043-.054.069-.03a2.6 2.6 0 001.808.7c1.682 0 2.993-1.373 2.993-3.157s-1.313-3.157-2.993-3.157zm-.271 4.929c-.956 0-1.681-.768-1.681-1.783s.723-1.783 1.681-1.783c.958 0 1.68.755 1.68 1.783 0 1.027-.713 1.783-1.681 1.783h.001z"
                  fill="#fff"
                ></path>
              </svg>
              <svg
                className="icon icon--full-color"
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="38"
                height="24"
                aria-labelledby="pi-visa"
              >
                <title id="pi-visa">Visa</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  fill="#fff"
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                ></path>
                <path
                  d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                  fill="#142688"
                ></path>
              </svg>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>

    </div>


  );
};

export default MyApp;