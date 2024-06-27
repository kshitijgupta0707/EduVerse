//we are using create context API

import { createContext, useContext } from "react";
import { useState, useEffect } from 'react'




export const AnimationContext = createContext();

const AnimationContextProvider = (props) => {




  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('.fadeIn');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');
        } else {
          entry.target.classList.remove('fadeIn');
        }
      });
    });

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elementsToAnimate.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);











  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('.slideFromLeft');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideFromLeft');
        } else {
          entry.target.classList.remove('slideFromLeft');
        }
      });
    });

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elementsToAnimate.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);




  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('.slideFromRight');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideFromRight');
        } else {
          entry.target.classList.remove('slideFromRight');
        }
      });
    });

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elementsToAnimate.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);



  //slide from down
  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('.slideFromDown');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('initial-slide-up')) {
            entry.target.classList.remove('initial-slide-up');
            entry.target.classList.add('slideFromDown');
          }

        } else {
          if (entry.target.classList.contains('slideFromDown')) {
            entry.target.classList.remove('slideFromDown');
            entry.target.classList.add('initial-slide-up');
          }
        }
      });
    }, { rootMargin: '200px 0px' });

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elementsToAnimate.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);



  const contextValue = {};







  return (
    <AnimationContext.Provider value={contextValue}>
      {props.children}
    </AnimationContext.Provider>
  );
};
export default AnimationContextProvider;
export const useAnimationContext = () => useContext(AnimationContext);
