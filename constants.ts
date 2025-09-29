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





//shirt 1701



  {
    "id": "product-1701",
    "createdAt": "Date.now() - 4670000",
    "name": "Premium Cheake Shirt",
    "price": 680,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1758539343_S_6.jpg"
  },
  {
    "id": "product-1702",
    "createdAt": "Date.now() - 4680000",
    "name": "Premium Cheake Shirt",
    "price": 680,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1758539343_S_5.jpg"
  },
  {
    "id": "product-1703",
    "createdAt": "Date.now() - 4690000",
    "name": "Premium Cheake Shirt",
    "price": 680,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1758539343_S_4.jpg"
  },
  {
    "id": "product-1704",
    "createdAt": "Date.now() - 4700000",
    "name": "Premium Cheake Shirt",
    "price": 680,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1758539343_S_3.jpg"
  },
  {
    "id": "product-1705",
    "createdAt": "Date.now() - 4710000",
    "name": "Premium Cheake Shirt",
    "price": 680,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1758539343_S_2.jpg"
  },
  {
    "id": "product-1706",
    "createdAt": "Date.now() - 4720000",
    "name": "Premium Cheake Shirt",
    "price": 680,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1758539343_S_1.jpg"
  },
  {
    "id": "product-1707",
    "createdAt": "Date.now() - 4730000",
    "name": "Half Sleeve Shirt",
    "price": 660,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755954480_S_10.jpg"
  },
  {
    "id": "product-1708",
    "createdAt": "Date.now() - 4740000",
    "name": "Half Sleeve Shirt",
    "price": 660,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755954480_S_9.jpg"
  },
  {
    "id": "product-1709",
    "createdAt": "Date.now() - 4750000",
    "name": "Half Sleeve Shirt",
    "price": 660,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755954480_S_8.jpg"
  },
  {
    "id": "product-1710",
    "createdAt": "Date.now() - 4760000",
    "name": "Half Sleeve Shirt",
    "price": 660,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755954480_S_7.jpg"
  },
  {
    "id": "product-1711",
    "createdAt": "Date.now() - 4770000",
    "name": "Half Sleeve Shirt",
    "price": 660,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755954480_S_6.jpg"
  },
  {
    "id": "product-1712",
    "createdAt": "Date.now() - 4780000",
    "name": "Half Sleeve Shirt",
    "price": 660,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755954480_S_5.jpg"
  },
  {
    "id": "product-1713",
    "createdAt": "Date.now() - 4790000",
    "name": "Half Sleeve Shirt",
    "price": 660,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755954480_S_4.jpg"
  },
  {
    "id": "product-1714",
    "createdAt": "Date.now() - 4800000",
    "name": "Half Sleeve Shirt",
    "price": 660,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755954480_S_3.jpg"
  },
  {
    "id": "product-1715",
    "createdAt": "Date.now() - 4810000",
    "name": "Half Sleeve Shirt",
    "price": 660,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755954480_S_2.jpg"
  },
  {
    "id": "product-1716",
    "createdAt": "Date.now() - 4820000",
    "name": "Half Sleeve Shirt",
    "price": 660,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755954480_S_1.jpg"
  },
  {
    "id": "product-1717",
    "createdAt": "Date.now() - 4830000",
    "name": "OLD MONEY Full Sleeve Shirt",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755939781_S_10.jpg"
  },
  {
    "id": "product-1718",
    "createdAt": "Date.now() - 4840000",
    "name": "OLD MONEY Full Sleeve Shirt",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755939781_S_9.jpg"
  },
  {
    "id": "product-1719",
    "createdAt": "Date.now() - 4850000",
    "name": "OLD MONEY Full Sleeve Shirt",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755939781_S_8.jpg"
  },
  {
    "id": "product-1720",
    "createdAt": "Date.now() - 4860000",
    "name": "OLD MONEY Full Sleeve Shirt",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755939781_S_7.jpg"
  },
  {
    "id": "product-1721",
    "createdAt": "Date.now() - 4870000",
    "name": "OLD MONEY Full Sleeve Shirt",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755939780_S_6.jpg"
  },
  {
    "id": "product-1722",
    "createdAt": "Date.now() - 4880000",
    "name": "OLD MONEY Full Sleeve Shirt",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755939780_S_5.jpg"
  },
  {
    "id": "product-1723",
    "createdAt": "Date.now() - 4890000",
    "name": "OLD MONEY Full Sleeve Shirt",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755939780_S_4.jpg"
  },
  {
    "id": "product-1724",
    "createdAt": "Date.now() - 4900000",
    "name": "OLD MONEY Full Sleeve Shirt",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755939780_S_3.jpg"
  },
  {
    "id": "product-1725",
    "createdAt": "Date.now() - 4910000",
    "name": "OLD MONEY Full Sleeve Shirt",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755939780_S_2.jpg"
  },
  {
    "id": "product-1726",
    "createdAt": "Date.now() - 4920000",
    "name": "OLD MONEY Full Sleeve Shirt",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1755939780_S_1.jpg"
  },
  {
    "id": "product-1727",
    "createdAt": "Date.now() - 4930000",
    "name": "China Stitch Formal Shirt",
    "price": 670,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1754417726_S_9.jpg"
  },
  {
    "id": "product-1728",
    "createdAt": "Date.now() - 4940000",
    "name": "China Stitch Formal Shirt",
    "price": 670,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1754417726_S_8.jpg"
  },
  {
    "id": "product-1729",
    "createdAt": "Date.now() - 4950000",
    "name": "China Stitch Formal Shirt",
    "price": 670,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1754417726_S_7.jpg"
  },
  {
    "id": "product-1730",
    "createdAt": "Date.now() - 4960000",
    "name": "China Stitch Formal Shirt",
    "price": 670,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1754417726_S_6.jpg"
  },
  {
    "id": "product-1731",
    "createdAt": "Date.now() - 4970000",
    "name": "China Stitch Formal Shirt",
    "price": 670,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1754417726_S_5.jpg"
  },
  {
    "id": "product-1732",
    "createdAt": "Date.now() - 4980000",
    "name": "China Stitch Formal Shirt",
    "price": 670,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1754417726_S_4.jpg"
  },
  {
    "id": "product-1733",
    "createdAt": "Date.now() - 4990000",
    "name": "China Stitch Formal Shirt",
    "price": 670,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1754417726_S_3.jpg"
  },
  {
    "id": "product-1734",
    "createdAt": "Date.now() - 5000000",
    "name": "China Stitch Formal Shirt",
    "price": 670,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1754417726_S_2.jpg"
  },
  {
    "id": "product-1735",
    "createdAt": "Date.now() - 5010000",
    "name": "China Stitch Formal Shirt",
    "price": 670,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1754417726_S_1.jpg"
  },
  {
    "id": "product-1736",
    "createdAt": "Date.now() - 5020000",
    "name": "Premium Quality Exclusive Shirt Collection",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753963546_S_11.jpg"
  },
  {
    "id": "product-1737",
    "createdAt": "Date.now() - 5030000",
    "name": "Premium Quality Exclusive Shirt Collection",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753963546_S_10.jpg"
  },
  {
    "id": "product-1738",
    "createdAt": "Date.now() - 5040000",
    "name": "Premium Quality Exclusive Shirt Collection",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753963546_S_9.jpg"
  },
  {
    "id": "product-1739",
    "createdAt": "Date.now() - 5050000",
    "name": "Premium Quality Exclusive Shirt Collection",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753963546_S_8.jpg"
  },
  {
    "id": "product-1740",
    "createdAt": "Date.now() - 5060000",
    "name": "Premium Quality Exclusive Shirt Collection",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753963546_S_7.jpg"
  },
  {
    "id": "product-1741",
    "createdAt": "Date.now() - 5070000",
    "name": "Premium Quality Exclusive Shirt Collection",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753963546_S_6.jpg"
  },
  {
    "id": "product-1742",
    "createdAt": "Date.now() - 5080000",
    "name": "Premium Quality Exclusive Shirt Collection",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753963546_S_5.jpg"
  },
  {
    "id": "product-1743",
    "createdAt": "Date.now() - 5090000",
    "name": "Premium Quality Exclusive Shirt Collection",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753963546_S_4.jpg"
  },
  {
    "id": "product-1744",
    "createdAt": "Date.now() - 5100000",
    "name": "Premium Quality Exclusive Shirt Collection",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753963546_S_3.jpg"
  },
  {
    "id": "product-1745",
    "createdAt": "Date.now() - 5110000",
    "name": "Premium Quality Exclusive Shirt Collection",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753963546_S_2.jpg"
  },
  {
    "id": "product-1746",
    "createdAt": "Date.now() - 5120000",
    "name": "Premium Quality Exclusive Shirt Collection",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753963545_S_1.jpg"
  },
  {
    "id": "product-1747",
    "createdAt": "Date.now() - 5130000",
    "name": "Pure Cotton Half Sleeve Print Shirt",
    "price": 599,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753961983_S_5.jpg"
  },
  {
    "id": "product-1748",
    "createdAt": "Date.now() - 5140000",
    "name": "Pure Cotton Half Sleeve Print Shirt",
    "price": 599,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753961983_S_4.jpg"
  },
  {
    "id": "product-1749",
    "createdAt": "Date.now() - 5150000",
    "name": "Pure Cotton Half Sleeve Print Shirt",
    "price": 599,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753961983_S_3.jpg"
  },
  {
    "id": "product-1750",
    "createdAt": "Date.now() - 5160000",
    "name": "Pure Cotton Half Sleeve Print Shirt",
    "price": 599,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753961983_S_2.jpg"
  },
  {
    "id": "product-1751",
    "createdAt": "Date.now() - 5170000",
    "name": "Pure Cotton Half Sleeve Print Shirt",
    "price": 599,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753961983_S_1.jpg"
  },
  {
    "id": "product-1752",
    "createdAt": "Date.now() - 5180000",
    "name": "Full Sleeve Digital Print Shirt for Men's",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753603777_S_3.jpg"
  },
  {
    "id": "product-1753",
    "createdAt": "Date.now() - 5190000",
    "name": "Full Sleeve Digital Print Shirt for Men's",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753603777_S_2.jpg"
  },
  {
    "id": "product-1754",
    "createdAt": "Date.now() - 5200000",
    "name": "Full Sleeve Digital Print Shirt for Men's",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753603777_S_1.jpg"
  },
  {
    "id": "product-1755",
    "createdAt": "Date.now() - 5210000",
    "name": "Premium Double Pocket Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753598703_S_12.jpg"
  },
  {
    "id": "product-1756",
    "createdAt": "Date.now() - 5220000",
    "name": "Premium Double Pocket Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753598703_S_11.jpg"
  },
  {
    "id": "product-1757",
    "createdAt": "Date.now() - 5230000",
    "name": "Premium Double Pocket Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753598703_S_10.jpg"
  },
  {
    "id": "product-1758",
    "createdAt": "Date.now() - 5240000",
    "name": "Premium Double Pocket Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753598703_S_9.jpg"
  },
  {
    "id": "product-1759",
    "createdAt": "Date.now() - 5250000",
    "name": "Premium Double Pocket Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753598703_S_8.jpg"
  },
  {
    "id": "product-1760",
    "createdAt": "Date.now() - 5260000",
    "name": "Premium Double Pocket Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753598702_S_7.jpg"
  },
  {
    "id": "product-1761",
    "createdAt": "Date.now() - 5270000",
    "name": "Premium Double Pocket Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753598702_S_6.jpg"
  },
  {
    "id": "product-1762",
    "createdAt": "Date.now() - 5280000",
    "name": "Premium Double Pocket Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753598702_S_5.jpg"
  },
  {
    "id": "product-1763",
    "createdAt": "Date.now() - 5290000",
    "name": "Premium Double Pocket Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753598702_S_4.jpg"
  },
  {
    "id": "product-1764",
    "createdAt": "Date.now() - 5300000",
    "name": "Premium Double Pocket Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753598702_S_3.jpg"
  },
  {
    "id": "product-1765",
    "createdAt": "Date.now() - 5310000",
    "name": "Premium Double Pocket Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753598702_S_2.jpg"
  },
  {
    "id": "product-1766",
    "createdAt": "Date.now() - 5320000",
    "name": "Premium Double Pocket Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753598702_S_1.jpg"
  },
  {
    "id": "product-1767",
    "createdAt": "Date.now() - 5330000",
    "name": "Pure Cotton Full Sleeve Check Shirt",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753377316_S_9.jpg"
  },
  {
    "id": "product-1768",
    "createdAt": "Date.now() - 5340000",
    "name": "Pure Cotton Full Sleeve Check Shirt",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753377316_S_8.jpg"
  },
  {
    "id": "product-1769",
    "createdAt": "Date.now() - 5350000",
    "name": "Pure Cotton Full Sleeve Check Shirt",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753377316_S_7.jpg"
  },
  {
    "id": "product-1770",
    "createdAt": "Date.now() - 5360000",
    "name": "Pure Cotton Full Sleeve Check Shirt",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753377316_S_6.jpg"
  },
  {
    "id": "product-1771",
    "createdAt": "Date.now() - 5370000",
    "name": "Pure Cotton Full Sleeve Check Shirt",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753377316_S_5.jpg"
  },
  {
    "id": "product-1772",
    "createdAt": "Date.now() - 5380000",
    "name": "Pure Cotton Full Sleeve Check Shirt",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753377316_S_4.jpg"
  },
  {
    "id": "product-1773",
    "createdAt": "Date.now() - 5390000",
    "name": "Pure Cotton Full Sleeve Check Shirt",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753377316_S_3.jpg"
  },
  {
    "id": "product-1774",
    "createdAt": "Date.now() - 5400000",
    "name": "Pure Cotton Full Sleeve Check Shirt",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753377316_S_2.jpg"
  },
  {
    "id": "product-1775",
    "createdAt": "Date.now() - 5410000",
    "name": "Pure Cotton Full Sleeve Check Shirt",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753377316_S_1.jpg"
  },
  {
    "id": "product-1776",
    "createdAt": "Date.now() - 5420000",
    "name": "Pure Cotton Half Sleeve Print Shirt",
    "price": 599,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753376284_S_6.jpg"
  },
  {
    "id": "product-1777",
    "createdAt": "Date.now() - 5430000",
    "name": "Pure Cotton Half Sleeve Print Shirt",
    "price": 599,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753376284_S_5.jpg"
  },
  {
    "id": "product-1778",
    "createdAt": "Date.now() - 5440000",
    "name": "Pure Cotton Half Sleeve Print Shirt",
    "price": 599,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753376284_S_4.jpg"
  },
  {
    "id": "product-1779",
    "createdAt": "Date.now() - 5450000",
    "name": "Pure Cotton Half Sleeve Print Shirt",
    "price": 599,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753376283_S_3.jpg"
  },
  {
    "id": "product-1780",
    "createdAt": "Date.now() - 5460000",
    "name": "Pure Cotton Half Sleeve Print Shirt",
    "price": 599,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753376283_S_2.jpg"
  },
  {
    "id": "product-1781",
    "createdAt": "Date.now() - 5470000",
    "name": "Pure Cotton Half Sleeve Print Shirt",
    "price": 599,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753376283_S_1.jpg"
  },
  {
    "id": "product-1782",
    "createdAt": "Date.now() - 5480000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197995_S_13.jpg"
  },
  {
    "id": "product-1783",
    "createdAt": "Date.now() - 5490000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197995_S_12.jpg"
  },
  {
    "id": "product-1784",
    "createdAt": "Date.now() - 5500000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197995_S_11.jpg"
  },
  {
    "id": "product-1785",
    "createdAt": "Date.now() - 5510000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197995_S_10.jpg"
  },
  {
    "id": "product-1786",
    "createdAt": "Date.now() - 5520000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197995_S_9.jpg"
  },
  {
    "id": "product-1787",
    "createdAt": "Date.now() - 5530000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197995_S_8.jpg"
  },
  {
    "id": "product-1788",
    "createdAt": "Date.now() - 5540000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197995_S_7.jpg"
  },
  {
    "id": "product-1789",
    "createdAt": "Date.now() - 5550000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197995_S_6.jpg"
  },
  {
    "id": "product-1790",
    "createdAt": "Date.now() - 5560000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197995_S_5.jpg"
  },
  {
    "id": "product-1791",
    "createdAt": "Date.now() - 5570000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197995_S_4.jpg"
  },
  {
    "id": "product-1792",
    "createdAt": "Date.now() - 5580000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197995_S_3.jpg"
  },
  {
    "id": "product-1793",
    "createdAt": "Date.now() - 5590000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197995_S_2.jpg"
  },
  {
    "id": "product-1794",
    "createdAt": "Date.now() - 5600000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197994_S_1.jpg"
  },
  {
    "id": "product-1795",
    "createdAt": "Date.now() - 5610000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197924_S_13.jpg"
  },
  {
    "id": "product-1796",
    "createdAt": "Date.now() - 5620000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197924_S_12.jpg"
  },
  {
    "id": "product-1797",
    "createdAt": "Date.now() - 5630000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197924_S_11.jpg"
  },
  {
    "id": "product-1798",
    "createdAt": "Date.now() - 5640000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197924_S_10.jpg"
  },
  {
    "id": "product-1799",
    "createdAt": "Date.now() - 5650000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197924_S_9.jpg"
  },
  {
    "id": "product-1800",
    "createdAt": "Date.now() - 5660000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197924_S_8.jpg"
  },
  {
    "id": "product-1801",
    "createdAt": "Date.now() - 5670000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197924_S_7.jpg"
  },
  {
    "id": "product-1802",
    "createdAt": "Date.now() - 5680000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197924_S_6.jpg"
  },
  {
    "id": "product-1803",
    "createdAt": "Date.now() - 5690000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197924_S_5.jpg"
  },
  {
    "id": "product-1804",
    "createdAt": "Date.now() - 5700000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197924_S_4.jpg"
  },
  {
    "id": "product-1805",
    "createdAt": "Date.now() - 5710000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197924_S_3.jpg"
  },
  {
    "id": "product-1806",
    "createdAt": "Date.now() - 5720000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197924_S_2.jpg"
  },
  {
    "id": "product-1807",
    "createdAt": "Date.now() - 5730000",
    "name": "China Magnet Stretched Full Sleeve Shirt",
    "price": 699,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753197924_S_1.jpg"
  },
  {
    "id": "product-1808",
    "createdAt": "Date.now() - 5740000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_19.jpg"
  },
  {
    "id": "product-1809",
    "createdAt": "Date.now() - 5750000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_18.jpg"
  },
  {
    "id": "product-1810",
    "createdAt": "Date.now() - 5760000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_17.jpg"
  },
  {
    "id": "product-1811",
    "createdAt": "Date.now() - 5770000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_16.jpg"
  },
  {
    "id": "product-1812",
    "createdAt": "Date.now() - 5780000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_15.jpg"
  },
  {
    "id": "product-1813",
    "createdAt": "Date.now() - 5790000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_14.jpg"
  },
  {
    "id": "product-1814",
    "createdAt": "Date.now() - 5800000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_13.jpg"
  },
  {
    "id": "product-1815",
    "createdAt": "Date.now() - 5810000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_12.jpg"
  },
  {
    "id": "product-1816",
    "createdAt": "Date.now() - 5820000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_11.jpg"
  },
  {
    "id": "product-1817",
    "createdAt": "Date.now() - 5830000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_10.jpg"
  },
  {
    "id": "product-1818",
    "createdAt": "Date.now() - 5840000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_9.jpg"
  },
  {
    "id": "product-1819",
    "createdAt": "Date.now() - 5850000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_8.jpg"
  },
  {
    "id": "product-1820",
    "createdAt": "Date.now() - 5860000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_7.jpg"
  },
  {
    "id": "product-1821",
    "createdAt": "Date.now() - 5870000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_6.jpg"
  },
  {
    "id": "product-1822",
    "createdAt": "Date.now() - 5880000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_5.jpg"
  },
  {
    "id": "product-1823",
    "createdAt": "Date.now() - 5890000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194657_S_4.jpg"
  },
  {
    "id": "product-1824",
    "createdAt": "Date.now() - 5900000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194656_S_3.jpg"
  },
  {
    "id": "product-1825",
    "createdAt": "Date.now() - 5910000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194656_S_2.jpg"
  },
  {
    "id": "product-1826",
    "createdAt": "Date.now() - 5920000",
    "name": "Luxury China Spandex Cot Drooped Shulderd Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753194656_S_1.jpg"
  },
  {
    "id": "product-1827",
    "createdAt": "Date.now() - 5930000",
    "name": "Pure Cotton full Sleeve Check & Print Shirt for Men's",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753189815_S_7.jpg"
  },
  {
    "id": "product-1828",
    "createdAt": "Date.now() - 5940000",
    "name": "Pure Cotton full Sleeve Check & Print Shirt for Men's",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753189814_S_6.jpg"
  },
  {
    "id": "product-1829",
    "createdAt": "Date.now() - 5950000",
    "name": "Pure Cotton full Sleeve Check & Print Shirt for Men's",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753189814_S_5.jpg"
  },
  {
    "id": "product-1830",
    "createdAt": "Date.now() - 5960000",
    "name": "Pure Cotton full Sleeve Check & Print Shirt for Men's",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753189814_S_4.jpg"
  },
  {
    "id": "product-1831",
    "createdAt": "Date.now() - 5970000",
    "name": "Pure Cotton full Sleeve Check & Print Shirt for Men's",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753189814_S_3.jpg"
  },
  {
    "id": "product-1832",
    "createdAt": "Date.now() - 5980000",
    "name": "Pure Cotton full Sleeve Check & Print Shirt for Men's",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753189814_S_2.jpg"
  },
  {
    "id": "product-1833",
    "createdAt": "Date.now() - 5990000",
    "name": "Pure Cotton full Sleeve Check & Print Shirt for Men's",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753189814_S_1.jpg"
  },
  {
    "id": "product-1834",
    "createdAt": "Date.now() - 6000000",
    "name": "Pure Cotton full Sleeve Check & Print Shirt for Men's",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753188782_S_5.jpg"
  },
  {
    "id": "product-1835",
    "createdAt": "Date.now() - 6010000",
    "name": "Pure Cotton full Sleeve Check & Print Shirt for Men's",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753188782_S_4.jpg"
  },
  {
    "id": "product-1836",
    "createdAt": "Date.now() - 6020000",
    "name": "Pure Cotton full Sleeve Check & Print Shirt for Men's",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753188782_S_3.jpg"
  },
  {
    "id": "product-1837",
    "createdAt": "Date.now() - 6030000",
    "name": "Pure Cotton full Sleeve Check & Print Shirt for Men's",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753188782_S_2.jpg"
  },
  {
    "id": "product-1838",
    "createdAt": "Date.now() - 6040000",
    "name": "Pure Cotton full Sleeve Check & Print Shirt for Men's",
    "price": 650,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753188782_S_1.jpg"
  },
  {
    "id": "product-1839",
    "createdAt": "Date.now() - 6050000",
    "name": "Luxury China Spandex Cot Drooped Shudder Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753187869_S_14.jpg"
  },
  {
    "id": "product-1840",
    "createdAt": "Date.now() - 6060000",
    "name": "Luxury China Spandex Cot Drooped Shudder Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753187869_S_13.jpg"
  },
  {
    "id": "product-1841",
    "createdAt": "Date.now() - 6070000",
    "name": "Luxury China Spandex Cot Drooped Shudder Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753187869_S_12.jpg"
  },
  {
    "id": "product-1842",
    "createdAt": "Date.now() - 6080000",
    "name": "Luxury China Spandex Cot Drooped Shudder Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753187869_S_11.jpg"
  },
  {
    "id": "product-1843",
    "createdAt": "Date.now() - 6090000",
    "name": "Luxury China Spandex Cot Drooped Shudder Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753187869_S_10.jpg"
  },
  {
    "id": "product-1844",
    "createdAt": "Date.now() - 6100000",
    "name": "Luxury China Spandex Cot Drooped Shudder Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753187869_S_9.jpg"
  },
  {
    "id": "product-1845",
    "createdAt": "Date.now() - 6110000",
    "name": "Luxury China Spandex Cot Drooped Shudder Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753187869_S_8.jpg"
  },
  {
    "id": "product-1846",
    "createdAt": "Date.now() - 6120000",
    "name": "Luxury China Spandex Cot Drooped Shudder Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753187869_S_7.jpg"
  },
  {
    "id": "product-1847",
    "createdAt": "Date.now() - 6130000",
    "name": "Luxury China Spandex Cot Drooped Shudder Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753187869_S_6.jpg"
  },
  {
    "id": "product-1848",
    "createdAt": "Date.now() - 6140000",
    "name": "Luxury China Spandex Cot Drooped Shudder Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753187869_S_5.jpg"
  },
  {
    "id": "product-1849",
    "createdAt": "Date.now() - 6150000",
    "name": "Luxury China Spandex Cot Drooped Shudder Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753187869_S_4.jpg"
  },
  {
    "id": "product-1850",
    "createdAt": "Date.now() - 6160000",
    "name": "Luxury China Spandex Cot Drooped Shudder Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753187869_S_3.jpg"
  },
  {
    "id": "product-1851",
    "createdAt": "Date.now() - 6170000",
    "name": "Luxury China Spandex Cot Drooped Shudder Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753187869_S_2.jpg"
  },
  {
    "id": "product-1852",
    "createdAt": "Date.now() - 6180000",
    "name": "Luxury China Spandex Cot Drooped Shudder Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753187869_S_1.jpg"
  },
  {
    "id": "product-1853",
    "createdAt": "Date.now() - 6190000",
    "name": "China Stitch Formal Shirt",
    "price": 680,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753106386_S_9.jpg"
  },
  {
    "id": "product-1854",
    "createdAt": "Date.now() - 6200000",
    "name": "China Stitch Formal Shirt",
    "price": 680,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753106386_S_8.jpg"
  },
  {
    "id": "product-1855",
    "createdAt": "Date.now() - 6210000",
    "name": "China Stitch Formal Shirt",
    "price": 680,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753106386_S_7.jpg"
  },
  {
    "id": "product-1856",
    "createdAt": "Date.now() - 6220000",
    "name": "China Stitch Formal Shirt",
    "price": 680,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753106386_S_6.jpg"
  },
  {
    "id": "product-1857",
    "createdAt": "Date.now() - 6230000",
    "name": "China Stitch Formal Shirt",
    "price": 680,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753106386_S_5.jpg"
  },
  {
    "id": "product-1858",
    "createdAt": "Date.now() - 6240000",
    "name": "China Stitch Formal Shirt",
    "price": 680,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753106386_S_4.jpg"
  },
  {
    "id": "product-1859",
    "createdAt": "Date.now() - 6250000",
    "name": "China Stitch Formal Shirt",
    "price": 680,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753106386_S_3.jpg"
  },
  {
    "id": "product-1860",
    "createdAt": "Date.now() - 6260000",
    "name": "China Stitch Formal Shirt",
    "price": 680,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753106386_S_2.jpg"
  },
  {
    "id": "product-1861",
    "createdAt": "Date.now() - 6270000",
    "name": "China Stitch Formal Shirt",
    "price": 680,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1753106386_S_1.jpg"
  },
  {
    "id": "product-1862",
    "createdAt": "Date.now() - 6280000",
    "name": "Luxury China Spandex Cot Drooped Shouldered Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752302124_S_15.jpg"
  },
  {
    "id": "product-1863",
    "createdAt": "Date.now() - 6290000",
    "name": "Luxury China Spandex Cot Drooped Shouldered Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752302124_S_14.jpg"
  },
  {
    "id": "product-1864",
    "createdAt": "Date.now() - 6300000",
    "name": "Luxury China Spandex Cot Drooped Shouldered Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752302124_S_13.jpg"
  },
  {
    "id": "product-1865",
    "createdAt": "Date.now() - 6310000",
    "name": "Luxury China Spandex Cot Drooped Shouldered Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752302124_S_12.jpg"
  },
  {
    "id": "product-1866",
    "createdAt": "Date.now() - 6320000",
    "name": "Luxury China Spandex Cot Drooped Shouldered Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752302124_S_11.jpg"
  },
  {
    "id": "product-1867",
    "createdAt": "Date.now() - 6330000",
    "name": "Luxury China Spandex Cot Drooped Shouldered Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752302124_S_10.jpg"
  },
  {
    "id": "product-1868",
    "createdAt": "Date.now() - 6340000",
    "name": "Luxury China Spandex Cot Drooped Shouldered Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752302124_S_9.jpg"
  },
  {
    "id": "product-1869",
    "createdAt": "Date.now() - 6350000",
    "name": "Luxury China Spandex Cot Drooped Shouldered Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752302124_S_8.jpg"
  },
  {
    "id": "product-1870",
    "createdAt": "Date.now() - 6360000",
    "name": "Luxury China Spandex Cot Drooped Shouldered Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752302124_S_7.jpg"
  },
  {
    "id": "product-1871",
    "createdAt": "Date.now() - 6370000",
    "name": "Luxury China Spandex Cot Drooped Shouldered Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752302124_S_6.jpg"
  },
  {
    "id": "product-1872",
    "createdAt": "Date.now() - 6380000",
    "name": "Luxury China Spandex Cot Drooped Shouldered Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752302124_S_5.jpg"
  },
  {
    "id": "product-1873",
    "createdAt": "Date.now() - 6390000",
    "name": "Luxury China Spandex Cot Drooped Shouldered Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752302124_S_4.jpg"
  },
  {
    "id": "product-1874",
    "createdAt": "Date.now() - 6400000",
    "name": "Luxury China Spandex Cot Drooped Shouldered Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752302124_S_3.jpg"
  },
  {
    "id": "product-1875",
    "createdAt": "Date.now() - 6410000",
    "name": "Luxury China Spandex Cot Drooped Shouldered Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752302124_S_2.jpg"
  },
  {
    "id": "product-1876",
    "createdAt": "Date.now() - 6420000",
    "name": "Luxury China Spandex Cot Drooped Shouldered Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752302124_S_1.jpg"
  },
  {
    "id": "product-1877",
    "createdAt": "Date.now() - 6430000",
    "name": "Luxury China Spandex Cot Half Sleeve Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752298921_S_9.jpg"
  },
  {
    "id": "product-1878",
    "createdAt": "Date.now() - 6440000",
    "name": "Luxury China Spandex Cot Half Sleeve Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752298921_S_8.jpg"
  },
  {
    "id": "product-1879",
    "createdAt": "Date.now() - 6450000",
    "name": "Luxury China Spandex Cot Half Sleeve Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752298921_S_7.jpg"
  },
  {
    "id": "product-1880",
    "createdAt": "Date.now() - 6460000",
    "name": "Luxury China Spandex Cot Half Sleeve Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752298921_S_6.jpg"
  },
  {
    "id": "product-1881",
    "createdAt": "Date.now() - 6470000",
    "name": "Luxury China Spandex Cot Half Sleeve Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752298921_S_5.jpg"
  },
  {
    "id": "product-1882",
    "createdAt": "Date.now() - 6480000",
    "name": "Luxury China Spandex Cot Half Sleeve Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752298921_S_4.jpg"
  },
  {
    "id": "product-1883",
    "createdAt": "Date.now() - 6490000",
    "name": "Luxury China Spandex Cot Half Sleeve Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752298920_S_3.jpg"
  },
  {
    "id": "product-1884",
    "createdAt": "Date.now() - 6500000",
    "name": "Luxury China Spandex Cot Half Sleeve Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752298920_S_2.jpg"
  },
  {
    "id": "product-1885",
    "createdAt": "Date.now() - 6510000",
    "name": "Luxury China Spandex Cot Half Sleeve Shirt",
    "price": 850,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752298920_S_1.jpg"
  },
  {
    "id": "product-1886",
    "createdAt": "Date.now() - 6520000",
    "name": "Pure Cotton Half Sleeve Print Shirt for Men's",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752260759_S_16.jpg"
  },
  {
    "id": "product-1887",
    "createdAt": "Date.now() - 6530000",
    "name": "Pure Cotton Half Sleeve Print Shirt for Men's",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752260759_S_15.jpg"
  },
  {
    "id": "product-1888",
    "createdAt": "Date.now() - 6540000",
    "name": "Pure Cotton Half Sleeve Print Shirt for Men's",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752260759_S_14.jpg"
  },
  {
    "id": "product-1889",
    "createdAt": "Date.now() - 6550000",
    "name": "Pure Cotton Half Sleeve Print Shirt for Men's",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752260759_S_13.jpg"
  },
  {
    "id": "product-1890",
    "createdAt": "Date.now() - 6560000",
    "name": "Pure Cotton Half Sleeve Print Shirt for Men's",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752260759_S_12.jpg"
  },
  {
    "id": "product-1891",
    "createdAt": "Date.now() - 6570000",
    "name": "Pure Cotton Half Sleeve Print Shirt for Men's",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752260759_S_11.jpg"
  },
  {
    "id": "product-1892",
    "createdAt": "Date.now() - 6580000",
    "name": "Pure Cotton Half Sleeve Print Shirt for Men's",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752260759_S_10.jpg"
  },
  {
    "id": "product-1893",
    "createdAt": "Date.now() - 6590000",
    "name": "Pure Cotton Half Sleeve Print Shirt for Men's",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752260759_S_9.jpg"
  },
  {
    "id": "product-1894",
    "createdAt": "Date.now() - 6600000",
    "name": "Pure Cotton Half Sleeve Print Shirt for Men's",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752260759_S_8.jpg"
  },
  {
    "id": "product-1895",
    "createdAt": "Date.now() - 6610000",
    "name": "Pure Cotton Half Sleeve Print Shirt for Men's",
    "price": 620,
    "category": "স্টাইলিস শার্ট",
    "description": "Fabric: Premium Quality Cotton.\nComfortable to wear for any occasion.\nAvailable Sizes: M, L, XL.\n\nSize Chart:\nM: Chest-40\", Length-28\"\nL: Chest-42\", Length-29\"\nXL: Chest-44\", Length-30\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1752260759_S_7.jpg"
  },






