// components/TeamMosaic.tsx
import Image from "next/image";
import { teamMembers } from "@/data/team"; // Importe tes données

export default function Artists() {
  return (
    <section className="bg-black text-white py-24 px-4 md:px-10 font-avantgarde border-t border-zinc-900">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16 border-b border-zinc-900 pb-6 overflow-hidden">
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-600 mb-2">
            The Collective
          </h2>
          <p className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
            Djs/ <span className="text-zinc-800">MCs</span>
          </p>
        </div>

        {/* La Grille Mosaïque "Chaos" */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[220px] md:auto-rows-[280px]">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`relative bg-zinc-950 border border-zinc-900 overflow-hidden group 
                         ${member.gridClass} ${member.rotation} ${member.mobileOrder}
                         hover:z-30 transition-all duration-500 hover:border-white/20`}
            >
              {/* Image avec effet de zoom au hover */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                  sizes="(max-w-768px) 50vw, 25vw"
                />
              </div>

              {/* Overlay de dégradé pour la lisibilité du texte */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10" />

              {/* Texte (ITC Avant Garde) */}
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 z-20 flex flex-col justify-end h-full">
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                  {member.aka}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter leading-none mt-1 break-words">
                  {member.name}
                </h3>
              </div>

              {/* Effet visuel au hover (optionnel) */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-15" />
            </div>
          ))}

          {/* Case "Placeholder" ou "Call to Action" pour remplir le chaos */}
          <div className="col-span-1 row-span-1 bg-zinc-900/50 border border-dashed border-zinc-800 flex items-center justify-center p-6 text-center rotate-[-3deg] md:translate-y-[-20%]">
            <p className="text-xs text-zinc-700 uppercase tracking-widest">
              More Artists <br /> Coming Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
