import React from 'react';
import Image from 'next/image';
import { IoIosArrowUp } from 'react-icons/io';
import Link from 'next/link';
export default function Navbar() {
  return (
    <div className="sticky top-0 left-0 bg-white/90 z-10">
      <div className="w-full h-auto  mt-0 p-3 flex items-center justify-between  shadow-(--nav-shadow)">
        <div className="logo w-auto h-auto ml-4 p-1">
          <Image src="./img/mpp-logo.svg" width={170} height={80} alt="logo" />
        </div>
        <div className="nav-items w-auto h-auto p-1  ">
          <ul className="w-full h-auto flex justify-between items-start space-x-4 text-base text-(--text-color) ">
            <li className="relative flex justify-between items-center group  cursor-pointer  ">
              {' '}
              <span className="group-hover:text-(--them-color)">Services</span>
              <IoIosArrowUp className="group-hover:rotate-180 group-hover:text-(--them-color) p-0 m-0" />{' '}
              <div className="services-list w-[450px] h-auto bg-white/90 z-10 border border-(--border-color) text-(--primary-color) rounded-lg  shadow-(--nav-shadow) absolute flex  transition-all opacity-0  group-hover:opacity-100  -top-96 p-4 left-0 group-hover:top-9 delay-250 ">
                <div className="w-1/2 h-auto flex-col items-start justify-between space-y-2  ">
                  <span className="w-full text-lg font-bold">Writing</span>
                  <ul className="w-full flex-col justify-between items-start text-sm font-normal">
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Assignment_Writing">
                        Assignment Writing
                      </Link>{' '}
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Term_paper_writing">
                        Term paper writing
                      </Link>
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Coursework_writing">
                        {' '}
                        Coursework writing
                      </Link>
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Case_study_writing">
                        Case study writing
                      </Link>
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Personal_statement_writing">
                        {' '}
                        Personal statement writing
                      </Link>
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Dissertation_writing">
                        {' '}
                        Dissertation writing
                      </Link>
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Thesis_writing">
                        Thesis writing
                      </Link>
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Research_paper_writing">
                        {' '}
                        Research paper writing
                      </Link>
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Speech_writing">
                        {' '}
                        Speech writing
                      </Link>
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Report_writing">
                        {' '}
                        Report writing
                      </Link>
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Essay_writing"> Essay writing</Link>
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Philosophy_paper_writing">
                        {' '}
                        Philosophy paper writing
                      </Link>
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Nursing_paper_writing">
                        {' '}
                        Nursing paper writing
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 h-auto flex-col items-start justify-center space-y-2 ">
                  <span className="w-full text-lg font-bold">More Service</span>
                  <ul className="w-full flex-col justify-between items-start text-sm font-normal">
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Edit_my_paper">Edit my paper</Link>
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Homework_help">Homework help</Link>
                    </li>

                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/College_paper_writing">
                        College paper writing
                      </Link>
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Cheap_paper_writing">
                        Cheap paper writing
                      </Link>
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Pay_for_paper">Pay for paper</Link>
                    </li>
                    <li className="w-full p-1 hover:text-(--them-color)">
                      <Link href="/Services/Do_My_Project">Do My Project</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="hover:text-(--them-color) cursor-pointer">
              <Link href="/How_it_Works">How it Works</Link>
            </li>
            <li className="hover:text-(--them-color) cursor-pointer">
              <Link href="/Reviews">Reviews</Link>
            </li>

            <li className="hover:text-(--them-color) cursor-pointer">
              <Link href="/Our_Writers">Our Writers</Link>
            </li>
            <li className="hover:text-(--them-color) cursor-pointer">
              <Link href="/Pricing">Pricing</Link>
            </li>
            <li className="hover:text-(--them-color) cursor-pointer">
              <Link href="/FaQs">FaQs</Link>
            </li>
          </ul>
        </div>
        <div className="profile w-auto h-auto flex flex-row-reverse justify-between items-center space-x-4 ">
          <span className="group relative p-1.5">
            <Image
              width={25}
              height={25}
              alt="profile"
              src="./img/userIcon.svg"
              className=" cursor-pointer "
            />
            <div className="login-register w-36 auto border bg-white border-(--border-color) rounded-lg  shadow-(--nav-shadow) absolute flex  opacity-0 -top-40 transition-all group-hover:opacity-100  group-hover:top-16 right-0 duration-250  ease-in-out">
              <ul className="w-full h-auto    flex-column justify-center items-start text-(--primary-color) text-base font-normal">
                <Link href="/Login">
                  <li className="w-full h-1/2 p-3 border-b border-(--border-color)  hover:bg-(--border-color)/70 cursor-pointer">
                    Login
                  </li>
                </Link>
                <Link href="/Register">
                  <li className="w-full h-1/2 p-3 hover:bg-(--border-color)/70 cursor-pointer">
                    Register
                  </li>
                </Link>
              </ul>
            </div>
          </span>
          <button className="w-auto h-auto p-2 m-2 text-(--text-color) border border-(--text-color) rounded-lg hover:text-white hover:bg-(--them-color) hover:border-(--them-color) delay-200">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
