<script type="text/javascript">
                
                jQuery(document).ready(function($){
                    //alert('availl')
                    
                    var availl = Number('<?=$avail?>') //convert to real number
                    var price = Number('<?=$price?>')
                    
                    //never selected avail radio, hide availDate box
                    if(availl == '-1')
                        $( ".rwmb-date-wrapper").hide()//hide dateRange if never selected Date
                    
                    if(price == -1){
                    //never selected price radio, hide priceFromTo boxes
                        $( ".rwmb-number-wrapper:eq( 1 )" ).hide()
                        $( ".rwmb-number-wrapper:eq( 2 )" ).hide()
                    }
                    
                    //replace format USDate by copying the frontend here                   
                    $("#rent247_lg_avail_from").attr('data-options', '{"dateFormat":"mm/dd/yy","showButtonPanel":true}');
                    
                    
                    //lg_avail_now radio
                    $( "input[name$='rent247_lg_avail_now']" ).on('change', function() {
                        var value = $(this).val();
                        //alert(value)
                       
                        if(value == 0) //$("#rent247_lg_avail_from").show();
                            $( ".rwmb-date-wrapper").show()
                        else {
                            $(".rwmb-date-wrapper").hide();
                            $("#rent247_lg_avail_from").val('')
                            
                        }
                    });
                    
                    
                    //Date selected, we must check the radio2
                    $("#rent247_lg_avail_from").on('change', function() {
                        
                        $("input[name$='rent247_lg_avail_now'][value='0']")
                                .attr('checked', true);                        
                    });
                    
                    
                    $( "input[name$='rent247_radio_price']" ).on('change', function() {
                        var value = $(this).val();
                       
                        if(value == 0) {
                            $( ".rwmb-number-wrapper:eq( 1 )" ).show()
                            $( ".rwmb-number-wrapper:eq( 2 )" ).show()
                            $( ".rwmb-number-wrapper:eq( 0 )" ).hide()
                            
                        }
                        else {
                            $( ".rwmb-number-wrapper:eq( 0 )" ).show()
                            $( ".rwmb-number-wrapper:eq( 1 )" ).hide()
                            $( ".rwmb-number-wrapper:eq( 2 )" ).hide()
                            
                        }
                    });
                
                });

            </script>