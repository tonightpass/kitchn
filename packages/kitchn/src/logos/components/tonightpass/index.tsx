import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  fill?: string;
};

export type TonightPassMarkProps = Props;

export const TonightPassMark: React.FC<TonightPassMarkProps> = ({
  fill = "#503CF5",
  ...props
}: TonightPassMarkProps) => (
  <svg
    viewBox={"0 0 53 64"}
    xmlns={"http://www.w3.org/2000/svg"}
    aria-label={"Tonight Pass logomark"}
    role={"img"}
    {...props}
  >
    <path
      d={
        "M23.1215 8.16153L17.0118 0.33045C16.6456 -0.138981 15.9148 -0.100571 15.5881 0.396696C-1.70707 26.7237 -7.70131 41.2135 13.794 59.3159C13.2373 52.8384 14.3316 46.3424 16.9124 40.4356C16.9062 40.4352 16.9001 40.4348 16.8939 40.4344C20.0657 32.9482 25.7936 23.5889 34.7281 11.5864C35.1204 11.0592 34.8121 10.295 34.1576 10.2032L24.2558 8.81493C23.8062 8.7519 23.3992 8.51745 23.1215 8.16153Z"
      }
      fill={fill}
    />
    <path
      d={
        "M19.3895 40.5835C16.4615 46.8866 15.3573 53.9508 16.3088 60.9186C29.084 64.8613 37.2904 64.4074 51.1453 62.9291C51.7469 62.8649 52.1016 62.2267 51.8333 61.6893L47.7416 53.4931C47.5089 53.0268 47.5007 52.4815 47.7195 52.0087L52.4764 41.7277C52.7524 41.1313 52.2804 40.4599 51.6198 40.505C39.3691 41.3399 31.5698 41.2864 19.3895 40.5835Z"
      }
      fill={fill}
    />
  </svg>
);

export type TonightPassWordmarkProps = Props;

