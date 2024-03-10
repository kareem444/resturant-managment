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
        name: 'Hunger Station',
        avatar: hungerStationImage
    },
    {
        name: 'Jahez',
        avatar: jahezImage
    },
    {
        name: 'To You',
        avatar: toYouImage
    },
    {
        name: 'Marsool',
        avatar: marsoolImage
    },
    {
        name: 'Mr. Mandob',
        avatar: mrMandobImage
    },
]

export const PAYMENTS_WAY_SRC = [
    {
        name: 'stc pay',
        avatar: stcImage
    },
    {
        name: 'visa',
        avatar: visaImage
    },
    {
        name: 'mada',
        avatar: madaImage
    },
    BRANDS_SRC[0],
    BRANDS_SRC[1],
    BRANDS_SRC[2],
    {
        name: 'cash',
        avatar: cashImage
    },
]