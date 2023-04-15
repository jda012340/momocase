//변수등록
const cateA = document.querySelectorAll('.cate_product > a')
const cateContents = document.querySelectorAll('.cate_contents')

console.log(cateA,cateContents)



//마우스를 올리면 contents보이기
    //a를 각자로 인식하도록 for설정
    for(let i of cateContents){i.style.display='none'}
    cateContents[0].style.display = 'flex'

    cateA.forEach((a,index)=>{
        console.log(cateA)
        a.addEventListener('mouseover',()=>{
            for(let i of cateContents){i.style.display='none'}
            cateContents[index].style.display = 'flex'
        })
    })

    // 내꿈은 너야 조다영 ^^
    // 멋지다아 다영아~