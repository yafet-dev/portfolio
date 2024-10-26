import { EXPERIENCES } from "@/app/constants";
import React from "react";

const Experience = () => {
  return (
    <section className="pt-20" id="work">
      <h2 className="text-center text-4xl font-semibold tracking-tighter">
        Work Experience
      </h2>
      <div className="space-y-8 p-10">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="rounded-xl border border-stone-5030 bg-stone-50/5 p-4"
          >
            <h3 className="text-2xl font-semibold text-purple">
              {experience.title}
            </h3>
            <p className="text-sm text-stone-300 font-thin">
              {experience.company}
            </p>
            <p className="text-sm text-stone-300">{experience.duration}</p>
            <p className="mt-2 text-base">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
