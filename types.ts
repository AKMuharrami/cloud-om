

export interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  color: string;
  paymentTerms: {
    downPayment: string;
    finalPayment: string;
  };
  supportPrice: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const PACKAGES: Package[] = [
  {
    id: 'starter',
    name: 'الباقة الشخصية',
    price: '200 ر.ع',
    description: 'مثالية للأفراد وصفحات الهبوط التعريفية.',
    features: [
      'صفحة هبوط واحدة (Landing Page)',
      'تصميم متجاوب مع الجوال',
      'ربط الدومين (النطاق)',
      'شهادة حماية SSL مجانية',
      'تسليم خلال 3 أيام'
    ],
    color: 'bg-blue-50',
    isPopular: false,
    paymentTerms: {
      downPayment: '50 ر.ع',
      finalPayment: '150 ر.ع'
    },
    supportPrice: '55 ر.ع'
  },
  {
    id: 'pro',
    name: 'باقة الأعمال',
    price: '500 ر.ع',
    description: 'الخيار الأفضل للشركات الناشئة والمؤسسات.',
    features: [
      'موقع متكامل (حتى 5 صفحات)',
      'لوحة تحكم لإدارة المحتوى',
      'تهيئة لمحركات البحث (SEO)',
      'تصميم هوية بصرية مبسط',
      'نموذج تواصل وخرائط جوجل',
      'دعم فني لمدة شهر',
      'تسليم خلال 7 أيام'
    ],
    color: 'bg-primary-50',
    isPopular: true,
    paymentTerms: {
      downPayment: '200 ر.ع',
      finalPayment: '300 ر.ع'
    },
    supportPrice: '100 ر.ع'
  },
  {
    id: 'elite',
    name: 'المتجر الإلكتروني',
    price: '1500 ر.ع',
    description: 'ابدأ تجارتك الإلكترونية بقوة واحترافية.',
    features: [
      'متجر إلكتروني متكامل',
      'بوابة دفع إلكتروني (فيزا/بنك مسقط)',
      'إدارة المنتجات والمخزون',
      'لوحة تحكم احترافية',
      'تقارير مبيعات تفصيلية',
      'ربط مع شركات الشحن',
      'دعم فني لمدة 3 أشهر'
    ],
    color: 'bg-purple-50',
    isPopular: false,
    paymentTerms: {
      downPayment: '500 ر.ع',
      finalPayment: '1000 ر.ع'
    },
    supportPrice: '185 ر.ع'
  }
];