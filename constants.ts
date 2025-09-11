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
    id: 'product-300', createdAt: Date.now() - 100000, name: "ক্যাজুয়াল কটন টি-শার্ট", price: 450, category: "টি শার্ট",
    description: descriptionTemplate, imageUrl: "https://shopbasebd.com/public/uploads/shop/products/1754733277_L_4.jpg"
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
    id: 'product-56', createdAt: Date.now() - 100000, name: "স্মার্ট পলো শার্ট", price: 430, category: "পলো শার্ট",
    description: descriptionTemplate, imageUrl: "https://i.postimg.cc/nzCV1PhN/1737397274-L-2-2.jpg"
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
