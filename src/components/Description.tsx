import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Description: React.FC = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-300 mb-4">
          We Bet You Won’t Find It Better
        </h2>
        <p className="text-gray-600 mb-12">
          No matter the occasion,{" "}
          <span className="font-semibold">Dessert Dream By Namita </span>
          is here to make your celebrations sweeter and unforgettable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col justify-center align-middle p-7 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <DotLottieReact
              src="https://lottie.host/770158da-65cc-498b-9a8e-47d233ce4e4a/YH7a9s3pCD.lottie"
              loop
              autoplay
              className="text-center ml-auto mr-auto w-30"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">
                Birthday Party
              </h3>
              <p className="text-gray-600">
                Make it a birthday to remember with our delicious, personalized
                cakes and cupcakes that leave guests craving more!
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-center align-middle bg-white p-7 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <DotLottieReact
              src="https://lottie.host/f0472c76-9e7b-4b86-99fa-68939fa0759a/muywD4LHWT.lottie"
              loop
              autoplay
              className="text-center ml-auto mr-auto w-50"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">
                Weddings
              </h3>
              <p className="text-gray-600">
                Celebrate your big day with a stunning, custom wedding cake
                that’s as beautiful as it is tasty.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-center align-middle bg-white p-7 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <DotLottieReact
              src="https://lottie.host/71b60110-f5d3-495c-aeef-4a4d3ddd275d/Q1qI62Lhbf.lottie"
              loop
              autoplay
              className="text-center ml-auto mr-auto w-50"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">
                Any occasion
              </h3>
              <p className="text-gray-600">
                Mark your special moments with our handcrafted cakes, designed
                to make your day even sweeter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
