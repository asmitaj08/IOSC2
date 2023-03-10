var subnet_mask = new Array(0, 128, 192, 224, 240, 248, 252, 254, 255);
var key_num_array = new Array("64", "128");
var url = window.location.href;
var no_httpd = url.split("//")[1];
var url_ip = no_httpd.split("/")[0];
var gConfig;

function addr_obj(addr, e_msg, allow_zero, is_network){	
	this.addr = addr;
	this.e_msg = e_msg;
	this.allow_zero = allow_zero;			
	this.is_network = is_network;
}

function varible_obj(var_value, e_msg, min, max, is_even){	
	this.var_value = var_value;
	this.e_msg = e_msg;
	this.min = min;
	this.max = max;		
	this.is_even = is_even;		
}

function raidus_obj(ip, port, secret){	
	this.ip = ip;
	this.port = port;
	this.secret = secret;
}

function change_color(table_name, row){
    var obj = get_by_id(table_name);
    for (var i = 1; i < obj.rows.length; i++){
        if (row == i){
            obj.rows[i].style.backgroundColor = "#FFFF00";
        }else{
            obj.rows[i].style.backgroundColor = "#F0F0F0";
        }
    }       
}

function change_wan_html(which_wan){
    var html_file;
    
    switch(parseInt(which_wan)){
		case 0 :
	    	html_file = "wan_dhcp.htm";
	    	break;
		case 1 :	    
	    	html_file = "wan_poe.htm";
	    	break;
		case 2 :
	    	html_file = "wan_pptp.htm";
	    	break;
	    case 3 :
	    	html_file = "wan_l2tp.htm";
	    	break;
	    case 4 :
	    	html_file = "wan_bigpond.htm";
	    	break;
	    case 5 :
	    	html_file = "wan_russia_poe.htm";
	    	break;
	    case 6 :
	    	html_file = "wan_russia_pptp.htm";
	    	break;
	    case 7 :
	    	html_file = "wan_russia_l2tp.htm";
	    	break;	
	}
	
	location.href = html_file;
}

function check_address_allow_empty(my_obj, mask_obj, ip_obj){
        var count_zero = 0;
        var count_bcast = 0;
        var ip = my_obj.addr;
        var mask;

        if (my_obj.addr.length == 4){
                // check the ip is not multicast IP (127.x.x.x && 224.x.x.x ~ 239.x.x.x)
                if((my_obj.addr[0] == "127") || ((my_obj.addr[0] >= 224) && (my_obj.addr[0] <= 239))){
                        alert(my_obj.e_msg[MULTICASE_IP_ERROR]);
                        return false;
                }
                // check the ip is "0.0.0.0" or not                                                                           
                for(var i = 0; i < ip.length; i++){
                        if (ip[i] == "0"){
                                count_zero++;
                        }
                }

                if (!my_obj.allow_zero && count_zero == 4){     // if the ip is not allowed to be 0.0.0.0
                        alert(my_obj.e_msg[ZERO_IP]);                   // but we check the ip is 0.0.0.0
                        return false;
                }else if (count_zero != 4){             // when IP is not 0.0.0.0, checking range. Otherwise no need to check 
                                        count_zero = 0;

                        if (check_address_allow_empty.arguments.length >= 2 && mask_obj != null){
                                mask = mask_obj.addr;
                        }else{
                                mask = new Array(255,255,255,0);
                                                }

                        for(var i = 0; i < ip.length; i++){

                                if (check_address_allow_empty.arguments.length == 3 && ip_obj != null){
                                        if (!check_current_range(i, my_obj, ip_obj.addr, mask)){
                                                        return false;
                                                }
                                }else{
                                        if (!check_ip_range(i, my_obj, mask)){
                                                return false;
                                                }
                                                }
                                        }

                        for (var i = 0; i < 4; i++){    // check the IP address is a network address or a broadcast address                                                                                                                                 
                                if (((~mask[i] + 256) & ip[i]) == 0){   // (~mask[i] + 256) = reverse mask[i]
                                        count_zero++;
                                }

			if ((mask[i] | ip[i]) == 255){
                                        count_bcast++;
                                        }
                                }

                        if ((count_zero == 4 && !my_obj.is_network) || (count_bcast == 4)){
                                alert(my_obj.e_msg[INVALID_IP]);
                                return false;
                        }
                }
        }
	else 
	{
		if(ip != "" )// if the length of ip is not correct, show invalid ip msg
		{
                	alert(my_obj.e_msg[INVALID_IP]);
                	return false;
        	}
	}

        return true;
}


function check_address(my_obj, mask_obj, ip_obj){
	var count_zero = 0;
	var count_bcast = 0;
	var ip = my_obj.addr;
	var mask;
					
	if (my_obj.addr.length == 4){
		// check the ip is not multicast IP (127.x.x.x && 224.x.x.x ~ 239.x.x.x)
		if((my_obj.addr[0] == "127") || ((my_obj.addr[0] >= 224) && (my_obj.addr[0] <= 239))){
			alert(my_obj.e_msg[MULTICASE_IP_ERROR]);
			return false;
		}
		// check the ip is "0.0.0.0" or not										
		for(var i = 0; i < ip.length; i++){
			if (ip[i] == "0"){
				count_zero++;
			}								
		}
	
		if (!my_obj.allow_zero && count_zero == 4){	// if the ip is not allowed to be 0.0.0.0
			alert(my_obj.e_msg[ZERO_IP]);			// but we check the ip is 0.0.0.0
			return false;
		}else if (count_zero != 4){		// when IP is not 0.0.0.0, checking range. Otherwise no need to check		
					count_zero = 0;					
				
			if (check_address.arguments.length >= 2 && mask_obj != null){
				mask = mask_obj.addr;
			}else{
				mask = new Array(255,255,255,0);
						}
						
			for(var i = 0; i < ip.length; i++){
				
				if (check_address.arguments.length == 3 && ip_obj != null){
					if (!check_current_range(i, my_obj, ip_obj.addr, mask)){
							return false;
						}
				}else{					
					if (!check_ip_range(i, my_obj, mask)){
						return false;
						}
						}
					}										
							
			for (var i = 0; i < 4; i++){	// check the IP address is a network address or a broadcast address																							
				if (((~mask[i] + 256) & ip[i]) == 0){	// (~mask[i] + 256) = reverse mask[i]
					count_zero++;						
				}
				
				if ((mask[i] | ip[i]) == 255){
					count_bcast++;
					}							
				}
		
			if ((count_zero == 4 && !my_obj.is_network) || (count_bcast == 4)){
				alert(my_obj.e_msg[INVALID_IP]);			
				return false;
			}
		}
	}else{	// if the length of ip is not correct, show invalid ip msg
		alert(my_obj.e_msg[INVALID_IP]);
		return false;		
	}		
	
	return true;		
}

