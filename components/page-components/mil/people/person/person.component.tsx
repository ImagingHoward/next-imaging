import React from "react";
import classes from "./person.module.sass";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { People } from "@/@types/mil/people";

interface IProps {
  data: People.IPerson;
}

const Person = (props: IProps) => {
  const {
    image,
    name,
    title,
    email,
    phone,
    biography,
    areasofExpertise,
    publicationsListLink,
    publicationsList,
  } = props.data;

  return (
    <div className={classes.wrapper}>
      <div className={classes.blockHeader}>
        <div>
          <IoPersonCircleSharp size={30} /> Biomedical Imaging
        </div>
      </div>
      <div className={classes.person}>
        <div className={classes.personInfo}>
          {image ? (
            <img src={image.src} />
          ) : (
            <BsFillPersonFill size={225} />
          )}
          <div>
            <div className={classes.name}>{name}</div>

            <div className={classes.title}>{title} </div>
          </div>
        </div>
        <div className={classes.biography}>
          <div className={classes.header}>Biography</div>
          {biography && <div dangerouslySetInnerHTML={{ __html: biography }}></div>}
        </div>
        {
          areasofExpertise && areasofExpertise.length > 0 &&
          <div className={classes.expertise}>
            <div className={classes.header}>Areas of Expertise</div>
            <ul>
              {areasofExpertise.map((expertise) => (
                <li>{expertise}</li>
              ))}
            </ul>
          </div>

        }

        <div className={classes.publications}>
          {publicationsListLink && (
            <>
              <div className={classes.header}>Publications List</div>
              <div>
                <a
                  href={publicationsListLink}
                  target="_blank"
                  className={classes.link}
                >
                  {publicationsListLink}
                </a>
              </div>
            </>
          )}
          {publicationsList && (
            <div dangerouslySetInnerHTML={{ __html: publicationsList }}></div>
          )}
        </div>
        <div className={classes.contactIfon}>
          <div className={classes.header}>Contact Info</div>
          <div>Email: {email}</div>
          {
            phone &&
            <div>Tel: {phone}</div>
          }
        </div>
      </div>
    </div>
  );
};

export default Person;