import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const UserFeedback = () => {
  const userReviews = [
    {
      id: 1,
      body: 'This toy is amazing! My kids absolutely love playing with it. It keeps them entertained for hours and sparks their imagination.',
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
      id: 2,
      body: 'I bought this toy as a gift for my nephew, and he couldn\'t be happier. The quality is excellent, and it provides educational value while being super fun.',
      image: "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
    },
    {
      id: 3,
      body: 'As a teacher, I highly recommend this toy for classroom activities. It promotes teamwork, problem-solving, and creativity among my students. They can\'t get enough of it!',
      image: "https://media.istockphoto.com/id/1016761216/photo/portrait-concept.jpg?s=612x612&w=0&k=20&c=JsGhLiCeBZs7NeUY_3wjDlLfVkgDJcD9UCXeWobe7Ak=",
    },
  ];

  return (
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
            <img src={review.image} alt="User" className="rounded-full w-16 h-16 mx-auto" />
            <p className="text-gray-800 text-lg mb-4">{review.body}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default UserFeedback;
