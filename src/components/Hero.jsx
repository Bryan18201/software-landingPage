const Hero2 = () => {
  return (
    <div>
      <>
        <section className="background-radial-gradient ">
          <style>{`
    .background-radial-gradient {
      background-color: hsl(218, 41%, 15%);
      background-image: radial-gradient(650px circle at 0% 0%,
          hsl(218, 41%, 35%) 15%,
          hsl(218, 41%, 30%) 35%,
          hsl(218, 41%, 20%) 75%,
          hsl(218, 41%, 19%) 80%,
          transparent 100%),
        radial-gradient(1250px circle at 100% 100%,
          hsl(218, 41%, 45%) 15%,
          hsl(218, 41%, 30%) 35%,
          hsl(218, 41%, 20%) 75%,
          hsl(218, 41%, 19%) 80%,
          transparent 100%);
    }
  `}</style>

          {/* Jumbotron */}
          <div className="px-6 py-12 text-center md:px-12 lg:text-left">
            <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-0">
                  <h1 className="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                    The best offer <br />
                    <span className="text-[hsl(218,81%,75%)]">
                      for your business
                    </span>
                  </h1>
                  <a
                    className="hover:bg-white  hover:text-blue-500 mb-2 inline-block rounded bg-blue-500 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out  hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0"
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Get started
                  </a>
                  <a
                    className="bg-white inline-block m-2 rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-blue-500  hover:text-white focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Learn more
                  </a>
                </div>
                <div className="mb-12 lg:mb-0">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Jumbotron */}
        </section>
        {/* Section: Design Block */}
      </>
    </div>
  );
};

export default Hero2;
