// Generado automáticamente desde Jupyter
// Requiere que ECharts esté cargado en la página
(function (global) {
  const option = {
  "title": {
    "text": "Top 10 provincias por población (Censo 2022)",
    "left": "center"
  },
  "tooltip": {
    "trigger": "item",
    "valueFormatter": function (value) { return value.toLocaleString(); }
  },
  "legend": {
    "type": "scroll",
    "orient": "vertical",
    "right": 10,
    "top": 40,
    "bottom": 20
  },
  "series": [
    {
      "name": "Población",
      "type": "pie",
      "radius": [
        "35%",
        "65%"
      ],
      "center": [
        "40%",
        "55%"
      ],
      "avoidLabelOverlap": true,
      "itemStyle": {
        "borderRadius": 6,
        "borderColor": "#fff",
        "borderWidth": 2
      },
      "label": {
        "show": true,
        "formatter": "{b}: {d}%"
      },
      "emphasis": {
        "label": {
          "show": true,
          "fontSize": 16,
          "fontWeight": "bold"
        }
      },
      "data": [
        {
          "name": "Guayas",
          "value": 4315814
        },
        {
          "name": "Pichincha",
          "value": 3165153
        },
        {
          "name": "Manabí",
          "value": 1634194
        },
        {
          "name": "Los Ríos",
          "value": 977751
        },
        {
          "name": "Azuay",
          "value": 909394
        },
        {
          "name": "El Oro",
          "value": 762243
        },
        {
          "name": "Tungurahua",
          "value": 590400
        },
        {
          "name": "Esmeraldas",
          "value": 553619
        },
        {
          "name": "Chimborazo",
          "value": 524004
        },
        {
          "name": "Santo Domingo de los Tsáchilas",
          "value": 518026
        }
      ]
    }
  ]
};

  function renderPieDatos1(domId) {
    const el = typeof domId === 'string' ? document.getElementById(domId) : domId;
    if (!el) {
      console.error('Contenedor no encontrado:', domId);
      return;
    }
    const chart = echarts.init(el, null, { renderer: 'canvas' });
    chart.setOption(option);
    // Hacer responsive
    window.addEventListener('resize', () => chart.resize());
    return chart;
  }

  // Exponer en el ámbito global
  global.renderPieDatos1 = renderPieDatos1;
})(window);
