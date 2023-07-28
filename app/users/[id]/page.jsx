import Link from "next/link";
import "./page.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

async function getId(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const data = await res.json();
  console.log(data);
  return data;
}
async function Users({ params }) {
  const user = await getId(params.id);
  return (
    <div className="usercard">
      <Link className="button" href="/">
        <AiOutlineArrowLeft />
      </Link>

      <img
        src={`https://robohash.org/${user.id}`}
        alt="robot-pic"
        style={{ width: "200px", height: "200px" }}
      ></img>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <span>{user.address.zipcode}</span>
    </div>
  );
}

export default Users;
