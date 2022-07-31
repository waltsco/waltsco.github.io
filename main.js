require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/core/reactiveUtils",
    "dojo/domReady!"
    ], function (
    Map,
    SceneView,
    reactiveUtils
    ) {
      esriConfig.apiKey = "b27603677da566d508bd89dab7b3168985e4400f3dd987edbd8683e90b739391";
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

    