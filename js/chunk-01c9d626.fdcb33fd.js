(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01c9d626"],{"2cea":function(e,t,c){"use strict";c("adf1")},a434:function(e,t,c){"use strict";var n=c("23e7"),o=c("da84"),i=c("23cb"),a=c("5926"),s=c("07fa"),r=c("7b0b"),l=c("65f0"),u=c("8418"),d=c("1dde"),b=d("splice"),p=o.TypeError,m=Math.max,h=Math.min,f=9007199254740991,j="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!b},{splice:function(e,t){var c,n,o,d,b,g,O=r(this),v=s(O),k=i(e,v),y=arguments.length;if(0===y?c=n=0:1===y?(c=0,n=v-k):(c=y-2,n=h(m(a(t),0),v-k)),v+c-n>f)throw p(j);for(o=l(O,n),d=0;d<n;d++)b=k+d,b in O&&u(o,d,O[b]);if(o.length=n,c<n){for(d=k;d<v-n;d++)b=d+n,g=d+c,b in O?O[g]=O[b]:delete O[g];for(d=v;d>v-n+c;d--)delete O[d-1]}else if(c>n)for(d=v-n;d>k;d--)b=d+n-1,g=d+c-1,b in O?O[g]=O[b]:delete O[g];for(d=0;d<c;d++)O[d+k]=arguments[d+2];return O.length=v-n+c,o}})},adf1:function(e,t,c){},b5ae:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=function(e){return Object(n["pushScopeId"])("data-v-3924e3a4"),e=e(),Object(n["popScopeId"])(),e},i={class:"p-1"},a={class:"p-5 mx-auto mt-10 bg-gray-300 rounded-lg shadow-lg dark:bg-gray-800 md:w-1/2 bg-opacity-40"},s={key:0,class:"p-4 my-4 text-xl font-bold text-center text-white bg-green-500 animate-bounce"},r=o((function(){return Object(n["createElementVNode"])("option",{value:""},"Select a Subject",-1)})),l=["value"],u=o((function(){return Object(n["createElementVNode"])("option",{value:""},"Select Chapter",-1)})),d=["value"],b=["disabled"],p={key:0,class:"w-6 h-6 mx-1 border-4 border-t-4 border-white rounded-full animate-spin loader_btn"};function m(e,t,c,o,m,h){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,[Object(n["createElementVNode"])("div",a,[m.submitted?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",s," Question submitted ")):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("form",{ref:"form",onSubmit:t[5]||(t[5]=Object(n["withModifiers"])((function(){return h.submitQuestion&&h.submitQuestion.apply(h,arguments)}),["prevent"])),class:"flex flex-col items-center space-y-4"},[Object(n["withDirectives"])(Object(n["createElementVNode"])("select",{required:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return m.question.subject=e}),onChange:t[1]||(t[1]=function(){return h.getChapters&&h.getChapters.apply(h,arguments)}),class:"input-block",placeholder:"Select Subject"},[r,(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(m.subjects,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("option",{key:t,value:e},Object(n["toDisplayString"])(e),9,l)})),128))],544),[[n["vModelSelect"],m.question.subject]]),Object(n["withDirectives"])(Object(n["createElementVNode"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return m.question.chapter=e}),class:"input-block"},[u,(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(m.chapters,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("option",{key:t,value:e},Object(n["toDisplayString"])(e),9,d)})),128))],512),[[n["vModelSelect"],m.question.chapter]]),Object(n["createElementVNode"])("input",{type:"file",class:"input-block dark:text-white",onChange:t[3]||(t[3]=function(){return h.uploadImage&&h.uploadImage.apply(h,arguments)}),accept:"image/*"},null,32),Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return m.question.text=e}),class:"input-block",placeholder:"Write your question"},null,512),[[n["vModelText"],m.question.text]]),Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("button",{class:"flex items-center primary_btn",type:"submit",disabled:m.loading},[m.loading?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",p)):Object(n["createCommentVNode"])("",!0),Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(m.loading?"Processing...":"Submit Question"),1)],8,b)])],544)])])}c("d3b7"),c("159b"),c("a434"),c("b0c0"),c("e9c4"),c("d81d"),c("4de4"),c("caad"),c("2532");var h=c("2ef0"),f=c.n(h),j=c("4ed4"),g={data:function(){return{question:{subject:"",chapter:"",text:"",images:[],time:(new Date).toLocaleString()},allsubjects:[],subjects:[],chapters:[],subject:"",chapter:"",questionData:{},loading:!1,valid:!0,submitted:!1,requiredRules:[function(e){return!!e||"This field is required"}]}},methods:{uploadImage:function(e){var t=this;e.target.files.forEach((function(e){var c=new FileReader;c.onloadend=function(){t.question.images.push(c.result)},c.readAsDataURL(e)}))},deleteImage:function(e){this.question.images.splice(e,1)},submitQuestion:function(){var e=this;if(this.$refs.form.checkValidity()){this.loading=!this.loading;var t=this.question,c=t.subject,n=t.chapter,o=t.text,i=t.images,a=t.time,s=JSON.parse(localStorage.getItem("s25_25ssrb")),r=s.name,l=s.roll;this.questionData={subject:c,images:i,question:[a,r,l,c,n,o]};var u="https://script.google.com/macros/s/AKfycbwY9ggmEmsGViArUyBsZjdOR5HotmJ6MhM9LYHIpJpR53mrmsLmgeCmLBOYHtVoeXw/exec";fetch(u,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify(this.questionData)}).then((function(){e.loading=!e.loading,e.$swal({icon:"success",title:"Successfully submitted"}).then((function(){e.$refs.form.reset(),e.question={subject:"",chapter:"",text:"",images:[],time:(new Date).toLocaleString()},e.subject="",e.chapter="",e.valid=!0,e.submitted=!0,setTimeout((function(){e.submitted=!1}),3e3)}))})).catch((function(e){return console.log(e)}))}},getSubjects:function(){this.question.chapter="",this.allsubjects=j["a"].routines,this.subjects=f.a.union(this.allsubjects.filter((function(e){return e.ss22})).map((function(e){return e.subject})))},getChapters:function(){var e=this;this.chapters=[],this.allsubjects.forEach((function(t){t.subject===e.question.subject&&(e.chapters.includes(t.chapter)||e.chapters.push(t.chapter))}))}},created:function(){this.getSubjects()}},O=(c("2cea"),c("6b0d")),v=c.n(O);const k=v()(g,[["render",m],["__scopeId","data-v-3924e3a4"]]);t["default"]=k}}]);