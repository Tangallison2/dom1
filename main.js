//document.createElement('div')
const div = dom.create("<div>NewDiv</div>");
const div2 = dom.create('<div id="parent"></div>');
console.log(div);
dom.after(test,div)
dom.before(test,div);
dom.append(test,div);
dom.wrap(test,div2);
dom.remove(test2);
const nodes =dom.empty(window.empty);
console.log(nodes)
dom.attr(test,'title','Hi,I am tang')
const title=dom.attr(test,'title');
console.log(`title:${title}`)
dom.text(test3,'你好，这是最新的内容')
console.log(dom.text(test3))
dom.html(html,'<span></span>')
console.log(dom.html(html))
dom.style(test3,{border:'1px solid red',color:'blue',width:'200px'})
dom.style(test3,'color','green')
console.log(dom.style(test3,'color'))
dom.class.add(test3,'red')

console.log(dom.class.has(test3,'red'))
dom.class.remove(test3,'red')
dom.on(test3,'click',()=>{
    console.log('点击了')
})
dom.off(test3,'click',()=>{
    console.log('点击了')
})
const testDiv = dom.find('#haha')[0]
console.log(testDiv)
const test4=dom.find('.red',testDiv)[1]
console.log(test4)

console.log(dom.parent(test3))
console.log(dom.children(haha)[1])
console.log(dom.siblings(dom.find('#s2')[0]))
console.log(dom.siblings(s2))
console.log(dom.next(s1))
console.log(dom.previous(s2))

const t=dom.find('#travel')[0]
dom.each(dom.children(t),(a)=>dom.style(a,'color','red'))
console.log(dom.index(s2))
console.log(dom.index(t3))

