// Importing Product Images
// Headphones
import xx99MarkTwo from '../assets/headphones/XX99-Mark-Two/xx99-mark-two.jpg'
import xx99MarkOne from '../assets/headphones/XX99-Mark-One/xx99-mark-one.jpg'
import xx59 from '../assets/headphones/XX59/xx59.jpg'
// Speakers
import zx9 from '../assets/speakers/ZX9/zx9.jpg'
import zx7 from '../assets/speakers/ZX7/zx7.jpg'
// Earphones
import yx1 from '../assets/earphones/YX1/yx1.jpg'

// Importing Product Gallery Images
// Headphone 1 Gallery
import xx99MarkTwoGalleryImg1 from '../assets/headphones/XX99-Mark-Two/gallery/img-1.jpg'
import xx99MarkTwoGalleryImg2 from '../assets/headphones/XX99-Mark-Two/gallery/img-2.jpg'
import xx99MarkTwoGalleryImg3 from '../assets/headphones/XX99-Mark-Two/gallery/img-3.jpg'
// Headphone 2 Gallery
import xx99MarkOneGalleryImg1 from '../assets/headphones/XX99-Mark-One/gallery/img-1.jpg'
import xx99MarkOneGalleryImg2 from '../assets/headphones/XX99-Mark-One/gallery/img-2.jpg'
import xx99MarkOneGalleryImg3 from '../assets/headphones/XX99-Mark-One/gallery/img-3.jpg'
// Headphone 3 Gallery
import xx59GalleryImg1 from '../assets/headphones/XX59/gallery/img-1.jpg'
import xx59GalleryImg2 from '../assets/headphones/XX59/gallery/img-2.jpg'
import xx59GalleryImg3 from '../assets/headphones/XX59/gallery/img-3.jpg'
// Speaker 1 Gallery
import zx9GalleryImg1 from '../assets/speakers/ZX9/gallery/img-1.jpg'
import zx9GalleryImg2 from '../assets/speakers/ZX9/gallery/img-2.jpg'
import zx9GalleryImg3 from '../assets/speakers/ZX9/gallery/img-3.jpg'
// Speaker 2 Gallery
import zx7GalleryImg1 from '../assets/speakers/ZX7/gallery/img-1.jpg'
import zx7GalleryImg2 from '../assets/speakers/ZX7/gallery/img-2.jpg'
import zx7GalleryImg3 from '../assets/speakers/ZX7/gallery/img-3.jpg'
// Earphone 1 Gallery
import yx1GalleryImg1 from '../assets/earphones/YX1/gallery/img-1.jpg'
import yx1GalleryImg2 from '../assets/earphones/YX1/gallery/img-2.jpg'
import yx1GalleryImg3 from '../assets/earphones/YX1/gallery/img-3.jpg'

