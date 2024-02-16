import pattern from "../assets/svgs/Pattern.svg";
import picOne from "../assets/Frame 36166 (1).png";
import picTwo from "../assets/Store Page (2).png"
import picThree from "../assets/Group 227 (1).png";
import registerImg from '../assets/svgs/registerPattern.svg'
import otpVerification from "../assets/svgs/otpVerification.svg"
import ledger from "../assets/svgs/ledger.svg"

const Address = ({ id }) => {
  return (
    <div
      className="text-white p-16 flex flex-col w-[50vw] h-screen font-semibold text-3xl box-border bg-blue gap-8
    "
    >
      <header className="flex justify-start items-center gap-1">
        <span className="rounded-sm aspect-square h-6 bg-[#FFB722]"></span>
        <p>Gazzar</p>
      </header>
      <div className="flex justify-center">
        <img
          className="w-100 top-0 z-10 -right-0 absolute"
          src={pattern}
          alt="pattern"
        />
        {id === "1" && <img className="z-20 w-2/3" src={picOne} />}
        {id === "2" && <img className="z-20 w-2/3" src={picTwo} />}
        {id === "3" && <img className="z-20 w-full" src={picThree} />}
        {id === "4" && <img className="z-20 w-4/5 my-8" src={registerImg} />}
        {id === "5" && <img className="mt-10 z-20" src={ledger} />}
      </div>
      {id === "1" && (
        <section className="text-3xl z-20 w-3/5">
          Manage your business digitally.
        </section>
      )}
      {id === "2" && (
        <section className="text-3xl z-20 w-3/5">
          Setup your store website.
        </section>
      )}
      {id === "3" && (
        <section className="text-3xl z-20">Business analytics.</section>
      )}
      {id === "4" && (
        <section className="text-3xl z-20">
          Ready to take your business to the next level?
        </section>
      )}
      {id === "5" && (
        <section className="text-3xl z-20 leading-relaxed -translate-y-16 mt-20">
          You're all <p>ready to go!</p>
        </section>
      )}

      <div>
        {id === "1" && (
          <p className=" text-base font-normal text-white/50 z-20 w-[90%]">
            Save yourself the stress of manually documenting various aspects of
            your business. Customers, sales and store products can be managed
            with Gazzar.
          </p>
        )}
        {id === "2" && (
          <p className=" text-base font-normal text-white/50 z-20 w-[90%]">
            Having a customized website makes your business stand out as a
            professional, and it also make it easier for your customers to see
            all your products.
          </p>
        )}
        {id === "3" && (
          <p className=" text-base font-normal text-white/50 z-20 w-[90%]">
            See simplified metrics of how your business is performing and tips
            on how to improve your sales.
          </p>
        )}
      </div>
    </div>
  );
};

export default Address;
