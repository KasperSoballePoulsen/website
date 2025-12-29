import React, { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import Button from './Button';
import { useLanguage } from '../../context/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'client' | 'candidate';
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, type }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  if (!isOpen) return null;

  type ClientContactForm = {
    fullName: string;
    email: string;
    phone: string | null;
    company: string;
    message: string;
  };

  type CandidateContactForm = {
    fullName: string;
    email: string;
    phone: string | null;
    linkedInUrl: string | null;
    message: string;
  };

  function toNullIfBlank(v: FormDataEntryValue | null): string | null {
    const s = String(v ?? "").trim();
    return s.length ? s : null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formEl = e.currentTarget;
      const fd = new FormData(formEl);

      const base = {
        fullName: String(fd.get("fullName") ?? "").trim(),
        email: String(fd.get("email") ?? "").trim(),
        phone: toNullIfBlank(fd.get("phone")),
        message: String(fd.get("message") ?? "").trim(),
      };

      const url =
        type === "client" ? "/api/contact-form/client" : "/api/contact-form/candidate";

      const payload: ClientContactForm | CandidateContactForm =
        type === "client"
          ? {
            ...base,
            company: String(fd.get("company") ?? "").trim(),
          }
          : {
            ...base,
            linkedInUrl: toNullIfBlank(fd.get("linkedInUrl")),
          };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Request failed: ${res.status} ${text}`);
      }

      setStep("success");
      formEl.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


  const title = type === 'client' ? t('modal.client_title') : t('modal.candidate_title');
  const subtitle = type === 'client' ? t('modal.client_subtitle') : t('modal.candidate_subtitle');

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-prime-navy/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-lg shadow-2xl animate-fade-in flex flex-col max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-prime-navy transition-colors"
        >
          <X size={24} />
        </button>

        {step === 'form' ? (
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-serif font-bold text-prime-navy mb-2">{title}</h3>
            <p className="text-gray-500 font-light mb-8 text-sm">{subtitle}</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{t('modal.name')}</label>
                <input required name="fullName" type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-prime-blue transition-colors bg-transparent placeholder-gray-400" placeholder="e.g. Jonathan Doe" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{t('modal.email')}</label>
                <input required name="email" type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-prime-blue transition-colors bg-transparent placeholder-gray-400" placeholder="e.g. j.doe@firm.com" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{t('modal.phone')}</label>
                <input name="phone" type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-prime-blue transition-colors bg-transparent placeholder-gray-400" placeholder="e.g. +45 12 34 56 78" />
              </div>

              {type === 'client' && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{t('modal.company')}</label>
                  <input required name="company" type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-prime-blue transition-colors bg-transparent placeholder-gray-400" placeholder="e.g. Global Energy Trading" />
                </div>
              )}

              {type === 'candidate' && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{t('modal.linkedin')}</label>
                  <input name="linkedInUrl" type="url" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-prime-blue transition-colors bg-transparent placeholder-gray-400" placeholder="https://linkedin.com/in/..." />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{t('modal.message')}</label>
                <textarea
                  required
                  name="message"
                  rows={3}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-prime-blue transition-colors bg-transparent placeholder-gray-400 resize-none"
                  placeholder={type === 'client' ? "We are looking for a Senior Power Trader..." : "I am an Algo Dev with 5 years exp..."}
                ></textarea>
              </div>

              <div className="pt-4">
                <Button variant="primary" fullWidth disabled={loading}>
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="animate-spin" size={18} /> {t('modal.sending')}
                    </span>
                  ) : (
                    t('modal.send')
                  )}
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-prime-navy mb-3">{t('modal.success_title')}</h3>
            <p className="text-gray-500 font-light mb-8 max-w-xs">
              {type === 'client' ? t('modal.success_client') : t('modal.success_candidate')}
            </p>
            <Button variant="outline" onClick={onClose}>{t('modal.close')}</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;