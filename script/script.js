    $('.home-link').click(()=>{
        $('#About').addClass('hidden');
        $('#services').addClass('hidden');
        $('#portfolio').addClass('hidden');
        $('#contact').addClass('hidden');
        $('.home').removeClass('hidden');
        // $('.home').css({marginLeft:'3%', paddingLeft:'2%'});

        $('.contact-link').removeClass('active');
        $('.home-link').addClass('active');
        $('.services-link').removeClass('active');
        $('.portfolio-link').removeClass('active');
        $('.about-link').removeClass('active');

    });

    $('.about-link').click(()=>{
        $('.home').addClass('hidden');
        $('#About').removeClass('hidden');
        $('#services').addClass('hidden');
        $('#portfolio').addClass('hidden');
        $('#contact').addClass('hidden');

        $('.contact-link').removeClass('active');
        $('.home-link').removeClass('active');
        $('.services-link').removeClass('active');
        $('.portfolio-link').removeClass('active');
        $('.about-link').addClass('active');
    });

    $('.portfolio-link').click(()=>{
        $('.home').addClass('hidden');
        $('#About').addClass('hidden');
        $('#services').addClass('hidden');
        $('#portfolio').removeClass('hidden');
        $('#contact').addClass('hidden');

        $('.contact-link').removeClass('active');
        $('.home-link').removeClass('active');
        $('.services-link').removeClass('active');
        $('.portfolio-link').addClass('active');
        $('.about-link').removeClass('active');
    });

    $('.services-link').click(()=>{
        $('.home').addClass('hidden');
        $('#About').addClass('hidden');
        $('#services').removeClass('hidden');
        $('#portfolio').addClass('hidden');
        $('#contact').addClass('hidden');

        $('.contact-link').removeClass('active');
        $('.home-link').removeClass('active');
        $('.services-link').addClass('active');
        $('.portfolio-link').removeClass('active');
        $('.about-link').removeClass('active');

    });

    $('.contact-link').click(()=>{
        $('.home').addClass('hidden');
        $('#About').addClass('hidden');
        $('#services').addClass('hidden');
        $('#portfolio').addClass('hidden');
        $('#contact').removeClass('hidden');

        $('.contact-link').addClass('active');
        $('.home-link').removeClass('active');
        $('.services-link').removeClass('active');
        $('.portfolio-link').removeClass('active');
        $('.about-link').removeClass('active');
    });

    $('.style-switcher .hamburger i').css({background:'var(--text-black-700)'});
    $('.style-switcher .hamburger i').click(()=>{
        // $('.mobile-navbar').toggleClass('hidden');
        $('.mobile-navbar').slideToggle('#navbar');
    });

    $('.mobile-navbar .navDiv #navbar li a').click(()=>{
        $('.mobile-navbar').css('display', 'none');

    })

    $(document).scroll(()=>{
        $('.mobile-navbar').css({display: 'none'});

    });

    

    // $('body').click(()=>{
    //     $('.mobile-navbar').css({display: 'none'});

    // })

    
