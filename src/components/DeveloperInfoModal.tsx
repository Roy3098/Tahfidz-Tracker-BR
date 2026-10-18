import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Copy, 
  Check, 
  ExternalLink, 
  X
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
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const devPhone = '085881914997';
  const devPhoneWa = '6285881914997';
  const devEmail = 'abuzair998@gmail.com';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 w-full max-w-lg flex flex-col overflow-hidden text-slate-800 dark:text-slate-100 animate-in zoom-in-95 duration-150 max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="developer-info-title"
      >
        {/* Header - Bersih, Simpel & Tenang */}
        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div>
            <h2 id="developer-info-title" className="text-base font-bold text-slate-900 dark:text-slate-100">
              Pesan & Informasi Pengembang
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Tahfidz Tracker
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            title="Tutup pesan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Letter Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {/* Bismillah */}
          <div className="text-center py-1">
            <p className="text-emerald-800 dark:text-emerald-400 font-serif text-base sm:text-lg">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
          </div>

          {/* Salutation */}
          <p className="font-semibold text-slate-900 dark:text-slate-100">
            Assalamu’alaikum warahmatullahi wabarakatuh.
          </p>

          <p>
            Perkenalkan, saya <strong>Muhammad Siroj</strong>, yang dikenal dengan nama <strong>Abu Uzair</strong>, pengembang Tahfidz Tracker.
          </p>

          <p>
            Tahfidz Tracker dikembangkan sebagai bentuk ikhtiar untuk membantu para pengajar, pengelola lembaga pendidikan Islam, dan wali santri dalam memantau perkembangan hafalan Al-Qur’an dengan lebih mudah dan terstruktur.
          </p>

          <p>
            Website ini dapat digunakan secara gratis. Saya berusaha membangunnya dengan memanfaatkan berbagai tools gratis agar manfaatnya bisa dirasakan oleh lebih banyak orang.
          </p>

          <p>
            Meskipun gratis untuk digunakan, proses pembuatannya membutuhkan waktu, pembelajaran, riset, dan pengembangan selama berbulan-bulan. Tentu masih banyak kekurangan yang perlu diperbaiki, dan saya berharap website ini dapat terus berkembang serta memberikan manfaat yang lebih luas.
          </p>

          {/* Prayer Request Callout - Bersih & Tenang */}
          <div className="border-l-2 border-emerald-600 dark:border-emerald-500 pl-3 py-1 bg-emerald-50/40 dark:bg-emerald-950/20 text-slate-800 dark:text-slate-200 rounded-r-lg">
            <p className="italic">
              Saya tidak mengharapkan imbalan materi untuk penggunaan website ini. Saya hanya memohon doa yang baik dari para pengguna, semoga Allah memberkahi ilmu dan usaha ini, mengampuni dosa-dosa saya, serta melimpahkan kebaikan, kesehatan, dan keberkahan rezeki kepada saya dan keluarga.
            </p>
          </div>

          <p>
            Semoga setiap kemudahan yang hadir melalui website ini menjadi amal jariyah dan sebab bertambahnya kecintaan kita terhadap Al-Qur’an.
          </p>

          <p className="font-semibold text-emerald-800 dark:text-emerald-400">
            Jazakumullahu khairan atas doa dan dukungannya.
          </p>

          {/* Clean Contact Section */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Kontak Pengembang
            </h3>
            
            <p className="text-xs text-slate-600 dark:text-slate-400">
              <strong>Nama:</strong> Muhammad Siroj / Abu Uzair
            </p>

            <div className="space-y-1.5 pt-1">
              {/* WhatsApp Row */}
              <div className="flex items-center justify-between p-2 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40 text-xs">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-medium text-slate-800 dark:text-slate-200">WhatsApp:</span>
                  <span className="font-bold text-slate-900 dark:text-slate-100">{devPhone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <a
                    href={`https://wa.me/${devPhoneWa}?text=Assalamu%27alaikum%20Abu%20Uzair,%20terkait%20Tahfidz%20Tracker...`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg text-[11px] transition-colors flex items-center gap-1"
                  >
                    <span>Chat</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(devPhone, 'phone')}
                    className="px-2 py-1 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-[11px] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {copiedItem === 'phone' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600 font-medium">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex items-center justify-between p-2 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40 text-xs">
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span className="font-medium text-slate-800 dark:text-slate-200">Email:</span>
                  <span className="font-bold text-slate-900 dark:text-slate-100 truncate">{devEmail}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  <a
                    href={`mailto:${devEmail}?subject=Pertanyaan%20/%20Masukan%20Tahfidz%20Tracker`}
                    className="px-2 py-1 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg text-[11px] transition-colors flex items-center gap-1"
                  >
                    <span>Kirim</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(devEmail, 'email')}
                    className="px-2 py-1 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-[11px] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {copiedItem === 'email' ? (
                      <>
                        <Check className="w-3 h-3 text-teal-600" />
                        <span className="text-teal-600 font-medium">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Dua */}
          <div className="pt-2 text-center text-xs text-slate-600 dark:text-slate-400">
            <p className="font-medium text-slate-800 dark:text-slate-200">
              Barakallahu fiikum. Semoga Allah menerima setiap amal kebaikan kita dan menjadikannya pemberat timbangan amal di akhirat.
            </p>
          </div>
        </div>

        {/* Footer Actions - Bersih dan Ringkas */}
        <div className="px-5 py-3 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
