import { Unity, useUnityContext } from "react-unity-webgl";

function Flappy() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/flappyOnReact10.loader.js",
    dataUrl: "Build/flappyOnReact10.data",
    frameworkUrl: "Build/flappyOnReact10.framework.js",
    codeUrl: "Build/flappyOnReact10.wasm",
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