function check_current_range(order, my_obj, checking_ip, mask){
	var which_ip = (my_obj.addr[order]).split(" ");
	var start, end;

	if (isNaN(which_ip) || which_ip == "" || which_ip.length > 1 || (which_ip[0].length > 1 && which_ip[0].substring(0,1) == "0")){	// if the address is invalid
		alert(my_obj.e_msg[FIRST_IP_ERROR + order]);
		return false;
	}
	
	if (order == 0){				// the checking range of 1st address
		start = 1;	
	}else{
		start = 0;				
	}
	
	if (mask[order] != 255){				
		if (parseInt(checking_ip[order]) >= 0 && parseInt(checking_ip[order]) <= 255){	
			end = (~mask[order]+256);				
			start = mask[order] & checking_ip[order];	
			end += start;
		
			if (end > 255){
				end = 255;
			}
		}else{
			end = 255;
		}
	}else{
		end = 255;
	}
	
	if (order == 3){
		if ((mask[0] == 255) && (mask[1] == 255) && (mask[2] == 255)){
			start += 1;
			end -= 1;
		}else{		
			if (((mask[0] | (~my_obj.addr[0]+256)) == 255) && ((mask[1] | (~my_obj.addr[1]+256)) == 255) && ((mask[2] | (~my_obj.addr[2]+256)) == 255)){
				start += 1;
			}
			
			if (((mask[0] | my_obj.addr[0]) == 255) && ((mask[1] | my_obj.addr[1]) == 255) && ((mask[2] | my_obj.addr[2]) == 255)){			
				end -= 1;
			}	
		}	
	}
		
	if (parseInt(which_ip) < start || parseInt(which_ip) > end){			
		alert(my_obj.e_msg[FIRST_RANGE_ERROR + order] + " " + start + " ~ " + end + ".");		
		return false;
	}
	
	return true;
}

function check_domain(ip, mask, gateway){
	var temp_ip = ip.addr;
	var temp_mask = mask.addr;
	var temp_gateway = gateway.addr;
	var temp_str = "";
	
	for (var i = 0; i < 4; i++){
		temp_str += temp_gateway[i];
		
		if (i < 3){
			temp_str += ".";
		}
	}
	
	if (gateway.allow_zero && (temp_str == "0.0.0.0" || temp_str == "...")){
		return true;
	}
	
	for (var i = 0; i < temp_ip.length - 1; i++){
		if ((temp_ip[i] & temp_mask[i]) != (temp_gateway[i] & temp_mask[i])){				
			return false;		// when not in the same subnet mask, return false		
		}
	}

	return true;
}

function check_ip_order(start_ip, end_ip){
	var temp_start_ip = start_ip.addr;
	var temp_end_ip = end_ip.addr;
	
	var total1 = 0;
	var total2 = 0;
    if(temp_start_ip.length > 1){
    	total1 += parseInt(temp_start_ip[3],10);
    	total1 += parseInt(temp_start_ip[2],10)*256;
    	total1 += parseInt(temp_start_ip[1],10)*256*256;
    	total1 += parseInt(temp_start_ip[0],10)*256*256*256;
    }
    
    if(temp_end_ip.length > 1){
   		total2 += parseInt(temp_end_ip[3],10);
	    total2 += parseInt(temp_end_ip[2],10)*256;
	    total2 += parseInt(temp_end_ip[1],10)*256*256;
	    total2 += parseInt(temp_end_ip[0],10)*256*256*256;
	}
    if(total1 > total2)
        return false;
    return true;
}

function check_resip_order(reserved_ip,start_ip, end_ip){
	var temp_start_ip = start_ip.addr;
	var temp_end_ip = end_ip.addr;
	var temp_res_ip = reserved_ip.addr;
	var total1 = ip_num(temp_start_ip);
	var total2 = ip_num(temp_end_ip);
    var total3 = ip_num(temp_res_ip);
    if(total1 <= total3 && total3 <= total2)
        return false;
	return true;
}

function check_ip_range(order, my_obj, mask){
	var which_ip = (my_obj.addr[order]).split(" ");			
	var start, end;
				
	if (isNaN(which_ip) || which_ip == "" || which_ip.length > 1 || (which_ip[0].length > 1 && which_ip[0].substring(0,1) == "0")){	// if the address is invalid
		alert(my_obj.e_msg[FIRST_IP_ERROR + order]);
		return false;
	}

	if (order == 0){				// the checking range of 1st address
		start = 1;	
	}else{
		start = 0;				
	}
		
	if (mask[order] != 255){		
		if (parseInt(which_ip) >= 0 && parseInt(which_ip) <= 255){	
			end = (~mask[order]+256);				
			start = mask[order] & which_ip;	
			end += start;
		
			if (end > 255){
				end = 255;
			}
		}else{
			end = 255;
		}
	}else{
		end = 255;
	}
	
	
	if (order == 3){
		if ((mask[0] == 255) && (mask[1] == 255) && (mask[2] == 255)){
			start += 1;
			end -= 1;
		}else{								
			if (((mask[0] | (~my_obj.addr[0]+256)) == 255) && ((mask[1] | (~my_obj.addr[1]+256)) == 255) && ((mask[2] | (~my_obj.addr[2]+256)) == 255)){
				start += 1;
			}
			
			if (((mask[0] | my_obj.addr[0]) == 255) && ((mask[1] | my_obj.addr[1]) == 255) && ((mask[2] | my_obj.addr[2]) == 255)){			
				end -= 1;
			}				
		}
	}
		
	if (parseInt(which_ip) < start || parseInt(which_ip) > end){
		alert(my_obj.e_msg[FIRST_RANGE_ERROR + order] + " " + start + " ~ " + end + ".");		
		return false;
	}
					
	return true;
}

function check_hex(data){	
	data = data.toUpperCase();
	if (!(data >= 'A' && data <= 'F') && !(data >= '0' && data <= '9')){	
		return false;
	}	
	return true;
}

