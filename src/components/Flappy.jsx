import { Unity, useUnityContext } from "react-unity-webgl";

function Flappy() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/flappyOnReact2.loader.js",
    dataUrl: "Build/flappyOnReact2.data.br",
    frameworkUrl: "Build/flappyOnReact2.framework.js.br",
    codeUrl: "Build/flappyOnReact2.wasm.br",
  });

  return (
    <Unity unityProvider={unityProvider} style={{ width: 500, height: 300 }} />
  );
}

export default Flappy;
