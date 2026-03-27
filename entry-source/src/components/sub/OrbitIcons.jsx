import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiDocker,
  SiTensorflow,
} from "react-icons/si";

const icons = [
  { icon: <SiJavascript className="text-yellow-300" />, delay: "0s" },
  { icon: <SiPython className="text-blue-300" />, delay: "0.1s" },
  { icon: <SiDocker className="text-blue-400" />, delay: "0.2s" },
  { icon: <SiReact className="text-cyan-400" />, delay: "0.3s" },
  { icon: <SiTensorflow className="text-orange-500" />, delay: "0.4s" },
  { icon: <SiTailwindcss className="text-cyan-300" />, delay: "0.5s" },
];

const OrbitIcons = () => {
  return (
    <div className="relative w-48 h-48">
      <div className="absolute w-full h-full animate-spin-slow">
        {icons.map((item, index) => {
          const angle = (360 / icons.length) * index;
          const transform = `rotate(${angle}deg) translate(7rem) rotate(-${angle}deg)`;
          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ transform }}
            >
              <div className="text-5xl">{item.icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrbitIcons;