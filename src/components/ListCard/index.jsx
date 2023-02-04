import listmenu from "../../data/menu.json";

const ListCard = ({ name, image }) => {
    return (
        <div className="flex bg-[#B21600] mt-4 py-12 px-24 gap-12">
            <div className="flex flex-col w-80 h-80 bg-white shadow-black shadow">
                <img className="w-72 h-64 p-4 mx-auto" src={image} alt="card" />
                <span className="text-[#B21600] font-bold mx-auto">{name}</span>
            </div>
            <div className="flex flex-col">
            {
                listmenu.list_menu.map((menu) => {
                    return (
                        <div className="flex gap-12 my-auto">
                            <span className="text-white font-bold min-w-[300px] text-xl">{menu.name}</span>
                            <span className="text-[#FFD324] font-bold text-xl">{menu.price}</span>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ListCard;