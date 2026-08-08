import { proxy, useSnapshot } from "valtio";

const state = proxy({
    intro:true,
    activeTab: 'watch',
    selected_strap:'strap_metal',
    strapType:'metal',
    leatherColor:'#ffff00',
    
})
export {state}