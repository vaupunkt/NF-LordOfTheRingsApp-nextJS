import Link from "next/link";
import Head from "next/head";
import { introduction, volumes } from "../../lib/data.js";

export default function Volumes() {
  const randomIndex = Math.floor(Math.random() * volumes.length);

  return (
    <div>
      <Head>
        <title>All Volumes</title>
      </Head>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`./volumes/${volume.slug}`}>{volume.title} ▶️</Link>
            </li>
          );
        })}
      </ul>
      <Link href={`./volumes/${volumes[randomIndex].slug}`}>
        🔀 Go to a random Volume 🔀
      </Link>
    </div>
  );
}
