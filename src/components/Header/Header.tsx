import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import Progressbar from "./ProgressBar";

function Header() {
  return (
    <div className="header w-full h-auto flex relative justify-center items-center p-2 gap-4">
      <HeaderLeft />
      <Progressbar />
      <HeaderRight />
    </div>
  );
}
export default Header;
