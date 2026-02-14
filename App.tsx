
import React from 'react';
import { Hero } from './components/Hero';
import { PACKAGES, PortfolioItem } from './types';
import { createWhatsAppLink, createGeneralContactLink } from './services/geminiService';

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', title: 'صفحة تعريفية/شخصية', category: 'Landing Page', image: 'https://hjrm8lbtnby37npy.public.blob.vercel-storage.com/Screenshot%202026-02-14%20143452.png', url:'https://akmuh.dev' },
  { id: '2', title: 'شركة تغسيل سيارات', category: 'Business', image: 'https://hjrm8lbtnby37npy.public.blob.vercel-storage.com/Screenshot%202026-02-14%20072039.png', url:'https://al-muhannad.com' },
  { id: '3', title: 'متجر فانيلا فاخر', category: 'E-commerce', image: 'https://hjrm8lbtnby37npy.public.blob.vercel-storage.com/Screenshot%202026-02-14%20082522.png', url:'https://van-om-v2.vercel.app' },
  // { id: '4', title: 'عيادة طبية', category: 'Business', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop' },
  // { id: '5', title: 'مطعم برجر', category: 'Landing Page', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop' },
  // { id: '6', title: 'مكتب محاماة', category: 'Corporate', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&h=400&fit=crop' },
];

