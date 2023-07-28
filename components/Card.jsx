"use client";

import { useRouter } from "next/navigation";
import style from "./Card.css";

function Card({ users }) {
  const router = useRouter();
  return (
    <div>
      <h1 className="titulo">RoboFriends</h1>
      <div className="card">
        {users.map((user) => (
          <article
            key={user.id}
            onClick={() => {
              router.push(`/users/${user.id}`);
            }}
          >
            <img
              src={`https://robohash.org/${user.id}`}
              alt="robot-pic"
              style={{ width: "200px", height: "200px" }}
            ></img>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <span>{user.phone}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
export default Card;
