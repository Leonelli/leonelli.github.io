(function(){
  var canvas = document.getElementById('trace');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var w = canvas.width, h = canvas.height;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var spikes = [];
  function seedSpikes(n){
    spikes = [];
    for (var i=0;i<n;i++){
      spikes.push({
        x: Math.random()*w,
        amp: 40 + Math.random()*140,
        width: 4 + Math.random()*10
      });
    }
  }
  seedSpikes(6);

  function draw(t){
    ctx.clearRect(0,0,w,h);
    var midY = h*0.62;

    ctx.strokeStyle = 'rgba(139,145,152,0.5)';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    for (var x=0; x<=w; x+=4){
      var y = midY + Math.sin((x+t*0.02)*0.01)*4;
      var spikeContribution = 0;
      for (var i=0;i<spikes.length;i++){
        var s = spikes[i];
        var dx = x - ((s.x + t*0.06) % (w+200) - 100);
        spikeContribution += s.amp * Math.exp(-(dx*dx)/(2*s.width*s.width));
      }
      y -= spikeContribution;
      if (x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.stroke();

    ctx.fillStyle = '#ff8a3d';
    for (var i=0;i<spikes.length;i++){
      var s = spikes[i];
      var sx = (s.x + t*0.06) % (w+200) - 100;
      if (s.amp > 90){
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.arc(sx, midY - s.amp, 2.5, 0, Math.PI*2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
  }

  if (reduced){
    draw(0);
  } else {
    function loop(t){
      draw(t);
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    setInterval(function(){
      if (Math.random() < 0.4) seedSpikes(6);
    }, 4000);
  }
})();
