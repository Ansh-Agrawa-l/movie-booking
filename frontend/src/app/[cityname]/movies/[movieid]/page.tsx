"use client";
import React, { useEffect, useState } from "react";
import { BsShare, BsFillStarFill } from "react-icons/bs";
import "./MoviePage.css";
import MovieCarousel from "@/components/moviecarousel/MovieCarousel";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CelebCard from "@/components/CelebCard/CelebCard";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";

const MoviePage = () => {
    const pathname = usePathname();
    const { movieid } = useParams();
    const [movie, setMovie] = useState<any>(null);

    console.log("Params object:", { movieid });

    // Function to fetch movie details
    const getMovie = async () => {
        if (!movieid) {
            console.error("movieid is undefined, skipping fetch");
            return;
        }

        console.log("Fetching movie details for ID:", movieid);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies/${movieid}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });

            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

            const data = await res.json();
            if (data.ok) {
                console.log("Movie data received:", data);
                setMovie(data.data);
            } else {
                console.error("Error fetching movie:", data);
            }
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

    useEffect(() => {
        getMovie();
    }, [movieid]); // Ensure fetch runs when `movieid` changes

    return (
        <>
            {movie && (
                <div className="moviepage">
                    <div className="c1" style={{ backgroundImage: `url(${movie.landscapeImgUrl})` }}>
                        <div className="c11">
                            <div className="left">
                                <div className="movie_poster" style={{ backgroundImage: `url(${movie.portraitImgUrl})` }}>
                                    <p>In cinemas</p>
                                </div>
                                <div className="movie_details">
                                    <p className="title">{movie.title}</p>
                                    <p className="rating">
                                        <BsFillStarFill className="star" />
                                        &nbsp;&nbsp; {movie.rating}/10
                                    </p>
                                    <p className="duration_type_releasedat">
                                        <span className="duration">{movie.duration} min</span>
                                        <span>•</span>
                                        <span className="type">{movie.genre.join(", ")}</span>
                                    </p>
                                    <Link href={`${pathname}/buytickets`} className="linkstylenone">
                                        <button className="bookbtn">Book Tickets</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="right">
                                <button className="sharebtn">
                                    <BsShare className="shareicon" />
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="c2">
                        <h1>About the Movie</h1>
                        <p>{movie.description}</p>

                        {movie.cast.length > 0 && (
                            <div className="circlecardslider">
                                <div className="line"></div>
                                <h1>Cast</h1>
                                <Swiper slidesPerView={1} spaceBetween={1} pagination={{ clickable: true }} breakpoints={{
                                    "@0.00": { slidesPerView: 1, spaceBetween: 2 },
                                    "@0.75": { slidesPerView: 2, spaceBetween: 2 },
                                    "@1.00": { slidesPerView: 3, spaceBetween: 2 },
                                    "@1.50": { slidesPerView: 6, spaceBetween: 2 },
                                }} modules={[Pagination]} className="mySwiper">
                                    {movie.cast.map((cast: any, index: number) => (
                                        <SwiperSlide key={index}>
                                            <CelebCard {...cast} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}

                        {movie.crew.length > 0 && (
                            <div className="circlecardslider">
                                <div className="line"></div>
                                <h1>Crew</h1>
                                <Swiper slidesPerView={1} spaceBetween={1} pagination={{ clickable: true }} breakpoints={{
                                    "@0.00": { slidesPerView: 1, spaceBetween: 2 },
                                    "@0.75": { slidesPerView: 2, spaceBetween: 2 },
                                    "@1.00": { slidesPerView: 3, spaceBetween: 2 },
                                    "@1.50": { slidesPerView: 6, spaceBetween: 2 },
                                }} modules={[Pagination]} className="mySwiper">
                                    {movie.crew.map((crew: any, index: number) => (
                                        <SwiperSlide key={index}>
                                            <CelebCard {...crew} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}

                        <div className="line"></div>
                        <h1>You might also like</h1>
                        <MovieCarousel />
                    </div>
                </div>
            )}
        </>
    );
};

export default MoviePage;
