import image from "../assets/Icon.png";
import "flowbite";
function Nav() {
  return (
    <div className="z-20 absolute">
    <div className="flex items-center justify-between m-auto relative w-[1150px] left-20">
      <div id="left-nav" className="">
        <a href="#">
          <img src={image} alt="me" />
        </a>
      </div>
      <div id="right-nav" className="flex items-center">
        <div className="">
          <button
          data-modal-target="login"
          data-modal-toggle="login"
            className="text-white font-semibold border border-white rounded px-6 py-1"
            href="#"
          >
            Login
          </button>
          <button
            data-modal-target="register"
            data-modal-toggle="register"
            className="text-white font-semibold border border-[#FFAF00] rounded px-6 py-1 ml-2 bg-[#FFAF00]"
            href="#"
          >
            Register
          </button>

          {/* <!-- Main modal --> */}
          {/* REGISTER */}
          <div>
            <div
              id="register"
              tabindex="-1"
              aria-hidden="true"
              className="top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full bg-black fixed bg-opacity-50"
            >
              <div className="relative w-full max-w-2xl max-h-full ">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Terms of Service
                    </h3>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div className="p-6 space-y-6">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      The European Union’s General Data Protection Regulation
                      (G.D.P.R.) goes into effect on May 25 and is meant to
                      ensure a common set of data rights in the European Union.
                      It requires organizations to notify users as soon as
                      possible of high-risk data breaches that could personally
                      affect them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* LOGIN */}
          <div>
            <div
              id="login"
              tabindex="-1"
              aria-hidden="true"
              className="top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full bg-black fixed bg-opacity-50"
            >
              <div className="relative w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Terms of Service
                    </h3>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div className="p-6 space-y-6">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      The European Union’s General Data Protection Regulation
                      (G.D.P.R.) goes into effect on May 25 and is meant to
                      ensure a common set of data rights in the European Union.
                      It requires organizations to notify users as soon as
                      possible of high-risk data breaches that could personally
                      affect them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}
export default Nav;
