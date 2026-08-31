import { useState } from "react";
import { CONSTRUCTION_COLORS } from "../../config/theme";
import { CONSTRUCTION_PHONE_NUMBER_DISPLAY as PHONE_NUMBER_DISPLAY, CONSTRUCTION_WHATSAPP_NUMBER as WHATSAPP_NUMBER } from "../../config/contact";
import { openWhatsApp, isValidIndianMobile } from "../../utils/whatsapp";
import { getCurrentDateAndTime } from "../common/SubmitedAt";

const PROJECT_TYPES = ["Civil Construction", "Prefabricated Buildings", "Sports Infrastructure", "Other"];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", projectType: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const phone = value.replace(/\D/g, "").slice(0, 10);
      setForm((p) => ({ ...p, phone }));
      setErrors((p) => ({ ...p, phone: "" }));
      return;
    }
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!isValidIndianMobile(form.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number.";
    }
    if (!form.projectType) newErrors.projectType = "Please select a project type.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    const text = `New Construction Enquiry

Date & Time: ${getCurrentDateAndTime()}

Name: ${form.name}
Phone: ${form.phone}
${form.email ? `Email: ${form.email}\n` : ""}Project Type: ${form.projectType}
${form.message ? `\nMessage:\n${form.message}` : ""}`;

    openWhatsApp(WHATSAPP_NUMBER, text);
    setSent(true);
  };

  const labelStyle = { color: CONSTRUCTION_COLORS.steel };
  const inputStyle = {
    backgroundColor: CONSTRUCTION_COLORS.white,
    color: CONSTRUCTION_COLORS.ink,
    border: `1px solid ${CONSTRUCTION_COLORS.concrete}`,
  };

  if (sent) {
    return (
      <div className="text-center p-10 rounded-sm kc-corners" style={{ backgroundColor: CONSTRUCTION_COLORS.paper }}>
        <p className="font-display font-semibold text-xl mb-2" style={{ color: CONSTRUCTION_COLORS.ink }}>
          Opening WhatsApp…
        </p>
        <p className="font-body text-sm" style={{ color: CONSTRUCTION_COLORS.steel }}>
          If it didn't open automatically, check your browser's pop-up blocker, or call us directly at{" "}
          {PHONE_NUMBER_DISPLAY}.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 kc-plate kc-focus px-6 py-2.5 rounded-sm"
          style={{ backgroundColor: CONSTRUCTION_COLORS.orange, color: CONSTRUCTION_COLORS.white }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 p-6 md:p-10 rounded-sm kc-corners"
      style={{ backgroundColor: CONSTRUCTION_COLORS.paper }}
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="kc-plate block mb-2" style={labelStyle}>
            Name
          </label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            className="w-full px-4 py-3 rounded-sm font-body text-sm kc-focus"
            style={inputStyle}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="kc-plate block mb-2" style={labelStyle}>
            Phone Number
          </label>
          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            inputMode="numeric"
            maxLength={10}
            pattern="[6-9]{1}[0-9]{9}"
            title="Enter a valid 10-digit Indian mobile number"
            className="w-full px-4 py-3 rounded-sm font-body text-sm kc-focus"
            style={inputStyle}
            placeholder="9876543210"
          />
          {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="kc-plate block mb-2" style={labelStyle}>
          Email Address (optional)
        </label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          className="w-full px-4 py-3 rounded-sm font-body text-sm kc-focus"
          style={inputStyle}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="kc-plate block mb-2" style={labelStyle}>
          Project Type
        </label>
        <select
          required
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-sm font-body text-sm kc-focus"
          style={inputStyle}
        >
          <option value="">Select type</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.projectType && <p className="mt-2 text-sm text-red-600">{errors.projectType}</p>}
      </div>

      <div>
        <label className="kc-plate block mb-2" style={labelStyle}>
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-sm font-body text-sm kc-focus resize-none"
          style={inputStyle}
          placeholder="Tell us about your project — location, scale, timeline."
        />
      </div>

      <button
        type="submit"
        className="kc-plate kc-focus px-7 py-3.5 rounded-sm justify-self-center inline-flex items-center gap-2 transition-transform hover:scale-105"
        style={{ backgroundColor: "#25D366", color: "#08331C" }}
      >
        Get My Quote on WhatsApp
      </button>

      <p className="font-body text-xs text-center" style={{ color: CONSTRUCTION_COLORS.steel }}>
        Our construction team usually replies within a few working hours.
      </p>
    </form>
  );
}
