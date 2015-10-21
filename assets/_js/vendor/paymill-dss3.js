(function(bs){var t=bs.CC_NUMBER="number",a7=bs.CC_EXP_MONTH="exp_month",aH=bs.CC_EXP_YEAR="exp_year",I=bs.CC_HOLDER="cardholder",br=bs.CC_CVC="cvc",aC=bs.CC_AMOUNT="amount",bi=bs.CC_AMOUNT_INT="amount_int",bf=bs.CC_CURRENCY="currency",bm=bs.CC_SHOPPER_ID="shopper_id",bb=bs.CC_EMAIL="email",J=bs.CC_FIRST_NAME="first_name",D=bs.CC_LAST_NAME="last_name",n=bs.DD_NUMBER="number",s=bs.DD_BANK="bank",B=bs.DD_HOLDER="accountholder",q=bs.DD_COUNTRY="country",j=bs.DD_BIC="bic",W=bs.DD_IBAN="iban",at=bs.E_CC_PREFIX="field_invalid_card_",bg=bs.E_CC_INVALID_NUMBER="field_invalid_card_number",ax=bs.E_CC_INVALID_EXPIRY="field_invalid_card_exp",aM=bs.E_CC_INVALID_EXP_MONTH="field_invalid_card_exp_month",bq=bs.E_CC_INVALID_EXP_YEAR="field_invalid_card_exp_year",ab=bs.E_CC_INVALID_CVC="field_invalid_card_cvc",bt=bs.E_CC_INVALID_HOLDER="field_invalid_card_holder",P=bs.E_CC_INVALID_AMOUNT="field_invalid_amount",M=bs.E_CC_INVALID_AMOUNT_INT="field_invalid_amount_int",u=bs.E_CC_INVALID_CURRENCY="field_invalid_currency",ac=bs.E_CC_INVALID_SHOPPER_ID="field_invalid_shopper_id",w=bs.E_CC_INVALID_EMAIL="field_invalid_email",a5=bs.E_CC_INVALID_FIRST_NAME="field_invalid_first_name",A=bs.E_CC_INVALID_LAST_NAME="field_invalid_last_name",ag=bs.E_DD_INVALID_NUMBER="field_invalid_account_number",ad=bs.E_DD_INVALID_BANK="field_invalid_bank_code",ar=bs.E_DD_INVALID_HOLDER="field_invalid_account_holder",O=bs.E_DD_INVALID_BANK_DATA="field_invalid_bank_data",aL=bs.E_DD_INVALID_IBAN="field_invalid_iban",v=bs.E_DD_INVALID_COUNTRY="field_invalid_country",aY=bs.E_DD_INVALID_BIC="field_invalid_bic",aa=bs.DEBIT_TYPE_ELV="elv",bc=bs.DEBIT_TYPE_SEPA="sepa",X=bs.PAYMENT_NOT_TESTDATA="payment_not_testdata",a2=bs.RDP_TYPE="type",aW=bs.RDP_TYPE_POSTFINANCE_CARD="postfinance_card",a0=bs.RDP_TYPE_PAYPAL="paypal",h=bs.RDP_CHECKSUM="checksum",bl=bs.RDP_PUBLIC_KEY="public_key",C=bs.RDP_RETURN_URL="return_url",z=bs.RDP_CANCEL_URL="cancel_url",au=bs.RDP_APP_ID="app_id",Y=bs.E_RDP_INVALID_PUBLIC_KEY="field_invalid_public_key",aS=bs.E_RDP_INVALID_CHECKSUM="field_invalid_checksum",aO=bs.E_RDP_INVALID_APP_ID="field_invalid_app_id",g=bs.E_USE_CREATE_TRANSACTION="use_create_transaction",bh=bs.E_FRAME_NOT_FOUND="frame_not_found",a1=bs.E_FRAME_NOT_LOADED="frame_not_loaded",c=bs.E_FRAME_CONTAINER_NOT_FOUND="container_not_found",bk=bs.E_FRAME_INVALID_STYLESHEET="invalid_stylesheet_url",ak=bs.FRAME_MESSAGE_LOADED="frame_loaded",a9=bs.FRAME_MESSAGE_READY="frame_ready",E=bs.FRAME_MESSAGE_RESIZED="frame_resized",aA=bs.FRAME_MESSAGE_CREATE_TOKEN="create_token",i=bs.FRAME_MESSAGE_OPTIONS="options",ah=bs.FRAME_MESSAGE_CREATE_TOKEN_DATA="create_token_data",aj=bs.FRAME_MESSAGE_CREATE_TOKEN_RESULT="create_token_result",b=bs.FRAME_MESSAGE_GET_META_REQUEST="get_meta_request",G=bs.FRAME_MESSAGE_GET_META_RESULT="get_meta_result",aT=bs.FRAME_PARAM_KEY_APIKEY="apiKey",bx=bs.FRAME_PARAM_KEY_WINLOC="windowLocation",f=bs.BRIDGE_HOST="https://bridge.paymill.de",U=bs.FRAME_HOST=f+"/dss3/frame",aQ=bs.FRAME_MESSAGE_HEADER="paymill:";
var K=10000,aw={},aI=bs.RDP_NAMES={};aI[aW]="";aI[a0]="";var aG={sessionCreateUrl:{test:"https://test-psp.paymill.de/rdp/start",live:"https://psp.paymill.de/rdp/start"},endUrl:{test:"https://test-psp.paymill.de/rdp/finish",live:"https://psp.paymill.de/rdp/finish"}};
var aJ={"4012888888881881":true,"5169147129584558":true};var af=[{type:"American Express",pattern:/^3[47]/,luhn:true,cvcLength:[3,4],numLength:[15]},{type:"Discover",pattern:/^(6011|622(1[2-90][6-9]|[2-8]\d{2}|9[0-1]\d|92[0-5])|64[4-9]|65)/,luhn:true,cvcLength:[3],numLength:[16]},{type:"UnionPay",pattern:/^62/,luhn:false,cvcLength:[3],numLength:[16,17,18,19]},{type:"Diners Club",pattern:/^(30[0-5]|36|38)/,luhn:true,cvcLength:[3],numLength:[14]},{type:"JCB",pattern:/^35([3-8][0-9]|2[8-9])/,luhn:true,cvcLength:[3],numLength:[16]},{type:"Maestro",pattern:/^(5018|5020|5038|5893|6304|6331|6703|6759|676[1-3]|6799|0604)/,luhn:true,cvcLength:[0,3,4],numLength:[12,13,14,15,16,17,18,19]},{type:"MasterCard",pattern:/^(5[1-5])/,luhn:true,cvcLength:[3],numLength:[16]},{type:"Visa",pattern:/^4/,luhn:true,cvcLength:[3],numLength:[13,16]}];
var aK={DE:22};var ai={A:"10",B:"11",C:"12",D:"13",E:"14",F:"15",G:"16",H:"17",I:"18",J:"19",K:"20",L:"21",M:"22",N:"23",O:"24",P:"25",Q:"26",R:"27",S:"28",T:"29",U:"30",V:"31",W:"32",X:"33",Y:"34",Z:"35"};
if(!Array.prototype.indexOf){Array.prototype.indexOf=function(bA){if(this===null||this===undefined){throw new TypeError()
}var bB=Object(this);var by=bB.length>>>0;if(by===0){return -1}var bC=0;if(arguments.length>1){bC=Number(arguments[1]);
if(bC!=bC){bC=0}else{if(bC!==0&&bC!=Infinity&&bC!=-Infinity){bC=(bC>0||-1)*Math.floor(Math.abs(bC))
}}}if(bC>=by){return -1}var bz=bC>=0?bC:Math.max(by-Math.abs(bC),0);for(;bz<by;bz++){if(bz in bB&&bB[bz]===bA){return bz
}}return -1}}if(!Object.keys){Object.keys=(function(){var bA=Object.prototype.hasOwnProperty,bB=!({toString:null}).propertyIsEnumerable("toString"),bz=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],by=bz.length;
return function(bE){if(typeof bE!=="object"&&(typeof bE!=="function"||bE===null)){throw new TypeError("Object.keys called on non-object")
}var bC=[],bF,bD;for(bF in bE){if(bA.call(bE,bF)){bC.push(bF)}}if(bB){for(bD=0;bD<by;
bD++){if(bA.call(bE,bz[bD])){bC.push(bz[bD])}}}return bC}}())}var d=Array.isArray||function(by){return Object.prototype.toString.call(by)==="[object Array]"
};bs.config=function aw(by,bz){if(bz!==undefined){aw[by]=bz}return aw[by]};bs.increaseMonetaryUnit=function aN(bA,bz,by){bz=bz?bz:100;
by=by?by:2;bA=(bA/bz).toFixed(by);return bA};bs.tr=function ao(by){return((by||"")+"").replace(/^\s+|\s+$/g,"")
};bs.clr=function aV(by){return(by+"").replace(/\s+|-/g,"")};bs.clrShopperId=function F(by){return(by+"").replace(/\s+|-|\/|\./g,"")
};bs.flip=function aD(by){return(by+"").split("").reverse().join("")};bs.chksum=function ae(bD){var bz=0,bC,bA,by,bB;
if(bD.match(/^\d+$/)===null){return false}bC=bs.flip(bD);bA=bC.length;for(by=0;by<bA;
++by){bB=parseInt(bC.charAt(by),10);if(0!==by%2){bB*=2}bz+=(bB<10)?bB:bB-9}return(0!==bz&&0===bz%10)
};bs.toFormEncoding=function R(bB,bA){var bC=[];for(var bD in bB){if(bB.hasOwnProperty(bD)){var by=bA?bA+"["+bD+"]":bD,bz=bB[bD];
bC.push("object"===typeof bz?bs.toFormEncoding(bz,by):encodeURIComponent(by)+"="+encodeURIComponent(bz))
}}return bC.join("&")};bs.cardFromNumber=function e(bB){var bz,bA,by;bB=bs.clr(bB);
for(bA=0,by=af.length;bA<by;bA++){bz=af[bA];if(bz.pattern.test(bB)){return bz}}};
bs.validateCardNumber=function aP(bz){var by;bz=bs.clr(bz);by=bs.cardFromNumber(bz);
if(!bz||!by){return false}if(by.luhn&&bs.chksum(bz)===false){return false}return by.numLength.indexOf(bz.length)!=-1
};bs.validateCvc=function aZ(bB,bC){var bz,bA,by;bB=bs.tr(bB);if(!bC){return null!==bB.match(/^\d{3,4}$/)
}bC=bs.clr(bC);for(bA=0,by=af.length;bA<by;bA++){bz=af[bA];if(bz.pattern.test(bC)){if(bB.length>0){return bz.cvcLength.indexOf(bB.length)!=-1&&null!==bB.match(/^\d+$/)
}else{return bz.cvcLength.indexOf(bB.length)!=-1}}}return false};bs.validateExpMonth=function bp(by){return/^([1-9]|0[1-9]|1[012])$/.test(bs.tr(by))
};bs.validateExpYear=function H(by){return/^\d{4}$/.test(bs.tr(by))};bs.validateExpiry=function aE(bC,bA){var bB,by,bz;
if(!bs.validateExpMonth(bC)||!bs.validateExpYear(bA)){return false}bC=parseInt(bs.tr(bC),10);
bA=parseInt(bs.tr(bA),10);bB=new Date();by=bB.getFullYear();bz=bB.getMonth()+1;return(bA>by)||(bA===by&&bC>=bz)
};bs.validateAmount=function T(by){by=bs.tr(by);return/^([0-9]+)(\.[0-9]+)?$/.test(by)
};bs.validateAmountInt=function m(by){by=bs.tr(by);return/^[0-9]+$/.test(by)};bs.validateCurrency=function N(by){by=bs.tr(by);
return/^[A-Z]{3}$/.test(by)};bs.validateHolder=function a(by){if(!by){return false
}return/^.{4,128}$/.test(bs.tr(by))};bs.validateAccountNumber=function be(by){return/^\d+$/.test(bs.clr(by))
};bs.validateBankCode=function p(by){return/^\d{8}$/.test(bs.clr(by))};bs.validateEmail=function aq(by){var bz=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
return bz.test(by)};bs.validateCPF=function o(bz){var bE=0,bG=10,bH,by,bF,bB,bA;if(typeof bz!=="object"||!d(bz)){return false
}else{if([9,10,11].indexOf(bz.length)===-1){return false}else{if(bz.length===9){bz.unshift(0,0)
}else{if(bz.length===10){bz.unshift(0)}}}}bH=bz.pop();by=bz.pop();for(var bD=0;bD<bz.length;
bD++){bE+=(bG*parseInt(bz[bD]));bG--}bF=bE%11;bB=(bF<=1)?0:(11-bF);if(bB!=by){return false
}bz.push(bB);bE=0;bG=11;for(var bC=0;bC<bz.length;bC++){bE+=(bG*parseInt(bz[bC]));
bG--}bF=bE%11;bA=(bF<=1)?0:(11-bF);if(bA!=bH){return false}return true};bs.validateCNPJ=function x(bz){var bE=0,bG=5,bH,by,bF,bB,bA;
if(typeof bz!=="object"||!d(bz)){return false}else{if([13,14].indexOf(bz.length)===-1){return false
}else{if(bz.length===13){bz.unshift(0)}}}bH=bz.pop();by=bz.pop();for(var bD=0;bD<bz.length;
bD++){bE+=(parseInt(bz[bD])*bG);bG=(bG===2)?9:bG-1}bF=bE%11;bB=(bF<=1)?0:(11-bF);
if(bB!=by){return false}bz.push(bB);bE=0;bG=6;for(var bC=0;bC<bz.length;bC++){bE+=(parseInt(bz[bC])*bG);
bG=(bG===2)?9:bG-1}bF=bE%11;bA=(bF<=1)?0:(11-bF);if(bA!=bH){return false}return true
};bs.validateShopperId=function V(bz){var by;if(!bz||["number","string","object"].indexOf(typeof bz)===-1||(typeof bz==="object"&&!d(bz))){return false
}by=bz.toString().replace(/[^\d]+/g,"").split("");if([9,10,11].indexOf(by.length)>=0){return bs.validateCPF(by)
}else{if([13,14].indexOf(by.length)>=0){return bs.validateCNPJ(by)}else{return false
}}};bs.cardType=function an(bz){var by;if(bs.validateCardNumber(bz)){by=bs.cardFromNumber(bz)
}return by?by.type:"Unknown"};bs.getApiKey=function l(){if(typeof PAYMILL_PUBLIC_KEY==="undefined"){throw new Error("No public api key is set. You need to set the global PAYMILL_PUBLIC_KEY variable to your public api key in order to use this api.")
}return PAYMILL_PUBLIC_KEY};bs.isTestKey=function ap(by){return(by+"").match(/^\d{10}/)||(typeof PAYMILL_TEST_MODE!=="undefined"&&PAYMILL_TEST_MODE===true)
};bs.transport={execute:function y(bz,by,bA){throw new Error("paymill.transport.execute() not available!")
}};bs.sessions={execute:function y(bz,by,bA){throw new Error("paymill.sessions.execute() not available!")
}};bs.dom={css:function aB(bz,by){throw new Error("paymill.dom.css() not available!")
},computedStyle:function ba(by,bz){throw new Error("paymill.dom.computedStyle() not available!")
},bind:function(bz,by,bA){throw new Error("paymill.dom.bind() not available!")},innerWidth:function(){throw new Error("paymill.dom.innerWidth() not available!")
},innerHeight:function(){throw new Error("paymill.dom.innerHeight() not available!")
}};bs.createToken=function a4(bC,bE,by,bB){var bD=bs.getApiKey(),bA={type:"createToken"};
try{if(bC[h]!==undefined){throw g}bA.data=(bC[s]===undefined&&bC[j]===undefined)?bs.validateCreditCardRequest(bC,bD):bs.validateDirectDebitRequest(bC);
bs.sessions.execute(bD,bA,bE,by,bB)}catch(bz){setTimeout(function(){bE({apierror:bz})
},0)}};bs.createCORSRequest=function bw(bA,by){var bz=new window.XMLHttpRequest();
if("withCredentials" in bz){bz.open(bA,by,true)}else{if(typeof window.XDomainRequest!="undefined"){bz=new window.XDomainRequest();
bz.open(bA,by)}else{bz=null}}return bz};bs.getBankName=function aF(bC,bD){if(bC===""){return
}var bB="";try{bB=bs.getBlzFromBankParam(bC)}catch(by){bD({apierror:by});return}if(typeof JSON!=="object"){setTimeout(function(){bD({apierror:"Woops, there was an error creating the request."})
},0);return}var bz=bs.getBlzUrl(bB);var bA=bs.createCORSRequest("GET",bz);if(!bA){setTimeout(function(){bD({apierror:"Woops, there was an error creating the request."})
},0);return}bA.onload=function(){var bF=bA.responseText;var bE=JSON.parse(bF).data;
if(typeof bE.success!=="undefined"){if(bE.success){bD(null,bE.name)}else{bD({apierror:bE.error})
}}else{bD({apierror:"Woops, there was an error extracting the request."})}};bA.onerror=function(){bD({apierror:"Woops, there was an error making the request."})
};bA.send()};bs.getBlzFromBankParam=function a3(bz){if(/\D/.test(bz)){var by=bz.toString();
if(by.length==8){return by+"XXX"}else{if(by.length==11){return by}else{if(bs.validateIban(by)){return by.substr(4,8)
}else{throw aL}}}}else{if(bz.toString().length!=8){throw ad}return bz.toString()}};
bs.getBlzUrl=function k(by){return bs.BRIDGE_HOST+"/blz/"+by};bs.disableTds=function al(bz,by){return(bs.isTestKey(bz)&&aJ[by]!==true)
};bs.validateCreditCardRequest=function S(bA,bz){var by={};by[t]=bs.clr(bA[t]);by[a7]=bs.tr(bA[a7]);
by[aH]=bs.tr(bA[aH]);by[br]=bs.tr(bA[br]);by[I]=bs.tr(bA[I]);by[aC]=bs.tr(bA[aC]);
by[bi]=bs.tr(bA[bi]);by[bf]=bs.tr(bA[bf]);by[bm]=bs.tr(bA[bm]);by[a7]=("0"+by[a7]).slice(-2);
if(!bs.validateCardNumber(by[t])){throw bg}if(!bs.validateExpiry(by[a7],by[aH])){throw ax
}if(!bs.validateCvc(by[br],by[t])){throw ab}if(by[I]===""){delete by[I]}var bB=bs.disableTds(bz,by[t]);
if(bs.validateAmountInt(by[bi])){by[aC]=bs.increaseMonetaryUnit(by[bi]);delete by[bi]
}else{if(by[bi]!==undefined&&by[bi]!==""){throw M}else{delete by[bi]}}if(bs.validateAmount(by[aC])){by[aC]=bs.increaseMonetaryUnit(by[aC],1,2)
}else{if(by[aC]!==undefined&&by[aC]!==""){throw P}}if(by[bf]!==undefined&&by[bf]!==""&&!bs.validateCurrency(by[bf])){throw u
}if((by[aC]===undefined||by[aC]==="")&&(by[bf]!==undefined&&by[bf]!=="")){throw P
}else{if((by[aC]!==undefined&&by[aC]!=="")&&(by[bf]===undefined||by[bf]==="")){throw u
}}if(by[bm]!==undefined&&by[bm]!==""){by[bm]=bs.clrShopperId(by[bm]);by[bb]=bs.tr(bA[bb]);
by[J]=bs.tr(bA[J]);by[D]=bs.tr(bA[D]);if(!bs.validateShopperId(by[bm])){throw ac}else{if(!bs.validateEmail(by[bb])){throw w
}else{if(by[J]===undefined||by[J]===""){throw a5}else{if(by[D]===undefined||by[D]===""){throw A
}}}}}else{delete by[bm]}return by};bs.validateDirectDebitRequest=function Q(bA){var bz={},by=bs.getDebitType(bA);
if(by==bc){bz[W]=bs.clr(bA[W]);bz[j]=bs.clr(bA[j]);bs.validateIban(bz[W],true);if(!bs.validateBic(bz[j])){throw aY
}if(bz[j].toString().length==8){bz[j]=bz[j]+"XXX"}bz[q]=bA[W].substr(0,2)}else{if(by==aa){bz[n]=bs.clr(bA[n]);
bz[s]=bs.clr(bA[s]);if(!bs.validateAccountNumber(bz[n])){throw ag}if(!bs.validateBankCode(bz[s])){throw ad
}bz[q]="DE"}else{throw O}}bz[B]=bs.tr(bA[B]);if(bz[B]===undefined||bz[B]===""){throw ar
}if(!bs.validateHolder(bz[B])){throw ar}return bz};bs.getDebitType=function ay(bz){var by="unknown";
if((bz[W]!==undefined)&&(bz[j]!==undefined)){by=bc}else{if((bz[s]!==undefined)&&(bz[n]!==undefined)){by=aa
}}return by};bs.validateIban=function aX(bz,by){var bC,bA;try{bz=bs.clr(bz.toString()).toUpperCase();
if(bz.length<5){throw aL}if(!/^[A-Z]{2}[0-9]{2}[A-Z0-9]+$/.test(bz)){throw aL}bC=bz.substr(0,2);
if(aK[bC]===undefined){throw v}bA=aK[bC];if(bA!=bz.length){throw aL}if(!bs.checkIbanChecksum(bz)){throw aL
}return true}catch(bB){if(by){throw bB}else{return false}}};bs.checkIbanChecksum=function bo(bz){var by=bs.getIbanChecksumNumber(bz);
return bs.getIbanModulo(by)==="01"};bs.getIbanChecksumNumber=function am(by){var bA=by.substr(4)+by.substr(0,4);
bA=bA.toUpperCase();for(var bz in ai){bA=bA.replace(bz,ai[bz])}return bA};bs.getIbanModulo=function az(bz){var bD=0;
var bB=9;var by=true;var bC="";while(by){if(bz.substr(bD,bB).length<7){by=false;bB=bz.substr(bD,bB).length
}var bA=bC+bz.substr(bD,bB);bC=(bA%97)+"";if(bC.length===1){bC="0"+bC}bD=bD+bB;bB=7
}return bC};bs.validateBic=function bn(by){by=bs.clr(by).toUpperCase();return/[A-Z]{4}(DE)[A-Z1-9]{2}([A-Z\d]{3})?/.test(by)
};var a6=function a6(by,bD,bG,bE){try{var bA=bs.validateCheckoutData(by,bD);var bB=bs.getApiKey();
var bF=bs.isTestKey(bB)?aG.sessionCreateUrl.test:aG.sessionCreateUrl.live;var bz=bs.isTestKey(bB)?aG.endUrl.test:aG.endUrl.live;
bs.makeGetCorsRequest(bF,bA,function(bH){if(bH.brand===aW){var bI={termUrl:bH.termUrl,aiReq:bH.aiReq};
bs.handlePostfinanceStart(bH.rdp_session_id,bH.url,bz,bI,bA[h],aI[aW],bD,bG,bE)}else{if(bH.brand===a0){bs.handlePaypal(bH.url)
}}},bD)}catch(bC){setTimeout(function(){bD({apierror:bC})},0)}};bs.createTransaction=a6;
bs.createPayment=a6;bs.makeGetCorsRequest=function bu(by,bA,bz,bC){if(bA!==null){by=by+"?"+bs.getUrlParamsFromObject(bA)
}if(typeof JSON!=="object"){setTimeout(function(){bC({apierror:"Woops, there was an error creating the request."})
},0);return}var bB=bs.createCORSRequest("GET",by);if(!bB){setTimeout(function(){bC({apierror:"Woops, there was an error creating the request."})
},0);return}bB.onload=function(){var bE=bB.responseText;var bD=JSON.parse(bE);if(bD.data!==undefined){bz(bD.data)
}else{if(bD.error!==undefined){bC({apierror:bD.error})}else{bC({apierror:"unknown_error"})
}}};bB.onerror=function(){setTimeout(function(){bC({apierror:"Woops, there was an error making the request."})
},0);return};bB.send()};bs.getUrlParamsFromObject=function r(bz){var bA=[];for(var by in bz){if(bz.hasOwnProperty(by)){bA.push(encodeURIComponent(by)+"="+encodeURIComponent(bz[by]))
}}return bA.join("&")};bs.validateCheckoutData=function bd(bA){var bz={};bz[h]=bs.tr(bA[h]);
bz[bl]=bs.tr(bA[bl]);if(!bs.validateNonEmptyString(bz[bl])){try{bz[bl]=bs.getApiKey()
}catch(by){throw Y}}if(!bs.validateNonEmptyString(bz[h])){throw aS}if(au in bA){bz[au]=bs.tr(bA[au]);
if(!bs.validateNonEmptyString(bz[au])){throw aO}}return bz};bs.validateNonEmptyString=function aU(by){if(by===undefined||by===null){return false
}return bs.tr(by.toString()).length>0};bs.isString=function bj(by){return(Object.prototype.toString.call(by)==="[object String]")
};bs.isArray=function d(by){return(Object.prototype.toString.call(by)==="[object Array]")
};bs.debounce=function bv(bA,bC,bz){var bF,bE,by,bD,bG;var bB=function(){var bH=new Date().getTime()-bD;
if(bH<bC&&bH>=0){bF=setTimeout(bB,bC-bH)}else{bF=null;if(!bz){bG=bA.apply(by,bE);
if(!bF){by=bE=null}}}};return function(){by=this;bE=arguments;bD=new Date().getTime();
var bH=bz&&!bF;if(!bF){bF=setTimeout(bB,bC)}if(bH){bG=bA.apply(by,bE);by=bE=null}return bG
}};bs.getRandomInt=function aR(bz,by){if(bz===undefined){bz=0}if(by===undefined){by=K
}return Math.floor(Math.random()*(by-bz))+bz};bs.registerMessageListener=function av(by){if(window.addEventListener){window.addEventListener("message",by,false)
}else{if(window.attachEvent){window.attachEvent("onmessage",by)}else{}}};bs.callbackImmediately=function Z(bB,bA,bz,by){if(!bB){return
}if(bA){bB(a8(bA,bz))}else{if(by){bB(undefined,by)}else{bB()}}};bs.callbackDelayed=function L(bB,bA,bz,by){setTimeout(function(){bs.callbackImmediately(bB,bA,bz,by)
},0)};var a8=function a8(bz,by){if(by===undefined){return{apierror:bz}}return{apierror:bz,message:by}
}})(window.paymill={});(function(b,d,a){b.getDeviceIdent=function c(){var e={v:"paymill-com"};
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
}}})(window.paymill===undefined?window.paymill={}:window.paymill);(function(c,i,o){var a=c.frameHandler={},g={};
a.createTokenViaFrameCallbacks={};a.getMetadataViaFrameCallbacks={};a.createTokenViaFrameTdsInit={};
a.createTokenViaFrameTdsCleanup={};a.frameLoaded=false;var q=a.messageListener=function q(v){if(v.origin!==c.BRIDGE_HOST){return
}var w=JSON.parse(v.data);if(!w.frameId||w.frameId!=a.frameId){return}if(w.message&&w.message.indexOf(c.FRAME_MESSAGE_HEADER)===0){var u=w.message.slice(c.FRAME_MESSAGE_HEADER.length);
g[u](w.data)}};var h=function h(u){var v=u.callId;if(v&&a.createTokenViaFrameCallbacks[v]){a.createTokenViaFrameCallbacks[v](u.error,u.result)
}};var n=function n(u){var v=u.callId;if(v&&a.createTokenViaFrameCallbacks[v]){paymill.transport.handleResponse(u.data,a.createTokenViaFrameCallbacks[v],a.createTokenViaFrameTdsInit[v],a.createTokenViaFrameTdsCleanup[v])
}};var s=function s(u){a.sendFrameMessage(paymill.FRAME_MESSAGE_OPTIONS,a.frameOptions)
};var j=function j(u){a.frameLoaded=true;if(a.embedFrameCallback){a.embedFrameCallback()
}};var t=function t(u){a.frame.setAttribute("height",u.height)};var b=function b(u){a.getMetadataViaFrameCallbacks[u.callId](u.data)
};var f=function f(x){var v=o.location.protocol+"//"+o.location.hostname,u="",w=["paybutton","partner"];
if(o.location.port!==""){v=v+":"+o.location.port}u=c.FRAME_HOST+"?parent="+encodeURIComponent(v)+"&id="+encodeURIComponent(x);
if(i.PAYMILL_PUBLIC_KEY){u+="&public_key="+encodeURIComponent(PAYMILL_PUBLIC_KEY)
}if(typeof a.frameOptions.lang==="string"&&a.frameOptions.lang.length===2){u+="&lang="+a.frameOptions.lang.toLowerCase()
}if(typeof a.frameOptions.type==="string"&&w.indexOf(a.frameOptions.type)>=0){u+="&type="+a.frameOptions.type
}if(a.frameOptions.type==="partner"&&a.frameOptions.theme&&typeof a.frameOptions.theme==="string"&&a.frameOptions.theme.length>=1){u+="&theme="+a.frameOptions.theme
}return u};c.createTokenViaFrame=function l(x,y,u,w){if(!a.frame){c.callbackDelayed(y,c.E_FRAME_NOT_FOUND,"Frame not found. Call embedFrame() first!");
return}if(!a.frameLoaded){c.callbackDelayed(y,c.E_FRAME_NOT_LOADED,"Frame not yet loaded. Please wait for embedFrame() to finish, before creating a token!");
return}var v=c.getRandomInt();a.createTokenViaFrameCallbacks[v]=y;a.createTokenViaFrameTdsInit[v]=u;
a.createTokenViaFrameTdsCleanup[v]=w;x[paymill.FRAME_PARAM_KEY_APIKEY]=c.getApiKey();
x[paymill.FRAME_PARAM_KEY_WINLOC]=i.location.href;x.callId=v;a.sendFrameMessage(paymill.FRAME_MESSAGE_CREATE_TOKEN,x)
};c.getMetadataViaFrame=function d(v){if(!a.frame){c.callbackDelayed(v,c.E_FRAME_NOT_FOUND,"Frame not found. Call embedFrame() first!");
return}if(!a.frameLoaded){c.callbackDelayed(v,c.E_FRAME_NOT_LOADED,"Frame not yet loaded. Please wait for embedFrame() to finish, before creating a token!");
return}var u={callId:c.getRandomInt()};a.getMetadataViaFrameCallbacks[u.callId]=v;
a.sendFrameMessage(paymill.FRAME_MESSAGE_GET_META_REQUEST,u)};a.sendFrameMessage=function e(u,v){var w={message:"paymill:"+u,data:v,frameId:a.frameId};
a.frame.contentWindow.postMessage(JSON.stringify(w),c.BRIDGE_HOST)};c.embedFrame=function p(u,w,z){var y;
a.removeFrame();if(c.isString(u)){y=o.getElementById(u)}else{if(i.jQuery&&u instanceof jQuery){y=u.get(0)
}else{if(u&&u.appendChild){y=u}}}if(!y){c.callbackDelayed(z,c.E_FRAME_CONTAINER_NOT_FOUND,"Container element cannot be found!");
return}var x=c.getRandomInt(),v=(w&&(w.resize||w.resize===false))?"100%":"0";a.frameReady=false;
a.embedFrameCallback=z;a.frameOptions=a.validateFrameOptions(w);a.frameId=x;a.frame=a.createFrame(x,v);
y.appendChild(a.frame);a.frame.src=f(x);delete a.frameOptions.lang;if(typeof a.frameOptions.resize==="function"){g[c.FRAME_MESSAGE_RESIZED]=a.frameOptions.resize;
delete a.frameOptions.resize}};a.validateFrameOptions=function k(v){var u=["lang","resize","type","theme"],x={};
if(typeof v==="object"){for(var w=0;w<u.length;w++){if(v.hasOwnProperty(u[w])){x[u[w]]=v[u[w]]
}}}return x};a.createFrame=function r(w,u){var v=o.createElement("iframe");v.setAttribute("id","paymill-dss3frame-"+w);
v.setAttribute("frameborder","0");v.setAttribute("width","100%");v.setAttribute("height",u);
v.setAttribute("scrolling","no");return v};a.removeFrame=function m(){if(a.frame&&a.frame.parentNode){a.frame.parentNode.removeChild(a.frame)
}};g[c.FRAME_MESSAGE_CREATE_TOKEN_RESULT]=h;g[c.FRAME_MESSAGE_CREATE_TOKEN_DATA]=n;
g[c.FRAME_MESSAGE_READY]=s;g[c.FRAME_MESSAGE_LOADED]=j;g[c.FRAME_MESSAGE_RESIZED]=t;
g[c.FRAME_MESSAGE_GET_META_RESULT]=b;paymill.registerMessageListener(q)})(window.paymill===undefined?window.paymill={}:window.paymill,window,document);
(function(c,p,u){c.transport=c.transport||{};c.sessions=c.sessions||{};var i=u.head||u.getElementsByTagName("head")[0]||u.documentElement;
var d={test:"https://test-token.paymill.de",live:"https://token-v2.paymill.de"};
var t="https://psp.paymill.de/rdp/status/";var x={test:"https://test-token.paymill.de",live:"https://token.paymill.de"};
var o={test:"https://test-tds.paymill.de/end.php",live:"https://tds.paymill.de/end.php"};
var r={liveCreateUrl:"https://psp.paymill.de/risk/session",testCreateUrl:"https://test-psp.paymill.de/risk/session",iframeUrl:"https://bridge.paymill.de/dss3/logo.htm",iframeImg:"https://bridge.paymill.de/dss3/logo.gif"};
var e="ACK",A="NOK",v="CONNECTOR_TEST",I="LIVE";var g={"100.100.600":c.E_CC_INVALID_CVC,"100.100.601":c.E_CC_INVALID_CVC,"100.100.303":c.E_CC_INVALID_EXPIRY,"100.100.304":c.E_CC_INVALID_EXPIRY,"100.100.301":c.E_CC_INVALID_EXP_YEAR,"100.100.300":c.E_CC_INVALID_EXP_YEAR,"100.100.201":c.E_CC_INVALID_EXP_MONTH,"100.100.200":c.E_CC_INVALID_EXP_MONTH,"100.100.100":[c.E_CC_INVALID_NUMBER,c.E_DD_INVALID_NUMBER],"100.100.101":[c.E_CC_INVALID_NUMBER,c.E_DD_INVALID_NUMBER],"100.100.400":[c.E_CC_INVALID_HOLDER,c.E_DD_INVALID_HOLDER],"100.100.401":[c.E_CC_INVALID_HOLDER,c.E_DD_INVALID_HOLDER],"100.100.402":[c.E_CC_INVALID_HOLDER,c.E_DD_INVALID_HOLDER],"999.999.998":c.PAYMENT_NOT_TESTDATA,"600.200.500":"invalid_payment_data"};
var w={exp_month:"account.expiry.month",exp_year:"account.expiry.year",cardholder:"account.holder",number:"account.number",amount:"presentation.amount3D",currency:"presentation.currency3D",cvc:"account.verification",accountholder:"account.holder",bank:"account.bank",country:"account.country",iban:"account.iban",bic:"account.bic",shopper_id:"account.shopper.id",email:"account.email",first_name:"account.first.name",last_name:"account.last.name",session_id:"risk.session.id"};
var m={};var D={};var q=[];var H;c.transport.buildRequestUrl=function a(N,M,L){var J,K=c.toFormEncoding(M);
if(L.bic!==undefined||L.iban!==undefined||L.bank!==undefined){J=c.isTestKey(N)?x.test:x.live
}else{J=c.isTestKey(N)?d.test:d.live}if(J.indexOf("?")>=0){J+="&"+K}else{J+="?"+K
}return J};var z=c.transport.handleResponse=function z(O,P,J,M){var K=null,L=null;
O=O||null;if(O===null){c.logging.createEntry("PaymillBridge",["bridge-jsonp.js","handleResponse()"],"ERROR","JSONP_response_returns_null");
return P(F("internal_server_error"),null)}else{if(O.error){if(/check channelId or login/.test(O.error.message)){return P(F("invalid_public_key"))
}return P(F("unknown_error",O.error.message||O.error))}else{var N=O.transaction.processing;
if(N.result===e){L=O.transaction.identification.uniqueId;if(N.redirect){j(O,L,P,J,M)
}else{return P(null,C(L,O))}}else{return P(s(O),null)}}}};var C=function C(K,M){var N=M.transaction.customer;
var J={token:K};if(N){var L=M.transaction.account;J.bin=L.bin;J.binCountry=L.binCountry;
J.brand=L.brand;J.last4Digits=L.last4Digits;J.ip=N.contact.ip;J.ipCountry=N.contact.ipCountry
}return J};var y=function y(T,O,J){if(typeof J==="undefined"){J="3D-Secure"}var L=T.url,ad=T.params;
var R=u.body||u.getElementsByTagName("body")[0];var W=600,V=400,N=-60;var ac=parseInt(c.dom.computedStyle(R,"margin-left"),10)+parseInt(c.dom.computedStyle(R,"padding-left"),10),ab=parseInt(c.dom.computedStyle(R,"margin-top"),10)+parseInt(c.dom.computedStyle(R,"padding-top"),10);
var X=c.dom.innerWidth(),aa=c.dom.innerHeight();var M=u.createElement("div");M.style.cssText="position:fixed;z-index:2147483646;top:-"+ab+"px;left:-"+ac+"px;width:"+(p.innerWidth+ac)+"px;height:"+(p.innerHeight+ab)+"px;background-color:#000;opacity:0.5;";
var Z=u.createElement("div");Z.style.cssText="position:fixed; z-index: 2147483647; width: "+W+"px; border-radius: 5px; background: white; font-family: sans-serif; font-size: 14px; -webkit-box-shadow: 0 0 50px rgba(0,0,0,0.3); -moz-box-shadow:  0 0 50px rgba(0,0,0,0.3); box-shadow: 0 0 50px rgba(0,0,0,0.3);";
Z.style.left=Math.floor(Math.max(0,X/2-W/2))+"px";Z.style.top=Math.floor(Math.max(0,aa/2-V/2)+N)+"px";
Z.innerHTML="<div style=\"border-bottom: 1px solid #c0c0c0!important; -webkit-border-top-right-radius: 5px; -moz-border-radius-topright: 5px; border-top-right-radius: 5px; -webkit-border-bottom-right-radius: 0; -moz-border-radius-bottomright: 0; border-bottom-right-radius: 0; -webkit-border-bottom-left-radius: 0; -moz-border-radius-bottomleft: 0; border-bottom-left-radius: 0; -webkit-border-top-left-radius: 5px; -moz-border-radius-topleft: 5px; border-top-left-radius: 5px; background-color: #dcdcdc; background-image: -moz-linear-gradient(top, #ededed, #c3c3c3); background-image: -ms-linear-gradient(top, #ededed, #c3c3c3); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ededed), to(#c3c3c3)); background-image: -webkit-linear-gradient(top, #ededed, #c3c3c3); background-image: -o-linear-gradient(top, #ededed, #c3c3c3); background-image: linear-gradient(top, #ededed, #c3c3c3); background-repeat: repeat-x; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#c3c3c3', GradientType=0); *zoom: 1; padding: 10px 0 0 0; height: 26px; text-align: center;\">"+J+'</div><iframe style="border:none;width:'+W+"px;height:"+V+'px;"><html><body></body></html></iframe><div style="padding: 14px 15px 15px; margin-bottom: 0; text-align: right; background-color: #f5f5f5; border-top: 1px solid #ddd; -webkit-border-radius: 0 0 6px 6px; -moz-border-radius: 0 0 6px 6px; border-radius: 0 0 6px 6px; -webkit-box-shadow: inset 0 1px 0 #ffffff; -moz-box-shadow: inset 0 1px 0 #ffffff; box-shadow: inset 0 1px 0 #ffffff; *zoom: 1;"><input type="submit" value="'+(c.config("3ds_cancel_label")||"Cancel")+"\" style=\"display: inline-block; *display: inline; *zoom: 1; padding: 4px 10px 4px; margin-bottom: 0; font-size: 13px; line-height: 20px; *line-height: 20px; color: #333333; text-align: center; text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); vertical-align: middle; cursor: pointer; background-color: #f5f5f5; background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6); background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6)); background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6); background-image: -o-linear-gradient(top, #ffffff, #e6e6e6); background-image: linear-gradient(top, #ffffff, #e6e6e6); background-repeat: repeat-x; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0); border-color: #e6e6e6 #e6e6e6 #bfbfbf; border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); *background-color: #e6e6e6; filter: progid:DXImageTransform.Microsoft.gradient(enabled = false); border: 1px solid #cccccc; *border: 0; border-bottom-color: #b3b3b3; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; *margin-left: .3em; -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05); -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05); box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);\"></div>";
var P=Z.firstChild.nextSibling.nextSibling.firstChild;var Q=Z.firstChild.nextSibling;
c.dom.bind(P,"click",O);R.insertBefore(M,R.firstChild);R.insertBefore(Z,R.firstChild);
q.push(M);q.push(Z);var U=Q.contentWindow||Q.contentDocument;if(U.document){U=U.document
}var K=U.createElement("form");K.method="post";K.action=L;for(var Y in ad){var S=U.createElement("input");
S.type="hidden";S.name=Y;S.value=decodeURIComponent(ad[Y]);K.appendChild(S)}if(U.body){U.body.appendChild(K)
}else{U.appendChild(K)}K.submit()};var f=function f(){var J=q.length;while(J--){if(q[J]&&q[J].parentNode){q[J].parentNode.removeChild(q[J])
}}q.length=0};var j=function j(O,K,U,R,J){var Q=O.transaction.processing.redirect;
var S=O.transaction.mode===v;var N={url:decodeURIComponent(Q.url),params:{}};for(var M in Q.parameters){N.params[M]=Q.parameters[M]
}var T=R||y,L=J||f,P=o[S?"test":"live"];T(N,function(){L();U(F("3ds_cancelled"))});
c.receiveMessage();c.receiveMessage(function(W,V){if(W.data==="ok"){L();U(null,C(K,O))
}if(W.data==="cancelled"){L();U(F("3ds_cancelled"))}},P.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))
};var s=function s(L){var K=L.transaction.processing["return"].code,J=L.transaction.processing["return"].message;
if(g[K]!==undefined){var M=g[K];if(Object.prototype.toString.apply(M)==="[object Array]"){return F(M[0])
}return F(M)}return F("unknown_error",J)};var F=function F(K,J){if(J===undefined){return{apierror:K}
}return{apierror:K,message:J}};c.sessions.execute=function k(N,M,R,Q,L){var O="paymillCallback"+parseInt(Math.random()*4294967295,10),P=u.createElement("script"),K=c.isTestKey(N);
var J=r[K?"testCreateUrl":"liveCreateUrl"]+"?jsonPFunction=window.paymill.sessions."+O;
D[O]=null;c.sessions[O]=function(S){D[O]=S};P.async="async";P.src=J;P.onload=P.onerror=P.onreadystatechange=function(S){if(!P.readyState||/loaded|complete/.test(P.readyState)){if(D[O]&&D[O].session_id){var T=D[O].session_id;
M.data.session_id=T;setTimeout(function(){b(T)},0);delete paymill.sessions[O];delete D[O]
}P.onload=P.onerror=P.onreadystatechange=null;i.removeChild(P);c.transport.execute(N,M,R,Q,L)
}};i.insertBefore(P,i.firstChild)};var b=function b(L){var K=r.iframeUrl+"?s="+L,M=r.iframeImg+"?s="+L,J=u.body||u.getElementsByTagName("body")[0];
if(!H){H=u.createElement("div");H.setAttribute("style","position:fixed; z-index:-9007199254740992; width:1; height:1; bottom:0; right:0");
H.setAttribute("width",1);H.setAttribute("height",1);J.insertBefore(H,J.lastChild)
}H.innerHTML='<iframe width="1" height="1" frameborder="0" scrolling="no" src="'+K+'"><img width="1" height="1" src="'+M+'" /></iframe>'
};c.transport.execute=function n(O,N,T,S,K){var Q="paymillCallback"+parseInt(Math.random()*4294967295,10);
m[Q]=null;c.transport[Q]=function(V){m[Q]=V};var J=c.isTestKey(O),R=J?v:I,U=o[J?"test":"live"];
U+="?parentUrl="+encodeURIComponent(encodeURIComponent(c.transport.getTdsResultUrl()))+"&";
var M={"transaction.mode":R,"channel.id":O,"response.url":U,jsonPFunction:"window.paymill.transport."+Q};
for(var L in N.data){if(w[L]===undefined){continue}M[w[L]]=N.data[L]}var P=u.createElement("script");
P.async="async";P.src=c.transport.buildRequestUrl(O,M,N.data);P.onload=P.onerror=P.onreadystatechange=function(W){if(!P.readyState||/loaded|complete/.test(P.readyState)){var V=m[Q];
delete paymill.transport[Q];delete m[Q];P.onload=P.onerror=P.onreadystatechange=null;
i.removeChild(P);c.transport.handleResponse(V,T,S,K)}};i.insertBefore(P,i.firstChild)
};var G=c.transport.getTdsResultUrl=function G(){return p.location.href};c.handlePostfinanceStart=function E(N,U,P,R,Q,O,T,J,M){var L={url:decodeURIComponent(U)};
var S=J||y,K=M||f;L.params=R;S(L,function(){h(N,Q,T,K)},O);c.receiveMessage();c.receiveMessage(function(W,V){if(W.data==="rdpready"){h(N,Q,T,K)
}},P.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))};var h=function h(L,K,M,J){J();c.makeGetCorsRequest(B(L,K),null,function(N){if(N.status===undefined||N.transaction===undefined){M(F("unknown_error"))
}else{M(null,{status:N.status,transaction:N.transaction})}},M)};var B=function B(K,J){return t+K+"/"+J
};c.handlePaypal=function l(J){p.location=J}})(window.paymill===undefined?window.paymill={}:window.paymill,window,document);
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
if(window.postMessage){i.postMessage(h,j.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))}else{if(j){i.location.replace(j.replace(/#.*$/,"")+"#"+(+new Date())+(d++)+"&"+h)
}}};c.receiveMessage=function g(i,h){if(window.postMessage){if(i){b=function(j){if((typeof h==="string"&&j.origin!==h)||(Object.prototype.toString.call(h)==="[object Function]"&&h(j.origin)===!1)){return !1
}i(j)}}if(window.addEventListener){window[i?"addEventListener":"removeEventListener"]("message",b,!1)
}else{if(b){window[i?"attachEvent":"detachEvent"]("onmessage",b)}}}else{if(e){window.clearInterval(e);
e=null}if(i){e=window.setInterval(function(){var k=document.location.hash,j=/^#?\d+&/;
if(k!==f&&j.test(k)){f=k;i({data:k.replace(j,"")})}},100)}}}})(window.paymill===undefined?window.paymill={}:window.paymill);