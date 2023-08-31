import Image from "next/image";

export default function Picture(props) {
  return (
    <div className="container">
      <Image
        className="image" /* picture.module.css is also linked using .image class*/
        src={props.src}
        alt={props.alt}
        style={{
          /* example of nextjs inline styles 
          don't use them often!*/
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "4vh",
          paddingBottom: "2vh",
          width: "80%",
          height: "auto",
        }}
      />
      <div>{props.caption}</div>
    </div>
  );
}
