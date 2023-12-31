"use client";

import React, { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/serverActions/sendEmail";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sagargound0410@gmail.com">
          sagargound0410@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            alert(error);
          }
          alert("Email sent successfully!");
          if (formRef.current) {
            formRef.current.reset();
          }
        }}
      >
        <input
          name="senderEmail"
          type="email"
          required
          autoComplete="off"
          maxLength={50}
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white/10 dark:bg-opacity-70 dark:focus:bg-opacity-50 dark:focus:bg-white/20 dark:outline-none transition-all"
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack dark:bg-white/10 dark:bg-opacity-70 dark:focus:bg-opacity-50 dark:focus:bg-white/20 dark:outline-none transition-all p-4"
          required
          maxLength={500}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
