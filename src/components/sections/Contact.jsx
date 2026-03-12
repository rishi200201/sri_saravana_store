import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaWhatsapp, FaMapMarkerAlt, FaShoppingBag, FaMap, FaTruck,
  FaPhone, FaEnvelope, FaClock, FaCheckCircle, FaArrowRight
} from "react-icons/fa";

const ENQUIRY_TYPES = [
  { value: "order",    label: "🛒 Place an Order" },
  { value: "delivery", label: "🚚 Delivery Enquiry" },
  { value: "general",  label: "💬 General Enquiry" },
  { value: "feedback", label: "⭐ Feedback / Review" },
];

const WHATSAPP_NUMBER = "917358755490";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "order",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^[+]?[\d\s\-()]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = "Enter a valid phone number.";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "This field is required.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    const typeLabel = ENQUIRY_TYPES.find((t) => t.value === formData.enquiryType)?.label || formData.enquiryType;
    const waMessage = [
      `*Enquiry Type:* ${typeLabel}`,
      `*Name:* ${formData.name.trim()}`,
      `*Phone:* ${formData.phone.trim()}`,
      formData.email ? `*Email:* ${formData.email.trim()}` : null,
      `*Message:* ${formData.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`, "_blank");
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ name: "", phone: "", email: "", enquiryType: "order", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  const openMap = () => window.open("https://maps.app.goo.gl/zTSUpx7zkcWqH3RN8", "_blank");

  const [isOpen, setIsOpen] = useState(() => {
    const h = new Date().getHours();
    return h >= 6 && h < 22;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const h = new Date().getHours();
      setIsOpen(h >= 6 && h < 22);
    }, 60_000);
    return () => clearInterval(timer);
  }, []);

  const inputClass =
    "w-full bg-white border border-gray-200 px-4 py-3 rounded-xl text-gray-900 text-sm transition-all focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 font-medium placeholder:text-gray-400 hover:border-gray-300";

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #fafafa 40%, #f5f0ff 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple-100/50 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-50/30 blur-3xl" />

      {/* ===== CONTACT ===== */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">

        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full mb-3">
            📍 Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-2">Get In Touch</h2>
          <p className="text-gray-500 text-sm">Open Mon–Sun · 6 AM – 10 PM · Delivery within 3 km</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT — Store Info */}
          <div className="bg-white/80 backdrop-blur-sm border border-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/60">
            {/* Image banner */}
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                alt="Store"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex items-end justify-between">
                <div>
                  <p className="text-white/70 text-xs font-medium mb-0.5 uppercase tracking-widest">Your Local Store</p>
                  <h3 className="text-white font-black text-xl tracking-tight">Sri Sravana Stores</h3>
                </div>
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm ${isOpen ? "bg-green-500/25 text-green-200 ring-1 ring-green-400/30" : "bg-red-500/25 text-red-200 ring-1 ring-red-400/30"}`}>
                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isOpen ? "bg-green-400" : "bg-red-400"}`} />
                  {isOpen ? "Open Now" : "Closed"}
                </span>
              </div>
            </div>

            {/* Info rows */}
            <div className="p-2">
              {[
                {
                  icon: FaMapMarkerAlt,
                  color: "bg-red-50 text-red-500",
                  title: "Address",
                  content: "40, Thiruveethi Amman Kovil St, Kazhikundram, Chennai 600113",
                  action: { label: "Get Directions", onClick: openMap },
                },
                { icon: FaPhone,    color: "bg-green-50 text-green-600",  title: "Phone",    content: "+91 93606 81036",                href: "tel:9360681036" },
                { icon: FaEnvelope, color: "bg-blue-50 text-blue-500",    title: "Email",    content: "saravanastores.ch113@gmail.com", href: "mailto:saravanastores.ch113@gmail.com" },
                { icon: FaClock,    color: "bg-amber-50 text-amber-500",  title: "Hours",    content: "Store: 6 AM – 10 PM  ·  Delivery: 8 AM – 9 PM" },
                { icon: FaTruck,    color: "bg-purple-50 text-purple-500",title: "Delivery", content: "Free within 3 km  ·  Min ₹200  ·  Same-day" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 px-4 py-3.5 rounded-2xl group hover:bg-gray-50/80 transition-all duration-200">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color} transition-transform group-hover:scale-110 duration-200`}>
                    <item.icon className="text-sm" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-none mb-0.5">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gray-800 hover:text-gray-600 text-sm font-semibold transition-colors break-all leading-snug">{item.content}</a>
                    ) : (
                      <p className="text-gray-800 text-sm font-semibold leading-snug">{item.content}</p>
                    )}
                    {item.action && (
                      <button onClick={item.action.onClick} className="mt-1 inline-flex items-center gap-1 text-xs text-blue-500 hover:text-blue-700 transition-colors font-semibold">
                        <FaMap className="text-[10px]" /> {item.action.label} <FaArrowRight className="text-[10px]" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Enquiry Form */}
          <div className="bg-white/80 backdrop-blur-sm border border-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/60">
            <RevealOnScroll>
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-7">
                  {/* Form header */}
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2">
                      ✉️ Quick Enquiry
                    </span>
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">Send Us a Message</h2>
                    <p className="text-gray-400 text-xs mt-1">We&apos;ll respond on WhatsApp within 30 mins</p>
                  </div>

                  {/* Enquiry type tabs */}
                  <div role="radiogroup" aria-label="Enquiry type" className="grid grid-cols-2 gap-2 mb-5">
                    {ENQUIRY_TYPES.map((t) => (
                      <button
                        key={t.value}
                        type="button"
                        role="radio"
                        aria-checked={formData.enquiryType === t.value}
                        onClick={() => setFormData({ ...formData, enquiryType: t.value, message: "" })}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 text-left ${
                          formData.enquiryType === t.value
                            ? "bg-gray-900 text-white shadow-md shadow-gray-900/20"
                            : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {/* Name + Phone row */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="contact-name" type="text" required
                          value={formData.name} placeholder="Name"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "err-name" : undefined}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={inputClass + (errors.name ? " border-red-400 focus:border-red-500 focus:ring-red-100" : "")}
                        />
                        {errors.name && <p id="err-name" role="alert" className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                          Phone <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="contact-phone" type="tel" required
                          value={formData.phone} placeholder="+91 98765 43210"
                          pattern="^[+]?[\d\s\-()]{7,15}$"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "err-phone" : undefined}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={inputClass + (errors.phone ? " border-red-400 focus:border-red-500 focus:ring-red-100" : "")}
                        />
                        {errors.phone && <p id="err-phone" role="alert" className="mt-1 text-xs text-red-500 font-medium">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Email <span className="text-gray-300 font-normal normal-case">(optional)</span>
                      </label>
                      <input
                        id="contact-email" type="email"
                        value={formData.email} placeholder="you@email.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "err-email" : undefined}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass + (errors.email ? " border-red-400 focus:border-red-500 focus:ring-red-100" : "")}
                      />
                      {errors.email && <p id="err-email" role="alert" className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        {formData.enquiryType === "order" ? "Order Details" : "Message"} <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="contact-message" rows={4} required
                        maxLength={500}
                        value={formData.message}
                        placeholder={
                          formData.enquiryType === "order"    ? "e.g. 2kg Rice, 1L Milk, 500g Dal..."
                          : formData.enquiryType === "feedback" ? "Share your experience..."
                          : "Write your message here..."
                        }
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "err-message" : "char-count"}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={inputClass + " resize-none" + (errors.message ? " border-red-400 focus:border-red-500 focus:ring-red-100" : "")}
                      />
                      <div className="flex justify-between mt-1">
                        {errors.message
                          ? <p id="err-message" role="alert" className="text-xs text-red-500 font-medium">{errors.message}</p>
                          : <span />}
                        <p id="char-count" className="text-[11px] text-gray-400 text-right">{formData.message.length}/500</p>
                      </div>
                    </div>

                    {/* WhatsApp submit */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#18a852] text-white py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 shadow-md shadow-green-200/60"
                    >
                      <FaWhatsapp className="text-lg" />
                      Send via WhatsApp
                    </button>
                  </div>

                  {/* Delivery stats */}
                  <div className="grid grid-cols-4 gap-2 mt-5">
                    {[
                      { label: "Delivery", value: "8AM–9PM", color: "bg-blue-50 text-blue-600" },
                      { label: "Min Order", value: "₹200",   color: "bg-amber-50 text-amber-600" },
                      { label: "Free Zone", value: "3 km",   color: "bg-green-50 text-green-600" },
                      { label: "Same Day",  value: "✓ Yes",  color: "bg-purple-50 text-purple-600" },
                    ].map((item) => (
                      <div key={item.label} className={`${item.color} rounded-xl px-2 py-2.5 text-center`}>
                        <p className="text-[10px] font-semibold opacity-70 mb-0.5">{item.label}</p>
                        <p className="font-black text-sm">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </form>
              ) : (
                <div className="text-center py-20 px-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green-200">
                    <FaCheckCircle className="text-white text-2xl" />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 mb-1.5">Message Sent! 🎉</h2>
                  <p className="text-gray-500 text-sm mb-1">Your enquiry has been opened in WhatsApp.</p>
                  <p className="text-gray-400 text-xs mb-8">
                    Reply within <span className="font-bold text-gray-700">30 minutes</span> during store hours.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <button onClick={resetForm} className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-md shadow-gray-900/20">
                      Send Another
                    </button>
                    <a href="#home" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-bold text-sm transition-colors">
                      Back to Home
                    </a>
                  </div>
                </div>
              )}
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center flex-shrink-0">
                <FaShoppingBag className="text-gray-900 text-xs" />
              </div>
              <span className="font-bold text-white text-sm tracking-tight">Sri Sravana Stores</span>
            </div>
            <p className="text-gray-500 text-xs text-center">
              © 2026 Sri Sravana Stores. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Developed by <span className="text-gray-400 font-semibold">Rishi</span>
            </p>
          </div>
        </div>
      </footer>

    </section>
  );
};
