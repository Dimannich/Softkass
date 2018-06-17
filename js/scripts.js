
    function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 48.48001, lng: 135.07679},
          zoom: 15
        });
    }


        if($('main').find('nav').hasClass('breadcrumb-nav')) {
            $('main').css('background', '#f5f5f5');
        } 
   

        $(document).ready(function () {
            $('.plus, .minus').click(function() {
            
                let $input = $(this).parent().find('.value');
            

                if($(this).hasClass('plus')) {
                    $input.val(Number($input.val()) + 1);
                    $input.trigger('change');
                }
                else {
                    if($input.val() === '1') {
                        return;
                    }
                        
                    $input.val(Number($input.val()) - 1);
                    $input.trigger('change');
                }
            });

            $('.value').on('change cut paste keyup', function() {
                let $input = $(this);
                let $price = $(this).parent().parent().find('.price');
                let $sum = $(this).parent().parent().find('.sum');
                let $total = $('#total');
                let value = Number($price.text().replace(/\s/g, ''));
                
                $sum.text(numberWithSpaces($input.val() * value));
                $total.text('');
                $('.sum').each(function() {
                    $total.text(Number($total.text()) + Number($(this).text().replace(/\s/g, '')));
                });

                $total.text(numberWithSpaces($total.text()));
            });

            $('.del-btn').click(function() {
                $this = $(this);
                $.post('url', {id: '123'})
                    .done(function() {
                        $this.parent('data-row').remove();
                    });
            });

            $('#accept').click(function (e) { 
                e.preventDefault();
                $('#cart').removeClass('show');
                $.wait( function() {
                    $('#cart').removeClass('active');
                    $('#form').addClass('active');
                    $.wait(function() { $('#form').addClass('show')}, 0.3);
                }, 0.5);
            });

            $('#submit').click(function(e){
                e.preventDefault();

                // $.post('url', {data:'data'})
                //     .done {
                //         $('#cart').removeClass('show');
                //         $.wait( function() {
                //             $('#cart').removeClass('active');
                //             $('#form').addClass('active');
                //             $.wait(function() { $('#form').addClass('show')}, 0.3);
                //         }, 0.5);
                //     }

                $('#form').removeClass('show');
                $.wait( function() {
                    $('#form').removeClass('active');
                    $('#finish').addClass('active');
                    $.wait(function() { $('#finish').addClass('show')}, 0.3);
                }, 0.5);
            });

            $('#return').click(function (e) { 
                e.preventDefault();

                $('#form').removeClass('show');
                $.wait( function() {
                    $('#form').removeClass('active');
                    $('#cart').addClass('active');
                    $.wait(function() { $('#cart').addClass('show')}, 0.3);
                }, 0.5);
            });
        });

        function numberWithSpaces(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }

        $.wait = function( callback, seconds){
            return window.setTimeout( callback, seconds * 1000 );
         }