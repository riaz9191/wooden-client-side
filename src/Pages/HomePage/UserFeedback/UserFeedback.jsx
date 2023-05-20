import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "aos/dist/aos.css";
import AOS from "aos";

const UserFeedback = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  const userReviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      body: "This toy is amazing! My kids absolutely love playing with it. It keeps them entertained for hours and sparks their imagination.",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 5,
      body: "I bought this toy as a gift for my nephew, and he couldn't be happier. The quality is excellent, and it provides educational value while being super fun.",
      image: "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      rating: 4,
      body: "As a teacher, I highly recommend this toy for classroom activities. It promotes teamwork, problem-solving, and creativity among my students. They can't get enough of it!",
      image: "https://media.istockphoto.com/id/1016761216/photo/portrait-concept.jpg?s=612x612&w=0&k=20&c=JsGhLiCeBZs7NeUY_3wjDlLfVkgDJcD9UCXeWobe7Ak=",
    },
  ];

  return (
    <div data-aos="zoom-in-up" className="mb-20">
      <h2 className="text-4xl text-center font-bold mt-20 mb-16">What Our Clients Say</h2>
      <Carousel
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        showDots={true}
        infinite={true}
      >
        {userReviews.map((review) => (
          <div key={review.id} className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={review.image}
                alt="User"
                className="rounded-full w-16 h-16 mx-auto"
              />
              <div className="flex flex-col items-center justify-center mt-4">
                <div className="mr-2">
                  <strong>{review.name}</strong>
                </div>
                <div>
                  {Array.from(Array(review.rating).keys()).map((index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="orange"
                      className="h-4 w-4 inline-block"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.155l-5.29 2.707 1.01-5.868L1.3 6.438l5.91-.86L10 0l2.79 5.577 5.91.86-4.42 4.556 1.01 5.868L10 15.155z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-gray-800 text-lg mb-4">{review.body}</div>
              
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default UserFeedback;
