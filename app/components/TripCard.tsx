import React from 'react'
import { Link, useLocation } from 'react-router'
import { cn, getFirstWord } from '~/lib/utils';
const TripCard = ({id ,name, location, imageUrl, tags, price}: TripCardProps) => {
  const path = useLocation();
  return (

    <Link to={path.pathname === '/' || path.pathname.startsWith('/travel') ? `/travel/${id}` :`/trips/${id}`} className='rounded-xl'>
      {/* // "/" refers to the public facing website remaing was admin */}
      <img src={imageUrl} alt={name} className='rounded-t-xl'/>
      <article className='rounded-b-xl'>
        <h2>{name}</h2>
        <figure className='relative'>
          <figcaption className='ml-5'>{location}</figcaption>
          <img src="/assets/icons/location-mark.svg" alt="location" className='size-4 top-1 absolute' />
        </figure>
      </article>
      <div className='mt-5 w-full pl-[18px] pr-3.5 pb-5'>
        {tags.map((tag, index) => (
          <span className='absolute'>
           

          <h1 key={index} className={cn("text-sm text-center w-[70px] rounded-2xl border-none",index===1 ? 'bg-pink-50! text-pink-500!' : 'bg-success-50! text-success-700! translate-x-25')}>{getFirstWord(tag)}</h1>
       
          <article className="absolute lg:-top-63 md:-top-90 sm:-top-139 sm:text-right lg:left-35 md:left-70 sm:left-135 bg-white p-0.5 rounded-2xl">{price}</article>
          </span>
        ))}
      </div>
    </Link>
  )
}

export default TripCard