function App() {
  // دالة للتمرير السلس ومنع تغيير الرابط
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5,19c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5c-0.414,0-0.821,0.034-1.221,0.098 C15.706,1.862,13.562,0,11,0C6.985,0,3.693,3.095,3.123,7.031C1.353,7.561,0,9.167,0,11.5C0,14.538,2.462,17,5.5,17H17.5z"/></svg>
            </div>
            <span className="text-2xl font-black tracking-tighter text-gray-900">Cloud</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="hover:text-primary-600 transition-colors">المميزات</a>
            <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="hover:text-primary-600 transition-colors">أعمالنا</a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="hover:text-primary-600 transition-colors">الباقات</a>
          </nav>

          <a 
            href={createGeneralContactLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gray-900 text-white rounded-lg font-bold text-sm hover:bg-gray-800 transition-all"
          >
            تواصل معنا
          </a>
        </div>
      </header>

      <main>
        <Hero />

        {/* Features Section */}
        <section id="features" className="py-20 bg-white border-b border-gray-50">
          <div className="container mx-auto px-4">
             <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">لماذا تختار Cloud؟</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">نقدم لك أكثر من مجرد تصميم، نقدم تجربة نجاح متكاملة.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">تصميم عصري وجذاب</h3>
                <p className="text-gray-600">نواكب أحدث صيحات التصميم العالمية لنضمن لك موقعاً يبهر زوارك ويعكس احترافيتك.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">سرعة وأداء عالي</h3>
                <p className="text-gray-600">نهتم بأدق التفاصيل البرمجية لضمان سرعة تحميل فائقة وتجربة مستخدم سلسة على جميع الأجهزة.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">دعم فني متميز</h3>
                <p className="text-gray-600">لا نتركك بعد التسليم. فريقنا جاهز دائماً لمساعدتك في أي وقت لضمان استمرار عمل موقعك بكفاءة.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">أعمال نفخر بها</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">نحول الأفكار إلى واقع رقمي ملموس. إليك بعض المشاريع التي قمنا بتنفيذها مؤخراً.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PORTFOLIO_ITEMS.map((item) => (
                <div key={item.id} className="group relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] shadow-sm hover:shadow-xl transition-all duration-300">
                  <a href={item.url} target="_blank" >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary-300 text-sm font-bold mb-1">{item.category}</span>
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">باقات تناسب الجميع</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">اختر الباقة المناسبة لمشروعك وابدأ رحلتك الرقمية اليوم.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-24">
              {PACKAGES.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className={`relative flex flex-col h-full rounded-3xl p-8 transition-all duration-300 ${pkg.isPopular ? 'bg-white shadow-2xl ring-2 ring-primary-500 scale-105 z-10' : 'bg-white shadow-lg border border-gray-100 hover:border-primary-200'}`}
                >
                  {pkg.isPopular && (
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      الأكثر طلباً
                    </div>
                  )}
                  
                  <div className={`w-14 h-14 rounded-2xl ${pkg.color} flex items-center justify-center mb-6`}>
                    <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-black text-gray-900 tracking-tight">{pkg.price}</span>
                  </div>
                  <p className="text-gray-500 mb-6 leading-relaxed">{pkg.description}</p>

                  {/* Payment Terms Section */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">نظام الدفع الميسر</h4>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-600">دفعة أولى للبدء:</span>
                        <span className="text-sm font-bold text-gray-900">{pkg.paymentTerms.downPayment}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200 border-dashed">
                        <span className="text-sm font-semibold text-gray-600">عند التسليم:</span>
                        <span className="text-sm font-bold text-gray-900">{pkg.paymentTerms.finalPayment}</span>
                    </div>
                    <p className="text-[10px] text-green-600 mt-2 font-medium text-center">
                       ✔ المبلغ المتبقي يُدفع بعد اعتماد التصميم والرضا التام
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Monthly Support Price Info */}
                  <div className="mb-6 p-3 bg-blue-50/50 rounded-lg text-xs text-blue-800 flex items-start gap-2">
                     <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                     <span>
                        الدعم الفني الاختياري بعد انتهاء الفترة المجانية: <span className="font-bold">{pkg.supportPrice}/شهرياً</span>
                     </span>
                  </div>

                  <a 
                    href={createWhatsAppLink(pkg.name, pkg.price, pkg.paymentTerms.downPayment)}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${
                      pkg.isPopular 
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-primary-200' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    اطلب الآن
                  </a>
                </div>
              ))}
            </div>

            {/* General Support Plans Info Section */}
            <div className="bg-gray-900 rounded-3xl overflow-hidden text-white">
                <div className="p-8 md:p-12 text-center">
                   <h3 className="text-3xl font-black mb-4">باقات الدعم الفني المستمر</h3>
                   <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                     انتهت فترة الدعم المجاني؟ اختر الباقة التي تناسب حجم موقعك واضمن راحة بالك.
                     تشمل الباقات التحديثات الأمنية، النسخ الاحتياطي، والتعديلات البسيطة.
                   </p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                         <h4 className="font-bold text-lg text-blue-400 mb-2">شخصية</h4>
                         <p className="text-3xl font-black mb-1">55 ر.ع</p>
                         <p className="text-xs text-gray-500">شهرياً</p>
                      </div>
                      <div className="bg-gray-800 rounded-2xl p-6 border-2 border-primary-600 relative">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary-600 text-[10px] px-3 py-1 rounded-b-lg font-bold">موصى به للشركات</div>
                         <h4 className="font-bold text-lg text-primary-400 mb-2 mt-2">أعمال</h4>
                         <p className="text-3xl font-black mb-1">100 ر.ع</p>
                         <p className="text-xs text-gray-500">شهرياً</p>
                      </div>
                      <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                         <h4 className="font-bold text-lg text-purple-400 mb-2">متجر</h4>
                         <p className="text-3xl font-black mb-1">185 ر.ع</p>
                         <p className="text-xs text-gray-500">شهرياً</p>
                      </div>
                   </div>

                   <div className="mt-8">
                      <a 
                        href={createGeneralContactLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                      >
                        <span>اشترك في الدعم الفني</span>
                        <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </a>
                   </div>
                </div>
            </div>

          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5,19c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5c-0.414,0-0.821,0.034-1.221,0.098 C15.706,1.862,13.562,0,11,0C6.985,0,3.693,3.095,3.123,7.031C1.353,7.561,0,9.167,0,11.5C0,14.538,2.462,17,5.5,17H17.5z"/></svg>
            </div>
            <span className="text-xl font-bold text-gray-900">Cloud</span>
          </div>
          <p className="text-gray-500 text-sm">© 2024 جميع الحقوق محفوظة لـ Cloud Agency</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
