import Close from "./components/Close.vue"
import Button from "./components/Button.vue"
import PaginationBtn from "./components/PaginationBtn.vue"
import PaginationNav from "./components/PaginationNav.vue"
import ItemList from "./components/ItemList.vue"
import CardData from "./components/CardData.vue"
import IconMusic from "./components/icons/IconMusic.vue"
import IconStart from "./components/icons/IconStart.vue"
import IconAleatory from "./components/icons/IconAleatory.vue"
import IconBackMain from "./components/icons/IconBackMain.vue"
import IconNext from "./components/icons/IconNext.vue"
import IconRePlay from "./components/icons/IconRePlay.vue"
import IconPlay from "./components/icons/IconPlay.vue"
import IconHeart from "./components/icons/IconHeart.vue"
import IconMore from "./components/icons/IconMore.vue"
import IconEllipsisVertical from "./components/icons/IconEllipsisVertical.vue"

export default {
    install(app){
        app.component('Close',Close)
        app.component('Button',Button)
        app.component('PaginationBtn',PaginationBtn)
        app.component('PaginationNav',PaginationNav)
        app.component('ItemList',ItemList)
        app.component('CardData',CardData)
        app.component('IconMusic',IconMusic)
        app.component('IconStart',IconStart)
        app.component('IconAleatory',IconAleatory)
        app.component('IconBackMain',IconBackMain)
        app.component('IconNext',IconNext)
        app.component('IconRePlay',IconRePlay)
        app.component('IconPlay',IconPlay)
        app.component('IconHeart',IconHeart)
        app.component('IconMore',IconMore)
        app.component('IconEllipsisVertical',IconEllipsisVertical)
    }
}
