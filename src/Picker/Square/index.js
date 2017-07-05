"use strict"
import EventEmitter from 'wolfy87-eventemitter'

/**
 * 
 * @param {HTMLElement} element 
 * @param {string} color 
 * @param {EventEmitter} ee
 */
export const Square = (element, color, ee) => {
    const square = document.createElement("div")
    square.setAttribute("class","square grow")
    // mouse down event fires before the click event
    square.addEventListener("mousedown", (event)=>{
        event.stopImmediatePropagation()
        event.stopPropagation()
        
        ee.trigger("color-changed",[color])
        ee.trigger("grid_closed",null)
        
    })

    square.style.backgroundColor = color
    element.appendChild(square)
}