function check_lan_setting(ip, mask, gateway){				
	
	 if (!check_mask(mask)){
		return false;   // when subnet mask is not in the subnet mask range
	}else if (!check_address(ip, mask)){
		return false;		// when ip is invalid
	}else if (!check_address(gateway, mask, ip)){
		return false;	// when gateway is invalid
	}else if (!check_domain(ip, mask, gateway)){		// check if the ip and the gateway are in the same subnet mask or not					
		alert(msg[MSG7]);
		return false;
	}
	return true;
}

function check_LAN_ip(LAN_IP, CHK_IP, obj_name){
	if(ip_num(LAN_IP) == ip_num(CHK_IP)){
		alert(addstr(msg[MSG49], obj_name));
		return false;
	}
	return true;
}

function check_mac(mac){
    var temp_mac = mac.split(":");
    var error = true;
    if (temp_mac.length == 6){
	    if(temp_mac[0] != "00"){
	    	return false;
	    }
	    for (var i = 0; i < 6; i++){        
	        var temp_str = temp_mac[i];
	        
	        if (temp_str == ""){
	            error = false;
	        }else{        	
	            if (!check_hex(temp_str.substring(0,1)) || !check_hex(temp_str.substring(1))){
	                error = false;
	            }
	        }
	        
	        if (!error){
	            break;
	        }
	    }
	}else{
		error = false;
	}
    return error;
}

function check_mac_00(mac){
    var error = true;
	var temp_mac = "";
    if((mac.indexOf(':') != -1)){
        temp_mac = mac.split(":");
    }
	/*else if((mac.indexOf('-') != -1)){
        temp_mac = mac.split("-");
    }*/

    if(mac.length != 17) {
        return false;
    }
   
	var chkmac1 = parseInt(mac.substring(0,2),16); 	
	chkmac1%=2;
	if (chkmac1 != 0)
		return -59;

    if (temp_mac.length == 6){
        var j=0;
        for (var i = 0; i < 6; i++){
            var temp_str = temp_mac[i];

            if (temp_str == ""){
                error = false;
            }
            else if(temp_str == "00"){
                j++;
            }
            else{
                if (!check_hex(temp_str.substring(0,1)) || !check_hex(temp_str.substring(1))){
                    error = false;
                }
            }
            if (!error){
                break;
            }
        }
        if(j==6)
            error = false;
    }else{
        error = false;
    }
    return error;
}



function check_mask(my_mask){
	var temp_mask = my_mask.addr;							
	
	if (temp_mask.length == 4){
		for (var i = 0; i < temp_mask.length; i++){	
			var which_ip = temp_mask[i].split(" ");
			var mask = parseInt(temp_mask[i]);
			var in_range = false;
			var j = 0;
			
			if (isNaN(which_ip) || which_ip == "" || which_ip.length > 1 || (which_ip[0].length > 1 && which_ip[0].substring(0,1) == "0")){	// if the address is invalid
				alert(my_mask.e_msg[FIRST_IP_ERROR + i]);
				return false;
			}
			
			if (i == 0){	// when it's 1st address
				j = 1;		// the 1st address can't be 0
			}
			
			for (; j < subnet_mask.length; j++){			
				if (mask == subnet_mask[j]){
					in_range = true;
					break;											
				}else{
					in_range = false;
				}
			}	
			
			if (!in_range){
				alert(my_mask.e_msg[FIRST_RANGE_ERROR + i]);
				return false;
			}	
												
			if (i != 0 && mask != 0){ // when not the 1st range and the value is not 0
				if (parseInt(temp_mask[i-1]) != 255){  // check the previous value is 255 or not
					alert(my_mask.e_msg[INVALID_IP]);
					return false;
				}
			}					
			
			if (i == 3 && (parseInt(mask) == 254 || parseInt(mask) == 255)){	// when the last mask address is 255
				alert(my_mask.e_msg[FOURTH_RANGE_ERROR]);
				return false;
			}				
		}
	}else{
		alert(my_mask.e_msg[INVALID_IP]);
		return false;
	}
	
	return true;
}

function check_network_address(my_obj, mask_obj){
	var count_zero = 0;
	var ip = my_obj.addr;
	var mask;
	var allow_cast = false;

	if (my_obj.addr.length == 4){
		// check the ip is not multicast IP (127.x.x.x && 224.x.x.x ~ 239.x.x.x)
		if(my_obj.addr[0] == "127"){
			alert(my_obj.e_msg[MULTICASE_IP_ERROR]);
			return false;
		}
		
		// check the ip is "0.0.0.0" or not
		for(var i = 0; i < ip.length; i++){
			if (ip[i] == "0"){
				count_zero++;			
			}				
		}

		if (!my_obj.allow_zero && count_zero == 4){	// if the ip is not allowed to be 0.0.0.0
			alert(my_obj.e_msg[ZERO_IP]);			// but we check the ip is 0.0.0.0
			return false;
		}else if (count_zero != 4){		// when IP is not 0.0.0.0, checking range. Otherwise no need to check				
				mask = mask_obj.addr;
				for(var i = 0; i < mask.length; i++){
					if (mask[i] != "255"){
					if (ip[i] != (mask[i] & ip[i])){
						alert(my_obj.e_msg[FIRST_RANGE_ERROR + i] + (mask[i] & ip[i]));
						return false;
					}
				}
			}
		}
	}else{	// if the length of ip is not correct, show invalid ip msg
		alert(my_obj.e_msg[INVALID_IP]);
		return false;
	}

	return true;
}

function ip_num(IP_array){
	var total1 = 0;
	if(IP_array.length > 1){
   		total1 += parseInt(IP_array[3],10);
	    total1 += parseInt(IP_array[2],10)*256;
	    total1 += parseInt(IP_array[1],10)*256*256;
	    total1 += parseInt(IP_array[0],10)*256*256*256;
	}
	return total1;
}

function check_pwd(pwd1, pwd2){
	if (get_by_id(pwd1).value != get_by_id(pwd2).value){
		 alert(msg[MSG1]);
		 return false;
	}
	return true;
}

function check_port(port){
    var temp_port = port.split(" ");
    
    if (isNaN(port) || port == "" || temp_port.length > 1 
    		|| (parseInt(port) < 1 || parseInt(port) > 65534)){
        return false;
    }
    return true;
}

