import { Skeleton, useTheme } from "kitchn";
import dynamic from "next/dynamic";
import React from "react";
import DynamicLiveServer from "./dynamic-live-server";

const DynamicLiveClient = dynamic(() => import("./dynamic-live-client"), {
  ssr: false,
  loading: () => <Skeleton width="100%" height={100} />,
});

export type PlaygroundProps = {
  title?: React.ReactNode | string;
  desc?: React.ReactNode | string;
  code: string;
  scope?: {
    [key: string]: unknown;
  };
};

const defaultProps = {
  desc: "",
  code: "",
  scope: {},
};

const Playground: React.FC<PlaygroundProps> = React.memo(
  ({ code: inputCode, scope = {} }: PlaygroundProps & typeof defaultProps) => {
    const { theme } = useTheme();
    const code = inputCode.trim();
    
    const [isClient, setIsClient] = React.useState(false);
    const [isLoaded, setIsLoaded] = React.useState(false);
    
    React.useEffect(() => {
      setIsClient(true);
      
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 300);
      
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="playground">
        <div className={`server-container ${isLoaded ? 'hidden' : ''}`}>
          <DynamicLiveServer code={code} scope={scope} />
        </div>
        
        {isClient && (
          <div className={`client-container ${!isLoaded ? 'loading' : ''}`}>
            <DynamicLiveClient code={code} scope={scope} />
          </div>
        )}
        
        <style jsx>{`
          .playground {
            margin-top: 20px;
            width: 100%;
            border-radius: 8px;
            border: 1px solid ${theme.colors.layout.dark};
            overflow: hidden;
            position: relative;
          }
          
          .server-container, .client-container {
            width: 100%;
            transition: opacity 0.3s ease;
          }
          
          .loading {
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
          }
          
          .hidden {
            display: none;
          }
        `}</style>
      </div>
    );
  },
);

Playground.defaultProps = defaultProps;
Playground.displayName = "Playground";
export default Playground;
