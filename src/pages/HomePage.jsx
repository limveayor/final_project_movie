import React from "react";
import { CarouselComponent } from "../components/CarouselComponent";
import Card from "../components/Card";

export default function HomePage() {
  return (
    <main>
      <section>
        <CarouselComponent />
      </section>
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
        <h1 className=" font-poppins text-accent font-bold text-3xl px-10 mt-5">
          Hollywood
        </h1>
        <div className=" grid gap-5 p-10 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-sm:grid-col-1">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <h1 className=" font-poppins text-accent font-bold text-3xl px-10 mt-5">
          Anime
        </h1>
        <div className=" grid gap-5 p-10 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-sm:grid-col-1">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <h1 className=" font-poppins text-accent font-bold text-3xl px-10 mt-5">
          Upcoming Movie
        </h1>
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
