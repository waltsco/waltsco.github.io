require([
    "esri/config",
    "esri/Map",
    "esri/views/SceneView",
    "esri/core/reactiveUtils",
    "dojo/domReady!"
    ], function (
    esriConfig,
    Map,
    SceneView,
    reactiveUtils
    ) {
      esriConfig.apiKey = "AAPK456234b01b7b49b6b0e42f0514b5fd8aVYeFyi4NZ3qxYdEy0n1cJ-ZqpzpSO0yxyqfSi-DoYYOBdQEYgug5-DEGkf4W-O8x";
      let map = new Map({
        basemap: "satellite"
      });
      
      let view = new SceneView({
        map: map,
        container: "sceneContainer",
        zoom: 1,
        camera: {
          position: [0, 0, 25000000],
          heading: 5,
          tilt: 0.20
        }
      });

      reactiveUtils.when(
        () => view.ready,
        () => {
          rotate();
        },
        {
          once: true
        });

      function rotate() {
        const camera = view.camera.clone();
        camera.position.longitude -= 0.05;
        view.goTo(camera, { animate: false });
        requestAnimationFrame(rotate);
      }

    });

    