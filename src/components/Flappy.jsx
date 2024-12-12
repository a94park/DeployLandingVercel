import { Unity, useUnityContext } from "react-unity-webgl";

function Flappy() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/flappyOnReact5.loader.js",
    dataUrl: "Build/flappyOnReact5.data",
    frameworkUrl: "Build/flappyOnReact5.framework.js",
    codeUrl: "Build/flappyOnReact5.wasm",
  });

  return (
    <Unity
      unityProvider={unityProvider}
      style={{
        width: 500,
        height: 300,
        pointerEvents: "auto",
        marginBottom: "5%",
        borderRadius: "5px",
      }}
    />
  );
}

export default Flappy;
