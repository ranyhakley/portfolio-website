"use client";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import { useRef } from "react";

export const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    return (
        <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 w-[min(100%,38rem)]">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-lg font-bold uppercase tracking-widest text-neutral-50 lg:sr-only">
                    Contact
                </h2>
            </div>
            <p className="text-neutral-400 pt-4 text-md">
                Contact me directly at <span> </span>
                <a href="mailto:ranyhakleyh@gmail.com">
                    <span className="underline textColorFade inline relative">ranyhakleyh@gmail.com</span>
                </a>
                <span> </span>or via the form below.
            </p>
            <form
                ref={formRef}
                className="mt-10 flex flex-col dark:text-black"
                action={async (formData) => {
                    const { error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }
                    toast.success("Email sent successfully!");

                    if (formRef.current) {
                        formRef.current.reset();
                    }
                }}
            >
                <input
                    type="email"
                    name="senderEmail"
                    className="h-14 rounded-lg border border-white px-4 text-black outline-none"
                    placeholder="Your email"
                    required maxLength={100} />
                <textarea
                    name="message"
                    className="h-52 my-3 rounded-lg border border-white px-4 pt-2 text-black outline-none"
                    placeholder="Your message"
                    required maxLength={1000} />
                <button
                    type="submit"
                    className="mt-4 h-[2.5rem] w-[5rem] bg-neutral-400/10 text-neutral-300 hover:bg-white hover:text-black rounded-full outline-none 
                            transition-all items-center font-bold focus:scale-110 hover:scale-110 active:scale-105 active:bg-neutral-300 ">
                    Send
                </button>
            </form>
        </section>
    )
}
