import { type Product, type Category } from './types';

export const WHATSAPP_NUMBER = "8801406477090"; // Replace with a real WhatsApp number

const descriptionTemplate = `Fabrics: ১০০% প্রিমিয়াম কটন
Type: ফ্যাশনেবল পোশাক
Print: হাই-কোয়ালিটি প্রিন্ট
Size: M, L, XL

M Size: Length - 27", Chest - 41"
L Size: Length - 28", Chest - 43"
XL Size: Length - 29", Chest - 45"

অর্ডার করার নিয়ম:
WhatsApp বাটনে ক্লিক করুন।
আপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।
আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।

ডেলিভারি সময়:
ঢাকার ভিতরে: ১ দিন
ঢাকার বাইরে: ৩ দিন
প্রয়োজনে কল করুন:
📞 ০১৪০-৬৪৭৭০৯০`;


// Products are now loaded as if from a database.
export const INITIAL_PRODUCTS: Product[] = [


  


//টিসার্ট এরিয়া -- আইডি ৩০০-৫০০ পর্যন্ত 


{
    id: 'product-300', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1754733277_L_4.jpg"
  },

{
    id: 'product-300', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 450, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/zDcNMQ2d/1756648190-L-7-5.jpg"
  },

  
//পোলো টিসার্ট এরিয়া -- আইডি ৫৩-৩০০ পর্যন্ত 
  


{
    id: 'product-53', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1754418044_L_1.jpg"
  },

{
    id: 'product-54', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/NFT5TZSq/1737397274-L-3-2.jpg"
  },


{
    id: 'product-55', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/nzCV1PhN/1737397274-L-2-2.jpg"
  },


{
    id: 'product-56', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/nzCV1PhN/1737397274-L-2-2.jpg"
  },



{
    id: 'product-57', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/k5wDsSFR/1739378913-L-2-2.jpg"
  },



{
    id: 'product-58', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/JzpGcJQD/1739378913-L-4-2.jpg"
  },

  {
    id: 'product-59', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/3r2NfzBH/1739378913-L-3-1.jpg"
  },



 {
    id: 'product-60', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/c4YZkpWM/1739378913-L-6-2.jpg"
  },

 {
    id: 'product-61', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/7ZX1j5q0/1750410897-L-3-1.jpg"
  },

{
    id: 'product-62', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/j55t8CqL/1750410897-L-2-1.jpg"
  },

  {
    id: 'product-63', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/157wKLBr/1750410897-L-1-1.jpg"
  },

{
    id: 'product-64', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/t4hRg6sn/1750410897-L-4-1.jpg"
  },

 {
    id: 'product-65', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/26C7tnZQ/1737397374-L-1.jpg"
  },

{
    id: 'product-66', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/h467z9t2/1737397374-L-3.jpg"
  },

{
    id: 'product-67', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/8k9ZbKHW/1737397374-L-4.jpg"
  },

{
    id: 'product-68', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/QCQK1dmf/1746432622-L-2-2.jpg"
  },

{
    id: 'product-69', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/TPYgdqY1/1746432622-L-3-2.jpg"
  },

{
    id: 'product-70', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/x1sqRrnj/1746432622-L-5-2.jpg"
  },

{
    id: 'product-71', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://postimg.cc/GBLS7Bnz"
  },

{
    id: 'product-72', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/kg093vqt/1746432622-L-4-1.jpg"
  },

{
    id: 'product-73', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/yxd2SD7H/1746432622-L-6.jpg"
  },

{
    id: 'product-74', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/yxd2SD7H/1746432622-L-6.jpg"
  },

{
    id: 'product-75', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/3J6WNp33/1746690224-L-4.jpg"
  },

{
    id: 'product-76', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/nL1H4Qfj/1746690224-L-1.jpg"
  },

{
    id: 'product-77', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/jj8jVJ3V/1746690224-L-3.jpg"
  },

{
    id: 'product-78', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/PJ9NjYVL/1746690224-L-2.jpg"
  },
{
    id: 'product-79', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/YS1H9spy/1756726794-L-1-3.jpg"
  },

{
    id: 'product-80', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/nrdvWz80/1746432746-L-1-1.jpg"
  },

{
    id: 'product-81', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/pTXnzH4v/1746432746-L-3-4.jpg"
  },

{
    id: 'product-82', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/RhBN1Y23/1746690101-L-1-1.jpg"
  },

{
    id: 'product-83', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/YS1H9spy/1756726794-L-1-3.jpg"
  },

{
    id: 'product-84', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/pdY57Tzz/1746432746-L-5-1.jpg"
  },

{
    id: 'product-85', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/XqhrFy6S/1746432746-L-6-3.jpg"
  },

{
    id: 'product-86', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/kMtR3fQ7/1746432746-L-2-1.jpg"
  },

{
    id: 'product-87', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/tC7XjB67/1754733383-L-3-3.jpg"
  },

{
    id: 'product-88', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl:
"https://i.postimg.cc/pXgttRx1/1754733383-L-2-3.jpg"
  },

{
    id: 'product-89', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/W12t8Jwc/1746285137-L-1-2.jpg"
  },

{
    id: 'product-90', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/g25bbWMh/1746285137-L-2-2.jpg"
  },

{
    id: 'product-91', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/WbC521vs/1746285137-L-3-1.jpg"
  },

{
    id: 'product-92', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/Y04QVQjY/1746285137-L-5-1.jpg"
  },

{
    id: 'product-93', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/NfmdjwfT/1746285137-L-4-1.jpg"
  },

{
    id: 'product-94', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/q7PtRW7h/1748277672-L-1-1.jpg"
  },

{
    id: 'product-95', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/L6GFrSQ1/1748098980-L-1.jpg"
  },

{
    id: 'product-96', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/L6GFrSQ1/1748098980-L-1.jpg"
  },

{
    id: 'product-97', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/sfcp6DXT/1756647860-L-2-1.jpg"
  },

{
    id: 'product-98', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/gjnkHDrF/1756647860-L-4-1.jpg"
  },

{
    id: 'product-99', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/qv8BwgBR/1756647860-L-3-1.jpg"
  },

{
    id: 'product-100', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/L6GFrSQ1/1748098980-L-1.jpg"
  },

{
    id: 'product-101', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/NMLw30tR/1756647860-L-5-1.jpg"
  },

{
    id: 'product-102', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/J0ZqL6Cq/1737136897-L-4-1.jpg"
  },

{
    id: 'product-103', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/3RhtGSSN/1737136897-L-3.jpg"
  },

{
    id: 'product-104', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl:
"https://i.postimg.cc/2SBzXhwd/1737136989-L-2-1.jpg"
  },

{
    id: 'product-105', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/NMLw30tR/1756647860-L-5-1.jpg"
  },

{
    id: 'product-106', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/7hM6QZpn/1737136989-L-1-1.jpg"
  },

{
    id: 'product-107', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/JhfzrX8Q/1737136989-L-3-1.jpg"
  },

{
    id: 'product-108', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/gjdcRPnX/1755021190-L-3.jpg"
  },

{
    id: 'product-109', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/gkgcwQdj/1755021190-L-1.jpg"
  },

{
    id: 'product-110', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 440, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/zB4J9N6T/1752068830-L-1-5.jpg"
  },

{
    id: 'product-111', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 440, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/Qt7LKTYW/1752068830-L-2-4.jpg"
  },

{
    id: 'product-112', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 440, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/TwgS3XhV/1752068830-L-3-4.jpg"
  },

{
    id: 'product-113', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/c1c99h3L/1752068830-L-4-4.jpg"
  },

{
    id: 'product-111', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/Qt7LKTYW/1752068830-L-2-4.jpg"
  },

{
    id: 'product-111', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/Qt7LKTYW/1752068830-L-2-4.jpg"
  },


  //সার্ট এরিয়া -- আইডি 500-700 পর্যন্ত 

    
    {
    id: 'product-500', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন শার্ট", price: 450, category: "স্টাইলিস শার্ট",
    description: descriptionTemplate, imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1755954480_L_10.jpg"
  },










        
  //কাস্টম প্রিন্টেড টি-শার্ট -- আইডি 700-900 পর্যন্ত 

    {
    id: 'product-700', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন শার্ট", price: 450, category: "কাস্টম প্রিন্টেড টি-শার্ট",
    description: descriptionTemplate, imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1755954480_L_10.jpg"
  },



  
  

];



