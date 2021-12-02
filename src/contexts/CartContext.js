import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const addItem = (data, cantidad) => {
        if (isInCart(data)) {
            products.map(prod => {
                if (prod.id === data.id){
                    return prod.quantity += cantidad
                }
            })
        }else{
            setProducts(state => {
                return[...state, {...data, quantity: cantidad}]
            })
        }
    }

    const removeItem = (product) => {
        const dataFiltrada = products.filter((elem) => elem !== product)
        setProducts(dataFiltrada)
    }

    function clear() {
        setProducts([])
    }

    const isInCart = (data) => {
        return (products?.find(elem => elem.id === data.id) != null)
    }
    const totalItems = () => products.reduce((acum, items) => acum + items.quantity, 0)
    const totalPrice = () => products.reduce((acum, items) => acum + (items.price * items.quantity), 0)

    return(
        <CartContext.Provider value={{addItem, removeItem, clear, products, totalItems, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
} 

export default CartProvider