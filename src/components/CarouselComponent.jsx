import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselComponent() {
  return (
    <Carousel
      className=" h-[640px]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 h-2 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative h-full w-full">
        <img
          src="https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/nxxyh0x1vp4nydt1724320695662/0"
          alt="image 1"
          className="h-full w-full object-cover"
        />
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
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
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
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/nxxyh0x1vp4nydt1724320695662/0"
          alt="image 1"
          className="h-full w-full object-cover"
        />
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
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
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
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/nxxyh0x1vp4nydt1724320695662/0"
          alt="image 1"
          className="h-full w-full object-cover"
        />
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
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
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
      </div>
    </Carousel>
  );
}