export const CATEGORIES: Category[] = [
  { id: 7, name: "টি শার্ট", imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1756648120_L_17.jpg" },
  { id: 6, name: "পলো শার্ট", imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1746690224_L_4.jpg" },
  { id: 5, name: "স্টাইলিস শার্ট", imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1755954480_L_10.jpg" },
  { id: 28, name: "কাস্টম প্রিন্টেড টি-শার্ট", imageUrl: "https://diamu.com.bd/wp-content/uploads/2019/12/custom-ts.jpg.webp" },
  { id: 10, name: "প্যান্ট", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTVUvjaQQeSwdA6DqDrQWCU8Ty0C8DVEVaNQ&s" },
  { id: 1, name: "পাঞ্জাবি", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygVA5NedCFo2qqiB2ImIpDnrk3anwgmowlA&s" },
  { id: 2, name: "প্রিন্ট পাঞ্জাবি", imageUrl: "https://www.adlibbd.com/public/uploads/all/a5b00000536-casual-panjabi-green-2340-315849.jpg" },
  { id: 3, name: "লং কম্বো", imageUrl: "https://img.drz.lazcdn.com/static/bd/p/163453bcd29961902bf50777a186b19b.jpg_720x720q80.jpg" },
  { id: 4, name: "শর্ট কম্বো", imageUrl: "https://img.drz.lazcdn.com/static/bd/p/4c8e03f635b429cf4b9a4d2051806e6e.png_720x720q80.png" },
  { id: 8, name: "লং-স্লীভ টিশার্ট", imageUrl: "https://img.drz.lazcdn.com/static/bd/p/ef8e850f655ac517fff5d49a7c3ada02.jpg_720x720q80.jpg" },
  { id: 9, name: "ট্রাউজার", imageUrl: "https://mobile.yoox.com/images/items/30/30198040RU_14_f.jpg?impolicy=crop&width=387&height=490" },
  { id: 11, name: "জুতা", imageUrl: "https://img.drz.lazcdn.com/static/bd/p/563df53262050b8e1fdb12d93c60ab81.jpg_720x720q80.jpg_.webp" },
  
];
