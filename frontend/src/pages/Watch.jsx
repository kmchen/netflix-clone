import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { SMALL_IMG_BASE_URL, ORIGINAL_IMG_BASE_URL } from "../utils/constants";
import { formatReleaseDate } from "../utils/dateFunction";
import { useContentStore } from "../store/content";
const WatchPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const [trailers, setTrailers] = useState();
  const [trailerIndex, setTrailerIndex] = useState(0);
  const [similarContent, setSimilarContent] = useState();
  const [showArrows, setShowArrows] = useState(false);
  const { contentType } = useContentStore();
  const sliderRef = useRef(null);
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const onMouseEnter = () => {
    setShowArrows(true);
  };
  const onMouseLeave = () => {
    setShowArrows(false);
  };
  useEffect(() => {
    const getTrailers = async () => {
      const res = await axios.get(`/api/v1/${contentType}/${id}/trailers`);
      setTrailers(res.data.trailers);
      setTrailerIndex(0);
    };
    getTrailers();
  }, [id, contentType]);
  useEffect(() => {
    const getDetails = async () => {
      const res = await axios.get(`/api/v1/${contentType}/${id}/details`);
      setDetails(res.data.details);
    };
    getDetails();
  }, [id, contentType]);
  useEffect(() => {
    const getDetails = async () => {
      const res = await axios.get(`/api/v1/${contentType}/${id}/similar`);
      setSimilarContent(res.data.similars);
    };
    getDetails();
  }, [id, contentType]);
  return (
    <div className="text-white bg-black min-h-screen">
      <div className="max-auto container px-4 py-8 h-full border-indigo-100 border-4">
        <Navbar />
        {/* Tailers Buttons */}
        {trailers.length > 0 && (
          <div className="flex justify-between items-center mb-4 mx-16">
            <button
              onClick={() => {
                setTrailerIndex(trailerIndex - 1);
              }}
              className={`rounded py-2 px-4 bg-gray-500/70 hover:bg-gray-500 bg-opacity-50 text-white ${
                trailerIndex === 0 ? "opacity-50 cursor-not-allowed " : ""
              }`}
            >
              <ChevronLeft size={24}></ChevronLeft>
            </button>
            <button
              onClick={() => {
                setTrailerIndex(trailerIndex + 1);
              }}
              className={`rounded py-2 px-4 bg-gray-500/70 hover:bg-gray-500 bg-opacity-50 text-white ${
                trailerIndex === trailers?.length - 1
                  ? "opacity-50 cursor-not-allowed "
                  : ""
              }`}
            >
              <ChevronRight size={24}></ChevronRight>
            </button>
          </div>
        )}
        {/* Tailers Video */}
        <div className="mb-8 p-2 sm:px-10 md:px-32">
          {trailers?.length > 0 && (
            <ReactPlayer
              controls={true}
              width={"100%"}
              height={"70vh"}
              url={`https://www.youtube.com/watch?v=${trailers?.[trailerIndex]?.key}`}
            />
          )}
        </div>
        {/* Content details*/}
        <div className="flex md:flex-row my-10 flex-col items-center justify-between max-w-6xl gap-20 mx-auto">
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
        {/* Begin similar content */}
        <div
          className="relative px-5 mx-auto"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <h2 className="text-3xl mb-4 font-bold">You may also like</h2>
          <div
            className="flex space-x-4 overflow-x-scroll scrollbar-hide"
            ref={sliderRef}
          >
            {similarContent?.map((content) => {
              if (content.poster_path === null) return null;
              return (
                <Link
                  className="min-w-[250px]"
                  to={`/watch/${content?.id}`}
                  key={content?.id}
                >
                  <img
                    className="rounded-lg"
                    src={`${SMALL_IMG_BASE_URL}${content.poster_path}`}
                    alt=""
                  />
                  <p className="mt-2 text-center">
                    {content?.title || content?.name}
                  </p>
                </Link>
              );
            })}
          </div>
          {showArrows && (
            <>
              <button
                onClick={scrollLeft}
                className="absolute flex items-center justify-center size-12 top-1/2 left-5 md:left-10 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75"
              >
                <ChevronLeft size={24}></ChevronLeft>
              </button>
              <button
                onClick={scrollRight}
                className="absolute flex items-center justify-center size-12 top-1/2 right-5 md:right-10 rounded-full bg-black bg-opacity-50  hover:bg-opacity-75"
              >
                <ChevronRight size={24}></ChevronRight>
              </button>
            </>
          )}
        </div>
        {/* End similar content */}
      </div>
    </div>
  );
};

export default WatchPage;