function check_radius(radius){	
	if (!check_address(radius.ip)){
		return false;
	}else if (!check_port(radius.port)){        
        alert(radius.ip.e_msg[RADIUS_SERVER_PORT_ERROR]);
        return false;
    }else if (radius.secret == ""){
        alert(radius.ip.e_msg[RADIUS_SERVER_SECRET_ERROR]);
        return false;               
	}
	
	return true;
}

function check_ssid(id){
	if (get_by_id(id).value == ""){
	    alert(msg[MSG6]);
	    return false;
	}
	return true;        
}

function pi(val){
    return parseInt(val,10);
}

function check_varible(obj){
	var temp_obj = (obj.var_value).split(" ");
	
	if (temp_obj == "" || temp_obj.length > 1){	
		alert(obj.e_msg[EMPTY_VARIBLE_ERROR]);
		return false;
	}else if (isNaN(obj.var_value)){
		alert(obj.e_msg[INVALID_VARIBLE_ERROR]);
		return false;
	}else if (parseInt(obj.var_value) < obj.min || parseInt(obj.var_value) > obj.max){
		alert(obj.e_msg[VARIBLE_RANGE_ERROR]);
		return false;
	}else if (obj.is_even && (parseInt(obj.var_value) % 2 != 0)){
		alert(obj.e_msg[EVEN_NUMBER_ERROR]);
		return false;
	}
	return true;
}

function check_wep_key(){            	                        	
	var length = get_length();	
	var wep_def_key = get_by_name("wlan0_wep_default_key");
	var key_length = get_by_id("wep_key_len").selectedIndex;
	var wep_key_type = get_by_id("wlan0_wep_display").value;
	var key_len_msg;
	
	for (var i = 1; i < 5; i++){					
	    var key = get_by_id("key" + i +"_"+ key_num_array[key_length] +"_"+ wep_key_type).value;

	    if (wep_def_key[i-1].checked){
	        if (key == ''){
	            alert(msg[MSG10]);
		        return false;
	        }
	    }
	    
	    key_len_msg = get_key_len_msg(i);
	    	    
        if (key != ''){
            if (key.length < length){
                alert(show_key_len_error(key_len_msg, length));
                return false;
            }else{
            	if (wep_key_type == "hex"){	// check the key is hex or not
	            	for (var j = 0; j < key.length; j++){
	            		if (!check_hex(key.substring(j, j+1))){
	            			alert(illegal_key_error[i-1]);
	            			return false;
	            		}
	            	}
	            }
            }
        }           	  
	}                	                	
	
	return true;
}

function disable_dhcp(is_checked, start_obj, end_obj){
	start_obj.disabled = is_checked;
	end_obj.disabled = is_checked;
}

function disable_idle_time(){
	var auto_recon = get_by_name("auto_recon");
	
	get_by_id("idle_time").disabled = !auto_recon[2].checked;
}

function disable_dhcp_static_address(wan_type, obj1, obj2, obj3){
	obj1.disabled = wan_type[0].checked;
	obj2.disabled = wan_type[0].checked;
	obj3.disabled = wan_type[0].checked;
}

function disable_static_address(wan_type, obj1, obj2, obj3,obj4){
	var wan_type = disable_static_address.arguments[0];
	var cnt = disable_static_address.arguments.length;
	//alert(cnt);
	
	for(var i=1; i<cnt-1; i++)
	{
		disable_static_address.arguments[i].disabled = wan_type[0].checked;
	}
	
	//obj1.disabled = wan_type[0].checked;
	//obj2.disabled = wan_type[0].checked;
	//obj3.disabled = wan_type[0].checked;
	//obj4.disabled = wan_type[0].checked;
}

function disable_ip_address(wan_type, ip_obj){
	ip_obj.disabled = wan_type[0].checked;
}
		
function get_by_id(id){
	with(document){
		return getElementById(id);
	}
}

function get_by_name(name){
	with(document){
		return getElementsByName(name);
	}
}

function get_key_len_msg(which_key){
	switch(which_key){
    	case 1 :
    		return key1_len_error;    		
    	case 2 :
    		return key2_len_error;    		
    	case 3 :
    		return key3_len_error;    		
    	case 4 :
    		return key4_len_error;    
	}
}

function get_length(){
    var wep_key_len = get_by_id("wep_key_len");
    var wep_key_type = get_by_id("wlan0_wep_display");       
	var length = parseInt(wep_key_len.value);
		
	if (wep_key_type.value == "hex"){
	    length *= 2;
	}
	return length;
}

function get_row_data(obj, index){
	
    try {
    	return obj.cells[index].childNodes[0].data;
    }catch(e) {
        return ("");
    }
}

function send_submit(which_form){
	get_by_id(which_form).submit();
}

function show_key_len_error(key_len_msg, length){
	switch(length){
		case 5 :
			return key_len_msg[0];
		case 13 :
			return key_len_msg[1];
		case 10 :
			return key_len_msg[2];
		case 26:
			return key_len_msg[3];			
	}
}
/*
function show_words(word){	
	with(document){
		return write(word);
	}
}
*/
function show_words(idx) {
	//if(typeof(eval(idx)) == 'undefined')
	//	return;
	try {
		var id = eval(idx);
		document.write(which_lang[id]);
	} catch (e) {
		//alert('invalid idx: ' + idx);
	}
}

function get_words(idx) {
	//if(typeof(eval(idx)) == 'undefined')
	//	return '';
	try {
		var id = eval(idx);
		return which_lang[id];
	} catch (e) {
		//alert('invalid idx: ' + idx);
	}
	return '';
}

function show_wizard(name,type){
	//if(type != "user")
	if(type == "w")
		window.open(name,"Wizard","width=560,height=400")
}

function disable_all_items(){
	var input_objs = document.getElementsByTagName("input");
	var select_objs = document.getElementsByTagName("select");
	
	if (input_objs != null){				
		for (var i = 0; i < input_objs.length; i++){			
			input_objs[i].disabled = true;					
		}
	}	
	
	if (select_objs != null){				
		for (var i = 0; i < select_objs.length; i++){			
			select_objs[i].disabled = true;					
		}
	}
}

