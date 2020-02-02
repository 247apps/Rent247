<script type="text/javascript">
                
                
                
                function showHideBoxes(pType,pVal){
                    
                    //availability 
                    if(pType == 'avail'){
                            switch(pVal){
                                case 'now': //hide calendar
                                    jQuery( ".rwmb-date-wrapper").hide()
                                    break;

                                default: //show calendar 
                                    jQuery( ".rwmb-date-wrapper").show()
                                    jQuery("#_r247_lg_avail").val("from");
                                    jQuery("#_r247_lg_avail_fromdate").val("<?=$avail_from?>");
                                    convertDate();
                            }
                    }
                    
                    
                }
                
                function convertDate(){
                    
                    jQuery("#_r247_lg_avail_fromdate").attr('data-options', '{"dateFormat":"mm/dd/yy","showButtonPanel":true}');
                }
                
                
                jQuery(document).ready(function($){
                    
                    // move PUBLISH sidebox to bottom of listing
                    jQuery( "#submitdiv" ).insertAfter( $( "#postimagediv" ) );
                    
                    //move unit extra desc box below Overview box
                                       
                    jQuery( "#rent247_editable_table_box" ).insertAfter( $( "#lg_overviewbox" ) );
                    jQuery( "#id_schoolbox" ).insertAfter( $( "#id_photos" ) );
                    jQuery( "#id_petbox" ).insertAfter( $( "#id_schoolbox" ) );
                    
                    
                    //availability
                    var avail = '<?=$avail?>' //now
                    
                    showHideBoxes('avail', avail);
                    
                    
                    //lg_avail_now radio  
                    $( "select[name$='_r247_lg_avail']" ).on('change', function() {
                        var value = $(this).val();
                        //alert(value)
                       
                        if(value != 'now'){
                            $( ".rwmb-date-wrapper").show();
                            
                            $("#_r247_lg_avail_fromdate").attr('data-options', '{"dateFormat":"mm/dd/yy","showButtonPanel":true}');
                            
                        }
                        else { //now is selected, must clear fromDate data
                            $("#_r247_lg_avail_fromdate").val("");
                            $(".rwmb-date-wrapper").hide();
                        }
                    });
                    
                    
                });

            </script>
