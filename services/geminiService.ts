
// خدمة روابط الواتساب للتواصل المباشر
// الرقم المستخدم: 96891477084 (عمان)

export const createWhatsAppLink = (packageName: string, price: string, downPayment: string) => {
  const phone = "96891477084"; 
  const message = `السلام عليكمً فريق Cloud 👋
أرغب بالاشتراك في *${packageName}* بسعر إجمالي *${price}*.

أنا موافق على دفع المقدم *(${downPayment})* للبدء في المشروع.
يرجى تزويدي بالحساب البنكي.`;
  
https://api.whatsapp.com/send?phone=96338791
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
};

export const createGeneralContactLink = () => {
  const phone = "96891477084";
  const message = `السلام عليكمً، لدي استفسار بخصوص خدمات تصميم المواقع...`;
  
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
};
