import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  FiSun,
  FiCloud,
  FiCloudDrizzle,
  FiCloudRain,
  FiCloudSnow,
  FiWind,
} from 'react-icons/fi';

export default function TopNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [weatherTemp, setWeatherTemp] = useState('');
  const [cityName, setCityName] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  const fetchWeatherData = async () => {
    const apiKey = 'a79f3262b156e10a151167232a010abd';
    const city = 'Lagos';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();
        const temperature = data.main.temp;
        const city = data.name;
        setWeatherTemp(temperature);
        setCityName(city);
      } else {
        throw new Error('Failed to fetch weather data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeatherData();

    // Get the current date and update the state
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(currentDate);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='flex flex-col relative '>
        <nav
          className={`fixed top-0 left-0 z-10 flex w-full items-center justify-between px-4 lg:pt-2 pb-4 lg:px-10 bg-[#387373] ${
            isScrolled
              ? 'bg-transparent bg-opacity-100 backdrop-blur-md'
              : 'bg-primary-100'
          }`}
        >
          {/* Navigation */}
          <div className='flex items-center'>
            <div className='flex items-center text-white mr-4'>
              {weatherTemp && (
                <>
                  {weatherTemp > 25 ? (
                    <FiSun className='text-xl mr-2 text-yellow-300' />
                  ) : weatherTemp > 15 ? (
                    <FiCloud className='text-xl mr-2 text-white' />
                  ) : weatherTemp > 5 ? (
                    <FiCloudDrizzle className='text-xl mr-2 text-gray-300' />
                  ) : weatherTemp > 0 ? (
                    <FiCloudRain className='text-xl mr-2 text-gray-500' />
                  ) : (
                    <FiCloudSnow className='text-xl mr-2 tex-white' />
                  )}
                  <div className='text-white flex gap-2 cursor-default'>
                    <span
                      className={`text-base ${isScrolled ? 'text[#93BFB7]' : ''}`}
                    >
                      {weatherTemp}°C
                    </span>
                    <div
                      className={`font-bold ${isScrolled ? 'text[#93BFB7]' : ''}`}
                    >
                      {cityName}
                    </div>
                    <div
                      className={`text-xs pt-1.5 ${
                        isScrolled ? 'text[#93BFB7]' : ''
                      }`}
                    >
                      {currentDate}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className='hidden md:flex gap-2'>
            {/* Sign In Button */}
            <div className='flex items-center'>
              <Link to='/signin' className='lg:inline-block'>
                <button
                  className={`text-center bg-transparent py-2 text-sm font-medium hover:text-[#A9D9D0] hover:border-2 hover:border-white rounded-lg transition-all  px-2 ${
                    isScrolled ? 'text-[#93BFB7]' : 'text-white'
                  }`}
                >
                  Sign in
                </button>
              </Link>
            </div>

            {/* Sign Up Button */}
            <div>
              <Link to='/signup' className='lg:inline-block'>
                <button
                  className={`hidden lg:inline-block text-center border-2 border-white bg-transparent py-2 text-sm font-medium hover:text-[#A9D9D0] rounded-lg transition-all  shadow-xs px-2 shadow-[#A9D9D0] hover:border-[#2D3E40] ${
                    isScrolled ? 'text-[#93BFB7]' : 'text-white'
                  }`}
                >
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
