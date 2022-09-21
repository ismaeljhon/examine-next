import Image from 'next/future/image';
export default function Newsletter() {
  return (
    <div className="lg:max-w-[385px]">
      <h3 className="text-white">Never miss an update!</h3>
      <p className="text-info text-lg mt-3 leading-[30px]">
        We are always updating our research and adding new stuff. Sign-up and
        always stay on top of our updates!
      </p>
      <div className="mt-3 relative">
        <input
          type="email"
          className="bg-primary border border-info rounded-[75px] text-white text-sm placeholder:text-white h-[69px] w-full lg:w-[365px] pl-7 outline-none pr-[75px]"
          placeholder="Your Email Address"
        />
        <button className="absolute top-3 right-4 lg:right-9 bg-white w-[45px] h-[45px] rounded-[50%]">
          <Image
            src="/newsletter-submit.png"
            width={21}
            height={19}
            alt="submit"
            className="mx-auto"
          />
        </button>
      </div>
    </div>
  );
}
