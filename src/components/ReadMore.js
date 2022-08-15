import { useState } from "react";

export default function ReadMore({ children }) {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="">
        {isReadMore ? text.slice(0, 600) : text}
        <span className="cursor-pointer text-cyan-400 ml-2"
        onClick={toggleReadMore}>
          {isReadMore ? "Read more" : "Show less"}
        </span>
      </p>
    );
  };
