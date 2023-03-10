//Version=1.01b04
//Language=ENGLISH
//Date=Mon, 17, Sep, 2012
//Merged=FALSE
//Merged Fw=FALSE
var msg = new Array ( //_NO_SHARE_NAME_
	"Quit setup wizard and discard settings?", //MSG0
	"The Verify password does not match the New password.", //MSG1
	"The IP address and the %s are not in the same domain.", //MSG2
	"The %s and the LAN IP address are not in the same domain.", //MSG3
	"The Ending IP address must be greater than the Starting IP address.", //MSG4
	"Invalid MAC address.  Please verify. The legal characters of MAC address should be 0~9, A~F, or a~f.", //MSG5
	"SSID can not be empty.", //MSG6
	"The IP Address and the Gateway IP Address are not in the same subnet.", //MSG7
	"The confirmed password does not match the new Admin password.", //MSG8
	"The confirmed password does not match the new User password.", //MSG9
	"The selected WEP key field cannot be blank.", //MSG10
	"The Confirmed Passphrase does not match the Passphrase.", //MSG11
	"The length of the Passphrase must be between 8 and 64 characters.", //MSG12
	"The Passphrase must be 0~9, A~F, or a~f.", //MSG13
	"Please enter another SMTP Server or IP Address.", //MSG14
	"Please enter a valid email Address.", //MSG15
	"Are you sure that you want to delete this %s?", //MSG16
	"Load settings from a saved configuration file?", //MSG17
	"Please enter another name.", //MSG18
	"Please enter another keyword.", //MSG19
	"---This keyword is already existing in the keyword list.", //MSG20
	"Are you sure that you want to delete this IP filter?", //MSG21
	"", //MSG22
	"This %s is already existing in the list.", //MSG23
	"Are you sure that you want to delete this protocol filter?", //MSG24
	"Please enter another port number.", //MSG25
	"Please enter another Private Port number.", //MSG26
	"Please enter another Public Port number.", //MSG27
	"%sPort conflict.\"", //MSG28
	"Are you sure that you want to delete this special ap?", //MSG29
	"Port range is wrong.Please enter the Trigger Port number between 1-65534", //MSG30
	"Please enter another Incoming Port number.", //MSG31
	"Do you want to restart this router?", //MSG32
	"Please select a saved configuration file to upload.", //MSG33
	"Restore to Factory Default Settings?", //MSG34
	"Please select a file to upgrade the router.", //MSG35
	"Please enter a host name or an IP address.", //MSG36
	"Are you sure that you want to delete this firewall rule?", //MSG37
	"The Community can not be blank.", //MSG38
	"The Host Name must be 0~9, A~Z, or a~z.", //MSG39
	"The Server IP Address entered is invalid", //MSG40
	"The %s has the same name.", //MSG41
	"The %s has the same MAC.", //MSG42
	"%s is conflicted with LAN IP address, please enter again.", //MSG43
	"Rule name can not be empty string!", //MSG44
	"Nothing has changed, save anyway?", //MSG45
	"The IP Address and the reservation IP Address are not in the same subnet.", //MSG46
	"The MAC Address entered is invalid.", //MSG47
	"Are you sure that you want to delete", //MSG48
	"%s is conflicted with LAN IP address, please enter again.", //MSG49
	"Please enter another Name", //MSG50
	"Please enter user name", //MSG51
	"Please enter another start port number.", //MSG52
	"Please enter another end port number.", //MSG53
	"Please select a action type", //MSG54
	"Please press the Apply button to make the change effective.", //MSG55
	"You can't choose other key when WPS enable", //MSG56
	"Apply setting failed. There must be at least one MAC address in the MAC Table.", //MSG57
	"Apply setting failed. There must be at least one MAC address in the MAC Table. To delete the last MAC address in the MAC Table, please \"disable\" the MAC Filter first.", //MSG58
	"Invalid MAC address. Please verify.The legal characters of MAC address should be 0~9, A~F, or a~f.", //MSG59
	"Please specify an ip address to IP Range Start of LAN instead of *", //MSG60
	"" //MAX
);
var MSG0=0;
var MSG1=1;
var MSG2=2;
var MSG3=3;
var MSG4=4;
var MSG5=5;
var MSG6=6;
var MSG7=7;
var MSG8=8;
var MSG9=9;
var MSG10=10;
var MSG11=11;
var MSG12=12;
var MSG13=13;
var MSG14=14;
var MSG15=15;
var MSG16=16;
var MSG17=17;
var MSG18=18;
var MSG19=19;
var MSG20=20;
var MSG21=21;
var MSG22=22;
var MSG23=23;
var MSG24=24;
var MSG25=25;
var MSG26=26;
var MSG27=27;
var MSG28=28;
var MSG29=29;
var MSG30=30;
var MSG31=31;
var MSG32=32;
var MSG33=33;
var MSG34=34;
var MSG35=35;
var MSG36=36;
var MSG37=37;
var MSG38=38;
var MSG39=39;
var MSG40=40;
var MSG41=41;
var MSG42=42;
var MSG43=43;
var MSG44=44;
var MSG45=45;
var MSG46=46;
var MSG47=47;
var MSG48=48;
var MSG49=49;
var MSG50=50;
var MSG51=51;
var MSG52=52;
var MSG53=53;
var MSG54=54;
var MSG55=55;
var MSG56=56;
var MSG57=57;
var MSG58=58;
var MSG59=59;
var MSG60=60;

var all_ip_addr_msg = new Array ( //_NO_SHARE_NAME_
	"The %s is an invalid address.", //INVALID_IP
	"The %s can not be zero.", //ZERO_IP
	"The 1st address of %s must be an integer.", //FIRST_IP_ERROR
	"The 2nd address of %s must be an integer.", //SECOND_IP_ERROR
	"The 3rd address of %s must be an integer.", //THIRD_IP_ERROR
	"The 4th address of %s must be an integer.", //FOURTH_IP_ERROR
	"The 1st range of %s must be between ", //FIRST_RANGE_ERROR
	"The 2nd range of %s must be between ", //SECOND_RANGE_ERROR
	"The 3rd range of %s must be between ", //THIRD_RANGE_ERROR
	"The 4th range of %s must be between ", //FOURTH_RANGE_ERROR
	"The port of %s is invalid.", //RADIUS_SERVER_PORT_ERROR
	"The Shared Secret of %s can not be empty.", //RADIUS_SERVER_SECRET_ERROR
	"The %s can't allow enter loopback IP or multicase IP (127.x.x.x, 224.x.x.x ~ 239.x.x.x).", //MULTICASE_IP_ERROR
	"" //MAX
);
var INVALID_IP=0;
var ZERO_IP=1;
var FIRST_IP_ERROR=2;
var SECOND_IP_ERROR=3;
var THIRD_IP_ERROR=4;
var FOURTH_IP_ERROR=5;
var FIRST_RANGE_ERROR=6;
var SECOND_RANGE_ERROR=7;
var THIRD_RANGE_ERROR=8;
var FOURTH_RANGE_ERROR=9;
var RADIUS_SERVER_PORT_ERROR=10;
var RADIUS_SERVER_SECRET_ERROR=11;
var MULTICASE_IP_ERROR=12;

var subnet_mask_msg = new Array ( //_SHARE_NAME_
	"The Subnet Mask is an invalid address.", //INVALID_IP
	"The Subnet Mask can not be zero.", //ZERO_IP
	"The 1st address of Subnet Mask must be an integer.", //FIRST_IP_ERROR
	"The 2nd address of Subnet Mask must be an integer.", //SECOND_IP_ERROR
	"The 3rd address of Subnet Mask must be an integer.", //THIRD_IP_ERROR
	"The 4th address of Subnet Mask must be an integer.", //FOURTH_IP_ERROR
	"The 1st range of Subnet Mask must be 128, 192, 224, 240, 248, 252, 254, 255.", //FIRST_RANGE_ERROR
	"The 2nd range of Subnet Mask must be 0, 128, 192, 224, 240, 248, 252, 254, 255.", //SECOND_RANGE_ERROR
	"The 3rd range of Subnet Mask must be 0, 128, 192, 224, 240, 248, 252, 254, 255.", //THIRD_RANGE_ERROR
	"The 4th range of Subnet Mask must be 0, 128, 192, 224, 240, 248, 252.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var src_start_ip_msg = new Array ( //_SHARE_NAME_
	"The Source Start IP address is an invalid address.", //INVALID_IP
	"The Source Start IP address can not be zero.", //ZERO_IP
	"The 1st address of Source Start IP address must be an integer.", //FIRST_IP_ERROR
	"The 2nd address of Source Start IP address must be an integer.", //SECOND_IP_ERROR
	"The 3rd address of Source Start IP address must be an integer.", //THIRD_IP_ERROR
	"The 4th address of Source Start IP address must be an integer.", //FOURTH_IP_ERROR
	"The 1st range of Source Start IP address must be between 1 to 254.", //FIRST_RANGE_ERROR
	"The 2nd range of Source Start IP address must be between 0 to 254.", //SECOND_RANGE_ERROR
	"The 3rd range of Source Start IP address must be between 0 to 254.", //THIRD_RANGE_ERROR
	"The 4th range of Source Start IP address must be between 1 to 254.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var src_end_ip_msg = new Array ( //_SHARE_NAME_
	"The Source End IP address is an invalid address.", //INVALID_IP
	"The Source End IP address can not be zero.", //ZERO_IP
	"The 1st address of Source End IP address must be an integer.", //FIRST_IP_ERROR
	"The 2nd address of Source End IP address must be an integer.", //SECOND_IP_ERROR
	"The 3rd address of Source End IP address must be an integer.", //THIRD_IP_ERROR
	"The 4th address of Source End IP address must be an integer.", //FOURTH_IP_ERROR
	"The 1st range of Source End IP address must be between 1 to 254.", //FIRST_RANGE_ERROR
	"The 2nd range of Source End IP address must be between 0 to 254.", //SECOND_RANGE_ERROR
	"The 3rd range of Source End IP address must be between 0 to 254.", //THIRD_RANGE_ERROR
	"The 4th range of Source End IP address must be between 1 to 254.", //FOURTH_RANGE_ERROR
	"The Source Ending IP address must be greater than the Source Starting IP address.", //START_IP_BIG_THAN_END_IP
	"" //MAX
);
	
var dst_start_ip_msg = new Array ( //_SHARE_NAME_
	"The Destination Start IP address is an invalid address.", //INVALID_IP
	"The Destination Start IP address can not be zero.", //ZERO_IP
	"The 1st address of Destination Start IP address must be an integer.", //FIRST_IP_ERROR
	"The 2nd address of Destination Start IP address must be an integer.", //SECOND_IP_ERROR
	"The 3rd address of Destination Start IP address must be an integer.", //THIRD_IP_ERROR
	"The 4th address of Destination Start IP address must be an integer.", //FOURTH_IP_ERROR
	"The 1st range of Destination Start IP address must be between 1 to 254.", //FIRST_RANGE_ERROR
	"The 2nd range of Destination Start IP address must be between 0 to 254.", //SECOND_RANGE_ERROR
	"The 3rd range of Destination Start IP address must be between 0 to 254.", //THIRD_RANGE_ERROR
	"The 4th range of Destination Start IP address must be between 1 to 254.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var dst_end_ip_msg = new Array ( //_SHARE_NAME_
	"The Destination End IP address is an invalid address.", //INVALID_IP
	"The Destination End IP address can not be zero.", //ZERO_IP
	"The 1st address of Destination End IP address must be an integer.", //FIRST_IP_ERROR
	"The 2nd address of Destination End IP address must be an integer.", //SECOND_IP_ERROR
	"The 3rd address of Destination End IP address must be an integer.", //THIRD_IP_ERROR
	"The 4th address of Destination End IP address must be an integer.", //FOURTH_IP_ERROR
	"The 1st range of Destination End IP address must be between 1 to 254.", //FIRST_RANGE_ERROR
	"The 2nd range of Destination End IP address must be between 0 to 254.", //SECOND_RANGE_ERROR
	"The 3rd range of Destination End IP address must be between 0 to 254.", //THIRD_RANGE_ERROR
	"The 4th range of Destination End IP address must be between 1 to 254.", //FOURTH_RANGE_ERROR
	"The Destination Ending IP address must be greater than the Destination Starting IP address.", //START_IP_BIG_THAN_END_IP
	"" //MAX
);
	
var syslog_server_msg = new Array ( //_SHARE_NAME_
	"The Syslog Server is an invalid address.", //INVALID_IP
	"The Syslog Server can not be zero.", //ZERO_IP
	"The 1st address of Syslog Server must be an integer.", //FIRST_IP_ERROR
	"The 2nd address of Syslog Server must be an integer.", //SECOND_IP_ERROR
	"The 3rd address of Syslog Server must be an integer.", //THIRD_IP_ERROR
	"The 4th address of Syslog Server must be an integer.", //FOURTH_IP_ERROR
	"The 1st range of Syslog Server must be between 1 to 254.", //FIRST_RANGE_ERROR
	"The 2nd range of Syslog Server must be between 0 to 255.", //SECOND_RANGE_ERROR
	"The 3rd range of Syslog Server must be between 0 to 255.", //THIRD_RANGE_ERROR
	"The 4th range of Syslog Server must be between 1 to 254.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var http_form_ip_addr_msg = new Array ( //_SHARE_NAME_
	"The From IP address is an invalid address in the HTTP section.", //INVALID_IP
	"The From IP address can not be zero in the HTTP section.", //ZERO_IP
	"The 1st address of From IP address must be an integer in the HTTP section.", //FIRST_IP_ERROR
	"The 2nd address of From IP address must be an integer in the HTTP section.", //SECOND_IP_ERROR
	"The 3rd address of From IP address must be an integer in the HTTP section.", //THIRD_IP_ERROR
	"The 4th address of From IP address must be an integer in the HTTP section.", //FOURTH_IP_ERROR
	"The 1st range of From IP address must be between 1 to 254 in the HTTP section.", //FIRST_RANGE_ERROR
	"The 2nd range of From IP address must be between 0 to 255 in the HTTP section.", //SECOND_RANGE_ERROR
	"The 3rd range of From IP address must be between 0 to 255 in the HTTP section.", //THIRD_RANGE_ERROR
	"The 4th range of From IP address must be between 1 to 254 in the HTTP section.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var http_to_ip_addr_msg = new Array ( //_SHARE_NAME_
	"The To IP address is an invalid address in the HTTP section.", //INVALID_IP
	"The To IP address can not be zero in the HTTP section.", //ZERO_IP
	"The 1st address of To IP address must be an integer in the HTTP section.", //FIRST_IP_ERROR
	"The 2nd address of To IP address must be an integer in the HTTP section.", //SECOND_IP_ERROR
	"The 3rd address of To IP address must be an integer in the HTTP section.", //THIRD_IP_ERROR
	"The 4th address of To IP address must be an integer in the HTTP section.", //FOURTH_IP_ERROR
	"The 1st range of To IP address must be between 1 to 254 in the HTTP section.", //FIRST_RANGE_ERROR
	"The 2nd range of To IP address must be between 0 to 255 in the HTTP section.", //SECOND_RANGE_ERROR
	"The 3rd range of To IP address must be between 0 to 255 in the HTTP section.", //THIRD_RANGE_ERROR
	"The 4th range of To IP address must be between 1 to 254 in the HTTP section.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var allow_form_ip_addr_msg = new Array ( //_SHARE_NAME_
	"The From IP address is an invalid address in the Allow to Ping WAN port section.", //INVALID_IP
	"The From IP address can not be zero in the Allow to Ping WAN port section.", //ZERO_IP
	"The 1st address of From IP address must be an integer in the Allow to Ping WAN port section.", //FIRST_IP_ERROR
	"The 2nd address of From IP address must be an integer in the Allow to Ping WAN port section.", //SECOND_IP_ERROR
	"The 3rd address of From IP address must be an integer in the Allow to Ping WAN port section.", //THIRD_IP_ERROR
	"The 4th address of From IP address must be an integer in the Allow to Ping WAN port section.", //FOURTH_IP_ERROR
	"The 1st range of From IP address must be between 1 to 254 in the Allow to Ping WAN port section.", //FIRST_RANGE_ERROR
	"The 2nd range of From IP address must be between 0 to 255 in the Allow to Ping WAN port section.", //SECOND_RANGE_ERROR
	"The 3rd range of From IP address must be between 0 to 255 in the Allow to Ping WAN port section.", //THIRD_RANGE_ERROR
	"The 4th range of From IP address must be between 1 to 254 in the Allow to Ping WAN port section.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var allow_to_ip_addr_msg = new Array ( //_SHARE_NAME_
	"The To IP address is an invalid address in the Allow to Ping WAN port section.", //INVALID_IP
	"The To IP address can not be zero in the Allow to Ping WAN port section.", //ZERO_IP
	"The 1st address of To IP address must be an integer in the Allow to Ping WAN port section.", //FIRST_IP_ERROR
	"The 2nd address of To IP address must be an integer in the Allow to Ping WAN port section.", //SECOND_IP_ERROR
	"The 3rd address of To IP address must be an integer in the Allow to Ping WAN port section.", //THIRD_IP_ERROR
	"The 4th address of To IP address must be an integer in the Allow to Ping WAN port section.", //FOURTH_IP_ERROR
	"The 1st range of To IP address must be between 1 to 254 in the Allow to Ping WAN port section.", //FIRST_RANGE_ERROR
	"The 2nd range of To IP address must be between 0 to 255 in the Allow to Ping WAN port section.", //SECOND_RANGE_ERROR
	"The 3rd range of To IP address must be between 0 to 255 in the Allow to Ping WAN port section.", //THIRD_RANGE_ERROR
	"The 4th range of To IP address must be between 1 to 254 in the Allow to Ping WAN port section.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var trap1_addr_msg = new Array ( //_SHARE_NAME_
	"The Trap Receiver 1 address is an invalid address.", //INVALID_IP
	"The Trap Receiver 1 address can not be zero.", //ZERO_IP
	"The 1st address of Trap Receiver 1 address must be an integer.", //FIRST_IP_ERROR
	"The 2nd address of Trap Receiver 1 address must be an integer.", //SECOND_IP_ERROR
	"The 3rd address of Trap Receiver 1 address must be an integer.", //THIRD_IP_ERROR
	"The 4th address of Trap Receiver 1 address must be an integer.", //FOURTH_IP_ERROR
	"The 1st range of Trap Receiver 1 address must be between 1 to 254.", //FIRST_RANGE_ERROR
	"The 2nd range of Trap Receiver 1 address must be between 0 to 255.", //SECOND_RANGE_ERROR
	"The 3rd range of Trap Receiver 1 address must be between 0 to 255.", //THIRD_RANGE_ERROR
	"The 4th range of Trap Receiver 1 address must be between 1 to 254.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var trap2_addr_msg = new Array ( //_SHARE_NAME_
	"The Trap Receiver 2 address is an invalid address.", //INVALID_IP
	"The Trap Receiver 2 address can not be zero.", //ZERO_IP
	"The 1st address of Trap Receiver 2 address must be an integer.", //FIRST_IP_ERROR
	"The 2nd address of Trap Receiver 2 address must be an integer.", //SECOND_IP_ERROR
	"The 3rd address of Trap Receiver 2 address must be an integer.", //THIRD_IP_ERROR
	"The 4th address of Trap Receiver 2 address must be an integer.", //FOURTH_IP_ERROR
	"The 1st range of Trap Receiver 2 address must be between 1 to 254.", //FIRST_RANGE_ERROR
	"The 2nd range of Trap Receiver 2 address must be between 0 to 255.", //SECOND_RANGE_ERROR
	"The 3rd range of Trap Receiver 2 address must be between 0 to 255.", //THIRD_RANGE_ERROR
	"The 4th range of Trap Receiver 2 address must be between 1 to 254.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var trap3_addr_msg = new Array ( //_SHARE_NAME_
	"The Trap Receiver 3 address is an invalid address.", //INVALID_IP
	"The Trap Receiver 3 address can not be zero.", //ZERO_IP
	"The 1st address of Trap Receiver 3 address must be an integer.", //FIRST_IP_ERROR
	"The 2nd address of Trap Receiver 3 address must be an integer.", //SECOND_IP_ERROR
	"The 3rd address of Trap Receiver 3 address must be an integer.", //THIRD_IP_ERROR
	"The 4th address of Trap Receiver 3 address must be an integer.", //FOURTH_IP_ERROR
	"The 1st range of Trap Receiver 3 address must be between 1 to 254.", //FIRST_RANGE_ERROR
	"The 2nd range of Trap Receiver 3 address must be between 0 to 255.", //SECOND_RANGE_ERROR
	"The 3rd range of Trap Receiver 3 address must be between 0 to 255.", //THIRD_RANGE_ERROR
	"The 4th range of Trap Receiver 3 address must be between 1 to 254.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var check_num_msg = new Array ( //_NO_SHARE_NAME_
	"Please enter another %s value.", //EMPTY_VARIBLE_ERROR
	"The value of %s must be numeric!", //INVALID_VARIBLE_ERROR
	"The range of %s is %1n ~ %2n.", //VARIBLE_RANGE_ERROR
	"The value of %s is even number only.", //EVEN_NUMBER_ERROR
	"" //MAX
);
var EMPTY_VARIBLE_ERROR=0;
var INVALID_VARIBLE_ERROR=1;
var VARIBLE_RANGE_ERROR=2;
var EVEN_NUMBER_ERROR=3;

var metric_msg = new Array ( //_SHARE_NAME_
	"Please enter another Metric value.", //EMPTY_VARIBLE_ERROR
	"The value of Metric must be an integer.", //INVALID_VARIBLE_ERROR
	"The range of Metric is 1 ~ 15.", //VARIBLE_RANGE_ERROR
	"" //MAX
);
	
var key1_len_error = new Array ( //_SHARE_NAME_
	"The length of Key1 must be 5 characters.", //wep_key_len_err_1
	"The length of Key1 must be 13 characters.", //wep_key_len_err_2
	"The length of Key1 must be 10 characters.", //wep_key_len_err_3
	"The length of Key1 must be 26 characters.", //wep_key_len_err_4
	"" //MAX
);
	
var key2_len_error = new Array ( //_SHARE_NAME_
	"The length of Key2 must be 5 characters.", //wep_key_len_err_1
	"The length of Key2 must be 13 characters.", //wep_key_len_err_2
	"The length of Key2 must be 10 characters.", //wep_key_len_err_3
	"The length of Key2 must be 26 characters.", //wep_key_len_err_4
	"" //MAX
);
	
var key3_len_error = new Array ( //_SHARE_NAME_
	"The length of Key3 must be 5 characters.", //wep_key_len_err_1
	"The length of Key3 must be 13 characters.", //wep_key_len_err_2
	"The length of Key3 must be 10 characters.", //wep_key_len_err_3
	"The length of Key3 must be 26 characters.", //wep_key_len_err_4
	"" //MAX
);
	
var key4_len_error = new Array ( //_SHARE_NAME_
	"The length of Key4 must be 5 characters.", //wep_key_len_err_1
	"The length of Key4 must be 13 characters.", //wep_key_len_err_2
	"The length of Key4 must be 10 characters.", //wep_key_len_err_3
	"The length of Key4 must be 26 characters.", //wep_key_len_err_4
	"" //MAX
);
	
var illegal_key_error = new Array ( //_SHARE_NAME_
	"Key1 is wrong, the legal characters are 0~9, A~F, or a~f.", //wep_key_len_err_1
	"Key2 is wrong, the legal characters are 0~9, A~F, or a~f.", //wep_key_len_err_2
	"Key3 is wrong, the legal characters are 0~9, A~F, or a~f.", //wep_key_len_err_3
	"Key4 is wrong, the legal characters are 0~9, A~F, or a~f.", //wep_key_len_err_4
	"" //MAX
);
	
