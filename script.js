"use strict";
(function(){
  var KEY="personal-finance-tracker-v1";
  var CURRENCY=["UZS","USD","EUR","RUB","KZT"];
  var CATS={
    income:[["salary","Зарплата","#24845d","↗"],["freelance","Фриланс","#7188c6","✦"],["business","Бизнес","#9873bd","▣"],["gift","Подарок","#d38b39","＋"],["other-income","Другое","#4c9baa","•"]],
    expense:[["food","Продукты","#e3a13f","⌂"],["housing","Жильё","#9c7bc2","⌂"],["transport","Транспорт","#5595bd","↗"],["shopping","Покупки","#df7771","◇"],["health","Здоровье","#55a98a","＋"],["entertainment","Развлечения","#d07bad","☆"],["bills","Счета","#7188c6","▤"],["other-expense","Другое","#83928a","•"]]
  };
  var LANG=[
    ["МЕНЮ","MENYU","MENU"],["Дашборд","Bosh sahifa","Dashboard"],["Операции","Amaliyotlar","Transactions"],["Настройки","Sozlamalar","Settings"],["Ваши данные — ваши","Ma’lumotlaringiz — o‘zingizniki","Your data belongs to you"],["Операции хранятся только в этом браузере.","Amaliyotlar faqat shu brauzerda saqlanadi.","Transactions are stored only in this browser."],["Личный бюджет","Shaxsiy budjet","Personal budget"],["Локальное пространство","Mahalliy makon","Local space"],["Язык интерфейса","Interfeys tili","Interface language"],
    ["ЛИЧНЫЕ ФИНАНСЫ","SHAXSIY MOLIYA","PERSONAL FINANCE"],["Период дашборда","Bosh sahifa davri","Dashboard period"],["Период","Davr","Period"],["Эта неделя","Bu hafta","This week"],["Этот месяц","Bu oy","This month"],["Этот год","Bu yil","This year"],["Переключить тему","Mavzuni almashtirish","Toggle theme"],["Добавить операцию","Amaliyot qo‘shish","Add transaction"],["Финансовый обзор","Moliyaviy sharh","Financial overview"],["Сводка за текущую неделю","Joriy hafta xulosasi","This week’s summary"],["Сводка за ","Xulosa: ",""],["",""," summary"],[" год"," yil"," summary"],["Обновляется автоматически","Avtomatik yangilanadi","Updates automatically"],["Ключевые показатели","Asosiy ko‘rsatkichlar","Key metrics"],
    ["Общий баланс","Umumiy balans","Total balance"],["За всё время","Barcha vaqt uchun","All time"],["Доходы","Daromadlar","Income"],["Расходы","Xarajatlar","Expenses"],["за период","davr davomida","this period"],["Динамика финансов","Moliyaviy dinamika","Financial trend"],["Доходы минус расходы","Daromad minus xarajat","Income minus expenses"],["Баланс периода","Davr balansi","Period balance"],["График динамики финансов","Moliyaviy dinamika grafigi","Financial trend chart"],["Расходы по категориям","Toifalar bo‘yicha xarajatlar","Expenses by category"],["Распределение за период","Davr bo‘yicha taqsimot","Period distribution"],["Распределение расходов по категориям","Xarajatlarning toifalar bo‘yicha taqsimoti","Expense distribution by category"],["Нет расходов за период","Davr uchun xarajatlar yo‘q","No expenses in this period"],["Добавьте операции, чтобы увидеть динамику","Dinamikaning ko‘rinishi uchun amaliyot qo‘shing","Add transactions to see the trend"],
    ["ВСЕ ЗАПИСИ","BARCHA YOZUVLAR","ALL TRANSACTIONS"],["История операций","Amaliyotlar tarixi","Transaction history"],["Поиск, фильтрация и управление транзакциями.","Tranzaksiyalarni qidirish, filtrlash va boshqarish.","Search, filter, and manage transactions."],["Добавить","Qo‘shish","Add"],["Поиск по описанию","Tavsif bo‘yicha qidirish","Search descriptions"],["Поиск","Qidirish","Search"],["Тип операции","Amaliyot turi","Transaction type"],["Все типы","Barcha turlar","All types"],["Категория","Toifa","Category"],["Все категории","Barcha toifalar","All categories"],["Сортировка","Saralash","Sort"],["Сначала новые","Avval yangilari","Newest first"],["Сначала старые","Avval eskilari","Oldest first"],["Сумма: по убыванию","Summa: kamayish tartibida","Amount: high to low"],["Сумма: по возрастанию","Summa: o‘sish tartibida","Amount: low to high"],["Сбросить","Tozalash","Reset"],["ОПЕРАЦИЯ","AMALIYOT","TRANSACTION"],["ТИП","TUR","TYPE"],["КАТЕГОРИЯ","TOIFA","CATEGORY"],["ДАТА","SANA","DATE"],["СУММА","SUMMA","AMOUNT"],["Действия","Amallar","Actions"],["Сохранено локально","Mahalliy saqlandi","Saved locally"],["данные не покидают устройство","ma’lumotlar qurilmangizdan chiqmaydi","your data stays on this device"],
    ["ТРАНЗАКЦИЯ","TRANZAKSIYA","TRANSACTION"],["Новая операция","Yangi amaliyot","New transaction"],["Редактировать операцию","Amaliyotni tahrirlash","Edit transaction"],["Закрыть","Yopish","Close"],["Расход","Xarajat","Expense"],["Доход","Daromad","Income"],["Сумма","Summa","Amount"],["Дата","Sana","Date"],["Описание","Tavsif","Description"],["Например, продукты на неделю","Masalan, bir haftalik mahsulotlar","For example, weekly groceries"],["Отмена","Bekor qilish","Cancel"],["Сохранить изменения","O‘zgarishlarni saqlash","Save changes"],["Сохранить операцию","Amaliyotni saqlash","Save transaction"],
    ["ПЕРСОНАЛИЗАЦИЯ","SOZLAMALAR","PERSONALIZATION"],["Основная валюта","Asosiy valyuta","Main currency"],["UZS — узбекский сум","UZS — o‘zbek so‘mi","UZS — Uzbekistani soʻm"],["USD — доллар США","USD — AQSh dollari","USD — US dollar"],["EUR — евро","EUR — yevro","EUR — euro"],["RUB — российский рубль","RUB — Rossiya rubli","RUB — Russian ruble"],["KZT — казахстанский тенге","KZT — Qozog‘iston tengesi","KZT — Kazakhstani tenge"],["Тема интерфейса","Interfeys mavzusi","Interface theme"],["Светлая или тёмная","Yorug‘ yoki qorong‘i","Light or dark"],["Светлая тема","Yorug‘ mavzu","Light theme"],["Тёмная тема","Qorong‘i mavzu","Dark theme"],["Локальное хранение","Mahalliy saqlash","Local storage"],["Транзакции и настройки хранятся в localStorage этого браузера. При смене валюты суммы пересчитываются по официальному курсу ЦБ Узбекистана на дату смены; требуется интернет.","Tranzaksiyalar va sozlamalar ushbu brauzerning localStorage xotirasida saqlanadi. Valyuta almashtirilganda summalar almashtirish sanasidagi O‘zbekiston MB rasmiy kursi bo‘yicha qayta hisoblanadi; internet kerak.","Transactions and settings are stored in this browser’s localStorage. When you change currency, all amounts are recalculated using the Uzbekistan Central Bank rate for that date; internet access is required."],["Суммы конвертированы по официальному курсу ЦБ Узбекистана","Summalar O‘zbekiston MB rasmiy kursi bo‘yicha konvertatsiya qilindi","Amounts converted using the official Uzbekistan Central Bank rate"],["Валюта изменена. Сохранённых операций нет.","Valyuta o‘zgartirildi. Saqlangan amaliyotlar yo‘q.","Currency changed. There were no saved transactions to convert."],["Не удалось получить курс ЦБ Узбекистана. Валюта и суммы не изменены.","O‘zbekiston MB kursini olib bo‘lmadi. Valyuta va summalar o‘zgartirilmadi.","Could not get the Uzbekistan Central Bank rate. Currency and amounts were not changed."],["Транзакции","Tranzaksiyalar","Transactions"],["Удалить все","Hammasini o‘chirish","Delete all"],["Готово","Tayyor","Done"],
    ["Ничего не найдено","Hech narsa topilmadi","No results found"],["Пока нет операций","Hozircha amaliyotlar yo‘q","No transactions yet"],["Измените поиск или сбросьте фильтры.","Qidiruvni o‘zgartiring yoki filtrlarni tozalang.","Change your search or reset the filters."],["Добавьте первую доходную или расходную операцию.","Birinchi daromad yoki xarajat amaliyotini qo‘shing.","Add your first income or expense transaction."],["Редактировать","Tahrirlash","Edit"],["Удалить","O‘chirish","Delete"],["Хранилище браузера недоступно. Изменения пока останутся в памяти страницы.","Brauzer xotirasidan foydalanib bo‘lmadi. O‘zgarishlar hozircha sahifa xotirasida qoladi.","Browser storage is unavailable. Changes will stay in this page for now."],["Не удалось прочитать localStorage. Используются демонстрационные данные.","localStorage ma’lumotlarini o‘qib bo‘lmadi. Namuna ma’lumotlari ishlatilmoqda.","Could not read localStorage. Demo data is being used."],["Сумма должна быть больше нуля.","Summa noldan katta bo‘lishi kerak.","Amount must be greater than zero."],["Укажите корректную дату.","To‘g‘ri sanani kiriting.","Enter a valid date."],["Добавьте описание операции.","Amaliyot tavsifini kiriting.","Add a transaction description."],["Операция добавлена","Amaliyot qo‘shildi","Transaction added"],["Операция обновлена","Amaliyot yangilandi","Transaction updated"],["Удалить операцию","Amaliyot o‘chirilsinmi","Delete transaction"],["Операция удалена","Amaliyot o‘chirildi","Transaction deleted"],["Список уже пуст","Ro‘yxat allaqachon bo‘sh","The list is already empty"],["Удалить все операции? Это действие нельзя отменить.","Barcha amaliyotlar o‘chirilsinmi? Bu amalni ortga qaytarib bo‘lmaydi.","Delete all transactions? This action cannot be undone."],["Все операции удалены","Barcha amaliyotlar o‘chirildi","All transactions deleted"]
  ];
  var CAT_NAMES={salary:["Зарплата","Maosh","Salary"],freelance:["Фриланс","Frilans","Freelance"],business:["Бизнес","Biznes","Business"],gift:["Подарок","Sovg‘a","Gift"],"other-income":["Другое","Boshqa","Other"],food:["Продукты","Oziq-ovqat","Groceries"],housing:["Жильё","Uy-joy","Housing"],transport:["Транспорт","Transport","Transport"],shopping:["Покупки","Xaridlar","Shopping"],health:["Здоровье","Salomatlik","Health"],entertainment:["Развлечения","Ko‘ngilochar","Entertainment"],bills:["Счета","Hisoblar","Bills"],"other-expense":["Другое","Boshqa","Other"]};
  var langIndex=function(){return state.settings.lang==="uz"?1:state.settings.lang==="en"?2:0;};
  var locale=function(){return state.settings.lang==="uz"?"uz-UZ":state.settings.lang==="en"?"en-US":"ru-RU";};
  function tr(text){for(var i=0;i<LANG.length;i++)if(LANG[i].indexOf(text)>=0)return LANG[i][langIndex()];return text;}
  var catLabel=function(id){return CAT_NAMES[id]?CAT_NAMES[id][langIndex()]:catById(id)[1];};
  function translateStatic(){
    document.documentElement.lang=state.settings.lang;
    var walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),node;
    while((node=walker.nextNode())){var raw=node.nodeValue,trimmed=raw.trim();if(trimmed){var translated=tr(trimmed);if(translated!==trimmed){var start=raw.indexOf(trimmed);node.nodeValue=raw.slice(0,start)+translated+raw.slice(start+trimmed.length);}}}
    ["aria-label","title","placeholder"].forEach(function(attr){document.querySelectorAll("["+attr+"]").forEach(function(el){var value=el.getAttribute(attr),translated=tr(value);if(translated!==value)el.setAttribute(attr,translated);});});
    $("#languageSelect").value=state.settings.lang;
  }
  var $=function(s,r){return (r||document).querySelector(s);};
  var dateISO=function(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");};
  var today=new Date();
  var monthISO=dateISO(today).slice(0,7);
  var id=function(){return (window.crypto&&crypto.randomUUID)?crypto.randomUUID():Date.now()+"-"+Math.random().toString(16).slice(2);};
  var escape=function(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};
  var catById=function(value){var all=CATS.income.concat(CATS.expense);return all.find(function(c){return c[0]===value;})||CATS.expense[7];};
  var demo=function(){
    var d=function(offset,day){return dateISO(new Date(today.getFullYear(),today.getMonth()+offset,day));};
    var base=[
      [-1,1,"Зарплата за месяц","income",12000000,"salary"],
      [-1,3,"Аренда квартиры","expense",3200000,"housing"],
      [-1,5,"Продукты на неделю","expense",780000,"food"],
      [-1,8,"Проездной и такси","expense",340000,"transport"],
      [-1,14,"Дизайн-консультация","income",1850000,"freelance"],
      [-1,18,"Коммунальные услуги","expense",620000,"bills"],
      [0,1,"Зарплата за месяц","income",12000000,"salary"],
      [0,4,"Аренда квартиры","expense",3200000,"housing"],
      [0,7,"Продукты и дом","expense",960000,"food"],
      [0,9,"Мобильная связь и интернет","expense",185000,"bills"],
      [0,11,"Возврат за покупку","income",420000,"other-income"],
      [0,13,"Такси","expense",145000,"transport"]
    ];
    return base.map(function(x,n){return {id:"sample-"+n,date:d(x[0],x[1]),description:x[2],type:x[3],amount:x[4],category:x[5]};});
  };
  var Store={
    load:function(){
      try{
        var raw=localStorage.getItem(KEY);
        if(raw===null)return {transactions:demo(),settings:{currency:"UZS",theme:"light",lang:"ru"},fresh:true};
        var parsed=JSON.parse(raw);
        return {transactions:Array.isArray(parsed.transactions)?parsed.transactions.filter(function(t){return t&&t.id&&t.date&&Number(t.amount)>0;}):[],settings:{currency:CURRENCY.indexOf(parsed.settings&&parsed.settings.currency)>=0?parsed.settings.currency:"UZS",theme:parsed.settings&&parsed.settings.theme==="dark"?"dark":"light",lang:parsed.settings&&["ru","uz","en"].indexOf(parsed.settings.lang)>=0?parsed.settings.lang:"ru"}};
      }catch(e){return {transactions:demo(),settings:{currency:"UZS",theme:"light",lang:"ru"},fresh:true,error:true};}
    },
    save:function(){try{localStorage.setItem(KEY,JSON.stringify({transactions:state.transactions,settings:state.settings}));return true;}catch(e){notify(tr("Хранилище браузера недоступно. Изменения пока останутся в памяти страницы."));return false;}}
  };
  var initial=Store.load();
  var state={transactions:initial.transactions,settings:initial.settings,period:"month",search:"",type:"all",category:"all",sort:"date-desc"};
  var toastTimer=0;
  var saving=false;
  var currencyChanging=false;
  function fetchCbuRates(){
    var controller=window.AbortController?new window.AbortController():null,timeout=0,options={cache:"no-store"};
    if(controller){options.signal=controller.signal;timeout=setTimeout(function(){controller.abort();},12000);}
    return fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/",options)
      .then(function(response){if(!response.ok)throw new Error("cbu_response");return response.json();})
      .then(function(data){
        if(!Array.isArray(data)||!data.length)throw new Error("cbu_data");
        var perUZS={UZS:1};
        data.forEach(function(item){
          var code=String(item.Ccy||"").toUpperCase();
          var nominal=Number(String(item.Nominal==null?1:item.Nominal).replace(/\s/g,"").replace(",","."));
          var rate=Number(String(item.Rate||"").replace(/\s/g,"").replace(",","."));
          if(CURRENCY.indexOf(code)>=0&&isFinite(nominal)&&nominal>0&&isFinite(rate)&&rate>0)perUZS[code]=rate/nominal;
        });
        return {perUZS:perUZS,date:String((data[0]&&data[0].Date)||"")};
      })
      .then(function(result){if(timeout)clearTimeout(timeout);return result;},function(error){if(timeout)clearTimeout(timeout);throw error;});
  }
  function changeCurrency(target,select){
    var previous=state.settings.currency;
    if(currencyChanging){select.value=previous;return;}
    if(CURRENCY.indexOf(target)<0||target===previous){select.value=previous;return;}
    currencyChanging=true;select.disabled=true;select.value=previous;
    var previousTransactions=state.transactions;
    var ratesPromise=previousTransactions.length?fetchCbuRates():Promise.resolve({perUZS:{UZS:1},date:""});
    ratesPromise.then(function(rates){
      var factor=1;
      if(previousTransactions.length){
        var from=Number(rates.perUZS[previous]),to=Number(rates.perUZS[target]);
        if(!(isFinite(from)&&from>0&&isFinite(to)&&to>0))throw new Error("missing_cbu_rate");
        factor=from/to;
      }
      var converted=previousTransactions.map(function(transaction){
        var amount=Number(transaction.amount);
        if(!(isFinite(amount)&&amount>0))throw new Error("invalid_amount");
        var result={};
        Object.keys(transaction).forEach(function(key){result[key]=transaction[key];});
        result.amount=Math.round(amount*factor*100000000)/100000000;
        if(!(isFinite(result.amount)&&result.amount>0))throw new Error("invalid_converted_amount");
        return result;
      });
      state.transactions=converted;
      state.settings.currency=target;
      if(!Store.save()){
        state.transactions=previousTransactions;
        state.settings.currency=previous;
        UI.all();
        return;
      }
      UI.all();
      if(previousTransactions.length){
        notify(tr("Суммы конвертированы по официальному курсу ЦБ Узбекистана")+(rates.date?" — "+rates.date:""));
      }else notify(tr("Валюта изменена. Сохранённых операций нет."));
    }).catch(function(){
      if(state.settings.currency!==previous){
        state.transactions=previousTransactions;
        state.settings.currency=previous;
        Store.save();
        UI.all();
      }
      notify(tr("Не удалось получить курс ЦБ Узбекистана. Валюта и суммы не изменены."));
    }).then(function(){
      currencyChanging=false;select.disabled=false;select.value=state.settings.currency;
    },function(){
      currencyChanging=false;select.disabled=false;select.value=state.settings.currency;
    });
  }
  function notify(message){var el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(function(){el.classList.remove("show");},2800);}
  function fmt(value){try{return new Intl.NumberFormat(locale(),{style:"currency",currency:state.settings.currency,maximumFractionDigits:state.settings.currency==="UZS"?0:2}).format(Number(value)||0);}catch(e){return Math.round(value).toLocaleString(locale())+" "+state.settings.currency;}}
  function compact(value){var n=Number(value)||0;return Math.abs(n)>=1000000?(n/1000000).toLocaleString(locale(),{maximumFractionDigits:1})+(state.settings.lang==="en"?"M":state.settings.lang==="uz"?" mln":" млн"):Math.round(n/1000).toLocaleString(locale())+(state.settings.lang==="en"?"K":state.settings.lang==="uz"?" ming":" тыс.");}
  function validDate(s){if(!/^\d{4}-\d{2}-\d{2}$/.test(s))return false;var d=new Date(s+"T12:00:00");return !isNaN(d.getTime())&&dateISO(d)===s;}
  function getRange(){
    var start=new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var end=new Date(start);
    if(state.period==="week"){var dow=(start.getDay()+6)%7;start.setDate(start.getDate()-dow);end=new Date(start);end.setDate(start.getDate()+7);}
    else if(state.period==="month"){start=new Date(today.getFullYear(),today.getMonth(),1);end=new Date(today.getFullYear(),today.getMonth()+1,1);}
    else{start=new Date(today.getFullYear(),0,1);end=new Date(today.getFullYear()+1,0,1);}
    return {from:dateISO(start),to:dateISO(end)};
  }
  function inRange(t,r){return t.date>=r.from&&t.date<r.to;}
  var Finance={
    period:function(){var r=getRange();return state.transactions.filter(function(t){return inRange(t,r);});},
    balance:function(){return state.transactions.reduce(function(sum,t){return sum+(t.type==="income"?Number(t.amount):-Number(t.amount));},0);},
    history:function(){
      var q=state.search.trim().toLocaleLowerCase(locale());
      return state.transactions.filter(function(t){
        return (state.type==="all"||t.type===state.type)&&(state.category==="all"||t.category===state.category)&&(!q||(t.description+" "+catLabel(t.category)+" "+catById(t.category)[1]).toLocaleLowerCase(locale()).includes(q));
      }).sort(function(a,b){if(state.sort==="date-asc")return a.date.localeCompare(b.date);if(state.sort==="amount-desc")return Number(b.amount)-Number(a.amount);if(state.sort==="amount-asc")return Number(a.amount)-Number(b.amount);return b.date.localeCompare(a.date);});
    },
    totals:function(list){return list.reduce(function(o,t){o[t.type]+=Number(t.amount);return o;},{income:0,expense:0});}
  };
  var UI={
    theme:function(){document.documentElement.dataset.theme=state.settings.theme;var label=state.settings.theme==="dark"?tr("Светлая тема"):tr("Тёмная тема");$("#themeToggle").title=label;$("#settingsTheme").textContent=label;},
    categories:function(select,type,selected,allOption){var items=type==="all"?CATS.income.concat(CATS.expense):CATS[type];var html=allOption?'<option value="all">Все категории</option>':"";items.forEach(function(c){html+='<option value="'+escape(c[0])+'">'+escape(c[1])+"</option>";});select.innerHTML=html;if(selected&&Array.from(select.options).some(function(o){return o.value===selected;}))select.value=selected;},
    metrics:function(){
      var list=Finance.period(),totals=Finance.totals(list),balance=Finance.balance();
      $("#balanceValue").textContent=fmt(balance);$("#balanceValue").classList.toggle("negative",balance<0);
      $("#incomeValue").textContent=fmt(totals.income);$("#expenseValue").textContent=fmt(totals.expense);
      var ic=list.filter(function(t){return t.type==="income";}).length,ec=list.filter(function(t){return t.type==="expense";}).length;
      $("#incomeCount").textContent=countText(ic)+" "+tr("за период");$("#expenseCount").textContent=countText(ec)+" "+tr("за период");
      var monthName=new Intl.DateTimeFormat(locale(),{month:"long"}).format(today);var captions={week:tr("Сводка за текущую неделю"),month:state.settings.lang==="en"?monthName+" summary":tr("Сводка за ")+monthName,year:tr("Сводка за ")+today.getFullYear()+tr(" год")};
      $("#periodCaption").textContent=captions[state.period];
      $("#dateLabel").textContent=new Intl.DateTimeFormat(locale(),{weekday:"long",day:"numeric",month:"long"}).format(today);
      $("#navCount").textContent=state.transactions.length.toLocaleString(locale());$("#storedCount").textContent=countText(state.transactions.length);
    },
    trend:function(){
      var buckets=[],mode=state.period;
      if(mode==="week"){var start=new Date(today.getFullYear(),today.getMonth(),today.getDate());start.setDate(start.getDate()-((start.getDay()+6)%7));for(var i=0;i<7;i++){var d=new Date(start);d.setDate(start.getDate()+i);buckets.push({from:dateISO(d),to:dateISO(new Date(d.getFullYear(),d.getMonth(),d.getDate()+1)),label:new Intl.DateTimeFormat(locale(),{weekday:"short"}).format(d)});}}
      else if(mode==="month"){var y=today.getFullYear(),m=today.getMonth(),days=new Date(y,m+1,0).getDate(),count=Math.ceil(days/7);for(var j=0;j<count;j++){var day=j*7+1,finish=Math.min(day+7,days+1);buckets.push({from:dateISO(new Date(y,m,day)),to:dateISO(new Date(y,m,finish)),label:day+"–"+(finish-1)});}}
      else{for(var k=0;k<12;k++){buckets.push({from:dateISO(new Date(today.getFullYear(),k,1)),to:dateISO(new Date(today.getFullYear(),k+1,1)),label:new Intl.DateTimeFormat(locale(),{month:"short"}).format(new Date(today.getFullYear(),k,1)).replace(".","")});}}
      var values=buckets.map(function(b){return state.transactions.filter(function(t){return inRange(t,b);}).reduce(function(sum,t){return sum+(t.type==="income"?Number(t.amount):-Number(t.amount));},0);});
      var box=$("#trendChart");if(values.every(function(v){return v===0;})){box.innerHTML='<div class="empty-chart">'+tr("Добавьте операции, чтобы увидеть динамику")+'</div>';return;}
      var W=700,H=220,L=48,R=9,T=10,B=27,ph=H-T-B,pw=W-L-R,min=Math.min(0,...values),max=Math.max(0,...values);if(max===min){max+=1;min-=1;}var pad=(max-min)*.12;max+=pad;min-=pad;
      function px(i){return L+pw*(buckets.length===1?.5:i/(buckets.length-1));}
      function py(v){return T+(max-v)/(max-min)*ph;}
      var grid="";for(var n=0;n<4;n++){var val=max-(max-min)*n/3,yy=py(val);grid+='<line class="gridline" x1="'+L+'" y1="'+yy+'" x2="'+(W-R)+'" y2="'+yy+'"/><text class="axis" x="'+(L-6)+'" y="'+(yy+3)+'" text-anchor="end">'+escape(compact(val))+"</text>";}
      var zero='<line class="zero-line" x1="'+L+'" y1="'+py(0)+'" x2="'+(W-R)+'" y2="'+py(0)+'"/>';
      var path=values.map(function(v,i){return (i?"L":"M")+" "+px(i).toFixed(1)+" "+py(v).toFixed(1);}).join(" ");
      var points=values.map(function(v,i){return '<circle class="point" cx="'+px(i)+'" cy="'+py(v)+'" r="3.5"><title>'+escape(buckets[i].label+": "+fmt(v))+"</title></circle>";}).join("");
      var labels=buckets.map(function(b,i){return '<text class="axis" x="'+px(i)+'" y="'+(H-5)+'" text-anchor="middle">'+escape(b.label)+"</text>";}).join("");
      box.innerHTML='<svg viewBox="0 0 '+W+" "+H+'" preserveAspectRatio="none" aria-hidden="true">'+grid+zero+'<path class="trend-line" d="'+path+'"/>'+points+labels+"</svg>";
    },
    donut:function(){
      var costs=Finance.period().filter(function(t){return t.type==="expense";});
      var map={};costs.forEach(function(t){map[t.category]=(map[t.category]||0)+Number(t.amount);});
      var items=Object.keys(map).map(function(key){var c=catById(key);return {id:key,label:catLabel(key),color:c[2],value:map[key]};}).sort(function(a,b){return b.value-a.value;});
      var sum=items.reduce(function(a,b){return a+b.value;},0);var totalNumber=new Intl.NumberFormat(locale(),{maximumFractionDigits:state.settings.currency==="UZS"?0:2}).format(sum);$("#donutTotal").innerHTML='<span class="donut-number">'+escape(totalNumber)+'</span><span class="donut-currency">'+escape(state.settings.currency)+'</span>';
      var circumference=2*Math.PI*53,offset=0,parts="";
      items.forEach(function(item){var len=circumference*item.value/sum;parts+='<circle class="donut-part" cx="75" cy="75" r="53" stroke="'+item.color+'" stroke-dasharray="'+len+" "+(circumference-len)+'" stroke-dashoffset="'+(-offset)+'"><title>'+escape(item.label+": "+fmt(item.value))+"</title></circle>";offset+=len;});
      $("#categoryChart").innerHTML='<svg viewBox="0 0 150 150" aria-hidden="true"><circle class="donut-track" cx="75" cy="75" r="53"/>'+parts+"</svg>";
      fitDonutTotal();$("#categoryLegend").innerHTML=items.length?items.slice(0,5).map(function(x){return '<div class="legend-row"><i class="swatch" style="background:'+x.color+'"></i><span>'+escape(x.label)+'</span><b>'+escape(fmt(x.value))+"</b></div>";}).join(""):'<div class="legend-row"><span>'+tr("Нет расходов за период")+'</span></div>';
    },
    history:function(){
      var list=Finance.history(),rows="";
      if(!list.length)rows='<tr class="empty-row"><td colspan="6"><div class="empty-state"><strong>'+(state.transactions.length?tr("Ничего не найдено"):tr("Пока нет операций"))+'</strong><span>'+(state.transactions.length?tr("Измените поиск или сбросьте фильтры."):tr("Добавьте первую доходную или расходную операцию."))+"</span></div></td></tr>";
      list.forEach(function(t){
        var c=catById(t.category),positive=t.type==="income";
        rows+='<tr data-id="'+escape(t.id)+'"><td><div class="txn-title"><i class="category-icon" style="color:'+c[2]+'">'+c[3]+'</i><span>'+escape(t.description)+'</span></div></td><td><span class="type-badge '+(positive?"income":"expense")+'">'+(positive?tr("Доход"):tr("Расход"))+'</span></td><td>'+escape(catLabel(t.category))+'</td><td>'+escape(new Intl.DateTimeFormat(locale(),{day:"numeric",month:"short",year:"numeric"}).format(new Date(t.date+"T12:00:00")))+'</td><td class="'+(positive?"money-in":"money-out")+'">'+(positive?"+":"−")+escape(fmt(t.amount))+'</td><td><div class="actions"><button class="row-btn" data-action="edit" type="button" aria-label="'+tr("Редактировать")+'"><svg viewBox="0 0 24 24"><path d="m14 5 5 5M4 20l4-.8L19 8.2a2.1 2.1 0 0 0-3-3L5 16.2 4 20Z"/></svg></button><button class="row-btn delete" data-action="delete" type="button" aria-label="'+tr("Удалить")+'"><svg viewBox="0 0 24 24"><path d="M4.5 7h15M9 7V4.5h6V7m2.5 0-.8 13H7.3L6.5 7M10 10v6m4-6v6"/></svg></button></div></td></tr>';
      });
      $("#transactionRows").innerHTML=rows;$("#resultCount").textContent=countText(list.length);
    },
    all:function(){UI.theme();$("#currencySelect").value=state.settings.currency;$(".currency-label").textContent=state.settings.currency;UI.metrics();UI.trend();UI.donut();UI.history();}
  };
  function fitDonutTotal(){
    var number=$("#categoryChart .donut-number"),chart=$("#categoryChart");
    if(!number||!chart.clientWidth)return;
    var available=number.parentElement.clientWidth*.92;
    var font=Math.min(15,available/(Math.max(1,number.textContent.length)*.58));
    number.style.fontSize=Math.max(6,font)+"px";
  }
  function countText(n){if(state.settings.lang==="uz")return n+" ta amaliyot";if(state.settings.lang==="en")return n+(n===1?" transaction":" transactions");var x=n%100;if(x>=11&&x<=14)return n+" операций";switch(n%10){case 1:return n+" операция";case 2:case 3:case 4:return n+" операции";default:return n+" операций";}}
  function commit(){Store.save();UI.all();}
  function updateCategoryOptions(select,type,selected,all){UI.categories(select,type,selected,all);}
  UI.categories= function(select,type,selected,all){var html=all?'<option value="all">'+tr("Все категории")+'</option>':"";var list=type==="all"?CATS.income.concat(CATS.expense):CATS[type];list.forEach(function(c){html+='<option value="'+escape(c[0])+'">'+escape(catLabel(c[0]))+"</option>";});select.innerHTML=html;if(selected&&Array.from(select.options).some(function(o){return o.value===selected;}))select.value=selected;};
  function renderCategoryFilter(){var prev=state.category;updateCategoryOptions($("#categoryFilter"),state.type,prev,true);state.category=$("#categoryFilter").value;}
  function openForm(transaction){
    $("#transactionForm").reset();$("#transactionId").value="";$("#transactionDate").value=dateISO(new Date());$("#formError").textContent="";
    if(transaction){$("#transactionId").value=transaction.id;$("#transactionType").value=transaction.type;updateCategoryOptions($("#category"),transaction.type,transaction.category,false);$("#amount").value=transaction.amount;$("#transactionDate").value=transaction.date;$("#description").value=transaction.description;$("#transactionTitle").textContent=tr("Редактировать операцию");$("#saveButton").textContent=tr("Сохранить изменения");}
    else{$("#transactionType").value="expense";updateCategoryOptions($("#category"),"expense",null,false);$("#transactionTitle").textContent=tr("Новая операция");$("#saveButton").textContent=tr("Сохранить операцию");}
    $("#transactionDialog").showModal();$("#amount").focus();
  }
  $("#transactionType").addEventListener("change",function(){updateCategoryOptions($("#category"),this.value,null,false);});
  $("#addTop").addEventListener("click",function(){openForm(null);});
  $("#addHistory").addEventListener("click",function(){openForm(null);});
  $("#transactionForm").addEventListener("submit",function(event){
    event.preventDefault();if(saving)return;
    var form=this,amount=Number($("#amount").value),date=$("#transactionDate").value,description=$("#description").value.trim();
    if(!form.reportValidity())return;
    if(!Number.isFinite(amount)||amount<=0){$("#formError").textContent=tr("Сумма должна быть больше нуля.");return;}
    if(!validDate(date)){ $("#formError").textContent=tr("Укажите корректную дату.");return;}
    if(!description){$("#formError").textContent=tr("Добавьте описание операции.");return;}
    saving=true;$("#saveButton").disabled=true;
    var transaction={id:$("#transactionId").value||id(),type:$("#transactionType").value,amount:amount,category:$("#category").value,date:date,description:description};
    var index=state.transactions.findIndex(function(t){return t.id===transaction.id;});
    if(index<0)state.transactions.push(transaction);else state.transactions[index]=transaction;
    $("#transactionDialog").close();commit();notify(index<0?tr("Операция добавлена"):tr("Операция обновлена"));
    saving=false;$("#saveButton").disabled=false;
  });
  $("#transactionRows").addEventListener("click",function(event){
    var button=event.target.closest("[data-action]"),row=button&&button.closest("tr[data-id]");if(!button||!row)return;
    var found=state.transactions.find(function(t){return t.id===row.dataset.id;});if(!found)return;
    if(button.dataset.action==="edit")openForm(found);
    if(button.dataset.action==="delete"&&window.confirm(tr("Удалить операцию")+" «"+found.description+"»?")){state.transactions=state.transactions.filter(function(t){return t.id!==found.id;});commit();notify(tr("Операция удалена"));}
  });
  $("#languageSelect").addEventListener("change",function(){state.settings.lang=["ru","uz","en"].indexOf(this.value)>=0?this.value:"ru";Store.save();translateStatic();renderCategoryFilter();UI.all();});
  $("#periodSelect").addEventListener("change",function(){state.period=this.value;UI.all();});
  $("#typeFilter").addEventListener("change",function(){state.type=this.value;renderCategoryFilter();UI.history();});
  $("#categoryFilter").addEventListener("change",function(){state.category=this.value;UI.history();});
  $("#sortFilter").addEventListener("change",function(){state.sort=this.value;UI.history();});
  $("#search").addEventListener("input",function(){state.search=this.value;UI.history();});
  $("#resetFilters").addEventListener("click",function(){state.search="";state.type="all";state.category="all";state.sort="date-desc";$("#search").value="";$("#typeFilter").value="all";$("#sortFilter").value="date-desc";renderCategoryFilter();UI.history();});
  function toggleTheme(){state.settings.theme=state.settings.theme==="dark"?"light":"dark";Store.save();UI.theme();}
  $("#themeToggle").addEventListener("click",toggleTheme);$("#settingsTheme").addEventListener("click",toggleTheme);
  function openSettings(){$("#settingsDialog").showModal();}
  $("#openSettings").addEventListener("click",openSettings);$("#footerSettings").addEventListener("click",openSettings);
  $("#currencySelect").addEventListener("change",function(){changeCurrency(this.value,this);});
  document.querySelectorAll("[data-close]").forEach(function(btn){btn.addEventListener("click",function(){var d=document.getElementById(btn.dataset.close);if(d&&d.open)d.close();});});
  document.querySelectorAll("dialog").forEach(function(dialog){dialog.addEventListener("click",function(event){if(event.target===dialog)dialog.close();});});
  $("#clearData").addEventListener("click",function(){if(!state.transactions.length){notify(tr("Список уже пуст"));return;}if(!window.confirm(tr("Удалить все операции? Это действие нельзя отменить.")))return;state.transactions=[];commit();notify(tr("Все операции удалены"));});
  document.querySelectorAll(".nav-item[href^='#']").forEach(function(link){link.addEventListener("click",function(){document.querySelectorAll(".nav-item[href^='#']").forEach(function(item){item.classList.remove("active");});link.classList.add("active");});});
  if(initial.fresh)Store.save();
  translateStatic();
  renderCategoryFilter();
  UI.all();
  fitDonutTotal();
  if(window.ResizeObserver){var donutObserver=new ResizeObserver(fitDonutTotal);donutObserver.observe($("#categoryChart"));}else window.addEventListener("resize",fitDonutTotal);
  if(initial.error)setTimeout(function(){notify(tr("Не удалось прочитать localStorage. Используются демонстрационные данные."));},300);
})();
