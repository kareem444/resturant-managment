import marsoolImage from '../assets/images/marsool.jpg'
import hungerStationImage from '../assets/images/hunger-station.jpg'
import jahezImage from '../assets/images/jahez.webp'
import mrMandobImage from '../assets/images/mr-mandob.png'
import toYouImage from '../assets/images/to-you.webp'
import stcImage from '../assets/images/stc.png'
import visaImage from '../assets/images/visa.jpg'
import cashImage from '../assets/images/cash.png'
import madaImage from '../assets/images/mada.jpg'

export const IMAGE_SRC = {
    logo: '/logo192.png',
}

export const BRANDS_SRC = [
    {
        name: 'hungerStation',
        avatar: hungerStationImage
    },
    {
        name: 'jahez',
        avatar: jahezImage
    },
    {
        name: 'toYou',
        avatar: toYouImage
    },
    {
        name: 'marsool',
        avatar: marsoolImage
    },
    {
        name: 'mrMandob',
        avatar: mrMandobImage
    },
]

export const PAYMENTS_WAY_SRC = [
    {
        name: 'cash',
        avatar: cashImage,
        active: true,
    },
    BRANDS_SRC[0],
    BRANDS_SRC[1],
    BRANDS_SRC[2],
    {
        name: 'mada',
        avatar: madaImage
    },
    {
        name: 'visa',
        avatar: visaImage
    },
    {
        name: 'stcPay',
        avatar: stcImage
    },
]