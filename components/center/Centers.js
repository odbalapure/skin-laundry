import Center from "./Center";
import { wrapper } from "../../styles/Center.module.css";

function Centers(props) {
  return (
    <div className={`mt-5 ${wrapper}`}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {props.centers.map((center) => {
          return (
            <Center key={center.id} {...center} />
          );
        })}
      </div>
    </div>
  );
}

export default Centers;