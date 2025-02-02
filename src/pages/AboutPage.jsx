import React from "react";
import { Button } from "@material-tailwind/react";
import AboutUs from "../assets/images/AboutUs.png";
import OurTeam from "../assets/images/OurTeam.png"
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/counter/counterSlice";

export default function About() {
  const {count} = useSelector((state) => state.counter)
    const dispatch = useDispatch()
  return (
    <main className=" bg-primary p-5">

     <div className=" text-white">
     <h1 className="text-center text-4xl text-white">About Us Page {count}</h1>
     <button onClick={() => dispatch(increment())}>Increment</button>
     </div>
      {/* About US */}
      <section className=" grid grid-cols-2">
        <div className="">
          <h1 className=" text-accent flex justify-center text-3xl font-bold">
            ABOUT US
          </h1>
          <p className=" text-white px-10 mt-5">
            {" "}
            Welcome to YOYO Movie, your ultimate destination for everything
            related to movies! Whether you're a casual moviegoer or a passionate
            cinephile, we've created this platform to cater to your love for
            films.
          </p>
          <div className="flex justify-center mt-5">
            <Button className=" hover:bg-secondary bg-secondary">
              Contact Now
            </Button>
          </div>
        </div>
        <div className="">
          <img src={AboutUs} alt="" className=" w-[60%] h-[400px]" />
        </div>
      </section>
      {/* OUR Team */}
      <section className=" grid grid-cols-2">
        <div className="">
          <img src={OurTeam} alt="" className=" w-[60%] h-[400px]" />
        </div>
        <div className=" mt-10">
          <h1 className=" text-accent flex justify-center text-3xl font-bold">
            OUR TEAM
          </h1>
          <p className=" text-white  mt-5">
            {" "}
            At YOYO Movie, we’re a group of passionate film enthusiasts, storytellers, and tech experts united by a love for cinema. Our team brings together diverse talents to create a platform that celebrates the art of filmmaking and connects movie lovers worldwide.
          </p>
        </div>
      </section>
    </main>
  );
}
