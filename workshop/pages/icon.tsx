import { Icon } from "kitchn";
import { NextPage } from "next";
import { RiGithubFill } from "react-icons/ri";

const iconUrl = "https://kitchn.tonightpass.com/favicon.svg";

const IconPage: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <h2>{"Icon prop"}</h2>
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <h2>{"Src prop"}</h2>
        <p>{"basic"}</p>
        <Icon src={iconUrl} />
        <p>{"size"}</p>
        <div>
          <Icon src={iconUrl} size={"tiny"} />
          <Icon src={iconUrl} size={"small"} />
          <Icon src={iconUrl} size={"normal"} />
          <Icon src={iconUrl} size={"medium"} />
          <Icon src={iconUrl} size={"large"} />
          <Icon src={iconUrl} size={"title"} />
          <Icon src={iconUrl} size={"extraTitle"} />
        </div>
        <p>{"size - custom"}</p>
        <div>
          <Icon src={iconUrl} size={30} />
          <Icon src={iconUrl} size={"60px"} />
        </div>
        <p>{"align"}</p>
        <div>
          <Icon src={iconUrl} align={"top"} />
          <Icon src={iconUrl} align={"middle"} />
          <Icon src={iconUrl} align={"bottom"} />
        </div>
      </div>
    </div>
  );
};

export default IconPage;
