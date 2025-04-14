import { Facebook } from "lucide-react";
import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-39 px-4 text-center">
      <h2 className="text-xl font-bold mb-8 md:text-3xl">Contact Us</h2>

      <div className="flex flex-col gap-10 md:flex-row md:m-12 lg:m-20">
        {/* Google Map */}
        <div className="flex-1">
          <div className="w-full h-72 md:h-[500px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.4070055376897!2d5.191588699999999!3d52.36303960000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c617b96e4c5ee7%3A0x42e68a59b11ad883!2sDessert%20Dream%20by%20Namita!5e0!3m2!1sen!2snl!4v1744620019149!5m2!1sen!2snl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              For placing an order or query
            </h2>
          </div>

          <div className="text-left space-y-3">
            <h4 className="text-lg font-semibold text-gray-800">
              General Queries
            </h4>
            <p className="text-gray-700">
              <b>
                <a
                  href="tel:0684432105"
                  className="text-orange-400 hover:underline"
                >
                  Mob: 0684432105
                </a>
              </b>
              <br />
              <a
                href="mailto:info@charcoalfoods.nl"
                className="text-orange-400 hover:underline"
              >
                Email: info@charcoalfoods.nl
              </a>
            </p>
            <div className="flex gap-4">
              <a
                href="tel:0684432105"
                className="inline-block mt-2 border-1 border-black bg-white hover:bg-orange-200 text-black px-6 py-2 rounded-full text-sm transition duration-300"
              >
                Call Us
              </a>
              <a href="">
                <Facebook className="mt-3" color="rgba(251, 146, 60, 0.5)" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
