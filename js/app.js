$(document).ready(function () {
  let $menuHome = $('#menu-home-container');
  const $projectImg = $('.project-img').find('img');

  const limitTime = 2000;

  stoppedMouse = setTimeout(function() {
    $('#arrow-down').removeClass('hidden')
  }, limitTime);

  const arrIconsTech = [
    { tool : 'javascript' , percent : 90 },
    { tool : 'java' , percent : 20 },
    { tool : 'angular' , percent : 80 },
    { tool : 'react' , percent : 50 },
    { tool : 'redux' , percent : 70 },
    { tool : 'jquery' , percent : 80 },
    { tool : 'firebase' , percent : 60 },
    { tool : 'node js' , percent : 60 },
    { tool : 'ionic' , percent : 70 },
    { tool : 'sass' , percent : 80 }
  ]

  $('.modal-info').hide();

  $('#arrow-down').on('click', showInfo);


  // Creando un clon del menu justo alado del original
  $('#menu-home-container').addClass('original').clone().insertAfter('#menu-home-container').addClass('cloned')
    .css('position', 'fixed').css('top', '0').css('margin-top', '-1px').css('z-index', '500').removeClass('original').hide();

  scrollIntervalID = setInterval(stickIt, 10);

  $('.original').find("a").css({
    "color": "#fff"
  });

  function stickIt() {
    var orgElementPos = $('.original').offset();

    orgElementTop = orgElementPos.top;
    // console.log(orgElementTop)  //700         

    if ($(window).scrollTop() >= (orgElementTop)) {
      // scrolled past the original position; now only show the cloned, sticky element.
      // Cloned element should always have same left position and width as original element.     
      orgElement = $('.original');
      coordsOrgElement = orgElement.offset();
      leftOrgElement = coordsOrgElement.left;

      widthOrgElement = orgElement.css('width');

      $('.cloned').css({'left': leftOrgElement + 'px', 'width': widthOrgElement,'top': 0, 'box-shadow':'0px 0px 4px 1px rgba(0, 0, 0, 0.15)', 'background-color': '#000' })
      .show();
      $('.original').css('visibility', 'hidden');
    } else {
      // not scrolled past the menu; only show the original menu.
      $('.cloned').hide();
      $('.original').css('visibility', 'visible');
    }
  }
  

  let upWindow = function () {
    // var el = document.getElementsByTagName('body');
    var $el = ('body');
    $el.scrollTop = 0;
  }

  let goToMenu = function () {
    window.scrollTo(5, 0);
  }

// Adding icons
  arrIconsTech.map(index =>
    $('#tech-skills-box').append(
      `
        <div class="tech-skills-box">
          <div>${index.tool}</div>
          <div class="tech-skills__bar">
            <div 
            class="tech-skills__bar--process"
            style=";width:${index.percent}%"
            ></div>
          </div>
        </div>
      `
    )
  );

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'js/particles.json', function () {
    // console.log('callback - particles.js config loaded');
  });

  // Evento para whastapp
  $('#wpp').on('click', function(){
    window.open("https://api.whatsapp.com/send?phone=51971313111&text=I'm%20interested%20in%20your%20portfolio");
  })

  // modal
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })
  console.log($('.modal-info'));

  // Images project
  function showInfo() {
    // console.log($projectImg)
    console.log($(this))
    console.log()
$(this).next().next().append(`

`)
  }

});

