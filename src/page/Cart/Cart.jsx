import React, { useState } from 'react';

const Cart = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [paymentMethod, setPaymentMethod] = useState(null);

    const handlePayment = (method) => {
      setPaymentMethod(method);
    };
    return (
        <div className='flex flex-col mt-[76px] px-6 py-12'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[24px] font-bold'>Shopping Bag</h1>
                <p className='font-semibold'>2 items in you Cart.</p>
            </div>
            <div className='grid grid-cols-4 gap-6 mt-6'>
                <div className='col-span-3 bg-white shadow p-6 rounded-xl flex flex-col gap-4'>
                    <div className='border-t border-b py-6 px-2 flex shadow'>
                        <div>
                            <img className='w-12 h-12' src="/thum-1.jpg" alt="" />
                            <p>Price: TK 200</p>
                        </div>
                        <div>
                            <p>Course</p>
                            <h1>Factoryze Testing Course</h1>
                        </div>
                    </div>
                    <div className='border-t border-b py-6 px-2 flex shadow'>
                        <div>
                            <img className='w-12 h-12' src="/thum-1.jpg" alt="" />
                            <p>Price: TK 200</p>
                        </div>
                        <div>
                            <p>Course</p>
                            <h1>Factoryze Testing Course</h1>
                        </div>
                    </div>
                    <div className='border-t border-b py-6 px-2 flex shadow'>
                        <div>
                            <img className='w-12 h-12' src="/thum-1.jpg" alt="" />
                            <p>Price: TK 200</p>
                        </div>
                        <div>
                            <p>Course</p>
                            <h1>Factoryze Testing Course</h1>
                        </div>
                    </div>
                </div>
 {/* Checkout Section */}
                <div className="max-w-xs col-span-1 p-4 rounded-lg border bg-white shadow-sm">
                        <h2 className="text-lg font-semibold mb-1">Calculated Shipping</h2>
                        <p className="text-sm text-gray-700 font-medium mb-2">Coupon Code</p>
                        <p className="text-xs text-gray-500 mb-4">
                        Unlock amazing savings with our exclusive coupons! Enjoy instant discounts, whether it's a percentage off, flat reduction, or even free shipping.
                        </p>

                        <input
                        type="text"
                        placeholder="Enter Coupon Code"
                        className="w-full border rounded-full px-4 py-2 text-sm focus:outline-none mb-3"
                        />
                        <button className="w-full bg-blue-500 text-white font-medium rounded-md py-2 hover:bg-blue-600 transition mb-4">
                        Apply
                        </button>

                        <hr className="mb-4" />

                        <div className="text-sm text-gray-800 space-y-2 mb-4">
                        <div className="flex justify-between font-medium">
                            <span>Order total</span>
                            <span className="font-bold">৳1230</span>
                        </div>
                        <div className="flex justify-between font-semibold text-black">
                            <span>Total</span>
                            <span className="font-bold">৳1230</span>
                        </div>
                        </div>

                        <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full bg-blue-500 text-white font-medium rounded-md py-2 hover:bg-blue-600 transition"
                        >
                        Checkout
                        </button>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
                    <div className="bg-white max-w-md w-full rounded-lg shadow-xl p-6 relative">
                        <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        >
                        ✕
                        </button>

                        <h2 className="text-xl font-semibold text-center mb-4">Checkout</h2>
                        <div className="border p-4 rounded-lg mb-4">
                            {/* two payment mehtod  */}
                            <div className="flex gap-5 justify-center mb-4">
                                <div
                                    onClick={() => handlePayment("Nagad")}
                                    className={`border shadow py-1 px-3 flex cursor-pointer rounded ${
                                    paymentMethod === "Nagad" ? "ring-2 ring-red-400" : ""
                                    }`}
                                >
                                    <img src="/Nagad.png" alt="Nagad" className="h-12" />
                                </div>
                                <div
                                    onClick={() => handlePayment("Bkash")}
                                    className={`border shadow py-1 px-3 flex cursor-pointer rounded ${
                                    paymentMethod === "Bkash" ? "ring-2 ring-pink-400" : ""
                                    }`}
                                >
                                    <img src="/BKash.png" alt="Bkash" className="h-10" />
                                </div>
                            </div>
                            {/* this will show when i select payment method  */}
                            {paymentMethod && (
                            <p className="text-red-600 text-sm text-center">
                                <strong>Send 200 Taka</strong> with{" "}
                                <strong>{paymentMethod.toUpperCase()}</strong> to{" "}
                                <strong className="text-red-500">+8801534115844</strong> and add the transaction ID.
                            </p>
                            )}
                        </div>
                        {/* this form will show when i select payment method  */}
                        {paymentMethod && (
                            <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                * Your Contact Number
                                </label>
                                <div className="flex items-center gap-2 border rounded px-3 py-2 mt-1">
                                <span className="text-sm">🇧🇩 +880</span>
                                <input
                                    type="text"
                                    placeholder="1XXXXXXXXX"
                                    className="flex-1 outline-none text-sm"
                                />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                * Transaction ID
                                </label>
                                <input
                                type="text"
                                placeholder="Transaction id"
                                className="w-full border rounded px-3 py-2 mt-1 outline-none text-sm"
                                />
                            </div>

                            <div className="flex justify-end gap-2">
                                <button
                                type="button"
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setPaymentMethod(null);
                                }}
                                className="px-4 py-2 text-sm border rounded hover:bg-gray-100"
                                >
                                Cancel
                                </button>
                                <button
                                type="submit"
                                className="px-5 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600"
                                >
                                Confirm
                                </button>
                            </div>
                            </form>
                        )}
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;