var which_lang = new Array ( //_NO_SHARE_NAME_
	"128-bit", //_128bit 
	"1st", //_1st 
	"20 MHz", //_20MHz 
	"2nd", //_2nd 
	"3rd", //_3rd 
	"4th", //_4th 
	"5th", //_5th 
	"64-bit", //_64bit 
	"6th", //_6th 
	"Mixed 802.11b, 802.11g", //_80211bg 
	"802.11b/g mixed mode", //_80211bgMix 
	"Mixed 802.11n, 802.11g and 802.11b", //_80211bgn 
	"802.11b/g/n mixed mode", //_80211bgnMix 
	"802.11b only mode", //_80211bOnly 
	"802.11g only mode", //_80211gOnly 
	"802.11 Mode", //_80211mode 
	"802.11n only mode", //_80211nOnly 
	"Access", //_Access 
	"Access Control", //_AccessCon 
	"Action", //_Action 
	"Add", //_Add 
	"Add Static DHCP", //_AddStaticDHCP 
	"Administrator", //_Admin 
	"Admin Password", //_AdmPwd 
	"Advanced", //_Advanced 
	"AES", //_AES 
	"Allow", //_Allow 
	"Allow to Ping WAN port", //_AllowPingWAN 
	"Always On", //_AlwaysOn 
	"Always-on", //_AlwaysOn 
	"AM", //_AM 
	"Apply", //_Apply 
	"Apr", //_Apr 
	"ASCII", //_ASCII 
	"at", //_at 
	"Attacks", //_Attacks 
	"Aug", //_Aug 
	"Authentication", //_Authentication 
	"Auth Server", //_AuthSer 
	"Authentication Type", //_AuthType 
	"Auto", //_Auto 
	"Auto 20/40 MHz", //_Auto20_40MHz 
	"Auto Channel", //_AutoChannel 
	"Automatic", //_Automatic 
	"Auto-reconnect", //_AutoReconn 
	"Back", //_Back
	"Basic", //_Basic 
	"Beacon Interval", //_BeaconInterval 
	"BigPond Cable", //_BigPondCable
	"Both", //_Both 
	"bytes", //_bytes 
	"Cancel", //_Cancel 
	"Channel", //_Channel 
	"Channel Width", //_ChannelWidth 
	"Choose Time Zone", //_ChooseTimeZone 
	"Clear", //_Clear 
	"Clear Log", //_ClearLog 
	"Client PIN Number", //_ClientPIN 
	"Clone MAC Address", //_CloneMAC 
	"Close", //_Close 
	"Closed", //_Closed 
	"Community", //_Community 
	"Configuration", //_Config 
	"Configured", //_Configured 
	"Confirmed Passphrase", //_ConfirmPassphrase 
	"Confirm Password", //_ConfirmPwd 
	"Connection", //_Conn 
	"Connect", //_Connect
	"connect type none", //_connectTypeNone
	"Connected Time", //_ConnTime 
	"Connection Type", //_conntype 
	"Day", //_Day 
	"Daylight Saving", //_DaylightSaving 
	"Days", //_Days 
	"dce-server", //_dceSer 
	"DDNS", //_DDNS 
	"DDNS Server Selection List", //_DDNSserverList 
	"Debug Information", //_DebugInfo 
	"Dec", //_Dec 
	"default", //_default 
	"Default Gateway", //_DefaultGW 
	"Delete", //_Delete 
	"Deny", //_Deny 
	"Destination", //_Dest 
	"Device Information", //_DevInfo 
	"DHCP", //_DHCP 
	"DHCP client", //_DHCPclient 
	"DHCP Client or Fixed IP", //_DHCPClient_FixedIP 
	"DHCP Client List", //_DHCPclientList 
	"DHCP Client or Fixed IP", //_DHCPorFix
	"DHCP Release", //_DHCPrelease
	"DHCP Renew", //_DHCPrenew
	"DHCP Server", //_DHCPSer 
	"DHCP Server End IP", //_DHCPserEndIP 
	"DHCP Server Start IP", //_DHCPserStartIP 
	"DHCP Table", //_DHCPTable 
	"Disable", //_Disable 
	"Disabled", //_Disabled 
	"Disconnect", //_Disconnect
	"DMZ   ", //_DMZ 
	"DMZ Host IP", //_DMZHost
	"DNS", //_DNS 
	"dns error", //_dns_err 
	"DNS 1", //_DNS1 
	"DNS 2", //_DNS2 
	"DNS Server Address 1", //_DNSAddr1 
	"DNS Server Address 2", //_DNSAddr2 
	"DNS Server Address 1", //_DNSServer1 
	"DNS Server Address 2", //_DNSServer2 
	"Domain", //_domain 
	"Domain Name", //_DomainName 
	"Domain/URL Blocking   ", //_DomainUrlBlocking 
	"Domains/URL List", //_DomainUrlList 
	"Dropped Packets", //_DropPacket 
	"DTIM Interval", //_DTIMinterval 
	"Dynamic IP", //_DynamicIP 
	"Dynamic DHCP List", //_DynDHCPlist 
	"Dynamic DNS", //_dyndns 
	"EAP", //_EAP 
	"E-mail Logs", //_EmailLog 
	"Email Log Now", //_EmailLogNow 
	"Enable", //_Enable 
	"Enabled", //_Enabled 
	"Encryption", //_Encryption 
	"Encryption Type", //_EncryptionType 
	"End", //_End 
	"End IP", //_EndIP 
	"End IP address", //_EndIPaddr 
	"Every Day", //_EveryDay 
	"Every Friday", //_EveryFri 
	"Every Monday", //_EveryMon 
	"Every Saturday", //_EverySat 
	"Every Sunday", //_EverySun 
	"Every Thursday", //_EveryThur 
	"Every Tuesday", //_EveryTues 
	"Every Wednesday", //_EveryWed 
	"exit", //_Exit 
	"Expired Time", //_ExpiredTime 
	"Feb", //_Feb 
	"Filter", //_Filter 
	"Filter name", //_FilterName 
	"Filters", //_Filters 
	"Firewall", //_firewall 
	"Firewall Rule", //_FirewallRule
	"Firewall Settings", //_FirewallSet 
	"Firewall Settings ", //_FirewallSettings 
	"Firmware", //_Firmware 
	"Firmware Version", //_FirmwareVer 
	"First Page", //_FirstPage 
	"Fixed IP", //_FixedIP
	"Fixed IP address", //_FixedIP 
	"Fragmentation Threshold", //_FragThreshold 
	"Fri", //_Fri 
	"From", //_From 
	"From Email Address", //_FromEmail 
	"FTP", //_FTP
	"(GMT-12:00) Eniwetok, Kwajalein", //_GMT_01 
	"(GMT-11:00) Midway Island, Samoa", //_GMT_02 
	"(GMT-10:00) Hawaii", //_GMT_03 
	"(GMT-09:00) Alaska", //_GMT_04 
	"(GMT-08:00) Pacific Time (US/Canada), Tijuana", //_GMT_05 
	"(GMT-07:00) Arizona", //_GMT_06 
	"(GMT-07:00) Mountain Time (US/Canada)", //_GMT_07 
	"(GMT-06:00) Central America", //_GMT_08 
	"(GMT-06:00) Central Time (US/Canada)", //_GMT_09 
	"(GMT-06:00) Mexico City", //_GMT_10 
	"(GMT-06:00) Saskatchewan", //_GMT_11 
	"(GMT-05:00) Bogota, Lima, Quito", //_GMT_12 
	"(GMT-05:00) Eastern Time (US/Canada)", //_GMT_13 
	"(GMT-05:00) Indiana (East)", //_GMT_14 
	"(GMT-04:00) Atlantic Time (Canada)", //_GMT_15 
	"(GMT-04:00) Caracas, La Paz", //_GMT_16 
	"(GMT-04:00) Santiago", //_GMT_17 
	"(GMT-03:30) Newfoundland", //_GMT_18 
	"(GMT-03:00) Brazilia", //_GMT_19 
	"(GMT-03:00) Buenos Aires, Georgetown", //_GMT_20 
	"(GMT-03:00) Greenland", //_GMT_21 
	"(GMT-02:00) Mid-Atlantic", //_GMT_22 
	"(GMT-01:00) Azores", //_GMT_23 
	"(GMT-01:00) Cape Verde Is.", //_GMT_24 
	"(GMT) Casablanca, Monrovia", //_GMT_25 
	"(GMT) Greenwich Time: Dublin, Edinburgh, Lisbon, London", //_GMT_26 
	"(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm", //_GMT_27 
	"(GMT+01:00) Belgrade, Brastislava, Ljubljana", //_GMT_28 
	"(GMT+01:00) Brussels, Copenhagen, Madrid, Paris", //_GMT_29 
	"(GMT+01:00) Sarajevo, Skopje, Sofija, Vilnus, Zagreb", //_GMT_30 
	"(GMT+01:00) Budapest, Vienna, Prague, Warsaw", //_GMT_31 
	"(GMT+01:00) West Central Africa", //_GMT_32 
	"(GMT+02:00) Athens, Istanbul, Minsk", //_GMT_33 
	"(GMT+02:00) Bucharest", //_GMT_34 
	"(GMT+02:00) Cairo", //_GMT_35 
	"(GMT+02:00) Harare, Pretoria", //_GMT_36 
	"(GMT+02:00) Helsinki, Riga, Tallinn", //_GMT_37 
	"(GMT+02:00) Jerusalem", //_GMT_38 
	"(GMT+03:00) Baghdad", //_GMT_39 
	"(GMT+03:00) Kuwait, Riyadh", //_GMT_40 
	"(GMT+03:00) Moscow, St. Petersburg, Volgograd", //_GMT_41 
	"(GMT+03:00) Nairobi", //_GMT_42 
	"(GMT+03:00) Tehran", //_GMT_43 
	"(GMT+04:00) Abu Dhabi, Muscat", //_GMT_44 
	"(GMT+04:00) Baku, Tbilisi, Yerevan", //_GMT_45 
	"(GMT+04:30) Kabul", //_GMT_46 
	"(GMT+05:00) Ekaterinburg", //_GMT_47 
	"(GMT+05:00) Islamabad, Karachi, Tashkent", //_GMT_48 
	"(GMT+05:30) Calcutta, Chennai, Mumbai, New Delhi", //_GMT_49 
	"(GMT+05:45) Kathmandu", //_GMT_50 
	"(GMT+06:00) Almaty, Novosibirsk", //_GMT_51 
	"(GMT+06:00) Astana, Dhaka", //_GMT_52 
	"(GMT+06:00) Sri Jayawardenepura", //_GMT_53 
	"(GMT+06:30) Rangoon", //_GMT_54 
	"(GMT+07:00) Bangkok, Hanoi, Jakarta", //_GMT_55 
	"(GMT+07:00) Krasnoyarsk", //_GMT_56 
	"(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi", //_GMT_57 
	"(GMT+08:00) Irkutsk, Ulaan Bataar", //_GMT_58 
	"(GMT+08:00) Kuala Lumpur, Singapore", //_GMT_59 
	"(GMT+08:00) Perth", //_GMT_60 
	"(GMT+08:00) Taipei", //_GMT_61 
	"(GMT+09:00) Osaka, Sapporo, Tokyo", //_GMT_62 
	"(GMT+09:00) Seoul", //_GMT_63 
	"(GMT+09:00) Yakutsk", //_GMT_64 
	"(GMT+09:30) Adelaide", //_GMT_65 
	"(GMT+09:30) Darwin", //_GMT_66 
	"(GMT+10:00) Brisbane", //_GMT_67 
	"(GMT+10:00) Canberra, Melbourne, Sydney", //_GMT_68 
	"(GMT+10:00) Guam, Port Moresby", //_GMT_69 
	"(GMT+10:00) Hobart", //_GMT_70 
	"(GMT+10:00) Vladivostok", //_GMT_71 
	"(GMT+11:00) Magadan, Solomon Is., New Caledonia", //_GMT_72 
	"(GMT+12:00) Auckland, Wellington", //_GMT_73 
	"(GMT+12:00) Fiji, Kamchatka, Marshall Is.", //_GMT_74 
	"(GMT+13:00) Nuku'alofa, Tonga", //_GMT_75 
	"Gateway", //_GW 
	"Gateway Address", //_GWAddr 
	"Help", //_Help 
	"HEX", //_HEX 
	"Host Name", //_HostName 
	"Host Name or IP address", //_HostName_IP 
	"Hour", //_Hour 
	"Hours", //_Hours 
	"HTTP", //_HTTP 
	"ICMP", //_ICMP 
	"IDENT", //_IDENT 
	"Idle Time Out", //_IdleTimeOut 
	"Incoming", //_Incoming 
	"Incoming Port", //_IncomingPort 
	"Interface", //_Interface 
	"Invalid Host Name", //_InvalidHostName 
	"Invalid PIN number.", //_InvalidPIN 
	"IP", //_IP 
	"IP Address", //_IP_Addr 
	"Obtain IP automatically (DHCP client)", //_IPAuto
	"IP Range", //_IPRange 
	"IP Range End", //_IPRangeEnd 
	"IP Range Start", //_IPRangeStart 
	"IPSec", //_IPSec 
	"Jan", //_Jan 
	"Jul", //_Jul 
	"Jun", //_Jun 
	"Key", //_Key 
	"L2TP", //_L2TP 
	"L2TP Account", //_L2TPaccount 
	"L2TP Password", //_L2TPpwd 
	"LAN", //_LAN 
	"LAN & DHCP Server", //_LAN_DHCPSer 
	"LAN Server", //_LAN_Serv 
	"LAN IP Address", //_LANipAddr 
	"LAN Subnet Mask", //_LANsubnet 
	"Last Page", //_LastPage 
	"Lease Time", //_LeaseTime 
	"Load", //_Load 
	"Load Settings", //_LoadSettngs 
	"Local Time", //_LocalTime 
	"Log", //_Log 
	"When log is full", //_LogFull 
	"Login", //_Login 
	"User Name or Password incorrect", //_loginErrMsg 
	"The login name is \"admin\"", //_LoginIsAdmin 
	"The login name is \"user\"", //_LoginIsUser 
	"Login Server IP", //_LoginSer 
	"Syslog Server", //_LogSer 
	"Log Setting", //_LogSet 
	"Log Settings", //_LogSettings 
	"Log Type", //_LogType 
	"The login name is \"admin\"", //_LonginAdmin 
	"The login name is \"user\"", //_LonginUser 
	"MAC", //_MAC 
	"MAC Address", //_MACAddr 
	"MAC Filters", //_MacFilter 
	"MAC Table", //_MacTable 
	"Manual", //_Manual 
	"Manually Date and Time Setting", //_ManualTimeSet 
	"Mar", //_Mar 
	"Mask", //_Mask 
	"May", //_May 
	"Message", //_Message
	"Metric", //_Metric 
	"Minute", //_Minute 
	"Minutes", //_minutes 
	"Mon", //_Mon 
	"Month", //_Month 
	"MPPE Enable", //_MPPE 
	"msec", //_msec 
	"Please wait", //_MSG1 
	"UDP Endpoint Filtering", //_MSG10 
	"Password can not be empty.", //_MSG100 
	"The  is an invalid address.", //_MSG101 
	"The  can not be zero.", //_MSG102 
	"The 1st address of  must be an integer.", //_MSG103 
	"The 2nd address of  must be an integer.", //_MSG104 
	"The 3rd address of  must be an integer.", //_MSG105 
	"The 4th address of  must be an integer.", //_MSG106 
	"The 1st range of  must be between ", //_MSG107 
	"The 2nd range of  must be between ", //_MSG108 
	"The 3rd range of  must be between ", //_MSG109 
	"Endpoint Independent", //_MSG11 
	"The 4th range of  must be between ", //_MSG110 
	"The port of  is invalid.", //_MSG111 
	"The Shared Secret of  can not be empty.", //_MSG112 
	"The  can't allow enter loopback IP or multicase IP (127.x.x.x, 224.x.x.x ~ 239.x.x.x, 255.x.x.x).", //_MSG113 
	"The Subnet Mask is an invalid address.", //_MSG114 
	"The Subnet Mask can not be zero.", //_MSG115 
	"The 1st address of Subnet Mask must be an integer.", //_MSG116 
	"The 2nd address of Subnet Mask must be an integer.", //_MSG117 
	"The 3rd address of Subnet Mask must be an integer.", //_MSG118 
	"The 4th address of Subnet Mask must be an integer.", //_MSG119 
	"Address Restricted", //_MSG12 
	"The 1st range of Subnet Mask must be 128, 192, 224, 240, 248, 252, 254, 255.", //_MSG120 
	"The 2nd range of Subnet Mask must be 0, 128, 192, 224, 240, 248, 252, 254, 255.", //_MSG121 
	"The 3rd range of Subnet Mask must be 0, 128, 192, 224, 240, 248, 252, 254, 255.", //_MSG122 
	"The 4th range of Subnet Mask must be 0, 128, 192, 224, 240, 248, 252.", //_MSG123 
	"The Source Start IP address is an invalid address.", //_MSG124 
	"The Source Start IP address can not be zero.", //_MSG125 
	"The 1st address of Source Start IP address must be an integer.", //_MSG126 
	"The 2nd address of Source Start IP address must be an integer.", //_MSG127 
	"The 3rd address of Source Start IP address must be an integer.", //_MSG128 
	"The 4th address of Source Start IP address must be an integer.", //_MSG129 
	"Port And Address Restricted", //_MSG13 
	"The 1st range of Source Start IP address must be between 1 to 254.", //_MSG130 
	"The 2nd range of Source Start IP address must be between 0 to 254.", //_MSG131 
	"The 3rd range of Source Start IP address must be between 0 to 254.", //_MSG132 
	"The 4th range of Source Start IP address must be between 1 to 254.", //_MSG133 
	"The Source End IP address is an invalid address.", //_MSG134 
	"The Source End IP address can not be zero.", //_MSG135 
	"The 1st address of Source End IP address must be an integer.", //_MSG136 
	"The 2nd address of Source End IP address must be an integer.", //_MSG137 
	"The 3rd address of Source End IP address must be an integer.", //_MSG138 
	"The 4th address of Source End IP address must be an integer.", //_MSG139 
	"", //_MSG14 
	"The 1st range of Source End IP address must be between 1 to 254.", //_MSG140 
	"The 2nd range of Source End IP address must be between 0 to 254.", //_MSG141 
	"The 3rd range of Source End IP address must be between 0 to 254.", //_MSG142 
	"The 4th range of Source End IP address must be between 1 to 254.", //_MSG143 
	"The static IP address is an invalid address.", //_MSG144 
	"The static IP address can not be zero.", //_MSG145 
	"The 1st address of static IP address must be an integer.", //_MSG146 
	"The 2nd address of static IP address must be an integer.", //_MSG147 
	"The 3rd address of static IP address must be an integer.", //_MSG148 
	"The 4th address of static IP address must be an integer.", //_MSG149 
	"Only admin account can change the settings.", //_MSG15 
	"The 1st range of static IP address must be between 1 to 254.", //_MSG150 
	"The 2nd range of static IP address must be between 0 to 255.", //_MSG151 
	"The 3rd range of static IP address must be between 0 to 255.", //_MSG152 
	"The 4th range of static IP address must be between 1 to 254.", //_MSG153 
	"The Destination Start IP address is an invalid address.", //_MSG154 
	"The Destination Start IP address can not be zero.", //_MSG155 
	"The 1st address of Destination Start IP address must be an integer.", //_MSG156 
	"The 2nd address of Destination Start IP address must be an integer.", //_MSG157 
	"The 3rd address of Destination Start IP address must be an integer.", //_MSG158 
	"The 4th address of Destination Start IP address must be an integer.", //_MSG159 
	"To disable SSID Broadcast will cause WPS not work. Are you sure you want to continue with the new setting?", //_MSG16 
	"The 1st range of Destination Start IP address must be between 1 to 254.", //_MSG160 
	"The 2nd range of Destination Start IP address must be between 0 to 254.", //_MSG161 
	"The 3rd range of Destination Start IP address must be between 0 to 254.", //_MSG162 
	"The 4th range of Destination Start IP address must be between 1 to 254.", //_MSG163 
	"The Destination End IP address is an invalid address.", //_MSG164 
	"The Destination End IP address can not be zero.", //_MSG165 
	"The 1st address of Destination End IP address must be an integer.", //_MSG166 
	"The 2nd address of Destination End IP address must be an integer.", //_MSG167 
	"The 3rd address of Destination End IP address must be an integer.", //_MSG168 
	"The 4th address of Destination End IP address must be an integer.", //_MSG169 
	"Can not change 802.11 Mode to 802.11n only while there is an SSID with WEP or TKIP security.", //_MSG17 
	"The 1st range of Destination End IP address must be between 1 to 254.", //_MSG170 
	"The 2nd range of Destination End IP address must be between 0 to 254.", //_MSG171 
	"The 3rd range of Destination End IP address must be between 0 to 254.", //_MSG172 
	"The 4th range of Destination End IP address must be between 1 to 254.", //_MSG173 
	"The Syslog Server is an invalid address.", //_MSG174 
	"The Syslog Server can not be zero.", //_MSG175 
	"The 1st address of Syslog Server must be an integer.", //_MSG176 
	"The 2nd address of Syslog Server must be an integer.", //_MSG177 
	"The 3rd address of Syslog Server must be an integer.", //_MSG178 
	"The 4th address of Syslog Server must be an integer.", //_MSG179 
	"The 1st range of Syslog Server must be between 1 to 254.", //_MSG180 
	"The 2nd range of Syslog Server must be between 0 to 255.", //_MSG181 
	"The 3rd range of Syslog Server must be between 0 to 255.", //_MSG182 
	"The 4th range of Syslog Server must be between 1 to 254.", //_MSG183 
	"The From IP address is an invalid address in the HTTP section.", //_MSG184 
	"The From IP address can not be zero in the HTTP section..", //_MSG185 
	"The 1st address of From IP address must be an integer in the HTTP section.", //_MSG186 
	"The 2nd address of From IP address must be an integer in the HTTP section.", //_MSG187 
	"The 3rd address of From IP address must be an integer in the HTTP section.", //_MSG188 
	"The 4th address of From IP address must be an integer in the HTTP section.", //_MSG189 
	"The 1st range of From IP address must be between 1 to 254 in the HTTP section.", //_MSG190 
	"The 2nd range of From IP address must be between 0 to 255 in the HTTP section.", //_MSG191 
	"The 3rd range of From IP address must be between 0 to 255 in the HTTP section.", //_MSG192 
	"The 4th range of From IP address must be between 1 to 254 in the HTTP section.", //_MSG193 
	"The To IP address is an invalid address in the HTTP section.", //_MSG194 
	"The To IP address can not be zero in the HTTP section.", //_MSG195 
	"The 1st address of To IP address must be an integer in the HTTP section.", //_MSG196 
	"The 2nd address of To IP address must be an integer in the HTTP section.", //_MSG197 
	"The 3rd address of To IP address must be an integer in the HTTP section.", //_MSG198 
	"The 4th address of To IP address must be an integer in the HTTP section.", //_MSG199 
	"Please start WPS on the wireless device you are adding to your wireless network within", //_MSG2 
	"The 1st range of To IP address must be between 1 to 254 in the HTTP section.", //_MSG200 
	"The 2nd range of To IP address must be between 0 to 255 in the HTTP section.", //_MSG201 
	"The 3rd range of To IP address must be between 0 to 255 in the HTTP section.", //_MSG202 
	"The 4th range of To IP address must be between 1 to 254 in the HTTP section.", //_MSG203 
	"The From IP address is an invalid address in the Allow to Ping WAN port section.", //_MSG204 
	"The From IP address can not be zero in the Allow to Ping WAN port section.", //_MSG205 
	"The 1st address of From IP address must be an integer in the Allow to Ping WAN port section.", //_MSG206 
	"The 2nd address of From IP address must be an integer in the Allow to Ping WAN port section.", //_MSG207 
	"The 3rd address of From IP address must be an integer in the Allow to Ping WAN port section.", //_MSG208 
	"The 4th address of From IP address must be an integer in the Allow to Ping WAN port section.", //_MSG209 
	"The 1st range of From IP address must be between 1 to 254 in the Allow to Ping WAN port section.", //_MSG210 
	"The 2nd range of From IP address must be between 0 to 255 in the Allow to Ping WAN port section.", //_MSG211 
	"The 3rd range of From IP address must be between 0 to 255 in the Allow to Ping WAN port section.", //_MSG212 
	"The 4th range of From IP address must be between 1 to 254 in the Allow to Ping WAN port section.", //_MSG213 
	"The To IP address is an invalid address in the Allow to Ping WAN port section.", //_MSG214 
	"The To IP address can not be zero in the Allow to Ping WAN port section.", //_MSG215 
	"The 1st address of To IP address must be an integer in the Allow to Ping WAN port section.", //_MSG216 
	"The 2nd address of To IP address must be an integer in the Allow to Ping WAN port section.", //_MSG217 
	"The 3rd address of To IP address must be an integer in the Allow to Ping WAN port section.", //_MSG218 
	"The 4th address of To IP address must be an integer in the Allow to Ping WAN port section.", //_MSG219 
	"The 1st range of To IP address must be between 1 to 254 in the Allow to Ping WAN port section.", //_MSG220 
	"The 2nd range of To IP address must be between 0 to 255 in the Allow to Ping WAN port section.", //_MSG221 
	"The 3rd range of To IP address must be between 0 to 255 in the Allow to Ping WAN port section.", //_MSG222 
	"The 4th range of To IP address must be between 1 to 254 in the Allow to Ping WAN port section.", //_MSG223 
	"The Trap Receiver 1 address is an invalid address.", //_MSG224 
	"The Trap Receiver 1 address can not be zero.", //_MSG225 
	"The 1st address of Trap Receiver 1 address must be an integer.", //_MSG226 
	"The 2nd address of Trap Receiver 1 address must be an integer.", //_MSG227 
	"The 3rd address of Trap Receiver 1 address must be an integer.", //_MSG228 
	"The 4th address of Trap Receiver 1 address must be an integer.", //_MSG229 
	"The 1st range of Trap Receiver 1 address must be between 1 to 254.", //_MSG230 
	"The 2nd range of Trap Receiver 1 address must be between 0 to 255.", //_MSG231 
	"The 3rd range of Trap Receiver 1 address must be between 0 to 255.", //_MSG232 
	"The 4th range of Trap Receiver 1 address must be between 1 to 254.", //_MSG233 
	"The Trap Receiver 2 address is an invalid address.", //_MSG234 
	"The Trap Receiver 2 address can not be zero.", //_MSG235 
	"The 1st address of Trap Receiver 2 address must be an integer.", //_MSG236 
	"The 2nd address of Trap Receiver 2 address must be an integer.", //_MSG237 
	"The 3rd address of Trap Receiver 2 address must be an integer.", //_MSG238 
	"The 4th address of Trap Receiver 2 address must be an integer.", //_MSG239 
	"Can not set WEP or TKIP security for an SSID, while 802.11 Mode is 802.11n only.", //_MSG24 
	"The 1st range of Trap Receiver 2 address must be between 1 to 254.", //_MSG240 
	"The 2nd range of Trap Receiver 2 address must be between 0 to 255.", //_MSG241 
	"The 3rd range of Trap Receiver 2 address must be between 0 to 255.", //_MSG242 
	"The 4th range of Trap Receiver 2 address must be between 1 to 254.", //_MSG243 
	"The Trap Receiver 3 address is an invalid address.", //_MSG244 
	"The Trap Receiver 3 address can not be zero.", //_MSG245 
	"The 1st address of Trap Receiver 3 address must be an integer.", //_MSG246 
	"The 2nd address of Trap Receiver 3 address must be an integer.", //_MSG247 
	"The 3rd address of Trap Receiver 3 address must be an integer.", //_MSG248 
	"The 4th address of Trap Receiver 3 address must be an integer.", //_MSG249 
	"The Shared Key cannot be supported by WPS. Use this configuration will cause WPS be disabled. Are you sure you want to continue with the new setting?", //_MSG25 
	"The 1st range of Trap Receiver 3 address must be between 1 to 254.", //_MSG250 
	"The 2nd range of Trap Receiver 3 address must be between 0 to 255.", //_MSG251 
	"The 3rd range of Trap Receiver 3 address must be between 0 to 255.", //_MSG252 
	"The 4th range of Trap Receiver 3 address must be between 1 to 254.", //_MSG253 
	"Please enter another  value.", //_MSG254 
	"The value of  must be numeric!", //_MSG255 
	"The value of  is even number only.", //_MSG257 
	"Please enter another Metric value.", //_MSG258 
	"The value of Metric must be an integer.", //_MSG259 
	"The EAP Authentication cannot be supported by WPS. Use this configuration will cause WPS be disabled. Are you sure you want to continue with the new setting?", //_MSG26 
	"The range of Metric is 1 ~ 15.", //_MSG260 
	"The length of Key1 must be 5 characters.", //_MSG261 
	"The length of Key1 must be 13 characters.", //_MSG262 
	"The length of Key1 must be 10 characters.", //_MSG263 
	"The length of Key1 must be 26 characters.", //_MSG264 
	"The length of Key2 must be 5 characters.", //_MSG265 
	"The length of Key2 must be 13 characters.", //_MSG266 
	"The length of Key2 must be 10 characters.", //_MSG267 
	"The length of Key2 must be 26 characters.", //_MSG268 
	"The length of Key3 must be 5 characters.", //_MSG269 
	"The Auto Cipher Type cannot be supported by WPS. Use this configuration will cause WPS be disabled. Are you sure you want to continue with the new setting?", //_MSG27 
	"The length of Key3 must be 13 characters.", //_MSG270 
	"The length of Key3 must be 10 characters.", //_MSG271 
	"The length of Key3 must be 26 characters.", //_MSG272 
	"The length of Key4 must be 5 characters.", //_MSG273 
	"The length of Key4 must be 13 characters.", //_MSG274 
	"The length of Key4 must be 10 characters.", //_MSG275 
	"The length of Key4 must be 26 characters.", //_MSG276 
	"Key1 is wrong, the legal characters are 0~9, A~F, or a~f.", //_MSG277 
	"Key2 is wrong, the legal characters are 0~9, A~F, or a~f.", //_MSG278 
	"Key3 is wrong, the legal characters are 0~9, A~F, or a~f.", //_MSG279 
	"WPS do not support WEP-Shared Key and WPA /WPA2 TKIP/AES/Auto-EAP authentication, please change your wireless encryption if you hope to enable WPS.", //_MSG28 
	"Key4 is wrong, the legal characters are 0~9, A~F, or a~f.", //_MSG280 
	"Success, system rebooting.", //_MSG281 
	"Fail, system rebooting.", //_MSG282 
	"Fail, firmware size error.", //_MSG283 
	"Success, uploading finished.", //_MSG284 
	"Fail, configuration file error.", //_MSG285 
	"Obtain IP Automatically", //_MSG286 
	"Connecting with the server for firmware information.", //_MSG287 
	"Waiting for remote host response...", //_MSG288 
	"Send log message Success", //_MSG289 
	"WPS cannot work when EAP Authentication is used. You need go to Wireless/Security page to modify settings to make WPS take effect.", //_MSG29 
	"Please enter the correct graphical authentication code.", //_MSG290 
	"Set your new password", //_MSG291 
	"Choose your time zone", //_MSG292 
	"Set LAN connection and DHCP Server", //_MSG293 
	"Set Internet connection", //_MSG294 
	"Set wireless LAN connection", //_MSG295 
	"PPPoE to obtain IP automatically", //_MSG296 
	"PPPoE with a fixed IP address", //_MSG297 
	"Display Wizard next time?", //_MSG298 
	"Click Restart button to save the settings and restart Wireless Router.", //_MSG299 
	"Filters are used to allow or deny LAN/WLAN users from accessing the local network (LAN/WLAN), web management, and/or Internet.", //_MSG3 
	"WPS cannot work when SSID Broadcast is disabled. You need go to Wireless/Basic page to modify settings to make WPS take effect.", //_MSG30 
	"Set LAN & DHCP Server", //_MSG300 
	"Edit Protocol/IP Filter in List", //_MSG301 
	"Please enter NTP Server", //_MSG302 
	"TEW-731BR Setup Wizard", //_MSG303 
	"get by wz4_ConnType", //_MSG304 
	"Set BigPond", //_MSG305 
	"Set PPPoe (Russia)", //_MSG306 
	"Set PPTP Client (Russia)", //_MSG307 
	"Set L2TP Client (Russia)", //_MSG308 
	"Note: Please add MAC address in the below MAC Table first, then select \"only allow\" or \"only deny\", and click on \"Apply\".", //_MSG309 
	"Please set your BigPond Cable data then press Next to continue.", //_MSG309 
	"WPS cannot work when Wireless is disabled. You need go to Wireless/Basic page to modify settings to make WPS take effect.", //_MSG31 
	"This screen enables you to view the status of the router <A HREF=\"glossary.htm#def_LAN\">LAN</A>, <A HREF=\"glossary.htm#def_WAN\">WAN</A> and <A HREF=\"glossary.htm#def_wireless_lan\">Wireless LAN</A> connections, and view logs and statistics pertaining to connections and <A HREF=\"glossary.htm#def_packet\">packet</A> transfers.", //_MSG310 
	"Click the items below for more information:", //_MSG311 
	"This screen enables you to view the router <A HREF=\"glossary.htm#def_LAN\">LAN</A>, <A HREF=\"glossary.htm#def_wireless_lan\">Wireless LAN</A> and <A HREF=\"glossary.htm#def_WAN\">WAN</A> configuration.", //_MSG312
	"<SPAN STYLE=\"font-weight : bold;\">Firmware Version:</SPAN><A NAME=\"status_firmware_version\"></A> Displays the latest build of the wireless router <A HREF=\"glossary.htm#def_firmware\">firmware</A> interface. After updating the firmware in <A HREF=\"help_tools.htm#tools_firmware\">Tools - Firmware</A>, check this to ensure that your firmware was successfully updated.", //_MSG313 
	"<SPAN STYLE=\"font-weight : bold;\">WAN:</SPAN><A NAME=\"status_devinfo_WAN\"></A> This field displays the router's <A HREF=\"glossary.htm#def_WAN\">WAN</A> interface <A HREF=\"glossary.htm#def_MAC_address\">MAC address</A>, <A HREF=\"glossary.htm#def_dhcp\">DHCP</A> client status, <A HREF=\"glossary.htm#def_ip_address\">IP address</A>, <A HREF=\"glossary.htm#def_subnet_mask\">subnet mask</A>,  <A HREF=\"glossary.htm#def_gateway\">default gateway</A>, and <A HREF=\"glossary.htm#def_DNS\">DNS</A>.", //_MSG314 
	" Click <SPAN STYLE=\"font-style : italic;\">DHCP Release</SPAN> to release all IP addresses assigned to client stations connected to the WAN via the router. Click <SPAN STYLE=\"font-style : italic;\">DHCP Renew</SPAN> to reassign IP addresses to client stations connected to the WAN.", //_MSG315 
	"<SPAN STYLE=\"font-weight : bold;\">Wireless:</SPAN><A NAME=\"status_devinfo_wireless\"></A> Displays the router's wireless connection information, including the  router's wireless interface <A HREF=\"glossary.htm#def_MAC_address\">MAC address</A>, the connection status, the <A HREF=\"glossary.htm#def_ssid\">SSID</A> status, which channel is being used, and whether <A HREF=\"glossary.htm#def_WEP\">WEP</A> is enabled or not.", //_MSG316 
	"<SPAN STYLE=\"font-weight : bold;\">LAN:</SPAN><A NAME=\"status_devinfo_lan\"></A> This field displays the router's <A HREF=\"glossary.htm#def_LAN\">LAN</A> interface <A HREF=\"glossary.htm#def_MAC_address\">MAC address</A>, <A HREF=\"glossary.htm#def_ip_address\">IP address</A>, <A HREF=\"glossary.htm#def_subnet_mask\">subnet mask</A>, and <A HREF=\"glossary.htm#def_dhcp\">DHCP</A> server status. Click <SPAN STYLE=\"font-style : italic;\"><A HREF=\"help_main.htm#lanski_dhcp_server\">DHCP Table</A> to view a list of client stations currently connected to the router LAN interface.", //_MSG317 
	"back to top", //_MSG318 
	"This screen enables you to view a running log of router system  statistics, events, and activities. The log displays up to 200  entries. Older entries are overwritten by new entries. You can save  logs via the Log Settings screen (Send  to). The Log screen commands are as follows:", //_MSG319
	"Applied Change Successfully!", //_MSG32 
	"<SPAN STYLE=\"font-weight : normal;\">Click </SPAN><SPAN STYLE=\"font-style : italic;font-weight : normal;\">First Page</SPAN><SPAN STYLE=\"font-weight : normal;\"> to view the first page of the log</SPAN>", //_MSG320 
	"<SPAN STYLE=\"font-weight : normal;\">Click</SPAN><SPAN STYLE=\"font-style : italic;font-weight : normal;\">  Last Page</SPAN><SPAN STYLE=\"font-weight : normal;\"> to view the final page of the log</SPAN>", //_MSG321 
	"<SPAN STYLE=\"font-weight : normal;\">Click</SPAN><SPAN STYLE=\"font-style : italic;font-weight : normal;\">  Previous Page</SPAN><SPAN STYLE=\"font-weight : normal;\"> to view the page just before the current page</SPAN>", //_MSG322 
	"<SPAN STYLE=\"font-weight : normal;\">Click  </SPAN><SPAN STYLE=\"font-style : italic;font-weight : normal;\">Next  Page</SPAN><SPAN STYLE=\"font-weight : normal;\"> to view the page just after the current page</SPAN>", //_MSG323 
	"<SPAN STYLE=\"font-weight : normal;\">Click</SPAN></SPAN><SPAN STYLE=\"font-style : italic;font-weight : normal;\">  Clear Log</SPAN><SPAN STYLE=\"font-style : italic;font-weight : normal;\"> to delete the contents of the log and begin a new log.</SPAN>", //_MSG324 
	"<SPAN STYLE=\"font-weight : normal;\">Click  </SPAN><SPAN STYLE=\"font-style : italic;font-weight : normal;\">Refresh</SPAN><SPAN STYLE=\"font-weight : normal;\"> to renew log statistics</SPAN>", //_MSG325 
	"<SPAN STYLE=\"font-weight : bold;\">Time:</SPAN><A NAME=\"status_log_time\"></A> Displays the time and date that the log entry was created.", //_MSG326 
	"<SPAN STYLE=\"font-weight : bold;\">Message:</SPAN><A NAME=\"status_log_message\"></A> Displays summary information about the log entry.", //_MSG327 
	"<SPAN STYLE=\"font-weight : bold;\">Note:</SPAN><A NAME=\"status_log_note\"></A> Displays the <A HREF=\"glossary.htm#def_ip_address\">IP address</A> of the communication.", //_MSG328 
	"This screen enables you to set router logging parameters.", //_MSG329 
	"Please press down the Push Button (physical or virtual) on the wireless <br> device you are adding to your wireless network within", //_MSG33 
	"<strong>SMTP Authentication:</strong> Select Enabled if your SMTP server requires you to login in order to send email. Type in account name and password in SMTP Account field and SMTP Password field.", //_MSG330 
	"<strong>SMTP Account:</strong>  If SMTP Authentication is enabled, type in the SMTP account name here.", //_MSG331 
	"<strong>SMTP Password: </strong>If SMTP Authentication is enabled, type in the password of the SMTP account here.", //_MSG332 
	"<SPAN STYLE=\"font-weight : bold;\">SMTP Server:</SPAN><A NAME=\"status_logset_smtp_server\"></A> Type the <A HREF=\"glossary.htm#def_SMTP\">SMTP</A> server address for  the email that the log will be sent to in the next field.", //_MSG333 
	"<SPAN STYLE=\"font-weight : bold;\">Send to:</SPAN><A NAME=\"status_logset_sent_to\"></A> Type an email address for the log to be sent to. Click <SPAN STYLE=\"font-style : italic;\">Email Log Now</SPAN> to immediately send the current log.", //_MSG334 
	"<SPAN STYLE=\"font-weight : bold;\">E-mail Logs: When log is full - </SPAN>The time is not fixed. The log will be sent when the log is full, which will depend on the volume of traffic. ", //_MSG335 
	"<SPAN STYLE=\"font-weight : bold;\">Every day, Every Monday ... - </SPAN> The log is sent on the interval specified. ", //_MSG336 
	"If \"Every day\" is selected, the log is sent at the time specified.", //_MSG337 
	"If the day is specified, the log is sent once per week, on the specified day.", //_MSG338 
	"Select the time of day you wish the E-mail to be sent.", //_MSG339 
	"You have failed to add the wireless device to your wireless network within the given timeframe, please click on the button below to do it again.", //_MSG34 
	"If the log is full before the time specified to send it, it will be sent regardless.", //_MSG340 
	"<SPAN STYLE=\"font-weight : bold;\">Syslog Server:</SPAN><A NAME=\"status_logset_syslog_server\"></A> Type the <A HREF=\"glossary.htm#def_ip_address\">IP address</A> of the <A HREF=\"glossary.htm#def_SysLog_Server\">Syslog Server</A> if you want the router to listen and receive incoming SysLog messages.", //_MSG341 
	"<SPAN STYLE=\"font-weight : bold;\">Log Type: </SPAN><A NAME=\"status_logset_log_type\"></A>Enables you to select what items will be included in the log:", //_MSG342 
	"<SPAN STYLE=\"font-weight : bold;\">System Activity:</SPAN> Displays information related to router operation.", //_MSG343 
	"<SPAN STYLE=\"font-weight : bold;\">Debug Information:</SPAN> Displays information related to errors and system malfunction.", //_MSG344 
	"<SPAN STYLE=\"font-weight : bold;\">Attacks:</SPAN> Displays information about any malicious activity on the network.", //_MSG345 
	"<SPAN STYLE=\"font-weight : bold;\">Dropped Packets:</SPAN> Displays information about packets that  have not been transferred successfully.", //_MSG346 
	"<SPAN STYLE=\"font-weight : bold;\">Notice:</SPAN> Displays important notices by the system <A HREF=\"glossary.htm#def_administrator\">administrator</A>.", //_MSG347 
	"This screen displays a table that shows the rate of packet transmission via the router <A HREF=\"glossary.htm#def_LAN\">LAN</A>, <A HREF=\"glossary.htm#def_wireless_lan\">Wireless  LAN</A>, and <A HREF=\"glossary.htm#def_WAN\">WAN</A> ports (in bytes per second).", //_MSG348 
	"Click <SPAN STYLE=\"font-style : italic;\">Reset</SPAN> to erase all statistics and begin logging statistics again.", //_MSG349 
	"Remote Management HTTP port conflict with Virtual Server Public port.", //_MSG35 
	"<SPAN STYLE=\"font-weight : bold;\">Utilization:</SPAN><A NAME=\"status_statistics_utilization\"></A> Separates packet transmission statistics into send and receive categories. Peak indicates the maximum packet transmission recorded since logging began, while  transmission since recording began.", //_MSG350 
	"<strong>Cancel:</strong> Click the <em>Cancel</em>  button to erase all fields and enter new information.", //_MSG351 
	"This screen enables you to view information about wireless devices that are connected to the router wireless interface.", //_MSG352 
	"<SPAN STYLE=\"font-weight : bold;\">Connected Time:</SPAN><A NAME=\"status_wireless_connected_time\"></A> Displays how long the wireless device has been connected to the <A HREF=\"glossary.htm#def_LAN\">LAN</A> via the router.", //_MSG353 
	"<SPAN STYLE=\"font-weight : bold;\">MAC Address:</SPAN><A NAME=\"status_wireless_mac_address\"></A> Displays the devices <A HREF=\"glossary.htm#def_wireless_lan\">wireless LAN</A> interface <A HREF=\"glossary.htm#def_MAC_address\">MAC address</A>.", //_MSG354 
	"This page enables you to set wireless communications parameters for  the router's <A HREF=\"glossary.htm#def_wireless_lan\">wireless</A> LAN feature.", //_MSG355 
	"This page enables you to enable and disable the <A HREF=\"glossary.htm#def_wireless_lan\">wireless LAN</A> function, enter a <A HREF=\"glossary.htm#def_ssid\">SSID</A>, and set the channel for wireless communications.", //_MSG356 
	"<SPAN STYLE=\"font-weight : bold;\">Enable/Disable:</SPAN><A NAME=\"Wireless_enable_disable\"></A> Enables and disables <A HREF=\"glossary.htm#def_wireless_lan\">wireless LAN</A> via the router.", //_MSG357 
	"<SPAN STYLE=\"font-weight : bold;\">SSID:</SPAN><A NAME=\"wireless_SSID\"></A> Type an <A HREF=\"glossary.htm#def_ssid\">SSID</A> in the text box. The SSID of any wireless device must match the SSID typed here in order for the wireless device to access the LAN and WAN via the router.", //_MSG358 
	"<SPAN STYLE=\"font-weight : bold;\">Channel:</SPAN><A NAME=\"wireless_channel\"></A> Select a transmission channel for wireless communications. The channel of any wireless device must match the channel selected here in order for the wireless device to access the <A HREF=\"glossary.htm#def_LAN\">LAN</A> and <A HREF=\"glossary.htm#def_WAN\">WAN</A> via the router.  ", //_MSG359 
	"Please input the User Name.", //_MSG36 
	"<strong>802.11 Mode:</strong><A NAME=\"wireless_802.11mode\"></A> If all of the wireless devices you want to connect with this router can connect in the same transmission mode, you can improve performance slightly by choosing the appropriate \"Only\" mode. If you have some devices that use a different transmission mode, choose the appropriate \"Mixed\" mode.", //_MSG360 
	"<strong>Channel Width:</strong><A NAME=\"wireless_channel_width\"></A> The \"Auto 20/40 MHz\" option is usually best. The other options are available for special circumstances. ", //_MSG361 
	"<strong>SSID Broadcast:</strong> Select Disabled if you would not like the SSID of your wireless network to be broadcasted by the TEW-731BR. If this option is Disabled, the SSID of the TEW-731BR will not be seen by Site Survey utilities so your wireless clients will have to know the SSID of your TEW-731BR in order to connect to it.", //_MSG362 
	"<strong>WMM:</strong> Enable the Wi-Fi Multi-Media will offer Wi-Fi networks stable that improve the user experience for audio, video, and voice applications by prioritizing data traffic.", //_MSG363 
	"This screen enables you to set <A HREF=\"glossary.htm#def_WEP\">WEP</A> | WPA | WPA2 | WPA-Auto parameters for secure wireless communications.", //_MSG364 
	"To protect your privacy you can configure wireless security features. This device supports two wireless security modes including: WPA-Personal (PSK), and WPA-Enterprise (RADIUS). WPA provides a higher level of security. WPA-Personal does not require an authentication server. The WPA-Enterprise option requires an external RADIUS server.", //_MSG365 
	"<strong>Authentication Type:</strong> Select the <a href=\"glossary.htm#def_Authentication\">authentication</A>  type. Open System allows public access to the router via wireless communications. ", //_MSG366 
	"<strong>WEP:</strong> WEP is the wireless encryption standard. To use it you must enter the same key(s) into the router and the wireless stations. For 64 bit keys you must enter 10 hex digits into each key box. For 128 bit keys you must enter 26 hex digits into each key box. A hex digit is either a number from 0 to 9 or a letter from A to F. For the most secure use of WEP set the authentication type to Shared Key when WEP is enabled. ", //_MSG367 
	"You may also enter any text string into a WEP key box, in which case it will be converted into a hexadecimal key using the ASCII values of the characters. A maximum of 5 text characters can be entered for 64 bit keys, and a maximum of 13 characters for 128 bit keys.", //_MSG368 
	"<em>If you choose the WEP security option this device will ONLY operate in Legacy Wireless mode (802.11B/G) . This means you will NOT get 11N performance due to the fact that WEP is not supported by 11N specification.</em>", //_MSG369 
	"The static DHCP IP is out of range.", //_MSG37 
	"<SPAN STYLE=\"font-weight : bold;\">Mode:</SPAN><A NAME=\"WEP_mode\"></A> Select the level of encryption you want from the drop-down list. Therouter supports, 64-, 128--bit encryption.", //_MSG370 
	"<SPAN STYLE=\"font-weight : bold;\">Key 1 ~ Key 4:</SPAN><A NAME=\"WEP_key1to4\"></A> Enables you to create an encryption scheme for Wireless LAN  transmissions. Manually enter a set of values for each key. Select the which key you want to use by clicking the radio button next to the key. Click <SPAN STYLE=\"font-style : italic;\">Clear</SPAN> to  erase key values.", //_MSG371 
	"<SPAN STYLE=\"font-weight : bold;\">Note:</SPAN> 128-bit encryption require more system resources than 64-bit encryption. Use 64-bit encryption for better performance.", //_MSG372 
	"<strong>WPA/WPA2/WPA-Auto Security:</strong>", //_MSG373 
	"If WPA, WPA2 or WPA-Auto EAP is selected, the above screen is shown. Please set the length of the encryption key and the parameters for the RADIUS server.", //_MSG374 
	"WPA requires stations to use high grade encryption and authentication. For legacy compatibility, use WPA or WPA2 mode. This mode uses WPA for legacy clients while maintaining higher security with stations that are WPA2 capable. The strongest cipher that the client supports will be used. For best security, use WPA2 Only mode. In this mode, legacy stations are not allowed access with WPA security. The AES cipher will be used across the wireless network to ensure best security.", //_MSG375 
	"<strong>RADIUS Server:</strong>", //_MSG376 
	"1.Enter the IP address, Port used and Shared Secret by the Primary Radius Server.", //_MSG377 
	"2.Enter the IP address, Port used and Shared Secret by the Secondary Radius Server. (optional)", //_MSG378 
	"<strong>WPA-PSK/WPA2-PSK Security:</strong>", //_MSG379 
	"The first mac value must be 00.", //_MSG38 
	"If WPA, WPA2 or WPA-Auto PSK is selected, each user must enter a pass phrase to access the network.", //_MSG380 
	"<strong>Cipher Type:</strong> Select the cipher type for TKIP or AES encryption, Selected Auto for auto detects the cipher type.", //_MSG381 
	"<strong>Passphrase:</strong> The length should be between 8 and 63 ASCII characters or 64 Hex characters.", //_MSG382 
	"This screen enables you to configure advanced wireless functions.", //_MSG383 
	"<SPAN STYLE=\"font-weight : bold;\">Beacon Interval:</SPAN><A NAME=\"advanced_beacon_interval\"></A> Type the <A HREF=\"glossary.htm#def_beacon_interval\">beacon interval</A> in the text box. You can specify a value from 25 to 1000. The default beacon interval is 100.", //_MSG384 
	"<SPAN STYLE=\"font-weight : bold;\">RTS Threshold:</SPAN><A NAME=\"advanced_rts_threshold\"></A> Type the <A HREF=\"glossary.htm#def_RTS\">RTS</A> (Request-To-Send) threshold in the text box. This value stabilizes data flow. If data flow is irregular, choose values between 256 and 2346 until data flow is normalized.", //_MSG385 
	"<SPAN STYLE=\"font-weight : bold;\">Fragmentation Threshold: </SPAN><A NAME=\"advanced_fragmentation_threshold\"></A>Type the <A HREF=\"glossary.htm#def_fragmentation\">fragmentation</A> threshold in the text box. If packet transfer error rates are high, choose values between 1500 and 2346 until packet transfer rates are minimized.", //_MSG386 
	"<SPAN STYLE=\"font-weight : bold;\">Note: </SPAN>Setting the fragmentation threshold value may diminish system performance.", //_MSG387 
	"<SPAN STYLE=\"font-weight : bold;\">DTIM Interval:</SPAN><A NAME=\"advanced_dtim_interval\"></A> Type a <A HREF=\"glossary.htm#def_DTIM\">DTIM</A> (Delivery Traffic Indication Message) interval in the text box. You can specify a value  between 1 and 255. The default value is 1.", //_MSG388 
	"802.1X  ", //_MSG389 
	"DHCP Reservations List is Full! Please Delete an Entry.", //_MSG39 
	"The IEEE 802.1X is a standard for user authentication on networks. The ROUTER supports EAP (Extensible Authentication Protocol) as specified by 802.1X. EAP provides wireless LAN with strong, mutual authentication between a client and an authentication server. The ROUTER can serve as a 802.1X Authenticator between 802.1X wireless clients and the Authentication Server typically installed on a RADIUS server. Please keep in mind that enabling 802.1X requires a RADIUS server for user authentication to the network.", //_MSG390 
	"<SPAN STYLE=\"font-weight : bold;\">Encryption Key:</SPAN> The encryption key length can be either 64bits or 128bits, when used with the AirPlus products. The encryption key has a lifetime which can be specified from 5 minutes to 1 day.", //_MSG391 
	"<SPAN STYLE=\"font-weight : bold;\">RADIUS Server :</SPAN> The encryption key RADIUS (Remote Access Dial-In User Service) Server is used for user authentication. You will need to enter the IP Address of the RADIUS Server and the port number for authentication. For most RADIUS Servers, port 1812 is used for this purpose. Key-in a Shared Secret can be entered as an additional security protection for communication between the RADIUS server and the ROUTER. A second RADIUS Server can be entered as an option. Consult your RADIUS providers or the manual of your RADIUS Server for more details", //_MSG392 
	"Wi-Fi Protected Setup (WPS)   ", //_MSG393 
	"This screen enables you to set <a href=\"glossary.htm#wireless_wps\">Wi-Fi Protected Setup (WPS)</A>  parameters for easy install wireless communications.", //_MSG394 
	"<strong>WPS:</strong> Enable/Disable <a href=\"glossary.htm#wireless_wps\">Wi-Fi Protected Setup  function</a>.", //_MSG395 
	"<strong>Status:</strong> Display the state ( <a href=\"glossary.htm#wireless_unconf\">Un-configured State</A> / <a href=\"glossary.htm#wireless_conf\">Configured State</a> ) information of <a href=\"glossary.htm#wireless_wps\">WPS</a> .", //_MSG396 
	"<strong>Self-PIN Number: </strong>Display the default <a href=\"glossary.htm#wireless_pin\">PIN number</a>  of AP.", //_MSG397 
	"<strong>Client PIN Number:</strong> Type Client <a href=\"glossary.htm#wireless_pin\">PIN number</a>  the client uses to negotiate with AP via <a href=\"glossary.htm#wireless_wps\">WPS</a> protocol. It is only used when users want their station to join AP's network.", //_MSG398 
	"<strong>Push Button Configuration:</strong> Clicking this button will invoke the <a href=\"glossary.htm#wireless_pbc\">PushButton Configuration (PBC)</a>  method of WPS . It is only used when AP acts as a Registrar .", //_MSG399 
	"Only allow computers with MAC address listed below to access the network ", //_MSG4 
	"The allowed number of static router is", //_MSG40 
	"The main screen enables you to configure the <A HREF=\"glossary.htm#def_LAN\">LAN</a> & <A HREF=\"glossary.htm#def_dhcp\">DHCP</a> Server, set <A HREF=\"glossary.htm#def_WAN\">WAN</a> parameters, create <A HREF=\"glossary.htm#def_administrator\">Administrator</a> and User passwords, and set the local time, time zone, and default <A HREF=\"glossary.htm#def_NTP\">NTP</a> server.", //_MSG400 
	"This page enables you to set <A HREF=\"glossary.htm#def_LAN\">LAN</A> and <A HREF=\"glossary.htm#def_dhcp\">DHCP</A> properties, such as the <A HREF=\"glossary.htm#def_host_name\">host name</A>, <A HREF=\"glossary.htm#def_ip_address\">IP address</A>, <A HREF=\"glossary.htm#def_subnet_mask\">subnet mask</A>, and <A HREF=\"glossary.htm#def_domain_name\">domain name</A>.  LAN and DHCP profiles are listed in the DHCP table at the bottom of  the screen.", //_MSG401 
	"<SPAN STYLE=\"font-weight : bold;\">Host Name:</SPAN><A NAME=\"lan&amp;dhcp_server_hostname\"></A>Type the <A HREF=\"glossary.htm#def_host_name\">host name</A> in the  text box. The host name is required by some <A HREF=\"glossary.htm#def_ISP\">ISP</A>s. The default host name is \"TEW-731BR\"", //_MSG402 
	"<SPAN STYLE=\"font-weight : bold;\">IP Address:</SPAN><A NAME=\"lan_dhcp_server_ipaddress\"></A> This is the <A HREF=\"glossary.htm#def_ip_address\">IP address</A> of the router. The default IP address is 192.168.10.1.", //_MSG403 
	"<SPAN STYLE=\"font-weight : bold;\">Subnet Mask:</SPAN><A NAME=\"lan_dhcp_server_subnet_mask\"></A> Type the <A HREF=\"glossary.htm#def_subnet_mask\">subnet mask</A> for the router in the text box. The default subnet mask is <SPAN STYLE=\"font-style : normal;\">\"255.255.255.0\".</SPAN>", //_MSG404 
	"<SPAN STYLE=\"font-weight : bold;\">DHCP Server:</SPAN><A NAME=\"lan_dhcp_server_dhcp_server\"></A> Enables the <A HREF=\"glossary.htm#def_dhcp\">DHCP</A> server to allow the router to automatically assign IP addresses to devices connecting to the <A HREF=\"glossary.htm#def_LAN\">LAN</A> port or connected wirelessly to the TEW-731BR .. DHCP is enabled by default.", //_MSG405 
	"All DHCP client computers are listed in the table at the bottom of the screen, The table displays the host name, IP address, and <A HREF=\"glossary.htm#def_MAC_address\">MAC</A> address of the client.", //_MSG406 
	"<SPAN STYLE=\"font-weight : bold;\">Start IP:</SPAN><A NAME=\"lan_dhcp_server_start_ip\"></A> Type an <A HREF=\"glossary.htm#def_ip_address\">IP address</A> to serve as the start of the IP range that <A HREF=\"glossary.htm#def_dhcp\">DHCP</A> will use to assign IP addresses to all wired and wireless devices connected to the router.", //_MSG407 
	"<SPAN STYLE=\"font-weight : bold;\">End IP:</SPAN><A NAME=\"lan_dhcp_server_end_ip\"></A> Type an <A HREF=\"glossary.htm#def_ip_address\">IP address</A> to serve as the end of the IP range that <A HREF=\"glossary.htm#def_dhcp\">DHCP</A> will use to assign IP addresses to all wired and wireless devices connected to the router.", //_MSG408 
	"<SPAN STYLE=\"font-weight : bold;\">Domain Name:</SPAN><A NAME=\"lan_dhcp_server_domain_name\"></A> Type the local <A HREF=\"glossary.htm#def_domain_name\">domain name</A> of the network in the text box. This item is optional.", //_MSG409 
	"Public port conflict with Remote Management HTTP port.", //_MSG41 
	"<strong>Lease Time:</strong> The lease time specifies the amount of connection time a network user be allowed with their current dynamic IP address.", //_MSG410 
	"<strong>Static DHCP :</strong> Reserves an IP address to a DHCP client. This ensures that the PC's IP address does not change.", //_MSG411 
	"This screen enables you to set up the router <A HREF=\"glossary.htm#def_WAN\">WAN</A> connection, specify the <A HREF=\"glossary.htm#def_IP\">IP address</A> for the WAN, add <a href=\"glossary.htm#def_DNS\">DNS</A>  IP Addresses  , enter the <A HREF=\"glossary.htm#def_MAC_address\">MAC address</A>, and set the <A HREF=\"glossary.htm#def_MTU\">MTU</A>.", //_MSG412 
	"<SPAN STYLE=\"font-weight : bold;\">Connection Type:</SPAN><A NAME=\"WAN_connection_type\"></A> Select the connection type, either <A HREF=\"glossary.htm#def_dhcp\">DHCP</A> client/Fixed IP <A HREF=\"glossary.htm#def_PPPoE\">PPPoE</A>, PPTP, L2TP, Russia PPPoE, Russia PPTP or Russia L2TP from the drop-down list.", //_MSG413 
	" When using DHCP client/Fixed IP, enter the following information in the fields (some information is provided by your <A HREF=\"glossary.htm#def_ISP\">ISP</A>).", //_MSG414 
	"<SPAN STYLE=\"font-weight : bold;\">WAN IP:</SPAN><A NAME=\"WAN_WAN_IP\"></A> Select whether you want the <a href=\"glossary.htm#def_ISP\">ISP</A>  to provide the <a href=\"glossary.htm#def_ip_address\">IP address</A>  automatically, or whether you want to assign a static IP address to the router <a href=\"glossary.htm#def_WAN\">WAN</A>. <SPAN STYLE=\"font-weight : normal;\">When Specify IP</SPAN><SPAN STYLE=\"font-weight : normal;\"> is selected, type the PPPoE </SPAN><A HREF=\"glossary.htm#def_ip_address\"><SPAN STYLE=\"font-weight : normal;\">IP address</SPAN></A><SPAN STYLE=\"font-weight : normal;\">, </SPAN><A HREF=\"glossary.htm#def_subnet_mask\"><SPAN STYLE=\"font-weight : normal;\">subnet mask</SPAN></A><SPAN STYLE=\"font-weight : normal;\">, and default </SPAN><A HREF=\"glossary.htm#def_gateway\"><SPAN STYLE=\"font-weight : normal;\">gateway</SPAN></A><SPAN STYLE=\"font-weight : normal;\">  in the text box. Your </SPAN><A HREF=\"glossary.htm#def_ISP\"><SPAN STYLE=\"font-weight : normal;\">ISP</SPAN></A><SPAN STYLE=\"font-weight : normal;\">  will provide you with this information. </SPAN>", //_MSG415 
	"<SPAN STYLE=\"font-weight : bold;\">DNS 1/2:</SPAN> <SPAN STYLE=\"font-weight : normal;\"> Type up to two </SPAN><A HREF=\"glossary.htm#def_DNS\"><SPAN STYLE=\"font-weight : normal;\">DNS</SPAN></A><SPAN STYLE=\"font-weight : normal;\"> numbers in the text boxes. Your </SPAN><A HREF=\"glossary.htm#def_ISP\"><SPAN STYLE=\"font-weight : normal;\">ISP</SPAN></A><SPAN STYLE=\"font-weight : normal;\"> will provide you with this information.</SPAN>", //_MSG416 
	"<SPAN STYLE=\"font-weight : bold;\">MAC Address:</SPAN><A NAME=\"WAN_MAC_address\"></A><SPAN STYLE=\"font-weight : normal;\"> If required by your </SPAN><A HREF=\"glossary.htm#def_ISP\"><SPAN STYLE=\"font-weight : normal;\">ISP</SPAN></A><SPAN STYLE=\"font-weight : normal;\">, type the </SPAN><A HREF=\"glossary.htm#def_MAC_address\"><SPAN STYLE=\"font-weight : normal;\">MAC address</SPAN></A><SPAN STYLE=\"font-weight : normal;\"> of the router </SPAN><A HREF=\"glossary.htm#def_WAN\"><SPAN STYLE=\"font-weight : normal;\">WAN</SPAN></A><SPAN STYLE=\"font-weight : normal;\"> interface in this field.</SPAN>", //_MSG417 
	"When using PPPoE, enter the following information in the fields (some information is provided by your <A HREF=\"glossary.htm#def_ISP\">ISP</A>).", //_MSG418 
	"<SPAN STYLE=\"font-weight : bold;\">WAN IP:</SPAN><SPAN STYLE=\"font-weight : normal;\"> Select whether you want the <A HREF=\"glossary.htm#def_ISP\">ISP</A> to provide the <A HREF=\"glossary.htm#def_ip_address\">IP address</A> automatically, or whether you want to assign a static IP address to the router <A HREF=\"glossary.htm#def_WAN\">WAN</A>. When  </SPAN><SPAN STYLE=\"font-style : italic;font-weight : normal;\">Specify IP is selected, type the PPPoE </SPAN><A HREF=\"glossary.htm#def_ip_address\"><SPAN STYLE=\"font-weight : normal;\">IP address</SPAN></A><SPAN STYLE=\"font-weight : normal;\"> in the text box. Your </SPAN><A HREF=\"glossary.htm#def_ISP\"><SPAN STYLE=\"font-weight : normal;\">ISP</SPAN></A><SPAN STYLE=\"font-weight : normal;\"> will provide you with this information.</SPAN>", //_MSG419 
	"'Lan to Lan' or 'Wan to Wan' is not a valid setting.", //_MSG42 
	"<strong>Service Name : </strong> Type your <a href=\"glossary.htm#def_PPPoE\">PPPoE</A> service name.", //_MSG420 
	"<SPAN STYLE=\"font-weight : bold;\">User Name:</SPAN><SPAN STYLE=\"font-weight : normal;\"> Type your <A HREF=\"glossary.htm#def_PPPoE\">PPPoE</A> user name.</SPAN>", //_MSG421 
	"<SPAN STYLE=\"font-weight : bold;\">Password:</SPAN><SPAN STYLE=\"font-weight : normal;\"> Type your <A HREF=\"glossary.htm#def_PPPoE\">PPPoE</A> password.</SPAN>", //_MSG422 
	"<strong>Retype Password :</strong>  Type your <a href=\"glossary.htm#def_PPPoE\">PPPoE</A>  password again.", //_MSG423 
	"<strong>DNS Primary:</strong> The primary Domain Name Server (DNS) IP address. This is provided by your ISP. ", //_MSG424 
	"<strong>DNS Secondary:</strong> The secondary Domain Name Server (DNS) IP address. This is provided by your ISP.", //_MSG425 
	"<strong>Auto-reconnect:</strong>  Enables <em>Always-on</em> , <em>Manual</em>  or <em>connect on demand</em>  function. Connect on demand enables the router to initiate a connection with your <a href=\"glossary.htm#def_ISP\">ISP</A>  when an Internet request is made to the router. When enabled, the router automatically connects to the Internet when you open your default browser. ", //_MSG426 
	"<SPAN STYLE=\"font-weight : bold;\">Idle Time Out:</SPAN><SPAN STYLE=\"font-weight : normal;\"> Specify the time that will elapse before the router drops  connection.</SPAN>", //_MSG427 
	"<strong>MTU :</strong> Type the <a href=\"glossary.htm#def_MTU\">MTU</A>  value in the text box.", //_MSG428 
	"<SPAN STYLE=\"font-weight : bold;\">PPTP:</SPAN><SPAN STYLE=\"font-weight : normal;\"> Point-to-Point Tunneling Protocol uses TCP to deal data for tunnel maintenance, and uses PPP for sum up the information carried within the tunnel. The data carried within the tunnel can be compressed or encrypted. The encryption method used is RSA RC4. PPTP can operate when the protocol is supported only on the client and the server located on the other end that the client is corresponds with. No support is essential from any of the routers or servers within the network the two PCs are connecting across. </SPAN>", //_MSG429 
	"Quit setup wizard and discard settings?", //_MSG43 
	"<strong>L2TP:</strong> L2TP is often used as a tunneling mechanism to resell ADSL endpoint connectivity. An L2TP tunnel would sit between the user and the ISP the connection would be resold to, so the reselling ISP wouldn't appear as doing the transit.", //_MSG430 
	"<strong>IP Address :</strong>  This is the <a href=\"glossary.htm#def_ip_address\">IP address</A>  of the router. The IP address is provided by ISP", //_MSG431 
	"<strong>Subnet Mask :</strong> This is the <a href=\"glossary.htm#def_subnet_mask\">subnet mask</A> of the router.  The subnet mask is provided by ISP.", //_MSG432 
	"<strong>Gateway:</strong> The gateway address of the network. Contact the ISP or network administrator for this information.", //_MSG433 
	"<strong>DNS:</strong> Type the <a href=\"glossary.htm#def_DNS\">DNS</A>  IP addresses in the text boxes. Your <a href=\"glossary.htm#def_ISP\">ISP</A>  will provide you with this information.", //_MSG434 
	"<strong>Server IP:</strong> Type the server IP address in the text box. Your ISP will provide you with this information.", //_MSG435 
	"<strong>PPTP or L2TP Account:</strong> Type your PPTP or L2TP account number.", //_MSG436 
	"<strong>PPTP or L2TP Password:</strong>  Type your PPTP or L2TP password.", //_MSG437 
	"<strong>PPTP or L2TP Retype password:</strong>  Retype your PPTP or L2TP password again.", //_MSG438 
	" invalid. the legal characters are 0~9, A~Z, or a~z,-,_.", //_MSG44 
	"<strong>MPPE Enable:</strong> Select to enable Microsoft Point-to-Point Encryption . (Only for MSCHAPv2)", //_MSG442 
	"<strong>Bigpond Cable:</strong> BigPond is Australia's largest Internet Service Provider and is Telstra's brand name for consumer broadband services.", //_MSG443 
	"<strong>User Name:</strong>  Type your <a href=\"glossary.htm#def_PPPoE\">BigPond</A>  user name.", //_MSG444 
	"<strong>Password:</strong>  Type your <a href=\"glossary.htm#def_PPPoE\">BigPond</A>  password.", //_MSG445 
	"<strong>Retype Password :</strong>  Type your <a href=\"glossary.htm#def_PPPoE\">BigPond</A>  password again.", //_MSG446 
	"<strong>Auth Server:</strong> sm-server : small mmo (sm) server ", //_MSG447 
	"<strong>Dce-server :</strong> distributed computing environment (dce) server.", //_MSG448 
	"<strong>Login Server IP:</strong> Type the server IP. Your ISP will provided this information.", //_MSG449 
	"There is unsaved data on this page. Do you want to abandon it?", //_MSG45 
	"<strong>MAC Address:</strong>  If required by your <a href=\"glossary.htm#def_ISP\">ISP</A> , type the <a href=\"glossary.htm#def_MAC_address\">MAC address</A>  of the router <a href=\"glossary.htm#def_WAN\">WAN</A>  interface in this field.", //_MSG450 
	"<strong>Russia  PPPoE:</strong> When using PPPoE, enter the following information in the fields (some information is provided by your <a href=\"glossary.htm#def_ISP\">ISP</a>)", //_MSG451 
	"User Name: Type your PPPoE user name.", //_MSG454 
	"Password: Type your PPPoE password.", //_MSG455 
	"Retype Password : Type your PPPoE password again.", //_MSG456 
	"If not, press Cancel and then click Save Settings.", //_MSG46 
	"<strong>WAN physical settings:</strong> Russia PPPoE supports dual WAN access. Configure the second WAN connection below:", //_MSG460 
	"<strong>Dynamic IP:</strong> Select this option if the WAN IP address is obtained automatically.", //_MSG461 
	"<strong>Static IP:</strong> Select this option if the WAN IP address is static. Then fill out the fields below:", //_MSG462 
	"Russia  PPTP:  When using PPTP, enter the following information in the fields (some information is provided by your ISP).", //_MSG468 
	"If so, press Ok.", //_MSG47 
	"<strong>PPTP Account:</strong> Type your PPTP account number. ", //_MSG474 
	"<strong>PPTP Password: </strong> Type your PPTP password.", //_MSG475 
	"<strong>PPTP Retype password:</strong>  Retype your PPTP password again.", //_MSG476 
	"Russia  L2TP: When using L2TP, enter the following information in the fields (some information is provided by your ISP.", //_MSG482 
	"Server IP\Name:  Type the server IP address in the text box. Your ISP will provide you with this information.", //_MSG487 
	"<strong>L2TP Account:</strong> Type your L2TP account number. ", //_MSG488 
	"<strong>L2TP Password:</strong>  Type your L2TP password. ", //_MSG489 
	"The Verify password does not match the New password.", //_MSG49 
	"<strong>L2TP Retype password:</strong>  Retype your L2TP password again.", //_MSG490 
	"This screen enables you to set administrative and user passwords. These passwords are used to gain access to the router interface.", //_MSG495 
	"<SPAN STYLE=\"font-weight : bold;\">Administrator:</SPAN><A NAME=\"password_administrator\"></A> Type the password the <A HREF=\"glossary.htm#def_administrator\">Administrator</A> will use to log in to the system. The password must be typed again for confirmation.", //_MSG496 
	"<SPAN STYLE=\"font-weight : bold;\">User:</SPAN><A NAME=\"password_user\"></A> Users can type a password to be used for logging in to the system. The password must be typed again for confirmation.", //_MSG497 
	"<SPAN STYLE=\"font-weight : bold;\">Note:</SPAN> Users do not have permission to configure router functions.", //_MSG498 
	"This screen enables you to set the time and date for the router's realtime clock, select your time zone, specify an <A HREF=\"glossary.htm#def_NTP\">NTP</A> server, and enable or disable daylight saving.", //_MSG499 
	"Only deny computers with MAC address listed below to access the network", //_MSG5 
	"The IP address and the  are not in the same domain.", //_MSG50 
	"<SPAN STYLE=\"font-weight : bold;\">Local Time:</SPAN><A NAME=\"time_local_time\"></A> Displays the local time and date.", //_MSG500 
	"<SPAN STYLE=\"font-weight : bold;\">Time Zone:</SPAN><A NAME=\"time_time_zone\"></A> Select your time zone from the drop-down list.", //_MSG501 
	"<strong>Synchronize the clock with:</strong> Select the clock adjustment method form the drop-down list.", //_MSG502 
	"<strong>Automatic:</strong> Automatically adjust the system time from NTP Server.", //_MSG503 
	"<strong>Manual:</strong> Manually adjust the system time when you press the Set Time button.", //_MSG504 
	"<SPAN STYLE=\"font-weight : bold;\">Default NTP Server:</SPAN><A NAME=\"time_default_ntp_server\"></A> Type the <A HREF=\"glossary.htm#def_NTP\">NTP</A> server address in the text box to enable the router to automatically set the time from the Internet NTP server.", //_MSG505 
	"<SPAN STYLE=\"font-weight : bold;\">Set the Time:</SPAN><SPAN STYLE=\"font-style : normal;\"><A NAME=\"time_set_the_time\"></A> Select the date and time from the drop-down lists, and click  </SPAN><SPAN STYLE=\"font-style : italic;font-weight : normal;\">Set Time</SPAN><SPAN STYLE=\"font-style : normal;\"> to set the router's  internal clock to the correct date and time.", //_MSG506 
	"<SPAN STYLE=\"font-weight : bold;\">Daylight Saving:</SPAN><A NAME=\"time_daylight_saving\"></A> Enables you to enable or disable daylight saving time. When enabled, select the start and end date for daylight saving time.", //_MSG507 
	"Dynamic DNS (Domain Name Service) is a method of keeping a domain name linked to a changing (dynamic) IP address. With most Cable and DSL connections, you are assigned a dynamic IP address and that address is used only for the duration of that specific connection. You can setup your DDNS service and the router will automatically update your DDNS server every time it receives a different IP address. First, you need to register your preferred DNS with the DDNS provider. Then, please select the DDNS address in the Server Address and fill the related information in the below fields: Host Name, User Name and Password.", //_MSG508 
	"This screen enables you to set parameters by which the router  forwards data to its destination if your network has a static <A HREF=\"glossary.htm#def_ip_address\">IP address</A>.", //_MSG509 
	"The  and the LAN IP address are not in the same domain.", //_MSG51 
	"<SPAN STYLE=\"font-weight : bold;\">Network Address:</SPAN><A NAME=\"routing_static_network_address\"></A> Type the static <A HREF=\"glossary.htm#def_ip_address\">IP address</A> your network uses to access the Internet. Your <A HREF=\"glossary.htm#def_ISP\">ISP</A> or network <A HREF=\"glossary.htm#def_administrator\">administrator</A> provides you with this information.", //_MSG510 
	"<SPAN STYLE=\"font-weight : bold;\">Network Mask:</SPAN><A NAME=\"routing_static_network_mask\"></A> Type the <A HREF=\"glossary.htm#def_subnet_mask\">network (subnet) mask</A> for your network. If you do not type a value here, the network mask defaults to 255.255.255.255. Your <A HREF=\"glossary.htm#def_ISP\">ISP</A> or network <A HREF=\"glossary.htm#def_administrator\">administrator</A> provides you with this information.", //_MSG511 
	"<SPAN STYLE=\"font-weight : bold;\">Gateway Address:</SPAN><A NAME=\"routing_static_gateway_address\"></A>Type the <A HREF=\"glossary.htm#def_gateway\">gateway address</A> for your network. Your <A HREF=\"glossary.htm#def_ISP\">ISP</A> or network <A HREF=\"glossary.htm#def_administrator\">administrator</A> provides you with this information.", //_MSG512 
	"<SPAN STYLE=\"font-weight : bold;\">Interface:</SPAN><A NAME=\"routing_static_interface\"></A> Select which interface, <A HREF=\"glossary.htm#def_WAN\">WAN</A> or <A HREF=\"glossary.htm#def_LAN\">LAN</A>,  you use to connect to the Internet.", //_MSG513 
	"<SPAN STYLE=\"font-weight : bold;\">Metric:</SPAN><A NAME=\"routing_static_metric\"></A> Select which <A HREF=\"glossary.htm#def_metric\">metric</A> you want to apply to this configuration.", //_MSG514 
	"<SPAN STYLE=\"font-weight : bold;\">Add:</SPAN><A NAME=\"routing_static_add\"></A> Click to add the configuration to the static <A HREF=\"glossary.htm#def_ip_address\">IP address</A> table at the bottom of the page.", //_MSG515 
	"<SPAN STYLE=\"font-weight : bold;\">Update:</SPAN><A NAME=\"routing_static_update\"></A> Select one of the entries in the static <A HREF=\"glossary.htm#def_ip_address\">IP address</A> table at the bottom of the page and, after changing parameters, click <SPAN STYLE=\"font-style : italic;\">Update</SPAN> to confirm the changes.", //_MSG516 
	"<SPAN STYLE=\"font-weight : bold;\">Delete:</SPAN><A NAME=\"routing_static_delete\"></A> Select one of the entries in the static <A HREF=\"glossary.htm#def_ip_address\">IP address</A> table at the bottom of the page and click <SPAN STYLE=\"font-style : italic;\">Delete</SPAN> to remove the entry.", //_MSG517 
	"<SPAN STYLE=\"font-weight : bold;\">Transmit:</SPAN><A NAME=\"routing_dynamic_transmit\"></A> Click the radio buttons to set the desired transmit parameters, disabled, <A HREF=\"glossary.htm#def_RIP\">RIP</A> 1, or <A HREF=\"glossary.htm#def_RIP\">RIP</A> 2.", //_MSG519 
	"The Ending IP address must be greater than the Starting IP address.", //_MSG52 
	"<SPAN STYLE=\"font-weight : bold;\">Receive:</SPAN><A NAME=\"routing_dynamic_receive\"></A> Click the radio buttons to set the desired transmit parameters, disabled, <A HREF=\"glossary.htm#def_RIP\">RIP</A> 1, or <A HREF=\"glossary.htm#def_RIP\">RIP</A> 2.", //_MSG520 
	"This screen enables you to view the routing table for the router. The routing table is a database created by the router that displays the network interconnection topology.", //_MSG521 
	"<SPAN STYLE=\"font-weight : bold;\">Network Address:</SPAN><A NAME=\"routing_table_network_address\"></A> Displays the network <A HREF=\"glossary.htm#def_ip_address\">IP address</A> of the connected node.", //_MSG522 
	"<SPAN STYLE=\"font-weight : bold;\">Network Mask:</SPAN><A NAME=\"routing_table_network_mask\"></A> Displays the <A HREF=\"glossary.htm#def_subnet_mask\">network (subnet) mask</A> of the connected node.", //_MSG523 
	"<SPAN STYLE=\"font-weight : bold;\">Gateway Address:</SPAN><A NAME=\"routing_table_gateway_address\"></A> Displays the <A HREF=\"glossary.htm#def_gateway\">gateway address</A> of the connected node.", //_MSG524 
	"<SPAN STYLE=\"font-weight : bold;\">Interface:</SPAN><A NAME=\"routing_table_interface\"></A> Displays whether the node is connected via a <A HREF=\"glossary.htm#def_WAN\">WAN</A> or <A HREF=\"glossary.htm#def_LAN\">LAN</A>.", //_MSG525 
	"<SPAN STYLE=\"font-weight : bold;\">Metric:</SPAN><A NAME=\"routing_table_metric\"></A>  Displays the <A HREF=\"glossary.htm#def_metric\">metric</A> of the connected node.", //_MSG526 
	"<SPAN STYLE=\"font-weight : bold;\">Type:</SPAN><A NAME=\"routing_table_type\"></A> Displays whether the node has a static or dynamic <A HREF=\"glossary.htm#def_ip_address\">IP address</A>.", //_MSG527 
	"This page enables you to set how the router forwards data.", //_MSG528 
	"This page enables you to define access restrictions, set up protocol and IP filters, create virtual servers, define access for special applications such as games, and set firewall rules.", //_MSG529 
	"The legal characters of MAC address must be 0~9, A~F, or a~f.", //_MSG53 
	"This screen enables you to allow and deny user access based upon a MAC list you create.", //_MSG530 
	"MAC Filters:  Enables you to allow or deny Internet access to users within the LAN based upon  the MAC address of their network interface. Click the radio button next to Disabled to disable the MAC filter function.", //_MSG531 
	"Disable: Disable the MAC filter function.", //_MSG532 
	"Allow: Only Allow computers/devices with MAC addresses listed below to access the local network (LAN/WLAN), web management, and the Internet.", //_MSG533 
	"Deny: Only deny computers with MAC address listed below to access the internet.", //_MSG534 
	"MAC Table: Use this section to create a user profile to which Internet access is denied or allowed.", //_MSG535 
	"The user profiles are listed in the table at the bottom of the page.", //_MSG536 
	"<SPAN STYLE=\"font-weight : bold;\">Note:</SPAN> <A NAME=\"addprotfilter\"></A> When selecting items in the table at the bottom, click anywhere in the item. The line is selected, and the fields automatically load the item's parameters, which you can edit:", //_MSG537 
	"Name: Type the name of the user to be permitted/denied access.", //_MSG538 
	"MAC Address: Type the MAC address of the user's network interface.", //_MSG539 
	"SSID can not be empty.", //_MSG54 
	"Add: Click to add the user to the list at the bottom of the page.", //_MSG540 
	"Update: Click to update information for the user, if you have changed any of the fields.", //_MSG541 
	"Delete: Select a user from the table at the bottom of the list and click Delete to remove the user profile.", //_MSG542 
	"URL Blocking is used to deny computers within the LAN (Local Area Network) from accessing specific web sites by its URL (Uniform Resource Locator). A URL is a specially formatted text string that defines a location on the Internet. If any part of the URL contains the blocked word, the site will not be accessible and the web page will not be displayed.Domain Blocking is used to deny or allow computers within the LAN (Local Area Network) from accessing specific domains on the Internet. Domain blocking will deny or allow all requests such as http and ftp to a specific domain. Select Allow users to access all domains except \"Blocked Domains\" if you allow users to access all domains except the domains in the Blocked Domains list. Select Deny users to access all domains except \"Permitted Domains\" if you only want users to access Permitted Domains.", //_MSG545 
	"Domain Blocking is used to deny or allow computers within the LAN (Local Area Network) from accessing specific domains on the Internet. Domain blocking will deny or allow all requests such as http and ftp to a specific domain. Select Allow users to access all domains except \"Blocked Domains\" if you allow users to access all domains except the domains in the Blocked Domains list. Select Deny users to access all domains except \"Permitted Domains\" if you only want users to access Permitted Domains.", //_MSG546 
	"<strong>Disable:</strong> Disable the Domain/URL Blocking function.", //_MSG547 
	"<strong>Allow:</strong> Allow users to access all domains in the Domains List.", //_MSG548 
	"<strong>Deny:</strong>  Deny users to access all domains in the Domains List.", //_MSG549 
	"The IP Address and the Gateway IP Address are not in the same subnet.", //_MSG55 
	"<strong>Domains List:</strong> List Domain/URL you will Denied or Allowed. ", //_MSG550 
	"<strong>Delete:</strong> Select a Domain/URL from the table at the bottom of the list and click Delete to remove the Domain/URL.", //_MSG551 
	"<strong>Add:</strong> Click the Add button to add domain to the Domains list.", //_MSG552 
	"This screen enables you to allow and deny access based upon a communications <A HREF=\"glossary.htm#def_protocol\">protocol/IP</A> list you create.", //_MSG554 
	"The protocol filter profiles are listed in the table at the bottom of the page.", //_MSG555 
	"<SPAN STYLE=\"font-weight : bold;\">Protocol Filter:</SPAN> Enables you to allow or deny Internet access to users based upon the communications <A HREF=\"glossary.htm#def_protocol\">protocol</A> of the origin. Click the radio button next to <SPAN STYLE=\"font-style : italic;\">Disabled</SPAN> to disable the protocol filter.", //_MSG557 
	"<SPAN STYLE=\"font-weight : bold;\">Disable:</SPAN> All protocols in the list are allowed to connect to the Internet via the LAN. (Create list items in section under  <A HREF=\"#access_protocol_filter_apf\">Add Protocol Filter</A>.)", //_MSG558 
	"<SPAN STYLE=\"font-weight : bold;\">Enable:</SPAN> Deny to access internet from LAN when The list below item be enable. (Create list items in section under <A HREF=\"#access_protocol_filter_apf\">Add Protocol Filter</A>.)", //_MSG559 
	"The confirmed password does not match the new Admin password.", //_MSG56 
	"<SPAN STYLE=\"font-weight : bold;\">Add Protocol Filter:</SPAN><A NAME=\"access_protocol_filter_apf\"></A> Use this section to create a profile for the protocol you want to permit or deny Internet access to.", //_MSG560 
	"<SPAN STYLE=\"font-weight : bold;\">Enable: </SPAN>Click to enable or disable the <A HREF=\"glossary.htm#def_protocol\">protocol</A> <A HREF=\"glossary.htm#def_filter\">filter</A>.", //_MSG561 
	"<SPAN STYLE=\"font-weight : bold;\">Name:</SPAN> Type a descriptive name for the <A HREF=\"glossary.htm#def_protocol\">protocol</A> <A HREF=\"glossary.htm#def_filter\">filter</A>.", //_MSG562 
	"<SPAN STYLE=\"font-weight : bold;\">Protocol: </SPAN>Select the protocol (<A HREF=\"glossary.htm#def_TCP\">TCP</A>,<A HREF=\"glossary.htm#def_UDP\">UDP</A>,  or <A HREF=\"glossary.htm#def_ICMP\">ICMP</A>) you want to allow/deny Internet access to from the drop-down list.", //_MSG563 
	"<SPAN STYLE=\"font-weight : bold;\">Port Range:</SPAN> Type the <A HREF=\"glossary.htm#def_port\">port</a> range that you want to block in the two text boxes.", //_MSG564 
	"<strong>IP Range:</strong>  Type the IP range. IP addresses falling between this value and the Range End are not allowed to access the Internet.", //_MSG565 
	"<SPAN STYLE=\"font-weight : bold;\">Add:</SPAN><SPAN STYLE=\"font-weight : normal;\"> Click to add the <A HREF=\"glossary.htm#def_protocol\">protocol</A> <A HREF=\"glossary.htm#def_filter\">filter</A> to the list at the bottom of the page.", //_MSG566 
	"<SPAN STYLE=\"font-weight : bold;\">Update:</SPAN> Click to update information for the <A HREF=\"glossary.htm#def_protocol\">protocol</A> <A HREF=\"glossary.htm#def_filter\">filter</A>, if you have changed any of the fields.", //_MSG567 
	"<SPAN STYLE=\"font-weight : bold;\">Delete:</SPAN> Select a <A HREF=\"glossary.htm#def_filter\">filter</A> profile from the table at the bottom of the list and click <SPAN STYLE=\"font-style : italic;\">Delete</SPAN> to remove the profile.Cancel:  Click the Cancel button to erase all fields and enter new information.", //_MSG568 
	"The confirmed password does not match the new User password.", //_MSG57 
	"This screen enables you to create a <A HREF=\"glossary.htm#def_virtual_server\">virtual server</A> via the router. If the router is set as a virtual server, remote users requesting Web or <A HREF=\"glossary.htm#def_FTP\">FTP</A> services through the <A HREF=\"glossary.htm#def_WAN\">WAN</A> are directed to local servers in the <A HREF=\"glossary.htm#def_LAN\">LAN</A>. The router redirects the request via the <A HREF=\"glossary.htm#def_protocol\">protocol</A> and <A HREF=\"glossary.htm#def_port\">port</A> numbers to the correct LAN server.", //_MSG570 
	"The Virtual Sever profiles are listed in the table at the bottom of the page.", //_MSG571 
	"<SPAN STYLE=\"font-weight : bold;\">Enable:</SPAN><A NAME=\"access_virtual_server_enable\"> Click to enable or disable the <A HREF=\"glossary.htm#def_virtual_server\">virtual server</A>.", //_MSG573 
	"<SPAN STYLE=\"font-weight : bold;\">Name:</SPAN><A NAME=\"access_virtual_server_name\"></A> Type a descriptive name for the <A HREF=\"glossary.htm#def_virtual_server\">virtual server</A>.", //_MSG574 
	"<SPAN STYLE=\"font-weight : bold;\">Protocol: </SPAN><A NAME=\"access_virtual_server_protocol\"></A> elect the <A HREF=\"glossary.htm#def_protocol\">protocol</A> (<A HREF=\"glossary.htm#def_TCP\">TCP</A> , <A HREF=\"glossary.htm#def_UDP\">UDP</A> or *(<A HREF=\"glossary.htm#def_TCP\">TCP</A> and <A HREF=\"glossary.htm#def_UDP\">UDP</A>) ) you want to use for the <A HREF=\"glossary.htm#def_virtual_server\">virtual server</A>.", //_MSG575 
	"<SPAN STYLE=\"font-weight : bold;\">Private Port:</SPAN><A NAME=\"access_virtual_server_private_port\"></A> Type the <A HREF=\"glossary.htm#def_port\">port</A> number of the computer on the <A HREF=\"glossary.htm#def_LAN\">LAN</A> that is being used to act as a <A HREF=\"glossary.htm#def_virtual_server\">virtual server</A>.", //_MSG576 
	"<SPAN STYLE=\"font-weight : bold;\">Public Port:</SPAN><A NAME=\"access_virtual_server_public_port\"></A> Type the <A HREF=\"glossary.htm#def_port\">port</A> number on the <A HREF=\"glossary.htm#def_WAN\">WAN</A> that will be used to provide access to the <A HREF=\"glossary.htm#def_virtual_server\">virtual server</A>.", //_MSG577 
	"<SPAN STYLE=\"font-weight : bold;\">LAN Server:</SPAN><A NAME=\"access_virtual_server_LAN_server\"></A> Type the <A HREF=\"glossary.htm#def_LAN\">LAN</A> <A HREF=\"glossary.htm#def_ip_address\">IP address</A> that will be assigned to the <A HREF=\"glossary.htm#def_virtual_server\">virtual server</A>.", //_MSG578 
	"<SPAN STYLE=\"font-weight : bold;\">Add:</SPAN> Click to add the <A HREF=\"glossary.htm#def_virtual_server\">virtual server</A> to the table at the bottom of the screen.", //_MSG579 
	"The selected WEP key field cannot be blank.", //_MSG58 
	"<SPAN STYLE=\"font-weight : bold;\">Update:</SPAN> Click to update information for the <A HREF=\"glossary.htm#def_virtual_server\">virtual server</A> if you have selected a list item and have made changes.", //_MSG580 
	"<SPAN STYLE=\"font-weight : bold;\">Delete: </SPAN>Select a list item and click <SPAN STYLE=\"font-style : italic;\">Delete</SPAN> to remove the item from the list.", //_MSG581 
	"This screen enables you to specify special applications.", //_MSG583 
	"The special applications profiles are listed in the table at the bottom of the page.", //_MSG584 
	"<SPAN STYLE=\"font-weight : bold;\">Enable: </SPAN><A NAME=\"access_special_AP_enable\"></A>Click to enable or disable the application profile. When enabled, users will be able to connect to the application via the router <A HREF=\"glossary.htm#def_WAN\">WAN</A> connection. Click Disabled on a profile to prevent users from accessing the application on the WAN.", //_MSG586 
	"<SPAN STYLE=\"font-weight : bold;\">Name:</SPAN><A NAME=\"access_special_AP_name\"> Type a descriptive name for the application.", //_MSG587 
	"<SPAN STYLE=\"font-weight : bold;\">Trigger:</SPAN><A NAME=\"access_special_AP_trigger\"></A> Defines the outgoing communication that determines whether the user has legitimate access to the application.", //_MSG588 
	"<SPAN STYLE=\"font-weight : bold;\">Protocol:</SPAN> Select the <A HREF=\"glossary.htm#def_protocol\">protocol</A> (<A HREF=\"glossary.htm#def_TCP\">TCP</A>, <A HREF=\"glossary.htm#def_UDP\">UDP</A>, or <A HREF=\"glossary.htm#def_ICMP\">ICMP</A>) that can be used to access the application.", //_MSG589 
	"The Confirmed Passphrase does not match the Passphrase.", //_MSG59 
	"<SPAN STYLE=\"font-weight : bold;\">Port Range: </SPAN>Type the <A HREF=\"glossary.htm#def_port\">port</A> range that can be used to access the application in the text boxes.", //_MSG590 
	"<SPAN STYLE=\"font-weight : bold;\">Incoming:</SPAN><A NAME=\"access_special_AP_incoming\"></A> Defines which incoming communications users are permitted to connect with.", //_MSG591 
	"<SPAN STYLE=\"font-weight : bold;\">Protocol:</SPAN> Select the <A HREF=\"glossary.htm#def_protocol\">protocol</A> (<A HREF=\"glossary.htm#def_TCP\">TCP</A>, <A HREF=\"glossary.htm#def_UDP\">UDP</A>, or <A HREF=\"glossary.htm#def_ICMP\">ICMP</A>) that can be used by the incoming communication.", //_MSG592 
	"<SPAN STYLE=\"font-weight : bold;\">Port:</SPAN> Type the <A HREF=\"glossary.htm#def_port\">port</A> number that can be used for the incoming communication.", //_MSG593 
	"<SPAN STYLE=\"font-weight : bold;\">Add:</SPAN> Click to add the special application profile to the table at the bottom of the screen.", //_MSG594 
	"<SPAN STYLE=\"font-weight : bold;\">Update:</SPAN> Click to update information for the special application if you have selected a list  item and have made changes.", //_MSG595 
	"<SPAN STYLE=\"font-weight : bold;\">Delete:</SPAN> Select a list item and click <SPAN STYLE=\"font-style : italic;\">Delete</SPAN> to remove the item from the list.", //_MSG596 
	"This screen enables you to create a <A HREF=\"glossary.htm#def_DMZ\">DMZ</A> for those computers that cannot access Internet applications properly through the router and associated security settings.", //_MSG599 
	"users to access all domains list.", //_MSG6 
	"The length of the Passphrase must be between 8 and 63 characters.", //_MSG60 
	"<SPAN STYLE=\"font-weight : bold;\">Enable:</SPAN><A NAME=\"access_dmz_enable\"> Click to enable or disable the <A HREF=\"glossary.htm#def_DMZ\">DMZ</A>.", //_MSG600 
	"<SPAN STYLE=\"font-weight : bold;\">DMZ Host IP:</SPAN><A NAME=\"access_dmz_host_ip\"></A> Type a <A HREF=\"glossary.htm#def_host_name\">host</A> <A HREF=\"glossary.htm#def_ip_address\"> IP address</A> for the <A HREF=\"glossary.htm#def_DMZ\">DMZ</A>. The computer with this IP address acts as a DMZ host with unlimited Internet access.", //_MSG601 
	"<SPAN STYLE=\"font-weight : bold;\">Note:</SPAN> Any clients added to the DMZ exposes the clients to security risks such as viruses and unauthorized access.", //_MSG602 
	"<SPAN STYLE=\"font-weight : bold;\">Apply:</SPAN> Click to save the settings.", //_MSG603 
	"This screen enables you to set up the <a href=\"glossary.htm#def_firewall\">firewall</A> . The router provides basic firewall functions, by filtering all the packets that enter the router using a set of rules. The rules are in an order sequence list-the lower the rule number, the higher the priority the rule has.  The rule profiles are listed in the table at the bottom of the page.", //_MSG604 
	"The rule profiles are listed in the table at the bottom of the page. ", //_MSG605 
	"<strong>Enable:</strong> Click to enable or disable the <a href=\"glossary.htm#def_firewall\">firewall</a>  rule profile.", //_MSG607 
	"<strong>Name:</strong><a name=\"access_firewall_enable\"></a> Type a descriptive name for the <a href=\"glossary.htm#def_firewall\">firewall</A>  rule profile.", //_MSG608 
	"<strong>Action:</strong><a name=\"access_firewall_action\"></a> Select whether to allow or deny <a href=\"glossary.htm#def_packet\">packets</A>  that conform to the rule.", //_MSG609 
	"The Passphrase must be 0~9, A~F, or a~f.", //_MSG61 
	"<strong>Source:</strong><a name=\"access_firewall_source\"></a> Defines the source of the incoming <a href=\"glossary.htm#def_packet\">packet</A>  that the rule is applied to.", //_MSG610 
	"<strong>Interface:</strong> Select which interface (<a href=\"glossary.htm#def_WAN\">WAN</A>  or LAN) the rule is applied to. ", //_MSG611 
	"<strong>IP Range Start:</strong> Type the start <a href=\"glossary.htm#def_ip_address\">IP address</a>  that the rule is applied to.", //_MSG612 
	"<strong>IP Range End: </strong>Type the end <a href=\"glossary.htm#def_ip_address\">IP address</a>  that the rule is applied to.", //_MSG613 
	"<strong>Destination:</strong><a name=\"access_firewall_destination\"></a> Defines the destination of the incoming <a href=\"glossary.htm#def_packet\">packet</A>  that the rule is applied to.", //_MSG614 
	"Interface: Select which interface ( WAN  or LAN) the rule is applied to.", //_MSG615 
	"<strong>Protocol:</strong> Select the <a href=\"glossary.htm#def_protocol\">protocol</a>  (<a href=\"glossary.htm#def_TCP\">TCP</a> , <a href=\"glossary.htm#def_UDP\">UDP</a> , or <a href=\"glossary.htm#def_ICMP\">ICMP</a> ) of the destination.", //_MSG618 
	"<strong>Port Range:</strong> Select the <a href=\"glossary.htm#def_port\">port </a>range.", //_MSG619 
	"Please enter another SMTP Server or IP Address.", //_MSG62 
	"<strong>Add:</strong><a name=\"access_ip_filter_add\"></a> Click to add the rule profile to the table at the bottom of the screen.", //_MSG620 
	"<strong>Update:</strong> <a name=\"access_ip_filter_update\"></a>Click to update information for the rule if you have selected a list item and have made changes. ", //_MSG621 
	"<strong>Delete:</strong><a name=\"access_ip_filter_delete\"></a> Select a list item and click Delete to remove the item from the list.", //_MSG622 
	"<strong>New: </strong><a name=\"access_ip_filter_new\"></a>Click New to erase all fields and enter new information.", //_MSG623 
	"<strong>Priority Up:</strong><a name=\"access_firewall_priority_up\"></a> Select a rule from the list and click Priority Up to increase the priority of the rule.", //_MSG624 
	"<strong>Priority Down:</strong><a name=\"access_firewall_priority_down\"></a>  Select a rule from the list and click Priority Down to decrease the priority of the rule.", //_MSG625 
	"<strong>Update Priority:</strong> <a name=\"access_firewall_update_priority\"></a>After increasing or decreasing the priority of a rule, click Update Priority to save the changes.", //_MSG626 
	"This screen enables you to set up SNMP and remote management features.", //_MSG627 
	"This screen enables you to set up SNMP.", //_MSG628 
	"Enabled/Disabled: Click to enable or disabled SNMP.", //_MSG629 
	"Please enter a valid email Address.", //_MSG63 
	"System Name : Display the name given to the router.", //_MSG630 
	"System Location :  Displays the location of the router (normally, the DNS name). ", //_MSG631 
	"System Contact : Displays the contact information for the person responsible for the router.", //_MSG632 
	"Community:  SNMP system name for exchanging SNMP community messages. The name can be used to limit SNMP messages passing through the network. The default name is 'private.'", //_MSG633 
	"This screen enables you to set up remote management. Using remote management, the router can be configured through the WAN via a Web browser. A user name and password are required to perform remote management.", //_MSG634 
	"<SPAN STYLE=\"font-weight : bold;\">HTTP:</SPAN><A NAME=\"manage_remote_management_HTTP\"></A> Enables you to set up <A HREF=\"glossary.htm#def_HTTP\">HTTP</A> access  for remote management.", //_MSG635 
	"<SPAN STYLE=\"font-weight : bold;\">Enable:</SPAN> Click to enable or disable <A HREF=\"glossary.htm#def_HTTP\">HTTP</A> access for remote management.", //_MSG636 
	"<SPAN STYLE=\"font-weight : bold;\">Remote IP Range:</SPAN> Type the range  of <A HREF=\"glossary.htm#def_ip_address\">IP addresses</A> that can be used for remote access.", //_MSG637 
	"<SPAN STYLE=\"font-weight : bold;\">Allow to Ping WAN Port:</SPAN><A NAME=\"manage_remote_management_allow_to_ping\"></A>Type a range of router <A HREF=\"glossary.htm#def_ip_address\">IP addresses</A> that can be <A HREF=\"glossary.htm#def_Ping\">pinged</A> from remote locations.", //_MSG638 
	"<strong>UPNP Enable:</strong> UPnP is short for Universal Plug and Play which is a networking architecture that provides compatibility among networking equipment, software, and peripherals. The Router is a UPnP enabled router and will only work with other UPnP devices/softwares. If you do not want to use the UPnP functionality, it can be disabled by selecting \"Disabled\". ", //_MSG639 
	"Are you sure that you want to delete this ?", //_MSG64 
	"<strong>PPTP:</strong> Enables users to set up PPTP connection between LAN and WAN ( pass-through). ", //_MSG640 
	"<strong>L2TP:</strong> Enables users to set up L2TP connection between LAN and WAN ( pass-through). ", //_MSG641 
	"<strong>IPSec:</strong> Enables users to set up IPSec connection between LAN and WAN ( pass-through). ", //_MSG642 
	"<strong>Multicast Stream:</strong> Enables or Disables users to set up multicast stream. If you have a multimedia LAN application that is not receiving content as expected, try enabling this option. Default is enabled. ", //_MSG643 
	"This page enables you to restart the system, save and load different  settings as profiles, restore factory default settings, run a <A HREF=\"help_wizard.htm\">setup wizard</A> to configure router settings, upgrade the <A HREF=\"glossary.htm#def_firmware\">firmware</A>,  and <A HREF=\"glossary.htm#def_Ping\">ping</A> remote IP addresses.", //_MSG644 
	"Click <SPAN STYLE=\"font-style : italic;\">Restart</SPAN> to restart the system in the event the system is not performing correctly.", //_MSG645 
	"This screen enables you to save your settings as a profile and load profiles for different circumstances. You can also load the factory default settings, and run a setup wizard to configure the router and router interface. ", //_MSG646 
	"<SPAN STYLE=\"font-weight : bold;\">Save Settings:</SPAN> Click to save the current configuration as a profile that you can load when necessary.", //_MSG647 
	"<SPAN STYLE=\"font-weight : bold;\">Load Settings:</SPAN> Click <SPAN STYLE=\"font-style : italic;\">Browse</SPAN> and go to the location of a stored profile. Click <SPAN STYLE=\"font-style : italic;\">Load</SPAN> to load the profile's settings.", //_MSG648 
	"<SPAN STYLE=\"font-weight : bold;\">Restore Factory Default Settings:</SPAN> Click to restore the default settings. All configuration changes you have made will be lost.", //_MSG649 
	"Load settings from a saved configuration file?", //_MSG65 
	"This screen enables you to keep the router firmware up to date.", //_MSG650 
	"Follow these instructions:", //_MSG651 
	"Download the latest firmware from the manufacturer's Web site, and save it to your disk.", //_MSG652 
	"Click <SPAN STYLE=\"font-style : italic;\">Browse</SPAN> and go to the location of the downloaded firmware file.", //_MSG653 
	"Select the file and click Upgrade to update the firmware to the latest release.", //_MSG654 
	"The <A HREF=\"glossary.htm#def_Ping\">ping</A> test enables you to determine whether an <A HREF=\"glossary.htm#def_ip_address\">IP address</A> or host is present on the Internet. Type the <A HREF=\"glossary.htm#def_host_name\">host</A> name or IP address in the text box and click Ping.", //_MSG655
	"The wizard enables you to configure the router quickly and conveniently. Follow these instructions:", //_MSG656
	"Click Wizard.", //_MSG657
	"Click <SPAN STYLE=\"font-style : italic;\">Next</SPAN>. You are prompted to select a password. Type a password in the text box, and then type it again for verification.", //_MSG658
	"Click <SPAN STYLE=\"font-style : italic;\">Next</SPAN>. Select your time zone from the drop-down list.", //_MSG659
	"Please enter another name.", //_MSG66 
	"Click <SPAN STYLE=\"font-style : italic;\">Next</SPAN>. Type the LAN <A HREF=\"glossary.htm#def_ip_address\">IP address</A> in the text box. The default IP address ", //_MSG660
	"Type the <A HREF=\"glossary.htm#def_subnet_mask\">subnet mask</A> in the text box.", //_MSG661
	"Enable DHCP Server if you want <A HREF=\"glossary.htm#def_dhcp\">DHCP</A> to automatically assign <A HREF=\"glossary.htm#def_ip_address\">IP addresses</A>. Type a beginning IP address and an end IP address for the DHCP server to use in assigning IP addresses.", //_MSG662
	"Click <SPAN STYLE=\"font-style : italic;\">Next</SPAN>. Select how the router will set up the Internet connection. If you have enabled <A HREF=\"glossary.htm#def_dhcp\">DHCP server</A>, choose \"Obtain IP automatically (DHCP client)\" to have the router assign <A HREF=\"glossary.htm#def_ip_address\">IP addresses</A> automatically.", //_MSG663
	"Click <SPAN STYLE=\"font-style : italic;\">Next</SPAN>. You are prompted to restart save the settings and restart the router interface. Click <SPAN STYLE=\"font-style : italic;\">Restart</SPAN> to complete the wizard.", //_MSG664
	"Glossary ", //_MSG665
	"back, top", //_MSG666
	"Access Point", //_MSG667
	"Access Point  Access points are way stations in a wireless LAN that are connected to an Ethernet hub or server. Users can roam within the range of  access points and their wireless device connections are passed from one access point to the next.", //_MSG668
	"Authentication refers to the verification of a transmitted message's integrity.", //_MSG669
	"Please enter another keyword.", //_MSG67 
	"DMZ (DeMilitarized Zone) is a part of an network that is located between a secure LAN and an insecure WAN. DMZs provide a way for some clients to have unrestricted access to the Internet.", //_MSG670
	"Refers to the interval between packets sent sent by access points for the purposes of synchronizing wireless LANs.", //_MSG671
	"DHCP (Dynamic Host Configuration Protocol) software automatically assigns IP addresses to client stations logging onto a TCP/IP network, which eliminates the need to manually assign permanent IP addresses.", //_MSG672
	"DNS stands for Domain Name System. DNS converts machine names to the IP addresses that all machines on the net have. It translates from name to address and from address to name. ", //_MSG673
	"Domain Name", //_MSG674
	"The domain name typically refers to an Internet site address.", //_MSG675
	"DTIM", //_MSG676
	"DTIM (Delivery Traffic Indication Message) provides client stations with information on the next opportunity to monitor for broadcast or multicast messages. ", //_MSG677
	"Filters are schemes which only allow specified data to be transmitted. For example, the router can filter specific IP addresses so that users cannot connect to those addresses.", //_MSG678
	"Firewalls are methods used to keep networks secure from malicious intruders and unauthorized access. Firewalls use filters to prevent unwanted packets from being transmitted. Firewalls are typically used to provide secure access to the Internet while keeping an organization's public Web server separate from the internal LAN. ", //_MSG679
	"This keyword is already existing in the keyword list.", //_MSG68 
	"Firmware refers to memory chips that retain their content without electrical power (for example, BIOS ROM). The router firmware stores settings made in the interface.", //_MSG680
	"Fragmentation", //_MSG681
	"Refers to the breaking up of data packets during transmission. ", //_MSG682
	"FTP (File Transfer Protocol) is used to transfer files over a TCP/IP network, and is typically used for transferring large files or uploading the HTML pages for a Web site to the Web server.", //_MSG683
	"Gateways are computers that convert protocols enabling different networks, applications, and operating systems to exchange information. ", //_MSG684
	"The name given to a computer or client station that acts as a source for information on the network.", //_MSG685
	"HTTP (HyperText Transport Protocol) is the communications protocol used to connect to servers on the World Wide Web. HTTP establishes a connection with a Web server and transmits HTML pages to client browser (for example Windows IE). HTTP addresses all begin with the prefix 'http://' prefix (for example, <SPAN STYLE=\"font-style : italic;\">http://www.trendnet.com</SPAN>). ", //_MSG686
	"ICMP (Internet Control Message Protocol) is a TCP/IP protocol used to send error and control messages over the LAN (for example, it is used by the router to notify a message sender that the destination node is not available).", //_MSG687
	"IP (Internet Protocol) is the protocol in the TCP/IP communications protocol suite that contains a network address and allows messages to be routed to a different network or subnet. However, IP does not ensure delivery of a complete message—TCP provides the function of ensuring delivery. ", //_MSG688
	"The IP (Internet Protocol) address refers to the address of a computer attached to a TCP/IP network. Every client and server station must have a unique IP address. Clients are assigned either a permanent address or have one dynamically assigned to them via DHCP. IP addresses are written as four sets of numbers separated by periods (for example, 211.23.181.189).", //_MSG689
	"Are you sure that you want to delete this IP filter?", //_MSG69 
	"ISP", //_MSG690
	"An ISP is an organization providing Internet access service via modems, ISDN (Integrated Services Digital Network), and private lines.", //_MSG691
	"LANs (Local Area Networks) are networks that serve users within specific geographical areas, such as in a company building. LANs are comprised of servers, workstations, a network operating system, and communications links such as the router. ", //_MSG692
	"A MAC address is a unique serial number burned into hardware adapters, giving the adapter a unique identification.", //_MSG693
	"A number that indicates how long a packet takes to get to its destination. ", //_MSG694
	"MTU (Maximum Transmission/Transfer Unit) is the largest packet size that can be sent over a network. Messages larger than the MTU are divided into smaller packets.", //_MSG695
	"(Network) Administrator", //_MSG696
	"The network administrator is the person who manages the LAN within an organization. The administrator's job includes ensuring network security, keeping software, hardware, and firmware up-to-date, and keeping track of network activity.", //_MSG697
	"NTP (Network Time Protocol) is used to synchronize the realtime clock in a computer. Internet primary and secondary servers synchronize to Coordinated Universal Time (UTC). ", //_MSG698
	"Packet", //_MSG699
	"null", //_MSG70 
	"A packet is a portion of data that is transmitted in network communications. Packets are also sometimes called frames and datagrams. Packets contain not only data, but also the destination IP address.", //_MSG700
	"Ping (Packet INternet Groper) is a utility used to find out if a particular IP address is present online, and is usually used by networks for debugging. ", //_MSG701
	"Ports are the communications pathways in and out of computers and network devices (routers and switches). Most PCs have serial and parallel ports, which are external sockets for connecting devices such as printers, modems, and mice. All network adapters use ports to connect to the LAN. Ports are typically numbered.", //_MSG702
	"PPPoE (Point-to-Point Protocol Over Ethernet) is used for running PPP protocol (normally used for dial-up Internet connections) over an Ethernet. ", //_MSG703
	"Preamble", //_MSG704
	"Preamble refers to the length of a CRC (Cyclic Redundancy Check) block that monitors communications between roaming wireless enabled devices and access points.", //_MSG705
	"Protocol", //_MSG706
	"A protocol is a rule that governs the communication of data. ", //_MSG707
	"RIP", //_MSG708
	"RIP (Routing Information Protocol) is a routing protocol that is integrated in the TCP/IP protocol. RIP finds a route that is based on the smallest number of hops between the source of a packet and its destination.", //_MSG709
	"This  is already existing in the list.", //_MSG71 
	"RTS", //_MSG710
	"RTS (Request To Send) is a signal sent from the transmitting station to the receiving station requesting permission to transmit data. ", //_MSG711
	"Server", //_MSG712
	"Servers are typically powerful and fast machines that store programs and data. The programs and data are shared by client machines (workstations) on the network.", //_MSG713
	"SMTP", //_MSG714
	"SMTP (Simple Mail Transfer Protocol) is the standard Internet e-mail protocol. SMTP is a TCP/IP protocol defining message format and includes a message transfer agent that stores and forwards mail. ", //_MSG715
	"SNMP (Simple Network Management Protocol) is a widely used network monitoring and control protocol. SNMP hardware or software components transmit network device activity data to the workstation used to oversee the network. ", //_MSG716
	"SSID (Service Set Identifier) is a security measure used in WLANs. The SSID is a unique identifier attached to packets sent over WLANs. This identifier emulates a password when a wireless device attempts communication on the WLAN. Because an SSID distinguishes WLANS from each other, access points and wireless devices trying to connect to a WLAN must use the same SSID. ", //_MSG717
	"Subnet Masks (SUBNETwork masks) are used by IP protocol to direct messages into a specified network segment (i.e., subnet). A subnet mask is stored in the client machine, server or router and is compared with an incoming IP address to determine whether to accept or reject the packet. ", //_MSG718
	"SysLog Server", //_MSG719
	"Are you sure that you want to delete this protocol filter?", //_MSG72 
	"A SysLog server monitors incoming Syslog messages and decodes the messages for logging purposes.", //_MSG720
	"(Transmission Control Protocol) is the transport protocol in TCP/IP that ensures messages over the network are transmitted accurately and completely. ", //_MSG721
	"TCP/IP", //_MSG722
	"TCP/IP (Transmission Control Protocol/Internet Protocol) is the main Internet communications protocol. The TCP part ensures that data is completely sent and received at the other end. Another part of the TCP/IP protocol set is UDP, which is used to send data when accuracy and guaranteed packet delivery are not as important (for example, in realtime video and audio transmission). ", //_MSG723
	"The IP component of TCP/IP provides data routability, meaning that data packets contain the destination station and network addresses, enabling TCP/IP messages to be sent to multiple networks within the LAN or in the WAN.", //_MSG724
	"Telnet", //_MSG725
	"Telnet is a terminal emulation protocol commonly used on the Internet and TCP- or IP-based networks. ", //_MSG726
	"Telnet is used for connecting to remote devices and running programs. Telnet is an integral component of the TCP/IP communications protocol.", //_MSG727
	"(User Datagram Protocol) is a protocol within TCP/IP that is used to transport information when accurate delivery isn't necessary (for example, realtime video and audio where packets can be dumped as there is no time for retransmitting the data). ", //_MSG728
	"Virtual Servers", //_MSG729
	"Please enter another port number.", //_MSG73 
	"Virtual servers are client servers (such as Web servers) that share resources with other virtual servers (i.e., it is not a dedicated server). ", //_MSG730
	"WEP (Wired Equivalent Privacy) is the de facto security protocol for wireless LANs, providing the \"equivalent\" security available in hardwired networks.", //_MSG731
	"<SPAN STYLE=\"font-style : normal;\">Wireless LANs (WLANs) </SPAN> are local area networks that use wireless communications for transmitting data. Transmissions are usually in the 2.4 GHz band. WLAN devices do not need to be lined up for communications like infrared devices. WLAN devices use access points which are connected to the wired LAN and provide connectivity to the LAN. The radio frequency of WLAN devices is strong enough to be transmitted through non-metal walls and objects, and can cover an area up to a thousand feet. Laptops and notebooks use wireless LAN PCMCIA cards while PCs use plug-in cards to access the WLAN. ", //_MSG732
	"WLAN", //_MSG733
	"<SPAN STYLE=\"font-style : normal;\">WLANs (Wireless LANs)</SPAN> are local area networks that use wireless communications for transmitting data. Transmissions are usually in the 2.4 GHz band. WLAN devices do not need to be lined up for communications like infrared devices. WLAN devices use access points which are connected to the wired LAN and provide connectivity to the LAN. The radio frequency of WLAN devices is strong enough to be transmitted through non-metal walls and objects, and can cover an area up to a thousand feet. Laptops and notebooks use wireless LAN PCMCIA cards while PCs use plug-in cards to access the WLAN.", //_MSG734
	"WAN (Wide Area Network) is a communications network that covers a wide geographic area such as a country (contrasted with a LAN, which covers a small area such as a company building). ", //_MSG735
	"Inbound Filter", //_MSG736
	"Outbound Filter", //_MSG737
	"Transmit", //_MSG738
	"Domain Blocking", //_MSG739
	"Please enter another Private Port number.", //_MSG74 
	"Domains List", //_MSG740
	"<strong>Cancel:</strong>  Click the Cancel button to erase all fields and enter new information.", //_MSG741
	"Note: When selecting items in the table at the bottom, click  anywhere in the item. The line is selected, and the fields automatically load the item's parameters, which you can edit.", //_MSG743
	"Dynamic", //_MSG744
	"Static", //_MSG745
	"Management", //_MSG746
	"Routing", //_MSG747
	"Status", //_MSG748
	"Main", //_MSG749
	"Please enter another Public Port number.", //_MSG75 
	"<SPAN STYLE=\"font-weight : bold;\">Note:</SPAN> When selecting items in the table at the bottom, <A HREF=\"#addprotfilter\">click</A> anywhere in the item. The line is selected, and the fields automatically load the item's parameters, which you can edit:", //_MSG750
	"default:100 msec, range:25~1000", //_MSG751
	"default:2346, range: 256~2346", //_MSG752
	"default:2346, range: 1500~2346, even number only", //_MSG753
	"default:1, range: 1~255", //_MSG754
	"Bigpond Logout", //_MSG755
	"The allowed number of static router is 40", //_MSG756
	"Login to the TEW-731BR", //_MSG757
	"Login Again", //_MSG758
	"Login Failed", //_MSG759
	"Port conflict.", //_MSG76 
	"DMZ Enable", //_MSG760
	"Russia PPPoE Disconnected", //_MSG761
	"PPTP Disconnected ", //_MSG762
	"L2TP Disconnected", //_MSG763
	"Bigpond Client Disconnected", //_MSG764
	"Russia PPTP Disconnected", //_MSG765
	"Russia L2TP Disconnected", //_MSG766
	"Bigpond Client", //_MSG767
	"802.11n AP Enable", //_MSG768
	"802.11n AP Disable", //_MSG769
	"Are you sure that you want to delete this special ap?", //_MSG77 
	"This web site address  is invalid ", //_MSG770
	"A PPTP password MUST be specified", //_MSG772
	"Schedule rules is Full! Please Delete an Entry.", //_MSG773
	"Reserved IP address  should be within the configured DHCP range.", //_MSG774
	"Reserved name is already used ", //_MSG776
	"Reserved IP address for this MAC address is already set.", //_MSG778
	"Please enter another Trigger Port number.", //_MSG78 
	"LAN IP is conflicted with LAN IP range, please enter again.", //_MSG780
	"WPS cannot work when WEP Authentication is used. You need go to Wireless/Security page to modify settings to make WPS take effect.", //_MSG781
	"The end port number must be greater than the start port number", //_MSG782
	"Exceeding the maximum number of firewall rule.", //_MSG783
	"Lan to Lan' or 'Wan to Wan' is not a valid setting", //_MSG784
	"A L2TP password MUST be specified", //_MSG785
	"The IP address can not be zero.", //_MSG786
	"Request timeout", //_MSG787
	"Please enter another Incoming Port number.", //_MSG79 
	"Block those URLs which contain keywords listed below.", //_MSG8 
	"Do you want to restart this router?", //_MSG80 
	"Please select a saved configuration file to upload.", //_MSG81 
	"Restore to Factory Default Settings?", //_MSG82 
	"Please select a file to upgrade the router.", //_MSG83 
	"Please enter a host name or an IP address.", //_MSG84 
	"Are you sure that you want to delete this firewall rule?", //_MSG85 
	"The Community can not be blank.", //_MSG86 
	"The Host Name must be 0~9, A~Z, or a~z.", //_MSG87 
	"The Server IP Address entered is invalid", //_MSG88 
	"The  has the same name.", //_MSG89 
	"NAT Endpoint Filtering", //_MSG9 
	"The  has the same MAC.", //_MSG90 
	" is conflicted with LAN IP address, please enter again.", //_MSG91 
	"Please enter another Static DHCP name.", //_MSG92 
	"The IP address and the Static IP address are not in the same domain.", //_MSG93 
	"Are you sure that you want to delete this Static DHCP address?", //_MSG94 
	"The IP Address cannot be in DHCP range.", //_MSG95 
	"Only the Admin account can restart the device", //_MSG96 
	"Only the Admin account can upgrade firmware", //_MSG97 
	"Only the Admin account can load the settings", //_MSG98 
	"User Name can not be empty.", //_MSG99 
	"MTU", //_MTU 
	"Multicast Stream", //_MuitlcastStr 
	"My IP", //_MyIP 
	"Name", //_Name 
	"Network Address", //_NetworkAddr 
	"Network Mask", //_NetworkMask 
	"New", //_New
	"New Password", //_NewPwd 
	"Next", //_Next
	"Next Page", //_NextPage 
	"No", //_No 
	"None", //_None 
	"Notice", //_Notice 
	"Nov", //_Nov 
	"NTP", //_NTP
	"Default NTP server", //_NTPser 
	"NTP Server", //_NTPSer 
	"Obtain IP Automatically", //_ObtainIPAuto 
	"Oct", //_Oct 
	"Connect-on Demand", //_OnDemand 
	"Only for MSCHAPv2", //_OnlyMSCHAPv2 
	"OPEN", //_open 
	"Open System", //_OpenSys 
	"optional", //_optional 
	"Packets", //_Packets 
	"Page", //_Page 
	"Passphrase", //_Passphrase 
	"Passward", //_Passward 
	"Peak", //_Peak 
	"Ping", //_Ping
	"Ping Test", //_PingTest 
	"PM", //_PM 
	"Port", //_Port 
	"Port Range", //_PortRange 
	"PPPoE", //_PPPoE
	"PPPoE Disconnected", //_PPPoEDiscon
	"PPTP", //_PPTP 
	"PPTP Account", //_PPTPaccount 
	"PPTP Password", //_PPTPpwd 
	"Previous Page", //_PreviousPage 
	"Primary", //_Primary 
	"Priority Down", //_PriorityDown 
	"Priority Up", //_PriorityUp 
	"Private Port", //_PriPort 
	"Protocol", //_Protocol 
	"Protocol/IP Filters", //_Protocol_IP_Filters 
	"Protocol Filters ", //_ProtocolFilters 
	"PSK", //_PSK 
	"PSK / EAP", //_PSKEAP
	"Public", //_Public 
	"Public Port", //_PubPort 
	"Push Button <br> Configuration", //_PushBtnConfig 
	"Password", //_Pwd 
	"Radius Server 1", //_RadiusServer1 
	"Radius Server 2", //_RadiusServer2 
	"range", //_range 
	"Range End", //_RangeEnd 
	"Range Start", //_RangeStart 
	"Receive", //_Receive 
	"Refresh", //_Refresh 
	"Remote IP Range", //_RemoteIPRange 
	"Remote Management", //_RemoteManage 
	"Reset", //_Reset
	"Restart", //_Restart 
	"Restart you router", //_RestartRouter 
	"Restore", //_Restore 
	"Restore configuration settings", //_RestoreConfig 
	"Restore factory default settings", //_RestoreDefault 
	"Restore Factory Default Settings", //_RestoreDefaultSet 
	"Retry", //_Retry 
	"Retype L2TP Password", //_RetypeL2TPPwd 
	"Retype PPTP Password", //_RetypePPTPPwd 
	"Retype Password", //_RetypePwd 
	"RIP 1", //_RIP1 
	"RIP 2", //_RIP2 
	"Routing Table", //_RoutingTb 
	"RTS Threshold", //_RTSthreshold 
	"Russia L2TP", //_RussiaL2TP
	"Russia PPPoE", //_RussiaPPPoE
	"Russia PPTP", //_RussiaPPTP
	"Sat", //_Sat 
	"Save", //_Save 
	"Save configuration settings", //_SaveConifg 
	"Save Settings", //_SaveSettings 
	"Second", //_Second 
	"Secondary", //_Secondary 
	"seconds", //_seconds 
	"Security", //_Security 
	"Select Internet Connection Type", //_Sel_InternetConnType 
	"Self-PIN Number", //_SelfPIN 
	"Send", //_Send 
	"Sep", //_Sep 
	"Server IP", //_SerIP 
	"Server IP / Name", //_SerIPName 
	"Server Address", //_ServerAddr  
	"Server Name", //_ServerName 
	"Service Name", //_ServiceName 
	"Set Dynamic IP Address", //_SetDynamicIP 
	"Set Fixed IP Address", //_SetFixedIP 
	"Set L2TP Client", //_SetL2TPclient 
	"Set PPPoE to obtain IP automatically", //_SetPPPoEdynamicIP 
	"Set PPPoE with a fixed IP Address", //_SetPPPoEfixedIP 
	"Set PPTP Client", //_SetPPTPclient 
	"Set Password", //_SetPwd 
	"Set the time", //_SetTime 
	"Set Time", //_SetTime 
	"Settings", //_Settings 
	"Setup Complete", //_SetupComplete 
	"Setup Wizard", //_SetupWizard 
	"Shared Key", //_SharedKey 
	"Shared Secret", //_SharedSecret 
	"sm-server", //_smSer 
	"SMTP Account", //_SMTPAccount 
	"SMTP Authentication ", //_SMTPAuth 
	"SMTP Password", //_SMTPPwd 
	"SMTP Server", //_SMTPSer 
	"SNMP", //_SNMP 
	"Special AP", //_SpecialAP 
	"Special AP Name", //_SpecialAPname 
	"Specify IP", //_SpecifyIP 
	"Source", //_Src 
	"SSID", //_SSID 
	"SSID Broadcast", //_SSIDbroadcast 
	"Start", //_Start 
	"Start IP", //_StartIP 
	"Start IP address", //_StartIPaddr 
	"Start PBC", //_StartPBC 
	"Start PIN", //_StartPIN 
	"Static DHCP", //_StaticDHCP 
	"Static DHCP List", //_StaticDHCPlist 
	"Static IP", //_StaticIP 
	"Statistic", //_Statistic 
	"Status", //_Status 
	"Stealth", //_Stealth 
	"Step 1.", //_Step1 
	"Step 2.", //_Step2 
	"Step 3.", //_Step3 
	"Step 4.", //_Step4 
	"Step 5.", //_Step5 
	"Step 6.", //_Step6 
	"Subnet Mask", //_Subnet 
	"Sun", //_Sun 
	"Synchronize the clock with", //_SyncClock 
	"Synchronize the Clock with NTP Server", //_SyncClockNTP 
	"System Activity", //_SysActivity 
	"System contact", //_SysContact 
	"System Location", //_SysLocation 
	"System Name", //_SysName 
	"System", //_System 
	"TCP", //_TCP 
	"TCP", //_TCP 
	"Thu", //_Thu 
	"Time", //_Time
	"Time Setting", //_TimeSet 
	"Time Zone", //_TimeZone 
	"TKIP", //_TKIP 
	"To", //_To 
	"To Email Address", //_ToEmail 
	"Tools", //_Tools
	"Trap Receiver 1", //_TrapReceiver 
	"TrendNet", //_TrendNet
	"Trigger", //_Trigger 
	"Trigger Port Range", //_TriggerPortRange 
	"Tue", //_Tue 
	"Type", //_Type
	"UDP", //_UDP 
	"UDP", //_UDP 
	"UnConfigured", //_UnConfigured 
	"Update", //_update 
	"Update Priority", //_UpdatePriority 
	"Upgrade", //_Upgrade 
	"Upgrade Firmware", //_UpgradeFirmware 
	"UPnP", //_UPnP 
	"<span><b><font size=\"3\">R</font><font size=\"3\">outer up time", //_UpTime 
	"User", //_User 
	"User Name", //_username
	"Utilization", //_Utilization 
	"Verify Password", //_VerifyPwd 
	"Virtual Server name", //_VirSerName 
	"Virtual Server", //_VirtualSer
	"WAN", //_WAN 
	"WAN IP Address", //_WAN_IP 
	"WAN Gateway Address", //_WANgwAddr 
	"WAN IP", //_WANIP 
	"WAN physical setting", //_WANPhy 
	"WAN Subnet Mask", //_WANSubnet 
	"Wed", //_Wed 
	"Week", //_Week 
	"WEP", //_WEP 
	"WEP Key", //_WEPkey 
	"WEP Key Format", //_WEPKeyFormat 
	"WEP Key Length", //_WEPkeyLength 
	"Wi-Fi Protected Setup", //_wifiPS 
	"WiFi Protected Setup", //_WiFiSetup
	"Wireless", //_Wireless 
	"Wireless Client List", //_WirelessClientList 
	"Wireless LAN", //_WirelessLAN 
	"Wizard", //_Wizard 
	"Display wizard next time", //_WizardNextTime 
	"WMM", //_WMM
	"WPA", //_WPA 
	"WPA2", //_WPA2 
	"WPA2AUTO-PSK", //_WPA2AUTOPSK
	"WPA2-PSK", //_WPA2PSK
	"WPA-AUTO", //_WPAauto 
	"WPA-PSK", //_WPAPSK
	"WPS", //_WPS 
	"Year", //_Year 
	"Yes", //_Yes 
	"Invalid password, please try again.", //li__alert__3 
	"Log in to the router", //li_intro 
	"please input the user name", //li_msg1 
	"Lan IP has been changed, please wait for ", //li_msg2
	"seconds …", //li_msg3
	"Setting is taking effect. Please click \"Continue\" button to do other settings", //li_msg4
	"Continue", //li_msg5
	"Link", //li_msg6
	"Please start WPS on the wireless device you are adding to your wireless network within", //li_msg7
	"computers/devices with MAC addresses listed below to access the local network (LAN/WLAN), web management, and the Internet.", //li_msg8
	"Wi-Fi Protected Setup (WPS) is used to easily add devices to a network using a PIN or button press. Devices must support Wi-Fi Protected Setup in order to be configured by this method.", //li_msg10
	"A PIN number is a unique number that can be used to identify each other when a pair of router and station using WPS to create a new network.", //li_msg11
	"The router's wireless setting is never modified by manual or WPS, it is un-configured state.", //li_msg12
	"and User passwords, and set the local time, time zone, and default", //li_msg127
	"This page enables you to set", //li_msg128
	"properties, such as the", //li_msg129
	"The router's wireless setting is modified by manual or WPS, it is configure state.", //li_msg13
	"LAN and DHCP profiles are listed in the DHCP table at the bottom of the screen.", //li_msg130
	"in the text box. The host name is required by some", //li_msg131
	"The default host name is", //li_msg132
	"This is the", //li_msg133
	"of the router. The default IP address is 192.168.10.1.", //li_msg134
	"for the router in the text box. The default subnet mask is", //li_msg135
	"Enables the", //li_msg136
	"server to allow the router to automatically assign IP addresses to devices connecting to the", //li_msg137
	"port or connected wirelessly to the TEW-731BR .. DHCP is enabled by default.", //li_msg138
	"Restore device to default.", //li_msg139
	"PushButton is used to trigger WPS proccess to create a new network. There are two kinds of PushButton, hardware and software PushButon (in Wireless/Wi-Fi Protection Setup page) for user to start WPS. To press the PushButton, the connection will be tried to create between router and user's device.", //li_msg14
	"Rebooting.", //li_msg140
	"Please do not power off the device or disconnect the network cable during firmware upgrade process.", //li_msg141
	"same domain and use old lan ip", //li_msg142
	"This web site address", //li_msg143
	"is invalid", //li_msg144
	"Are you sure you want to delete :", //li_msg145
	"Are you sure you want to update :", //li_msg146
	"Inbound filter is must smaller than", //li_msg147
	"Invalid IP address:", //li_msg148
	"Enable at least one Source IP Rang for", //li_msg149
	"This page enables you to define access restrictions, set up", //li_msg15
	"should be within the configured DHCP range.", //li_msg150
	"is already used.", //li_msg151
	"Reserved IP address for this MAC address", //li_msg152
	"is already set.", //li_msg153
	"Host name can not be empty", //li_msg154
	"Invalid character", //li_msg155
	"Syslog server IP address", //li_msg156
	"Please wait for ping", //li_msg157
	"result…", //li_msg158
	"Ping ip address", //li_msg159
	"define access for special applications such as games, and set", //li_msg16
	"The IP address can't allow enter loopback IP or multicase IP ( 127.x.x.x ).", //li_msg160
	"N/A", //li_msg161
	"Enables you to allow or deny Internet access to users within the LAN based upon the", //li_msg17
	"of their network interface. Click the radio button next to", //li_msg18
	"to disable the MAC filter function.", //li_msg19
	"Disable the MAC filter function.", //li_msg20
	"Only <b>Allow</b> computers/devices with MAC addresses listed below to access the local network (LAN/WLAN), web management, and the Internet.", //li_msg21
	"Only <b>Deny</b> computers/devices with MAC addresses listed below to access the local network (LAN/WLAN), web management, and the Internet.", //li_msg22
	"Use this section to create a user profile to which Internet access is denied or allowed.", //li_msg23
	"When selecting items in the table at the bottom,", //li_msg24
	"anywhere in the item. The line is selected, and the fields automatically load the item's parameters, which you can edit.", //li_msg25
	"Type the name of the user to be permitted/denied access.", //li_msg26
	"Type the", //li_msg27
	"of the user's network interface.", //li_msg28
	"Click to add the user to the list at the bottom of the page.", //li_msg29
	"Click to update information for the user, if you have changed any of the fields.", //li_msg30
	"Select a user from the table at the bottom of the list and click", //li_msg31
	"to remove the user profile.", //li_msg32
	"Click the", //li_msg33
	"button to erase all fields and enter new information.", //li_msg34
	"URL Blocking is used to deny computers within the LAN (Local Area Network) from accessing specific web sites by its URL (Uniform Resource Locator). A URL is a specially formatted text string that defines a location on the Internet. If any part of the URL contains the blocked word, the site will not be accessible and the web page will not be displayed.", //li_msg35
	"When selecting items in the table at the bottom, click anywhere in the item. The line is selected, and the fields automatically load the item's parameters, which you can edit:", //li_msg48
	"Note: Please add the MAC address using the MAC Table section below first, then select the option to \"Only Allow\" or \"Only Deny\" , and click \"Apply\".", //li_msg9
	"2.4Ghz", //_2_4G
	"Always", //_Always
	"AP Disable", //_AP_Disable
	"AP Enable", //_AP_Enable
	"Cipher Type", //_CipherType
	"Configured State", //_ConfigState
	"Connected", //_Connected
	"Connecting", //_Connecting
	"Disconnected", //_Disconnected
	"Disconnecting", //_Disconnecting
	"DNS Server", //_DNS_Ser
	"DNS Server 1", //_DNS_Ser1
	"DNS Server 2", //_DNS_Ser2
	"Duplex", //_Duplex
	"Firewall name", //_Firewallname
	"Edit protocol filter in list", //_ifmsg1
	"Idle Time", //_IdleTime
	"LAN1", //_LAN1
	"MAC filter", //_MACfilter
	"MAC name", //_MACname
	"Mbps", //_Mbps
	"Mode", //_Mode
	"<strong>Cancel:</strong> Click the Cancel button to erase all fields and enter new information. ", //_MSG569
	"<strong>Russia PPTP : </strong> When using PPTP, enter the following information in the fields (some information is provided by your <a href=\"glossary.htm#def_ISP\">ISP </a>) : ", //_MSG788
	"<strong>Russia L2TP: </strong>When using L2TP, enter the following information in the fields (some information is provided by your <a href=\"glossary.htm#def_ISP\">ISP </a>):", //_MSG789
	"Dynamic DNS (Domain Name Service) : is a method of keeping a domain name linked to a changing (dynamic) IP address. <br>With most Cable and DSL connections, you are assigned a dynamic IP address and that address is used only for the duration of that specific connection. <br>You can setup your DDNS service and the router will automatically update your DDNS server every time it receives a different IP address. First, you need to register your preferred DNS with the DDNS provider. <br>Then, please select the DDNS address in the Server Address and fill the related information in the below fields: Host Name, User Name and Password.", //_MSG790
	"This screen enables you to set up  remote management features.", //_MSG791
	"This screen allows you to enable and configure SNMP (Simple Network Management Protocol) on the router. Using SNMP, notification messages or SNMP Traps (router status/device information) can be sent from the router to external SNMP management stations/Trap Receivers for device monitoring purposes.", //_MSG792
	"Select Enable to enable SNMP on the router.", //_MSG793
	"Type the System Location to briefly describe the location of the device.", //_MSG794
	"System Location (optional)", //_MSG795
	"System Contact (optional)", //_MSG796
	"Type the System Contact to identify the name of the contact or device administrator.", //_MSG797
	"Type the SNMP community name. This should match the SNMP communicate of the external SNMP management station/Trap Receiver.", //_MSG798
	"Trap Receiver 1/2/3", //_MSG799
	"Type the IP address of the external SNMP management station/Trap Receiver.", //_MSG800
	"This screen enables you to set up remote management. Using remote management, the router can be configured through the <A HREF=\"glossary.htm#def_WAN\">WAN</A> via a Web browser. A user name and password are required to perform remote management.", //_MSG801
	"Multicast Stream", //_MuitlcastStream
	"Note", //_Note
	"Only", //_Only
	"PushButton Configuration (PBC)", //_PBC
	"Primary DNS", //_PrimaryDNS
	"Protocol Filter", //_ProtocolFilter
	"Release", //_Release
	"Remote IP End", //_RemoteIPEnd
	"Remote IP Start", //_RemoteIPStart
	"Renew", //_Renew
	"Reservation IP", //_ReservationIP
	"Reservation IP address", //_ReservationIPAddr
	"Reserved IP Address", //_ReservedIPAddr
	"Reserved name", //_Reservedname
	"Secondary DNS", //_SecondaryDNS
	"SMTP Server Port", //_SMTPSerPort
	"Statistics", //_Statistics
	"top", //_top
	"Un-configured State", //_UnconfiguredState
	"WPA|AUTO-PSK", //_WPA_Auto_PSK
	"WPA|AUTO-EAP", //_WPA_EAP
	"WPA2-EAP", //_WPA2EAP
	"WPA-EAP", //_WPAEAP
	"allow", //__allow
	"Always On", //__AlwaysOn 
	"and", //__and
	"back", //__back
	"click", //__click
	"create", //__create
	"Default", //__default
	"deny", //__deny
	"domain", //__domain
	"domain name", //__DomainName 
	"enable", //__enable
	"Exit", //__Exit
	"fail", //__fail
	"filter", //__filter
	"filters", //__filters
	"firewall", //__firewall
	"host", //__host
	"host name", //__hostname
	"none", //__none
	"open", //__open
	"or", //__or
	"packet", //__packet
	"packets", //__packets
	"parameters", //__parameters
	"port", //__port
	"protocol", //__protocol
	"rules", //__rules
	"server", //__server
	"set", //__set
	"special ap", //__special_ap
	"subnet mask", //__subnet
	"success", //__success
	"Success", //__Success
	"virtual servers", //__virtualservs
	"virtual server", //__virtualserv
	"Next >", //_gtNext
	"< Back", //_ltBack
	"PIN number", //_PINnum
	"Bigpond Login", //_bpalogin
	"Bigpond Logout", //_bpalogout
	"Language", //_Language
	"Upgrade Language", //_upd_lang
	"Checksum error.", //_upd_msg_checksum_err
	"Bad hardware ID.", //_upd_msg_bad_hwid
	"Unknow file format.", //_upd_msg_unknow_fmt
	"Upgrade success.", //_upd_msg_success
	"Fixed IP address", //_FixedIPAddr
	"&nbsp;TEW-731BR", //_snmp_system_name
	"Capture Packets", //_Ptrace
	"Network interface :", //_ptrace_sel_network
	"Stop", //_Stop
	"Download", //_Download
	"Auto stop at:", //_auto_stop
	"Get First ", //_Get_first
	"Get", //_Get
	"MB (Less than 2MB)", //_MSG802
	"Must be less than or equal 2MB", //_MSG803
	"Quick Install", //_QuickInstall
	"System Info", //_SystemInfo
	"WAN Status", //_WanStatus
	"DNS Info", //_DNSInfo
	"WLAN Status", //_WlanStatus
	"LAN Status", //_LanStatus
	"Reason", //_Reason
	"PHY IP", //_PHYIP
	"PHY Mask", //_PHYMask
	"PHY Gateway", //_PHYGateway
	"Radio Status", //_RadioStatus
	"WPS Status", //_WPSStatus
	"Connection Status", //_ConnStatus
	"WLAN Client", //_WlanClient
	"LAN Client", //_LanClient
	"Security Mode", //_SecurityMode
	"Hardware Version", //_HWVer
	"Uptime", //_SysUpTime
	"Cable Loss", //_CableLoss
	"The Server Name entered is invalid", //li_msg162
	"PPTP Account can not be empty", //li_msg163
	"L2TP Account can not be empty", //li_msg164
	"Diagnostic", //_Diagnostic
	"IPv6", //_IPv6
	"IPv6 - Automatic", //_IPv6Auto
	"6rd_Tunnel", //_6rdTunnel
	"6rd Configuration", //_6rdConfig
	"6rd DHCPv4 Option", //_6rdDhcpv4
	"Manual Configuration", //_6rdMaunal
	"6rd IPv6 Prefix", //_6rdIPv6Prefix
	"IPv4 Address", //_v4Addr
	"Mask Length", //_MaskLength
	"Assigned IPv6 Prefix", //_6rdPrefix
	"Tunnel Link-Local Address", //_TunnelAddress
	"6rd Border Relay IPv4 Address", //_6rdRelayv4Addr
	"Primary IPv6 DNS Server", //_v6dns1
	"Secondary IPv6 DNS Server", //_v6dns2
	"Only", //_Only1
	"WAN setting is taking effect. Please click \"Continue\" button to do other settings", //li_msg165
	"Capturing packets allows you to further analyze the contents of each data packet from a specified interface on the router for advanced monitoring and troubleshooting purposes. Once the packet capture file is downloaded from the router, a third party packet capture software application is required to open the file and view the contents.", //_MSG804
	"<SPAN STYLE=\"font-weight : bold;\">Network Interface:</SPAN> Select the network interface to capture packets.", //_MSG805
	"<SPAN STYLE=\"font-weight : bold;\">Start:</SPAN> Click <b>Start</b> to start capturing packets on the specified interface.", //_MSG806
	"<SPAN STYLE=\"font-weight : bold;\">Stop:</SPAN> Click <b>Stop</b> to stop capturing packets on the specified interface.", //_MSG807
	"<SPAN STYLE=\"font-weight : bold;\">Download:</SPAN> Click <b>Download</b> to download the packet capture file from the router. You will be prompted to choose a save location on your computer to save the file.", //_MSG808
	"Settings has been changed, please wait for ", //li_msg166
	"Activate 802.11n will set WMM enabled.", //_WWMInfo
	"Please specify an ip address to Remote IP Range", //verify_remote_ip
	"Invalid IP Address", //LS46
	"Auto-lock-down-state", //auto_lock
	"Unlock", //btn_auto_lock
	"The IPv6 address is illegal", //MSG042
	"Port Mirroring", //PortMirror_01
	"Mirror port", //PortMirror_02
	"Port mirroring setting", //PortMirror_03
	"TX", //PortMirror_04
	"RX", //PortMirror_05
	"The IPv6 address allows a double-colon only once.", //MSG041
	"If turn on hidden SSID; WPS2.0 will be disabled", //msg_wps_sec_03
	"If TKIP; WPS2.0 will be disabled", //msg_wps_sec_02
	"If WEP is turn on, WPS2.0 will be disabled", //msg_wps_sec_01
	"Unlocked", //stat_unlock
	"Locked", //stat_lock
	"When you set security WEP, cipher type is TKIP or Visibility Status is Invisible, WPS will be disable.", //notify_wps
	"WPS cannot work when TKIP Authentication is used. You need go to Wireless/Security page to modify settings to make WPS take effect.", //notify_wps_01
	"The restored configuration file is not correct. You may have restored a file that is not intended for this device, or the restored file may be corrupted.", //rs_intro_1
	"" //MAX
);
var _128bit =0;
var _1st =1;
var _20MHz =2;
var _2nd =3;
var _3rd =4;
var _4th =5;
var _5th =6;
var _64bit =7;
var _6th =8;
var _80211bg =9;
var _80211bgMix =10;
var _80211bgn =11;
var _80211bgnMix =12;
var _80211bOnly =13;
var _80211gOnly =14;
var _80211mode =15;
var _80211nOnly =16;
var _Access =17;
var _AccessCon =18;
var _Action =19;
var _Add =20;
var _AddStaticDHCP =21;
var _Admin =22;
var _AdmPwd =23;
var _Advanced =24;
var _AES =25;
var _Allow =26;
var _AllowPingWAN =27;
var _AlwaysOn =28;
var _AlwaysOn =29;
var _AM =30;
var _Apply =31;
var _Apr =32;
var _ASCII =33;
var _at =34;
var _Attacks =35;
var _Aug =36;
var _Authentication =37;
var _AuthSer =38;
var _AuthType =39;
var _Auto =40;
var _Auto20_40MHz =41;
var _AutoChannel =42;
var _Automatic =43;
var _AutoReconn =44;
var _Back=45;
var _Basic =46;
var _BeaconInterval =47;
var _BigPondCable=48;
var _Both =49;
var _bytes =50;
var _Cancel =51;
var _Channel =52;
var _ChannelWidth =53;
var _ChooseTimeZone =54;
var _Clear =55;
var _ClearLog =56;
var _ClientPIN =57;
var _CloneMAC =58;
var _Close =59;
var _Closed =60;
var _Community =61;
var _Config =62;
var _Configured =63;
var _ConfirmPassphrase =64;
var _ConfirmPwd =65;
var _Conn =66;
var _Connect=67;
var _connectTypeNone=68;
var _ConnTime =69;
var _conntype =70;
var _Day =71;
var _DaylightSaving =72;
var _Days =73;
var _dceSer =74;
var _DDNS =75;
var _DDNSserverList =76;
var _DebugInfo =77;
var _Dec =78;
var _default =79;
var _DefaultGW =80;
var _Delete =81;
var _Deny =82;
var _Dest =83;
var _DevInfo =84;
var _DHCP =85;
var _DHCPclient =86;
var _DHCPClient_FixedIP =87;
var _DHCPclientList =88;
var _DHCPorFix=89;
var _DHCPrelease=90;
var _DHCPrenew=91;
var _DHCPSer =92;
var _DHCPserEndIP =93;
var _DHCPserStartIP =94;
var _DHCPTable =95;
var _Disable =96;
var _Disabled =97;
var _Disconnect=98;
var _DMZ =99;
var _DMZHost=100;
var _DNS =101;
var _dns_err =102;
var _DNS1 =103;
var _DNS2 =104;
var _DNSAddr1 =105;
var _DNSAddr2 =106;
var _DNSServer1 =107;
var _DNSServer2 =108;
var _domain =109;
var _DomainName =110;
var _DomainUrlBlocking =111;
var _DomainUrlList =112;
var _DropPacket =113;
var _DTIMinterval =114;
var _DynamicIP =115;
var _DynDHCPlist =116;
var _dyndns =117;
var _EAP =118;
var _EmailLog =119;
var _EmailLogNow =120;
var _Enable =121;
var _Enabled =122;
var _Encryption =123;
var _EncryptionType =124;
var _End =125;
var _EndIP =126;
var _EndIPaddr =127;
var _EveryDay =128;
var _EveryFri =129;
var _EveryMon =130;
var _EverySat =131;
var _EverySun =132;
var _EveryThur =133;
var _EveryTues =134;
var _EveryWed =135;
var _Exit =136;
var _ExpiredTime =137;
var _Feb =138;
var _Filter =139;
var _FilterName =140;
var _Filters =141;
var _firewall =142;
var _FirewallRule=143;
var _FirewallSet =144;
var _FirewallSettings =145;
var _Firmware =146;
var _FirmwareVer =147;
var _FirstPage =148;
var _FixedIP=149;
var _FixedIP =150;
var _FragThreshold =151;
var _Fri =152;
var _From =153;
var _FromEmail =154;
var _FTP=155;
var _GMT_01 =156;
var _GMT_02 =157;
var _GMT_03 =158;
var _GMT_04 =159;
var _GMT_05 =160;
var _GMT_06 =161;
var _GMT_07 =162;
var _GMT_08 =163;
var _GMT_09 =164;
var _GMT_10 =165;
var _GMT_11 =166;
var _GMT_12 =167;
var _GMT_13 =168;
var _GMT_14 =169;
var _GMT_15 =170;
var _GMT_16 =171;
var _GMT_17 =172;
var _GMT_18 =173;
var _GMT_19 =174;
var _GMT_20 =175;
var _GMT_21 =176;
var _GMT_22 =177;
var _GMT_23 =178;
var _GMT_24 =179;
var _GMT_25 =180;
var _GMT_26 =181;
var _GMT_27 =182;
var _GMT_28 =183;
var _GMT_29 =184;
var _GMT_30 =185;
var _GMT_31 =186;
var _GMT_32 =187;
var _GMT_33 =188;
var _GMT_34 =189;
var _GMT_35 =190;
var _GMT_36 =191;
var _GMT_37 =192;
var _GMT_38 =193;
var _GMT_39 =194;
var _GMT_40 =195;
var _GMT_41 =196;
var _GMT_42 =197;
var _GMT_43 =198;
var _GMT_44 =199;
var _GMT_45 =200;
var _GMT_46 =201;
var _GMT_47 =202;
var _GMT_48 =203;
var _GMT_49 =204;
var _GMT_50 =205;
var _GMT_51 =206;
var _GMT_52 =207;
var _GMT_53 =208;
var _GMT_54 =209;
var _GMT_55 =210;
var _GMT_56 =211;
var _GMT_57 =212;
var _GMT_58 =213;
var _GMT_59 =214;
var _GMT_60 =215;
var _GMT_61 =216;
var _GMT_62 =217;
var _GMT_63 =218;
var _GMT_64 =219;
var _GMT_65 =220;
var _GMT_66 =221;
var _GMT_67 =222;
var _GMT_68 =223;
var _GMT_69 =224;
var _GMT_70 =225;
var _GMT_71 =226;
var _GMT_72 =227;
var _GMT_73 =228;
var _GMT_74 =229;
var _GMT_75 =230;
var _GW =231;
var _GWAddr =232;
var _Help =233;
var _HEX =234;
var _HostName =235;
var _HostName_IP =236;
var _Hour =237;
var _Hours =238;
var _HTTP =239;
var _ICMP =240;
var _IDENT =241;
var _IdleTimeOut =242;
var _Incoming =243;
var _IncomingPort =244;
var _Interface =245;
var _InvalidHostName =246;
var _InvalidPIN =247;
var _IP =248;
var _IP_Addr =249;
var _IPAuto=250;
var _IPRange =251;
var _IPRangeEnd =252;
var _IPRangeStart =253;
var _IPSec =254;
var _Jan =255;
var _Jul =256;
var _Jun =257;
var _Key =258;
var _L2TP =259;
var _L2TPaccount =260;
var _L2TPpwd =261;
var _LAN =262;
var _LAN_DHCPSer =263;
var _LAN_Serv =264;
var _LANipAddr =265;
var _LANsubnet =266;
var _LastPage =267;
var _LeaseTime =268;
var _Load =269;
var _LoadSettngs =270;
var _LocalTime =271;
var _Log =272;
var _LogFull =273;
var _Login =274;
var _loginErrMsg =275;
var _LoginIsAdmin =276;
var _LoginIsUser =277;
var _LoginSer =278;
var _LogSer =279;
var _LogSet =280;
var _LogSettings =281;
var _LogType =282;
var _LonginAdmin =283;
var _LonginUser =284;
var _MAC =285;
var _MACAddr =286;
var _MacFilter =287;
var _MacTable =288;
var _Manual =289;
var _ManualTimeSet =290;
var _Mar =291;
var _Mask =292;
var _May =293;
var _Message=294;
var _Metric =295;
var _Minute =296;
var _minutes =297;
var _Mon =298;
var _Month =299;
var _MPPE =300;
var _msec =301;
var _MSG1 =302;
var _MSG10 =303;
var _MSG100 =304;
var _MSG101 =305;
var _MSG102 =306;
var _MSG103 =307;
var _MSG104 =308;
var _MSG105 =309;
var _MSG106 =310;
var _MSG107 =311;
var _MSG108 =312;
var _MSG109 =313;
var _MSG11 =314;
var _MSG110 =315;
var _MSG111 =316;
var _MSG112 =317;
var _MSG113 =318;
var _MSG114 =319;
var _MSG115 =320;
var _MSG116 =321;
var _MSG117 =322;
var _MSG118 =323;
var _MSG119 =324;
var _MSG12 =325;
var _MSG120 =326;
var _MSG121 =327;
var _MSG122 =328;
var _MSG123 =329;
var _MSG124 =330;
var _MSG125 =331;
var _MSG126 =332;
var _MSG127 =333;
var _MSG128 =334;
var _MSG129 =335;
var _MSG13 =336;
var _MSG130 =337;
var _MSG131 =338;
var _MSG132 =339;
var _MSG133 =340;
var _MSG134 =341;
var _MSG135 =342;
var _MSG136 =343;
var _MSG137 =344;
var _MSG138 =345;
var _MSG139 =346;
var _MSG14 =347;
var _MSG140 =348;
var _MSG141 =349;
var _MSG142 =350;
var _MSG143 =351;
var _MSG144 =352;
var _MSG145 =353;
var _MSG146 =354;
var _MSG147 =355;
var _MSG148 =356;
var _MSG149 =357;
var _MSG15 =358;
var _MSG150 =359;
var _MSG151 =360;
var _MSG152 =361;
var _MSG153 =362;
var _MSG154 =363;
var _MSG155 =364;
var _MSG156 =365;
var _MSG157 =366;
var _MSG158 =367;
var _MSG159 =368;
var _MSG16 =369;
var _MSG160 =370;
var _MSG161 =371;
var _MSG162 =372;
var _MSG163 =373;
var _MSG164 =374;
var _MSG165 =375;
var _MSG166 =376;
var _MSG167 =377;
var _MSG168 =378;
var _MSG169 =379;
var _MSG17 =380;
var _MSG170 =381;
var _MSG171 =382;
var _MSG172 =383;
var _MSG173 =384;
var _MSG174 =385;
var _MSG175 =386;
var _MSG176 =387;
var _MSG177 =388;
var _MSG178 =389;
var _MSG179 =390;
var _MSG180 =391;
var _MSG181 =392;
var _MSG182 =393;
var _MSG183 =394;
var _MSG184 =395;
var _MSG185 =396;
var _MSG186 =397;
var _MSG187 =398;
var _MSG188 =399;
var _MSG189 =400;
var _MSG190 =401;
var _MSG191 =402;
var _MSG192 =403;
var _MSG193 =404;
var _MSG194 =405;
var _MSG195 =406;
var _MSG196 =407;
var _MSG197 =408;
var _MSG198 =409;
var _MSG199 =410;
var _MSG2 =411;
var _MSG200 =412;
var _MSG201 =413;
var _MSG202 =414;
var _MSG203 =415;
var _MSG204 =416;
var _MSG205 =417;
var _MSG206 =418;
var _MSG207 =419;
var _MSG208 =420;
var _MSG209 =421;
var _MSG210 =422;
var _MSG211 =423;
var _MSG212 =424;
var _MSG213 =425;
var _MSG214 =426;
var _MSG215 =427;
var _MSG216 =428;
var _MSG217 =429;
var _MSG218 =430;
var _MSG219 =431;
var _MSG220 =432;
var _MSG221 =433;
var _MSG222 =434;
var _MSG223 =435;
var _MSG224 =436;
var _MSG225 =437;
var _MSG226 =438;
var _MSG227 =439;
var _MSG228 =440;
var _MSG229 =441;
var _MSG230 =442;
var _MSG231 =443;
var _MSG232 =444;
var _MSG233 =445;
var _MSG234 =446;
var _MSG235 =447;
var _MSG236 =448;
var _MSG237 =449;
var _MSG238 =450;
var _MSG239 =451;
var _MSG24 =452;
var _MSG240 =453;
var _MSG241 =454;
var _MSG242 =455;
var _MSG243 =456;
var _MSG244 =457;
var _MSG245 =458;
var _MSG246 =459;
var _MSG247 =460;
var _MSG248 =461;
var _MSG249 =462;
var _MSG25 =463;
var _MSG250 =464;
var _MSG251 =465;
var _MSG252 =466;
var _MSG253 =467;
var _MSG254 =468;
var _MSG255 =469;
var _MSG257 =470;
var _MSG258 =471;
var _MSG259 =472;
var _MSG26 =473;
var _MSG260 =474;
var _MSG261 =475;
var _MSG262 =476;
var _MSG263 =477;
var _MSG264 =478;
var _MSG265 =479;
var _MSG266 =480;
var _MSG267 =481;
var _MSG268 =482;
var _MSG269 =483;
var _MSG27 =484;
var _MSG270 =485;
var _MSG271 =486;
var _MSG272 =487;
var _MSG273 =488;
var _MSG274 =489;
var _MSG275 =490;
var _MSG276 =491;
var _MSG277 =492;
var _MSG278 =493;
var _MSG279 =494;
var _MSG28 =495;
var _MSG280 =496;
var _MSG281 =497;
var _MSG282 =498;
var _MSG283 =499;
var _MSG284 =500;
var _MSG285 =501;
var _MSG286 =502;
var _MSG287 =503;
var _MSG288 =504;
var _MSG289 =505;
var _MSG29 =506;
var _MSG290 =507;
var _MSG291 =508;
var _MSG292 =509;
var _MSG293 =510;
var _MSG294 =511;
var _MSG295 =512;
var _MSG296 =513;
var _MSG297 =514;
var _MSG298 =515;
var _MSG299 =516;
var _MSG3 =517;
var _MSG30 =518;
var _MSG300 =519;
var _MSG301 =520;
var _MSG302 =521;
var _MSG303 =522;
var _MSG304 =523;
var _MSG305 =524;
var _MSG306 =525;
var _MSG307 =526;
var _MSG308 =527;
var _MSG309 =528;
var _MSG309 =529;
var _MSG31 =530;
var _MSG310 =531;
var _MSG311 =532;
var _MSG312=533;
var _MSG313 =534;
var _MSG314 =535;
var _MSG315 =536;
var _MSG316 =537;
var _MSG317 =538;
var _MSG318 =539;
var _MSG319=540;
var _MSG32 =541;
var _MSG320 =542;
var _MSG321 =543;
var _MSG322 =544;
var _MSG323 =545;
var _MSG324 =546;
var _MSG325 =547;
var _MSG326 =548;
var _MSG327 =549;
var _MSG328 =550;
var _MSG329 =551;
var _MSG33 =552;
var _MSG330 =553;
var _MSG331 =554;
var _MSG332 =555;
var _MSG333 =556;
var _MSG334 =557;
var _MSG335 =558;
var _MSG336 =559;
var _MSG337 =560;
var _MSG338 =561;
var _MSG339 =562;
var _MSG34 =563;
var _MSG340 =564;
var _MSG341 =565;
var _MSG342 =566;
var _MSG343 =567;
var _MSG344 =568;
var _MSG345 =569;
var _MSG346 =570;
var _MSG347 =571;
var _MSG348 =572;
var _MSG349 =573;
var _MSG35 =574;
var _MSG350 =575;
var _MSG351 =576;
var _MSG352 =577;
var _MSG353 =578;
var _MSG354 =579;
var _MSG355 =580;
var _MSG356 =581;
var _MSG357 =582;
var _MSG358 =583;
var _MSG359 =584;
var _MSG36 =585;
var _MSG360 =586;
var _MSG361 =587;
var _MSG362 =588;
var _MSG363 =589;
var _MSG364 =590;
var _MSG365 =591;
var _MSG366 =592;
var _MSG367 =593;
var _MSG368 =594;
var _MSG369 =595;
var _MSG37 =596;
var _MSG370 =597;
var _MSG371 =598;
var _MSG372 =599;
var _MSG373 =600;
var _MSG374 =601;
var _MSG375 =602;
var _MSG376 =603;
var _MSG377 =604;
var _MSG378 =605;
var _MSG379 =606;
var _MSG38 =607;
var _MSG380 =608;
var _MSG381 =609;
var _MSG382 =610;
var _MSG383 =611;
var _MSG384 =612;
var _MSG385 =613;
var _MSG386 =614;
var _MSG387 =615;
var _MSG388 =616;
var _MSG389 =617;
var _MSG39 =618;
var _MSG390 =619;
var _MSG391 =620;
var _MSG392 =621;
var _MSG393 =622;
var _MSG394 =623;
var _MSG395 =624;
var _MSG396 =625;
var _MSG397 =626;
var _MSG398 =627;
var _MSG399 =628;
var _MSG4 =629;
var _MSG40 =630;
var _MSG400 =631;
var _MSG401 =632;
var _MSG402 =633;
var _MSG403 =634;
var _MSG404 =635;
var _MSG405 =636;
var _MSG406 =637;
var _MSG407 =638;
var _MSG408 =639;
var _MSG409 =640;
var _MSG41 =641;
var _MSG410 =642;
var _MSG411 =643;
var _MSG412 =644;
var _MSG413 =645;
var _MSG414 =646;
var _MSG415 =647;
var _MSG416 =648;
var _MSG417 =649;
var _MSG418 =650;
var _MSG419 =651;
var _MSG42 =652;
var _MSG420 =653;
var _MSG421 =654;
var _MSG422 =655;
var _MSG423 =656;
var _MSG424 =657;
var _MSG425 =658;
var _MSG426 =659;
var _MSG427 =660;
var _MSG428 =661;
var _MSG429 =662;
var _MSG43 =663;
var _MSG430 =664;
var _MSG431 =665;
var _MSG432 =666;
var _MSG433 =667;
var _MSG434 =668;
var _MSG435 =669;
var _MSG436 =670;
var _MSG437 =671;
var _MSG438 =672;
var _MSG44 =673;
var _MSG442 =674;
var _MSG443 =675;
var _MSG444 =676;
var _MSG445 =677;
var _MSG446 =678;
var _MSG447 =679;
var _MSG448 =680;
var _MSG449 =681;
var _MSG45 =682;
var _MSG450 =683;
var _MSG451 =684;
var _MSG454 =685;
var _MSG455 =686;
var _MSG456 =687;
var _MSG46 =688;
var _MSG460 =689;
var _MSG461 =690;
var _MSG462 =691;
var _MSG468 =692;
var _MSG47 =693;
var _MSG474 =694;
var _MSG475 =695;
var _MSG476 =696;
var _MSG482 =697;
var _MSG487 =698;
var _MSG488 =699;
var _MSG489 =700;
var _MSG49 =701;
var _MSG490 =702;
var _MSG495 =703;
var _MSG496 =704;
var _MSG497 =705;
var _MSG498 =706;
var _MSG499 =707;
var _MSG5 =708;
var _MSG50 =709;
var _MSG500 =710;
var _MSG501 =711;
var _MSG502 =712;
var _MSG503 =713;
var _MSG504 =714;
var _MSG505 =715;
var _MSG506 =716;
var _MSG507 =717;
var _MSG508 =718;
var _MSG509 =719;
var _MSG51 =720;
var _MSG510 =721;
var _MSG511 =722;
var _MSG512 =723;
var _MSG513 =724;
var _MSG514 =725;
var _MSG515 =726;
var _MSG516 =727;
var _MSG517 =728;
var _MSG519 =729;
var _MSG52 =730;
var _MSG520 =731;
var _MSG521 =732;
var _MSG522 =733;
var _MSG523 =734;
var _MSG524 =735;
var _MSG525 =736;
var _MSG526 =737;
var _MSG527 =738;
var _MSG528 =739;
var _MSG529 =740;
var _MSG53 =741;
var _MSG530 =742;
var _MSG531 =743;
var _MSG532 =744;
var _MSG533 =745;
var _MSG534 =746;
var _MSG535 =747;
var _MSG536 =748;
var _MSG537 =749;
var _MSG538 =750;
var _MSG539 =751;
var _MSG54 =752;
var _MSG540 =753;
var _MSG541 =754;
var _MSG542 =755;
var _MSG545 =756;
var _MSG546 =757;
var _MSG547 =758;
var _MSG548 =759;
var _MSG549 =760;
var _MSG55 =761;
var _MSG550 =762;
var _MSG551 =763;
var _MSG552 =764;
var _MSG554 =765;
var _MSG555 =766;
var _MSG557 =767;
var _MSG558 =768;
var _MSG559 =769;
var _MSG56 =770;
var _MSG560 =771;
var _MSG561 =772;
var _MSG562 =773;
var _MSG563 =774;
var _MSG564 =775;
var _MSG565 =776;
var _MSG566 =777;
var _MSG567 =778;
var _MSG568 =779;
var _MSG57 =780;
var _MSG570 =781;
var _MSG571 =782;
var _MSG573 =783;
var _MSG574 =784;
var _MSG575 =785;
var _MSG576 =786;
var _MSG577 =787;
var _MSG578 =788;
var _MSG579 =789;
var _MSG58 =790;
var _MSG580 =791;
var _MSG581 =792;
var _MSG583 =793;
var _MSG584 =794;
var _MSG586 =795;
var _MSG587 =796;
var _MSG588 =797;
var _MSG589 =798;
var _MSG59 =799;
var _MSG590 =800;
var _MSG591 =801;
var _MSG592 =802;
var _MSG593 =803;
var _MSG594 =804;
var _MSG595 =805;
var _MSG596 =806;
var _MSG599 =807;
var _MSG6 =808;
var _MSG60 =809;
var _MSG600 =810;
var _MSG601 =811;
var _MSG602 =812;
var _MSG603 =813;
var _MSG604 =814;
var _MSG605 =815;
var _MSG607 =816;
var _MSG608 =817;
var _MSG609 =818;
var _MSG61 =819;
var _MSG610 =820;
var _MSG611 =821;
var _MSG612 =822;
var _MSG613 =823;
var _MSG614 =824;
var _MSG615 =825;
var _MSG618 =826;
var _MSG619 =827;
var _MSG62 =828;
var _MSG620 =829;
var _MSG621 =830;
var _MSG622 =831;
var _MSG623 =832;
var _MSG624 =833;
var _MSG625 =834;
var _MSG626 =835;
var _MSG627 =836;
var _MSG628 =837;
var _MSG629 =838;
var _MSG63 =839;
var _MSG630 =840;
var _MSG631 =841;
var _MSG632 =842;
var _MSG633 =843;
var _MSG634 =844;
var _MSG635 =845;
var _MSG636 =846;
var _MSG637 =847;
var _MSG638 =848;
var _MSG639 =849;
var _MSG64 =850;
var _MSG640 =851;
var _MSG641 =852;
var _MSG642 =853;
var _MSG643 =854;
var _MSG644 =855;
var _MSG645 =856;
var _MSG646 =857;
var _MSG647 =858;
var _MSG648 =859;
var _MSG649 =860;
var _MSG65 =861;
var _MSG650 =862;
var _MSG651 =863;
var _MSG652 =864;
var _MSG653 =865;
var _MSG654 =866;
var _MSG655=867;
var _MSG656=868;
var _MSG657=869;
var _MSG658=870;
var _MSG659=871;
var _MSG66 =872;
var _MSG660=873;
var _MSG661=874;
var _MSG662=875;
var _MSG663=876;
var _MSG664=877;
var _MSG665=878;
var _MSG666=879;
var _MSG667=880;
var _MSG668=881;
var _MSG669=882;
var _MSG67 =883;
var _MSG670=884;
var _MSG671=885;
var _MSG672=886;
var _MSG673=887;
var _MSG674=888;
var _MSG675=889;
var _MSG676=890;
var _MSG677=891;
var _MSG678=892;
var _MSG679=893;
var _MSG68 =894;
var _MSG680=895;
var _MSG681=896;
var _MSG682=897;
var _MSG683=898;
var _MSG684=899;
var _MSG685=900;
var _MSG686=901;
var _MSG687=902;
var _MSG688=903;
var _MSG689=904;
var _MSG69 =905;
var _MSG690=906;
var _MSG691=907;
var _MSG692=908;
var _MSG693=909;
var _MSG694=910;
var _MSG695=911;
var _MSG696=912;
var _MSG697=913;
var _MSG698=914;
var _MSG699=915;
var _MSG70 =916;
var _MSG700=917;
var _MSG701=918;
var _MSG702=919;
var _MSG703=920;
var _MSG704=921;
var _MSG705=922;
var _MSG706=923;
var _MSG707=924;
var _MSG708=925;
var _MSG709=926;
var _MSG71 =927;
var _MSG710=928;
var _MSG711=929;
var _MSG712=930;
var _MSG713=931;
var _MSG714=932;
var _MSG715=933;
var _MSG716=934;
var _MSG717=935;
var _MSG718=936;
var _MSG719=937;
var _MSG72 =938;
var _MSG720=939;
var _MSG721=940;
var _MSG722=941;
var _MSG723=942;
var _MSG724=943;
var _MSG725=944;
var _MSG726=945;
var _MSG727=946;
var _MSG728=947;
var _MSG729=948;
var _MSG73 =949;
var _MSG730=950;
var _MSG731=951;
var _MSG732=952;
var _MSG733=953;
var _MSG734=954;
var _MSG735=955;
var _MSG736=956;
var _MSG737=957;
var _MSG738=958;
var _MSG739=959;
var _MSG74 =960;
var _MSG740=961;
var _MSG741=962;
var _MSG743=963;
var _MSG744=964;
var _MSG745=965;
var _MSG746=966;
var _MSG747=967;
var _MSG748=968;
var _MSG749=969;
var _MSG75 =970;
var _MSG750=971;
var _MSG751=972;
var _MSG752=973;
var _MSG753=974;
var _MSG754=975;
var _MSG755=976;
var _MSG756=977;
var _MSG757=978;
var _MSG758=979;
var _MSG759=980;
var _MSG76 =981;
var _MSG760=982;
var _MSG761=983;
var _MSG762=984;
var _MSG763=985;
var _MSG764=986;
var _MSG765=987;
var _MSG766=988;
var _MSG767=989;
var _MSG768=990;
var _MSG769=991;
var _MSG77 =992;
var _MSG770=993;
var _MSG772=994;
var _MSG773=995;
var _MSG774=996;
var _MSG776=997;
var _MSG778=998;
var _MSG78 =999;
var _MSG780=1000;
var _MSG781=1001;
var _MSG782=1002;
var _MSG783=1003;
var _MSG784=1004;
var _MSG785=1005;
var _MSG786=1006;
var _MSG787=1007;
var _MSG79 =1008;
var _MSG8 =1009;
var _MSG80 =1010;
var _MSG81 =1011;
var _MSG82 =1012;
var _MSG83 =1013;
var _MSG84 =1014;
var _MSG85 =1015;
var _MSG86 =1016;
var _MSG87 =1017;
var _MSG88 =1018;
var _MSG89 =1019;
var _MSG9 =1020;
var _MSG90 =1021;
var _MSG91 =1022;
var _MSG92 =1023;
var _MSG93 =1024;
var _MSG94 =1025;
var _MSG95 =1026;
var _MSG96 =1027;
var _MSG97 =1028;
var _MSG98 =1029;
var _MSG99 =1030;
var _MTU =1031;
var _MuitlcastStr =1032;
var _MyIP =1033;
var _Name =1034;
var _NetworkAddr =1035;
var _NetworkMask =1036;
var _New=1037;
var _NewPwd =1038;
var _Next=1039;
var _NextPage =1040;
var _No =1041;
var _None =1042;
var _Notice =1043;
var _Nov =1044;
var _NTP=1045;
var _NTPser =1046;
var _NTPSer =1047;
var _ObtainIPAuto =1048;
var _Oct =1049;
var _OnDemand =1050;
var _OnlyMSCHAPv2 =1051;
var _open =1052;
var _OpenSys =1053;
var _optional =1054;
var _Packets =1055;
var _Page =1056;
var _Passphrase =1057;
var _Passward =1058;
var _Peak =1059;
var _Ping=1060;
var _PingTest =1061;
var _PM =1062;
var _Port =1063;
var _PortRange =1064;
var _PPPoE=1065;
var _PPPoEDiscon=1066;
var _PPTP =1067;
var _PPTPaccount =1068;
var _PPTPpwd =1069;
var _PreviousPage =1070;
var _Primary =1071;
var _PriorityDown =1072;
var _PriorityUp =1073;
var _PriPort =1074;
var _Protocol =1075;
var _Protocol_IP_Filters =1076;
var _ProtocolFilters =1077;
var _PSK =1078;
var _PSKEAP=1079;
var _Public =1080;
var _PubPort =1081;
var _PushBtnConfig =1082;
var _Pwd =1083;
var _RadiusServer1 =1084;
var _RadiusServer2 =1085;
var _range =1086;
var _RangeEnd =1087;
var _RangeStart =1088;
var _Receive =1089;
var _Refresh =1090;
var _RemoteIPRange =1091;
var _RemoteManage =1092;
var _Reset=1093;
var _Restart =1094;
var _RestartRouter =1095;
var _Restore =1096;
var _RestoreConfig =1097;
var _RestoreDefault =1098;
var _RestoreDefaultSet =1099;
var _Retry =1100;
var _RetypeL2TPPwd =1101;
var _RetypePPTPPwd =1102;
var _RetypePwd =1103;
var _RIP1 =1104;
var _RIP2 =1105;
var _RoutingTb =1106;
var _RTSthreshold =1107;
var _RussiaL2TP=1108;
var _RussiaPPPoE=1109;
var _RussiaPPTP=1110;
var _Sat =1111;
var _Save =1112;
var _SaveConifg =1113;
var _SaveSettings =1114;
var _Second =1115;
var _Secondary =1116;
var _seconds =1117;
var _Security =1118;
var _Sel_InternetConnType =1119;
var _SelfPIN =1120;
var _Send =1121;
var _Sep =1122;
var _SerIP =1123;
var _SerIPName =1124;
var _ServerAddr  =1125;
var _ServerName =1126;
var _ServiceName =1127;
var _SetDynamicIP =1128;
var _SetFixedIP =1129;
var _SetL2TPclient =1130;
var _SetPPPoEdynamicIP =1131;
var _SetPPPoEfixedIP =1132;
var _SetPPTPclient =1133;
var _SetPwd =1134;
var _SetTime =1135;
var _SetTime =1136;
var _Settings =1137;
var _SetupComplete =1138;
var _SetupWizard =1139;
var _SharedKey =1140;
var _SharedSecret =1141;
var _smSer =1142;
var _SMTPAccount =1143;
var _SMTPAuth =1144;
var _SMTPPwd =1145;
var _SMTPSer =1146;
var _SNMP =1147;
var _SpecialAP =1148;
var _SpecialAPname =1149;
var _SpecifyIP =1150;
var _Src =1151;
var _SSID =1152;
var _SSIDbroadcast =1153;
var _Start =1154;
var _StartIP =1155;
var _StartIPaddr =1156;
var _StartPBC =1157;
var _StartPIN =1158;
var _StaticDHCP =1159;
var _StaticDHCPlist =1160;
var _StaticIP =1161;
var _Statistic =1162;
var _Status =1163;
var _Stealth =1164;
var _Step1 =1165;
var _Step2 =1166;
var _Step3 =1167;
var _Step4 =1168;
var _Step5 =1169;
var _Step6 =1170;
var _Subnet =1171;
var _Sun =1172;
var _SyncClock =1173;
var _SyncClockNTP =1174;
var _SysActivity =1175;
var _SysContact =1176;
var _SysLocation =1177;
var _SysName =1178;
var _System =1179;
var _TCP =1180;
var _TCP =1181;
var _Thu =1182;
var _Time=1183;
var _TimeSet =1184;
var _TimeZone =1185;
var _TKIP =1186;
var _To =1187;
var _ToEmail =1188;
var _Tools=1189;
var _TrapReceiver =1190;
var _TrendNet=1191;
var _Trigger =1192;
var _TriggerPortRange =1193;
var _Tue =1194;
var _Type=1195;
var _UDP =1196;
var _UDP =1197;
var _UnConfigured =1198;
var _update =1199;
var _UpdatePriority =1200;
var _Upgrade =1201;
var _UpgradeFirmware =1202;
var _UPnP =1203;
var _UpTime =1204;
var _User =1205;
var _username=1206;
var _Utilization =1207;
var _VerifyPwd =1208;
var _VirSerName =1209;
var _VirtualSer=1210;
var _WAN =1211;
var _WAN_IP =1212;
var _WANgwAddr =1213;
var _WANIP =1214;
var _WANPhy =1215;
var _WANSubnet =1216;
var _Wed =1217;
var _Week =1218;
var _WEP =1219;
var _WEPkey =1220;
var _WEPKeyFormat =1221;
var _WEPkeyLength =1222;
var _wifiPS =1223;
var _WiFiSetup=1224;
var _Wireless =1225;
var _WirelessClientList =1226;
var _WirelessLAN =1227;
var _Wizard =1228;
var _WizardNextTime =1229;
var _WMM=1230;
var _WPA =1231;
var _WPA2 =1232;
var _WPA2AUTOPSK=1233;
var _WPA2PSK=1234;
var _WPAauto =1235;
var _WPAPSK=1236;
var _WPS =1237;
var _Year =1238;
var _Yes =1239;
var li__alert__3 =1240;
var li_intro =1241;
var li_msg1 =1242;
var li_msg2=1243;
var li_msg3=1244;
var li_msg4=1245;
var li_msg5=1246;
var li_msg6=1247;
var li_msg7=1248;
var li_msg8=1249;
var li_msg10=1250;
var li_msg11=1251;
var li_msg12=1252;
var li_msg127=1253;
var li_msg128=1254;
var li_msg129=1255;
var li_msg13=1256;
var li_msg130=1257;
var li_msg131=1258;
var li_msg132=1259;
var li_msg133=1260;
var li_msg134=1261;
var li_msg135=1262;
var li_msg136=1263;
var li_msg137=1264;
var li_msg138=1265;
var li_msg139=1266;
var li_msg14=1267;
var li_msg140=1268;
var li_msg141=1269;
var li_msg142=1270;
var li_msg143=1271;
var li_msg144=1272;
var li_msg145=1273;
var li_msg146=1274;
var li_msg147=1275;
var li_msg148=1276;
var li_msg149=1277;
var li_msg15=1278;
var li_msg150=1279;
var li_msg151=1280;
var li_msg152=1281;
var li_msg153=1282;
var li_msg154=1283;
var li_msg155=1284;
var li_msg156=1285;
var li_msg157=1286;
var li_msg158=1287;
var li_msg159=1288;
var li_msg16=1289;
var li_msg160=1290;
var li_msg161=1291;
var li_msg17=1292;
var li_msg18=1293;
var li_msg19=1294;
var li_msg20=1295;
var li_msg21=1296;
var li_msg22=1297;
var li_msg23=1298;
var li_msg24=1299;
var li_msg25=1300;
var li_msg26=1301;
var li_msg27=1302;
var li_msg28=1303;
var li_msg29=1304;
var li_msg30=1305;
var li_msg31=1306;
var li_msg32=1307;
var li_msg33=1308;
var li_msg34=1309;
var li_msg35=1310;
var li_msg48=1311;
var li_msg9=1312;
var _2_4G=1313;
var _Always=1314;
var _AP_Disable=1315;
var _AP_Enable=1316;
var _CipherType=1317;
var _ConfigState=1318;
var _Connected=1319;
var _Connecting=1320;
var _Disconnected=1321;
var _Disconnecting=1322;
var _DNS_Ser=1323;
var _DNS_Ser1=1324;
var _DNS_Ser2=1325;
var _Duplex=1326;
var _Firewallname=1327;
var _ifmsg1=1328;
var _IdleTime=1329;
var _LAN1=1330;
var _MACfilter=1331;
var _MACname=1332;
var _Mbps=1333;
var _Mode=1334;
var _MSG569=1335;
var _MSG788=1336;
var _MSG789=1337;
var _MSG790=1338;
var _MSG791=1339;
var _MSG792=1340;
var _MSG793=1341;
var _MSG794=1342;
var _MSG795=1343;
var _MSG796=1344;
var _MSG797=1345;
var _MSG798=1346;
var _MSG799=1347;
var _MSG800=1348;
var _MSG801=1349;
var _MuitlcastStream=1350;
var _Note=1351;
var _Only=1352;
var _PBC=1353;
var _PrimaryDNS=1354;
var _ProtocolFilter=1355;
var _Release=1356;
var _RemoteIPEnd=1357;
var _RemoteIPStart=1358;
var _Renew=1359;
var _ReservationIP=1360;
var _ReservationIPAddr=1361;
var _ReservedIPAddr=1362;
var _Reservedname=1363;
var _SecondaryDNS=1364;
var _SMTPSerPort=1365;
var _Statistics=1366;
var _top=1367;
var _UnconfiguredState=1368;
var _WPA_Auto_PSK=1369;
var _WPA_EAP=1370;
var _WPA2EAP=1371;
var _WPAEAP=1372;
var __allow=1373;
var __AlwaysOn =1374;
var __and=1375;
var __back=1376;
var __click=1377;
var __create=1378;
var __default=1379;
var __deny=1380;
var __domain=1381;
var __DomainName =1382;
var __enable=1383;
var __Exit=1384;
var __fail=1385;
var __filter=1386;
var __filters=1387;
var __firewall=1388;
var __host=1389;
var __hostname=1390;
var __none=1391;
var __open=1392;
var __or=1393;
var __packet=1394;
var __packets=1395;
var __parameters=1396;
var __port=1397;
var __protocol=1398;
var __rules=1399;
var __server=1400;
var __set=1401;
var __special_ap=1402;
var __subnet=1403;
var __success=1404;
var __Success=1405;
var __virtualservs=1406;
var __virtualserv=1407;
var _gtNext=1408;
var _ltBack=1409;
var _PINnum=1410;
var _bpalogin=1411;
var _bpalogout=1412;
var _Language=1413;
var _upd_lang=1414;
var _upd_msg_checksum_err=1415;
var _upd_msg_bad_hwid=1416;
var _upd_msg_unknow_fmt=1417;
var _upd_msg_success=1418;
var _FixedIPAddr=1419;
var _snmp_system_name=1420;
var _Ptrace=1421;
var _ptrace_sel_network=1422;
var _Stop=1423;
var _Download=1424;
var _auto_stop=1425;
var _Get_first=1426;
var _Get=1427;
var _MSG802=1428;
var _MSG803=1429;
var _QuickInstall=1430;
var _SystemInfo=1431;
var _WanStatus=1432;
var _DNSInfo=1433;
var _WlanStatus=1434;
var _LanStatus=1435;
var _Reason=1436;
var _PHYIP=1437;
var _PHYMask=1438;
var _PHYGateway=1439;
var _RadioStatus=1440;
var _WPSStatus=1441;
var _ConnStatus=1442;
var _WlanClient=1443;
var _LanClient=1444;
var _SecurityMode=1445;
var _HWVer=1446;
var _SysUpTime=1447;
var _CableLoss=1448;
var li_msg162=1449;
var li_msg163=1450;
var li_msg164=1451;
var _Diagnostic=1452;
var _IPv6=1453;
var _IPv6Auto=1454;
var _6rdTunnel=1455;
var _6rdConfig=1456;
var _6rdDhcpv4=1457;
var _6rdMaunal=1458;
var _6rdIPv6Prefix=1459;
var _v4Addr=1460;
var _MaskLength=1461;
var _6rdPrefix=1462;
var _TunnelAddress=1463;
var _6rdRelayv4Addr=1464;
var _v6dns1=1465;
var _v6dns2=1466;
var _Only1=1467;
var li_msg165=1468;
var _MSG804=1469;
var _MSG805=1470;
var _MSG806=1471;
var _MSG807=1472;
var _MSG808=1473;
var li_msg166=1474;
var _WWMInfo=1475;
var verify_remote_ip=1476;
var LS46=1477;
var auto_lock=1478;
var btn_auto_lock=1479;
var MSG042=1480;
var PortMirror_01=1481;
var PortMirror_02=1482;
var PortMirror_03=1483;
var PortMirror_04=1484;
var PortMirror_05=1485;
var MSG041=1486;
var msg_wps_sec_03=1487;
var msg_wps_sec_02=1488;
var msg_wps_sec_01=1489;
var stat_unlock=1490;
var stat_lock=1491;
var notify_wps=1492;
var notify_wps_01=1493;
var rs_intro_1=1494;
