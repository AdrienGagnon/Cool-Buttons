import gsap from 'gsap';

export default function showElement(showElement, ref, delay = 0) {
    showElement
        ? gsap.fromTo(
              ref,
              {
                  height: 0,
              },
              {
                  duration: 0.5,
                  height: 'auto',
                  delay: delay,
                  ease: 'power1.out',
              }
          )
        : gsap.to(ref, {
              height: 0,
              duration: 0.5,
              delay: delay,
              ease: 'power1.out',
          });
}
