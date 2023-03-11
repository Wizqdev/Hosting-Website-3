$(document).ready(function () {
    $(".map-wrap").mapael({
      map: {
        name: "world_countries",
        zoom: {
          enabled: false,
          mousewheel: false,
          touch: false,
        },
        defaultArea: {
          attrs: {
            fill: "#171925",
            stroke: "#212433",
          },
          attrsHover: {
            fill: "#D90200",
          },
        },
      },
      plots: {
        tx: {
          latitude: 32.779167,
          longitude: -96.808891,
          tooltip: { content: "Dallas, TX, US" },
          attrs: {
            fill: "#D90200",
          },
        },
        ffm: {
          latitude: 50.1109221,
          longitude: 8.6821267,
          tooltip: { content: "Frankfurt, DE" },
          attrs: {
            fill: "#027CD0",
          },
        },
      },
    });
  });