import Image from 'next/image';
import React from 'react';
import TopNav from '../components/topNav';
import Footer from '../components/footer';

const ShoppingCart = () => {
  return (
    <div className="bg-gray-100 py-10">
      <TopNav/>
      <h2 className="text-2xl font-bold text-center mb-8">Your Shopping Cart</h2>
      <div className="container mx-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">Product</th>
              <th className="border-b px-4 py-2 text-center">Quantity</th>
              <th className="border-b px-4 py-2 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b px-4 py-2">
                <div className="flex items-center">
                <Image src="/images/Product-Image.png" alt="Basic white vase" width={109} height={134} className="w-24 h-24 rounded-md" />
                <div className="ml-4">
                    <p className="font-bold">Graystone vase</p>
                    <p className="text-sm text-gray-500">A timeless ceramic vase with a tri-color grey glaze.</p>
                    <p className="text-sm text-gray-500">£85</p>
                  </div>
                </div>
              </td>
              <td className="border-b px-4 py-2 text-center">1</td>
              <td className="border-b px-4 py-2 text-right">£85</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">
                <div className="flex items-center">
                  <Image src="/images/Product-Image2.png" alt="Basic white vase" width={109} height={134} className="w-24 h-24 rounded-md" />
                  <div className="ml-4">
                    <p className="font-bold">Basic white vase</p>
                    <p className="text-sm text-gray-500">Beautiful and simple, this is one for the classics.</p>
                    <p className="text-sm text-gray-500">£125</p>
                  </div>
                </div>
              </td>
              <td className="border-b px-4 py-2 text-center">1</td>
              <td className="border-b px-4 py-2 text-right">£125</td>
            </tr>
            <tr>
              <td colSpan="2" className="border-b px-4 py-2 text-right font-bold">Subtotal</td>
              <td className="border-b px-4 py-2 text-right font-bold">£210</td>
            </tr>
            <tr>
              <td colSpan="3" className="border-b px-4 py-2 text-gray-500 text-right">Taxes and shipping are calculated at checkout</td>
            </tr>
          </tbody>
        </table>

        <div className="text-right mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">Go to Checkout</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ShoppingCart;