function enable_all_items(){
	var input_objs = document.getElementsByTagName("input");
	var select_objs = document.getElementsByTagName("select");
	
	if (input_objs != null){				
		for (var i = 0; i < input_objs.length; i++){			
			input_objs[i].disabled = false;					
		}
	}	
	
	if (select_objs != null){				
		for (var i = 0; i < select_objs.length; i++){			
			select_objs[i].disabled = false;					
		}
	}
}

/*
 * is_form_modified
 *	Check if a form's current values differ from saved values in custom attribute.
 *	Function skips elements with attribute: 'modified'= 'ignore'. 
 */
function is_form_modified(form_id)
{
	var df = document.forms[form_id];
	if (!df) {
		return false;
	}
	if (df.getAttribute('modified') == "true") {
		return true;
	}
	if (df.getAttribute('saved') != "true") {
		return false;
	}
	for (var i = 0, k = df.elements.length; i < k; i++) {
		var obj = df.elements[i];
		if (obj.getAttribute('modified') == 'ignore') {
			continue;
		}
		var name = obj.tagName.toLowerCase();
		if (name == 'input') {
			var type = obj.type.toLowerCase();
			if (((type == 'text') || (type == 'textarea') || (type == 'password') || (type == 'hidden')) &&
					!are_values_equal(obj.getAttribute('default'), obj.value)) {
				return true;
			} else if (((type == 'checkbox') || (type == 'radio')) && !are_values_equal(obj.getAttribute('default'), obj.checked)) {
				return true;
			}
		} else if (name == 'select') {
			var opt = obj.options;
			for (var j = 0; j < opt.length; j++) {
				if (!are_values_equal(opt[j].getAttribute('default'), opt[j].selected)) {
					return true;
				}
			}
		}
	}
	return false;
}

/*
 * set_form_default_values
 *	Save a form's current values to a custom attribute.
 */
function set_form_default_values(form_id)
{
	var df = document.forms[form_id];
	if (!df) {
		return;
	}
	for (var i = 0, k = df.elements.length; i < k; i++) {
		var obj = df.elements[i];
		if (obj.getAttribute('modified') == 'ignore') {
			continue;
		}
		var name = obj.tagName.toLowerCase();
		if (name == 'input') {
			var type = obj.type.toLowerCase();
			if ((type == 'text') || (type == 'textarea') || (type == 'password') || (type == 'hidden')) {
				obj.setAttribute('default', obj.value);
				/* Workaround for FF error when calling focus() from an input text element. */
				if (type == 'text') {
					obj.setAttribute('autocomplete', 'off');
				}
			} else if ((type == 'checkbox') || (type == 'radio')) {
				obj.setAttribute('default', obj.checked);
			}
		} else if (name == 'select') {
			var opt = obj.options;
			for (var j = 0; j < opt.length; j++) {
				opt[j].setAttribute('default', opt[j].selected);
			}
		}
	}
	df.setAttribute('saved', "true");
}


/*
 * are_values_equal()
 *	Compare values of types boolean, string and number. The types may be different.
 *	Returns true if values are equal.
 */
function are_values_equal(val1, val2)
{
	/* Make sure we can handle these values. */
	switch (typeof(val1)) {
	case 'boolean':
	case 'string':
	case 'number':
		break;
	default:
		// alert("are_values_equal does not handle the type '" + typeof(val1) + "' of val1 '" + val1 + "'.");
		return false;
	}

	switch (typeof(val2)) {
	case 'boolean':
		switch (typeof(val1)) {
		case 'boolean':
			return (val1 == val2);
		case 'string':
			if (val2) {
				return (val1 == "1" || val1.toLowerCase() == "true" || val1.toLowerCase() == "on");
			} else {
				return (val1 == "0" || val1.toLowerCase() == "false" || val1.toLowerCase() == "off");
			}
			break;
		case 'number':
			return (val1 == val2 * 1);
		}
		break;
	case 'string':
		switch (typeof(val1)) {
		case 'boolean':
			if (val1) {
				return (val2 == "1" || val2.toLowerCase() == "true" || val2.toLowerCase() == "on");
			} else {
				return (val2 == "0" || val2.toLowerCase() == "false" || val2.toLowerCase() == "off");
			}
			break;
		case 'string':
			if (val2 == "1" || val2.toLowerCase() == "true" || val2.toLowerCase() == "on") {
				return (val1 == "1" || val1.toLowerCase() == "true" || val1.toLowerCase() == "on");
			}
			if (val2 == "0" || val2.toLowerCase() == "false" || val2.toLowerCase() == "off") {
				return (val1 == "0" || val1.toLowerCase() == "false" || val1.toLowerCase() == "off");
			}
			return (val2 == val1);
		case 'number':
			if (val2 == "1" || val2.toLowerCase() == "true" || val2.toLowerCase() == "on") {
				return (val1 == 1);
			}
			if (val2 == "0" || val2.toLowerCase() == "false" || val2.toLowerCase() == "off") {
				return (val1 === 0);
			}
			return (val2 == val1 + "");
		}
		break;
	case 'number':
		switch (typeof(val1)) {
		case 'boolean':
			return (val1 * 1 == val2);
		case 'string':
			if (val1 == "1" || val1.toLowerCase() == "true" || val1.toLowerCase() == "on") {
				return (val2 == 1);
			}
			if (val1 == "0" || val1.toLowerCase() == "false" || val1.toLowerCase() == "off") {
				return (val2 === 0);
			}
			return (val1 == val2 + "");
		case 'number':
			return (val2 == val1);
		}
		break;
	default:
		return false;
	}
}

function jump_if(){
	for (var i = 0; i < document.forms.length; i++) {
		if (is_form_modified(document.forms[i].id)) {
			if (!confirm ("There is unsaved data on this page. Do you want to abandon it?\n" +
					  "If not, press Cancel and then click Save Settings.\n" +
					  "If so, press Ok.")) {
				return false;
			}
		}
	}
	return true;
}


function set_selectIndex(which_value, obj){
    for (var pp=0; pp<obj.options.length; pp++){
        if (which_value == obj.options[pp].value){
            obj.selectedIndex = pp;
            break;
        }
    }
}

function get_select_value(obj){
	return obj.options[obj.selectedIndex].value
}

function set_checked(which_value, obj){
	if(obj.length > 1){
		for(var pp=0;pp<obj.length;pp++){
			if(obj[pp].value == which_value){
				obj[pp].checked = true;
			}
		}
	}else{
		obj.checked = false;
		if(obj.value == which_value){
			obj.checked = true;
		}
	}
}

