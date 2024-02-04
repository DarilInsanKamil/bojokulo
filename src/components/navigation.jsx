import Link from "next/link";

const Navigation = ({ onClick }) => {
  return (
    <section className="w-full grid lg:grid-cols-12 grid-cols-6 font-semibold">
      <ul className="flex flex-col text-[52px] gap-3 font-semibold lg:col-start-6 lg:col-span-3 col-start-1 col-span-6 px-10 ">
        <Link
          onClick={onClick}
          href="/about"
          className="tracking-tight hover:tracking-wide transition-all"
        >
          Profile
        </Link>
        <Link
          onClick={onClick}
          href="/discography"
          className="tracking-tight hover:tracking-wide transition-all"
        >
          Discography
        </Link>
        <Link
          onClick={onClick}
          href="/merchandise"
          className="tracking-tight hover:tracking-wide transition-all"
        >
          Merch
        </Link>
        <Link
          onClick={onClick}
          href="/event"
          className="tracking-tight hover:tracking-wide transition-all"
        >
          Event
        </Link>
      </ul>
    </section>
  );
};

export default Navigation;
