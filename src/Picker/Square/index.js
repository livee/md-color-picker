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

    square.addEventListener("click", ()=>{
        ee.trigger("color-changed",[color])
        ee.trigger("grid_closed",null)
    })

    square.style.backgroundColor = color
    element.appendChild(square)
}