const MasonryImage = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 lg:col-start-3 lg:col-span-8 col-start-1 col-span-6  mt-10">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/images/iu1.jpg"
            alt="iu1"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="lg:h-[280px] h-[240px] object-cover w-full max-w-full rounded-lg"
            src="/images/iu2.jpg"
            alt="iu1"
          />
        </div>
        <div>
          <img
            className="h-[180px] w-full object-cover rounded-lg"
            src="/images/iu4.jpg"
            alt="iu1"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto w-full object-cover rounded-lg"
            src="/images/iu3.jpg"
            alt="iu1"
          />
        </div>
      </div>
      <div className="grid gap-4"> 
        <div>
          <img
            className="h-[200px] object-cover w-full rounded-lg"
            src="/images/iu6.jpg"
            alt="iu1"
          />
        </div>
        <div>
          <img
            className="h-[260px] object-cover w-full rounded-lg"
            src="/images/iu5.jpg"
            alt="iu1"
          />
        </div>
      </div>
    </div>
  );
};
export default MasonryImage;
