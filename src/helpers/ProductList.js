// Importing Product Images
import xx99MarkTwo from '../assets/headphones/xx99-mark-two.jpg'
import xx99MarkOne from '../assets/headphones/xx99-mark-one.jpg'
import xx59 from '../assets/headphones/xx59.jpg'
import zx9 from '../assets/speakers/zx9.jpg'
import zx7 from '../assets/speakers/zx7.jpg'
import yx1 from '../assets/earphones/yx1-earphones.jpg'

// Making a list of products
const ProductList = [
    {
        name: "XX99 MARK II HEADPHONES",
        urlName: "xx99-mark-2",
        image: xx99MarkTwo,
        price: 2999,
        isNew: true,
        category: "headphones",
        desc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    },
    {
        name: "XX99 MARK I HEADPHONES",
        urlName: "xx99-mark-1",
        image: xx99MarkOne,
        price: 1750,
        isNew: false,
        category: "headphones",
        desc: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },
    {
        name: "XX59 HEADPHONES",
        urlName: "xx59",
        image: xx59,
        price: 899,
        isNew: false,
        category: "headphones",
        desc: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is an ideal companion at home or on the move.",
    },
    {
        name: "ZX9 SPEAKERS",
        urlName: "zx9",
        image: zx9,
        price: 4500,
        isNew: true,
        category: "speakers",
        desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    },
    {
        name: "ZX7 SPEAKERS",
        urlName: "zx7",
        image: zx7,
        price: 3500,
        isNew: false,
        category: "speakers",
        desc: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    },
    {
        name: "YX1 EARPHONES",
        urlName: "yx1",
        image: yx1,
        price: 599,
        isNew: true,
        category: "earphones",
        desc: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    },
]

export default ProductList;