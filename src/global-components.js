import Close from "./components/Close.vue"
import Button from "./components/Button.vue"
import PaginationBtn from "./components/PaginationBtn.vue"
import PaginationNav from "./components/PaginationNav.vue"
import ItemList from "./components/ItemList.vue"
import CardData from "./components/CardData.vue"

export default {
    install(app){
        app.component('Close',Close)
        app.component('Button',Button)
        app.component('PaginationBtn',PaginationBtn)
        app.component('PaginationNav',PaginationNav)
        app.component('ItemList',ItemList)
        app.component('CardData',CardData)
    }
}
