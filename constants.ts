import { type Product, type Category } from './types';

export const WHATSAPP_NUMBER = "8801406477090"; // Replace with a real WhatsApp number

const commonDetails = `
সাইজ: M, L, XL

M সাইজ: লম্বা - ২৭, বুকের মাপ - ৪১
L সাইজ: লম্বা - ২৮, বুকের মাপ - ৪৩
XL সাইজ: লম্বা - ২৯, বুকের মাপ - ৪৫

অর্ডার করার নিয়ম:
WhatsApp বাটনে ক্লিক করুন।
আপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।
আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।

ডেলিভারি সময়:
ঢাকার ভিতরে: ১ দিন
ঢাকার বাইরে: ৩ দিন
প্রয়োজনে কল করুন:
📞 +৮৮০১৪০৬৪৭৭০৯০
`;

const newTshirtProducts: Product[] = [
  { id: 201, name: "হাফ হাতা প্রিমিয়াম টি-শার্ট [S-01]", price: 350 + 200, category: "টি-শার্ট", description: `পুরুষদের জন্য একটি আরামদায়ক এবং স্টাইলিশ প্রিমিয়াম টি-শার্ট।\nFabrics: ১০০% প্রিমিয়াম কটন\nType: রাউন্ড নেক\nPrint: সলিড\n${commonDetails}`, images: ["https://shopbasebd.com/public/storage/product/image/3-1698731309.jpeg", "https://shopbasebd.com/public/storage/product/image/3-1698731309.jpeg", "https://shopbasebd.com/public/storage/product/image/3-1698731309.jpeg"] },
  { id: 202, name: "হাফ হাতা প্রিমিয়াম টি-শার্ট [S-02]", price: 350 + 200, category: "টি-শার্ট", description: `পুরুষদের জন্য একটি আরামদায়ক এবং স্টাইলিশ প্রিমিয়াম টি-শার্ট।\nFabrics: ১০০% প্রিমিয়াম কটন\nType: রাউন্ড নেক\nPrint: সলিড\n${commonDetails}`, images: ["https://shopbasebd.com/public/storage/product/image/4-1698731454.jpeg", "https://shopbasebd.com/public/storage/product/image/4-1698731454.jpeg", "https://shopbasebd.com/public/storage/product/image/4-1698731454.jpeg"] },


];

