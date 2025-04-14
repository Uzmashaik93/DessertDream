import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar } from "react-icons/fa"; // Import the FaStar component

// Extend the Window interface to include the google property
declare global {
  interface Window {
    google: typeof google;
  }
}

const Reviews = () => {
  const [reviews, setReviews] = useState<
    google.maps.places.PlaceResult["reviews"]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next and previous slide buttons
  const next = () => {
    setCurrentIndex((prevIndex) =>
      reviews && prevIndex === reviews.length ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      reviews && prevIndex === 0 ? reviews.length : prevIndex - 1
    );
  };

  // Function to render stars based on the rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`inline-block ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  useEffect(() => {
    if (!window.google) {
      return;
    }

    const map = new window.google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: { lat: 52.3630396, lng: 5.1915887 },
        zoom: 15,
      }
    );

    const service = new window.google.maps.places.PlacesService(map);

    const request = {
      placeId: "ChIJ515MbrkXxkcRg9gasVmK5kI",
      fields: ["name", "rating", "reviews"],
    };

    service.getDetails(request, (response) => {
      const reviewsWithIds =
        response?.reviews?.map((review, index) => ({
          ...review,
          id: index.toString(),
          profile_photo_url: review.profile_photo_url || "", // Ensure profile_photo_url is included
        })) ?? [];
      setReviews(reviewsWithIds);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Customer Reviews
        </h2>
      </div>
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews &&
                reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-5">
                    <div className="flex flex-col items-center">
                      {/* Display user profile image if available */}
                      <div className="w-24 h-24 bg-gray-300 rounded-full mb-6">
                        {review.profile_photo_url && (
                          <img
                            src={review.profile_photo_url}
                            alt={review.author_name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {review.author_name}
                      </h3>

                      {/* Render the stars based on the rating */}
                      <div className="flex mb-3">
                        {renderStars(review.rating ?? 0)}
                      </div>

                      <p className="text-gray-600 text-center max-w-lg">
                        "{review.text}"
                      </p>
                    </div>
                  </div>
                ))}
              <div className="w-full flex-shrink-0 p-5 m-auto">
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">Excellent</h3>
                  {/* Hardcoded 5 stars */}
                  <div className="flex  mb-2">
                    <FaStar className="inline-block text-yellow-400" />
                    <FaStar className="inline-block text-yellow-400" />
                    <FaStar className="inline-block text-yellow-400" />
                    <FaStar className="inline-block text-yellow-400" />
                    <FaStar className="inline-block text-yellow-400" />
                  </div>

                  <p className=" font-medium">Based on Google Reviews</p>
                  <img src="/google.png" alt="google-logo" className="w-20" />

                  {/* Link to view more reviews */}
                  <a
                    href="https://www.google.com/search?sca_esv=ccd2c1cf7e06f38b&rlz=1C5CHFA_enIN974IN974&sxsrf=AHTn8zpzbMmE4oRFRI0mfa35GoSrQSOz9w:1744647369122&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzWLGKkUqq0Mzd_belGLmb0rg46gcHrXbcBscxeLE3_1kY1eAmAH3OHdvG38jKCYQwBztgIgwTl1ELr69Gjc_u9Q0mjEqrteQT0sA2pH5hnWlRcqGyQ%3D%3D&q=Dessert+Dream+by+Namita+Reviews&sa=X&ved=2ahUKEwilo8f19deMAxXm1gIHHVOEJeAQ0bkNegQINRAE&biw=1267&bih=617&dpr=2.2"
                    target="_blank"
                    className="text-pink-500 border-1 rounded-3xl p-2 bg-white text-center max-w-lg hover:cursor-pointer"
                  >
                    View more reviews
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
