import { ArrowRight } from "lucide-react";

const Demo = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900">
      <section id="demo" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="p-8">
            <h3 className="text-2xl text-center font-bold text-white mb-6">
              Video Demo MyGudang
            </h3>

            <div className="bg-slate-800 rounded-lg overflow-hidden mb-6">
              <div className="aspect-video bg-slate-900">
                <video
                  className="w-full h-full"
                  src="/demoweb.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>
            </div>
            <div class="w-full py-4 text-center">
              <a target="_blank"
                href="https://inventory.hitechplus.biz"
                class="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold
           hover:bg-blue-700 transition duration-200 shadow-md"
              >
                Lihat Web Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