const initialProducts: Product[] = [
  {
    id: 2,
    name: "স্ট্রাইপড পোলো শার্ট",
    price: 45.00,
    category: "পলো শার্ট",
    description: `আমাদের স্ট্রাইপড পোলো শার্টের সাথে আপনার স্মার্ট-ক্যাজুয়াল লুককে আরও উন্নত করুন।
Fabrics: কটন পিকে
Type: পোলো কলার
Print: স্ট্রাইপ
${commonDetails}`,
    images: ["https://images.unsplash.com/photo-1625905294245-78e705b4c1de?q=80&w=800&h=800&fit=crop", "https://images.unsplash.com/photo-1619038239003-8defd774bc14?q=80&w=800&h=800&fit=crop", "https://images.unsplash.com/photo-1594938299898-0055b4a55d72?q=80&w=800&h=800&fit=crop"],
  },
  {
    id: 3,
    name: "সাদা শুভ্র শার্ট",
    price: 60.00,
    category: "স্টাইলিস শার্ট",
    description: `যেকোনো পোশাকের ভিত্তি। আমাদের সাদা শুভ্র শার্টটি উচ্চমানের পপলিন কটন থেকে তৈরি।
Fabrics: পপলিন কটন
Type: ফরমাল শার্ট
Print: সলিড
${commonDetails}`,
    images: ["https://images.unsplash.com/photo-1603252109360-7041f021a8f9?q=80&w=800&h=800&fit=crop", "https://images.unsplash.com/photo-1589310243343-05b8474136e2?q=80&w=800&h=800&fit=crop", "https://images.unsplash.com/photo-1618677891278-931c07370894?q=80&w=800&h=800&fit=crop"],
  },
  {
    id: 4,
    name: "মার্জিত পাঞ্জাবি",
    price: 80.00,
    category: "পাঞ্জাবি",
    description: `আধুনিকতার ছোঁয়ায় ঐতিহ্য উদযাপন করুন। এই মার্জিত পাঞ্জাবিটি একটি বিলাসবহুল সিল্ক-মিশ্রিত ফ্যাব্রিক থেকে তৈরি।
Fabrics: সিল্ক মিশ্রিত
Type: ঐতিহ্যবাহী
Print: এমব্রয়ডারি
${commonDetails}`,
    images: ["https://picsum.photos/seed/panjabi1/800/800", "https://picsum.photos/seed/panjabi1a/800/800", "https://picsum.photos/seed/panjabi1b/800/800"],
  },
  {
    id: 5,
    name: "কাস্টম গ্রাফিক টি-শার্ট",
    price: 35.00,
    category: "কাস্টম প্রিন্টেড টি-শার্ট",
    description: `আমাদের কাস্টম গ্রাফিক টি-শার্ট দিয়ে নিজেকে প্রকাশ করুন। নরম, টেকসই কটন থেকে তৈরি।
Fabrics: নরম কটন
Type: রাউন্ড নেক
Print: গ্রাফিক প্রিন্ট
${commonDetails}`,
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&h=800&fit=crop", "https://images.unsplash.com/photo-1633513331405-b3a2e3a51b5c?q=80&w=800&h=800&fit=crop", "https://images.unsplash.com/photo-1633513331213-3904a4f87993?q=80&w=800&h=800&fit=crop"],
  },
  {
    id: 6,
    name: "নেভি ব্লু পোলো",
    price: 48.00,
    category: "পলো শার্ট",
    description: `আপনার সংগ্রহে একটি বহুমুখী সংযোজন। এই নেভি ব্লু পোলোটি সাধারণ স্টাইলের প্রতীক।
Fabrics: কটন পিকে
Type: পোলো কলার
Print: সলিড
${commonDetails}`,
    images: ["https://images.unsplash.com/photo-1554924513-7a1b3acec55a?q=80&w=800&h=800&fit=crop", "https://images.unsplash.com/photo-1618510103445-314983a54a0e?q=80&w=800&h=800&fit=crop", "https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=800&h=800&fit=crop"],
  },
  {
    id: 7,
    name: "লিনেন মিশ্রিত শার্ট",
    price: 65.00,
    category: "স্টাইলিস শার্ট",
    description: `আমাদের লিনেন মিশ্রিত শার্টে ঠান্ডা এবং স্টাইলিশ থাকুন। হালকা ফ্যাব্রিকটি উষ্ণ আবহাওয়ার জন্য উপযুক্ত।
Fabrics: লিনেন মিশ্রিত
Type: ক্যাজুয়াল শার্ট
Print: সলিড
${commonDetails}`,
    images: ["https://images.unsplash.com/photo-1621072151093-e3801299941a?q=80&w=800&h=800&fit=crop", "https://images.unsplash.com/photo-1563178406-412f22c1a7b6?q=80&w=800&h=800&fit=crop", "https://images.unsplash.com/photo-1598814322981-d25a83a04223?q=80&w=800&h=800&fit=crop"],
  },
  {
    id: 8,
    name: "মেরুন পাঞ্জাবি",
    price: 95.00,
    category: "পাঞ্জাবি",
    description: `এই সমৃদ্ধ মেরুন পাঞ্জাবির সাথে একটি বিবৃতি দিন। গভীর রঙটি সূক্ষ্ম, মার্জিত ডিজাইনের দ্বারা পরিপূরক।
Fabrics: কটন সিল্ক
Type: সেমি-লং
Print: ফাইন এমব্রয়ডারি
${commonDetails}`,
    images: ["https://picsum.photos/seed/panjabi2/800/800", "https://picsum.photos/seed/panjabi2a/800/800", "https://picsum.photos/seed/panjabi2b/800/800"],
  },
];

const generatedProducts: Product[] = [];
for (let i = 9; i <= 200; i++) {
  generatedProducts.push({
    id: i,
    name: `প্রিমিয়াম কোয়ালিটি পণ্য #${i}`,
    price: parseFloat((Math.random() * (150 - 30) + 30).toFixed(2)),
    category: ["স্টাইলিস শার্ট", "পলো শার্ট", "পাঞ্জাবি"][i % 3],
    description: `এটি একটি উচ্চ মানের পণ্য, আরামদায়ক এবং টেকসই ফেব্রিক দিয়ে তৈরি।
Fabrics: কটন ব্লেন্ড
Type: ক্যাজুয়াল
Print: সলিড কালার
${commonDetails}`,
    images: [
        `https://picsum.photos/seed/prod${i}a/800/800`,
        `https://picsum.photos/seed/prod${i}b/800/800`,
        `https://picsum.photos/seed/prod${i}c/800/800`
    ],
  });
}

