import "./Hero.css";
import cicle from "../../../../assets/shape-1.png";
import hero from "../../../../assets/hero.png";

export const Hero = () => {
    return (
        <section id="hero-section">
            <div className="hero-section container">
                <div className="hero-section__content">
                    <div className="hero-section__left">
                        <div className="hero-img-wrapper">
                            <img
                                className="cicle"
                                src={cicle}
                                alt="Circle shape"
                            />
                            <img className="chair" src={hero} alt="Chair" />
                        </div>
                    </div>

                    <div className="hero-section__right">
                        <span className="uppercase-text-2 text-top">
                            QUALITY DESIGN FOR ALL
                        </span>
                        <h1 className="heading-1">
                            Bring back the classic look by using Whiter. Easy
                            home delivery!
                        </h1>
                        <p className="text-lg">
                            Rediscover the timeless allure of the past as Whiter
                            effortlessly revives the beloved vintage aesthetic.
                        </p>
                        <div className="orange-line"></div>
                        <a className="uppercase-text-2" href="">
                            EXPLORE OUR PRODUCTS
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
