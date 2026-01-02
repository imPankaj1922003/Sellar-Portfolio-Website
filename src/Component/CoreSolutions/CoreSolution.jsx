import React from 'react';

const CoreSolution = () => {
    const allSolutions = [
        { title: "POSI", icon: "💳", subheading:"POS & Inventory", desc: "Manage Billing, Inventory, Customers, Payments, and Reports seamlessly from a single Dashboard.", comingSoon: false },
        { title: "CATALOG ", icon: "📦", subheading:"Online Catalog", desc: "A simple online catalogue to showcase, manage, and sell your products.", comingSoon: false },
        { title: "HRMS", icon: "📈", subheading:"", desc: "Manage staff payroll and attendance.", comingSoon: true },
        { title: "Service Calendar", icon: "🌐", subheading:"", desc: "", comingSoon: true },
        { title: "E-Dukan", icon: "👥", subheading:"", desc: "", comingSoon: true },
    ];

    return (
        <section 
            id="solutions" 
            className="relative py-20 px-4 bg-[#0f172a] overflow-hidden"
        >
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_0%_0%,rgba(0,126,167,0.15)_0%,transparent_50%)] z-0"></div>

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-[#00A8E8] text-xs font-extrabold tracking-[2px] uppercase block mb-2">
                        Powering Your Business
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                        Core <span className="text-[#00A8E8]">Solutions</span>
                    </h2>
                    <p className="text-slate-400 text-base max-w-xl mx-auto">
                        All the essential tools to run and grow your business on one platform
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-3 md:gap-5">
                    {allSolutions.map((sol, index) => (
                        <div 
                            key={index}
                            className={`
                                group relative 
                                bg-slate-800/70 backdrop-blur-md 
                                border border-white/5 rounded-sm 
                                p-5 md:p-6 
                                flex flex-col gap-3 md:gap-4 
                                transition-all duration-300 ease-out 
                                hover:-translate-y-2 hover:bg-slate-900 hover:border-[#00A8E8] hover:shadow-2xl hover:shadow-black/30
                                overflow-hidden
                                
                                /* Centering logic for odd last item */
                                last:odd:col-span-2 last:odd:justify-self-center last:odd:w-full md:last:odd:max-w-[490px]
                            `}
                        >
                            {/* --- RESPONSIVE RIBBON --- */}
                            {sol.comingSoon && (
                                <>
                                    {/* MOBILE RIBBON (Centered Horizontal) */}
                                    <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-[#00A8E8]/95 backdrop-blur-[2px] text-white text-xs font-bold text-center py-3 shadow-xl tracking-widest uppercase z-20 pointer-events-none">
                                        Coming Soon
                                    </div>

                                    {/* DESKTOP RIBBON (45 Degree Corner) */}
                                    <div className="hidden md:block absolute top-0 right-0 w-24 h-24 overflow-hidden z-10 pointer-events-none">
                                        <div className="absolute top-4 -right-8 w-32 bg-[#00A8E8] text-white text-[9px] font-bold text-center py-1 rotate-45 shadow-lg border-b border-white/20 tracking-wider">
                                            COMING SOON
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* 1. TITLE (Always Top) */}
                            <div className={`text-center md:text-left w-full ${sol.comingSoon ? 'opacity-50 blur-[0.5px] md:opacity-100 md:blur-0' : ''}`}>
                                <h3 className="text-sm md:text-lg text-slate-50 font-bold group-hover:text-white transition-colors">
                                    {sol.title}
                                </h3>
                            </div>

                            {/* 2. ICON & DESCRIPTION */}
                            <div className={`
                                flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 
                                ${sol.comingSoon ? 'opacity-50 blur-[0.5px] md:opacity-100 md:blur-0' : ''}
                            `}>
                                
                                {/* Icon */}
                                <div className="w-12 h-12 min-w-[48px] bg-[#00A8E8]/10 text-2xl flex items-center justify-center rounded-xl shadow-inner shadow-[#00A8E8]/10 shrink-0">
                                    {sol.icon}
                                </div>

                                <h3 className="text-sm md:text-lg text-slate-50 font-bold group-hover:text-white transition-colors">
                                    {sol.subheading}
                                </h3>
                                
                                {/* Description (Below Icon on Mobile, Right of Icon on Desktop) */}
                                <p className="text-xs md:text-sm text-slate-400 leading-relaxed text-center md:text-left block group-hover:text-slate-300">
                                    {sol.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreSolution;