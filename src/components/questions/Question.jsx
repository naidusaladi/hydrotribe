import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export function DefaultAccordion() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    <div className="py-10" id="questions"></div>
    <div className=" px-6 md:px-32" >
    <h1 className="text-5xl text-center py-10 text-green-500">Most Asked Questions <span className="font-serif font-bold text-5xl">.</span></h1>
    <Accordion open={open === 1} >
        <AccordionHeader onClick={() => handleOpen(1)}>What is vertical farming?</AccordionHeader>
        <AccordionBody>
        Vertical farming is a method of growing crops in vertically stacked layers, often in controlled environments such as buildings or warehouses. This approach typically utilizes soilless farming techniques like hydroponics, aeroponics, or aquaponics, along with artificial lighting and climate control to optimize plant growth.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        How Vertical farming it is going show the impact in the future?
        </AccordionHeader>
        <AccordionBody>
        Vertical farming is poised to revolutionize agriculture by maximizing space and resources, promoting sustainability through efficient water use, reducing environmental impact, enhancing urban food production, ensuring climate resilience, improving food security with year-round fresh produce, driving technological advancements, and supporting diverse crop cultivation, thereby creating a more resilient, sustainable, and equitable food system for the future.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        What is hydro technology?
        </AccordionHeader>
        <AccordionBody>

        Hydro technology, short for hydroponic technology, refers to a method of growing plants without soil, where nutrient-rich water solutions deliver essential minerals directly to the plant roots. This technology is used in hydroponic systems, which can range from simple setups like nutrient film technique (NFT) to more complex systems such as deep water culture (DWC) or aeroponics. Hydro technology enables precise control over growing conditions, including water, nutrients, pH levels, and oxygen, resulting in efficient plant growth, reduced water usage, and the ability to grow crops in diverse environments, including urban areas and arid regions.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        How aeroponics works? 
        </AccordionHeader>
        <AccordionBody>
          
Aeroponics is a hydroponic growing method where plants are cultivated with their roots suspended in the air and nourished through a misting system that delivers water and nutrients directly. This innovative approach optimizes plant growth by ensuring efficient nutrient absorption, oxygenation, and disease prevention, leading to accelerated growth rates, healthier plants, and reduced water usage compared to traditional soil-based farming. Aeroponic systems are typically housed in controlled environments, making them ideal for sustainable agriculture in urban settings or regions with limited resources.
        </AccordionBody>
      </Accordion>
    </div>

    </>
  );
}