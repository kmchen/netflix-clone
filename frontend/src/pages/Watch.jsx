import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ORIGINAL_IMG_BASE_URL } from "../utils/constants";
import { formatReleaseDate } from "../utils/dateFunction";

const WatchPage = () => {
  const { id } = useParams();
  const [details, setDetails] = React.useState();
  useEffect(() => {
    const getDetails = async () => {
      const res = await axios.get(`/api/v1/movie/${id}/details`);
      setDetails(res.data.details);
    };
    getDetails();
  }, []);
  return (
    <div className="text-white bg-black min-h-screen">
      <div className="max-auto container px-4 py-8 h-full border-indigo-100 border-4">
        <Navbar />
        {/* Tailers Buttons */}
        <div className="flex justify-between items-center mb-4">
          <button className="rounded py-2 px-4 bg-gray-500/70 hover:bg-gray-500 bg-opacity-50 text-white">
            <ChevronLeft size={24}></ChevronLeft>
          </button>
          <button className="rounded py-2 px-4 bg-gray-500/70 hover:bg-gray-500 bg-opacity-50 text-white">
            <ChevronRight size={24}></ChevronRight>
          </button>
        </div>
        {/* Tailers Video */}
        <div className="mb-8 p-2 sm:px-10 md:px-32">
          <ReactPlayer
            controls={true}
            width={"100%"}
            height={"70vh"}
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          />
        </div>
        {/* Content details*/}
        <div className="flex md:flex-row flex-col items-center justify-between max-w-6xl gap-20 mx-auto">
          <div className="mb-4 md:mb-0">
            <h1 className="text-balance text-5xl font-bold">
              {details?.title}
            </h1>
            <p className="mt-2 mb-8 text-lg">
              {formatReleaseDate(
                details?.release_date || details?.first_air_date
              )}{" "}
              |{" "}
              {details?.adult ? (
                <span className="text-red-600">18+</span>
              ) : (
                <span className="text-green-600">PG-13</span>
              )}{" "}
            </p>
            <p>{details?.overview}</p>
          </div>
          <img
            className="rounded-md max-h-[600px]"
            src={`${ORIGINAL_IMG_BASE_URL}${details?.poster_path}`}
            alt="movie poster path"
          />
        </div>
        {/* End Details */}
      </div>
    </div>
  );
};

export default WatchPage;
