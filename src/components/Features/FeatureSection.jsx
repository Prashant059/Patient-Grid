import React, { useEffect } from 'react';
import Feature1 from '../../assets/images/feature-1.svg';
import Feature2 from '../../assets/images/feature-2.svg';
import Feature3 from '../../assets/images/feature-3.svg';
import Collab1 from '../../assets/images/collaboration.png';
import Curve1 from '../../assets/images/cta-curve-1.svg';
import Curve2 from '../../assets/images/cta-curve-2.svg';
import Doctor from '../../assets/images/doctor.png';

const FeaturesSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.feature-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-left');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));
  }, []);
  return (
    <>
      {/* Features Section */}
      <section className="max-w-[1100px] mx-auto px-5 mt-5 sm:mt-10 md:mt-36 lg:mt-[350px] xl:mt-[450px] 2xl:mt-[550px]">
        <div className="flex flex-col gap-8 md:gap-0">
          <div className="feature-item flex flex-col md:flex-row gap-0 md:gap-10 items-center">
            <img
              src={Feature1}
              alt=""
              className="shadow-inner-[inset_-30px_30px_30px_0px_#2828280D] -ml-10 w-[80%] md:w-auto basis-1/2"
            />
            <div className="text-center md:text-left basis-1/2">
              <h3 className="text-xl md:text-3xl font-medium">
                Bring new business in by getting more online reviews.
              </h3>
              <p className="text-subdued text-opacity-70 mt-4 text-lg md:text-xl">
                94% Use review to choose new doctor.
              </p>
            </div>
          </div>
          <div className="feature-item flex gap-0 items-center flex-col md:flex-row-reverse">
            <img
              src={Feature2}
              alt=""
              className="shadow-inner-[inset_-30px_30px_30px_0px_#2828280D] -ml-10 md:-ml-0 w-[80%] md:w-auto basis-[56%]"
            />
            <div className="text-center md:text-left basis-[44%]">
              <h3 className="text-xl md:text-3xl font-medium">
                Save time with collaborative tools and automations.
              </h3>
              <p className="text-subdued text-opacity-70 mt-4 text-lg md:text-xl">
                15+ Staff hours saved per week.
              </p>
            </div>
          </div>
          <div className="feature-item flex flex-col md:flex-row gap-0 md:gap-10 items-center">
            <img
              src={Feature3}
              alt=""
              className="shadow-inner-[inset_-30px_30px_30px_0px_#2828280D] -ml-10 w-[80%] md:w-auto basis-1/2"
            />
            <div className="text-center md:text-left basis-1/2">
              <h3 className="text-xl md:text-3xl font-medium">
                Improve patient experience engaging the way they want.
              </h3>
              <p className="text-subdued text-opacity-70 mt-4 text-lg md:text-xl">
                90% People prefer texts to phone calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="max-w-[1607px] w-[80%] mx-auto px-8 py-12 lg:py-24 mt-10 bg-[#DDE9FF] rounded-[30px]">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-5">
          <div className="w-full lg:w-1/2">
            <img
              src={Collab1}
              alt=""
              className="w-[80%] lg:w-full mx-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-xl lg:text-4xl font-medium lg:leading-[50px]">
              Seamless collaboration for healthcare teams
            </h3>
            <p className="text-subdued text-opacity-70 mt-4 text-base md:text-lg">
              With shared inboxes, any team member can resolve the team's pending tasks. Individual staff member don't get overwhelmed and patients are always taken care of.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1607px] w-[80%] mx-auto px-5 py-10 mt-20 bg-[#D9DEEF] rounded-[30px] relative overflow-hidden">
        {/* Curves */}
        <img
          src={Curve1}
          alt=""
          className="absolute top-0 left-0 w-[10%] xl:w-auto"
        />
        <img
          src={Curve2}
          alt=""
          className="absolute bottom-0 right-0 w-[10%] xl:w-auto"
        />
        <div className="flex items-center gap-5">
          <div className="w-full lg:w-[30%] hidden lg:block">
            <img
              src={Doctor}
              alt=""
              className="w-[300px] absolute bottom-0 left-0 xl:left-[5%]"
            />
          </div>
          <div className="lg:w-[70%] text-center">
            <h3 className="text-xl md:text-4xl font-medium md:leading-[50px] w-[80%] mx-auto lg:mx-0">
              We work on a month-to-month basis, try for free with no commitments
            </h3>
            <p className="text-subdued text-opacity-70 mt-4 text-base md:text-lg w-[80%] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <div className="w-[80%] mx-auto lg:mx-0 mt-4">
              <button className="bg-[#4482C2] hover:bg-[#4482C2]/80 transition-colors text-white rounded-[30px] h-[50px] px-5">
                14 Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
