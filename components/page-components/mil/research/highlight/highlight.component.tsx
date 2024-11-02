import classes from "./highlight.module.sass";
import { IoMdPaper } from "react-icons/io";
import { Research } from "@/@types/mil/research";

interface IProps {
  data: Research.IHighlight;
}

const Highlight = (props: IProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.blockHeader}>
        <div>
          <IoMdPaper size={30} /> {props.data.title}
        </div>
      </div>

      <div>{props.data.description}</div>
      {props.data.hightlightImg &&
        props.data.hightlightImg.map((img) => (
          <div className={classes.imgBlur}>
            <img src={img.img.src} />

            <div dangerouslySetInnerHTML={{ __html: img.blurb }} />
          </div>
        ))}
      <div className={classes.reference}>
        <h2>References</h2>
        <ul>
          {props.data.references &&
            props.data.references.map((reference) => (
              <li>
                <div dangerouslySetInnerHTML={{ __html: reference }} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Highlight;