import { Unity, useUnityContext } from "react-unity-webgl";

function Flappy() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/flappyweb2.loader.js",
    dataUrl: "Build/flappyweb2.data.",
    frameworkUrl: "Build/flappyweb2.framework.js",
    codeUrl: "Build/flappyweb2.wasm",
  });

  return (
    <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
  );
}

export default Flappy;
