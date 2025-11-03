import { address, image, img } from "motion/react-client";

export const cities = [
  'Bihar',
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Surat'
];


export const hotelDatas = [
    {
        id: 1,
        image: '/hotel1.jpg',
        name: 'Grand Palace Hotel',
        address: '123 Royal Street, Mumbai',
        price: '$299',
        ContactNumber: '+91 9199032431'
    },
    {
        id: 2,
        image: 'https://picsum.photos/300/200?random=2',
        name: 'Ocean View Resort',
        address: '45 Beach Road, Goa',
        price: '$199',
        ContactNumber: '+91 9876543210'
    },
    {
        id: 3,
        image: 'https://picsum.photos/300/200?random=3',
        name: 'Mountain Retreat',
        address: '78 Hilltop Lane, Manali',
        price: '$249',
        ContactNumber: '+91 9123456789'
    },
    {
        id: 4,
        image: 'https://picsum.photos/300/200?random=4',
        name: 'City Lights Hotel',
        address: '56 Downtown Ave, Bangalore',
        price: '$179',
        ContactNumber: '+91 9988776655'
    },
    {
        id: 5,
        image: 'https://picsum.photos/300/200?random=5',
        name: 'Serenity Suites',
        address: '12 Lakeside Drive, Udaipur',
        price: '$299',
        ContactNumber: '+91 9871234567'
    },
    {
        id: 6,
        image: 'https://picsum.photos/300/200?random=6',
        name: 'Royal Orchid Inn',
        address: '34 Garden Street, Jaipur',
        price: '$189',
        ContactNumber: '+91 9123987654'
    }
];


export const roomsDatas = [
    {
        id: 1,
        hotelId: 1,
        roomType: 'Deluxe Suite',
        description: 'Spacious suite with king-sized bed, ocean view, and complimentary breakfast.',
        pricePerNight: '$150',
        amenities: ['WiFi', 'Air Conditioning', 'Mini Bar', 'Room Service'],
        img: '/room1.jpg'
    },
    {
        id: 2,
        hotelId: 1,
        roomType: 'Standard Room',
        description: 'Cozy room with queen-sized bed and city view, perfect for couples or solo travelers.',
        pricePerNight: '$100',
        amenities: ['WiFi', 'Air Conditioning', 'Television'],
        img: '/room2.avif'
    },
    {
        id: 3,
        hotelId: 2,
        roomType: 'Executive Suite',
        description: 'Luxurious suite with king bed, office space, and premium amenities for business travelers.',
        pricePerNight: '$250',
        amenities: ['WiFi', 'Air Conditioning', 'Mini Bar', 'Room Service', 'Workspace'],
        img: '/room3.jpg'
    },
    {
        id: 4,
        hotelId: 2,
        roomType: 'Family Room',
        description: 'Spacious room with two queen beds and a balcony, ideal for families.',
        pricePerNight: '$180',
        amenities: ['WiFi', 'Air Conditioning', 'Television', 'Room Service'],
        img: '/room4.avif'
    },
    {
        id: 5,
        hotelId: 3,
        roomType: 'Presidential Suite',
        description: 'Top-tier suite with living area, private terrace, and luxury amenities for a premium experience.',
        pricePerNight: '$400',
        amenities: ['WiFi', 'Air Conditioning', 'Mini Bar', 'Room Service', 'Jacuzzi', 'Private Terrace'],
        img: '/room5.jpeg'
    }
];

