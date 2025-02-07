  //src\components\Faq.tsx
  'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How we serve food?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
  },
  {
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
  },
  {
    question: "How is our food quality?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
  },
  {
    question: "What will be delivered? And When?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
  },
  {
    question: "How do we give home delivery?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
  }
]

export default function FAQSection() {
  return (
    <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto my-[120px]">
      <div className="text-center mb-12">
        <h2 className="text-[48px] leading-[56px] md:text-5xl font-bold text-[#333333] mb-4 font-helvetica">
          Questions Looks Here
        </h2>
        <p className="text-[#4F4F4F] max-w-3xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value={`item-${index}`} className="bg-[#FAF7F2] rounded-lg border-none">
              <AccordionTrigger className="px-6 py-4 text-lg font-bold text-[#333333] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-[#4F4F4F]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  )
}


 