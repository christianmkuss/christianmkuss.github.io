$(function () {
  let counter = 0;
  window.onorientationchange = function() {
    document.location.reload();
  };
  if ($(window).width() < 900) {
    $('a[href$="projects"]').on('click', function (e) {
      counter ++;
      if(counter === 1) {
        e.preventDefault();
        e.stopPropagation();
        const dropdown = $('.project-dropdown-content');
        dropdown.css('display', 'block');
        if ($(window).innerWidth() < $(window).innerHeight()) {
          $('a[href$="Blog.html"]').css('margin-top', dropdown.outerHeight());
        }
      } else {
        counter = 0;
        $('a[href$="Blog.html"]').css('margin-top', 0);
        $('.project-dropdown-content').css('display', 'none')
      }
    });
  }
  // Mobile landscape
  if ($(window).width() < 900 && $(window).innerWidth() > $(window).innerHeight()) {
    // Make home page items into columns
    let currentRows = $('.home-sections .container .row');
    currentRows.removeClass('row');
    currentRows.addClass('col-sm-6');
    const headshot = $('#about > div > div:nth-child(2)');
    headshot.removeClass('col-sm-6');
    headshot.addClass('col-sm-4');
    headshot.css('padding-left', '10%');
    const aboutMe = $('#about > div > div:nth-child(3)');
    aboutMe.removeClass('col-sm-6');
    aboutMe.addClass('col-sm-8');
    $('.work-experience').removeClass('col-sm-2 col-sm-offset-2');
    $('#experience > div > div:nth-child(2) > div:nth-child(2)').attr('class', 'col-sm-8 col-sm-offset-2 pad');
  }
  // Portrait mobile
  else if ($(window).width() < 900) {
    const nav = $('#navbuttons');
    nav.attr('data-toggle', 'collapse');
    nav.attr('data-target', '#myNavbar');
    $('#myNavbar').addClass('collapse navbar-collapse');

    let graph = $('.graph');
    let parent = graph.parent();
    let newGraph = "<embed class='graph'" +
      " src='https://wakatime.com/share/@christianmkuss/08245dc9-a3df-4e04-bf9f-f39a85570a89.svg'>";
    graph.remove();
    parent.append(newGraph);
  }
  else {
    let element = $('.navbar-nav li a');
    element.hover(function() {
      $(this).css('background-color', '#000000');
    }, function() {
      $(this).css('background-color', $('.navbar-nav').css('background-color'))
    })
  }

  $("a[href^='#']").on('click', function (e) {
    if (this.hash !== '' && counter !== 1) {
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {
        window.location.hash = hash;
      });
    }
  });

  let currentProject = $('.myProjects a');
  currentProject.on('mouseenter', function () {
    if ($('.active-project')[0] !== $(this)[0]) {
      changeProjectImage($(this)[0].id);
    }
  });
});

/***Change navbar color on scroll***/
$(document).on('scroll', function () {
  if ($(window).width() > 767) {
    let rgba = $(document).scrollTop() / 700;
    $('.navbar, .project-dropdown-content').css('background-color', 'rgba(36,54,63,' + rgba + ')');
  }
});

function scrollProjectImage() {
  const projects = ['space', 'pill-dispenser', 'sumo', 'cookie'];
  let i = 1;
  setInterval(function() {
    let currentProject = projects[i];
    changeProjectImage(currentProject);
    i === projects.length - 1 ? i = 0 : i++;
  }, 5000);
}

/***Change the image on the project-thumbnails when hover***/
function changeProjectImage(activeProject) {
  const currentActive = $('.active-project');
  if(activeProject !== currentActive[0].id) {
    currentActive.removeClass('active-project');
    $('#' + activeProject).addClass('active-project');
    const image = $('#project-image');
    image.fadeOut('fast', function () {
      image.attr('src', `resources/img/project-thumbnails/${activeProject}.jpg`);
      image.fadeIn('fast');
    })
  }
}

