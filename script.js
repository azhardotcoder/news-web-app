function _0x52a7(_0x27cb60,_0xc8b91b){const _0x323072=_0x3230();return _0x52a7=function(_0x52a7f4,_0x54bb66){_0x52a7f4=_0x52a7f4-0x64;let _0x56708b=_0x323072[_0x52a7f4];return _0x56708b;},_0x52a7(_0x27cb60,_0xc8b91b);}const _0x474eb2=_0x52a7;(function(_0x2d2537,_0x278a10){const _0x3d9fdb=_0x52a7,_0xe36cbf=_0x2d2537();while(!![]){try{const _0x189cfc=parseInt(_0x3d9fdb(0x79))/0x1*(parseInt(_0x3d9fdb(0x77))/0x2)+parseInt(_0x3d9fdb(0x6f))/0x3+-parseInt(_0x3d9fdb(0x66))/0x4*(-parseInt(_0x3d9fdb(0x7a))/0x5)+-parseInt(_0x3d9fdb(0x6e))/0x6*(-parseInt(_0x3d9fdb(0x71))/0x7)+parseInt(_0x3d9fdb(0x81))/0x8*(-parseInt(_0x3d9fdb(0x70))/0x9)+-parseInt(_0x3d9fdb(0x78))/0xa+parseInt(_0x3d9fdb(0x76))/0xb;if(_0x189cfc===_0x278a10)break;else _0xe36cbf['push'](_0xe36cbf['shift']());}catch(_0x4adcf7){_0xe36cbf['push'](_0xe36cbf['shift']());}}}(_0x3230,0x2d594));const API_KEY=_0x474eb2(0x87),url=_0x474eb2(0x72);window['addEventListener'](_0x474eb2(0x7e),()=>fetchNews('India'));function reload(){const _0x13c993=_0x474eb2;window['location'][_0x13c993(0x8d)]();}function _0x3230(){const _0x1c9150=['\x20·\x20','3559952gkgQrz','4lnKvCp','1467790uoDqmj','66184VGQJXX','755kOoSyJ','search-button','cards-container','url','load','toLocaleString','articles','272eoeCLz','template-news-card','active','appendChild','src','publishedAt','d43114a88dfe4893ad2fa299ceaff78e','value','description','#news-title','remove','getElementById','reload','content','Asia/Jakarta','open','click','urlToImage','4616hCHzAG','source','innerHTML','classList','addEventListener','name','forEach','querySelector','134922kooeoj','74046isgDVx','91296zHqimh','7RSTeZm','https://newsapi.org/v2/everything?q=','#news-img','&apiKey='];_0x3230=function(){return _0x1c9150;};return _0x3230();}async function fetchNews(_0x3bebd1){const _0x4a1683=_0x474eb2,_0x4bbfc2=await fetch(''+url+_0x3bebd1+_0x4a1683(0x74)+API_KEY),_0x4f5c5f=await _0x4bbfc2['json']();bindData(_0x4f5c5f[_0x4a1683(0x80)]);}function bindData(_0x2445de){const _0x47f6d6=_0x474eb2,_0x28416e=document[_0x47f6d6(0x8c)](_0x47f6d6(0x7c)),_0x36bf48=document[_0x47f6d6(0x8c)](_0x47f6d6(0x82));_0x28416e[_0x47f6d6(0x68)]='',_0x2445de[_0x47f6d6(0x6c)](_0x536ce7=>{const _0x773453=_0x47f6d6;if(!_0x536ce7[_0x773453(0x65)])return;const _0x4fdfde=_0x36bf48[_0x773453(0x8e)]['cloneNode'](!![]);fillDataInCard(_0x4fdfde,_0x536ce7),_0x28416e[_0x773453(0x84)](_0x4fdfde);});}function fillDataInCard(_0x137665,_0x550f49){const _0x4a3421=_0x474eb2,_0x497d18=_0x137665[_0x4a3421(0x6d)](_0x4a3421(0x73)),_0x1e5d2e=_0x137665['querySelector'](_0x4a3421(0x8a)),_0xe9a402=_0x137665['querySelector']('#news-source'),_0x16d174=_0x137665[_0x4a3421(0x6d)]('#news-desc');_0x497d18[_0x4a3421(0x85)]=_0x550f49[_0x4a3421(0x65)],_0x1e5d2e['innerHTML']=_0x550f49['title'],_0x16d174['innerHTML']=_0x550f49[_0x4a3421(0x89)];const _0x1cb509=new Date(_0x550f49[_0x4a3421(0x86)])[_0x4a3421(0x7f)]('en-US',{'timeZone':_0x4a3421(0x8f)});_0xe9a402[_0x4a3421(0x68)]=_0x550f49[_0x4a3421(0x67)][_0x4a3421(0x6b)]+_0x4a3421(0x75)+_0x1cb509,_0x137665['firstElementChild'][_0x4a3421(0x6a)](_0x4a3421(0x64),()=>{const _0x38dd54=_0x4a3421;window[_0x38dd54(0x90)](_0x550f49[_0x38dd54(0x7d)],'_blank');});}let curSelectedNav=null;function onNavItemClick(_0x4fa20a){const _0x172462=_0x474eb2;fetchNews(_0x4fa20a);const _0x3c90a5=document['getElementById'](_0x4fa20a);curSelectedNav?.[_0x172462(0x69)]['remove'](_0x172462(0x83)),curSelectedNav=_0x3c90a5,curSelectedNav[_0x172462(0x69)]['add'](_0x172462(0x83));}const searchButton=document[_0x474eb2(0x8c)](_0x474eb2(0x7b)),searchText=document[_0x474eb2(0x8c)]('search-text');searchButton[_0x474eb2(0x6a)]('click',()=>{const _0x8da35c=_0x474eb2,_0x5d93e2=searchText[_0x8da35c(0x88)];if(!_0x5d93e2)return;fetchNews(_0x5d93e2),curSelectedNav?.[_0x8da35c(0x69)][_0x8da35c(0x8b)]('active'),curSelectedNav=null;});