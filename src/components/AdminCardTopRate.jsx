import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

export default function AdminCardTopRate() {
  return (
    <main>
       <Card
      shadow={false}
      className="relative grid h-[200px] w-[300px] max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://image-7wk.pages.dev/b939819e-7f74-45d6-ba4e-cd5a5848a082.jpg')] bg-cover bg-center"
      >
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium line-clamp-1 mt-10"
        >
          How we design
        </Typography>
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-4 px-2 md:px-4">
        <div className=" flex justify-between font-poppins text-white w-full">
          <div>
            <p>Ep 01</p>
          </div>
          <div>
            <p> Name movie</p>
          </div>
        </div>
        <div className=" flex gap-1 w-full">
          <Button className=" bg-secondary text-white w-[50px]">+</Button>
          <Button className=" bg-secondary text-white w-[150px]">Watch</Button>
        </div>
      </CardBody>
    </Card>
    </main>
  )
}
