$(()=>{
    $(window).on('scroll',()=>{
        let scrol = window.scrollY;
        if(scrol>15){
        $('nav').css('min-width','100vw')
        $('nav').css('height','2cm')
        $('nav').css('display','flex')
        $('nav').css('justify-content','center')
        $('nav').css('position','fixed')
        $('nav').css('top','0')
        $('nav').css('right','0')
        $('nav').css('left','0')
        $('nav').css('z-index','15')
        $('nav').css('background-color',' #13547a')

        }
        else{
            $('nav').css('min-width','100vw')
            $('nav').css('height','2cm')
            $('nav').css('display','flex')
            $('nav').css('justify-content','center')
            $('nav').css('position','')
            $('nav').css('top','')
            $('nav').css('right','')
            $('nav').css('z-index','')
            $('nav').css('background-color','')
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
    $('#loginform').on('submit',(e)=>{
        e.preventDefault()

      $('.err').text('incorrect password or email')
    })
})