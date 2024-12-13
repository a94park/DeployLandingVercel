import { Unity, useUnityContext } from "react-unity-webgl";

function Flappy() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/flappyOnReact6.loader.js",
    dataUrl: "Build/flappyOnReact6.data",
    frameworkUrl: "Build/flappyOnReact6.framework.js",
    codeUrl: "Build/flappyOnReact6.wasm",
  });

  return (
    <Unity
      unityProvider={unityProvider}
      style={{
        width: "100%",

        height: "auto",
        pointerEvents: "auto",
        marginBottom: "5%",
        borderRadius: "5px",
      }}
    />
  );
}

export default Flappy;
