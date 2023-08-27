import { nanoid } from 'nanoid';

export const LINKS = [
  {
    id: nanoid(),
    to: '/',
    link: 'home',
  },
  {
    id: nanoid(),
    to: '/articles',
    link: 'articles',
  },
  {
    id: nanoid(),
    to: '/about',
    link: 'about us',
  },
  {
    id: nanoid(),
    to: '/policy',
    link: 'policy',
  },
  {
    id: nanoid(),
    to: '/terms_and_conditions',
    link: 'terms & conditions',
  },
  {
    id: nanoid(),
    to: '/contact_us',
    link: 'contact us',
  },
];

import One from '../assets/Login/1.svg'
import Two from '../assets/Login/2.svg'
import Three from '../assets/Login/3.svg'

const Blob = [
  {
    src: One,
    style:
      'justify-center bg-[#FEF0F2] border-[#FCB6C0] border-[1px] rounded-2xl pt-[4px] overflow-hidden w-[100px] h-[80px]',
    head: 'Explore Engaging Articles',
    des: 'Discover a wide range of articles written by talented writers on various topics that pique your interest.',
  },
  {
    src: Two,
    style:
      'bg-[#E1F3FF] border-[#B3E2FE] border-[1px] rounded-2xl pt-[4px] overflow-hidden w-[100px] h-[80px]',
    head: 'Express Yourself',
    des: 'Unleash your creativity by writing and sharing your own articles with our vibrant community of readers and writers.',
  },
  {
    src: Three,
    style: 'bg-[#F0F0FE] border-[#C0C0FC] border-[1px] rounded-2xl pt-[4px] overflow-hidden w-[100px] h-[80px]',
    head: 'Edit with Ease',
    des: 'Effortlessly edit and refine your articles using our intuitive editing tools, ensuring your content is polished and engaging.',
  },
]
const Blob2 = [  
  {
    src: Three,
    style: 'bg-[#F9E4F2] border-[#E2B6D8] border-[1px] rounded-2xl pt-[4px] overflow-hidden w-[100px] h-[80px]',
    head: 'Engage and Discuss',
    des: 'Participate in lively discussions by leaving comments on articles, connecting with fellow writers and readers.',
  },
]

export { Blob, Blob2 }

