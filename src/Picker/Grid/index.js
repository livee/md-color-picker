"use strict"
import {Line} from '../Line'
import EventEmitter from 'wolfy87-eventemitter'

/**
 * 
 * @param {HTMLElement} element 
 * @param {string[][]} colors 
 * @param {EventEmitter} ee
 */
export const Grid = (element, colors, ee) => {
    const gridWrapper = document.createElement("div")
    gridWrapper.setAttribute("class","grid-wrapper")
    const close = document.createElement("div")
   // close.innerHTML="⨉"
    close.addEventListener("click",()=>window.dispatchEvent(new Event("grid_closed")))    
    close.setAttribute("class","close")
    const grid = document.createElement("div")
    grid.setAttribute("class","grid mdc-dialog__surface")
    colors.forEach((line)=>Line(grid, line,ee))
    gridWrapper.appendChild(close)
    gridWrapper.appendChild(grid)
    element.appendChild(gridWrapper)
}