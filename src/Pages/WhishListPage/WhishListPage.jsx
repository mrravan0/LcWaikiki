import WhishList from "../../Components/WhishList/WhishList";
import photo1 from '../../Assets/Images/Women/photo1.jpg';
const WhishListPage = () => {
    const whishListData = [
        {
            photo: photo1,
            description: 'Женская футболка',
            price: '799,00',
            status: false
        },
    ]
    return <WhishList data={whishListData} />
}

export default WhishListPage;