import Link from "next/link";
import { introduction, volumes } from "../lib/data.js";

export default function Volumes() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="./volumes/the-fellowship-of-the-ring">
            {volumes[0].title}📘
          </Link>
        </li>
        <li>
          <Link href="./volumes/the-two-towers">{volumes[1].title}📙</Link>
        </li>
        <li>
          <Link href="./volumes/the-return-of-the-king">
            {volumes[2].title}📗
          </Link>
        </li>
      </ul>
    </div>
  );
}
