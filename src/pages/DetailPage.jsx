import { Typography, Button } from "@material-tailwind/react";
import React from "react";
import Card from "../components/Card";

export default function DetailPage() {
  return (
    <main className=" bg-primary">
      <section className=" h-[640px]">
        <div className="relative h-full w-full">
          <img
            src="https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/nxxyh0x1vp4nydt1724320695662/0"
            alt="image 1"
            className="h-full w-full object-cover opacity-70"
          />
          <div className=" grid grid-cols-2">
            <div className="absolute inset-0 grid h-full w-full place-items-center justify-items-start bg-black/75 p-20">
              <div className="w-3/4 text-start md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  The Beauty of Nature
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-5 opacity-80"
                >
                  21-01-2025 | 1hour 30minutes
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that
                  quality of air that emanation from old trees, that so
                  wonderfully changes and renews a weary spirit.
                </Typography>
                <div className="flex justify-start gap-10 ">
                  <Button
                    size="lg"
                    color="white"
                    variant="text"
                    className=" border-2 border-white text-white p-5"
                  >
                    Watch Trailer
                  </Button>
                  <Button
                    size="lg"
                    color="white"
                    className=" flex bg-primary text-accent p-5 "
                  >
                    <div className=" flex w-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="#DEB992"
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                        />
                      </svg>
                    </div>
                    Watch Now
                  </Button>
                </div>
              </div>
            </div>
            <div className=" absolute inset-0 grid place-items-center justify-items-end px-96">
              <div className="relative w-[305px] h-[420px]">
                <img
                  src="https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/nxxyh0x1vp4nydt1724320695662/0"
                  alt="image1"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="#DEB992"
                      className="w-24 h-16"
                    >
                      <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Card */}
      <section className="bg-primary text-customGray-dark p-4">
        <h1 className=" font-poppins text-accent font-bold text-3xl px-10 mt-5">
          Popular
        </h1>
        <div className=" grid gap-5 p-10 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-sm:grid-col-1">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className=" grid gap-5 p-10 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-sm:grid-col-1">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
}
