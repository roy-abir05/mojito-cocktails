import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {

    useGSAP(() => {
        const heroSplit = SplitText.create('.title', {type: "chars"});
        const paragraphSplit = SplitText.create('.subtitle', {type: "lines"});

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 50,
            duration: 0.9,
            ease: 'expo.out',
            stagger: 0.06
        })

        gsap.from(paragraphSplit.lines, {
            yPercent: 50,
            opacity: 0,
            duration: 0.9,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
        .to('.left-leaf', {
            y: -300,
        }, 0)
        .to('.right-leaf', {
            y: 300
        }, 0)
    }, [])

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />

        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-2">
              <p>Cool. Crisp. Classic</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail we serve is a reflection of our obsession with
                detail — from the first muddle to the final garnish. That care
                is what turns a simple drink into something truly memorable.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