//pant
  

  {
    "id": "product-1965",
    "createdAt": "Date.now() - 7310000",
    "name": "Trendy Mobile Pant",
    "price": 700,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1745350034_S_2.jpg"
  },
  {
    "id": "product-1966",
    "createdAt": "Date.now() - 7320000",
    "name": "Trendy Mobile Pant",
    "price": 700,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1745350034_S_1.jpg"
  },
  {
    "id": "product-1967",
    "createdAt": "Date.now() - 7330000",
    "name": "Trendy Cargo Pants",
    "price": 800,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1745349749_S_3.jpg"
  },
  {
    "id": "product-1968",
    "createdAt": "Date.now() - 7340000",
    "name": "Trendy Cargo Pants",
    "price": 800,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1745349749_S_2.jpg"
  },
  {
    "id": "product-1969",
    "createdAt": "Date.now() - 7350000",
    "name": "Trendy Cargo Pants",
    "price": 800,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1745349749_S_1.jpg"
  },
  {
    "id": "product-1970",
    "createdAt": "Date.now() - 7360000",
    "name": "Trendy Mobile Pant",
    "price": 870,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1745349476_S_4.jpg"
  },
  {
    "id": "product-1971",
    "createdAt": "Date.now() - 7370000",
    "name": "Trendy Mobile Pant",
    "price": 870,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1745349476_S_3.jpg"
  },
  {
    "id": "product-1972",
    "createdAt": "Date.now() - 7380000",
    "name": "Trendy Mobile Pant",
    "price": 870,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1745349476_S_2.jpg"
  },
  {
    "id": "product-1973",
    "createdAt": "Date.now() - 7390000",
    "name": "Trendy Mobile Pant",
    "price": 870,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1745349476_S_1.jpg"
  },
  {
    "id": "product-1974",
    "createdAt": "Date.now() - 7400000",
    "name": "Trendy Mobile Pant",
    "price": 1070,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1745349165_S_3.jpg"
  },
  {
    "id": "product-1975",
    "createdAt": "Date.now() - 7410000",
    "name": "Trendy Mobile Pant",
    "price": 1070,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1745349165_S_2.jpg"
  },
  {
    "id": "product-1976",
    "createdAt": "Date.now() - 7420000",
    "name": "Trendy Mobile Pant",
    "price": 1070,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1745349164_S_1.jpg"
  },
  {
    "id": "product-1977",
    "createdAt": "Date.now() - 7430000",
    "name": "Semi Narrow Slim Fit Denim Pant",
    "price": 700,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729876176_S_5.jpg"
  },
  {
    "id": "product-1978",
    "createdAt": "Date.now() - 7440000",
    "name": "Semi Narrow Slim Fit Denim Pant",
    "price": 700,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729876176_S_4.jpg"
  },
  {
    "id": "product-1979",
    "createdAt": "Date.now() - 7450000",
    "name": "Semi Narrow Slim Fit Denim Pant",
    "price": 700,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729876176_S_3.jpg"
  },
  {
    "id": "product-1980",
    "createdAt": "Date.now() - 7460000",
    "name": "Semi Narrow Slim Fit Denim Pant",
    "price": 700,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729876176_S_2.jpg"
  },
  {
    "id": "product-1981",
    "createdAt": "Date.now() - 7470000",
    "name": "Semi Narrow Slim Fit Denim Pant",
    "price": 700,
    "category": "প্যান্ট",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729876176_S_1.jpg"
  },





















  
  {
    "id": "15653",
    "createdAt": "Date.now() - 7470000",
    "name": "Stylish Full Sleeve Mash T-Shirt",
    "price": 420,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Stylish Full Sleeve Mash T-Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 420 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/15653\n\nNote: Base price was ২২ ০ (220) + 200 = 420.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1734464041_S_7.jpg"
  },
  {
    "id": "15652",
    "createdAt": "Date.now() - 7470000",
    "name": "Stylish Full Sleeve Mash T-Shirt",
    "price": 420,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Stylish Full Sleeve Mash T-Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 420 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/15652\n\nNote: Base price was ২২ ০ (220) + 200 = 420.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1734464041_S_6.jpg"
  },
  {
    "id": "15651",
    "createdAt": "Date.now() - 7470000",
    "name": "Stylish Full Sleeve Mash T-Shirt",
    "price": 420,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Stylish Full Sleeve Mash T-Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 420 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/15651\n\nNote: Base price was ২২ ০ (220) + 200 = 420.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1734464041_S_5.jpg"
  },
  {
    "id": "15650",
    "createdAt": "Date.now() - 7470000",
    "name": "Stylish Full Sleeve Mash T-Shirt",
    "price": 420,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Stylish Full Sleeve Mash T-Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 420 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/15650\n\nNote: Base price was ২২ ০ (220) + 200 = 420.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1734464041_S_4.jpg"
  },
  {
    "id": "15649",
    "createdAt": "Date.now() - 7470000",
    "name": "Stylish Full Sleeve Mash T-Shirt",
    "price": 420,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Stylish Full Sleeve Mash T-Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 420 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/15649\n\nNote: Base price was ২২ ০ (220) + 200 = 420.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1734464041_S_3.jpg"
  },
  {
    "id": "15648",
    "createdAt": "Date.now() - 7470000",
    "name": "Stylish Full Sleeve Mash T-Shirt",
    "price": 420,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Stylish Full Sleeve Mash T-Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 420 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/15648\n\nNote: Base price was ২২ ০ (220) + 200 = 420.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1734464041_S_2.jpg"
  },
  {
    "id": "15647",
    "createdAt": "Date.now() - 7470000",
    "name": "Stylish Full Sleeve Mash T-Shirt",
    "price": 420,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Stylish Full Sleeve Mash T-Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 420 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/15647\n\nNote: Base price was ২২ ০ (220) + 200 = 420.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1734464041_S_1.jpg"
  },
  {
    "id": "15646",
    "createdAt": "Date.now() - 7470000",
    "name": "Stylish Full Sleeve Mash TShirt",
    "price": 420,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Stylish Full Sleeve Mash TShirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 420 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/15646\n\nNote: Base price was ২২ ০ (220) + 200 = 420.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1734463844_S_7.jpg"
  },
  {
    "id": "15645",
    "createdAt": "Date.now() - 7470000",
    "name": "Stylish Full Sleeve Mash TShirt",
    "price": 420,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Stylish Full Sleeve Mash TShirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 420 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/15645\n\nNote: Base price was ২২ ০ (220) + 200 = 420.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1734463844_S_6.jpg"
  },
  {
    "id": "15644",
    "createdAt": "Date.now() - 7470000",
    "name": "Stylish Full Sleeve Mash TShirt",
    "price": 420,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Stylish Full Sleeve Mash TShirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 420 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/15644\n\nNote: Base price was ২২ ০ (220) + 200 = 420.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1734463844_S_5.jpg"
  },
  {
    "id": "15643",
    "createdAt": "Date.now() - 7470000",
    "name": "Stylish Full Sleeve Mash TShirt",
    "price": 420,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Stylish Full Sleeve Mash TShirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 420 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/15643\n\nNote: Base price was ২২ ০ (220) + 200 = 420.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1734463844_S_4.jpg"
  },
  {
    "id": "15642",
    "createdAt": "Date.now() - 7470000",
    "name": "Stylish Full Sleeve Mash TShirt",
    "price": 420,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Stylish Full Sleeve Mash TShirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 420 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/15642\n\nNote: Base price was ২২ ০ (220) + 200 = 420.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1734463844_S_3.jpg"
  },
  {
    "id": "15641",
    "createdAt": "Date.now() - 7470000",
    "name": "Stylish Full Sleeve Mash TShirt",
    "price": 420,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Stylish Full Sleeve Mash TShirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 420 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/15641\n\nNote: Base price was ২২ ০ (220) + 200 = 420.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1734463844_S_2.jpg"
  },
  {
    "id": "15640",
    "createdAt": "Date.now() - 7470000",
    "name": "Stylish Full Sleeve Mash TShirt",
    "price": 420,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Stylish Full Sleeve Mash TShirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 420 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/15640\n\nNote: Base price was ২২ ০ (220) + 200 = 420.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1734463844_S_1.jpg"
  },
  {
    "id": "14728",
    "createdAt": "Date.now() - 7470000",
    "name": "Full Sleeve Cotton TShirt for Winter",
    "price": 450,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Full Sleeve Cotton TShirt for Winter\nCategory: লং-স্লীভ টিশার্ট\nPrice: 450 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14728\n\nNote: Base price was ২৫ ০ (250) + 200 = 450.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1730216343_S_2.jpg"
  },
  {
    "id": "14727",
    "createdAt": "Date.now() - 7470000",
    "name": "Full Sleeve Cotton TShirt for Winter",
    "price": 450,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Full Sleeve Cotton TShirt for Winter\nCategory: লং-স্লীভ টিশার্ট\nPrice: 450 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14727\n\nNote: Base price was ২৫ ০ (250) + 200 = 450.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1730216343_S_1.jpg"
  },
  {
    "id": "14598",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14598\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793872_S_14.jpg"
  },
  {
    "id": "14597",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14597\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793872_S_13.jpg"
  },
  {
    "id": "14596",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14596\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793872_S_12.jpg"
  },
  {
    "id": "14595",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14595\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793872_S_11.jpg"
  },
  {
    "id": "14594",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14594\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793872_S_10.jpg"
  },
  {
    "id": "14593",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14593\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793872_S_9.jpg"
  },
  {
    "id": "14592",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14592\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793872_S_8.jpg"
  },
  {
    "id": "14591",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14591\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793872_S_7.jpg"
  },
  {
    "id": "14590",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14590\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793872_S_6.jpg"
  },
  {
    "id": "14589",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14589\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793872_S_5.jpg"
  },
  {
    "id": "14588",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14588\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793872_S_4.jpg"
  },
  {
    "id": "14587",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14587\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793872_S_3.jpg"
  },
  {
    "id": "14586",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14586\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793872_S_2.jpg"
  },
  {
    "id": "14585",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14585\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793871_S_1.jpg"
  },
  {
    "id": "14584",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14584\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793824_S_12.jpg"
  },
  {
    "id": "14583",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14583\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793824_S_11.jpg"
  },
  {
    "id": "14582",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14582\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793824_S_10.jpg"
  },
  {
    "id": "14581",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14581\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793824_S_9.jpg"
  },
  {
    "id": "14580",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14580\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793824_S_8.jpg"
  },
  {
    "id": "14579",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14579\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793824_S_7.jpg"
  },
  {
    "id": "14578",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14578\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793824_S_6.jpg"
  },
  {
    "id": "14577",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14577\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793824_S_5.jpg"
  },
  {
    "id": "14576",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14576\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793824_S_4.jpg"
  },
  {
    "id": "14575",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14575\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793824_S_3.jpg"
  },
  {
    "id": "14574",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14574\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793824_S_2.jpg"
  },
  {
    "id": "14573",
    "createdAt": "Date.now() - 7470000",
    "name": "Cotton Long Sleeve Sweet Shirt",
    "price": 520,
    "category": "লং-স্লীভ টিশার্ট",
    "description": "Product: Cotton Long Sleeve Sweet Shirt\nCategory: লং-স্লীভ টিশার্ট\nPrice: 520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/14573\n\nNote: Base price was ৩ ২০ (320) + 200 = 520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1729793824_S_1.jpg"
  },






















