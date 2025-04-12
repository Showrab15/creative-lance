import { TypeAnimation } from 'react-type-animation';
import { BackgroundBeamsWithCollision } from "../ui/BackgroundBeamsWithCollision";
import './Banner.css';

const Banner = () => {
    return (
        <BackgroundBeamsWithCollision className="r elative z-1 0">
            <div className="text-white mt- 20 md:-mt-40 relative z-20 md:pb-0 pb-10">
                <p className="text-base text-center font-medium py-6 text-[#dbfa9b]">Creative Lance is your creative partner</p>

                <h1 className="text-2xl lg:text-6xl font-bold overflow-y-auto text-center justify-center">
                    Introducing Creative Lance, <br className="md:block " /> your ultimate partner in <br />
                    <TypeAnimation
                        sequence={[
                            ' UI/UX',
                            1000,
                            '  Web Development',
                            1000,
                            '  Brand Building',
                            1000,
                            '  Video Editing',
                            1000,
                            '  Social Media Mastery',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1em', display: 'inline-block', marginBottom: '10px' }}
                    />
                </h1>

                <svg
                    className="flex justify-center rotate-180 mx-auto text-center m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="307"
                    height="34"
                    viewBox="0 0 307 34"
                    fill="none"
                >
                    <path
                        d="M303.498 26.5334C183.108 -17.8935 53.0014 10.644 2.99697 30.4662"
                        stroke="#dbfa9b"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>

                <p className="lg:text-xl text-base text-center font-medium text-[#dbfa9b] py-6 px-4">
                    Views and sales with our expert team, <br className="md:hidden block" /> who have worked with the <br className="md:block hidden" />
                    biggest creators. Relax, we handle it all for you.
                </p>

                <div className="flex flex-col justify-center gap-4 items-center">
                    <input type="text" value="Get Started" />
                    <input type="text" value="View Pricing" />
                </div>
            </div>
        </BackgroundBeamsWithCollision>
    );
};

export default Banner;