// Making a list of products
const ProductList = [
    // Product 1
    // Headphones 1
    {
        id: 1,
        name: "XX99 MARK II HEADPHONES",
        shortName: "XX99 MARK II",
        urlName: "xx99-mark-2",
        image: xx99MarkTwo,
        galleryImages: [xx99MarkTwoGalleryImg1, xx99MarkTwoGalleryImg2, xx99MarkTwoGalleryImg3],
        price: 2999,
        isNew: true,
        category: "headphones",
        featuresPara1: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
        featuresPara2: "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
        includedItems: [
            {
                name: "Headphone Unit",
                quantity: 1,
            },
            {
                name: "Replacement Earcups",
                quantity: 2,
            },
            {
                name: "User Manual",
                quantity: 1,
            },
            {
                name: "3.5mm 5m Audio Cable",
                quantity: 1,
            },
            {
                name: "Travel Bag",
                quantity: 1,
            },
        ],
        desc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    },
    // Product 2
    // Headphones 2
    {
        id: 2,
        name: "XX99 MARK I HEADPHONES",
        shortName: "XX99 MARK I",
        urlName: "xx99-mark-1",
        image: xx99MarkOne,
        galleryImages: [xx99MarkOneGalleryImg1, xx99MarkOneGalleryImg2, xx99MarkOneGalleryImg3],
        price: 1750,
        isNew: false,
        category: "headphones",
        featuresPara1: "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
        featuresPara2: "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
        includedItems: [
            {
                name: "Headphone Unit",
                quantity: 1,
            },
            {
                name: "Replacement Earcups",
                quantity: 2,
            },
            {
                name: "User Manual",
                quantity: 1,
            },
            {
                name: "3.5mm 5m Audio Cable",
                quantity: 1,
            },
        ],
        desc: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },
    // Product 3
    // Headphones 3
    {
        id: 3,
        name: "XX59 HEADPHONES",
        shortName: "XX59",
        urlName: "xx59",
        image: xx59,
        galleryImages: [xx59GalleryImg1, xx59GalleryImg2, xx59GalleryImg3],
        price: 899,
        isNew: false,
        category: "headphones",
        featuresPara1: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
        featuresPara2: "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
        includedItems: [
            {
                name: "Headphone Unit",
                quantity: 1,
            },
            {
                name: "Replacement Earcups",
                quantity: 2,
            },
            {
                name: "User Manual",
                quantity: 1,
            },
            {
                name: "3.5mm 5m Audio Cable",
                quantity: 1,
            },
        ],
        desc: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is an ideal companion at home or on the move.",
    },
    // Product 4
    // Speakers 1
    {
        id: 4,
        name: "ZX9 SPEAKERS",
        shortName: "ZX9",
        urlName: "zx9",
        image: zx9,
        galleryImages: [zx9GalleryImg1, zx9GalleryImg2, zx9GalleryImg3],
        price: 4500,
        isNew: true,
        category: "speakers",
        featuresPara1: "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
        featuresPara2: "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
        includedItems: [
            {
                name: "Speaker Unit",
                quantity: 2,
            },
            {
                name: "Speaker Cloth Panel",
                quantity: 2,
            },
            {
                name: "User Manual",
                quantity: 1,
            },
            {
                name: "3.5mm 10m Audio Cable",
                quantity: 1,
            },
            {
                name: "10m Optical Cable",
                quantity: 1,
            },
        ],
        desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    },
    // Product 5
    // Speakers 2
    {
        id: 5,
        name: "ZX7 SPEAKERS",
        shortName: "ZX7",
        urlName: "zx7",
        image: zx7,
        galleryImages: [zx7GalleryImg1, zx7GalleryImg2, zx7GalleryImg3],
        price: 3500,
        isNew: false,
        category: "speakers",
        featuresPara1: "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
        featuresPara2: "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
        includedItems: [
            {
                name: "Speaker Unit",
                quantity: 2,
            },
            {
                name: "Speaker Cloth Panel",
                quantity: 2,
            },
            {
                name: "User Manual",
                quantity: 1,
            },
            {
                name: "3.5mm 7.5m Audio Cable",
                quantity: 1,
            },
            {
                name: "7.5m Optical Cable",
                quantity: 1,
            },
        ],
        desc: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    },
    // Product 6
    // Earphones 1
    {
        id: 6,
        name: "YX1 EARPHONES",
        shortName: "YX1",
        urlName: "yx1",
        image: yx1,
        galleryImages: [yx1GalleryImg1, yx1GalleryImg2, yx1GalleryImg3],
        price: 599,
        isNew: true,
        category: "earphones",
        featuresPara1: "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
        featuresPara2: "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
        includedItems: [
            {
                name: "Earphone Unit",
                quantity: 2,
            },
            {
                name: "Multi-Size Earplugs",
                quantity: 6,
            },
            {
                name: "User Manual",
                quantity: 1,
            },
            {
                name: "USB-C Charging Cable",
                quantity: 1,
            },
            {
                name: "Travel Pouch",
                quantity: 1,
            },
        ],
        desc: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    },
]

export default ProductList;