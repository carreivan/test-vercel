import Card from "@/components/Card";
import styles from "./page.module.css";

async function fetchCard() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

async function Home() {
  const cards = await fetchCard();
  console.log(cards);

  return (
    <div className="cardcontainer">
      <Card users={cards} />
    </div>
  );
}

export default Home;
