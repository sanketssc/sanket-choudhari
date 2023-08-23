"use client";
import { handleFormSubmit } from "@/actions";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  return (
    <div className="flex justify-center items-center w-full h-full">
      <form
        id="form"
        className="flex flex-col items-center w-full h-full px-10 py-10 gap-5"
        action={async (formData) => {
          const res = await handleFormSubmit(formData);
          //   console.log(res);
          if (res === "success") {
            document.getElementById("form").reset();
          }
          setStatus(res);
          setTimeout(() => {
            setStatus("");
          }, 5000);
        }}
      >
        <div className="text-4xl">Get in touch</div>
        <div className="text-lg text-center">
          If you like my work or are interesting in collaborating,
          <br /> Please fill the form, I will get back to you ASAP!
        </div>
        <div className="flex items-center gap-8 text-xl justify-between w-full">
          <span>
            Name<span className="text-red-900">*</span>
          </span>
          <input
            className="bg-black w-96 border text-lg border-neutral-700 focus:outline-none p-3 rounded-md"
            type="text"
            name="name"
            required="true"
            placeholder="Your Name"
          />
        </div>
        <div className="flex items-center gap-8 text-xl justify-between w-full">
          <span>
            Email<span className="text-red-900">*</span>
          </span>
          <input
            className="bg-black w-96 border text-lg border-neutral-700 focus:outline-none p-3 rounded-md"
            type="email"
            name="email"
            required="true"
            placeholder="Your Mail"
          />
        </div>
        <div className="flex items-center gap-8 text-xl justify-between w-full ">
          <span>
            Message<span className="text-red-900">*</span>
          </span>
          <textarea
            className="resize-none text-lg bg-black w-96 border border-neutral-700 focus:outline-none p-3 rounded-md"
            type="text"
            name="message"
            required="true"
            rows={5}
            placeholder="Message for me"
          />
        </div>
        <button className="text-xl bg-neutral-900/40 hover:bg-neutral-900 px-10 py-2 rounded-full border border-neutral-600">
          submit
        </button>
        {status === "success" && <p>Form submitted successfully</p>}
        {status === "error" && (
          <p>
            There was an error submitting your form. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
}
