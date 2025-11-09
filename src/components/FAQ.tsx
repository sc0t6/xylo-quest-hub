import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Xylo safe to use?",
    answer: "Yes! Xylo is completely safe and regularly scanned by top antivirus software. We prioritize security and privacy for all our users."
  },
  {
    question: "Does Xylo work on all Roblox games?",
    answer: "Xylo is compatible with the vast majority of Roblox games. Our team works around the clock to ensure compatibility and regular updates."
  },
  {
    question: "Is Xylo free?",
    answer: "Yes, Xylo is completely free to download and use. We believe everyone should have access to quality tools."
  },
  {
    question: "How often is Xylo updated?",
    answer: "We release updates regularly to ensure compatibility with the latest Roblox versions and to add new features based on community feedback."
  },
  {
    question: "Will I get banned for using Xylo?",
    answer: "While we implement advanced detection bypasses, we cannot guarantee 100% safety. Use Xylo responsibly and at your own discretion."
  },
  {
    question: "What operating systems does Xylo support?",
    answer: "Xylo currently supports Windows 10 and Windows 11. We're working on expanding support to other platforms in the future."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Xylo
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
