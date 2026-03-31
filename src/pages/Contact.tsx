import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { submitContactRequestAsync } from "../store/slices/contactUsSlice";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store";

export default function Contact() {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleCaptchaChange = (value: string | null) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };

  const dispatch = useDispatch<AppDispatch>();
  const contactUsState = useSelector((state: RootState) => state.contactUs);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure captcha is completed
    if (!captchaValue) {
      alert("Please complete the captcha.");
      return;
    }

    await dispatch(submitContactRequestAsync({ ...formData, captchaValue }));
    setFormData({ name: "", email: "", subject: "", message: "" });
    setCaptchaValue(null); // Reset captcha
  };

  return (
    <div>
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div
            className="absolute top-0 left-0 w-full h-full z-1"
            style={{
              backgroundImage: `linear-gradient(to bottom,rgb(253, 185, 19), transparent )`,
            }}
          />
          <h1 className="text-black text-5xl font-bold mb-4 relative z-2">
            Contact Us
          </h1>
          <p className="text-gray-500 text-lg relative z-2">
            We'd love to hear from you. Let's get in touch!
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-gold text-3xl">📍</div>
                  <div>
                    <h3 className="font-bold mb-2">Address</h3>
                    <p className="text-gray-600">
                      Ichalkaranji, Maharashtra, INDIA - 416115
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-gold text-3xl">📞</div>
                  <div>
                    <h3 className="font-bold mb-2">Phone</h3>
                    <p className="text-gray-600">(+91) 8856078956</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-gold text-3xl">📧</div>
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-gray-600">admin@mangalaam.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-gold text-3xl">🕒</div>
                  <div>
                    <h3 className="font-bold mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold h-32"
                    placeholder="Your message"
                  />
                </div>

                <ReCAPTCHA
                  sitekey={
                    import.meta.env.DEV
                      ? import.meta.env.VITE_LOCAL_SITE_KEY
                      : import.meta.env.VITE_SITE_KEY
                  }
                  onChange={handleCaptchaChange}
                  theme="light"
                />

                <button
                  type="submit"
                  className="w-full bg-gold text-dark px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition"
                  disabled={contactUsState.loading}
                >
                  {contactUsState.loading ? "Sending..." : "Send Message"}
                </button>

                {contactUsState.error && (
                  <p className="text-red-500">{contactUsState.error}</p>
                )}
                {contactUsState.success && (
                  <p className="text-green-500">Message sent successfully!</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
