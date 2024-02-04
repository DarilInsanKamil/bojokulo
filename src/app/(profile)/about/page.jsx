import MasonryImage from "@/components/masonryImage";

const Profile = () => {
  return (
    <main className=" relative min-h-screen">
      <section className="bg-profile4 bg-no-repeat bg-center bg-cover lg:h-[80vh] h-[60vh] rounded-br-[8%] rounded-bl-[8%]"></section>
      <section className="grid lg:grid-cols-12 grid-cols-6 py-10 lg:px-0 px-5">
        <div className="lg:col-start-6 lg:col-span-2 col-start-3 col-span-2 text-center">
          <h2 className="text-3xl tracking-tighter font-semibold">IU</h2>
          <p className="mt-2 text-neutral-500">Lee Ji-eun</p>
        </div>

        <div className="lg:col-start-3 lg:col-span-8 col-start-1 col-span-6 mt-10 flex flex-col lg:flex-row lg:gap-10 gap-5 ">
          <div className="">
            <p className="text-neutral-500">
              <span className="font-semibold text-neutral-900">
                Lee Jieun (이지은){" "}
              </span>
              , popularly known as IU, is a highly-acclaimed South Korean
              singer, songwriter, philanthropist, and actress under{" "}
              <span className="text-blue-600">
                <a
                  href="http://edam-ent.com/eng/sub01/sub01_0101.php"
                  target="_blank"
                >
                  EDAM Entertainment
                </a>
              </span>
              {`
              . She is also known in South Korea as "The Nation's Little
              Sister." Besides her talent in singing and songwriting, IU is also
              loved by fans worldwide for her performance as an actress in
              dramas such as "Moon Lovers: Scarlet Heart Ryeo," "Hotel Del
              Luna," and "My Mister."
              `}
            </p>
          </div>
        </div>

        <MasonryImage />
      </section>
    </main>
  );
};

export default Profile;