export const TonightPassWordmark: React.FC<TonightPassWordmarkProps> = ({
  fill = "#503CF5",
  ...props
}: TonightPassWordmarkProps) => (
  <svg
    viewBox={"0 0 300 64"}
    xmlns={"http://www.w3.org/2000/svg"}
    aria-label={"Tonight Pass logotype"}
    role={"img"}
    {...props}
  >
    <path
      d={
        "M23.1215 8.16153L17.0118 0.33045C16.6456 -0.138981 15.9148 -0.100571 15.5881 0.396696C-1.70707 26.7237 -7.70131 41.2135 13.794 59.3159C13.2373 52.8384 14.3316 46.3424 16.9124 40.4356C16.9062 40.4352 16.9001 40.4348 16.8939 40.4344C20.0657 32.9482 25.7936 23.5889 34.7281 11.5864C35.1204 11.0592 34.8121 10.295 34.1576 10.2032L24.2558 8.81493C23.8062 8.7519 23.3992 8.51745 23.1215 8.16153Z"
      }
      fill={fill}
    />
    <path
      d={
        "M19.3895 40.5835C16.4615 46.8866 15.3573 53.9508 16.3088 60.9186C29.084 64.8613 37.2904 64.4074 51.1453 62.9291C51.7469 62.8649 52.1016 62.2267 51.8333 61.6893L47.7416 53.4931C47.5089 53.0268 47.5007 52.4815 47.7195 52.0087L52.4764 41.7277C52.7524 41.1313 52.2804 40.4599 51.6198 40.505C39.3691 41.3399 31.5698 41.2864 19.3895 40.5835Z"
      }
      fill={fill}
    />
    <path
      d={
        "M83.2027 45.5V23.188H75.054V18.3375H96.6287V23.188H88.5188V45.5H83.2027ZM105.963 45.9656C103.997 45.9656 102.238 45.5388 100.686 44.6851C99.1596 43.8056 97.9566 42.6027 97.0771 41.0764C96.2234 39.5501 95.7966 37.791 95.7966 35.7991C95.7966 33.8072 96.2234 32.0481 97.0771 30.5218C97.9308 28.9956 99.1208 27.8056 100.647 26.9519C102.173 26.0724 103.919 25.6326 105.885 25.6326C107.877 25.6326 109.636 26.0724 111.163 26.9519C112.689 27.8056 113.879 28.9956 114.733 30.5218C115.586 32.0481 116.013 33.8072 116.013 35.7991C116.013 37.791 115.586 39.5501 114.733 41.0764C113.879 42.6027 112.689 43.8056 111.163 44.6851C109.662 45.5388 107.929 45.9656 105.963 45.9656ZM105.963 41.2316C106.92 41.2316 107.761 40.9988 108.485 40.5332C109.21 40.0675 109.766 39.4337 110.154 38.6318C110.568 37.804 110.775 36.8598 110.775 35.7991C110.775 34.7385 110.568 33.8072 110.154 33.0053C109.74 32.1775 109.158 31.5307 108.408 31.0651C107.683 30.5995 106.843 30.3666 105.885 30.3666C104.954 30.3666 104.113 30.5995 103.363 31.0651C102.639 31.5307 102.07 32.1775 101.656 33.0053C101.242 33.8072 101.035 34.7385 101.035 35.7991C101.035 36.8598 101.242 37.804 101.656 38.6318C102.07 39.4337 102.652 40.0675 103.402 40.5332C104.152 40.9988 105.006 41.2316 105.963 41.2316ZM119.391 45.5V26.0982H124.203L124.513 29.6682V45.5H119.391ZM132.235 45.5V35.5663H137.357V45.5H132.235ZM132.235 35.5663C132.235 34.247 132.08 33.2252 131.77 32.5008C131.485 31.7765 131.071 31.2591 130.528 30.9487C129.985 30.6124 129.351 30.4442 128.626 30.4442C127.307 30.4184 126.285 30.8193 125.561 31.6471C124.863 32.475 124.513 33.7037 124.513 35.3335H122.806C122.806 33.264 123.103 31.5178 123.698 30.095C124.319 28.6463 125.173 27.5469 126.259 26.7967C127.372 26.0206 128.665 25.6326 130.14 25.6326C131.666 25.6326 132.972 25.943 134.059 26.5639C135.145 27.1847 135.973 28.1548 136.542 29.4742C137.112 30.7676 137.383 32.4491 137.357 34.5186V35.5663H132.235ZM141.756 45.5V26.0982H146.878V45.5H141.756ZM144.317 22.9552C143.541 22.9552 142.855 22.6706 142.26 22.1015C141.665 21.5065 141.368 20.808 141.368 20.0061C141.368 19.2042 141.665 18.5186 142.26 17.9495C142.855 17.3545 143.541 17.057 144.317 17.057C145.119 17.057 145.804 17.3545 146.374 17.9495C146.969 18.5186 147.266 19.2042 147.266 20.0061C147.266 20.808 146.969 21.5065 146.374 22.1015C145.804 22.6706 145.119 22.9552 144.317 22.9552ZM160.332 53.7651C158.857 53.7651 157.551 53.6617 156.413 53.4547C155.275 53.2478 154.317 52.9761 153.541 52.6398C152.765 52.3035 152.131 51.9673 151.64 51.631L153.658 47.5178C154.02 47.7247 154.499 47.9576 155.093 48.2162C155.688 48.5008 156.4 48.7336 157.228 48.9147C158.055 49.1217 159.013 49.2251 160.099 49.2251C161.134 49.2251 162.039 49.0182 162.815 48.6043C163.617 48.2162 164.238 47.5954 164.678 46.7417C165.144 45.9139 165.376 44.8533 165.376 43.5598V26.0982H170.498V43.4046C170.498 45.5776 170.085 47.4402 169.257 48.9923C168.429 50.5703 167.252 51.7603 165.726 52.5622C164.225 53.3642 162.427 53.7651 160.332 53.7651ZM159.323 44.9568C157.538 44.9568 155.986 44.5687 154.667 43.7926C153.373 43.0166 152.364 41.9301 151.64 40.5332C150.916 39.1362 150.553 37.4806 150.553 35.5663C150.553 33.5485 150.916 31.8024 151.64 30.3278C152.364 28.8274 153.373 27.6763 154.667 26.8743C155.986 26.0465 157.538 25.6326 159.323 25.6326C160.875 25.6326 162.22 26.0465 163.359 26.8743C164.497 27.6763 165.376 28.8274 165.997 30.3278C166.618 31.8282 166.929 33.6132 166.929 35.6827C166.929 37.5453 166.618 39.175 165.997 40.572C165.376 41.9689 164.497 43.0554 163.359 43.8314C162.22 44.5817 160.875 44.9568 159.323 44.9568ZM160.798 40.6496C161.677 40.6496 162.44 40.4297 163.087 39.9899C163.76 39.5243 164.277 38.9034 164.639 38.1273C165.001 37.3254 165.182 36.42 165.182 35.4111C165.182 34.3763 164.988 33.4709 164.6 32.6948C164.238 31.9188 163.721 31.3109 163.048 30.8711C162.401 30.4313 161.638 30.2114 160.759 30.2114C159.853 30.2114 159.051 30.4313 158.353 30.8711C157.655 31.3109 157.111 31.9188 156.723 32.6948C156.335 33.4709 156.128 34.3763 156.102 35.4111C156.128 36.42 156.335 37.3254 156.723 38.1273C157.111 38.9034 157.655 39.5243 158.353 39.9899C159.077 40.4297 159.892 40.6496 160.798 40.6496ZM174.945 45.5V18.3375H180.067V45.5H174.945ZM187.828 45.5V35.5663H192.95V45.5H187.828ZM187.828 35.5663C187.828 34.247 187.672 33.2252 187.362 32.5008C187.052 31.7765 186.625 31.2591 186.081 30.9487C185.538 30.6124 184.904 30.4442 184.18 30.4442C182.861 30.4184 181.839 30.8193 181.115 31.6471C180.416 32.475 180.067 33.7037 180.067 35.3335H178.36C178.36 33.264 178.657 31.5178 179.252 30.095C179.873 28.6463 180.727 27.5469 181.813 26.7967C182.925 26.0206 184.219 25.6326 185.693 25.6326C187.246 25.6326 188.552 25.943 189.613 26.5639C190.699 27.1847 191.527 28.1548 192.096 29.4742C192.665 30.7676 192.95 32.4491 192.95 34.5186V35.5663H187.828ZM205.03 45.9656C202.883 45.9656 201.253 45.4353 200.14 44.3747C199.054 43.3141 198.511 41.8007 198.511 39.8347V20.0449H203.633V38.7094C203.633 39.5372 203.814 40.171 204.176 40.6108C204.538 41.0247 205.068 41.2316 205.767 41.2316C206.026 41.2316 206.31 41.1799 206.621 41.0764C206.931 40.9471 207.254 40.766 207.591 40.5332L209.376 44.3747C208.755 44.8403 208.056 45.2154 207.28 45.5C206.53 45.8104 205.78 45.9656 205.03 45.9656ZM195.368 30.4442V26.0982H208.483V30.4442H195.368ZM222.632 45.5V18.3375H232.721C234.635 18.3375 236.33 18.7256 237.804 19.5017C239.279 20.2519 240.43 21.3125 241.258 22.6835C242.085 24.0287 242.499 25.5938 242.499 27.3788C242.499 29.1379 242.098 30.7029 241.296 32.074C240.494 33.445 239.395 34.5315 237.998 35.3335C236.601 36.1096 234.984 36.4976 233.148 36.4976H227.948V45.5H222.632ZM227.948 31.6083H233.031C234.221 31.6083 235.191 31.2203 235.941 30.4442C236.718 29.6423 237.106 28.6205 237.106 27.3788C237.106 26.1371 236.679 25.1282 235.825 24.3521C234.997 23.576 233.924 23.188 232.604 23.188H227.948V31.6083ZM256.615 45.5L256.46 41.5808V35.6827C256.46 34.5186 256.33 33.5227 256.072 32.6948C255.839 31.867 255.451 31.2332 254.908 30.7935C254.39 30.3278 253.679 30.095 252.773 30.095C251.946 30.095 251.195 30.2761 250.523 30.6383C249.85 31.0004 249.281 31.5566 248.815 32.3068L244.314 30.7547C244.676 29.9269 245.207 29.1249 245.905 28.3489C246.604 27.5469 247.509 26.9002 248.621 26.4087C249.76 25.8913 251.144 25.6326 252.773 25.6326C254.739 25.6326 256.369 26.0077 257.663 26.7579C258.982 27.5081 259.952 28.5687 260.573 29.9398C261.22 31.285 261.53 32.8889 261.504 34.7514L261.388 45.5H256.615ZM251.182 45.9656C248.854 45.9656 247.043 45.4483 245.75 44.4135C244.482 43.3787 243.849 41.9171 243.849 40.0287C243.849 37.9592 244.534 36.407 245.905 35.3723C247.302 34.3117 249.255 33.7813 251.765 33.7813H256.693V37.5841H253.549C251.868 37.5841 250.704 37.791 250.057 38.2049C249.41 38.593 249.087 39.1492 249.087 39.8735C249.087 40.4426 249.346 40.8953 249.863 41.2316C250.381 41.542 251.105 41.6973 252.036 41.6973C252.89 41.6973 253.64 41.5032 254.287 41.1152C254.959 40.7013 255.49 40.1839 255.878 39.5631C256.266 38.9163 256.46 38.2567 256.46 37.5841H257.701C257.701 40.2227 257.197 42.2793 256.188 43.7538C255.205 45.2284 253.537 45.9656 251.182 45.9656ZM272.843 45.9656C271.601 45.9656 270.437 45.7846 269.35 45.4224C268.264 45.0344 267.307 44.4911 266.479 43.7926C265.651 43.0683 265.004 42.1888 264.539 41.154L268.924 39.1362C269.312 39.7571 269.842 40.3003 270.514 40.766C271.187 41.2057 271.963 41.4256 272.843 41.4256C273.696 41.4256 274.356 41.3092 274.822 41.0764C275.287 40.8177 275.52 40.4555 275.52 39.9899C275.52 39.5243 275.326 39.188 274.938 38.981C274.576 38.7482 274.071 38.5542 273.425 38.399L271.64 37.9333C269.777 37.4418 268.303 36.6657 267.216 35.6051C266.156 34.5186 265.625 33.2769 265.625 31.88C265.625 29.8881 266.259 28.3489 267.527 27.2624C268.82 26.1759 270.644 25.6326 272.998 25.6326C274.214 25.6326 275.339 25.8137 276.374 26.1759C277.434 26.538 278.34 27.0425 279.09 27.6892C279.84 28.3359 280.358 29.0861 280.642 29.9398L276.413 31.88C276.232 31.3626 275.792 30.9487 275.093 30.6383C274.395 30.302 273.696 30.1338 272.998 30.1338C272.299 30.1338 271.756 30.289 271.368 30.5995C271.006 30.884 270.825 31.285 270.825 31.8024C270.825 32.1387 271.006 32.4232 271.368 32.656C271.73 32.863 272.248 33.0441 272.92 33.1993L275.443 33.8201C276.71 34.1306 277.719 34.635 278.469 35.3335C279.245 36.0061 279.801 36.7692 280.138 37.6229C280.5 38.4507 280.681 39.2656 280.681 40.0675C280.681 41.2316 280.332 42.2664 279.633 43.1718C278.961 44.0513 278.029 44.7369 276.839 45.2284C275.675 45.7199 274.343 45.9656 272.843 45.9656ZM290.88 45.9656C289.639 45.9656 288.474 45.7846 287.388 45.4224C286.301 45.0344 285.344 44.4911 284.516 43.7926C283.689 43.0683 283.042 42.1888 282.576 41.154L286.961 39.1362C287.349 39.7571 287.879 40.3003 288.552 40.766C289.225 41.2057 290.001 41.4256 290.88 41.4256C291.734 41.4256 292.394 41.3092 292.859 41.0764C293.325 40.8177 293.558 40.4555 293.558 39.9899C293.558 39.5243 293.364 39.188 292.976 38.981C292.613 38.7482 292.109 38.5542 291.462 38.399L289.677 37.9333C287.815 37.4418 286.34 36.6657 285.254 35.6051C284.193 34.5186 283.663 33.2769 283.663 31.88C283.663 29.8881 284.297 28.3489 285.564 27.2624C286.858 26.1759 288.681 25.6326 291.035 25.6326C292.251 25.6326 293.377 25.8137 294.411 26.1759C295.472 26.538 296.377 27.0425 297.128 27.6892C297.878 28.3359 298.395 29.0861 298.68 29.9398L294.45 31.88C294.269 31.3626 293.829 30.9487 293.131 30.6383C292.432 30.302 291.734 30.1338 291.035 30.1338C290.337 30.1338 289.794 30.289 289.406 30.5995C289.044 30.884 288.862 31.285 288.862 31.8024C288.862 32.1387 289.044 32.4232 289.406 32.656C289.768 32.863 290.285 33.0441 290.958 33.1993L293.48 33.8201C294.748 34.1306 295.757 34.635 296.507 35.3335C297.283 36.0061 297.839 36.7692 298.175 37.6229C298.537 38.4507 298.719 39.2656 298.719 40.0675C298.719 41.2316 298.369 42.2664 297.671 43.1718C296.998 44.0513 296.067 44.7369 294.877 45.2284C293.713 45.7199 292.381 45.9656 290.88 45.9656Z"
      }
      fill={fill}
    />
  </svg>
);
