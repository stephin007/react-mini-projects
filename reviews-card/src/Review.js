import React, {useState} from 'react'
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = people[index]

    // checkIndex function will check if the index goes more the length of the array or less than 0. If its more , it will make the index to 0 and if its less than 0 it will change the index to the last item of the array
    const checkIndex = (number) => {
      if (number > people.length - 1) {
        return 0;
      }
      if (number < 0) {
        return people.length - 1;
      }
      return number;
    };


    // prevPerson and nextPerson help in increasing or decreasing the index of the array.
    const nextPerson = () => {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkIndex(newIndex);
      });
    };

    const prevPerson = () => {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkIndex(newIndex);
      });
    };

    // randomIndex function will help us to randomise our indices to give random information of the people when surprise me button is clicked.
    const randomIndex = () => {
      let randomIndex = Math.floor(Math.random() * people.length);
      if (randomIndex === index) {
        randomIndex = index + 1;
      }
      setIndex(checkIndex(randomIndex));
      console.log(randomIndex);
    };

    return (
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span class="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomIndex}>
          surprise me
        </button>
      </article>
    );
}

export default Review
