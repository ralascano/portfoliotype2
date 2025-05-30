import { useState, useRef, useEffect } from "react";
import { Collapse, CardBody, Card, CardTitle, CardSubtitle } from "reactstrap";

type TimelineCardProps = {
  title: string;
  subtitle: string;
  image: string;
  date: string;
  details: string[];
};

const CardCollapse = ({
  title,
  subtitle,
  image,
  date,
  details = [],
}: TimelineCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [needsScroll, setNeedsScroll] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      setNeedsScroll(contentRef.current.scrollHeight > 150);
    }
  }, [isOpen]);

  return (
    <Card
      onClick={toggle}
      style={
        isOpen && details.length > 0
          ? {
              width: "18rem",
              height: "28rem",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }
          : {
              width: "18rem",
              height: "20rem",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }
      }
    >
      <img
        alt="Imagen"
        style={{ height: "20vh", objectFit: "cover", width: "100%" }}
        src={image}
      />
      <CardBody>
        <CardTitle tag="h6" className="font-bold">
          {title}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted text-sm">
          {subtitle}
          <div>{date}</div>
        </CardSubtitle>

        <Collapse isOpen={isOpen}>
          <div
            ref={contentRef}
            style={{
              maxHeight: "170px",
              overflowY: !needsScroll ? "auto" : "visible",
              paddingRight: !needsScroll ? "0.5rem" : 0,
              transition: "max-height 0.3s ease",
            }}
          >
            <ul className="list-disc ml-6 text-sm">
              {details.length > 0 &&
                details.map((li, index) => <li key={index}>{li}</li>)}
            </ul>
          </div>
        </Collapse>
      </CardBody>
    </Card>
  );
};

export default CardCollapse;
