import Link from "next/link";
import { address } from "../../styles/Center.module.css";

function Center({ id, name, code }) {
  return (
    <div className="card mb-3 w-75">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg" className="img-fluid rounded-start h-100" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"><Link href={`/centers/${id}`}>{name}</Link></h5>
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className={`card-text ${address}`}>2737 Granville Street {code}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center;