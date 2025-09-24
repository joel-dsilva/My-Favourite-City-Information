//navigation.html
<!-- Bootstrap & jQuery JS -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- Custom JavaScript -->
<script>
  // Smooth scrolling function
  function scrollToQuickLinks() {
    $('html, body').animate({
      scrollTop: $('#quickLinks').offset().top - 70
    }, 1000);
  }
  
  // Add active class to current page in navigation
  $(document).ready(function() {
    const currentPage = window.location.pathname.split('/').pop();
    $('.nav-link').each(function() {
      if ($(this).attr('href') === currentPage) {
        $(this).addClass('active');
      }
    });
    
    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 70
        }, 800);
      }
    });
    
    // Parallax effect for hero section
    $(window).scroll(function() {
      const scrolled = $(window).scrollTop();
      $('.favorite-city').css('background-position', 'center ' + (scrolled * 0.5) + 'px');
    });
    
    // Animate numbers counting
    $('.highlight-number').each(function() {
      if ($(this).text() === 'UNESCO') return;
      
      const $this = $(this);
      const target = parseInt($this.text());
      let count = 0;
      
      const timer = setInterval(() => {
        if (count >= target) {
          clearInterval(timer);
          return;
        }
        count += Math.ceil(target / 50);
        if (count > target) count = target;
        $this.text(count + (target === 463 ? '+' : ''));
      }, 30);
    });
  });
</script>

//attractions.html
<!-- Bootstrap & jQuery JS -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  
  <!-- Custom JavaScript -->
  <script>
    $(document).ready(function() {
      // Back to top button
      const backToTopButton = $('#backToTop');
      
      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          backToTopButton.addClass('show');
        } else {
          backToTopButton.removeClass('show');
        }
      });
      
      backToTopButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
      });
      
      // Smooth scrolling for navigation links
      $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 70
          }, 800);
        }
      });
      
      // Add active class to current page in navigation
      const currentPage = window.location.pathname.split('/').pop();
      $('.nav-link').each(function() {
        if ($(this).attr('href') === currentPage) {
          $(this).addClass('active');
        }
      });
      
      // Image lazy loading effect
      $('.attraction-card img').each(function() {
        $(this).on('load', function() {
          $(this).parent().addClass('image-loaded');
        });
      });
    });
  </script>

//contacts.html
<!-- Bootstrap & jQuery JS -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  
  <!-- Custom JavaScript -->
  <script>
    $(document).ready(function() {
      // Back to top button
      const backToTopButton = $('#backToTop');
      
      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          backToTopButton.addClass('show');
        } else {
          backToTopButton.removeClass('show');
        }
      });
      
      backToTopButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
      });
      
      // Form validation and submission
      $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        if (this.checkValidity() === false) {
          e.stopPropagation();
        } else {
          // Simulate form submission
          const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#subject').val(),
            message: $('#message').val()
          };
          
          // Show success message
          const successAlert = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              <i class="fas fa-check-circle me-2"></i>
              <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon!
              <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
          `;
          
          $('#contactForm').before(successAlert);
          $('#contactForm')[0].reset();
          $('#contactForm').removeClass('was-validated');
        }
        
        $(this).addClass('was-validated');
      });
      
      // Add active class to current page in navigation
      const currentPage = window.location.pathname.split('/').pop();
      $('.nav-link').each(function() {
        if ($(this).attr('href') === currentPage) {
          $(this).addClass('active');
        }
      });
      
      // Smooth scrolling for navigation links
      $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 70
          }, 800);
        }
      });
      
      // Add hover effects to FAQ cards
      $('.faq-card').hover(
        function() {
          $(this).css('transform', 'translateX(5px)');
        },
        function() {
          $(this).css('transform', 'translateX(0)');
        }
      );
    });
  </script>

//culture.html
<!-- Bootstrap & jQuery JS -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  
  <!-- Custom JavaScript -->
  <script>
    $(document).ready(function() {
      // Back to top button
      const backToTopButton = $('#backToTop');
      
      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          backToTopButton.addClass('show');
        } else {
          backToTopButton.removeClass('show');
        }
      });
      
      backToTopButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
      });
      
      // Smooth scrolling for navigation links
      $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 70
          }, 800);
        }
      });
      
      // Add active class to current page in navigation
      const currentPage = window.location.pathname.split('/').pop();
      $('.nav-link').each(function() {
        if ($(this).attr('href') === currentPage) {
          $(this).addClass('active');
        }
      });
      
      // Image lazy loading with fade-in effect
      $('.culture-card img, .craft-img').each(function() {
        $(this).on('load', function() {
          $(this).css('opacity', '0').animate({ opacity: '1' }, 600);
        });
      });
      
      // Add animation to section titles on scroll
      $(window).scroll(function() {
        $('.section-title').each(function() {
          const position = $(this).offset().top;
          const scrollPosition = $(window).scrollTop() + $(window).height();
          
          if (position < scrollPosition - 50) {
            $(this).addClass('animate__animated animate__fadeInUp');
          }
        });
      });
    });
  </script>

    //homepage.html
<!-- Bootstrap & jQuery JS -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  
  <!-- Custom JavaScript -->
  <script>
    $(document).ready(function() {
      // Smooth scrolling for navigation links
      $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 70
          }, 800);
        }
      });
      
      // Add active class to current page in navigation
      const currentPage = window.location.pathname.split('/').pop();
      $('.nav-link').each(function() {
        if ($(this).attr('href') === currentPage) {
          $(this).addClass('active');
        }
      });
    });
  </script>
