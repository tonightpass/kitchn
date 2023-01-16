import { ToastPlacement } from "../hooks/useToasts";

const getTranslateByPlacement = (
  placement: ToastPlacement
): {
  enter: string;
  leave: string;
} => {
  const translateInByPlacement: Record<ToastPlacement, string> = {
    topLeft: "translate(-60px, -60px)",
    topRight: "translate(60px, -60px)",
    bottomLeft: "translate(-60px, 60px)",
    bottomRight: "translate(60px, 60px)",
  };
  const translateOutByPlacement: Record<ToastPlacement, string> = {
    topLeft: "translate(-50px, 15px) scale(0.85)",
    topRight: "translate(50px, 15px) scale(0.85)",
    bottomLeft: "translate(-50px, -15px) scale(0.85)",
    bottomRight: "translate(50px, -15px) scale(0.85)",
  };
  return {
    enter: translateInByPlacement[placement],
    leave: translateOutByPlacement[placement],
  };
};

export default getTranslateByPlacement;
