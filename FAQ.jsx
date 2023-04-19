import React, { useState } from "react";
import { QuestionsData } from "../../../data/data";
import Layout from "../../UI/Layout";
import FaqItem from "../faq/FaqItem";

const FAQ = () => {

    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null)
        }
        setOpen(index)
    }



    return (
        <div className={`md:flex justify-between py-12 `} >
            <div className="mt-12">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">Frequently  asked questions</h1>

                    <p className="max-w-2xl mx-auto mt-4 text-gray-500">
                        FAQs are often used in customer support and are an efficient way to provide basic information to a large number of people.
                    </p>
                </div>
            </div>

            <div className="md:w-[600px] grid col-span-1 gap-y-6 py-8">
                {QuestionsData.map((item, index) => ( 
                    <FaqItem
                        key={index}
                        open={index === open}
                        toggle={() => toggle(index)}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;