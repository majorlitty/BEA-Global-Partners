'use client';

import Image from 'next/image';
import { ArrowRight, Globe, Shield, TrendingUp, Building2, ChevronRight, Menu, Target, Users, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0f16] text-slate-200 selection:bg-amber-700/30">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 w-full z-50 border-b border-white/5 bg-[#0a0f16]/80 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg shadow-amber-900/20">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-wide text-white leading-none">BEA</span>
              <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase mt-1">Global Partners</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-sm font-medium text-slate-300 tracking-wide">
            {['Strategy', 'Risk Management', 'Governance', 'Global Markets'].map((item) => (
              <a key={item} href="#" className="relative group hover:text-amber-500 transition-colors py-1">
                {item}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-amber-500 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <button className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-amber-600/30 text-amber-500 hover:bg-amber-600 hover:text-white transition-all text-sm font-medium tracking-wide rounded-sm">
              Engage Our Firm
            </button>
            <button className="lg:hidden text-slate-300 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center border-b border-white/5">
        {/* Background Elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-luminosity"></div>
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Radial Gradients for depth */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-amber-900/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f16]/50 via-transparent to-[#0a0f16]"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-gradient-to-r from-amber-600 to-transparent"></div>
              <span className="text-amber-500 text-xs font-bold tracking-[0.25em] uppercase">Strategic Advisory Firm</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-serif text-white leading-[1.05] mb-8 tracking-tight"
            >
              Navigating Complexity. <br />
              <span className="text-slate-400 italic font-light">Unlocking Global Growth.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl font-light"
            >
              BEA Global Partners is a boutique strategic advisory firm helping organizations navigate complex regulatory environments, manage enterprise risk, and unlock global growth opportunities.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16"
            >
              <button className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white hover:bg-amber-700 transition-all text-sm font-medium tracking-wider uppercase rounded-sm group shadow-lg shadow-amber-900/20">
                Explore Capabilities
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-slate-300 hover:border-slate-400 hover:text-white transition-all text-sm font-medium tracking-wider uppercase rounded-sm group">
                Our Global Footprint
                <ChevronRight className="ml-2 w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
              </button>
            </motion.div>

            {/* Who We Serve */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-8 border-t border-white/10"
            >
              <p className="text-xs text-slate-500 tracking-[0.2em] uppercase font-medium mb-4">Advising Global Leaders</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400 font-light">
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full"></div>Multinational Corporations</span>
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full"></div>International Investors</span>
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full"></div>Government Institutions</span>
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full"></div>Corporate Partners</span>
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full"></div>Growth-Focused Enterprises</span>
              </div>
            </motion.div>
          </div>

          {/* Stats / Info Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-24 pt-12 border-t border-white/10 relative overflow-hidden -mx-6 px-6 md:mx-0 md:px-0"
          >
            {/* Gradient masks for smooth fade on edges */}
            <div className="absolute left-0 top-12 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0a0f16] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-12 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0a0f16] to-transparent z-10 pointer-events-none"></div>

            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              className="flex w-max"
            >
              {[
                { value: "Global", label: "Client Footprint" },
                { value: "Australia", label: "Primary Base" },
                { value: "Executive", label: "Level Expertise" },
                { value: "Boutique", label: "Advisory Approach" },
                { value: "Global", label: "Client Footprint" },
                { value: "Australia", label: "Primary Base" },
                { value: "Executive", label: "Level Expertise" },
                { value: "Boutique", label: "Advisory Approach" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center">
                  <div className="px-12 md:px-24 relative text-center">
                    <div className="text-3xl lg:text-4xl font-serif text-white mb-3">{stat.value}</div>
                    <div className="text-xs text-slate-400 tracking-[0.2em] uppercase font-medium whitespace-nowrap">{stat.label}</div>
                  </div>
                  {/* Separator */}
                  <div className="w-[1px] h-16 bg-white/5"></div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Authority Positioning Section */}
      <section className="py-32 bg-[#0a0f16] relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[500px] lg:h-[700px] w-full rounded-sm overflow-hidden group"
            >
              <Image 
                src="https://picsum.photos/seed/architecture/1200/1600" 
                alt="Strategic Advisory" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0a0f16]/20 group-hover:bg-transparent transition-colors duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] via-transparent to-transparent opacity-60"></div>
            </motion.div>
            
            {/* Right: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-gradient-to-r from-amber-600 to-transparent"></div>
                <span className="text-amber-500 text-xs font-bold tracking-[0.25em] uppercase">Authority Positioning</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-serif text-white leading-[1.15] tracking-tight mb-10">
                Strategic Insight for Complex Business Environments
              </h2>
              
              <div className="flex flex-col gap-8 text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                <p>
                  Organizations today face increasingly complex regulatory landscapes, evolving risk environments, and rapidly shifting global markets.
                </p>
                <p>
                  BEA Global Partners provides senior-level advisory services that help leaders navigate these challenges with clarity and confidence.
                </p>
                <p>
                  Our work combines strategic insight, rigorous analysis, and practical implementation to support sustainable growth and resilient organizations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-[#0a0f16] relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-gradient-to-r from-amber-600 to-transparent"></div>
                <span className="text-amber-500 text-xs font-bold tracking-[0.25em] uppercase">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                Tailor-made solutions <br />
                <span className="italic text-slate-400 font-light">for your growth</span>
              </h2>
            </div>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white hover:bg-amber-700 transition-all text-sm font-medium tracking-wider uppercase rounded-sm group shadow-lg shadow-amber-900/20">
              Contact an Advisor
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                num: "01",
                title: "Strategy & Management Consulting",
                desc: "Helping organizations define strategic direction, improve performance, and achieve sustainable growth.",
                includes: [
                  "Corporate strategy",
                  "Organizational transformation",
                  "Market expansion strategy",
                  "Operational improvement"
                ]
              },
              {
                num: "02",
                title: "Enterprise & Financial Risk Management",
                desc: "Helping organizations identify, assess, and mitigate risk across operations and financial systems.",
                includes: [
                  "Enterprise risk frameworks",
                  "Financial risk assessment",
                  "Governance and control systems",
                  "Risk mitigation planning"
                ]
              },
              {
                num: "03",
                title: "Regulatory Compliance",
                desc: "Helping organizations navigate complex regulatory environments across jurisdictions.",
                includes: [
                  "Regulatory advisory",
                  "Compliance program design",
                  "Corporate governance frameworks",
                  "Risk and compliance monitoring systems"
                ]
              },
              {
                num: "04",
                title: "Business Development & Market Entry",
                desc: "Helping companies expand into new markets and form strategic partnerships.",
                includes: [
                  "International market entry",
                  "Strategic partnerships",
                  "Government relations advisory",
                  "Growth strategy development"
                ]
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 sm:p-10 lg:p-12 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-amber-600/0 via-amber-600/0 to-amber-600/0 group-hover:via-amber-600/50 transition-all duration-700"></div>
                
                <div className="text-5xl md:text-6xl font-serif text-white/5 mb-6 md:mb-8 group-hover:text-amber-900/20 transition-colors duration-500">{service.num}</div>
                
                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-white mb-4 group-hover:text-amber-500 transition-colors leading-snug">{service.title}</h3>
                <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light mb-8 md:mb-10 flex-grow">{service.desc}</p>
                
                <div className="mt-auto pt-6 md:pt-8 border-t border-white/5">
                  <p className="text-xs text-slate-500 tracking-[0.2em] uppercase font-medium mb-4 md:mb-6">Capabilities Include</p>
                  <ul className="space-y-3 md:space-y-4">
                    {service.includes.map((item, j) => (
                      <li key={j} className="flex items-start text-sm md:text-base text-slate-300 font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 md:mt-2.5 mr-3 md:mr-4 flex-shrink-0"></div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-32 bg-[#0a0f16] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-[#0a0f16] to-[#0a0f16] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center gap-4 mb-6"
            >
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-amber-600"></div>
              <span className="text-amber-500 text-xs font-bold tracking-[0.25em] uppercase">The BEA Advantage</span>
              <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-amber-600"></div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight"
            >
              A Global Perspective. <br />
              <span className="italic text-slate-400 font-light">Boutique Precision.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                text: "Strategic insight informed by global markets"
              },
              {
                icon: Building2,
                text: "Deep understanding of regulatory and institutional environments"
              },
              {
                icon: Users,
                text: "Senior-level advisory engagement"
              },
              {
                icon: Target,
                text: "Focused, partner-led consulting approach"
              }
            ].map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                className="flex flex-col items-center text-center p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors rounded-sm"
              >
                <div className="w-16 h-16 rounded-full bg-amber-900/20 border border-amber-600/20 flex items-center justify-center mb-6 text-amber-500">
                  <point.icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <p className="text-lg text-slate-300 font-light leading-relaxed">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-32 bg-[#0a0f16] relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-gradient-to-r from-amber-600 to-transparent"></div>
                <span className="text-amber-500 text-xs font-bold tracking-[0.25em] uppercase">Latest Insights</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                From Our <span className="italic text-slate-400 font-light">Experts</span>
              </h2>
            </div>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-white hover:bg-white/5 transition-all text-sm font-medium tracking-wider uppercase rounded-sm group">
              View All Insights
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://picsum.photos/seed/insight1/800/600",
                category: "Global Markets",
                title: "Navigating the New Geopolitical Landscape in 2026",
                excerpt: "An analysis of emerging trade corridors and their implications for multinational supply chains and investment strategies."
              },
              {
                image: "https://picsum.photos/seed/insight2/800/600",
                category: "Risk Management",
                title: "The Evolution of Enterprise Risk Frameworks",
                excerpt: "How leading organizations are adapting their risk governance to address systemic shocks and regulatory shifts."
              },
              {
                image: "https://picsum.photos/seed/insight3/800/600",
                category: "Strategy",
                title: "Sustainable Growth in High-Inflation Environments",
                excerpt: "Strategic imperatives for maintaining margin resilience and operational efficiency during economic headwinds."
              }
            ].map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col cursor-pointer h-full"
              >
                <div className="relative h-64 w-full overflow-hidden rounded-t-sm">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#0a0f16]/20 group-hover:bg-transparent transition-colors duration-1000"></div>
                </div>
                <div className="p-8 border border-white/5 border-t-0 bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors flex-grow flex flex-col rounded-b-sm">
                  <span className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">{post.category}</span>
                  <h3 className="text-2xl font-serif text-white mb-4 leading-snug group-hover:text-amber-500 transition-colors">{post.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center text-sm font-medium text-white tracking-wide uppercase mt-auto group-hover:text-amber-500 transition-colors">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement CTA Section */}
      <section className="py-32 bg-[#0a0f16] relative z-10 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-[#0a0f16] to-[#0a0f16] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-600"></div>
            <span className="text-amber-500 text-xs font-bold tracking-[0.25em] uppercase">Take the Next Step</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-600"></div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8"
          >
            Discuss Your Strategic Priorities
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Engage with experienced advisors to explore how BEA Global Partners can support your organization’s strategic goals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="inline-flex items-center justify-center px-10 py-5 bg-amber-600 text-white hover:bg-amber-700 transition-all text-sm font-medium tracking-wider uppercase rounded-sm group shadow-lg shadow-amber-900/20">
              Schedule a Strategy Call
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#05080b] pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg shadow-amber-900/20">
                  B
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl tracking-wide text-white leading-none">BEA</span>
                  <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase mt-1">Global Partners</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-sm">
                Advising the world's leading organizations on their most critical strategic, operational, and regulatory challenges.
              </p>
              <div className="flex items-center gap-5">
                <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h4 className="text-white font-serif text-lg mb-6">Expertise</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Corporate Strategy</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Risk Management</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Global Markets</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Digital Transformation</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Regulatory Compliance</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-serif text-lg mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Our Partners</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Insights</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-serif text-lg mb-6">Global Briefing</h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Subscribe to receive our latest perspectives on global markets and strategy.
              </p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/[0.02] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors rounded-sm"
                  required
                />
                <button type="submit" className="bg-amber-600/10 text-amber-500 border border-amber-600/20 px-4 py-3 text-sm font-medium tracking-wide uppercase hover:bg-amber-600 hover:text-white transition-all rounded-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} BEA Global Partners. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
