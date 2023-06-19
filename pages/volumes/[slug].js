import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";
import uid from "uid";

export default function VolumeDetail() {
  const router = useRouter();

  const { slug } = router.query;
  const currentVolume = volumes.find((volume) => volume.slug === slug);

  const index = volumes.findIndex((obj) => obj.slug === slug);
  const nextVolume = index + 1;
  const prevVolume = index - 1;

  return (
    <div>
      <Head>
        <title>{currentVolume.title}</title>
      </Head>
      <Link href="../volumes/">⬅️ All Volumes</Link>
      <h1 style={{ color: currentVolume.color }}>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <h2>Books in this volume:</h2>
      <ul>
        {currentVolume.books.map((book) => {
          return (
            <li key={uid}>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Image
        src={currentVolume.cover}
        width={140}
        height={230}
        alt={currentVolume.title}
      />
      <br></br>
      {index < 1 ? (
        <Link href={`./${volumes[nextVolume].slug}`}>Next Volume ➡️</Link>
      ) : index === 2 ? (
        <Link href={`./${volumes[prevVolume].slug}`}>⬅️ Previous Volume</Link>
      ) : (
        <>
          <Link href={`./${volumes[prevVolume].slug}`}>⬅️ Previous Volume</Link>{" "}
          <Link href={`./${volumes[nextVolume].slug}`}>Next Volume ➡️</Link>
        </>
      )}
    </div>
  );
}
