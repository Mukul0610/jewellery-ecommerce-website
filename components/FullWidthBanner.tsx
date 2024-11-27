import Image from 'next/image'
import image from '@/public/images/banner/banner2222.jpg'

export default function FullWidthBanner() {
  return (
    <section className="relative h-96">
      <Image
        src={image}
        alt="Special Offer"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Special Collection</h2>
          <p className="text-xl mb-6">Get up to 50% off on our exclusive jewelry collection</p>
          <button className="bg-gold text-white px-8 py-3 rounded-full text-lg hover:bg-yellow-600 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}

