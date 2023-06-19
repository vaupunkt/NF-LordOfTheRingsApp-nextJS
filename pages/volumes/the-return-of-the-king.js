import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data.js";
import uid from "uid";

export default function TheReturnOfTheKing() {
  const data = volumes.find(({ slug }) => slug === volumes[2].slug);
  return (
    <div>
      <Link href="../volumes/">⬅️ All Volumes</Link>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <h2>Books in this volume:</h2>
      <ul>
        {data.books.map((book) => {
          return (
            <li key={uid}>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Image src={data.cover} width={140} height={230} alt={data.title} />
      <br></br>
      <Link href={`./${volumes[1].slug}`}>⬅️ Previous Volume </Link>
    </div>
  );
}