//trouser







  {
    "id": "product-1982",
    "createdAt": "Date.now() - 7480000",
    "name": "Black Cargo Stripe Sweatpants Joggers",
    "price": 550,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746283261_S_5.jpg"
  },
  {
    "id": "product-1983",
    "createdAt": "Date.now() - 7490000",
    "name": "Black Cargo Stripe Sweatpants Joggers",
    "price": 550,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746283261_S_4.jpg"
  },
  {
    "id": "product-1984",
    "createdAt": "Date.now() - 7500000",
    "name": "Black Cargo Stripe Sweatpants Joggers",
    "price": 550,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746283261_S_3.jpg"
  },
  {
    "id": "product-1985",
    "createdAt": "Date.now() - 7510000",
    "name": "Black Cargo Stripe Sweatpants Joggers",
    "price": 550,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746283261_S_2.jpg"
  },
  {
    "id": "product-1986",
    "createdAt": "Date.now() - 7520000",
    "name": "Black Cargo Stripe Sweatpants Joggers",
    "price": 550,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1746283261_S_1.jpg"
  },
  {
    "id": "product-1987",
    "createdAt": "Date.now() - 7530000",
    "name": "সেমি স্ট্রিজ সুতি পাজামা",
    "price": 490,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1742067472_S_1.jpg"
  },
  {
    "id": "product-1988",
    "createdAt": "Date.now() - 7540000",
    "name": "Stylish Three Quarter Pant",
    "price": 480,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1722747711_S_2.jpg"
  },
  {
    "id": "product-1989",
    "createdAt": "Date.now() - 7550000",
    "name": "Stylish Three Quarter Pant",
    "price": 480,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1722747711_S_1.jpg"
  },
  {
    "id": "product-1990",
    "createdAt": "Date.now() - 7560000",
    "name": "Exclusive Trouser for men",
    "price": 499,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1719940519_S_6.jpg"
  },
  {
    "id": "product-1991",
    "createdAt": "Date.now() - 7570000",
    "name": "Exclusive Trouser for men",
    "price": 499,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1719940519_S_5.jpg"
  },
  {
    "id": "product-1992",
    "createdAt": "Date.now() - 7580000",
    "name": "Exclusive Trouser for men",
    "price": 499,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1719940519_S_4.jpg"
  },
  {
    "id": "product-1993",
    "createdAt": "Date.now() - 7590000",
    "name": "Exclusive Trouser for men",
    "price": 499,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1719940519_S_3.jpg"
  },
  {
    "id": "product-1994",
    "createdAt": "Date.now() - 7600000",
    "name": "Exclusive Trouser for men",
    "price": 499,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1719940518_S_2.jpg"
  },
  {
    "id": "product-1995",
    "createdAt": "Date.now() - 7610000",
    "name": "Exclusive Trouser for men",
    "price": 499,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1719940518_S_1.jpg"
  },
  {
    "id": "product-1996",
    "createdAt": "Date.now() - 7620000",
    "name": "Stylish Premium Joggers Pant",
    "price": 760,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705428362_S_10.jpg"
  },
  {
    "id": "product-1997",
    "createdAt": "Date.now() - 7630000",
    "name": "Stylish Premium Joggers Pant",
    "price": 760,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705428362_S_9.jpg"
  },
  {
    "id": "product-1998",
    "createdAt": "Date.now() - 7640000",
    "name": "Stylish Premium Joggers Pant",
    "price": 760,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705428362_S_8.jpg"
  },
  {
    "id": "product-1999",
    "createdAt": "Date.now() - 7650000",
    "name": "Stylish Premium Joggers Pant",
    "price": 760,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705428362_S_7.jpg"
  },
  {
    "id": "product-2000",
    "createdAt": "Date.now() - 7660000",
    "name": "Stylish Premium Joggers Pant",
    "price": 760,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705428362_S_6.jpg"
  },
  {
    "id": "product-2001",
    "createdAt": "Date.now() - 7670000",
    "name": "Stylish Premium Joggers Pant",
    "price": 760,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705428362_S_5.jpg"
  },
  {
    "id": "product-2002",
    "createdAt": "Date.now() - 7680000",
    "name": "Stylish Premium Joggers Pant",
    "price": 760,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705428361_S_4.jpg"
  },
  {
    "id": "product-2003",
    "createdAt": "Date.now() - 7690000",
    "name": "Stylish Premium Joggers Pant",
    "price": 760,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705428361_S_3.jpg"
  },
  {
    "id": "product-2004",
    "createdAt": "Date.now() - 7700000",
    "name": "Stylish Premium Joggers Pant",
    "price": 760,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705428361_S_2.jpg"
  },
  {
    "id": "product-2005",
    "createdAt": "Date.now() - 7710000",
    "name": "Stylish Premium Joggers Pant",
    "price": 760,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705428361_S_1.jpg"
  },
  {
    "id": "product-2006",
    "createdAt": "Date.now() - 7720000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258434_S_9.jpg"
  },
  {
    "id": "product-2007",
    "createdAt": "Date.now() - 7730000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258434_S_8.jpg"
  },
  {
    "id": "product-2008",
    "createdAt": "Date.now() - 7740000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258434_S_7.jpg"
  },
  {
    "id": "product-2009",
    "createdAt": "Date.now() - 7750000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258434_S_6.jpg"
  },
  {
    "id": "product-2010",
    "createdAt": "Date.now() - 7760000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258434_S_5.jpg"
  },
  {
    "id": "product-2011",
    "createdAt": "Date.now() - 7770000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258434_S_4.jpg"
  },
  {
    "id": "product-2012",
    "createdAt": "Date.now() - 7780000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258434_S_3.jpg"
  },
  {
    "id": "product-2013",
    "createdAt": "Date.now() - 7790000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258434_S_2.jpg"
  },
  {
    "id": "product-2014",
    "createdAt": "Date.now() - 7800000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258434_S_1.jpg"
  },
  {
    "id": "product-2015",
    "createdAt": "Date.now() - 7810000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258348_S_10.jpg"
  },
  {
    "id": "product-2016",
    "createdAt": "Date.now() - 7820000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258348_S_9.jpg"
  },
  {
    "id": "product-2017",
    "createdAt": "Date.now() - 7830000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258348_S_8.jpg"
  },
  {
    "id": "product-2018",
    "createdAt": "Date.now() - 7840000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258348_S_7.jpg"
  },
  {
    "id": "product-2019",
    "createdAt": "Date.now() - 7850000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258348_S_6.jpg"
  },
  {
    "id": "product-2020",
    "createdAt": "Date.now() - 7860000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258348_S_5.jpg"
  },
  {
    "id": "product-2021",
    "createdAt": "Date.now() - 7870000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258348_S_4.jpg"
  },
  {
    "id": "product-2022",
    "createdAt": "Date.now() - 7880000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258348_S_3.jpg"
  },
  {
    "id": "product-2023",
    "createdAt": "Date.now() - 7890000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258348_S_2.jpg"
  },
  {
    "id": "product-2024",
    "createdAt": "Date.now() - 7900000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258348_S_1.jpg"
  },
  {
    "id": "product-2025",
    "createdAt": "Date.now() - 7910000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_20.jpg"
  },
  {
    "id": "product-2026",
    "createdAt": "Date.now() - 7920000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_19.jpg"
  },
  {
    "id": "product-2027",
    "createdAt": "Date.now() - 7930000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_18.jpg"
  },
  {
    "id": "product-2028",
    "createdAt": "Date.now() - 7940000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_17.jpg"
  },
  {
    "id": "product-2029",
    "createdAt": "Date.now() - 7950000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_16.jpg"
  },
  {
    "id": "product-2030",
    "createdAt": "Date.now() - 7960000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_15.jpg"
  },
  {
    "id": "product-2031",
    "createdAt": "Date.now() - 7970000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_14.jpg"
  },
  {
    "id": "product-2032",
    "createdAt": "Date.now() - 7980000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_13.jpg"
  },
  {
    "id": "product-2033",
    "createdAt": "Date.now() - 7990000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_12.jpg"
  },
  {
    "id": "product-2034",
    "createdAt": "Date.now() - 8000000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_11.jpg"
  },
  {
    "id": "product-2035",
    "createdAt": "Date.now() - 8010000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_10.jpg"
  },
  {
    "id": "product-2036",
    "createdAt": "Date.now() - 8020000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_9.jpg"
  },
  {
    "id": "product-2037",
    "createdAt": "Date.now() - 8030000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_8.jpg"
  },
  {
    "id": "product-2038",
    "createdAt": "Date.now() - 8040000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_7.jpg"
  },
  {
    "id": "product-2039",
    "createdAt": "Date.now() - 8050000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_6.jpg"
  },
  {
    "id": "product-2040",
    "createdAt": "Date.now() - 8060000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_5.jpg"
  },
  {
    "id": "product-2041",
    "createdAt": "Date.now() - 8070000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_4.jpg"
  },
  {
    "id": "product-2042",
    "createdAt": "Date.now() - 8080000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_3.jpg"
  },
  {
    "id": "product-2043",
    "createdAt": "Date.now() - 8090000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_2.jpg"
  },
  {
    "id": "product-2044",
    "createdAt": "Date.now() - 8100000",
    "name": "Stylish Trouser For Men",
    "price": 530,
    "category": "ট্রাউজার",
    "description": "Fabric: Premium Quality Twill Cotton.\nComfortable and stylish for everyday wear.\nAvailable Sizes: 30, 32, 34, 36.\n\nSize Chart (Waist):\nSize 30: Waist-30\", Length-39\"\nSize 32: Waist-32\", Length-40\"\nSize 34: Waist-34\", Length-41\"\nSize 36: Waist-36\", Length-41\"\n\nOrder Process:\nTo order, please send us your name, address, phone number, and desired size.\nDelivery within Dhaka: 2 days.\nDelivery outside Dhaka: 3-5 days.\n\nFor any questions, call: 📞 01XXXX-XXXXXX",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1705258226_S_1.jpg"
  },


























  {
    "id": "6420",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda Imported China Premium Grade Sports Sandal",
    "price": 1390,
    "category": "জুতা",
    "description": "Product: Original Panda Imported China Premium Grade Sports Sandal\nCategory: জুতা\nPrice: 1390 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6420\n\nNote: Base price was ১১৯০ (1190 in English) + 200 = 1390.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708802678_S_6.jpg"
  },
  {
    "id": "6419",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda Imported China Premium Grade Sports Sandal",
    "price": 1390,
    "category": "জুতা",
    "description": "Product: Original Panda Imported China Premium Grade Sports Sandal\nCategory: জুতা\nPrice: 1390 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6419\n\nNote: Base price was ১১৯০ (1190 in English) + 200 = 1390.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708802678_S_5.jpg"
  },
  {
    "id": "6418",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda Imported China Premium Grade Sports Sandal",
    "price": 1390,
    "category": "জুতা",
    "description": "Product: Original Panda Imported China Premium Grade Sports Sandal\nCategory: জুতা\nPrice: 1390 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6418\n\nNote: Base price was ১১৯০ (1190 in English) + 200 = 1390.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708802678_S_4.jpg"
  },
  {
    "id": "6417",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda Imported China Premium Grade Sports Sandal",
    "price": 1390,
    "category": "জুতা",
    "description": "Product: Original Panda Imported China Premium Grade Sports Sandal\nCategory: জুতা\nPrice: 1390 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6417\n\nNote: Base price was ১১৯০ (1190 in English) + 200 = 1390.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708802678_S_3.jpg"
  },
  {
    "id": "6416",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda Imported China Premium Grade Sports Sandal",
    "price": 1390,
    "category": "জুতা",
    "description": "Product: Original Panda Imported China Premium Grade Sports Sandal\nCategory: জুতা\nPrice: 1390 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6416\n\nNote: Base price was ১১৯০ (1190 in English) + 200 = 1390.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708802678_S_2.jpg"
  },
  {
    "id": "6415",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda Imported China Premium Grade Sports Sandal",
    "price": 1390,
    "category": "জুতা",
    "description": "Product: Original Panda Imported China Premium Grade Sports Sandal\nCategory: জুতা\nPrice: 1390 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6415\n\nNote: Base price was ১১৯০ (1190 in English) + 200 = 1390.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708802678_S_1.jpg"
  },
  {
    "id": "6414",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda imported China Premium Grade Keds",
    "price": 1550,
    "category": "জুতা",
    "description": "Product: Original Panda imported China Premium Grade Keds\nCategory: জুতা\nPrice: 1550 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6414\n\nNote: Base price was ১৩৫০ (1350 in English) + 200 = 1550.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708802399_S_4.jpg"
  },
  {
    "id": "6413",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda imported China Premium Grade Keds",
    "price": 1550,
    "category": "জুতা",
    "description": "Product: Original Panda imported China Premium Grade Keds\nCategory: জুতা\nPrice: 1550 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6413\n\nNote: Base price was ১৩৫০ (1350 in English) + 200 = 1550.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708802399_S_3.jpg"
  },
  {
    "id": "6412",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda imported China Premium Grade Keds",
    "price": 1550,
    "category": "জুতা",
    "description": "Product: Original Panda imported China Premium Grade Keds\nCategory: জুতা\nPrice: 1550 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6412\n\nNote: Base price was ১৩৫০ (1350 in English) + 200 = 1550.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708802399_S_2.jpg"
  },
  {
    "id": "6411",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda imported China Premium Grade Keds",
    "price": 1550,
    "category": "জুতা",
    "description": "Product: Original Panda imported China Premium Grade Keds\nCategory: জুতা\nPrice: 1550 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6411\n\nNote: Base price was ১৩৫০ (1350 in English) + 200 = 1550.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708802399_S_1.jpg"
  },
  {
    "id": "6410",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda imported China Premium Grade Keds",
    "price": 1750,
    "category": "জুতা",
    "description": "Product: Original Panda imported China Premium Grade Keds\nCategory: জুতা\nPrice: 1750 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6410\n\nNote: Base price was ১৫৫০ (1550 in English) + 200 = 1750.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708802138_S_4.jpg"
  },
  {
    "id": "6409",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda imported China Premium Grade Keds",
    "price": 1750,
    "category": "জুতা",
    "description": "Product: Original Panda imported China Premium Grade Keds\nCategory: জুতা\nPrice: 1750 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6409\n\nNote: Base price was ১৫৫০ (1550 in English) + 200 = 1750.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708802138_S_3.jpg"
  },
  {
    "id": "6408",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda imported China Premium Grade Keds",
    "price": 1750,
    "category": "জুতা",
    "description": "Product: Original Panda imported China Premium Grade Keds\nCategory: জুতা\nPrice: 1750 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6408\n\nNote: Base price was ১৫৫০ (1550 in English) + 200 = 1750.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708802138_S_2.jpg"
  },
  {
    "id": "6407",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda imported China Premium Grade Keds",
    "price": 1750,
    "category": "জুতা",
    "description": "Product: Original Panda imported China Premium Grade Keds\nCategory: জুতা\nPrice: 1750 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6407\n\nNote: Base price was ১৫৫০ (1550 in English) + 200 = 1750.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708802138_S_1.jpg"
  },
  {
    "id": "6406",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda imported China Premium Grade Keds",
    "price": 1850,
    "category": "জুতা",
    "description": "Product: Original Panda imported China Premium Grade Keds\nCategory: জুতা\nPrice: 1850 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6406\n\nNote: Base price was ১৬৫০ (1650 in English) + 200 = 1850.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708801877_S_2.jpg"
  },
  {
    "id": "6405",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Panda imported China Premium Grade Keds",
    "price": 1850,
    "category": "জুতা",
    "description": "Product: Original Panda imported China Premium Grade Keds\nCategory: জুতা\nPrice: 1850 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6405\n\nNote: Base price was ১৬৫০ (1650 in English) + 200 = 1850.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708801877_S_1.jpg"
  },
  {
    "id": "6404",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Imported China Premium Grade Keds",
    "price": 2520,
    "category": "জুতা",
    "description": "Product: Original Imported China Premium Grade Keds\nCategory: জুতা\nPrice: 2520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6404\n\nNote: Base price was ২৩২০ (2320 in English) + 200 = 2520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708801475_S_3.jpg"
  },
  {
    "id": "6403",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Imported China Premium Grade Keds",
    "price": 2520,
    "category": "জুতা",
    "description": "Product: Original Imported China Premium Grade Keds\nCategory: জুতা\nPrice: 2520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6403\n\nNote: Base price was ২৩২০ (2320 in English) + 200 = 2520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708801475_S_2.jpg"
  },
  {
    "id": "6402",
    "createdAt": "Date.now() - 7470000",
    "name": "Original Imported China Premium Grade Keds",
    "price": 2520,
    "category": "জুতা",
    "description": "Product: Original Imported China Premium Grade Keds\nCategory: জুতা\nPrice: 2520 BDT\n\nLink: https://shopbasebd.com/store/sample/product/details/6402\n\nNote: Base price was ২৩২০ (2320 in English) + 200 = 2520.",
    "imageUrl": "https://shopbasebd.com/public/uploads/shop/products/1708801475_S_1.jpg"
  },




  
  

];



export const CATEGORIES: Category[] = [
  { id: 12, name: "শর্ট কম্বো", imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1752771666_S_20.jpg" },
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
