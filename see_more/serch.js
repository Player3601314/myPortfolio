function searchFunc() {
    // let close = document.querySelector()
    let input = document.getElementById('searchApp').value.toUpperCase();
    let p = document.querySelectorAll('.monomarkaz,.form-food,.shops,.exam,.grid,.relax,.heartles,.mege,.responsive,.mountaine,.delicias,.restourant,.testomionals,.flag,.taste,.about,.way,.zone,#seaMore--h2');

    // for (let i = 0; i < li.length; i++) {
    //     let a = li[i].querySelectorAll('a')[0];

    //     if(a.innerHTML.toUpperCase().indexOf(input) > -1){
    //         li[i].style.display = 'block'
    //     }
    //     else{
    //         li[i].style.display = 'none'
    //     }
    // }
    function closeFunc() {

    }

    p.forEach((a) => {
        if(a.textContent.toUpperCase().includes(input)){
            a.style.display = "";
        }
        else{
            a.style.display = "none";
        }
    })
}