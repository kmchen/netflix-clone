import React from "react";
import Navbar from "./components/Navbar";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ReactPlayer from "react-player";

const WatchPage = () => {
  return (
    <div className="h-screen text-white bg-black min-h-screen">
      <div className="max-auto container px-4 py-8 h-full border-indigo-100 border-4">
        <Navbar />
        <div className="container px-4  text-black ">
          <div className="flex justify-between items-center mb-4">
            <button className="rounded py-2 px-4 bg-gray-500/70 hover:bg-gray-500 bg-opacity-50 text-white">
              <ChevronLeft size={24}></ChevronLeft>
            </button>
            <button className="rounded py-2 px-4 bg-gray-500/70 hover:bg-gray-500 bg-opacity-50 text-white">
              <ChevronRight size={24}></ChevronRight>
            </button>
          </div>
          <div className="aspect-video mb-8 p-2 sm:px-10 md:px-32">
            <ReactPlayer
              controls={true}
              width={"100%"}
              height={"70vh"}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
