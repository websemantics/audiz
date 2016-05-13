/**
 *            __             _______
 *           |▒▒|       __  |   _   |          _ _
 *  __       |▒▒|  __  |▒▒| |  |_|  |         | (_)
 * |▒▒|  __  |▒▒| |▒▒| |▒▒| |       |_   _  __| |_ ____
 * |▒▒| |▒▒| |▒▒| |▒▒| |▒▒| |   _   | | | |/ _` | |_  /
 * |▒▒| |▒▒| |▒▒| |▒▒| |▒▒| |  | |  | |_| | (_| | |/ /
 * |▒▒| |▒▒| |▒▒| |▒▒| |▒▒| |__| |__|\__,_|\__,_|_/___|
 *                                         Demo App, ...
 *
 *           Make your audio files shareable on your
 *           favorite social networks.
 *
 * This project was released under MIT license.
 *
 * @link      http://websemantics.ca
 * @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>
 * @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 */

;(function (root, factory) {
  factory(root.jQuery, root.Audiz)
}(this, function ($, audiz) {
  var root = this || global

  /*
    Setup process

  */

  init = function () {



      var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      var audioElement = document.getElementById('audioElement');
      var audioSrc = audioCtx.createMediaElementSource(audioElement);
      var analyser = audioCtx.createAnalyser();

      // Bind our analyser to the media element source.
      audioSrc.connect(analyser);
      audioSrc.connect(audioCtx.destination);

      //var frequencyData = new Uint8Array(analyser.frequencyBinCount);
      var frequencyData = new Uint8Array(200);

      var svgHeight = '300';
      var svgWidth = '1200';
      var barPadding = '1';

      function createSvg(parent, height, width) {
        return d3.select(parent).append('svg').attr('height', height).attr('width', width);
      }

      var svg = createSvg('body', svgHeight, svgWidth);

      // Create our initial D3 chart.
      svg.selectAll('rect')
         .data(frequencyData)
         .enter()
         .append('rect')
         .attr('x', function (d, i) {
            return i * (svgWidth / frequencyData.length);
         })
         .attr('width', svgWidth / frequencyData.length - barPadding);

      // Continuously loop and update chart with frequency data.
      function renderChart() {
         requestAnimationFrame(renderChart);

         // Copy frequency data to frequencyData array.
         analyser.getByteFrequencyData(frequencyData);

         // Update d3 chart with new data.
         svg.selectAll('rect')
            .data(frequencyData)
            .attr('y', function(d) {
               return svgHeight - d;
            })
            .attr('height', function(d) {
               return d;
            })
            .attr('fill', function(d) {
               return 'rgb(0, 0, ' + d + ')';
            });
      }

      // Run the loop
      renderChart();


  }

  /*
    Log a message to the console

      Parameters:
      - message (string): print out if in debug mode

  */

  function log (message) {
    if (debug) {
      console.log(message)
    }
  }

  if (typeof $ === 'undefined') {
    console.error('Please install the latest jQuery!')
  } else {
    $(function () {init()})
  }
}))
