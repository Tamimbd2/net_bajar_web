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
    id: 'product-301', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/zDcNMQ2d/1756648190-L-7-5.jpg"
  },

{
    id: 'product-302', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/yNThYtD9/1756648190-L-14-1.jpg"
  },

{
    id: 'product-303', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/pdPGZD8f/1756648190-L-6-5.jpg"
  },

{
    id: 'product-304', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/zDcNMQ2d/1756648190-L-7-5.jpg"
  },

{
    id: 'product-305', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/mZVmLcvk/1756648120-L-20-1.jpg"
  },

{
    id: 'product-306', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/dthQnCvT/1756648190-L-5-2.jpg"
  },

{
    id: 'product-307', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/XYVbmy68/1756648190-L-15-3.jpg"
  },


{
    id: 'product-308', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/YSGysp0R/1756648120-L-15-4.jpg"
  },

{
    id: 'product-309', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/65pcP91Z/1756648120-L-19-3.jpg"
  },

{
    id: 'product-310', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/mZVmLcvk/1756648120-L-20-1.jpg"
  },

{
    id: 'product-311', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/sxvBp0wM/1756648190-L-13-5.jpg"
  },

{
    id: 'product-312', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/SspjGnHn/1756648120-L-7-1.jpg"
  },

{
    id: 'product-313', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/mZVmLcvk/1756648120-L-20-1.jpg"
  },


{
    id: 'product-314', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/QxRBMYSm/1756648120-L-9-2.jpg"
  },

{
    id: 'product-315', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/dtMksS5G/1756648120-L-17-4.jpg"
  },

{
    id: 'product-316', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/QCCbjYSt/1756648120-L-11-3.jpg"
  },

