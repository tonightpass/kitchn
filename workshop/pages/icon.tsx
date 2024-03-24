import { Icon } from "@tonightpass/kitchn";
import { NextPage } from "next";
import { RiGithubFill } from "react-icons/ri";

const IconPage: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <p>{"basic"}</p>
      <Icon icon={RiGithubFill} />
      <p>{"color"}</p>
      <Icon icon={RiGithubFill} color={"light"} />
      <p>{"color - accent"}</p>
      <Icon icon={RiGithubFill} accent={"primary"} />
      <p>{"color - custom"}</p>
      <Icon icon={RiGithubFill} color={"#ff0000"} />
      <p>{"size"}</p>
      <div>
        <Icon icon={RiGithubFill} size={"tiny"} />
        <Icon icon={RiGithubFill} size={"small"} />
        <Icon icon={RiGithubFill} size={"normal"} />
        <Icon icon={RiGithubFill} size={"medium"} />
        <Icon icon={RiGithubFill} size={"large"} />
        <Icon icon={RiGithubFill} size={"title"} />
        <Icon icon={RiGithubFill} size={"extraTitle"} />
      </div>
      <p>{"size - custom"}</p>
      <div>
        <Icon icon={RiGithubFill} size={30} />
        <Icon icon={RiGithubFill} size={"60px"} />
      </div>
      <p>{"align"}</p>
      <div>
        <Icon icon={RiGithubFill} align={"top"} />
        <Icon icon={RiGithubFill} align={"middle"} />
        <Icon icon={RiGithubFill} align={"bottom"} />
      </div>
    </div>
  );
};

export default IconPage;
