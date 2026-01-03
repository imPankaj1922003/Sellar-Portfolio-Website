import React, { useState } from 'react';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [activeService, setActiveService] = useState('pos');

    const posFeatures = [
        { name: "Vendor POS Dashboard Access", basic: true, pro: true },
        { name: "Total Sale Board", basic: true, pro: true },
        { name: "Automated Sales Reports", basic: true, pro: true },
        { name: "Bar Code + QR Code Scanner", basic: true, pro: true },
        { name: "Daily Performance Board", basic: false, pro: true },
        { name: "Multi-Store Functionality", basic: false, pro: true },
        { name: "Automated PnL Reports", basic: false, pro: true },
        { name: "Custom User Permissions", basic: false, pro: true },
    ];

    const catalogueFeatures = [
        { name: "Digital Product Showcase", basic: true, pro: true },
        { name: "WhatsApp Ordering", basic: true, pro: true },
        { name: "QR Code for Storefront", basic: true, pro: true },
        { name: "Custom Domain Mapping", basic: false, pro: true },
        { name: "Inventory Sync with POS", basic: false, pro: true },
        { name: "Premium Themes", basic: false, pro: true },
        { name: "Customer Analytics", basic: false, pro: true },
        { name: "Bulk SEO Tools", basic: false, pro: true },
    ];

    const currentFeatures = activeService === 'pos' ? posFeatures : catalogueFeatures;

    const pricing = {
        pos: {
            basic: isYearly ? '999' : '99',
            pro: isYearly ? '2999' : '299'
        },
        catalogue: {
            basic: isYearly ? '999' : '99',
            pro: isYearly ? '4999' : '499'
        }
    };

    return (
        <section className="py-12 md:py-20 px-4 md:px-6 bg-[#f8fafc]" id="pricing">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-[900] text-[#00171f] mb-4 md:mb-6 leading-tight">
                        Simple, <span className="text-[#007EA7]">Transparent</span> Pricing
                    </h2>

                    {/* Toggle Monthly/Yearly */}
                    <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 font-bold text-slate-500 text-sm md:text-base">
                        <span className={!isYearly ? "text-[#00171f]" : ""}>4 Weeks</span>
                        <label className="relative inline-block w-11 h-6 cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isYearly}
                                onChange={() => setIsYearly(!isYearly)}
                            />
                            <div className="w-full h-full bg-slate-300 rounded-full peer peer-checked:bg-[#007EA7] transition-colors"></div>
                            <div className="absolute left-1 bottom-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                        </label>
                        <span className={isYearly ? "text-[#00171f]" : ""}>
                            Yearly <span className="ml-1 md:ml-2 text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-md">Save 23%</span>
                        </span>
                    </div>

                    {/* Service Tabs */}
                    <div className="inline-flex bg-slate-200 p-1 rounded-xl">
                        <button
                            className={`px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${activeService === 'pos' ? 'bg-white text-[#007EA7] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            onClick={() => setActiveService('pos')}
                        >
                            POSI - billing
                        </button>
                        <button
                            className={`px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${activeService === 'catalogue' ? 'bg-white text-[#007EA7] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            onClick={() => setActiveService('catalogue')}
                        >
                            CATALOG - digital store
                        </button>
                    </div>
                </div>

                {/* Pricing Table Card */}
                <div className="bg-white border border-slate-200 rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden">
                    {/* Table Header */}
                    <div className="grid grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2.2fr_1fr_1fr] bg-slate-50 border-b-2 border-slate-200 sticky top-0 z-20">

                        {/* Dynamic Feature Header */}
                        <div className="p-4 md:p-10 border-r border-slate-200 flex flex-col justify-center">
                            <span className="text-[9px] md:text-[10px] font-extrabold text-slate-400 tracking-widest uppercase mb-1">
                                Features
                            </span>
                            <h3 className="text-sm md:text-2xl font-[1000] text-[#007EA7] tracking-tight uppercase truncate">
                                {activeService === 'pos' ? 'POSI' : 'Catalog'}
                            </h3>
                            {/* --- ADDED BILLING CYCLE TEXT --- */}
                            <span className="text-[8px] md:text-[11px] font-bold text-slate-500 uppercase mt-1">
                                Per {isYearly ? 'Year' : '4 Weeks'}
                            </span>
                        </div>

                        {/* Basic Price Section */}
                        <div className="p-4 md:p-8 mt-2 text-center border-r border-slate-200 flex flex-col justify-center items-center">
                            <span className="block text-[10px] md:text-sm font-extrabold text-slate-500 uppercase tracking-wider mb-1">
                                Basic
                            </span>
                            <span className="block text-lg md:text-4xl font-[900] text-slate-900 leading-none">
                                ₹{pricing[activeService].basic}
                            </span>
                        </div>

                        {/* Pro Price Section */}
                        <div className="p-4 md:p-8 text-center relative bg-blue-50/40 flex flex-col justify-center items-center">
                            {/* Best Seller Badge */}
                            <div className="absolute top-0 left-0 right-0 bg-[#007EA7] text-white text-[7px] md:text-[10px] font-black py-1 uppercase tracking-tighter md:tracking-widest">
                                Best Seller
                            </div>
                            <span className="block text-[10px] md:text-sm font-extrabold text-slate-500 uppercase tracking-wider mb-1 mt-2 md:mt-0">
                                Pro
                            </span>
                            <span className="block text-lg md:text-4xl font-[900] text-[#007EA7] leading-none">
                                ₹{pricing[activeService].pro}
                            </span>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="max-h-[500px] md:max-h-full overflow-y-auto">
                        {currentFeatures.map((f, i) => (
                            <div className="grid grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2.2fr_1fr_1fr] border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors" key={i}>
                                <div className="p-3 md:p-6 text-[10px] md:text-[15px] font-semibold text-slate-700 border-r border-slate-100 flex items-center leading-tight">
                                    {f.name}
                                </div>
                                <div className="p-3 md:p-4 flex justify-center items-center border-r border-slate-100">
                                    {f.basic ?
                                        <span className="text-green-500 text-base md:text-xl font-bold">✔</span> :
                                        <span className="text-red-300 text-base md:text-xl">✖</span>
                                    }
                                </div>
                                <div className="p-3 md:p-4 flex justify-center items-center bg-blue-50/10">
                                    {f.pro ?
                                        <span className="text-green-500 text-base md:text-xl font-bold">✔</span> :
                                        <span className="text-red-300 text-base md:text-xl">✖</span>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-3 mb-3 relative flex justify-center md:justify-start">
                    <span className="absolute left-1 italic text-slate-900 text-xs md:text-sm font-medium">
                        All prices exclude GST.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Pricing;