function get_checked_value(obj){
	if(obj.length > 1){
		for(pp=0;pp<obj.length;pp++){
			if(obj[pp].checked){
				return obj[pp].value;
			}
		}
	}else{
		if(obj.checked){
			return obj.value;
		}else{
			return 0;
		}
	}
}

function set_mac(mac, sp_w){
	var temp_mac = mac.split(sp_w);
	for (var i = 0; i < 6; i++){
		var obj = get_by_id("mac" + (i+1));
		obj.value = temp_mac[i];
	}
}

function addstr(input_msg)
{
	var last_msg = "";
	var str_location;
	var temp_str_1 = "";
	var temp_str_2 = "";
	var str_num = 0;
	temp_str_1 = addstr.arguments[0];
	while(1)
	{
		str_location = temp_str_1.indexOf("%s");
		if(str_location >= 0)
		{
			str_num++;
			temp_str_2 = temp_str_1.substring(0,str_location);
			last_msg += temp_str_2 + addstr.arguments[str_num];
			temp_str_1 = temp_str_1.substring(str_location+2,temp_str_1.length);
			continue;
		}
		if(str_location < 0)
		{
			last_msg += temp_str_1;
			break;
		}
	}
	return last_msg;
}

function replace_msg(obj_S){
	obj_D = new Array();
	for (i=0;i<obj_S.length;i++){
		obj_D[i] = addstr(obj_S[i], replace_msg.arguments[1]);
		obj_D[i] = obj_D[i].replace("%1n", replace_msg.arguments[2]);
		obj_D[i] = obj_D[i].replace("%2n", replace_msg.arguments[3]);
	}
	return obj_D;
}


function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/*
 * is_ipv4_valid
 *	Check is an IP address dotted string is valid.
 */
function is_ipv4_valid(ipaddr)
{
	var ip = ipv4_to_bytearray(ipaddr);
	if (ip === 0) {
		return false;
	}
	return true;
}

/*
 * ipv4_to_bytearray
 *	Convert an IPv4 address dotted string to a byte array
 */
