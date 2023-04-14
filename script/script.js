//변수등록
const cateA = document.querySelectorAll('.cate_product > a')
const cateContents = document.querySelectorAll('.cate_contents')

console.log(cateA,cateContents)
//마우스를 올리면 contents보이기
    //a를 각자로 인식하도록 for설정
    for(let i in cateA){
        console.log(i)
        cateA[0].addEventListener('mouseover',()=>{
            cateA[0].st
            cateContents[i].style.display = 'flex'
        })
        cateA[0].addEventListener('mouseout',()=>{
            cateContents[i].style.display = 'none'
            cateContents[1].style.display = 'flex'
        })
    }
    //for(let i in li){
        //     // console.log(i)
        //     li[i].addEventListener('mouseover',()=>{
        //         li[i].style.background = '#ff0'
        //     })
        //     li[i].addEventListener('mouseout',()=>{
        //         li[i].style.background = 'none'
        //     })
        // }
        