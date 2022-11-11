import "./header.css";
import  headerimage  from "../../images/hindi_sahitya.jpeg";

export default function Header() {
  return (
    <div className="header">
      {/* <div className="headerTitles">
        <span className="headerTitleSm">Hindi</span>
        <span className="headerTitleLg">Sahitya</span>
      </div> */}
      <img
        className="headerImg"
        src={headerimage}
        alt=""
      />
    </div>
  );
}