import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaShoppingBag, FaLeaf, FaTruck, FaShieldAlt, FaPercent,
  FaArrowRight, FaPhone, FaCheckCircle, FaClock, FaWhatsapp,
  FaUsers, FaBoxOpen, FaTrophy, FaCreditCard, FaClipboardList
} from "react-icons/fa";

const categories = [
  { name: "Vegetables",    count: "50+ items", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80" },
  { name: "Fresh Fruits",  count: "40+ items", img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=400&q=80" },
  { name: "Dairy & Eggs",  count: "30+ items", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80" },
  { name: "Rice & Grains", count: "25+ items", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80" },
  { name: "Spices & Oil",  count: "60+ items", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80" },
  { name: "Beverages",     count: "35+ items", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80" },
  { name: "Snacks",        count: "45+ items", img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80" },
  { name: "Household",     count: "80+ items", img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80" },
];

const features = [
  { icon: FaLeaf,      title: "100% Fresh & Organic",  desc: "Farm-fresh produce sourced directly from local farmers. No preservatives, no compromises." },
  { icon: FaTruck,     title: "Fast Doorstep Delivery", desc: "Free delivery within 3 km. Same-day service for orders placed before 6 PM." },
  { icon: FaShieldAlt, title: "Quality Guaranteed",     desc: "100% satisfaction guarantee. Fresh products or a full refund — no questions asked." },
  { icon: FaPercent,   title: "Best Value Prices",      desc: "Competitive pricing with weekly deals, bulk discounts and loyalty rewards." },
];

const steps = [
  { step: "01", title: "Browse & Choose",   desc: "Pick your items from our wide range of fresh groceries and essentials.", Icon: FaClipboardList },
  { step: "02", title: "Send via WhatsApp", desc: "Send your order list through WhatsApp for quick confirmation.",          Icon: FaWhatsapp },
  { step: "03", title: "Pay & Confirm",     desc: "Confirm your order with a simple payment — UPI, cash, or card accepted.", Icon: FaCreditCard },
  { step: "04", title: "Enjoy Delivery",    desc: "Sit back and relax while we deliver fresh groceries to your doorstep.",   Icon: FaTruck },
];

export const Home = () => {
  return (
    <section id="home" className="bg-white">

      {/* ===== HERO ===== */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 pb-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left */}
            <RevealOnScroll>
              <div className="space-y-5 text-center lg:text-left">
                {/* Bilingual pill */}
                <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-orange-600">Sri Sravana Stores</span>
                  <span className="text-orange-300 text-xs">·</span>
                  <span className="text-[11px] font-medium text-orange-500">சரவண ஸ்டோர்ஸ்</span>
                </div>

                {/* Headline */}
                <div>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-[0.92] tracking-tight">
                    Fresh<br />Groceries<br />
                    <span className="text-gray-400">Delivered.</span>
                  </h1>
                  <p className="mt-2.5 text-base font-semibold text-gray-600" style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}>
                    புதிய தரம். விரைவான டெலிவரி. உங்கள் வீட்டிற்கே.
                  </p>
                  <p className="mt-3 text-base text-gray-500 max-w-md mx-auto lg:mx-0 leading-relaxed">
                    Farm-fresh vegetables, fruits, and daily essentials at your doorstep in just{" "}
                    <span className="font-bold text-gray-900">2 hours</span>. Quality guaranteed.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <a href="#contact"
                    className="group inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200">
                    <FaShoppingBag className="text-sm" />
                    Order Now
                    <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a href="tel:9360681036"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm border border-gray-200 hover:border-gray-900 transition-colors duration-200">
                    <FaPhone className="text-sm" />
                    Call Us
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {["Same-day delivery", "100% Fresh", "Free returns"].map((b) => (
                    <div key={b} className="flex items-center gap-1.5 text-sm text-gray-500">
                      <FaCheckCircle className="text-gray-900 text-xs" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Right — Image */}
            <RevealOnScroll>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1000&auto=format&fit=crop"
                  alt="Fresh Groceries"
                  loading="lazy"
                  className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <p className="text-gray-900 text-xs font-semibold italic">&ldquo;Fresh. Fast. Trusted.&rdquo;</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* ===== STATS ===== */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { value: "5,000+", label: "Happy Customers", Icon: FaUsers },
              { value: "500+",   label: "Products",        Icon: FaBoxOpen },
              { value: "2 hrs",  label: "Avg Delivery",    Icon: FaTruck },
              { value: "20+",    label: "Years Serving",   Icon: FaTrophy },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center py-7 px-4 gap-1">
                <s.Icon className="text-gray-900 text-base mb-1" />
                <div className="text-2xl font-black text-gray-900 leading-none">{s.value}</div>
                <div className="text-gray-400 text-xs font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CATEGORIES ===== */}
      <div className="border-b border-gray-100">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-green-700 bg-green-100 px-2.5 py-0.5 rounded mb-1.5">Shop by Category</span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight">Everything You Need</h2>
              </div>
              <a href="#contact" className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
                View All <FaArrowRight className="text-[10px]" />
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {categories.map((cat) => (
                <a key={cat.name} href="#contact"
                  className="group relative overflow-hidden rounded-xl aspect-[4/3] block">
                  <img src={cat.img} alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-3">
                    <h3 className="font-bold text-white text-sm leading-tight">{cat.name}</h3>
                    <p className="text-white/60 text-xs">{cat.count}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* ===== WHY CHOOSE US ===== */}
      <div className="bg-gray-950">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
            <div className="mb-7">
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded mb-1.5">Why Choose Us</span>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">The Saravana Promise</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-gray-800">
              {features.map((f, i) => (
                <div key={i} className="bg-gray-950 p-6 group hover:bg-gray-900 transition-colors duration-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors duration-200">
                      <f.icon className="text-gray-900 text-sm" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1.5">{f.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* ===== HOW IT WORKS ===== */}
      <div className="border-b border-gray-100">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
            <div className="mb-10">
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-orange-600 bg-orange-100 px-2.5 py-0.5 rounded mb-1.5">How It Works</span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight">Order in 4 Easy Steps</h2>
            </div>

            {/* Flow diagram */}
            <div className="relative">
              {/* Horizontal connector line (desktop) */}
              <div className="hidden lg:block absolute top-9 left-[calc(12.5%+1.25rem)] right-[calc(12.5%+1.25rem)] h-px bg-gray-200 z-0" />

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-0 relative z-10">
                {steps.map((s, i) => (
                  <div key={i} className="flex flex-col items-center text-center px-4 group">
                    {/* Step circle with connector dot */}
                    <div className="relative flex items-center justify-center mb-5">
                      {/* Connector arrow between steps (mobile vertical) */}
                      {i < steps.length - 1 && (
                        <span className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 text-gray-300 text-lg leading-none">↓</span>
                      )}
                      <div className="w-[72px] h-[72px] rounded-2xl bg-gray-900 group-hover:bg-black flex flex-col items-center justify-center transition-colors duration-200 shadow-sm">
                        <s.Icon className="text-white text-xl mb-0.5" />
                        <span className="text-[10px] font-black text-gray-400 tracking-widest">{s.step}</span>
                      </div>
                      {/* Arrow between steps (desktop) */}
                      {i < steps.length - 1 && (
                        <span className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-gray-400 text-base">→</span>
                      )}
                    </div>
                    <h3 className="font-black text-gray-900 text-sm mb-1.5">{s.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed max-w-[160px]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* ===== INFO STRIP ===== */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {[
              { Icon: FaClock,    label: "Store Hours",    value: "Mon–Sun: 6 AM – 10 PM", href: null },
              { Icon: FaPhone,    label: "Call & Order",   value: "+91 93606 81036",        href: "tel:9360681036" },
              { Icon: FaWhatsapp, label: "WhatsApp Order", value: "Chat with us",           href: "https://wa.me/917358755490" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 py-5 sm:px-6 first:sm:pl-0 last:sm:pr-0">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.Icon className="text-gray-900 text-xs" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm leading-none mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-gray-500 text-xs hover:text-gray-900 transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-gray-500 text-xs">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="bg-gray-900">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
            <div className="grid sm:grid-cols-[1fr_auto] items-center gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-1.5">Ready to Order?</h2>
                <p className="text-gray-400 text-sm">Get fresh groceries delivered to your doorstep. Quick, easy, and reliable.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200 whitespace-nowrap">
                  <FaShoppingBag className="text-sm" />
                  Place Your Order
                </a>
                <a href="https://wa.me/917358755490" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-gray-600 hover:border-white text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200 whitespace-nowrap">
                  <FaWhatsapp className="text-sm" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

    </section>
  );
};



