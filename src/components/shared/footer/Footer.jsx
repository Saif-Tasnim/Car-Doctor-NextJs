import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg";
import { navbar } from "@/utlis/navbar";
import Link from "next/link";
import facebook from "@/assets/social/facebook (1).png";
import linkedin from "@/assets/social/linkedin (1).png";
import instagram from "@/assets/social/instagram.png";
import twitter from "@/assets/social/twitter.png";

const Footer = () => {
  const allRoute = navbar;
  return (
    <div className="grid grid-cols-12 my-20 mx-10 py-14">
      {/* logo */}
      <div className="col-span-4 mx-5">
        <Image src={logo} alt="logo"></Image>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          incidunt suscipit laudantium dicta voluptatem asperiores inventore
          voluptates adipisci consequatur provident sequi sunt illo culpa
          sapiente, cum molestias harum nemo quam?
        </p>
      </div>

      {/* other route */}
      <div className="col-span-4 flex flex-col text-center pt-10 space-y-3">
        {allRoute.map((ar) => (
          <Link href={ar.path} key={ar.path} className="hover:text-primary">
            {ar.name}
          </Link>
        ))}
      </div>

      {/* social link */}
      <div className="col-span-4 pt-10 mx-auto">
        <h1 className="pb-3 font-semibold"> Connect With Us </h1>
        <hr className="pb-3" />
        <div className="flex gap-8 mt-5">
          <Link href="">
            <Image src={facebook} alt="facebook" height={30} width={30}></Image>
          </Link>
          <Link href="">
            <Image src={linkedin} alt="linkedin" height={30} width={30}></Image>
          </Link>
          <Link href="">
            <Image
              src={instagram}
              alt="instagram"
              height={30}
              width={30}
            ></Image>
          </Link>
          <Link href="">
            <Image src={twitter} alt="twitter" height={30} width={30}></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
