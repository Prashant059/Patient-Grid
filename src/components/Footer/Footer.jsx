import React from 'react';
import WhiteLogo from '../../assets/images/white-logo.svg';
import Facebook from '../../assets/images/facebook.svg';
import Twitter from '../../assets/images/twitter.svg';
import Instagram from '../../assets/images/instagram.svg';
import Whatsapp from '../../assets/images/whatsapp.svg';
import Email from '../../assets/images/email.svg';
import Send from '../../assets/images/send.svg';
import Telephone from '../../assets/images/tel.svg';

const Footer = () => {
  return (
    <footer className="mt-32 bg-primary text-white pt-20 pb-5">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between flex-wrap gap-10 items-start px-5 max-w-[1607px] w-[80%] mx-auto">
          <div className="flex items-start flex-col gap-5 max-w-[300px]">
            <img src={WhiteLogo} alt="logo" className="w-auto h-[46.92px]" />
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <ul className="flex gap-4">
              <li><a href="#"><img src={Facebook} alt="facebook" className="w-auto h-[25px]" /></a></li>
              <li><a href="#"><img src={Twitter} alt="twitter" className="w-auto h-[25px]" /></a></li>
              <li><a href="#"><img src={Instagram} alt="instagram" className="w-auto h-[25px]" /></a></li>
            </ul>
          </div>
          <ul className="flex flex-col gap-5 font-medium text-base md:text-lg">
            <li className="flex gap-2 items-center">
              <div className="flex gap-2 items-center">
                <span><img src={Telephone} alt="phone" className="w-auto h-5" /></span>
                <span>+91-8853923455</span>
              </div>
            </li>
            <li className="flex gap-2 items-center">
              <div className="flex gap-2 items-center">
                <span><img src={Whatsapp} alt="whatsapp" className="w-auto h-5" /></span>
                <span>+91-4567895478</span>
              </div>
            </li>
            <li className="flex gap-2 items-center">
              <div className="flex gap-2 items-center">
                <span><img src={Email} alt="email" className="w-auto h-5" /></span>
                <span>patientgrid@gmail.com</span>
              </div>
            </li>
          </ul>
          <div>
            <p className="mb-5">Subscribe Newsletter</p>
            <div className="bg-white text-subdued relative rounded-l-[30px] rounded-r-lg flex items-center px-4 py-2 h-[50px] max-w-[200px] md:max-w-full">
              <input type="text" placeholder="Email" className="bg-transparent pr-6 outline-none w-full" />
              <img src={Send} alt="send" className="w-auto h-[50px] absolute -right-5" />
            </div>
          </div>
        </div>
        <div className="border-t border-b border-white py-3">
          <ul className="flex gap-12 font-medium items-center justify-center text-sm md:text-base">
            <li><a href="#" className="hover:underline underline-offset-2 transition-colors">Products</a></li>
            <li><a href="#" className="hover:underline underline-offset-2 transition-colors">Plans</a></li>
            <li><a href="#" className="hover:underline underline-offset-2 transition-colors">More</a></li>
          </ul>
        </div>
        <div>
          <p className="text-center text-sm md:text-base">&copy; Copyright 2023.All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
