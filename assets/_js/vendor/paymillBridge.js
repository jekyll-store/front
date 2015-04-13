(function(aZ){var o=aZ.CC_NUMBER="number",aL=aZ.CC_EXP_MONTH="exp_month",ap=aZ.CC_EXP_YEAR="exp_year",v=aZ.CC_HOLDER="cardholder",aY=aZ.CC_CVC="cvc",ak=aZ.CC_AMOUNT="amount",aS=aZ.CC_AMOUNT_INT="amount_int",aQ=aZ.CC_CURRENCY="currency",i=aZ.DD_NUMBER="number",n=aZ.DD_BANK="bank",t=aZ.DD_HOLDER="accountholder",k=aZ.DD_COUNTRY="country",d=aZ.DD_BIC="bic",K=aZ.DD_IBAN="iban",aR=aZ.E_CC_INVALID_NUMBER="field_invalid_card_number",ag=aZ.E_CC_INVALID_EXPIRY="field_invalid_card_exp",av=aZ.E_CC_INVALID_EXP_MONTH="field_invalid_card_exp_month",aX=aZ.E_CC_INVALID_EXP_YEAR="field_invalid_card_exp_year",P=aZ.E_CC_INVALID_CVC="field_invalid_card_cvc",a0=aZ.E_CC_INVALID_HOLDER="field_invalid_card_holder",B=aZ.E_CC_INVALID_AMOUNT="field_invalid_amount",y=aZ.E_CC_INVALID_AMOUNT_INT="field_invalid_amount_int",p=aZ.E_CC_INVALID_CURRENCY="field_invalid_currency",U=aZ.E_DD_INVALID_NUMBER="field_invalid_account_number",Q=aZ.E_DD_INVALID_BANK="field_invalid_bank_code",ad=aZ.E_DD_INVALID_HOLDER="field_invalid_account_holder",A=aZ.E_DD_INVALID_BANK_DATA="field_invalid_bank_data",at=aZ.E_DD_INVALID_IBAN="field_invalid_iban",q=aZ.E_DD_INVALID_COUNTRY="field_invalid_country",aF=aZ.E_DD_INVALID_BIC="field_invalid_bic",N=aZ.DEBIT_TYPE_ELV="elv",aO=aZ.DEBIT_TYPE_SEPA="sepa",L=aZ.PAYMENT_NOT_TESTDATA="payment_not_testdata",aI=aZ.RDP_TYPE="type",X=aZ.RDP_DESCRIPTION="description",aM=aZ.RDP_AMOUNT_INT=aS,aA=aZ.RDP_CURRENCY=aQ,c=aZ.RDP_CHECKSUM="checksum",aT=aZ.RDP_PUBLIC_KEY="public_key",aD=aZ.RDP_TYPE_POSTFINANCE_CARD="postfinance_card",ae=aZ.RDP_APP_ID="app_id",aH=aZ.RDP_FEE_AMOUNT="fee_amount",x=aZ.RDP_FEE_PAYMENT="fee_payment",ao=aZ.RDP_FEE_CURRENC="fee_currency",M=aZ.E_RDP_INVALID_PUBLIC_KEY="field_invalid_public_key",R=aZ.E_RDP_INVALID_AMOUNT_INT=y,J=aZ.E_RDP_INVALID_CURRENCY=p,G=aZ.E_RDP_INVALID_TYPE="field_invalid_type",az=aZ.E_RDP_INVALID_CHECKSUM="field_invalid_checksum",aw=aZ.E_RDP_INVALID_APP_ID="field_invalid_app_id",w=aZ.E_RDP_INVALID_FEE_AMOUNT="field_invalid_fee_amount",m=aZ.E_RDP_INVALID_FEE_PAYMENT="field_invalid_fee_payment",V=aZ.E_RDP_INVALID_FEE_CURRENCY="field_invalid_fee_currency";
var aq=aZ.RDP_NAMES={};aq[aD]="";var E="https://psp.paymill.de/rdp/start",D="https://psp.paymill.de/rdp/finish";
var af={};var ar={"4012888888881881":true,"5169147129584558":true};var T=[{type:"American Express",pattern:/^3[47]/,luhn:true,cvcLength:[3,4],numLength:[15]},{type:"Discover",pattern:/^(6011|622(1[2-90][6-9]|[2-8]\d{2}|9[0-1]\d|92[0-5])|64[4-9]|65)/,luhn:true,cvcLength:[3],numLength:[16]},{type:"UnionPay",pattern:/^62/,luhn:false,cvcLength:[3],numLength:[16,17,18,19]},{type:"Diners Club",pattern:/^(30[0-5]|36|38)/,luhn:true,cvcLength:[3],numLength:[14]},{type:"JCB",pattern:/^35([3-8][0-9]|2[8-9])/,luhn:true,cvcLength:[3],numLength:[16]},{type:"Maestro",pattern:/^(5018|5020|5038|5893|6304|6331|6703|6759|676[1-3]|6799|0604)/,luhn:true,cvcLength:[0,3,4],numLength:[12,13,14,15,16,17,18,19]},{type:"MasterCard",pattern:/^(5[1-5])/,luhn:true,cvcLength:[3],numLength:[16]},{type:"Visa",pattern:/^4/,luhn:true,cvcLength:[3],numLength:[13,16]}];
var au={DE:22};var W={A:"10",B:"11",C:"12",D:"13",E:"14",F:"15",G:"16",H:"17",I:"18",J:"19",K:"20",L:"21",M:"22",N:"23",O:"24",P:"25",Q:"26",R:"27",S:"28",T:"29",U:"30",V:"31",W:"32",X:"33",Y:"34",Z:"35"};
if(!Array.prototype.indexOf){Array.prototype.indexOf=function(a5){if(this==null){throw new TypeError()
}var a6=Object(this);var a3=a6.length>>>0;if(a3===0){return -1}var a7=0;if(arguments.length>1){a7=Number(arguments[1]);
if(a7!=a7){a7=0}else{if(a7!=0&&a7!=Infinity&&a7!=-Infinity){a7=(a7>0||-1)*Math.floor(Math.abs(a7))
}}}if(a7>=a3){return -1}var a4=a7>=0?a7:Math.max(a3-Math.abs(a7),0);for(;a4<a3;a4++){if(a4 in a6&&a6[a4]===a5){return a4
}}return -1}}aZ.config=function af(a3,a4){if(a4!==undefined){af[a3]=a4}return af[a3]
};aZ.increaseMonetaryUnit=function ax(a5,a4,a3){a4=a4?a4:100;a3=a3?a3:2;a5=(a5/a4).toFixed(a3);
return a5};aZ.tr=function ab(a3){return((a3||"")+"").replace(/^\s+|\s+$/g,"")};aZ.clr=function aC(a3){return(a3+"").replace(/\s+|-/g,"")
};aZ.flip=function al(a3){return(a3+"").split("").reverse().join("")};aZ.chksum=function S(a8){var a4=0,a7,a5,a3,a6;
if(a8.match(/^\d+$/)===null){return false}a7=aZ.flip(a8);a5=a7.length;for(a3=0;a3<a5;
++a3){a6=parseInt(a7.charAt(a3),10);if(0!==a3%2){a6*=2}a4+=(a6<10)?a6:a6-9}return(0!==a4&&0===a4%10)
};aZ.toFormEncoding=function F(a6,a5){var a7=[];for(var a8 in a6){if(a6.hasOwnProperty(a8)){var a3=a5?a5+"["+a8+"]":a8,a4=a6[a8];
a7.push("object"===typeof a4?aZ.toFormEncoding(a4,a3):encodeURIComponent(a3)+"="+encodeURIComponent(a4))
}}return a7.join("&")};aZ.cardFromNumber=function b(a6){var a4,a5,a3;a6=aZ.clr(a6);
for(a5=0,a3=T.length;a5<a3;a5++){a4=T[a5];if(a4.pattern.test(a6)){return a4}}};aZ.validateCardNumber=function ay(a4){var a3;
a4=aZ.clr(a4);a3=aZ.cardFromNumber(a4);if(!a4||!a3){return false}if(a3.luhn&&false==aZ.chksum(a4)){return false
}return a3.numLength.indexOf(a4.length)!=-1};aZ.validateCvc=function aG(a6,a7){var a4,a5,a3;
a6=aZ.tr(a6);if(!a7){return null!==a6.match(/^\d{3,4}$/)}a7=aZ.clr(a7);for(a5=0,a3=T.length;
a5<a3;a5++){a4=T[a5];if(a4.pattern.test(a7)){if(a6.length>0){return a4.cvcLength.indexOf(a6.length)!=-1&&null!==a6.match(/^\d+$/)
}else{return a4.cvcLength.indexOf(a6.length)!=-1}}}return false};aZ.validateExpMonth=function aW(a3){return/^([1-9]|0[1-9]|1[012])$/.test(aZ.tr(a3))
};aZ.validateExpYear=function u(a3){return/^\d{4}$/.test(aZ.tr(a3))};aZ.validateExpiry=function am(a7,a5){var a6,a3,a4;
if(!aZ.validateExpMonth(a7)||!aZ.validateExpYear(a5)){return false}a7=parseInt(aZ.tr(a7),10);
a5=parseInt(aZ.tr(a5),10);a6=new Date();a3=a6.getFullYear();a4=a6.getMonth()+1;return(a5>a3)||(a5===a3&&a7>=a4)
};aZ.validateAmount=function I(a3){a3=aZ.tr(a3);return/^([0-9]+)(\.[0-9]+)?$/.test(a3)
};aZ.validateAmountInt=function h(a3){a3=aZ.tr(a3);return/^[0-9]+$/.test(a3)};aZ.validateCurrency=function z(a3){a3=aZ.tr(a3);
return/^[A-Z]{3}$/.test(a3)};aZ.validateHolder=function a(a3){if(!a3){return false
}return/^.{4,128}$/.test(aZ.tr(a3))};aZ.validateAccountNumber=function aP(a3){return/^\d+$/.test(aZ.clr(a3))
};aZ.validateBankCode=function j(a3){return/^\d{8}$/.test(aZ.clr(a3))};aZ.cardType=function aa(a4){var a3;
if(aZ.validateCardNumber(a4)){a3=aZ.cardFromNumber(a4)}return a3?a3.type:"Unknown"
};aZ.getApiKey=function g(){if(typeof PAYMILL_PUBLIC_KEY==="undefined"){throw new Error("No public api key is set. You need to set the global PAYMILL_PUBLIC_KEY variable to your public api key in order to use this api.")
}return PAYMILL_PUBLIC_KEY};aZ.isTestKey=function ac(a3){return(a3+"").match(/^\d{10}/)||(typeof PAYMILL_TEST_MODE!=="undefined"&&PAYMILL_TEST_MODE===true)
};aZ.transport={execute:function s(a4,a3,a5){throw new Error("paymill.transport.execute() not available!")
}};aZ.dom={css:function aj(a4,a3){throw new Error("paymill.dom.css() not available!")
},computedStyle:function aN(a3,a4){throw new Error("paymill.dom.computedStyle() not available!")
},bind:function(a4,a3,a5){throw new Error("paymill.dom.bind() not available!")},innerWidth:function(){throw new Error("paymill.dom.innerWidth() not available!")
},innerHeight:function(){throw new Error("paymill.dom.innerHeight() not available!")
}};aZ.createToken=function aK(a7,a9,a3,a6){var a8=aZ.getApiKey(),a5={type:"createToken"};
if(a7[aI]!==undefined){aZ.createTransaction(a7,a9,a3,a6);return}try{a5.data=(a7[n]===undefined&&a7[d]===undefined)?aZ.validateCreditCardRequest(a7,a8):aZ.validateDirectDebitRequest(a7);
aZ.transport.execute(a8,a5,a9,a3,a6)}catch(a4){setTimeout(function(){a9({apierror:a4})
},0)}};aZ.createCORSRequest=function a2(a5,a3){var a4=new window.XMLHttpRequest();
if("withCredentials" in a4){a4.open(a5,a3,true)}else{if(typeof window.XDomainRequest!="undefined"){a4=new window.XDomainRequest();
a4.open(a5,a3)}else{a4=null}}return a4};aZ.getBankName=function an(a7,a8){if(a7===""){return
}var a6="";try{a6=aZ.getBlzFromBankParam(a7)}catch(a3){a8({apierror:a3});return}if(typeof JSON!=="object"){setTimeout(function(){a8({apierror:"Woops, there was an error creating the request."})
},0);return}var a4=aZ.getBlzUrl(a6);var a5=aZ.createCORSRequest("GET",a4);if(!a5){setTimeout(function(){a8({apierror:"Woops, there was an error creating the request."})
},0);return}a5.onload=function(){var ba=a5.responseText;var a9=JSON.parse(ba).data;
if(typeof a9.success!=="undefined"){if(a9.success){a8(null,a9.name)}else{a8({apierror:a9.error})
}}else{a8({apierror:"Woops, there was an error extracting the request."})}};a5.onerror=function(){a8({apierror:"Woops, there was an error making the request."})
};a5.send()};aZ.getBlzFromBankParam=function aJ(a4){if(/\D/.test(a4)){var a3=a4.toString();
if(a3.length==8){return a3+"XXX"}else{if(a3.length==11){return a3}else{if(aZ.validateIban(a3)){return a3.substr(4,8)
}else{throw at}}}}else{if(a4.toString().length!=8){throw Q}return a4.toString()}};
aZ.getBlzUrl=function f(a3){return"https://bridge.paymill.de/blz/"+a3};aZ.disableTds=function Y(a4,a3){return(aZ.isTestKey(a4)&&ar[a3]!==true)
};aZ.validateCreditCardRequest=function H(a5,a4){var a3={};a3[o]=aZ.clr(a5[o]);a3[aL]=aZ.tr(a5[aL]);
a3[ap]=aZ.tr(a5[ap]);a3[aY]=aZ.tr(a5[aY]);a3[v]=aZ.tr(a5[v]);a3[ak]=aZ.tr(a5[ak]);
a3[aS]=aZ.tr(a5[aS]);a3[aQ]=aZ.tr(a5[aQ]);a3[aL]=("0"+a3[aL]).slice(-2);if(!aZ.validateCardNumber(a3[o])){throw aR
}if(!aZ.validateExpiry(a3[aL],a3[ap])){throw ag}if(!aZ.validateCvc(a3[aY],a3[o])){throw P
}var a6=aZ.disableTds(a4,a3[o]);if(aZ.validateAmountInt(a3[aS])){a3[ak]=aZ.increaseMonetaryUnit(a3[aS]);
delete a3[aS]}else{if(a3[aS]!==undefined&&a3[aS]!==""){throw y}else{delete a3[aS]
}}if(aZ.validateAmount(a3[ak])){a3[ak]=aZ.increaseMonetaryUnit(a3[ak],1,2)}else{if(a3[ak]!==undefined&&a3[ak]!==""){throw B
}}if(a3[aQ]!==undefined&&a3[aQ]!==""&&!aZ.validateCurrency(a3[aQ])){throw p}if((a3[ak]===undefined||a3[ak]==="")&&(a3[aQ]!==undefined&&a3[aQ]!=="")){throw B
}else{if((a3[ak]!==undefined&&a3[ak]!=="")&&(a3[aQ]===undefined||a3[aQ]==="")){throw p
}}return a3};aZ.validateDirectDebitRequest=function C(a5){var a4={},a3=aZ.getDebitType(a5);
if(a3==aO){a4[K]=aZ.clr(a5[K]);a4[d]=aZ.clr(a5[d]);aZ.validateIban(a4[K],true);if(!aZ.validateBic(a4[d])){throw aF
}if(a4[d].toString().length==8){a4[d]=a4[d]+"XXX"}a4[k]=a5[K].substr(0,2)}else{if(a3==N){a4[i]=aZ.clr(a5[i]);
a4[n]=aZ.clr(a5[n]);if(!aZ.validateAccountNumber(a4[i])){throw U}if(!aZ.validateBankCode(a4[n])){throw Q
}a4[k]="DE"}else{throw A}}a4[t]=aZ.tr(a5[t]);if(a4[t]===undefined||a4[t]===""){throw ad
}if(!aZ.validateHolder(a4[t])){throw ad}return a4};aZ.getDebitType=function ah(a4){var a3="unknown";
if((a4[K]!==undefined)&&(a4[d]!==undefined)){a3=aO}else{if((a4[n]!==undefined)&&(a4[i]!==undefined)){a3=N
}}return a3};aZ.validateIban=function aE(a4,a3){var a7,a5;try{a4=aZ.clr(a4.toString()).toUpperCase();
if(a4.length<5){throw at}if(!/^[A-Z]{2}[0-9]{2}[A-Z0-9]+$/.test(a4)){throw at}a7=a4.substr(0,2);
if(au[a7]===undefined){throw q}a5=au[a7];if(a5!=a4.length){throw at}if(!aZ.checkIbanChecksum(a4)){throw at
}return true}catch(a6){if(a3){throw a6}else{return false}}};aZ.checkIbanChecksum=function aV(a4){var a3=aZ.getIbanChecksumNumber(a4);
return aZ.getIbanModulo(a3)==="01"};aZ.getIbanChecksumNumber=function Z(a3){var a5=a3.substr(4)+a3.substr(0,4);
a5=a5.toUpperCase();for(var a4 in W){a5=a5.replace(a4,W[a4])}return a5};aZ.getIbanModulo=function ai(a4){var a8=0;
var a6=9;var a3=true;var a7="";while(a3){if(a4.substr(a8,a6).length<7){a3=false;a6=a4.substr(a8,a6).length
}var a5=a7+a4.substr(a8,a6);a7=(a5%97)+"";if(a7.length===1){a7="0"+a7}a8=a8+a6;a6=7
}return a7};aZ.validateBic=function aU(a3){a3=aZ.clr(a3).toUpperCase();return/[A-Z]{4}(DE)[A-Z1-9]{2}([A-Z\d]{3})?/.test(a3)
};aZ.createTransaction=function O(a3,a8,a4,a7){try{var a6=aZ.validateTransactionData(a3);
a6.amount=a6[aM];delete a6[aM];aZ.makeGetCorsRequest(E,a6,function(a9){var ba={termUrl:a9.termUrl,aiReq:a9.aiReq};
aZ.handleRDPStart(a9.rdp_session_id,a9.url,D,ba,a6[c],aq[a6.type],a8,a4,a7)},a8)}catch(a5){setTimeout(function(){a8({apierror:a5})
},0)}};aZ.makeGetCorsRequest=function a1(a3,a5,a4,a7){if(a5!==null){a3=a3+"?"+aZ.getUrlParamsFromObject(a5)
}if(typeof JSON!=="object"){setTimeout(function(){a7({apierror:"Woops, there was an error creating the request."})
},0);return}var a6=aZ.createCORSRequest("GET",a3);if(!a6){setTimeout(function(){a7({apierror:"Woops, there was an error creating the request."})
},0);return}a6.onload=function(){var a9=a6.responseText;var a8=JSON.parse(a9);if(a8.data!==undefined){a4(a8.data)
}else{if(a8.error!==undefined){a7({apierror:a8.error})}else{a7({apierror:"unknown_error"})
}}};a6.onerror=function(){setTimeout(function(){a7({apierror:"Woops, there was an error making the request."})
},0);return};a6.send()};aZ.getUrlParamsFromObject=function l(a4){var a5=[];for(var a3 in a4){if(a4.hasOwnProperty(a3)){a5.push(encodeURIComponent(a3)+"="+encodeURIComponent(a4[a3]))
}}return a5.join("&")};aZ.validateTransactionData=function e(a5){var a4={};a4[aM]=aZ.tr(a5[aM]);
a4[aA]=aZ.tr(a5[aA]);a4[X]=aZ.tr(a5[X]);a4[aI]=aZ.tr(a5[aI]);a4[c]=aZ.tr(a5[c]);a4[aT]=aZ.tr(a5[aT]);
if(!aZ.validateNonEmptyString(a4[aT])){try{a4[aT]=aZ.getApiKey()}catch(a3){throw M
}}if(!aZ.validateAmountInt(a4[aM])){throw R}if(!aZ.validateCurrency(a4[aA])){throw J
}if(!aq.hasOwnProperty(a4[aI])){throw G}if(!aZ.validateNonEmptyString(a4[c])){throw az
}if(ae in a5){a4[ae]=aZ.tr(a5[ae]);if(!aZ.validateNonEmptyString(a4[ae])){throw aw
}aZ.validateUniteFee(a4,a5)}else{if(aH in a5||x in a5||ao in a5){throw aw}}return a4
};aZ.validateUniteFee=function r(a3,a4){if(aH in a4){a3[aH]=aZ.tr(a4[aH]);if(!aZ.validateAmountInt(a3[aH])){throw w
}a3[x]=aZ.tr(a4[x]);if(!aZ.validateNonEmptyString(a3[x])){throw m}if(ao in a4){a3[ao]=aZ.tr(a4[ao]);
if(!aZ.validateCurrency(a3[ao])){throw V}}}else{if(x in a4||ao in a4){throw w}}};
aZ.validateNonEmptyString=function aB(a3){if(a3===undefined||a3===null){return false
}return aZ.tr(a3.toString()).length>0}})(window.paymill={});(function(b,d,a){b.getDeviceIdent=function c(){var e={v:"paymill-com"};
(function(){var g=a.createElement("script");g.type="text/javascript";g.async=true;
g.src="https://showcase.deviceident.com/pmcom/di-js.js";var f=a.getElementsByTagName("script")[0];
f.parentNode.insertBefore(g,f)})()}})(window.paymill===undefined?window.paymill={}:window.paymill,window,document);
(function(d){d.dom=d.dom||{};d.dom.css=function c(h,g){for(var j in g){var i=g[j];
if(typeof i==="number"){i+="px"}h.style[j]=i}};d.dom.computedStyle=function b(h,i){var g="";
if(document.defaultView&&document.defaultView.getComputedStyle){g=document.defaultView.getComputedStyle(h,"").getPropertyValue(i)
}else{if(h.currentStyle){i=i.replace(/\-(\w)/g,function(j,k){return k.toUpperCase()
});g=h.currentStyle[i]}}return g};d.dom.bind=function f(h,g,i){if(h.addEventListener){h.addEventListener(g,i,false)
}else{if(h.attachEvent){h.attachEvent("on"+g,i)}}};d.dom.innerWidth=function a(){if(typeof window.innerWidth==="number"){return window.innerWidth
}if(window.documentElement&&typeof window.documentElement.clientWidth==="number"){return window.documentElement.clientWidth
}if(document.body&&typeof document.body.clientWidth==="number"){return document.body.clientWidth
}};d.dom.innerHeight=function e(){if(typeof window.innerHeight==="number"){return window.innerHeight
}if(window.documentElement&&typeof window.documentElement.clientHeight==="number"){return window.documentElement.clientHeight
}if(document.body&&typeof document.body.clientHeight==="number"){return document.body.clientHeight
}}})(window.paymill===undefined?window.paymill={}:window.paymill);(function(c,m,s){c.transport=c.transport||{};
var h=s.head||s.getElementsByTagName("head")[0]||s.documentElement;var d={test:"https://test-token.paymill.de",live:"https://token-v2.paymill.de"};
var r="https://psp.paymill.de/rdp/status/";var u={test:"https://test-token.paymill.de",live:"https://token.paymill.de"};
var l={test:"https://test-tds.paymill.de/end.php",live:"https://tds.paymill.de/end.php"};
var e="ACK",x="NOK",t="CONNECTOR_TEST",B="LIVE";var g={"100.100.600":c.E_CC_INVALID_CVC,"100.100.601":c.E_CC_INVALID_CVC,"100.100.303":c.E_CC_INVALID_EXPIRY,"100.100.304":c.E_CC_INVALID_EXPIRY,"100.100.301":c.E_CC_INVALID_EXP_YEAR,"100.100.300":c.E_CC_INVALID_EXP_YEAR,"100.100.201":c.E_CC_INVALID_EXP_MONTH,"100.100.200":c.E_CC_INVALID_EXP_MONTH,"100.100.100":[c.E_CC_INVALID_NUMBER,c.E_DD_INVALID_NUMBER],"100.100.101":[c.E_CC_INVALID_NUMBER,c.E_DD_INVALID_NUMBER],"100.100.400":[c.E_CC_INVALID_HOLDER,c.E_DD_INVALID_HOLDER],"100.100.401":[c.E_CC_INVALID_HOLDER,c.E_DD_INVALID_HOLDER],"100.100.402":[c.E_CC_INVALID_HOLDER,c.E_DD_INVALID_HOLDER],"999.999.998":c.PAYMENT_NOT_TESTDATA,"600.200.500":"invalid_payment_data"};
var j={};c.transport.buildRequestUrl=function a(G,F,E){var C,D=c.toFormEncoding(F);
if(E.bic!==undefined||E.iban!==undefined||E.bank!==undefined){C=c.isTestKey(G)?u.test:u.live
}else{C=c.isTestKey(G)?d.test:d.live}if(C.indexOf("?")>=0){C+="&"+D}else{C+="?"+D
}return C};var w=function w(H,I,C,F){var D=null,E=null;H=H||null;if(H===null){c.logging.createEntry("PaymillBridge",["bridge-jsonp.js","handleResponse()"],"ERROR","JSONP_response_returns_null");
return I(A("internal_server_error"),null)}else{if(H.error){if(/check channelId or login/.test(H.error.message)){return I(A("invalid_public_key"))
}return I(A("unknown_error",H.error.message||H.error))}else{var G=H.transaction.processing;
if(G.result===e){E=H.transaction.identification.uniqueId;if(G.redirect){i(H,E,I,C,F)
}else{return I(null,y(E,H))}}else{return I(p(H),null)}}}};var q=[];var y=function y(D,F){var G=F.transaction.customer;
var C={token:D};if(G){var E=F.transaction.account;C.bin=E.bin;C.binCountry=G.address.country;
C.brand=E.brand;C.last4Digits=E.last4Digits;C.ip=G.contact.ip;C.ipCountry=G.contact.ipCountry
}return C};var v=function v(M,H,C){if(typeof C==="undefined"){C="3D-Secure"}var E=M.url,W=M.params;
var K=s.body||s.getElementsByTagName("body")[0];var P=600,O=400,G=-60;var V=parseInt(c.dom.computedStyle(K,"margin-left"),10)+parseInt(c.dom.computedStyle(K,"padding-left"),10),U=parseInt(c.dom.computedStyle(K,"margin-top"),10)+parseInt(c.dom.computedStyle(K,"padding-top"),10);
var Q=c.dom.innerWidth(),T=c.dom.innerHeight();var F=s.createElement("div");F.style.cssText="position:fixed;z-index:2147483646;top:-"+U+"px;left:-"+V+"px;width:"+(m.innerWidth+V)+"px;height:"+(m.innerHeight+U)+"px;background-color:#000;opacity:0.5;";
var S=s.createElement("div");S.style.cssText="position:fixed; z-index: 2147483647; width: "+P+"px; border-radius: 5px; background: white; font-family: sans-serif; font-size: 14px; -webkit-box-shadow: 0 0 50px rgba(0,0,0,0.3); -moz-box-shadow:  0 0 50px rgba(0,0,0,0.3); box-shadow: 0 0 50px rgba(0,0,0,0.3);";
S.style.left=Math.floor(Math.max(0,Q/2-P/2))+"px";S.style.top=Math.floor(Math.max(0,T/2-O/2)+G)+"px";
S.innerHTML="<div style=\"border-bottom: 1px solid #c0c0c0!important; -webkit-border-top-right-radius: 5px; -moz-border-radius-topright: 5px; border-top-right-radius: 5px; -webkit-border-bottom-right-radius: 0; -moz-border-radius-bottomright: 0; border-bottom-right-radius: 0; -webkit-border-bottom-left-radius: 0; -moz-border-radius-bottomleft: 0; border-bottom-left-radius: 0; -webkit-border-top-left-radius: 5px; -moz-border-radius-topleft: 5px; border-top-left-radius: 5px; background-color: #dcdcdc; background-image: -moz-linear-gradient(top, #ededed, #c3c3c3); background-image: -ms-linear-gradient(top, #ededed, #c3c3c3); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ededed), to(#c3c3c3)); background-image: -webkit-linear-gradient(top, #ededed, #c3c3c3); background-image: -o-linear-gradient(top, #ededed, #c3c3c3); background-image: linear-gradient(top, #ededed, #c3c3c3); background-repeat: repeat-x; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#c3c3c3', GradientType=0); *zoom: 1; padding: 10px 0 0 0; height: 26px; text-align: center;\">"+C+'</div><iframe style="border:none;width:'+P+"px;height:"+O+'px;"><html><body></body></html></iframe><div style="padding: 14px 15px 15px; margin-bottom: 0; text-align: right; background-color: #f5f5f5; border-top: 1px solid #ddd; -webkit-border-radius: 0 0 6px 6px; -moz-border-radius: 0 0 6px 6px; border-radius: 0 0 6px 6px; -webkit-box-shadow: inset 0 1px 0 #ffffff; -moz-box-shadow: inset 0 1px 0 #ffffff; box-shadow: inset 0 1px 0 #ffffff; *zoom: 1;"><input type="submit" value="'+(c.config("3ds_cancel_label")||"Cancel")+"\" style=\"display: inline-block; *display: inline; *zoom: 1; padding: 4px 10px 4px; margin-bottom: 0; font-size: 13px; line-height: 20px; *line-height: 20px; color: #333333; text-align: center; text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); vertical-align: middle; cursor: pointer; background-color: #f5f5f5; background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6); background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6)); background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6); background-image: -o-linear-gradient(top, #ffffff, #e6e6e6); background-image: linear-gradient(top, #ffffff, #e6e6e6); background-repeat: repeat-x; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0); border-color: #e6e6e6 #e6e6e6 #bfbfbf; border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); *background-color: #e6e6e6; filter: progid:DXImageTransform.Microsoft.gradient(enabled = false); border: 1px solid #cccccc; *border: 0; border-bottom-color: #b3b3b3; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; *margin-left: .3em; -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05); -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05); box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);\"></div>";
var I=S.firstChild.nextSibling.nextSibling.firstChild;var J=S.firstChild.nextSibling;
c.dom.bind(I,"click",H);K.insertBefore(F,K.firstChild);K.insertBefore(S,K.firstChild);
q.push(F);q.push(S);var N=J.contentWindow||J.contentDocument;if(N.document){N=N.document
}var D=N.createElement("form");D.method="post";D.action=E;for(var R in W){var L=N.createElement("input");
L.type="hidden";L.name=R;L.value=decodeURIComponent(W[R]);D.appendChild(L)}if(N.body){N.body.appendChild(D)
}else{N.appendChild(D)}D.submit()};var f=function f(){var C=q.length;while(C--){if(q[C]&&q[C].parentNode){q[C].parentNode.removeChild(q[C])
}}q.length=0};var i=function i(H,D,N,K,C){var J=H.transaction.processing.redirect;
var L=H.transaction.mode===t;var G={url:decodeURIComponent(J.url),params:{}};for(var F in J.parameters){G.params[F]=J.parameters[F]
}var M=K||v,E=C||f,I=l[L?"test":"live"];M(G,function(){E();N(A("3ds_cancelled"))});
c.receiveMessage();c.receiveMessage(function(P,O){if(P.data==="ok"){E();N(null,y(D,H))
}if(P.data==="cancelled"){E();N(A("3ds_cancelled"))}},I.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))
};var p=function p(E){var D=E.transaction.processing["return"].code,C=E.transaction.processing["return"].message;
if(g[D]!==undefined){var F=g[D];if(Object.prototype.toString.apply(F)==="[object Array]"){return A(F[0])
}return A(F)}return A("unknown_error",C)};var A=function A(D,C){if(C===undefined){return{apierror:D}
}return{apierror:D,message:C}};var n={exp_month:"account.expiry.month",exp_year:"account.expiry.year",cardholder:"account.holder",number:"account.number",amount:"presentation.amount3D",currency:"presentation.currency3D",cvc:"account.verification",accountholder:"account.holder",bank:"account.bank",country:"account.country",iban:"account.iban",bic:"account.bic"};
c.transport.execute=function k(H,G,M,L,D){var J="paymillCallback"+parseInt(Math.random()*4294967295,10);
j[J]=null;c.transport[J]=function(O){j[J]=O};var C=c.isTestKey(H),K=C?t:B,N=l[C?"test":"live"];
N+="?parentUrl="+encodeURIComponent(encodeURIComponent(m.location.href))+"&";var F={"transaction.mode":K,"channel.id":H,"response.url":N,jsonPFunction:"window.paymill.transport."+J};
for(var E in G.data){if(n[E]===undefined){continue}F[n[E]]=G.data[E]}var I=s.createElement("script");
I.async="async";I.src=c.transport.buildRequestUrl(H,F,G.data);I.onload=I.onerror=I.onreadystatechange=function(P){if(!I.readyState||/loaded|complete/.test(I.readyState)){var O=j[J];
delete paymill.transport[J];delete j[J];I.onload=I.onerror=I.onreadystatechange=null;
h.removeChild(I);w(O,M,L,D)}};h.insertBefore(I,h.firstChild)};c.handleRDPStart=function o(G,N,I,K,J,H,M,C,F){var E={url:decodeURIComponent(N)};
E.params=K;var L=C||v,D=F||f;L(E,function(){b(G,J,M,D)},H);c.receiveMessage();c.receiveMessage(function(P,O){if(P.data==="rdpready"){b(G,J,M,D)
}},I.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))};var b=function b(E,D,F,C){C();c.makeGetCorsRequest(z(E,D),null,function(G){if(G.status===undefined||G.transaction===undefined){F(A("unknown_error"))
}else{F(null,{status:G.status,transaction:G.transaction})}},F)};var z=function z(D,C){return r+D+"/"+C
}})(window.paymill===undefined?window.paymill={}:window.paymill,window,document);
(function(b){b.logging=b.logging||{};b.logging.getUrlParamsFromObject=function d(h){var i=[];
if(typeof h!=="object"||Object.keys(h).length<1){return""}for(var g in h){if(h.hasOwnProperty(g)){i.push(encodeURIComponent(g)+"="+encodeURIComponent(h[g]))
}}return i.join("&")};b.logging.getNavigatorInformation=function c(){var l=["cookieEnabled","doNotTrack","language","onLine","platform","userAgent"],h=window.navigator.plugins,m={};
for(var k=0,g=l.length;k<g;k++){var j=l[k];m[j]=window.navigator[j]}if(h&&Object.keys(h).length>0){m.plugins=[];
for(var k=0,g=h.length;k<g;k++){m.plugins.push(h[k].name)}}return JSON.stringify(m)
};b.logging.getTimestamp=function a(){var g=Date.now()/1000|0;return JSON.stringify(g)
};b.logging.buildUrl=function f(m,h,g,o,k){var n="https://fl.paymill.de",l={},i;
var j=function(p){return p===undefined||p===null||p===""||(typeof p==="object"&&JSON.stringify(p).length<=2)
};if(!j(m)){l.application=JSON.stringify(m)}if(!j(h)){l.resource=JSON.stringify(h)
}if(!j(g)){l.level=JSON.stringify(g)}if(!j(o)){l.tags=JSON.stringify(o)}if(!j(k)){l.data=JSON.stringify(k)
}l.navigator=b.logging.getNavigatorInformation();l.timestamp=b.logging.getTimestamp();
i=b.logging.getUrlParamsFromObject(l);return n+"?"+i};b.logging.createEntry=function e(i,k,n,h,j){var m="GET",g,l;
g=b.logging.buildUrl(i,k,n,h,j);l=b.createCORSRequest(m,g);if(l){l.send()}}})(window.paymill===undefined?window.paymill={}:window.paymill);
(function(c){var d=1,e,f,b;c.postMessage=function a(h,j,i){if(!j){return}i=i||parent;
if(window.postMessage){i.postMessage(h,j.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))}else{if(j){i.location.replace(j.replace(/#.*$/,"")+"#"+(+new Date)+(d++)+"&"+h)
}}};c.receiveMessage=function g(i,h){if(window.postMessage){if(i){b=function(j){if((typeof h==="string"&&j.origin!==h)||(Object.prototype.toString.call(h)==="[object Function]"&&h(j.origin)===!1)){return !1
}i(j)}}if(window.addEventListener){window[i?"addEventListener":"removeEventListener"]("message",b,!1)
}else{if(b){window[i?"attachEvent":"detachEvent"]("onmessage",b)}}}else{e&&window.clearInterval(e);
e=null;if(i){e=window.setInterval(function(){var k=document.location.hash,j=/^#?\d+&/;
if(k!==f&&j.test(k)){f=k;i({data:k.replace(j,"")})}},100)}}}})(window.paymill===undefined?window.paymill={}:window.paymill);