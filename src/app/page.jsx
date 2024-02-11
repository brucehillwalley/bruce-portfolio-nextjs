import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>

      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold text-sky-900">Crafting Digital Experiences, Designing Tomorrow</h1>
        {/* DESC */}
        <p className="md:text-xl text-sky-900">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          repellendus voluptas eum maiores tempore quasi pariatur, temporibus
          blanditiis nesciunt distinctio est neque itaque reprehenderit esse qui
          mollitia sint eligendi et assumenda optio voluptatem doloribus.
          Delectus corporis porro obcaecati fugiat at laboriosam. Aliquam sequi
          reprehenderit
        </p>
        {/* BUTTONS */}
        <div className="flex gap-4">
          <button className="p-4 rounded-lg right-1 ring-black bg-sky-900 text-white font-semibold">View My Work</button>
          <button className="p-4 rounded-lg right-1 ring-black border-solid border-2 border-sky-900 text-sky-900 font-semibold">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
