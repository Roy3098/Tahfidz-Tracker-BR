import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  BookOpen, 
  X,
  Share2
} from 'lucide-react';

interface DeveloperInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperInfoModal: React.FC<DeveloperInfoModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const devPhone = '085881914997';
  const devPhoneWa = '6285881914997';
  const devEmail = 'abuzair998@gmail.com';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-emerald-100 dark:border-emerald-900/60 w-full max-w-2xl flex flex-col overflow-hidden text-slate-800 dark:text-slate-100 animate-in zoom-in-95 duration-200 max-h-[92vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="developer-info-title"
      >
        {/* Header with Islamic Aesthetics */}
        <div className="relative px-6 py-5 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white shrink-0 overflow-hidden">
          {/* Subtle Arabesque / Arch decorative glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-400/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative flex items-start justify-between gap-3">
            <div className="flex items-center gap-3.5">
              <div className="relative shrink-0">
                <img
                  src="/pwa-192x192.png"
                  alt="Tahfidz Tracker Icon"
                  className="w-13 h-13 rounded-2xl object-cover shadow-lg ring-2 ring-emerald-400/30"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-700/80 text-emerald-100 border border-emerald-500/40">
                    Tentang Pengembang
                  </span>
                  <span className="text-[11px] text-emerald-200/90 font-medium">
                    Tahfidz Tracker
                  </span>
                </div>
                <h2 id="developer-info-title" className="text-lg sm:text-xl font-bold tracking-tight text-white mt-1">
                  Pesan & Informasi Pengembang
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              title="Tutup informasi pengembang"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Bismillah Banner */}
          <div className="mt-4 pt-3 border-t border-emerald-700/60 flex items-center justify-center">
            <p className="text-emerald-100 font-serif text-base sm:text-lg tracking-wide text-center drop-shadow-xs">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 space-y-5 overflow-y-auto leading-relaxed text-sm text-slate-700 dark:text-slate-300">
          
          {/* Greeting & Introduction */}
          <div className="bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-800/60 rounded-2xl p-4 sm:p-5">
            <p className="text-emerald-950 dark:text-emerald-200 font-semibold text-base mb-2">
              Assalamu’alaikum warahmatullahi wabarakatuh.
            </p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              Perkenalkan, saya <strong>Muhammad Siroj</strong>, yang dikenal dengan nama <strong>Abu Uzair</strong>, pengembang <span className="text-emerald-800 dark:text-emerald-300 font-bold">Tahfidz Tracker</span>.
            </p>
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-4">
            <p>
              Tahfidz Tracker dikembangkan sebagai bentuk ikhtiar untuk membantu para pengajar, pengelola lembaga pendidikan Islam, dan wali santri dalam memantau perkembangan hafalan Al-Qur’an dengan lebih mudah dan terstruktur.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>Prinsip Layanan Gratis & Terbuka</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Website ini dapat digunakan secara <strong>gratis</strong>. Saya berusaha membangunnya dengan memanfaatkan berbagai tools gratis agar manfaatnya bisa dirasakan oleh lebih banyak orang.
              </p>
            </div>

            <p>
              Meskipun gratis untuk digunakan, proses pembuatannya membutuhkan waktu, pembelajaran, riset, dan pengembangan selama berbulan-bulan. Tentu masih banyak kekurangan yang perlu diperbaiki, dan saya berharap website ini dapat terus berkembang serta memberikan manfaat yang lebih luas.
            </p>

            {/* Sincere Prayer Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-50/90 via-emerald-50/60 to-teal-50/80 dark:from-amber-950/30 dark:via-emerald-950/20 dark:to-teal-950/30 border border-amber-200/70 dark:border-amber-800/60 space-y-2.5">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-xs sm:text-sm">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Permohonan Doa Tulus dari Pengembang</span>
              </div>
              <p className="text-slate-700 dark:text-slate-200 italic leading-relaxed">
                "Saya tidak mengharapkan imbalan materi untuk penggunaan website ini. Saya hanya memohon doa yang baik dari para pengguna, semoga Allah memberkahi ilmu dan usaha ini, mengampuni dosa-dosa saya, serta melimpahkan kebaikan, kesehatan, dan keberkahan rezeki kepada saya dan keluarga."
              </p>
              <p className="text-slate-800 dark:text-slate-200 font-medium">
                Semoga setiap kemudahan yang hadir melalui website ini menjadi amal jariyah dan sebab bertambahnya kecintaan kita terhadap Al-Qur’an.
              </p>
            </div>

            <p className="font-semibold text-emerald-900 dark:text-emerald-200">
              Jazakumullahu khairan atas doa dan dukungannya.
            </p>
          </div>

          {/* Contact Section */}
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-emerald-600" />
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Kontak Pengembang
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* WhatsApp Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-emerald-200 dark:border-emerald-800/70 shadow-xs hover:border-emerald-400 dark:hover:border-emerald-600 transition-all flex flex-col justify-between space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
                        WhatsApp Langsung
                      </span>
                      <span className="font-bold text-sm text-slate-900 dark:text-white block">
                        {devPhone}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 border-t border-slate-100 dark:border-slate-700/60">
                  <a
                    href={`https://wa.me/${devPhoneWa}?text=Assalamu%27alaikum%20Abu%20Uzair,%20terkait%20Tahfidz%20Tracker...`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>Kirim Pesan</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(devPhone, 'phone')}
                    className="p-1.5 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors text-xs flex items-center gap-1 cursor-pointer"
                    title="Salin nomor WhatsApp"
                  >
                    {copiedItem === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-[11px] font-semibold text-emerald-600">Disalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Salin</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-teal-200 dark:border-teal-800/70 shadow-xs hover:border-teal-400 dark:hover:border-teal-600 transition-all flex flex-col justify-between space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 block">
                        Email Resmi
                      </span>
                      <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white block truncate">
                        {devEmail}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 border-t border-slate-100 dark:border-slate-700/60">
                  <a
                    href={`mailto:${devEmail}?subject=Pertanyaan%20/%20Masukan%20Tahfidz%20Tracker`}
                    className="flex-1 py-1.5 px-3 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>Kirim Email</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(devEmail, 'email')}
                    className="p-1.5 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors text-xs flex items-center gap-1 cursor-pointer"
                    title="Salin alamat email"
                  >
                    {copiedItem === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-teal-600" />
                        <span className="text-[11px] font-semibold text-teal-600">Disalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Salin</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Author summary badge */}
            <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <div>
                <strong>Pengembang:</strong> Muhammad Siroj / Abu Uzair
              </div>
              <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
                Indonesia
              </div>
            </div>
          </div>

          {/* Closing Dua */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-900 text-white text-center space-y-2 shadow-sm">
            <p className="font-serif text-sm sm:text-base text-emerald-100">
              بَارَكَ اللَّهُ فِيكُمْ
            </p>
            <p className="font-semibold text-xs sm:text-sm text-emerald-50 leading-relaxed">
              Barakallahu fiikum. Semoga Allah menerima setiap amal kebaikan kita dan menjadikannya pemberat timbangan amal di akhirat.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <span className="text-[11px] text-slate-400 dark:text-slate-500 hidden sm:inline">
            Tahfidz Tracker · Dedikasi untuk Ummah
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs ml-auto"
          >
            Tutup Informasi
          </button>
        </div>
      </div>
    </div>
  );
};
