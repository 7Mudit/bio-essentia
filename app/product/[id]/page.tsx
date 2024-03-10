"use client";
import RatingStars from "@/components/shared/RatingStars";
import Image from "next/image";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Products from "@/components/home/Products";
import { popularProducts } from "@/constants";
import { Button } from "@/components/ui/button";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { Textarea } from "@/components/ui/textarea";

interface ProductData {
  images: string[];
  name: string;
  description: string;
  prizePercentageOff: string;
  actualPrize: string;
  discountPrize: string;
  rating: number;
  review: number;
}

const productData: ProductData = {
  images: [
    "/assets/images/product/Product1.png",
    "/assets/images/product/product2.jpg",
    "/assets/images/product/Product3.webp",
    "/assets/images/product/product2.jpg",
    "/assets/images/product/Product1.png",
    "/assets/images/product/product2.jpg",
  ],
  rating: 4,
  review: 200,
  name: "Biozyme Performance",
  description:
    "This is a great product that helps you with your needs. It's durable, reliable, and at a great price.",
  prizePercentageOff: "10%",
  actualPrize: "₹100",
  discountPrize: "₹90",
};

const Page = () => {
  const [mainImage, setMainImage] = useState(productData.images[0]);
  const [quantity, setQuantity] = useState(1);

  const handleThumbnailClick = (image: any) => {
    setMainImage(image);
  };

  const handleQuantityChange = (e: any) => {
    setQuantity(e.target.value);
  };
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // onSubmitReview(rating, review);
    // Reset form
    setRating(0);
    setReview("");
  };

  return (
    <>
      <div className="flex flex-col items-start justify-center py-10 gap-10 p-2 sm:p-4 md:p-8 lg:p-12 xl:p-14">
        <div className="flex flex-col xl:flex-row justify-center gap-10 items-start ">
          <div className="flex-1 flex flex-col">
            <div className="p-2 border border-black rounded-lg">
              <Image
                src={mainImage}
                width={500}
                height={530}
                alt="Main"
                className="w-full object-contain h-[530px]"
              />
            </div>

            <div className="flex border  border-black rounded-lg justify-center mt-2">
              {productData.images.map((image, index) => (
                <div
                  key={index}
                  className="border-r-[1px] border-black  last:border-none"
                >
                  <Image
                    src={image}
                    width={100}
                    height={100}
                    alt={`Thumbnail ${index}`}
                    className="grid grid-cols-5  cursor-pointer "
                    onClick={() => handleThumbnailClick(image)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex-col items-start justify-center">
            <h2 className="text-[30px] xl:text-[48px] font-bold">
              {productData.name}
            </h2>
            <div className="flex flex-row gap-2 items-center justify-start">
              <RatingStars Review_Count={productData.rating} />
              <p className="text-[17px] text-justify text-gray-500">
                ({productData.review} reviews)
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex flex-row gap-5 items-center justify-start">
              <p className="text-[58px] font-extrabold text-[#3BB77E]">
                {productData.actualPrize}
              </p>
              <div className="flex flex-col items-center justify-start">
                <p className="text-[#FDC040] text-[16px] font-semibold">
                  {productData.prizePercentageOff} Off
                </p>
                <p className="text-[#B6B6B6] text-[28px] font-bold line-through">
                  {productData.discountPrize}
                </p>
              </div>
            </div>

            <p className="mt-2 text-[17px] text-justify text-gray-500">
              {productData.description}
            </p>

            <div className="mt-4 flex flex-row gap-3 items-center justify-start">
              <Label htmlFor="quantity" className="block text-lg">
                Quantity:
              </Label>
              <Input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="ml-2 w-32 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border-2 rounded-md"
              />
            </div>
            <Button className="mt-4 mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </Button>
            <Button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </Button>
            <div className="mt-4 flex flex-col gap-2 items-start justify-center">
              <div className="w-full">
                <h1 className="text-[18px] text-[#253D4E] font-semibold">
                  Add a Review
                </h1>
                <Separator className="my-1" />
              </div>

              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="text-yellow-400 hover:text-yellow-600"
                  >
                    {star <= rating ? (
                      <TiStarFullOutline size={24} />
                    ) : (
                      <TiStarOutline size={24} />
                    )}
                  </button>
                ))}
              </div>
              {/* Optionally display the selected rating using RatingStars
              {rating > 0 && (
                <RatingStars Review_Count={rating} Star_Size={24} />
              )} */}
              <Textarea
                className="border border-gray-300 p-2"
                rows={4}
                placeholder="Write your review here..."
                value={review}
                onChange={handleReviewChange}
              />
              <Button
                type="submit"
                onClick={handleSubmit}
                className=" bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Submit Review
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <div className="my-4">
            <h1 className="text-[24px] text-[#253D4E] font-semibold">
              Packaging and Delivery
            </h1>
            <Separator className="my-4" />
            <p className="mt-2 text-base text-justify">
              Our products are securely packaged to ensure they reach you in
              perfect condition. Delivery times may vary based on your location.
              We use eco-friendly materials whenever possible and ensure that
              your product arrives safely and on time.
            </p>
          </div>
          <div className="my-4">
            <h1 className="text-[24px] text-[#253D4E] font-semibold">
              Suggested Use
            </h1>
            <Separator className="my-4" />
            <p className="mt-2 text-base text-justify">
              For best results, follow the usage instructions on the packaging.
              Our products are designed for daily use, and consistent
              application is key to achieving the best outcomes.
            </p>
          </div>

          <div className="my-4">
            <h1 className="text-[24px] text-[#253D4E] font-semibold">
              Other Ingredients
            </h1>
            <Separator className="my-4" />
            <p className="mt-2 text-base text-justify">
              All ingredients are sourced for their high quality and efficacy.
              We strive for transparency and all our products are free from
              harmful chemicals and additives.
            </p>
          </div>
          <div className="my-4">
            <h1 className="text-[24px] text-[#253D4E] font-semibold">
              Warnings
            </h1>
            <Separator className="my-4" />
            <p className="mt-2 text-base text-justify">
              Keep out of reach of children. Consult a healthcare professional
              before use if you are pregnant or have any medical conditions.
              Discontinue use if any adverse reactions occur.
            </p>
          </div>

          <div className="my-4">
            <h1 className="text-[24px] text-[#253D4E] font-semibold">
              Customer Care and Support
            </h1>
            <Separator className="my-4" />
            <p className="mt-2 text-base text-justify">
              Our dedicated customer service team is here to assist you. Whether
              you have questions about your order, our products, or need
              assistance with returns, we&apos;re here to help. Contact us
              through email, phone, or our website.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Products products={popularProducts} heading="Related Products" />
      </div>
    </>
  );
};

export default Page;
