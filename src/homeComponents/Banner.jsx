import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div
        className='px-8 py-4 md:px-16 py-8'
        style={{
            backgroundImage: `url('/background.avif')`,
            backgroundRepeat: "no-repeat",  
            backgroundSize: "cover",       
            backgroundPosition: "center",  
            borderRadius: "16px",
        }}
        >
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div>
                    <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold w-full max-w-2xl leading-10 md:leading-12 lg:leading-18
                    '>Unleash the Future of Gadgets</h1>
                    <p className="w-full max-w-xl py-4 md:py-6 text-lg text-gray-500 font-normal">Discover the latest and most innovative gadgets that will transform your lifestyle. Stay ahead with cutting-edge technology and shop the best deals today!</p>
                    <div>
                        <button className='btn btn-primary rounded-full mr-4' >Buy Now!</button>
                        <Link href={"/all-gadget"} className='btn btn-soft btn-primary rounded-full'>All Product</Link>
                    </div>
                </div>
                <div>
                    <Image
                        src="/headphoneBanner.png"
                        alt="Background"
                        width={500}  
                        height={400}
                    />

                </div>
            </div>
        </div>
    );
};

export default Banner;


