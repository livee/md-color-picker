"use strict"
import colors from 'material-colors/dist/colors'
import _map from 'lodash.map'
import _omit from 'lodash.omit'
import { Grid } from './Picker/Grid'
import './Picker/index.scss'
import icon from './icons/paint.svg'
import { MDCRipple, MDCRippleFoundation, util } from '@material/ripple';
import EventEmitter from 'wolfy87-eventemitter'

/**
 * @typedef ColorPickerConfig
 * @type {object}
 * @property {string} elementName 
 * @property {boolean} createIcon
 * @property {string} defaultColor
 */


/**
 * 
 * @param {Object} object 
 * @return {string[][]}
 */
const extract = (object) =>
    _map(object, (item) => _map(item))
/**
 * @param {ColorPickerConfig} config
 * @return {EventEmitter}
 */
export const MdColorPicker = ({elementName, createIcon, defaultColor}) => {

    const ee = new EventEmitter()
    const element = document.getElementById(elementName);
    const omitedColors = ['black', 'white', 'lightText', 'lightIcons', 'darkText', 'darkIcons']
    const materialColors = extract(_omit(colors, omitedColors))

    const materialNoAccent = materialColors.map((elem) =>
        elem.filter((color, index) => index <= 9)
    )

    const container = document.createElement("div")
    container.setAttribute("class", "color-container")

    const toggle = (force) => {
        if (container.getAttribute("class") === "color-container" && force!==false)
            container.setAttribute("class", "color-container-open")
        else
            container.setAttribute("class", "color-container")
        return false
    }
    Grid(container, materialNoAccent,ee)
    /**
     * @param {HTMLElement} element 
     */
    const hideOnBlur =  (element)=>{
        element.addEventListener("blur",(event)=>{
            toggle(false)
        })
    }
    

    if(createIcon){   
        const image = document.createElement("div")
        image.innerHTML = icon
        image.setAttribute("class", "round-btn mdc-elevation--z1")
        const ripple = new MDCRipple(image);
        image.addEventListener("click",toggle)
        element.appendChild(image)
        image.firstElementChild.style.fill = defaultColor
        ee.on("color-changed",(color)=>{
            image.firstElementChild.style.fill = color;
            return false
        })
        hideOnBlur(image)
        element.appendChild(container)

    } else {
        element.parentElement.appendChild(container)
        element.addEventListener("click",toggle)
        hideOnBlur(element)
    }
    ee.on("grid_closed",toggle)
    return ee
}
export default MdColorPicker
if(window)
    window["MdColorPicker"] = MdColorPicker