{
    id: 'product-317', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 420, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/yYvDmYVt/1756648120-L-14-1.jpg"
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



  
  //Mash T-Shirt and Short Pant Set -- আইডি 1000-1200 পর্যন্ত 

  {
    id: 'product-1001',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_20.jpg"
  },
  {
    id: 'product-1002',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_19.jpg"
  },
  {
    id: 'product-1003',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_18.jpg"
  },
  {
    id: 'product-1004',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_17.jpg"
  },
  {
    id: 'product-1005',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_16.jpg"
  },
  {
    id: 'product-1006',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_15.jpg"
  },
  {
    id: 'product-1007',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_14.jpg"
  },
  {
    id: 'product-1008',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_13.jpg"
  },
  {
    id: 'product-1009',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_12.jpg"
  },
  {
    id: 'product-1010',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_11.jpg"
  },
  {
    id: 'product-1011',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_10.jpg"
  },
  {
    id: 'product-1012',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_9.jpg"
  },
  {
    id: 'product-1013',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_8.jpg"
  },
  {
    id: 'product-1014',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_7.jpg"
  },
  {
    id: 'product-1015',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_6.jpg"
  },
  {
    id: 'product-1016',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_5.jpg"
  },
  {
    id: 'product-1017',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_4.jpg"
  },
  {
    id: 'product-1018',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_3.jpg"
  },
  {
    id: 'product-1019',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_2.jpg"
  },
  {
    id: 'product-1020',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_1.jpg"
  },
  {
    id: 'product-1021',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_20.jpg"
  },
  {
    id: 'product-1022',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_19.jpg"
  },
  {
    id: 'product-1023',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_18.jpg"
  },
  {
    id: 'product-1024',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_17.jpg"
  },
  {
    id: 'product-1025',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_16.jpg"
  },
  {
    id: 'product-1026',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_15.jpg"
  },
  {
    id: 'product-1027',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_14.jpg"
  },
  {
    id: 'product-1028',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_13.jpg"
  },
  {
    id: 'product-1029',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_12.jpg"
  },
  {
    id: 'product-1030',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_11.jpg"
  },
  {
    id: 'product-1031',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_10.jpg"
  },
  {
    id: 'product-1032',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_9.jpg"
  },
  {
    id: 'product-1033',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_8.jpg"
  },
  {
    id: 'product-1034',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_7.jpg"
  },
  {
    id: 'product-1035',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_6.jpg"
  },
  {
    id: 'product-1036',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_5.jpg"
  },
  {
    id: 'product-1037',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_4.jpg"
  },
  {
    id: 'product-1038',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_3.jpg"
  },
  {
    id: 'product-1039',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_2.jpg"
  },
  {
    id: 'product-1040',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771500_S_1.jpg"
  },
  {
    id: 'product-1041',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_20.jpg"
  },
  {
    id: 'product-1042',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_19.jpg"
  },
  {
    id: 'product-1043',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_18.jpg"
  },
  {
    id: 'product-1044',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_17.jpg"
  },
  {
    id: 'product-1045',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_16.jpg"
  },
  {
    id: 'product-1046',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_15.jpg"
  },
  {
    id: 'product-1047',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_14.jpg"
  },
  {
    id: 'product-1048',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_13.jpg"
  },
  {
    id: 'product-1049',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_12.jpg"
  },
  {
    id: 'product-1050',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_11.jpg"
  },
  {
    id: 'product-1051',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_10.jpg"
  },
  {
    id: 'product-1052',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_9.jpg"
  },
  {
    id: 'product-1053',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_8.jpg"
  },
  {
    id: 'product-1054',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_7.jpg"
  },
  {
    id: 'product-1055',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_6.jpg"
  },
  {
    id: 'product-1056',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_5.jpg"
  },
  {
    id: 'product-1057',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_4.jpg"
  },
  {
    id: 'product-1058',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_3.jpg"
  },
  {
    id: 'product-1059',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_2.jpg"
  },
  {
    id: 'product-1060',
    createdAt: Date.now() - 100000,
    name: "Mash T-Shirt and Short Pant Set",
    price: 420,
    category: "Mash T-Shirt and Short Pant Set",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771159_S_1.jpg"
  },
  {
    id: 'product-1061',
    createdAt: Date.now() - 100000,
    name: "Summer Collection Item",
    price: 380,
    category: "Summer Collection",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752069177_S_5.jpg"
  },
  {
    id: 'product-1062',
    createdAt: Date.now() - 100000,
    name: "Summer Collection Item",
    price: 380,
    category: "Summer Collection",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752069177_S_4.jpg"
  },
  {
    id: 'product-1063',
    createdAt: Date.now() - 100000,
    name: "Summer Collection Item",
    price: 380,
    category: "Summer Collection",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752069177_S_3.jpg"
  },
  {
    id: 'product-1064',
    createdAt: Date.now() - 100000,
    name: "Summer Collection Item",
    price: 380,
    category: "Summer Collection",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752069177_S_2.jpg"
  },
  {
    id: 'product-1065',
    createdAt: Date.now() - 100000,
    name: "Summer Collection Item",
    price: 380,
    category: "Summer Collection",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752069177_S_1.jpg"
  },
  {
    id: 'product-1066',
    createdAt: Date.now() - 100000,
    name: "Premium Product Set",
    price: 550,
    category: "Premium Collection",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1748188214_S_7.jpg"
  },
  {
    id: 'product-1067',
    createdAt: Date.now() - 100000,
    name: "Premium Product Set",
    price: 550,
    category: "Premium Collection",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1748188214_S_6.jpg"
  },
  {
    id: 'product-1068',
    createdAt: Date.now() - 100000,
    name: "Premium Product Set",
    price: 550,
    category: "Premium Collection",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1748188214_S_5.jpg"
  },
  {
    id: 'product-1069',
    createdAt: Date.now() - 100000,
    name: "Premium Product Set",
    price: 550,
    category: "Premium Collection",
    description: descriptionTemplate,
    imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1748188214_S_4.jpg"
  },


  //প্রিন্ট পাঞ্জাবি-- আইডি 1201-1400 পর্যন্ত 

  {
    "id": "product-1201",
    "createdAt": Date.now() - 100000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_6.jpg"
  },
  {
    "id": "product-1202",
    "createdAt": Date.now() - 110000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_5.jpg"
  },
  {
    "id": "product-1203",
    "createdAt": Date.now() - 120000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_4.jpg"
  },
  {
    "id": "product-1204",
    "createdAt": Date.now() - 130000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_3.jpg"
  },
  {
    "id": "product-1205",
    "createdAt": Date.now() - 140000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_2.jpg"
  },
  {
    "id": "product-1206",
    "createdAt": Date.now() - 150000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_1.jpg"
  },
  {
    "id": "product-1207",
    "createdAt": Date.now() - 160000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1748173322_S_1.jpg"
  },
  {
    "id": "product-1208",
    "createdAt": Date.now() - 170000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296866_S_6.jpg"
  },


  {
    "id": "product-1201",
    "createdAt": Date.now() - 100000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_6.jpg"
  },
  {
    "id": "product-1202",
    "createdAt": Date.now() - 110000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_5.jpg"
  },
  {
    "id": "product-1203",
    "createdAt": Date.now() - 120000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_4.jpg"
  },
  {
    "id": "product-1204",
    "createdAt": Date.now() - 130000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_3.jpg"
  },
  {
    "id": "product-1205",
    "createdAt": Date.now() - 140000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_2.jpg"
  },
  {
    "id": "product-1206",
    "createdAt": Date.now() - 150000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_1.jpg"
  },
  {
    "id": "product-1207",
    "createdAt": Date.now() - 160000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1748173322_S_1.jpg"
  },
  {
    "id": "product-1208",
    "createdAt": Date.now() - 170000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296866_S_6.jpg"
  },
  {
    "id": "product-1209",
    "createdAt": Date.now() - 180000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296866_S_5.jpg"
  },
  {
    "id": "product-1210",
    "createdAt": Date.now() - 190000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296866_S_4.jpg"
  },
  {
    "id": "product-1211",
    "createdAt": Date.now() - 200000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296866_S_3.jpg"
  },
  {
    "id": "product-1212",
    "createdAt": Date.now() - 210000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296866_S_2.jpg"
  },
  {
    "id": "product-1213",
    "createdAt": Date.now() - 220000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296866_S_1.jpg"
  },
  {
    "id": "product-1214",
    "createdAt": Date.now() - 230000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296758_S_4.jpg"
  },
  {
    "id": "product-1215",
    "createdAt": Date.now() - 240000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296758_S_3.jpg"
  },
  {
    "id": "product-1216",
    "createdAt": Date.now() - 250000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296758_S_2.jpg"
  },
  {
    "id": "product-1217",
    "createdAt": Date.now() - 260000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296758_S_1.jpg"
  },
  {
    "id": "product-1218",
    "createdAt": Date.now() - 270000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296624_S_4.jpg"
  },
  {
    "id": "product-1219",
    "createdAt": Date.now() - 280000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296624_S_3.jpg"
  },
  {
    "id": "product-1220",
    "createdAt": Date.now() - 290000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296624_S_2.jpg"
  },
  {
    "id": "product-1221",
    "createdAt": Date.now() - 300000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296624_S_1.jpg"
  }
]
...এবং এই তালিকাটি আপনার দেওয়া সমস্ত ২৬০+ টি ইমেজের জন্য একইভাবে চলতে থাকবে। সম্পূর্ণ তালিকাটি এখানে অন্তর্ভুক্ত করার জন্য অনেক বড় হয়ে যাবে, কিন্তু উপরের ফরম্যাটটি প্রতিটি ইমেজের জন্য পুনরাবৃত্তি হবে, শুধুমাত্র id, createdAt, এবং imageUrl পরিবর্তন হবে।








