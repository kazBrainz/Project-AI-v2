import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#003] h-fit lg:h-[431px] py-7 lg:py-24">
      <div className="container grid lg:grid-cols-5 gap-[2.62rem]">
        <div className="space-y-[1.69rem]">
          <Image
            src={"/images/white-logo.svg"}
            alt="logo"
            width={69}
            height={83}
          />
          <p className="text-white opacity-65 text-xs lg:text-base max-w-[200px] leading-[1.25rem]">
            Transforming Education Through AI: Empowering Teachers, Inspiring
            Students
          </p>
          <div className="flex items-center gap-7">
            <Link href={"https://x.com/aiforeducatorng"} target="_blank">
              <Image
                src={"/images/socials/logo-twitter.svg"}
                alt="twitter_logo"
                width={15}
                height={15}
              />
            </Link>
            <Link
              href={
                "https://www.facebook.com/people/AI-For-Educators-Nigeria/61562876141774/"
              }
              target="_blank"
            >
              <Image
                src={"/images/socials/logo-facebook.svg"}
                alt="facebook_logo"
                width={16}
                height={18}
              />
            </Link>
            {/* <Image
              src={"/images/socials/logo-instagram.svg"}
              alt="instagram_logo"
              width={16}
              height={18}
            />
            <Image
              src={"/images/socials/logo-linkedin.svg"}
              alt="linkedin_logo"
              width={16}
              height={18}
            /> */}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-white opacity-65">Quick links</h2>
          <ul className="space-y-3">
            <li className="text-white cursor-pointer">
              <Link href={"/about"}>About us</Link>
            </li>
            <li className="text-white cursor-pointer">
              <Link href={"/ai-tools"}>AI Tools</Link>
            </li>
            <li className="text-white cursor-pointer">
              <Link href={"/prompts-database"}>AI Prompts</Link>
            </li>
            <li className="text-white cursor-pointer">
              <Link href={"/events-webinars"}>Events & Webinars</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-white opacity-65">Get involved</h2>
          <ul className="space-y-3">
            <li className="text-white cursor-pointer">Submit AI Prompts</li>
            <li className="text-white cursor-pointer">
              <Link href={"/events_webinars"}>Register for Webinars</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-white opacity-65">Contact Information</h2>
          <ul className="space-y-3">
            <li className="text-white">Email:</li>
            <li className="text-white">info@ai4educatorsng.com</li>
            <li className="text-white">Phone: +234-123-4567</li>
            <li className="text-white leading-[2.5rem]">
              Address: 123 Educational Lane, Abuja, Nigeria
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-white opacity-65">Legal and privacy</h2>
          <ul className="space-y-3">
            <li className="text-white cursor-pointer">Privacy Policy</li>
            <li className="text-white cursor-pointer">Copyright Notice</li>
            <li className="text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
