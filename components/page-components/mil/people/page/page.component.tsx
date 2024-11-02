import React from "react";
import classes from "./people.module.sass";

import { IoPersonCircleSharp } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

import PeopleList from "@/constants/mil/people/people-list";

const People = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.blockHeader}>
        <div>
          <IoPersonCircleSharp size={30} /> Our Member
        </div>
      </div>
      <div className={classes.peopleBlock}>
        {Object.values(PeopleList).map((person, idx) => (
          <div className={classes.card} key={`person${idx}`}>
            <div className={classes.people}>
              {person.image ? (
                <img src={person.image.src} />
              ) : (
                <BsFillPersonFill size={225} />
              )}
              <div className={classes.name}>{person.name}</div>
              <div className={classes.title}>
                <p>{person.title} </p>
                <p>{person.phone}</p>
                <p>{person.email}</p>
              </div>
            </div>
            <div className={classes.viewMore}>
              <div>
                <a href={person.moreInfo}>View More</a>
              </div>
              <div className={classes.narrow}>
                <HiArrowRight size={15} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;