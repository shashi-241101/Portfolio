import React from "react";


const ContactMe = () => {
  
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center pt-10 min-h-screen">
      <div className="flex flex-1 flex-col justify-center items-center pt-10 lg:pt-6">
        <h2 className="text-xs sm:text-2xl lg:text-4xl font-bold">
        It doesn&apos;t have to end here, let&apos;s connect!
        </h2>
        <form
          className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]"
        >
          
          { (
            <>
              <input
                id="customerName"
                name="customerName"
                required
                maxLength={128}
                type="text"
                placeholder="Your Name"
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
               
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={128}
                placeholder="Your Email"
                className="bg-black text-white outline-none border-white border-2 rounded-3xl px-8 py-2"
                
              />
              <textarea
                id="message"
                name="message"
                required
                maxLength={1048576}
                placeholder="Your Message"
                className="bg-black text-white outline-none border-white border-2 rounded-3xl px-8 py-6 min-h-[16rem]"
                
              ></textarea>
              <div className="text-center mt-10">
                <button
                  type="submit"
                  className="bg-white text-black rounded-3xl px-8 py-2 font-bold mb-4"
                >
                 {"Submit"}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