function ipv4_to_bytearray(ipaddr)
{
	var ip = ipaddr + "";
	var got = ip.match (/^\s*(\d{1,3})\s*[.]\s*(\d{1,3})\s*[.]\s*(\d{1,3})\s*[.]\s*(\d{1,3})\s*$/);
	if (!got) {
		return 0;
	}
	var a = [];
	var q = 0;
	for (var i = 1; i <= 4; i++) {
		q = parseInt(got[i],10);
		if (q < 0 || q > 255) {
			return 0;
		}
		a[i-1] = q;
	}
	return a;
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function check_symbol(strOrg,strFind){
	var index = 0;
	index = strOrg.indexOf(strFind,index);
	return index;
}

function find_colon(strOrg,strFind)
{
        var index=0;
        var colon=0;
        index = strOrg.indexOf(strFind,index);
        while(index != -1)
        {
                colon++;
                index++;
                index = strOrg.indexOf(strFind,index);
        }
        return colon;
}

function ReplaceAll(strOrg,strFind,strReplace){
	var index = 0;
	while(strOrg.indexOf(strFind,index) != -1){
			strOrg = strOrg.replace(strFind,strReplace);
			index = strOrg.indexOf(strFind,index);
	}
	return strOrg;
}

function ReplaceRecover(ascii_string)
{
	var tans_lt = ReplaceAll(ascii_string,'&lt;','<');
	var tans_gt  = ReplaceAll(tans_lt,'&gt;','>');
	var tans_sp  = ReplaceAll(tans_gt,'&nbsp;',' ');
	var tans_mp = ReplaceAll(tans_sp,'&amp;','&');
	var tans_ot = ReplaceAll(tans_mp,'&quot;','"');
	return tans_ot;
}

function a_to_hex(inValue) {
	var outValue = "";
	if (inValue) {
		for (i = 0; i < inValue.length; i++) {
			if(inValue.charCodeAt(i).toString(16) < 10)
				outValue += 0;
			if(inValue.charCodeAt(i).toString(16) > 'a' && inValue.charCodeAt(i).toString(16) <= 'f')
				if(inValue.charCodeAt(i).toString(16).length == 1)
					outValue += 0;
			outValue += inValue.charCodeAt(i).toString(16);
		}
	}
	return outValue;
}

function hex_to_a(inValue){
	outValue = "";
	var k = '';
	for (i = 0; i < inValue.length; i++) {
		l = i % 2;
		if (l == 0)
			k += "%";
		k += inValue.substr(i, 1);
	}
	outValue = unescape(k);
	return outValue;
}

/* create xml request form */
function createRequest(){
	var XMLhttpObject = null;
	try{
		XMLhttpObject = new XMLHttpRequest();
	}catch(e){
		try{
			XMLhttpObject = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e){
			try{
				XMLhttpObject = new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){
				return null;
			}
		}
	}
	return XMLhttpObject;
}

/* set window size*/
function resizeInnerTo(w, h) {  
  if (parseInt(navigator.appVersion)>3) {
  	if (navigator.appName=="Netscape") {
		self.innerWidth=w;
		self.innerHeight=h;
   	}else {
   		window.resizeTo(w+20,h+75);
   	}	
  }
}		

function getTop(el)
{
var top = 0;
while (el) {
top += el.offsetTop;
el = el.offsetParent;
}
return top;
}

function getLeft(el)
{
var left = 0;
while (el) {
left += el.offsetLeft;
el = el.offsetParent;
}
return left;
}

function isHex(str) {
    var i;
    for(i = 0; i<str.length; i++) {
        var c = str.substring(i, i+1);
        if(("0" <= c && c <= "9") || ("a" <= c && c <= "f") || ("A" <= c && c <= "F")) {
            continue;
        }
        return false;
    }
    return true;
}

/**
 *	get_config_obj() : get config object
 *
 *	Parameter(s) :
 *		param : a parameter object, required elements
 *				are defined at the following.
 *				url:	a request url.
 *				arg:	arguments followed by url.
 *
 * Return : null
 *
 **/
function get_config_obj(param)
{
	if (param == null || param.url == null)
		return;

	var ajax_param = {
		type: 	"POST",
		async:	false,
		url: 	param.url,
		data: 	param.arg,
		dataType: "xml",
		success: function(data) {
			gConfig = data;
		},
		error: function(xhr, ajaxOptions, thrownError){
			if (xhr.status == 200) {
				var pos_s = xhr.responseText.indexOf('<script>');
				var pos_e = xhr.responseText.indexOf('</script>');
				if (pos_s > -1)
				{
					var sc = xhr.responseText.substring(pos_s+8, pos_e);
					eval(sc);
				}
				//gConfig = $(xhr.responseText);
				//var str = "<xml><login_Info></login_Info><model>DIR-675</model><hw_version>A1</hw_version><version>1.0</version><version_date>2010/05/18</version_date></xml>";
				//gConfig = $(str);
				//alert(gConfig.size());
				//alert(gConfig.find("model").text());
				//alert(config_val("hw_version"));
			} else {
				//alert(xhr.status);
				//alert(xhr.responseText);
			}
		}
	};
	
	$.ajax(ajax_param);
}

/**
 *	config_val() : get config value of the input tag name
 *
 *	Parameter(s) :
 *		name : tag name
 *
 * Return : the node value of the input tag name.
 *
 **/
function config_val(name)
{
	return get_node_value(gConfig, name);
}

function config_attr(name)
{
	return get_node_attribute(gConfig, name);
}

function config_inst(name)
{
	var attr = config_attr(name);
	var inst = attr.split(",");

	return inst;
}

/**
 *	config_str() : Get config string of the input tag name.
 *				   It will be shown on page directly.
 *
 *	Parameter(s) :
 *		name : tag name
 *
 * Return : the node string of the input tag name.
 *
 **/
function config_str(name)
{
	return document.write(get_node_value(gConfig, name));
}


function config_str_multi(name)
{
	if ($(gConfig).find(name).size() == 0)
		return null;
	var size = $(gConfig).find(name).size()
	var i=0;
	var r = new Array(size);
	
	for (i=0; i<size; i++) {
		r[i] = $(gConfig).find(name).eq(i).text();
	}
	return r;
}

function config_inst_multi(name)
{
	name += " ";
	if ($(gConfig).find(name).size() == 0)
		return null;

	var size = $(gConfig).find(name).size()
	var i=0;
	var r = new Array(size);

	for (i=0; i<size; i++) {
		//r[i] = $(gConfig).find(name).eq(i).attr("inst");
		var tmp = $(gConfig).find(name).eq(i).attr("inst");
		r[i] = tmp.split(",");
		//alert("test("+name +") ="+ $(gConfig).find(name).eq(i).attr("inst"));
	}

	return r;
}

function transValue(data)
{
	var value =0;
	data = data.toUpperCase();

	if(data == "0")
		value =0;
	else if(data =="1")
		value = 1;
	else if(data =="2")
		value = 2;
	else if(data =="3")
		value = 3;
	else if(data =="4")
		value = 4;
	else if(data =="5")
		value = 5;
	else if(data =="6")
		value = 6;
	else if(data =="7")
		value = 7;
	else if(data =="8")
		value = 8;
	else if(data =="9")
		value = 9;
	else if(data =="A")
		value = 10;
	else if(data =="B")
		value = 11;
	else if(data =="C")
		value = 12;
	else if(data =="D")
		value = 13;
	else if(data =="E")
		value = 14;
	else if(data =="F")
		value = 15;
	else
		value = 0;
	return value ;
}                     

function Find_word(strOrg,strFind){
	var index = 0;
	index = strOrg.indexOf(strFind,index);
	if (index > -1){
		return true;
	}
	return false;
}


function inst_array_to_string(inst)
{
	var size = inst.length;
	var string = "";
	for(var i=0; i<size; i++)
	{
		string += inst[i];
	}
	//alert("string = "+ string);
	return string;
}

/*function config_val_by_inst(obj_name, param_name, inst)
{
	if ($(gConfig).find(name).size() == 0)
		return null;
	var size = $(gConfig).find(name).size()
	var i=0;

	for
}*/

/**
 *	get_router_info
 *
 *	return:	a object has the following elements.
 *
 *	parameters:
 *		hw_ver:	router's hardware version
 *		sw_ver:	router's firmware version
 *		model:	device model
 *		login_info:	current user's grant
 */
function get_router_info() 
{
	var param1 = {
		url: "misc.ccp",
		arg: "action=getmisc"
	};
	get_config_obj(param1);
	
	var info = {
		'hw_ver':		config_val("hw_version"),
		'fw_ver':		config_val("version"),
		'ver_date':		config_val("version_date"),
		'model':		config_val("model"),
		'login_info':	config_val("login_Info"),
		'cli_mac':		config_val("cli_mac"),
		'lanIP':		config_val('lan_ip'),
		'lanMask':		config_val('lan_mask')
	};
	if(info.model)
		document.title = document.title.replace("modelName", info.model);

	return info;
}



/**
 *	getUrlEntry
 *	
 *	return: string: 	value of input key
 *			null: 		not found
 *
 *	parameters:
 *		key:		a string we want to find in url entry
 */
function getUrlEntry(key)
{
	//var search=location.search.slice(1);//得到get方式提交的查詢字串
	//var my_id=search.split("&");
	var my_id = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	if (my_id == null) {
		alert('Unsupport browser');
		return 0;
	}

	for(var i=0;i<my_id.length;i++)
	{
		var ar=my_id[i].split("=");
		if(ar[0]==key)
		{
			return ar[1];
		}
	}
	
	return null;
} 

function changeMenuClass(tbObj, act)
{
	var tds = tbObj.getElementsByTagName('td');
	
	for(var i = 0; i < tds.length; i++){
		var className = tds[i].className;
		
		if (act == 'in') {
			if (className.indexOf('menu_sel_') != -1)
				continue;
			className = className.replace('menu_', 'menu_sel_');
		} else {
			className = className.replace('menu_sel_', 'menu_');
		}
		
		tds[i].className = className;
	}
}

function checkIPTVPort()
{
	var port1Chk = (get_by_id("port1").checked == true)? 1:0;
	var port2Chk = (get_by_id("port2").checked == true)? 1:0;
	var port3Chk = (get_by_id("port3").checked == true)? 1:0;
	var port4Chk = (get_by_id("port4").checked == true)? 1:0;

	if(port1Chk && port2Chk && port3Chk && port4Chk)
	{
		alert("Cannot assign all LAN ports for IPTV");
		return 0;
	}
		
	return 1;
}

function checkIPTVPortSet(val)
{
	for(var i=0; i<4; i++)
	{
		set_checked(val.charAt(i), get_by_id("port"+(i+1)));
	}
}

function _isNumeric(str) {
	    var i;
	    for(i = 0; i<str.length; i++) {
	        var c = str.substring(i, i+1);
	        if("0" <= c && c <= "9") {
	            continue;
	        }
	        return false;
	    }
	    return true;
}

function escape(text)
{
	var str = '';
	var chr = new Array('[', '<', '>', '&', '\"', '\'', ']');
	if (text == null)
		return null;

	for (var i=0; i<text.length; i++) {
		var found = false;
		for (var j=0; j<chr.length; j++) {
			if (text.charAt(i) == chr[j]) {
				found = true;
				break;
			}
		}
		if (found) {
			str += ('&#'+text.charCodeAt(i)+';');
		} else {
			str += text.charAt(i);
		}
	}
	return str;
	//return text.replace(/[<>\&\"\']/g, function(cc) { return '&#' + cc.charCodeAt(0) + ';'; });
}

function check_timeline(timeline)
{
	var prev_port = -1;
	var prev_stat = 0;
	
	if (timeline == null || timeline == '')
		return true;

	for (var i=0; i<timeline.length; i+=2) {
		if (prev_port == parseInt(timeline[i]))
			return false;
		
		if (prev_stat == 1 && timeline[i+1] != 2)
			return false;
		
		prev_port = timeline[i];
		if (timeline[i+1] != 0)
			prev_stat = timeline[i+1];
	}
	
	return true;
}

/**
 * the following 2 functions are used to check if port range is overlapped
 *
 * add_into_timeline()
 * 
 * parameters:
 * 		timeline: 	an input variable for recording all port range.
 *		port_s:		start port of the range.
 *		port_e:		end port of the range. (if single port, this parameter should be empty or null)
 *
 * return:
 * 		timeline:	timeline for the following reference.
 */
function add_into_timeline(timeline, port_s, port_e)
{
	var cur_state = 0;
	
	// inital
	if (timeline == null || timeline == '') {
		if (port_e == null || port_e == '') {
			timeline = new Array(2);
			timeline[0] = port_s;
			timeline[1] = 0;			// single port
		} else {
			timeline = new Array(4);
			timeline[0] = port_s;
			timeline[1] = 1;			// up
			timeline[2] = port_e;
			timeline[3] = 2;			// down
		}
		return timeline;				// successfully added into timeline
	}
	
	// check if there exist something wrong in timeline
	var rec_port_s = 0;
	var length = timeline.length;
	for (var i=0; i<length; i+=2) {
		// add port_s first
		if (parseInt(timeline[i]) > parseInt(port_s) && rec_port_s == 0) {
			if (port_e == null || port_e == '')	{ 	//single port
				timeline.splice(i, 0, 0);			// add state first
				timeline.splice(i, 0, port_s);		// add port number
				return timeline;					// successfully added into timeline
			} else {
				var addPort_e = false;
				rec_port_s = 1;
				timeline.splice(i, 0, 1);			// add state first
				timeline.splice(i, 0, port_s);		// add port number
				for (var j=i; j<timeline.length; j+=2) {
					if (parseInt(timeline[j]) > parseInt(port_e)) {
						timeline.splice(j, 0, 2);			// add state first
						timeline.splice(j, 0, port_e);		// add port number
						addPort_e = true;
						return timeline;
					}
				}
				
				if (addPort_e == false) {
					var append_idx = timeline.length;
					timeline.splice(append_idx, 0, 2);
					timeline.splice(append_idx, 0, port_e);
					return timeline;
				}
				continue;
			}
		}
		
		if (rec_port_s == 0)
			continue;
		
		// add port_e
		if (parseInt(timeline[i]) > parseInt(port_e)) {
			timeline.splice(i, 0, 2);			// add state first
			timeline.splice(i, 0, port_e);	// add port number
			break;
		}
	}
	
	if (timeline.length == length) {			// append to last of timeline
		if (port_e == null || port_e == '') {	// single port
			timeline.splice(length, 0, 0);
			timeline.splice(length, 0, port_s);
		} else {
			timeline.splice(length, 0, 2);
			timeline.splice(length, 0, port_e);
			timeline.splice(length, 0, 1);
			timeline.splice(length, 0, port_s);
		}
	}
	
	return timeline;
}

function format_url(temp_url)
{
		if (temp_url != "")
		{
			if(temp_url.indexOf("http://") != -1)
			{
				temp_url = temp_url.substring("http://".length);
			}
			if(temp_url.lastIndexOf("/")  != -1)
			{
				temp_url = temp_url.substring(0, temp_url.lastIndexOf("/"));
			}
		}
		
		return temp_url;
}

function urlencode(text){
	text = text.toString();
	var matches = text.match(/[\x90-\xFF]/g);
	if (matches)
	{
		for (var matchid = 0; matchid < matches.length; matchid++)
		{
			var char_code = matches[matchid].charCodeAt(0);
			text = text.replace(matches[matchid], '%u00' + (char_code & 0xFF).toString(16).toUpperCase());
		}
	}
	//return escape(text).replace(/\+/g, "%2B");
	return text.replace(/[<>\&\"\'\=\ \%]/g, function(c) { return '%' + (c.charCodeAt(0) & 0xFF).toString(16).toUpperCase() + ''; });
}

function check_wa_cookie()
{
	var waTok = getCookie('wa_tok');  
	if (waTok == null || waTok == '0') {
		document.cookie = 'hasLogin=0;';
		setTimeout(function() {
			location.replace('wa_login.htm');
		}, 0);
	}
}

function getCookieValue(val) {
	if ((endOfCookie = document.cookie.indexOf(";", val)) == -1) {
		endOfCookie = document.cookie.length;
	}
	return unescape(document.cookie.substring(val,endOfCookie));
}

function getCookie(name) {
	if (document.cookie == null)
		return null
	
	var ckLen = document.cookie.length;
	var sName = name + "=";
	var cookieLen = sName.length;
	var x = 0;
	while (x <= ckLen) {
		var y = (x + cookieLen);
		if (document.cookie.substring(x, y) == sName)
			return getCookieValue(y);
		x = document.cookie.indexOf(" ", x) + 1;
		if (x == 0){
			break;
		}
	}
	return null;
}