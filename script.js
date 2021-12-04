var form =   $(".form")[0]
var input1 = $(".input1")[0]
var input2 = $(".input2")[0]
var select = $("#select")[0]
var showResult = $(".showResult")[0]

form.addEventListener("submit", function(prevent){
    prevent.preventDefault()

    let valueInput1 = input1.value
    let valueInput2 = input2.value
    let valueSelect = select.selectedIndex
    let result

    switch(valueSelect){
        case 0:
            window.alert("Informe a sua operação!")
            break
            
        case 1:
            result = Number(valueInput1) + Number(valueInput2)
            showResult.value = result
            break
            
        case 2:
            result = Number(valueInput1) - Number(valueInput2)
            showResult.value = result
            break
                
        case 3:
            result = Number(valueInput1) * Number(valueInput2)
            showResult.value = result
            break
                
        case 4:
            result = Number(valueInput1) / Number(valueInput2)
            showResult.value = result
            break
                
        case 5:
            result = Number(valueInput1) ** Number(valueInput2)
            showResult.value = result
            break
                
        case 6:
            result = Number(valueInput1) % Number(valueInput2)
            showResult.value = result
            break
    }
})
