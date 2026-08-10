import { proxy, useSnapshot } from "valtio";

const state = proxy({
    intro:true,
    activeTab: 'watch',
    selected_strap:'strap_gold',
    strapType:'Golden',
    leatherColor:'#bb8663',
    goldcolor:'#FFDC72'
    
})
export {state}