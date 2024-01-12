$(()=>{
    $(window).on('scroll',()=>{
        let scrol = window.scrollY;
        if(scrol>15){
        $('.nav1').css('position','fixed')
        $('.nav1').css('top','0')
        $('.nav1').css('right','0')
        $('.nav1').css('left','0')
        $('.nav1').css('z-index','15')
        $('.nav1').css('background-color',' #13547a')


        $('.nav2').css('position','fixed')
        $('.nav2').css('top','0')
        $('.nav2').css('right','0')
        $('.nav2').css('left','0')
        $('.nav2').css('z-index','15')
        $('.nav2').css('background-color',' #13547a')

        }
        else{
          
            $('.nav1').css('position','')
            $('.nav1').css('top','')
            $('.nav1').css('right','')
            $('.nav1').css('z-index','')
            $('.nav1').css('background-color','')


            $('.nav2').css('position','')
            $('.nav2').css('top','')
            $('.nav2').css('right','')
            $('.nav2').css('z-index','')
            $('.nav2').css('background-color','')
        }

    })
   

    $('#websection1').flexslider({
     animation:'slide'
    })

    $('.drop').on('mouseover',(e)=>{
    let ul =  e.target.parentElement.querySelector('.lang');
    $(ul).removeClass('d-none')
    })
  
    $('.drop2').on('mouseover',(e)=>{
    let ul =  e.target.querySelector('.lang');
    $(ul).removeClass('d-none')
    })
    $('.lang').on('mouseleave',(e)=>{
    let ul =  e.target.parentElement.parentElement.querySelector('.lang');
    $(ul).addClass('d-none')
    })
    $('.span').hide()
    $('.sho').on('click',(e)=>{
        $('.sho p').removeClass('border')
        let span = e.target.parentElement.querySelector('span')
        let p = e.target.parentElement.querySelector('p')
        let i = p.querySelector('i')
        if(span.classList.value.includes('show')){
            console.log(span)

            $(span).hide(200)
            $(span).removeClass('show')
            $(p).removeClass('active')
            $(p).addClass('border')
            $(i).css('transform','rotate(0deg)')

        }
        else{
            

            $('span').addClass('show')
            $(p).addClass('active')
            $(p).removeClass('border')
            $(i).css('transform','rotate(180deg)')

            $(span).show(200)

        }

    })

    $('.sho2').on('click',(e)=>{
        let span = e.target.parentElement.parentElement.querySelector('.span')
        let par =  e.target.parentElement;
        if(span.classList.value.includes('show')){
          $(par).removeClass('border')

            console.log(span)

            $(span).hide(100)
            $(span).removeClass('show')
           

        }
        else{
            $(par).addClass('border')

            $(span).addClass('show')
           

            $(span).show(100)

        }
    })
    $('.out').on('click',(e)=>{
        let span = e.target.parentElement.parentElement.querySelector('ul');
        if(span.classList.value.includes('show')){


            $(span).hide(100)
            $(span).removeClass('show')
           

        }
        else{

            $(span).addClass('show')
           

            $(span).show(100)

        }
    })
    $('#loginform').on('submit',(e)=>{
        e.preventDefault()

      $('.err').text('incorrect password or email')
    })
})