export const INITIAL_PRODUCTS: Product[] = [...initialProducts, ...newTshirtProducts, ...generatedProducts];


export const CATEGORIES: Category[] = [
  { id: 7, name: "টি শার্ট", imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&h=600&fit=crop" },
  { id: 6, name: "পলো শার্ট", imageUrl: "https://images.unsplash.com/photo-1621359318359-57e0b57e7b41?q=80&w=600&h=600&fit=crop" },
  { id: 5, name: "স্টাইলিস শার্ট", imageUrl: "https://images.unsplash.com/photo-1596755094514-5b92400989a7?q=80&w=600&h=600&fit=crop" },
  { id: 28, name: "কাস্টম প্রিন্টেড টি-শার্ট", imageUrl: "https://images.unsplash.com/photo-1586963316131-a29330768225?q=80&w=600&h=600&fit=crop" },
  { id: 10, name: "প্যান্ট", imageUrl: "https://images.unsplash.com/photo-1604176354204-926873782855?q=80&w=600&h=600&fit=crop" },
  { id: 1, name: "পাঞ্জাবি", imageUrl: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&h=600&fit=crop" },
  { id: 2, name: "প্রিন্ট পাঞ্জাবি", imageUrl: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&h=600&fit=crop" },
  { id: 3, name: "লং কম্বো", imageUrl: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=600&h=600&fit=crop" },
  { id: 4, name: "শর্ট কম্বো", imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&h=600&fit=crop" },
  { id: 8, name: "লং-স্লীভ টিশার্ট", imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&h=600&fit=crop" },
  { id: 9, name: "ট্রাউজার", imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&h=600&fit=crop" },
  { id: 11, name: "জুতা", imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ab?q=80&w=600&h=600&fit=crop" },
  { id: 12, name: "বেবি ড্রেস", imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14aa?q=80&w=600&h=600&fit=crop" },
  { id: 20, name: "জেন্টস হুডি", imageUrl: "https://images.unsplash.com/photo-1509938501363-20a2a17a6ab8?q=80&w=600&h=600&fit=crop" },
  { id: 21, name: "জেন্টস জ্যাকেট", imageUrl: "https://images.unsplash.com/photo-1551028739-1b5c4f2ce88d?q=80&w=600&h=600&fit=crop" },
  { id: 22, name: "লেডিস হুডি", imageUrl: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&h=600&fit=crop" },
  { id: 23, name: "লেডিস জ্যাকেট", imageUrl: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?q=80&w=600&h=600&fit=crop" },
  { id: 24, name: "সুয়েটার", imageUrl: "https://images.unsplash.com/photo-1616253434638-3c723a1d431c?q=80&w=600&h=600&fit=crop" },
  { id: 25, name: "সুইটশার্ট", imageUrl: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=600&h=600&fit=crop" },
  { id: 26, name: "হুডি কম্ব", imageUrl: "https://images.unsplash.com/photo-1559551409-dadc95943809?q=80&w=600&h=600&fit=crop" },
  { id: 27, name: "বেবি উইন্টার", imageUrl: "https://images.unsplash.com/photo-1519682718029-75b47a0b3f55?q=80&w=600&h=600&fit=crop" },
  { id: 13, name: "হেডফোন", imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&h=600&fit=crop" },
  { id: 14, name: "স্মার্ট-ওয়াচ", imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&h=600&fit=crop" },
  { id: 15, name: "পাওয়ার-ব্যাংক", imageUrl: "https://images.unsplash.com/photo-1588820658893-6b8d3a1fce67?q=80&w=600&h=600&fit=crop" },
  { id: 16, name: "ক্যামেরা", imageUrl: "https://images.unsplash.com/photo-1510127034890-ba27088e244a?q=80&w=600&h=600&fit=crop" },
  { id: 17, name: "স্পিকার", imageUrl: "https://images.unsplash.com/photo-1595152772105-20504a605483?q=80&w=600&h=600&fit=crop" },
  { id: 18, name: "ছাতা", imageUrl: "https://images.unsplash.com/photo-1549488344-cbb6c1441203?q=80&w=600&h=600&fit=crop" },
  { id: 19, name: "রেইন কোট", imageUrl: "https://images.unsplash.com/photo-1591148113833-3323c68a1835?q=80&w=600&h=600&fit=crop" },
];
