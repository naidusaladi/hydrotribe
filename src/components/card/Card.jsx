import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export function CardWithLink(props) {
    let service=props.service;
  return (
    <Card className="mt-6 w-96 ">
      <CardBody>
        <img src={service.icon} width={150}/>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {service.title}
        </Typography>
        <Typography>
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              fillRule={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}