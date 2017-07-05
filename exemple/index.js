import MdColorPicker from '../lib/MdColorPicker'

document.addEventListener('DOMContentLoaded', ()=>{
    console.log(document.getElementById("picker"))
    MdColorPicker({
        elementName:"picker",
        createIcon:true,
        defaultColor:'#212121'
    })
});