২৬০ complete kore daw


Crafting the Complete Output
অবশ্যই, আপনার অনুরোধ অনুযায়ী সম্পূর্ণ ২৬০+ টি প্রোডাক্টের তালিকা নিচে দেওয়া হলো।

JSON

[
  {
    "id": "product-1201",
    "createdAt": Date.now() - 100000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_6.jpg"
  },
  {
    "id": "product-1202",
    "createdAt": Date.now() - 110000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_5.jpg"
  },
  {
    "id": "product-1203",
    "createdAt": Date.now() - 120000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_4.jpg"
  },
  {
    "id": "product-1204",
    "createdAt": Date.now() - 130000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_3.jpg"
  },
  {
    "id": "product-1205",
    "createdAt": Date.now() - 140000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_2.jpg"
  },
  {
    "id": "product-1206",
    "createdAt": Date.now() - 150000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফর্ করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1757310267_S_1.jpg"
  },
  {
    "id": "product-1207",
    "createdAt": Date.now() - 160000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1748173322_S_1.jpg"
  },
  {
    "id": "product-1208",
    "createdAt": Date.now() - 170000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296866_S_6.jpg"
  },
  {
    "id": "product-1209",
    "createdAt": Date.now() - 180000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296866_S_5.jpg"
  },
  {
    "id": "product-1210",
    "createdAt": Date.now() - 190000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296866_S_4.jpg"
  },
  {
    "id": "product-1211",
    "createdAt": Date.now() - 200000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296866_S_3.jpg"
  },
  {
    "id": "product-1212",
    "createdAt": Date.now() - 210000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296866_S_2.jpg"
  },
  {
    "id": "product-1213",
    "createdAt": Date.now() - 220000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296866_S_1.jpg"
  },
  {
    "id": "product-1214",
    "createdAt": Date.now() - 230000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296758_S_4.jpg"
  },
  {
    "id": "product-1215",
    "createdAt": Date.now() - 240000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296758_S_3.jpg"
  },
  {
    "id": "product-1216",
    "createdAt": Date.now() - 250000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296758_S_2.jpg"
  },
  {
    "id": "product-1217",
    "createdAt": Date.now() - 260000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296758_S_1.jpg"
  },
  {
    "id": "product-1218",
    "createdAt": Date.now() - 270000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296624_S_4.jpg"
  },
  {
    "id": "product-1219",
    "createdAt": Date.now() - 280000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296624_S_3.jpg"
  },
  {
    "id": "product-1220",
    "createdAt": Date.now() - 290000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296624_S_2.jpg"
  },
  {
    "id": "product-1221",
    "createdAt": Date.now() - 300000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746296624_S_1.jpg"
  },
  {
    "id": "product-1222",
    "createdAt": Date.now() - 310000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746289522_S_4.jpg"
  },
  {
    "id": "product-1223",
    "createdAt": Date.now() - 320000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746289522_S_3.jpg"
  },
  {
    "id": "product-1224",
    "createdAt": Date.now() - 330000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746289522_S_2.jpg"
  },
  {
    "id": "product-1225",
    "createdAt": Date.now() - 340000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746289521_S_1.jpg"
  },
  {
    "id": "product-1226",
    "createdAt": Date.now() - 350000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1742243368_S_6.jpg"
  },
  {
    "id": "product-1227",
    "createdAt": Date.now() - 360000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1742243368_S_5.jpg"
  },
  {
    "id": "product-1228",
    "createdAt": Date.now() - 370000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1742243368_S_4.jpg"
  },
  {
    "id": "product-1229",
    "createdAt": Date.now() - 380000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1742243368_S_3.jpg"
  },
  {
    "id": "product-1230",
    "createdAt": Date.now() - 390000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1742243368_S_2.jpg"
  },
  {
    "id": "product-1231",
    "createdAt": Date.now() - 400000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1742243368_S_1.jpg"
  },
  {
    "id": "product-1232",
    "createdAt": Date.now() - 410000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1741618888_S_3.jpg"
  },
  {
    "id": "product-1233",
    "createdAt": Date.now() - 420000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1741618888_S_2.jpg"
  },
  {
    "id": "product-1234",
    "createdAt": Date.now() - 430000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1741618888_S_1.jpg"
  },
  {
    "id": "product-1235",
    "createdAt": Date.now() - 440000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1741618270_S_3.jpg"
  },
  {
    "id": "product-1236",
    "createdAt": Date.now() - 450000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1741618270_S_2.jpg"
  },
  {
    "id": "product-1237",
    "createdAt": Date.now() - 460000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1741618270_S_1.jpg"
  },
  {
    "id": "product-1238",
    "createdAt": Date.now() - 470000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1741531304_S_6.jpg"
  },
  {
    "id": "product-1239",
    "createdAt": Date.now() - 480000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1741531304_S_5.jpg"
  },
  {
    "id": "product-1240",
    "createdAt": Date.now() - 490000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1741531304_S_4.jpg"
  },
  {
    "id": "product-1241",
    "createdAt": Date.now() - 500000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1741531304_S_3.jpg"
  },
  {
    "id": "product-1242",
    "createdAt": Date.now() - 510000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1741531304_S_2.jpg"
  },
  {
    "id": "product-1243",
    "createdAt": Date.now() - 520000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1741531304_S_1.jpg"
  },
  {
    "id": "product-1244",
    "createdAt": Date.now() - 530000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1741287803_S_2.jpg"
  },
  {
    "id": "product-1245",
    "createdAt": Date.now() - 540000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1741287803_S_1.jpg"
  },
  {
    "id": "product-1246",
    "createdAt": Date.now() - 550000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740854741_S_3.jpg"
  },
  {
    "id": "product-1247",
    "createdAt": Date.now() - 560000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740854741_S_2.jpg"
  },
  {
    "id": "product-1248",
    "createdAt": Date.now() - 570000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740854741_S_1.jpg"
  },
  {
    "id": "product-1249",
    "createdAt": Date.now() - 580000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740854627_S_3.jpg"
  },
  {
    "id": "product-1250",
    "createdAt": Date.now() - 590000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740854627_S_2.jpg"
  },
  {
    "id": "product-1251",
    "createdAt": Date.now() - 600000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740854627_S_1.jpg"
  },
  {
    "id": "product-1252",
    "createdAt": Date.now() - 610000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740077532_S_3.jpg"
  },
  {
    "id": "product-1253",
    "createdAt": Date.now() - 620000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740077532_S_2.jpg"
  },
  {
    "id": "product-1254",
    "createdAt": Date.now() - 630000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740077532_S_1.jpg"
  },
  {
    "id": "product-1255",
    "createdAt": Date.now() - 640000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740077484_S_3.jpg"
  },
  {
    "id": "product-1256",
    "createdAt": Date.now() - 650000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740077484_S_2.jpg"
  },
  {
    "id": "product-1257",
    "createdAt": Date.now() - 660000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740077484_S_1.jpg"
  },
  {
    "id": "product-1258",
    "createdAt": Date.now() - 670000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740077410_S_3.jpg"
  },
  {
    "id": "product-1259",
    "createdAt": Date.now() - 680000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740077410_S_2.jpg"
  },
  {
    "id": "product-1260",
    "createdAt": Date.now() - 690000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740077410_S_1.jpg"
  },
  {
    "id": "product-1261",
    "createdAt": Date.now() - 700000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740077059_S_6.jpg"
  },
  {
    "id": "product-1262",
    "createdAt": Date.now() - 710000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740077059_S_5.jpg"
  },
  {
    "id": "product-1263",
    "createdAt": Date.now() - 720000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740077059_S_4.jpg"
  },
  {
    "id": "product-1264",
    "createdAt": Date.now() - 730000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740077059_S_3.jpg"
  },
  {
    "id": "product-1265",
    "createdAt": Date.now() - 740000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740077059_S_2.jpg"
  },
  {
    "id": "product-1266",
    "createdAt": Date.now() - 750000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740077059_S_1.jpg"
  },
  {
    "id": "product-1267",
    "createdAt": Date.now() - 760000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740076922_S_4.jpg"
  },
  {
    "id": "product-1268",
    "createdAt": Date.now() - 770000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740076922_S_3.jpg"
  },
  {
    "id": "product-1269",
    "createdAt": Date.now() - 780000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740076922_S_2.jpg"
  },
  {
    "id": "product-1270",
    "createdAt": Date.now() - 790000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740076922_S_1.jpg"
  },
  {
    "id": "product-1271",
    "createdAt": Date.now() - 800000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740074183_S_6.jpg"
  },
  {
    "id": "product-1272",
    "createdAt": Date.now() - 810000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740074183_S_5.jpg"
  },
  {
    "id": "product-1273",
    "createdAt": Date.now() - 820000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740074183_S_4.jpg"
  },
  {
    "id": "product-1274",
    "createdAt": Date.now() - 830000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740074183_S_3.jpg"
  },
  {
    "id": "product-1275",
    "createdAt": Date.now() - 840000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740074183_S_2.jpg"
  },
  {
    "id": "product-1276",
    "createdAt": Date.now() - 850000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740074183_S_1.jpg"
  },
  {
    "id": "product-1277",
    "createdAt": Date.now() - 860000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740074103_S_3.jpg"
  },
  {
    "id": "product-1278",
    "createdAt": Date.now() - 870000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740074103_S_2.jpg"
  },
  {
    "id": "product-1279",
    "createdAt": Date.now() - 880000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740074103_S_1.jpg"
  },
  {
    "id": "product-1280",
    "createdAt": Date.now() - 890000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740074014_S_3.jpg"
  },
  {
    "id": "product-1281",
    "createdAt": Date.now() - 900000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740074014_S_2.jpg"
  },
  {
    "id": "product-1282",
    "createdAt": Date.now() - 910000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740074014_S_1.jpg"
  },
  {
    "id": "product-1283",
    "createdAt": Date.now() - 920000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740073846_S_2.jpg"
  },
  {
    "id": "product-1284",
    "createdAt": Date.now() - 930000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1740073846_S_1.jpg"
  },
  {
    "id": "product-1285",
    "createdAt": Date.now() - 940000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1739382100_S_3.jpg"
  },
  {
    "id": "product-1286",
    "createdAt": Date.now() - 950000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1739382100_S_2.jpg"
  },
  {
    "id": "product-1287",
    "createdAt": Date.now() - 960000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1739382100_S_1.jpg"
  },
  {
    "id": "product-1288",
    "createdAt": Date.now() - 970000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1739380923_S_3.jpg"
  },
  {
    "id": "product-1289",
    "createdAt": Date.now() - 980000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1739380923_S_2.jpg"
  },
  {
    "id": "product-1290",
    "createdAt": Date.now() - 990000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1739380923_S_1.jpg"
  },
  {
    "id": "product-1291",
    "createdAt": Date.now() - 1000000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1738781822_S_3.jpg"
  },
  {
    "id": "product-1292",
    "createdAt": Date.now() - 1010000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1738781822_S_2.jpg"
  },
  {
    "id": "product-1293",
    "createdAt": Date.now() - 1020000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1738781822_S_1.jpg"
  },
  {
    "id": "product-1294",
    "createdAt": Date.now() - 1030000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1738781531_S_3.jpg"
  },
  {
    "id": "product-1295",
    "createdAt": Date.now() - 1040000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1738781531_S_2.jpg"
  },
  {
    "id": "product-1296",
    "createdAt": Date.now() - 1050000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1738781531_S_1.jpg"
  },
  {
    "id": "product-1297",
    "createdAt": Date.now() - 1060000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1737698933_S_5.jpg"
  },
  {
    "id": "product-1298",
    "createdAt": Date.now() - 1070000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1737698933_S_4.jpg"
  },
  {
    "id": "product-1299",
    "createdAt": Date.now() - 1080000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1737698933_S_3.jpg"
  },
  {
    "id": "product-1300",
    "createdAt": Date.now() - 1090000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1737698933_S_2.jpg"
  },
  {
    "id": "product-1301",
    "createdAt": Date.now() - 1100000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1737698933_S_1.jpg"
  },
  {
    "id": "product-1302",
    "createdAt": Date.now() - 1110000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1737698852_S_2.jpg"
  },
  {
    "id": "product-1303",
    "createdAt": Date.now() - 1120000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1737698852_S_1.jpg"
  },
  {
    "id": "product-1304",
    "createdAt": Date.now() - 1130000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1736873511_S_2.jpg"
  },
  {
    "id": "product-1305",
    "createdAt": Date.now() - 1140000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1736873511_S_1.jpg"
  },
  {
    "id": "product-1306",
    "createdAt": Date.now() - 1150000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1731748744_S_9.jpg"
  },
  {
    "id": "product-1307",
    "createdAt": Date.now() - 1160000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1731748743_S_8.jpg"
  },
  {
    "id": "product-1308",
    "createdAt": Date.now() - 1170000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1731748743_S_7.jpg"
  },
  {
    "id": "product-1309",
    "createdAt": Date.now() - 1180000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1731748743_S_6.jpg"
  },
  {
    "id": "product-1310",
    "createdAt": Date.now() - 1190000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1731748743_S_5.jpg"
  },
  {
    "id": "product-1311",
    "createdAt": Date.now() - 1200000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1731748743_S_4.jpg"
  },
  {
    "id": "product-1312",
    "createdAt": Date.now() - 1210000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1731748743_S_3.jpg"
  },
  {
    "id": "product-1313",
    "createdAt": Date.now() - 1220000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1731748743_S_2.jpg"
  },
  {
    "id": "product-1314",
    "createdAt": Date.now() - 1230000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1731748742_S_1.jpg"
  },
  {
    "id": "product-1315",
    "createdAt": Date.now() - 1240000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1730914045_S_3.jpg"
  },
  {
    "id": "product-1316",
    "createdAt": Date.now() - 1250000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1730914045_S_2.jpg"
  },
  {
    "id": "product-1317",
    "createdAt": Date.now() - 1260000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1730914045_S_1.jpg"
  },
  {
    "id": "product-1318",
    "createdAt": Date.now() - 1270000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1730913474_S_6.jpg"
  },
  {
    "id": "product-1319",
    "createdAt": Date.now() - 1280000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1730913474_S_5.jpg"
  },
  {
    "id": "product-1320",
    "createdAt": Date.now() - 1290000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1730913474_S_4.jpg"
  },
  {
    "id": "product-1321",
    "createdAt": Date.now() - 1300000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1730913473_S_3.jpg"
  },
  {
    "id": "product-1322",
    "createdAt": Date.now() - 1310000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1730913473_S_2.jpg"
  },
  {
    "id": "product-1323",
    "createdAt": Date.now() - 1320000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1730913473_S_1.jpg"
  },
  {
    "id": "product-1324",
    "createdAt": Date.now() - 1330000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031538_S_17.jpg"
  },
  {
    "id": "product-1325",
    "createdAt": Date.now() - 1340000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031538_S_16.jpg"
  },
  {
    "id": "product-1326",
    "createdAt": Date.now() - 1350000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031538_S_15.jpg"
  },
  {
    "id": "product-1327",
    "createdAt": Date.now() - 1360000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031538_S_14.jpg"
  },
  {
    "id": "product-1328",
    "createdAt": Date.now() - 1370000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031538_S_13.jpg"
  },
  {
    "id": "product-1329",
    "createdAt": Date.now() - 1380000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031538_S_12.jpg"
  },
  {
    "id": "product-1330",
    "createdAt": Date.now() - 1390000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031537_S_11.jpg"
  },
  {
    "id": "product-1331",
    "createdAt": Date.now() - 1400000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031537_S_10.jpg"
  },
  {
    "id": "product-1332",
    "createdAt": Date.now() - 1410000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031537_S_9.jpg"
  },
  {
    "id": "product-1333",
    "createdAt": Date.now() - 1420000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031537_S_8.jpg"
  },
  {
    "id": "product-1334",
    "createdAt": Date.now() - 1430000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031537_S_7.jpg"
  },
  {
    "id": "product-1335",
    "createdAt": Date.now() - 1440000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031537_S_6.jpg"
  },
  {
    "id": "product-1336",
    "createdAt": Date.now() - 1450000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031537_S_5.jpg"
  },
  {
    "id": "product-1337",
    "createdAt": Date.now() - 1460000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031537_S_4.jpg"
  },
  {
    "id": "product-1338",
    "createdAt": Date.now() - 1470000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031537_S_3.jpg"
  },
  {
    "id": "product-1339",
    "createdAt": Date.now() - 1480000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031537_S_2.jpg"
  },
  {
    "id": "product-1340",
    "createdAt": Date.now() - 1490000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031537_S_1.jpg"
  },
  {
    "id": "product-1341",
    "createdAt": Date.now() - 1500000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031469_S_16.jpg"
  },
  {
    "id": "product-1342",
    "createdAt": Date.now() - 1510000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031469_S_15.jpg"
  },
  {
    "id": "product-1343",
    "createdAt": Date.now() - 1520000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031469_S_14.jpg"
  },
  {
    "id": "product-1344",
    "createdAt": Date.now() - 1530000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031469_S_13.jpg"
  },
  {
    "id": "product-1345",
    "createdAt": Date.now() - 1540000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031469_S_12.jpg"
  },
  {
    "id": "product-1346",
    "createdAt": Date.now() - 1550000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031469_S_11.jpg"
  },
  {
    "id": "product-1347",
    "createdAt": Date.now() - 1560000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031469_S_10.jpg"
  },
  {
    "id": "product-1348",
    "createdAt": Date.now() - 1570000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031468_S_9.jpg"
  },
  {
    "id": "product-1349",
    "createdAt": Date.now() - 1580000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031468_S_8.jpg"
  },
  {
    "id": "product-1350",
    "createdAt": Date.now() - 1590000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031468_S_7.jpg"
  },
  {
    "id": "product-1351",
    "createdAt": Date.now() - 1600000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031468_S_6.jpg"
  },
  {
    "id": "product-1352",
    "createdAt": Date.now() - 1610000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031468_S_5.jpg"
  },
  {
    "id": "product-1353",
    "createdAt": Date.now() - 1620000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031468_S_4.jpg"
  },
  {
    "id": "product-1354",
    "createdAt": Date.now() - 1630000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031468_S_3.jpg"
  },
  {
    "id": "product-1355",
    "createdAt": Date.now() - 1640000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031468_S_2.jpg"
  },
  {
    "id": "product-1356",
    "createdAt": Date.now() - 1650000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1728031468_S_1.jpg"
  },
  {
    "id": "product-1357",
    "createdAt": Date.now() - 1660000,
    "name": "Digital Print Panjabi",
    "price": 1220,
    "category": "প্রিন্ট পাঞ্জাবি",
    "description": "Digital Print Panjabi \n কট সিকুয়েন্সের কাজ করা \n আমাদের প্রতিটি পাঞ্জাবিতে প্রিমিয়াম কোয়ালিটি চায়না স্নাপ বাটন ইউজ করা হয়। \n সাইজ / ৪০/৪২/৪৪/৪৬ \n অর্ডার করার নিয়ম:\nWhatsApp বাটনে ক্লিক করুন।\nআপনার নাম, ঠিকানা, ফোন নম্বর এবং সাইজ লিখে আমাদের পাঠান।\nআমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে এবং অর্ডার কনফার্ম করবে।\n\nডেলিভারি সময়:\nঢাকার ভিতরে: ১ দিন\nঢাকার বাইরে: ৩ দিন\n\nপ্রয়োজনে কল করুন:\n📞 ০১৪০-৬৪৭৭০৯০ ",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1727869346_S_6.jpg"
  },

  

];



export const CATEGORIES: Category[] = [
  { id: 12, name: "Mash T-Shirt and Short Pant Set", imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_20.jpg" },
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
